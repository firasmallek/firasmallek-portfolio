window.addEventListener('DOMContentLoaded', function(event) {
    const apiBaseUrl = 'https://gsap.com/community/';
    const isUsingScrollSmoother =
        document.body.classList.contains('has-smooth-scroll');

    gsap.config({
        trialWarn: false
    });

    const watchPreferredMotion = (callback = () => {}) => {
        const mm = gsap.matchMedia();
        mm.add('(prefers-reduced-motion: no-preference)', callback);
    };

    //client side validation for strings
    function validateString(input) {
        const htmlTagPattern = /<\/?[a-z][\s\S]*>/i;
        return !htmlTagPattern.test(input) ? input : '';
    }

    // header UI population
    function formatTimeAgo(timestamp) {
        const now = new Date();
        const date = new Date(timestamp * 1000); // Convert to milliseconds

        const timeDifference = now - date;
        const minutesAgo = Math.floor(timeDifference / 60000); // 1 minute = 60,000 milliseconds
        const hoursAgo = Math.floor(minutesAgo / 60);

        if (minutesAgo < 1) {
            return 'Just now';
        } else if (minutesAgo < 60) {
            return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
        } else if (hoursAgo < 24) {
            return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
        } else {
            let options = {
                month: 'short',
                day: 'numeric'
            };
            return date.toLocaleDateString(undefined, options); // Default to a full date if it's more than 24 hours ago
        }
    }

    function ipsMemberPhoto(photo) {
        function isValidHttpUrl(string) {
            let url;

            try {
                url = new URL(string);
            } catch (_) {
                return false;
            }

            return url.protocol === 'http:' || url.protocol === 'https:';
        }

        if (isValidHttpUrl(photo)) {
            // It's a URL
            return photo;
        }
        let json = JSON.parse(photo);
        return (
            'data:image/svg+xml,' +
            encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" style="background:#' +
                json['color'] +
                '"><g><text text-anchor="middle" dy=".35em" x="512" y="512" fill="#fffce4" font-size="700" font-family="-apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif">' +
                json['letter'] +
                '</text></g></svg>'
            )
        );
    }

    function messageDropdown(data, alertCount) {
        if (!data.length) {
            return;
        }

        let container = document.querySelector('.feed--messages .feed__scroll');
        let count = document.querySelectorAll('.js-messages-button');

        count.forEach((button) => {
            button.dataset.count = alertCount;
            alertCount < 1 ?
                button.classList.add('hide-pseudo') :
                button.classList.remove('hide-pseudo');
        });

        let allMessages = '';

        data.forEach((message) => {
            let timestamp = message.lastCommentDate; // Unix timestamp in seconds
            let formattedDate = formatTimeAgo(timestamp);
            let validatedContent = validateString(message.content.plain);

            let messageHTML = `
				<article class="feed__item">
					<div class="user user--dark">
						<div class="user__avatar">
							<img src="${ipsMemberPhoto(message.author.photo)}" alt="${message.author.name}">
						</div>
						<div class="user__details">
							<p class="user__name">${message.author.name}</p>
							<p class="user__date">${formattedDate}</p>
						</div>
					</div>
					<div class="feed__item-content">
						<a class="feed__item-link heading-s truncate" href="${message.url.full}">
							${message.title}
						</a>
						<p class="body-s truncate">${validatedContent}</p>
					</div>
					${
						message['commentCount'] >= 1
							? `
							<div class="feed__item-comment">
								<span>${message.commentCount}</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
										stroke-width="2" d="M1 18a1 1 0 0 0 1.707.707l3.263-3.263h10.252A2.778 
										2.778 0 0 0 19 12.667v-8.89A2.778 2.778 0 0 0 16.222 1H3.778A2.778 
										2.778 0 0 0 1 3.778V18Z">
									</path>
								</svg>
							</div>
							`
							: ''
					}
				</article>
			`;

            allMessages += messageHTML;
        });

        container.innerHTML = allMessages;
    }

    function notificationDropdown(data, alertCount) {
        if (!data || !data.length) {
            return;
        }

        let container = document.querySelector(
            '.feed--notifications .feed__scroll'
        );
        let count = document.querySelectorAll('.js-notifications-button');

        count.forEach((button) => {
            button.dataset.count = alertCount;
            alertCount < 1 ?
                button.classList.add('hide-pseudo') :
                button.classList.remove('hide-pseudo');
        });

        let allNotifs = '';

        data.forEach((notif) => {
            let timestamp = notif.sentDate; // Unix timestamp in seconds
            let formattedDate = formatTimeAgo(timestamp);

            let notifHTML = `
				<article class="feed__item">
					<div class="user user--dark">
						<div class="user__avatar">
							<img src="${ipsMemberPhoto(notif.author.photo)}" alt="${notif.author.name}" />
						</div>
					</div>
					<div class="feed__item-content">
						<a class="feed__item-link heading-s truncate" href="${notif.url.full}">
							${notif.title}
						</a>
						<p class="body-s truncate">${formattedDate}</p>
					</div>
				</article>
			`;

            allNotifs += notifHTML;
        });

        container.innerHTML = allNotifs;
    }

    function accountDropdown(data) {
        let container = document.querySelector('.js-account-dropdown');

        let accountHTML = `<div class="user__avatar user__avatar--${
			data.group.name
		}">
				<img
						src="${ipsMemberPhoto(data.photo)}"
						alt="${data.name}"
				/>
		</div>
		<div class="user__details">
				<p class="user__name">${data.name}</p>
				<p class="user__email">${data.email}</p>
				<p class="user__plan user__plan--${data.group.name}">${data.group.name}</p>
		</div>`;

        container.innerHTML = accountHTML;
    }

    function mobileAccount(data) {
        let container = document.querySelector('.js-account-mobile');
        let subContainer = document.querySelector('.js-account-submenu');

        function getHTML(small) {
            return `<div class="user user--light ${small ? 'user--small' : ''}">
								<div class="user__avatar">
										<img src="${ipsMemberPhoto(data.photo)}" alt="${data.name}" />
								</div>
								<div class="user__details">
										<p class="user__name">${data.name}</p>
										<p class="user__email">${data.email}</p>
										<p class="user__plan">${data.group.name}</p>
								</div>
						</div>`;
        }

        container.innerHTML = getHTML(true);
        subContainer.innerHTML = getHTML();
    }

    function populateHeader() {
        function fetchData() {
            // console.log("fetch");
            const url = `${apiBaseUrl}index.php?app=gspages&module=ajax&controller=api`;
            const data = {
                query: `{core{me{name,email,group{name},photo,notificationCount,notifications(limit:30){title,content{plain},sentDate,unread,author{name,photo,url},url{full}},messengerNewCount},messengerConversations(limit:30){title,url{full},commentCount,author{name,photo,url},content{plain},lastCommentDate,isUnread}}}`
            };

            return fetch(url, {
                method: 'POST',
                body: JSON.stringify(data)
            }).then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                } else {
                    const key = response.headers.get('X-IPS-CSRFKEY');
                    // Save the CSRF key to a global variable on the window object
                    window.csrfKey = key;
                    // Get the hidden input element by its name attribute
                    const csrfInputElements = document.querySelectorAll(
                        'input[name="csrfKey"]'
                    );
                    if (csrfInputElements.length && key) {
                        csrfInputElements.forEach((el) => {
                            el.defaultValue = key;
                        });
                    }
                    const logOutLinks = document.querySelectorAll('.js-logout');
                    if (logOutLinks.length && key) {
                        logOutLinks.forEach((link) => {
                            // console.log("add logout link")
                            link.href = `${apiBaseUrl}logout/?csrfKey=${key}`;
                        });
                    }
                }

                return response.json();
            });
        }

        async function init() {
            try {
                const data = await fetchData();
                renderData(data);
            } catch (error) {
                console.error('An error occurred:', error);
                document.body.dataset.member = 'false';
            }
        }

        function renderData(json) {
            // console.log("render UI")
            json.core.me.email ?
                (document.body.dataset.member = 'true') :
                (document.body.dataset.member = 'false');

            notificationDropdown(
                json.core.me.notifications,
                json.core.me.notificationCount
            );
            messageDropdown(
                json.core.messengerConversations,
                json.core.me.messengerNewCount
            );
            accountDropdown(json.core.me);
            mobileAccount(json.core.me);
        }

        init();
    }

    populateHeader();

    const onFocus = () => {
        populateHeader();
    };
    window.addEventListener('focus', onFocus);
    document.addEventListener('visibilitychange', onFocus);

    class Header {
        init() {
            this.selector = gsap.utils.selector('header.header');

            const DOM = {
                toggle: document.getElementById('menu-toggle'),
                headerLinks: document.querySelectorAll('.header__menu-link'),
                mobileNav: document.getElementById('mobile-nav'),
                mobileNavToggle: document.getElementById('mobile-nav-toggle'),
                mobileNavBackground: document.getElementById('mobile-nav-background'),
                mobileNavPanel1: document.getElementById('mobile-nav-panel-1'),
                mobileNavPanel2: document.getElementById('mobile-nav-panel-2'),
                accordion: document.getElementById('mobile-nav-accordion'),
                accordionIconPaths: document.querySelectorAll('#accordion-icon path'),
                get togglePaths() {
                    return DOM.toggle.querySelectorAll('path');
                },
                get togglePathTop() {
                    return DOM.togglePaths[0];
                },
                get togglePathMiddle() {
                    return DOM.togglePaths[1];
                },
                get togglePathBottom() {
                    return DOM.togglePaths[2];
                },
                subMenus: document.querySelectorAll('.header__menu-item--has-submenu'),
                logo: this.selector('.header__logo')[0],
                logoLetters: this.selector('.header__logo-text svg'),
                logoLettersPath: this.selector('.header__logo-text svg path'),
                logoG: this.selector('.header__logo-text svg:first-of-type > path'),
                logoGLine: this.selector('.header__logo-text span'),
                logoS: this.selector(
                    '.header__logo-text svg:last-of-type path:first-of-type'
                ),
                logoA: this.selector(
                    '.header__logo-text svg:last-of-type path:nth-of-type(2)'
                ),
                logoP: this.selector(
                    '.header__logo-text svg:last-of-type path:last-of-type'
                ),
                logoTimer: this.selector('.header__logo > svg:nth-of-type(1)'),
                logoBolt: this.selector('.header__logo > svg:nth-of-type(2)'),
                logoKeyHole: this.selector('.header__logo > svg:nth-of-type(3)'),
                logoFlower: this.selector('.header__logo > svg:nth-of-type(4)'),
                logoLine: this.selector('.header__logo-text-line'),
                mobileLoginOpen: document.getElementById('mobile-login-open'),
                mobileLoginClose: document.getElementById('mobile-login-close'),
                mobileAccountOpen: document.getElementById('mobile-account-open'),
                mobileAccountClose: document.getElementById('mobile-account-close')
            };
            this.DOM = DOM;

            this.state = {
                isOpen: false,
                logoIsAnimating: false,
                mobileSubMenuIsOpen: false,
                scrollTop: 0
            };

            this.openMenuClassList = ['mobile-menu-isopen', 'disable-page-scroll'];
            this.openAccountClassList = ['mobile-account-isopen'];
            this.openLoginClassList = ['mobile-login-isopen'];
            this.openSubMenuClass = 'submenu-is-open';

            gsap.set(this.DOM.mobileNav, {
                visibility: 'hidden'
            });
            gsap.set(this.DOM.mobileNavPanel1, {
                xPercent: -100
            });
            gsap.set(this.DOM.mobileNavPanel2, {
                xPercent: 100
            });

            this.logoTlEvents = {
                onComplete: () => {
                    this.state.logoIsAnimating = false;
                }
            };

            this.setupLogoTimeline1();
            this.setupLogoTimeline2();
            this.setupLogoTimeline3();
            this.setupLogoTimeline4();
            this.setupLogoTimeline5();
            this.setupMenuTimelines();
            this.setupBannerTimeline();
            this.setupAccordionTimelines();
            this.handleScrollBarsOnMenuOpen =
                this.handleScrollBarsOnMenuOpen.bind(this);
            this.handleScrollBarsOnMenuClose =
                this.handleScrollBarsOnMenuClose.bind(this);
        }

        setupLogoTimeline1() {
            const defaults = {
                ease: 'power4.inOut',
                duration: 0.5
            };

            this.tlLogo = gsap.timeline({
                paused: true,
                ...this.logoTlEvents
            });

            this.tlLogo.to(this.DOM.logoLetters[1], {
                keyframes: [{
                        x: 20,
                        ...defaults
                    },
                    {
                        x: 0,
                        delay: 0.1,
                        ...defaults
                    }
                ]
            });

            this.tlLogo.to(
                this.DOM.logoLine, {
                    keyframes: [{
                            scaleX: 1,
                            ...defaults
                        },
                        {
                            scaleX: 0.4,
                            delay: 0.1,
                            ...defaults
                        }
                    ]
                },
                0
            );
        }

        setupLogoTimeline2() {
            this.tlLogo2 = gsap.timeline({
                paused: true,
                defaults: {
                    duration: 1
                },
                ...this.logoTlEvents
            });

            this.tlLogo2.to(this.DOM.logoS, {
                keyframes: [{
                    opacity: 0
                }, {
                    opacity: 1,
                    delay: 1
                }],
                duration: 0.8,
                ease: 'none'
            });

            this.tlLogo2.to(
                this.DOM.logoBolt, {
                    keyframes: [{
                            opacity: 1,
                            scale: 1
                        },
                        {
                            opacity: 0,
                            scale: 0,
                            delay: 1
                        }
                    ],
                    duration: 0.8,
                    ease: 'none'
                },
                0
            );
        }

        setupLogoTimeline3() {
            this.tlLogo3 = gsap.timeline({
                paused: true,
                defaults: {
                    duration: 1
                },
                ...this.logoTlEvents
            });

            this.tlLogo3.to(this.DOM.logoA, {
                keyframes: [{
                    opacity: 0
                }, {
                    opacity: 1,
                    delay: 1
                }],
                duration: 0.8,
                ease: 'none'
            });

            this.tlLogo3.to(
                this.DOM.logoKeyHole, {
                    keyframes: [{
                            opacity: 1,
                            scale: 1
                        },
                        {
                            opacity: 0,
                            scale: 0,
                            delay: 1
                        }
                    ],
                    duration: 0.8,
                    ease: 'none'
                },
                0
            );
            this.tlLogo3.to(
                this.DOM.logoP, {
                    keyframes: [{
                        x: 13
                    }, {
                        x: 0,
                        delay: 1
                    }],
                    duration: 0.8,
                    ease: 'none'
                },
                0
            );
        }

        setupLogoTimeline4() {
            this.tlLogo4 = gsap.timeline({
                paused: true,
                defaults: {
                    duration: 1
                },
                ...this.logoTlEvents
            });

            this.tlLogo4.to([this.DOM.logoG, this.DOM.logoGLine], {
                keyframes: [{
                    opacity: 0
                }, {
                    opacity: 1,
                    delay: 1
                }],
                duration: 1.2,
                ease: 'none'
            });

            this.tlLogo4.to(
                this.DOM.logoTimer, {
                    keyframes: [{
                            opacity: 1,
                            scale: 0.95,
                            rotate: 360
                        },
                        {
                            opacity: 0,
                            scale: 0,
                            delay: 1
                        }
                    ],
                    duration: 1.2,
                    ease: 'none'
                },
                0
            );
            this.tlLogo4.to(
                this.DOM.logoLetters[1], {
                    keyframes: [{
                        x: 8
                    }, {
                        x: 0,
                        delay: 1
                    }],
                    duration: 1.2,
                    ease: 'none'
                },
                0
            );
        }

        setupLogoTimeline5() {
            this.tlLogo5 = gsap.timeline({
                paused: true,
                defaults: {
                    duration: 1
                },
                ...this.logoTlEvents
            });

            this.tlLogo5.to(this.DOM.logoP, {
                keyframes: [{
                    opacity: 0
                }, {
                    opacity: 1,
                    delay: 1.3
                }],
                duration: 1.2,
                ease: 'none'
            });

            this.tlLogo5.to(
                this.DOM.logoFlower, {
                    keyframes: [{
                            opacity: 1,
                            scale: 1
                        },
                        {
                            opacity: 0,
                            scale: 0,
                            rotate: 360,
                            delay: 1
                        }
                    ],
                    duration: 1.2,
                    ease: 'none'
                },
                0
            );
        }

        setupMenuTimelines() {
            // Menu toggle timeline
            this.tlMenuToggle = gsap.timeline({
                paused: true,
                defaults: {
                    duration: 0.13,
                    ease: 'power2.inOut'
                }
            });

            this.tlMenuToggle
                .to(this.DOM.togglePathMiddle, {
                    opacity: 0,
                    scaleX: 0,
                    transformOrigin: '50% 50%'
                })
                .to(
                    this.DOM.togglePathTop, {
                        y: 6,
                        rotate: 45,
                        scaleX: 0.625,
                        transformOrigin: '50% 50%'
                    },
                    '>-0.1'
                )
                .to(
                    this.DOM.togglePathBottom, {
                        y: -6,
                        rotate: -45,
                        scaleX: 0.625,
                        transformOrigin: '50% 50%'
                    },
                    '<'
                )
                .to(
                    this.DOM.togglePaths, {
                        x: 4
                    },
                    0
                );

            let banner = document.querySelector('#webflow-banner');

            // Mobile menu timeline
            this.tlMobileMenu = gsap.timeline({
                paused: true,
                onStart: () => {
                    if (banner) {
                        gsap.set(banner, {
                            display: 'none',
                            autoAlpha: 0
                        });
                    }
                },
                onReverseComplete: () => {
                    // If the menu was scrolled previously return it to the top
                    gsap.set(this.DOM.mobileNav, {
                        scrollTop: 0
                    });
                    if (banner) {
                        gsap.set(banner, {
                            display: 'flex'
                        });
                        gsap.to(banner, {
                            autoAlpha: 1
                        });
                    }
                }
            });

            this.tlMobileMenu
                .fromTo(
                    this.DOM.mobileNav, {
                        visibility: 'hidden'
                    }, {
                        visibility: 'visible'
                    }
                )
                .to(
                    this.DOM.mobileNavBackground, {
                        opacity: 1,
                        ease: 'power3.out',
                        duration: 0.3
                    },
                    0
                )
                .to(
                    this.DOM.toggle, {
                        color: '#0e100f'
                    },
                    0
                )
                .to(
                    [this.DOM.logoG, this.DOM.logoLettersPath], {
                        fill: '#0E100F'
                    },
                    0
                )
                .to(
                    [this.DOM.logoGLine], {
                        backgroundColor: '#0E100F'
                    },
                    0
                )
                .fromTo(
                    this.DOM.mobileNavPanel1, {
                        xPercent: -100
                    }, {
                        xPercent: 0,
                        ease: 'power3.out',
                        duration: 0.3
                    },
                    0.2
                )
                .fromTo(
                    this.DOM.mobileNavPanel2, {
                        xPercent: 100
                    }, {
                        xPercent: 0,
                        ease: 'power3.out',
                        duration: 0.3
                    },
                    '<+0.1'
                );
        }

        setupBannerTimeline() {
            let banner = document.querySelector('#webflow-banner');

            if (!banner) return;

            //also return if banner is hidden
            let display = window.getComputedStyle(banner, null).display;
            if (display === 'none') return;

            ScrollTrigger.create({
                start: 'top top',
                end: '+=25',
                onLeave: () => {
                    gsap.to('#header', {
                        y: -50,
                        duration: 0.2
                    });
                },
                onEnterBack: () => {
                    gsap.to('#header', {
                        y: 0,
                        duration: 0.2
                    });
                }
            });
        }

        setupAccordionTimelines() {
            this.tlAccordionOpen = gsap.timeline({
                paused: true,
                onComplete: () => {
                    this.state.mobileSubMenuIsOpen = true;
                }
            });

            this.tlAccordionClose = gsap.timeline({
                paused: true,
                onComplete: () => {
                    this.state.mobileSubMenuIsOpen = false;
                }
            });

            gsap.set(this.DOM.accordion, {
                height: 0
            });

            this.tlAccordionOpen
                .to(this.DOM.accordionIconPaths, {
                    rotate: 90,
                    transformOrigin: '50% 50%',
                    duration: 0.2,
                    ease: 'power3.out'
                })
                .to(
                    this.DOM.accordionIconPaths[1], {
                        scale: 0,
                        transformOrigin: '50% 50%',
                        duration: 0.2,
                        ease: 'power3.out'
                    },
                    0
                )
                .to(
                    this.DOM.accordion, {
                        height: () => this.DOM.accordion.scrollHeight,
                        ease: 'power3.out',
                        duration: 0.4
                    },
                    0
                );

            this.tlAccordionClose
                .to(this.DOM.accordionIconPaths, {
                    rotate: 0,
                    transformOrigin: '50% 50%',
                    duration: 0.2,
                    ease: 'power3.in'
                })
                .to(
                    this.DOM.accordionIconPaths[1], {
                        scale: 1,
                        transformOrigin: '50% 50%',
                        duration: 0.2,
                        ease: 'power3.in'
                    },
                    0
                )
                .to(
                    this.DOM.accordion, {
                        height: 0,
                        ease: 'power3.in',
                        duration: 0.3
                    },
                    0
                );
        }

        handleScrollBarsOnMenuClose() {
            if (isUsingScrollSmoother) {
                ScrollSmoother.get().paused(false);
            } else {
                document.documentElement.scrollTop = this.state.scrollTop;
            }
        }

        handleScrollBarsOnMenuOpen() {
            if (isUsingScrollSmoother) {
                ScrollSmoother.get().paused(true);
            } else {
                this.state.scrollTop = document.documentElement.scrollTop;

                document.body.style.setProperty(
                    '--scrollTop',
                    `${-this.state.scrollTop}px`
                );
            }
        }

        closeMenu(ignoreScrollBars) {
            document.body.classList.remove(
                ...this.openMenuClassList,
                ...this.openAccountClassList,
                ...this.openLoginClassList
            );

            if (!ignoreScrollBars) {
                // this is an attempt to get around a bug where the page scrolls to the top on resize.
                // I don't want to remove this as it's a fix for a scrollbar bug - bteween a bug and a hard place here
                // let's test this and see how it goes
                this.handleScrollBarsOnMenuClose();
            }

            this.tlMenuToggle.reverse();
            this.tlMobileMenu.reverse();

            // Close the Tools menu if it is open
            if (this.state.mobileSubMenuIsOpen) {
                this.tlAccordionClose.play(0);
            }

            this.state.isOpen = false;
        }

        toggleMenu() {
            if (this.state.isOpen) {
                this.closeMenu();
            } else {
                this.handleScrollBarsOnMenuOpen();
                document.body.classList.add(...this.openMenuClassList);
                this.tlMenuToggle.play();
                this.tlMobileMenu.play();
                this.state.isOpen = true;
            }
        }

        toggleAccordion() {
            if (this.state.mobileSubMenuIsOpen) {
                this.tlAccordionClose.play(0);
            } else {
                this.tlAccordionOpen.play(0);
            }
        }

        playLogoTl() {
            if (this.state.logoIsAnimating) return;

            this.state.logoIsAnimating = true;

            const tl = gsap.utils.random([
                this.tlLogo,
                this.tlLogo2,
                this.tlLogo3,
                this.tlLogo4,
                this.tlLogo5
            ]);

            tl.play(0);
        }

        closeAccessibleSubMenus() {
            Array.prototype.forEach.call(this.DOM.subMenus, ($subMenu) => {
                const $toggle = $subMenu.querySelector('.header__submenu-toggle');

                $toggle.setAttribute('aria-expanded', false);
                $subMenu.classList.remove(this.openSubMenuClass);
            });
        }

        initEvents() {
            this.DOM.toggle.addEventListener('click', () => {
                this.toggleMenu();
            });

            this.DOM.mobileNavToggle.addEventListener('click', () => {
                this.toggleAccordion();
            });

            this.DOM.mobileAccountOpen.addEventListener('click', () => {
                document.body.classList.add(...this.openAccountClassList);
            });

            this.DOM.mobileAccountClose.addEventListener('click', () => {
                document.body.classList.remove(...this.openAccountClassList);
            });

            this.DOM.mobileLoginOpen.addEventListener('click', () => {
                document.body.classList.add(...this.openLoginClassList);
            });

            this.DOM.mobileLoginClose.addEventListener('click', () => {
                document.body.classList.remove(...this.openLoginClassList);
            });

            // Handle keyboard accessibility

            Array.prototype.forEach.call(this.DOM.headerLinks, ($link) => {
                $link.addEventListener('focus', () => {
                    this.closeAccessibleSubMenus();
                });

                $link.addEventListener('mouseenter', () => {
                    this.closeAccessibleSubMenus();
                });
            });

            Array.prototype.forEach.call(this.DOM.subMenus, ($subMenu) => {
                const $toggle = $subMenu.querySelector('.header__submenu-toggle');

                $toggle.addEventListener('click', () => {
                    $toggle.setAttribute(
                        'aria-expanded',
                        $subMenu.classList.contains(this.openSubMenuClass) ? false : true
                    );
                    $subMenu.classList.toggle(this.openSubMenuClass);
                });
            });

            // When the user clicks outside of the header close any open submenus

            document.addEventListener('click', (event) => {
                const $header = document.getElementById('header');

                if (!$header.contains(event.target) && event.target !== $header) {
                    this.closeAccessibleSubMenus();
                }
            });

            // Handle resize

            window.addEventListener('resize', () => {
                if (window.innerWidth >= 1240) {
                    this.closeMenu(true);
                }
            });

            watchPreferredMotion(() => {
                this.DOM.logo.addEventListener('mousemove', () => {
                    this.playLogoTl();
                });
            });
        }
    }
    const GSAPHeader = new Header();
    GSAPHeader.init();
    GSAPHeader.initEvents();

    // these are header specific and should be in the header class
    let userHeader = document.querySelector('.js-account-dropdown');
    userHeader.addEventListener('click', () => {
        window.location.href = `${apiBaseUrl}account-dashboard`;
    });

    let notificationsButton = document.querySelectorAll(
        '.js-notifications-button'
    );
    let killInProgress = false;
    async function killViewedNotifications() {
        killInProgress = true;

        const graphqlMutation = `mutation markNotificationsRead {mutateCore {markNotificationRead {id}}}`;

        try {
            const url = `${apiBaseUrl}index.php?app=gspages&module=ajax&controller=api`;

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: graphqlMutation
                })
            });

            if (!response.ok) {
                console.log('request failed');
                throw new Error('Request failed');
            }

            function nullCount() {
                let count = document.querySelectorAll('.js-notifications-button');

                count.forEach((count) => {
                    count.dataset.count = 0;
                    count.classList.add('hide-pseudo');
                });

                killInProgress = false;
            }

            gsap.delayedCall(3, nullCount);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    notificationsButton.forEach((button) => {
        button.addEventListener('mouseenter', () => {
            if (button.dataset.count > 0 && killInProgress === false) {
                killViewedNotifications(); // Call the function
            }
        });
    });

    class Button {
        constructor(buttonElement) {
            this.block = buttonElement;
            this.init();
            this.initEvents();
        }

        init() {
            const el = gsap.utils.selector(this.block);

            this.DOM = {
                button: this.block,
                flair: el('.button__flair')
            };

            this.xSet = gsap.quickSetter(this.DOM.flair, 'xPercent');
            this.ySet = gsap.quickSetter(this.DOM.flair, 'yPercent');
            this.hasFill = this.DOM.button.classList.contains('button--fill');
        }

        getXY(e) {
            const {
                left,
                top,
                width,
                height
            } =
            this.DOM.button.getBoundingClientRect();

            const xTransformer = gsap.utils.pipe(
                gsap.utils.mapRange(0, width, 0, 100),
                gsap.utils.clamp(0, 100)
            );

            const yTransformer = gsap.utils.pipe(
                gsap.utils.mapRange(0, height, 0, 100),
                gsap.utils.clamp(0, 100)
            );

            return {
                x: xTransformer(e.clientX - left),
                y: yTransformer(e.clientY - top)
            };
        }

        initEvents() {
            this.DOM.button.addEventListener('mouseenter', (e) => {
                const {
                    x,
                    y
                } = this.getXY(e);

                this.xSet(x);
                this.ySet(y);

                if (this.hasFill) {
                    gsap.to(this.DOM.flair, {
                        opacity: 1,
                        duration: 1,
                        ease: 'power2.out'
                    });
                } else {
                    gsap.to(this.DOM.flair, {
                        scale: 1,
                        duration: 0.4,
                        ease: 'power2.out'
                    });
                }
            });

            this.DOM.button.addEventListener('mouseleave', (e) => {
                const {
                    x,
                    y
                } = this.getXY(e);

                gsap.killTweensOf(this.DOM.flair);

                if (this.hasFill) {
                    gsap.to(this.DOM.flair, {
                        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
                        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
                        opacity: 0,
                        duration: 1,
                        ease: 'power2.out'
                    });
                } else {
                    gsap.to(this.DOM.flair, {
                        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
                        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
                        scale: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            });

            this.DOM.button.addEventListener('mousemove', (e) => {
                const {
                    x,
                    y
                } = this.getXY(e);

                gsap.to(this.DOM.flair, {
                    xPercent: x,
                    yPercent: y,
                    duration: this.hasFill ? 1 : 0.4,
                    ease: 'power2'
                });
            });
        }
    }
    // we handle buttons in a component in docusaurus or the SPA routing breaks them, do not use the button data attr in the docs.
    const buttonElements = document.querySelectorAll('[data-block="button"]');
    // Create instances of the Button class for each button element.
    buttonElements.forEach((buttonElement) => {
        new Button(buttonElement);
    });

    class Footer {
        init() {
            const DOM = {
                emailForm: document.querySelector('.footer-global__form'),
                emailInput: document.querySelector('#email'),
                emailFeedback: document.querySelector('.js-email-feedback')
            };
            this.DOM = DOM;
        }

        initEvents() {
            this.DOM.emailForm.addEventListener('submit', (event) =>
                this.redirectToNewsletter(event)
            );
        }

        redirectToNewsletter(event) {
            event.preventDefault(); // Prevent form submission
            const email = document.getElementById('email').value;
            // Encode the email to safely pass it in the URL
            const encodedEmail = encodeURIComponent(email);
            let redirectURL = `https://gsap.com/newsletter.html?email=${encodedEmail}`;
            // Redirect user to the newsletter page with email as a query parameter
            window.location.href = redirectURL;
        }
    }
    const GSAPFooter = new Footer();
    GSAPFooter.init();
    GSAPFooter.initEvents();

    // this only runs on the main site and the docs
    if (!document.body.classList.contains('ipsApp')) {
        function setCookie(name, value, days) {
            let expires = '';
            if (days) {
                let date = new Date();
                date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
                expires = '; expires=' + date.toUTCString();
            }
            document.cookie = name + '=' + (value || '') + expires + '; path=/';
        }
        let ref =
            typeof URLSearchParams !== 'undefined' &&
            new URLSearchParams(window.location.search).get('_rid');
        ref && setCookie('ips4_referred_by', ref, 30);
    }

    welcomeMsg = () => {
        let msg = '%c 💚 Something wrong? Email info@greensock.com 💚';
        let styles = [
            'font-size: 12px',
            'color: #fffce1',
            'font-family: monospace',
            'background: #0e100f',
            'display: inline-block',
            'padding: 1rem 3rem',
            'border: 1px solid #fffce1',
            'border-radius: 4px;'
        ].join(';');
        console.log(msg, styles);
    };

    welcomeMsg();
});