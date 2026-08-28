(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const n of i)
            if (n.type === "childList")
                for (const s of n.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function t(i) {
        const n = {};
        return i.integrity && (n.integrity = i.integrity), i.referrerPolicy && (n.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? n.credentials = "include" : i.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const n = t(i);
        fetch(i.href, n)
    }
})();
class xd {
    constructor() {
        this.blocks = document.querySelectorAll("[data-block]"), this.init()
    }
    init() {
        this.blocks.forEach(e => {
            const t = e.getAttribute("data-block");
            this.createBlock(t, e)
        })
    }
    createBlock() {
        return console.error("No createBlock for this factory"), null
    }
}

function jr(o) {
    if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o
}

function Qc(o, e) {
    o.prototype = Object.create(e.prototype), o.prototype.constructor = o, o.__proto__ = e
}
/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var _r = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    Fn = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    Rl, Mt, Je, Mr = 1e8,
    Ue = 1 / Mr,
    Ya = Math.PI * 2,
    Td = Ya / 4,
    kd = 0,
    Zc = Math.sqrt,
    Sd = Math.cos,
    Pd = Math.sin,
    wt = function(e) {
        return typeof e == "string"
    },
    nt = function(e) {
        return typeof e == "function"
    },
    oi = function(e) {
        return typeof e == "number"
    },
    Nl = function(e) {
        return typeof e > "u"
    },
    Wr = function(e) {
        return typeof e == "object"
    },
    Jt = function(e) {
        return e !== !1
    },
    Fl = function() {
        return typeof window < "u"
    },
    Jo = function(e) {
        return nt(e) || wt(e)
    },
    Jc = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
    Ft = Array.isArray,
    Md = /random\([^)]+\)/g,
    Ed = /,\s*/g,
    vu = /(?:-?\.?\d|\.)+/gi,
    ef = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    bn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    ha = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    tf = /[+-]=-?[.\d]+/,
    Cd = /[^,'"\[\]\s]+/gi,
    Od = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    tt, Fr, Xa, Il, mr = {},
    Bs = {},
    rf, nf = function(e) {
        return (Bs = In(e, mr)) && ir
    },
    $l = function(e, t) {
        return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    },
    Lo = function(e, t) {
        return !t && console.warn(e)
    },
    of = function(e, t) {
        return e && (mr[e] = t) && Bs && (Bs[e] = t) || mr
    },
    Ro = function() {
        return 0
    },
    Dd = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    },
    bs = {
        suppressEvents: !0,
        kill: !1
    },
    Ad = {
        suppressEvents: !0
    },
    Bl = {},
    bi = [],
    Va = {},
    sf, lr = {},
    da = {},
    wu = 30,
    xs = [],
    zl = "",
    Yl = function(e) {
        var t = e[0],
            r, i;
        if (Wr(t) || nt(t) || (e = [e]), !(r = (t._gsap || {}).harness)) {
            for (i = xs.length; i-- && !xs[i].targetTest(t););
            r = xs[i]
        }
        for (i = e.length; i--;) e[i] && (e[i]._gsap || (e[i]._gsap = new Of(e[i], r))) || e.splice(i, 1);
        return e
    },
    Hi = function(e) {
        return e._gsap || Yl(Er(e))[0]._gsap
    },
    af = function(e, t, r) {
        return (r = e[t]) && nt(r) ? e[t]() : Nl(r) && e.getAttribute && e.getAttribute(t) || r
    },
    er = function(e, t) {
        return (e = e.split(",")).forEach(t) || e
    },
    at = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    et = function(e) {
        return Math.round(e * 1e7) / 1e7 || 0
    },
    Pn = function(e, t) {
        var r = t.charAt(0),
            i = parseFloat(t.substr(2));
        return e = parseFloat(e), r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
    },
    Ld = function(e, t) {
        for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r;);
        return i < r
    },
    zs = function() {
        var e = bi.length,
            t = bi.slice(0),
            r, i;
        for (Va = {}, bi.length = 0, r = 0; r < e; r++) i = t[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
    },
    Xl = function(e) {
        return !!(e._initted || e._startAt || e.add)
    },
    lf = function(e, t, r, i) {
        bi.length && !Mt && zs(), e.render(t, r, i || !!(Mt && t < 0 && Xl(e))), bi.length && !Mt && zs()
    },
    uf = function(e) {
        var t = parseFloat(e);
        return (t || t === 0) && (e + "").match(Cd).length < 2 ? t : wt(e) ? e.trim() : e
    },
    cf = function(e) {
        return e
    },
    yr = function(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e
    },
    Rd = function(e) {
        return function(t, r) {
            for (var i in r) i in t || i === "duration" && e || i === "ease" || (t[i] = r[i])
        }
    },
    In = function(e, t) {
        for (var r in t) e[r] = t[r];
        return e
    },
    bu = function o(e, t) {
        for (var r in t) r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = Wr(t[r]) ? o(e[r] || (e[r] = {}), t[r]) : t[r]);
        return e
    },
    Ys = function(e, t) {
        var r = {},
            i;
        for (i in e) i in t || (r[i] = e[i]);
        return r
    },
    ho = function(e) {
        var t = e.parent || tt,
            r = e.keyframes ? Rd(Ft(e.keyframes)) : yr;
        if (Jt(e.inherit))
            for (; t;) r(e, t.vars.defaults), t = t.parent || t._dp;
        return e
    },
    Nd = function(e, t) {
        for (var r = e.length, i = r === t.length; i && r-- && e[r] === t[r];);
        return r < 0
    },
    ff = function(e, t, r, i, n) {
        r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
        var s = e[i],
            a;
        if (n)
            for (a = t[n]; s && s[n] > a;) s = s._prev;
        return s ? (t._next = s._next, s._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = s, t.parent = t._dp = e, t
    },
    oa = function(e, t, r, i) {
        r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
        var n = t._prev,
            s = t._next;
        n ? n._next = s : e[r] === t && (e[r] = s), s ? s._prev = n : e[i] === t && (e[i] = n), t._next = t._prev = t.parent = null
    },
    Si = function(e, t) {
        e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
    },
    Gi = function(e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
            for (var r = e; r;) r._dirty = 1, r = r.parent;
        return e
    },
    Fd = function(e) {
        for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
        return e
    },
    qa = function(e, t, r, i) {
        return e._startAt && (Mt ? e._startAt.revert(bs) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i))
    },
    Id = function o(e) {
        return !e || e._ts && o(e.parent)
    },
    xu = function(e) {
        return e._repeat ? $n(e._tTime, e = e.duration() + e._rDelay) * e : 0
    },
    $n = function(e, t) {
        var r = Math.floor(e = et(e / t));
        return e && r === e ? r - 1 : r
    },
    Xs = function(e, t) {
        return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    },
    sa = function(e) {
        return e._end = et(e._start + (e._tDur / Math.abs(e._ts || e._rts || Ue) || 0))
    },
    aa = function(e, t) {
        var r = e._dp;
        return r && r.smoothChildTiming && e._ts && (e._start = et(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), sa(e), r._dirty || Gi(r, e)), e
    },
    hf = function(e, t) {
        var r;
        if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = Xs(e.rawTime(), t), (!t._dur || Uo(0, t.totalDuration(), r) - t._tTime > Ue) && t.render(r, !0)), Gi(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (r = e; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
            e._zTime = -Ue
        }
    },
    zr = function(e, t, r, i) {
        return t.parent && Si(t), t._start = et((oi(r) ? r : r || e !== tt ? Tr(e, r, t) : e._time) + t._delay), t._end = et(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), ff(e, t, "_first", "_last", e._sort ? "_start" : 0), Wa(t) || (e._recent = t), i || hf(e, t), e._ts < 0 && aa(e, e._tTime), e
    },
    df = function(e, t) {
        return (mr.ScrollTrigger || $l("scrollTrigger", t)) && mr.ScrollTrigger.create(t, e)
    },
    pf = function(e, t, r, i, n) {
        if (ql(e, t, n), !e._initted) return 1;
        if (!r && e._pt && !Mt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && sf !== cr.frame) return bi.push(e), e._lazy = [n, i], 1
    },
    $d = function o(e) {
        var t = e.parent;
        return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || o(t))
    },
    Wa = function(e) {
        var t = e.data;
        return t === "isFromStart" || t === "isStart"
    },
    Bd = function(e, t, r, i) {
        var n = e.ratio,
            s = t < 0 || !t && (!e._start && $d(e) && !(!e._initted && Wa(e)) || (e._ts < 0 || e._dp._ts < 0) && !Wa(e)) ? 0 : 1,
            a = e._rDelay,
            c = 0,
            l, f, h;
        if (a && e._repeat && (c = Uo(0, e._tDur, t), f = $n(c, a), e._yoyo && f & 1 && (s = 1 - s), f !== $n(e._tTime, a) && (n = 1 - s, e.vars.repeatRefresh && e._initted && e.invalidate())), s !== n || Mt || i || e._zTime === Ue || !t && e._zTime) {
            if (!e._initted && pf(e, t, i, r, c)) return;
            for (h = e._zTime, e._zTime = t || (r ? Ue : 0), r || (r = t && !h), e.ratio = s, e._from && (s = 1 - s), e._time = 0, e._tTime = c, l = e._pt; l;) l.r(s, l.d), l = l._next;
            t < 0 && qa(e, t, r, !0), e._onUpdate && !r && pr(e, "onUpdate"), c && e._repeat && !r && e.parent && pr(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === s && (s && Si(e, 1), !r && !Mt && (pr(e, s ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
        } else e._zTime || (e._zTime = t)
    },
    zd = function(e, t, r) {
        var i;
        if (r > t)
            for (i = e._first; i && i._start <= r;) {
                if (i.data === "isPause" && i._start > t) return i;
                i = i._next
            } else
                for (i = e._last; i && i._start >= r;) {
                    if (i.data === "isPause" && i._start < t) return i;
                    i = i._prev
                }
    },
    Bn = function(e, t, r, i) {
        var n = e._repeat,
            s = et(t) || 0,
            a = e._tTime / e._tDur;
        return a && !i && (e._time *= s / e._dur), e._dur = s, e._tDur = n ? n < 0 ? 1e10 : et(s * (n + 1) + e._rDelay * n) : s, a > 0 && !i && aa(e, e._tTime = e._tDur * a), e.parent && sa(e), r || Gi(e.parent, e), e
    },
    Tu = function(e) {
        return e instanceof Ht ? Gi(e) : Bn(e, e._dur)
    },
    Yd = {
        _start: 0,
        endTime: Ro,
        totalDuration: Ro
    },
    Tr = function o(e, t, r) {
        var i = e.labels,
            n = e._recent || Yd,
            s = e.duration() >= Mr ? n.endTime(!1) : e._dur,
            a, c, l;
        return wt(t) && (isNaN(t) || t in i) ? (c = t.charAt(0), l = t.substr(-1) === "%", a = t.indexOf("="), c === "<" || c === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (c === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (l ? (a < 0 ? n : r).totalDuration() / 100 : 1)) : a < 0 ? (t in i || (i[t] = s), i[t]) : (c = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), l && r && (c = c / 100 * (Ft(r) ? r[0] : r).totalDuration()), a > 1 ? o(e, t.substr(0, a - 1), r) + c : s + c)) : t == null ? s : +t
    },
    po = function(e, t, r) {
        var i = oi(t[1]),
            n = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            s = t[n],
            a, c;
        if (i && (s.duration = t[1]), s.parent = r, e) {
            for (a = s, c = r; c && !("immediateRender" in a);) a = c.vars.defaults || {}, c = Jt(c.vars.inherit) && c.parent;
            s.immediateRender = Jt(a.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[n - 1]
        }
        return new ct(t[0], s, t[n + 1])
    },
    Ci = function(e, t) {
        return e || e === 0 ? t(e) : t
    },
    Uo = function(e, t, r) {
        return r < e ? e : r > t ? t : r
    },
    Rt = function(e, t) {
        return !wt(e) || !(t = Od.exec(e)) ? "" : t[1]
    },
    Xd = function(e, t, r) {
        return Ci(r, function(i) {
            return Uo(e, t, i)
        })
    },
    Ha = [].slice,
    gf = function(e, t) {
        return e && Wr(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Wr(e[0])) && !e.nodeType && e !== Fr
    },
    Vd = function(e, t, r) {
        return r === void 0 && (r = []), e.forEach(function(i) {
            var n;
            return wt(i) && !t || gf(i, 1) ? (n = r).push.apply(n, Er(i)) : r.push(i)
        }) || r
    },
    Er = function(e, t, r) {
        return Je && !t && Je.selector ? Je.selector(e) : wt(e) && !r && (Xa || !zn()) ? Ha.call((t || Il).querySelectorAll(e), 0) : Ft(e) ? Vd(e, r) : gf(e) ? Ha.call(e, 0) : e ? [e] : []
    },
    Ga = function(e) {
        return e = Er(e)[0] || Lo("Invalid scope") || {},
            function(t) {
                var r = e.current || e.nativeElement || e;
                return Er(t, r.querySelectorAll ? r : r === e ? Lo("Invalid scope") || Il.createElement("div") : e)
            }
    },
    _f = function(e) {
        return e.sort(function() {
            return .5 - Math.random()
        })
    },
    mf = function(e) {
        if (nt(e)) return e;
        var t = Wr(e) ? e : {
                each: e
            },
            r = ji(t.ease),
            i = t.from || 0,
            n = parseFloat(t.base) || 0,
            s = {},
            a = i > 0 && i < 1,
            c = isNaN(i) || a,
            l = t.axis,
            f = i,
            h = i;
        return wt(i) ? f = h = {
                center: .5,
                edges: .5,
                end: 1
            }[i] || 0 : !a && c && (f = i[0], h = i[1]),
            function(d, u, g) {
                var p = (g || t).length,
                    _ = s[p],
                    b, m, w, v, y, x, T, k, O;
                if (!_) {
                    if (O = t.grid === "auto" ? 0 : (t.grid || [1, Mr])[1], !O) {
                        for (T = -Mr; T < (T = g[O++].getBoundingClientRect().left) && O < p;);
                        O < p && O--
                    }
                    for (_ = s[p] = [], b = c ? Math.min(O, p) * f - .5 : i % O, m = O === Mr ? 0 : c ? p * h / O - .5 : i / O | 0, T = 0, k = Mr, x = 0; x < p; x++) w = x % O - b, v = m - (x / O | 0), _[x] = y = l ? Math.abs(l === "y" ? v : w) : Zc(w * w + v * v), y > T && (T = y), y < k && (k = y);
                    i === "random" && _f(_), _.max = T - k, _.min = k, _.v = p = (parseFloat(t.amount) || parseFloat(t.each) * (O > p ? p - 1 : l ? l === "y" ? p / O : O : Math.max(O, p / O)) || 0) * (i === "edges" ? -1 : 1), _.b = p < 0 ? n - p : n, _.u = Rt(t.amount || t.each) || 0, r = r && p < 0 ? Mf(r) : r
                }
                return p = (_[d] - _.min) / _.max || 0, et(_.b + (r ? r(p) : p) * _.v) + _.u
            }
    },
    ja = function(e) {
        var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function(r) {
            var i = et(Math.round(parseFloat(r) / e) * e * t);
            return (i - i % 1) / t + (oi(r) ? 0 : Rt(r))
        }
    },
    yf = function(e, t) {
        var r = Ft(e),
            i, n;
        return !r && Wr(e) && (i = r = e.radius || Mr, e.values ? (e = Er(e.values), (n = !oi(e[0])) && (i *= i)) : e = ja(e.increment)), Ci(t, r ? nt(e) ? function(s) {
            return n = e(s), Math.abs(n - s) <= i ? n : s
        } : function(s) {
            for (var a = parseFloat(n ? s.x : s), c = parseFloat(n ? s.y : 0), l = Mr, f = 0, h = e.length, d, u; h--;) n ? (d = e[h].x - a, u = e[h].y - c, d = d * d + u * u) : d = Math.abs(e[h] - a), d < l && (l = d, f = h);
            return f = !i || l <= i ? e[f] : s, n || f === s || oi(s) ? f : f + Rt(s)
        } : ja(e))
    },
    vf = function(e, t, r, i) {
        return Ci(Ft(e) ? !t : r === !0 ? !!(r = 0) : !i, function() {
            return Ft(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * .99)) / r) * r * i) / i
        })
    },
    qd = function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return function(i) {
            return t.reduce(function(n, s) {
                return s(n)
            }, i)
        }
    },
    Wd = function(e, t) {
        return function(r) {
            return e(parseFloat(r)) + (t || Rt(r))
        }
    },
    Hd = function(e, t, r) {
        return bf(e, t, 0, 1, r)
    },
    wf = function(e, t, r) {
        return Ci(r, function(i) {
            return e[~~t(i)]
        })
    },
    Gd = function o(e, t, r) {
        var i = t - e;
        return Ft(e) ? wf(e, o(0, e.length), t) : Ci(r, function(n) {
            return (i + (n - e) % i) % i + e
        })
    },
    jd = function o(e, t, r) {
        var i = t - e,
            n = i * 2;
        return Ft(e) ? wf(e, o(0, e.length - 1), t) : Ci(r, function(s) {
            return s = (n + (s - e) % n) % n || 0, e + (s > i ? n - s : s)
        })
    },
    No = function(e) {
        return e.replace(Md, function(t) {
            var r = t.indexOf("[") + 1,
                i = t.substring(r || 7, r ? t.indexOf("]") : t.length - 1).split(Ed);
            return vf(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5)
        })
    },
    bf = function(e, t, r, i, n) {
        var s = t - e,
            a = i - r;
        return Ci(n, function(c) {
            return r + ((c - e) / s * a || 0)
        })
    },
    Ud = function o(e, t, r, i) {
        var n = isNaN(e + t) ? 0 : function(u) {
            return (1 - u) * e + u * t
        };
        if (!n) {
            var s = wt(e),
                a = {},
                c, l, f, h, d;
            if (r === !0 && (i = 1) && (r = null), s) e = {
                p: e
            }, t = {
                p: t
            };
            else if (Ft(e) && !Ft(t)) {
                for (f = [], h = e.length, d = h - 2, l = 1; l < h; l++) f.push(o(e[l - 1], e[l]));
                h--, n = function(g) {
                    g *= h;
                    var p = Math.min(d, ~~g);
                    return f[p](g - p)
                }, r = t
            } else i || (e = In(Ft(e) ? [] : {}, e));
            if (!f) {
                for (c in t) Vl.call(a, e, c, "get", t[c]);
                n = function(g) {
                    return Gl(g, a) || (s ? e.p : e)
                }
            }
        }
        return Ci(r, n)
    },
    ku = function(e, t, r) {
        var i = e.labels,
            n = Mr,
            s, a, c;
        for (s in i) a = i[s] - t, a < 0 == !!r && a && n > (a = Math.abs(a)) && (c = s, n = a);
        return c
    },
    pr = function(e, t, r) {
        var i = e.vars,
            n = i[t],
            s = Je,
            a = e._ctx,
            c, l, f;
        if (n) return c = i[t + "Params"], l = i.callbackScope || e, r && bi.length && zs(), a && (Je = a), f = c ? n.apply(l, c) : n.call(l), Je = s, f
    },
    Zn = function(e) {
        return Si(e), e.scrollTrigger && e.scrollTrigger.kill(!!Mt), e.progress() < 1 && pr(e, "onInterrupt"), e
    },
    xn, xf = [],
    Tf = function(e) {
        if (e)
            if (e = !e.name && e.default || e, Fl() || e.headless) {
                var t = e.name,
                    r = nt(e),
                    i = t && !r && e.init ? function() {
                        this._props = []
                    } : e,
                    n = {
                        init: Ro,
                        render: Gl,
                        add: Vl,
                        kill: fp,
                        modifier: cp,
                        rawVars: 0
                    },
                    s = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Hl,
                        aliases: {},
                        register: 0
                    };
                if (zn(), e !== i) {
                    if (lr[t]) return;
                    yr(i, yr(Ys(e, n), s)), In(i.prototype, In(n, Ys(e, s))), lr[i.prop = t] = i, e.targetTest && (xs.push(i), Bl[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
                } of (t, i), e.register && e.register(ir, i, tr)
            } else xf.push(e)
    },
    Ge = 255,
    Jn = {
        aqua: [0, Ge, Ge],
        lime: [0, Ge, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, Ge],
        navy: [0, 0, 128],
        white: [Ge, Ge, Ge],
        olive: [128, 128, 0],
        yellow: [Ge, Ge, 0],
        orange: [Ge, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [Ge, 0, 0],
        pink: [Ge, 192, 203],
        cyan: [0, Ge, Ge],
        transparent: [Ge, Ge, Ge, 0]
    },
    pa = function(e, t, r) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (r - t) * e * 6 : e < .5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * Ge + .5 | 0
    },
    kf = function(e, t, r) {
        var i = e ? oi(e) ? [e >> 16, e >> 8 & Ge, e & Ge] : 0 : Jn.black,
            n, s, a, c, l, f, h, d, u, g;
        if (!i) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Jn[e]) i = Jn[e];
            else if (e.charAt(0) === "#") {
                if (e.length < 6 && (n = e.charAt(1), s = e.charAt(2), a = e.charAt(3), e = "#" + n + n + s + s + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & Ge, i & Ge, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & Ge, e & Ge]
            } else if (e.substr(0, 3) === "hsl") {
                if (i = g = e.match(vu), !t) c = +i[0] % 360 / 360, l = +i[1] / 100, f = +i[2] / 100, s = f <= .5 ? f * (l + 1) : f + l - f * l, n = f * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = pa(c + 1 / 3, n, s), i[1] = pa(c, n, s), i[2] = pa(c - 1 / 3, n, s);
                else if (~e.indexOf("=")) return i = e.match(ef), r && i.length < 4 && (i[3] = 1), i
            } else i = e.match(vu) || Jn.transparent;
            i = i.map(Number)
        }
        return t && !g && (n = i[0] / Ge, s = i[1] / Ge, a = i[2] / Ge, h = Math.max(n, s, a), d = Math.min(n, s, a), f = (h + d) / 2, h === d ? c = l = 0 : (u = h - d, l = f > .5 ? u / (2 - h - d) : u / (h + d), c = h === n ? (s - a) / u + (s < a ? 6 : 0) : h === s ? (a - n) / u + 2 : (n - s) / u + 4, c *= 60), i[0] = ~~(c + .5), i[1] = ~~(l * 100 + .5), i[2] = ~~(f * 100 + .5)), r && i.length < 4 && (i[3] = 1), i
    },
    Sf = function(e) {
        var t = [],
            r = [],
            i = -1;
        return e.split(xi).forEach(function(n) {
            var s = n.match(bn) || [];
            t.push.apply(t, s), r.push(i += s.length + 1)
        }), t.c = r, t
    },
    Su = function(e, t, r) {
        var i = "",
            n = (e + i).match(xi),
            s = t ? "hsla(" : "rgba(",
            a = 0,
            c, l, f, h;
        if (!n) return e;
        if (n = n.map(function(d) {
                return (d = kf(d, t, 1)) && s + (t ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")"
            }), r && (f = Sf(e), c = r.c, c.join(i) !== f.c.join(i)))
            for (l = e.replace(xi, "1").split(bn), h = l.length - 1; a < h; a++) i += l[a] + (~c.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (f.length ? f : n.length ? n : r).shift());
        if (!l)
            for (l = e.split(xi), h = l.length - 1; a < h; a++) i += l[a] + n[a];
        return i + l[h]
    },
    xi = function() {
        var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            e;
        for (e in Jn) o += "|" + e + "\\b";
        return new RegExp(o + ")", "gi")
    }(),
    Kd = /hsl[a]?\(/,
    Pf = function(e) {
        var t = e.join(" "),
            r;
        if (xi.lastIndex = 0, xi.test(t)) return r = Kd.test(t), e[1] = Su(e[1], r), e[0] = Su(e[0], r, Sf(e[1])), !0
    },
    Fo, cr = function() {
        var o = Date.now,
            e = 500,
            t = 33,
            r = o(),
            i = r,
            n = 1e3 / 240,
            s = n,
            a = [],
            c, l, f, h, d, u, g = function p(_) {
                var b = o() - i,
                    m = _ === !0,
                    w, v, y, x;
                if ((b > e || b < 0) && (r += b - t), i += b, y = i - r, w = y - s, (w > 0 || m) && (x = ++h.frame, d = y - h.time * 1e3, h.time = y = y / 1e3, s += w + (w >= n ? 4 : n - w), v = 1), m || (c = l(p)), v)
                    for (u = 0; u < a.length; u++) a[u](y, d, x, _)
            };
        return h = {
            time: 0,
            frame: 0,
            tick: function() {
                g(!0)
            },
            deltaRatio: function(_) {
                return d / (1e3 / (_ || 60))
            },
            wake: function() {
                rf && (!Xa && Fl() && (Fr = Xa = window, Il = Fr.document || {}, mr.gsap = ir, (Fr.gsapVersions || (Fr.gsapVersions = [])).push(ir.version), nf(Bs || Fr.GreenSockGlobals || !Fr.gsap && Fr || {}), xf.forEach(Tf)), f = typeof requestAnimationFrame < "u" && requestAnimationFrame, c && h.sleep(), l = f || function(_) {
                    return setTimeout(_, s - h.time * 1e3 + 1 | 0)
                }, Fo = 1, g(2))
            },
            sleep: function() {
                (f ? cancelAnimationFrame : clearTimeout)(c), Fo = 0, l = Ro
            },
            lagSmoothing: function(_, b) {
                e = _ || 1 / 0, t = Math.min(b || 33, e)
            },
            fps: function(_) {
                n = 1e3 / (_ || 240), s = h.time * 1e3 + n
            },
            add: function(_, b, m) {
                var w = b ? function(v, y, x, T) {
                    _(v, y, x, T), h.remove(w)
                } : _;
                return h.remove(_), a[m ? "unshift" : "push"](w), zn(), w
            },
            remove: function(_, b) {
                ~(b = a.indexOf(_)) && a.splice(b, 1) && u >= b && u--
            },
            _listeners: a
        }, h
    }(),
    zn = function() {
        return !Fo && cr.wake()
    },
    Ee = {},
    Qd = /^[\d.\-M][\d.\-,\s]/,
    Zd = /["']/g,
    Jd = function(e) {
        for (var t = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], n = 1, s = r.length, a, c, l; n < s; n++) c = r[n], a = n !== s - 1 ? c.lastIndexOf(",") : c.length, l = c.substr(0, a), t[i] = isNaN(l) ? l.replace(Zd, "").trim() : +l, i = c.substr(a + 1).trim();
        return t
    },
    ep = function(e) {
        var t = e.indexOf("(") + 1,
            r = e.indexOf(")"),
            i = e.indexOf("(", t);
        return e.substring(t, ~i && i < r ? e.indexOf(")", r + 1) : r)
    },
    tp = function(e) {
        var t = (e + "").split("("),
            r = Ee[t[0]];
        return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [Jd(t[1])] : ep(e).split(",").map(uf)) : Ee._CE && Qd.test(e) ? Ee._CE("", e) : r
    },
    Mf = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    },
    Ef = function o(e, t) {
        for (var r = e._first, i; r;) r instanceof Ht ? o(r, t) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== t && (r.timeline ? o(r.timeline, t) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = t)), r = r._next
    },
    ji = function(e, t) {
        return e && (nt(e) ? e : Ee[e] || tp(e)) || t
    },
    cn = function(e, t, r, i) {
        r === void 0 && (r = function(c) {
            return 1 - t(1 - c)
        }), i === void 0 && (i = function(c) {
            return c < .5 ? t(c * 2) / 2 : 1 - t((1 - c) * 2) / 2
        });
        var n = {
                easeIn: t,
                easeOut: r,
                easeInOut: i
            },
            s;
        return er(e, function(a) {
            Ee[a] = mr[a] = n, Ee[s = a.toLowerCase()] = r;
            for (var c in n) Ee[s + (c === "easeIn" ? ".in" : c === "easeOut" ? ".out" : ".inOut")] = Ee[a + "." + c] = n[c]
        }), n
    },
    Cf = function(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
        }
    },
    ga = function o(e, t, r) {
        var i = t >= 1 ? t : 1,
            n = (r || (e ? .3 : .45)) / (t < 1 ? t : 1),
            s = n / Ya * (Math.asin(1 / i) || 0),
            a = function(f) {
                return f === 1 ? 1 : i * Math.pow(2, -10 * f) * Pd((f - s) * n) + 1
            },
            c = e === "out" ? a : e === "in" ? function(l) {
                return 1 - a(1 - l)
            } : Cf(a);
        return n = Ya / n, c.config = function(l, f) {
            return o(e, l, f)
        }, c
    },
    _a = function o(e, t) {
        t === void 0 && (t = 1.70158);
        var r = function(s) {
                return s ? --s * s * ((t + 1) * s + t) + 1 : 0
            },
            i = e === "out" ? r : e === "in" ? function(n) {
                return 1 - r(1 - n)
            } : Cf(r);
        return i.config = function(n) {
            return o(e, n)
        }, i
    };
er("Linear,Quad,Cubic,Quart,Quint,Strong", function(o, e) {
    var t = e < 5 ? e + 1 : e;
    cn(o + ",Power" + (t - 1), e ? function(r) {
        return Math.pow(r, t)
    } : function(r) {
        return r
    }, function(r) {
        return 1 - Math.pow(1 - r, t)
    }, function(r) {
        return r < .5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2
    })
});
Ee.Linear.easeNone = Ee.none = Ee.Linear.easeIn;
cn("Elastic", ga("in"), ga("out"), ga());
(function(o, e) {
    var t = 1 / e,
        r = 2 * t,
        i = 2.5 * t,
        n = function(a) {
            return a < t ? o * a * a : a < r ? o * Math.pow(a - 1.5 / e, 2) + .75 : a < i ? o * (a -= 2.25 / e) * a + .9375 : o * Math.pow(a - 2.625 / e, 2) + .984375
        };
    cn("Bounce", function(s) {
        return 1 - n(1 - s)
    }, n)
})(7.5625, 2.75);
cn("Expo", function(o) {
    return Math.pow(2, 10 * (o - 1)) * o + o * o * o * o * o * o * (1 - o)
});
cn("Circ", function(o) {
    return -(Zc(1 - o * o) - 1)
});
cn("Sine", function(o) {
    return o === 1 ? 1 : -Sd(o * Td) + 1
});
cn("Back", _a("in"), _a("out"), _a());
Ee.SteppedEase = Ee.steps = mr.SteppedEase = {
    config: function(e, t) {
        e === void 0 && (e = 1);
        var r = 1 / e,
            i = e + (t ? 0 : 1),
            n = t ? 1 : 0,
            s = 1 - Ue;
        return function(a) {
            return ((i * Uo(0, s, a) | 0) + n) * r
        }
    }
};
Fn.ease = Ee["quad.out"];
er("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(o) {
    return zl += o + "," + o + "Params,"
});
var Of = function(e, t) {
        this.id = kd++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : af, this.set = t ? t.getSetter : Hl
    },
    Io = function() {
        function o(t) {
            this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Bn(this, +t.duration, 1, 1), this.data = t.data, Je && (this._ctx = Je, Je.data.push(this)), Fo || cr.wake()
        }
        var e = o.prototype;
        return e.delay = function(r) {
            return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay
        }, e.duration = function(r) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
        }, e.totalDuration = function(r) {
            return arguments.length ? (this._dirty = 0, Bn(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, e.totalTime = function(r, i) {
            if (zn(), !arguments.length) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
                for (aa(this, r), !n._dp || n.parent || hf(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && zr(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === Ue || !this._initted && this._dur && r || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), lf(this, r, i)), this
        }, e.time = function(r, i) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + xu(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time
        }, e.totalProgress = function(r, i) {
            return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
        }, e.progress = function(r, i) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + xu(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
        }, e.iteration = function(r, i) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? $n(this._tTime, n) + 1 : 1
        }, e.timeScale = function(r, i) {
            if (!arguments.length) return this._rts === -Ue ? 0 : this._rts;
            if (this._rts === r) return this;
            var n = this.parent && this._ts ? Xs(this.parent._time, this) : this._tTime;
            return this._rts = +r || 0, this._ts = this._ps || r === -Ue ? 0 : this._rts, this.totalTime(Uo(-Math.abs(this._delay), this.totalDuration(), n), i !== !1), sa(this), Fd(this)
        }, e.paused = function(r) {
            return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (zn(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Ue && (this._tTime -= Ue)))), this) : this._ps
        }, e.startTime = function(r) {
            if (arguments.length) {
                this._start = et(r);
                var i = this.parent || this._dp;
                return i && (i._sort || !this.parent) && zr(i, this, this._start - this._delay), this
            }
            return this._start
        }, e.endTime = function(r) {
            return this._start + (Jt(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, e.rawTime = function(r) {
            var i = this.parent || this._dp;
            return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Xs(i.rawTime(r), this) : this._tTime : this._tTime
        }, e.revert = function(r) {
            r === void 0 && (r = Ad);
            var i = Mt;
            return Mt = r, Xl(this) && (this.timeline && this.timeline.revert(r), this.totalTime(-.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), Mt = i, this
        }, e.globalTime = function(r) {
            for (var i = this, n = arguments.length ? r : i.rawTime(); i;) n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
            return !this.parent && this._sat ? this._sat.globalTime(r) : n
        }, e.repeat = function(r) {
            return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, Tu(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }, e.repeatDelay = function(r) {
            if (arguments.length) {
                var i = this._time;
                return this._rDelay = r, Tu(this), i ? this.time(i) : this
            }
            return this._rDelay
        }, e.yoyo = function(r) {
            return arguments.length ? (this._yoyo = r, this) : this._yoyo
        }, e.seek = function(r, i) {
            return this.totalTime(Tr(this, r), Jt(i))
        }, e.restart = function(r, i) {
            return this.play().totalTime(r ? -this._delay : 0, Jt(i)), this._dur || (this._zTime = -Ue), this
        }, e.play = function(r, i) {
            return r != null && this.seek(r, i), this.reversed(!1).paused(!1)
        }, e.reverse = function(r, i) {
            return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1)
        }, e.pause = function(r, i) {
            return r != null && this.seek(r, i), this.paused(!0)
        }, e.resume = function() {
            return this.paused(!1)
        }, e.reversed = function(r) {
            return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -Ue : 0)), this) : this._rts < 0
        }, e.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -Ue, this
        }, e.isActive = function() {
            var r = this.parent || this._dp,
                i = this._start,
                n;
            return !!(!r || this._ts && this._initted && r.isActive() && (n = r.rawTime(!0)) >= i && n < this.endTime(!0) - Ue)
        }, e.eventCallback = function(r, i, n) {
            var s = this.vars;
            return arguments.length > 1 ? (i ? (s[r] = i, n && (s[r + "Params"] = n), r === "onUpdate" && (this._onUpdate = i)) : delete s[r], this) : s[r]
        }, e.then = function(r) {
            var i = this,
                n = i._prom;
            return new Promise(function(s) {
                var a = nt(r) ? r : cf,
                    c = function() {
                        var f = i.then;
                        i.then = null, n && n(), nt(a) && (a = a(i)) && (a.then || a === i) && (i.then = f), s(a), i.then = f
                    };
                i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? c() : i._prom = c
            })
        }, e.kill = function() {
            Zn(this)
        }, o
    }();
yr(Io.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -Ue,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Ht = function(o) {
    Qc(e, o);

    function e(r, i) {
        var n;
        return r === void 0 && (r = {}), n = o.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = Jt(r.sortChildren), tt && zr(r.parent || tt, jr(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && df(jr(n), r.scrollTrigger), n
    }
    var t = e.prototype;
    return t.to = function(i, n, s) {
        return po(0, arguments, this), this
    }, t.from = function(i, n, s) {
        return po(1, arguments, this), this
    }, t.fromTo = function(i, n, s, a) {
        return po(2, arguments, this), this
    }, t.set = function(i, n, s) {
        return n.duration = 0, n.parent = this, ho(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new ct(i, n, Tr(this, s), 1), this
    }, t.call = function(i, n, s) {
        return zr(this, ct.delayedCall(0, i, n), s)
    }, t.staggerTo = function(i, n, s, a, c, l, f) {
        return s.duration = n, s.stagger = s.stagger || a, s.onComplete = l, s.onCompleteParams = f, s.parent = this, new ct(i, s, Tr(this, c)), this
    }, t.staggerFrom = function(i, n, s, a, c, l, f) {
        return s.runBackwards = 1, ho(s).immediateRender = Jt(s.immediateRender), this.staggerTo(i, n, s, a, c, l, f)
    }, t.staggerFromTo = function(i, n, s, a, c, l, f, h) {
        return a.startAt = s, ho(a).immediateRender = Jt(a.immediateRender), this.staggerTo(i, n, a, c, l, f, h)
    }, t.render = function(i, n, s) {
        var a = this._time,
            c = this._dirty ? this.totalDuration() : this._tDur,
            l = this._dur,
            f = i <= 0 ? 0 : et(i),
            h = this._zTime < 0 != i < 0 && (this._initted || !l),
            d, u, g, p, _, b, m, w, v, y, x, T;
        if (this !== tt && f > c && i >= 0 && (f = c), f !== this._tTime || s || h) {
            if (a !== this._time && l && (f += this._time - a, i += this._time - a), d = f, v = this._start, w = this._ts, b = !w, h && (l || (a = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
                if (x = this._yoyo, _ = l + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(_ * 100 + i, n, s);
                if (d = et(f % _), f === c ? (p = this._repeat, d = l) : (y = et(f / _), p = ~~y, p && p === y && (d = l, p--), d > l && (d = l)), y = $n(this._tTime, _), !a && this._tTime && y !== p && this._tTime - y * _ - this._dur <= 0 && (y = p), x && p & 1 && (d = l - d, T = 1), p !== y && !this._lock) {
                    var k = x && y & 1,
                        O = k === (x && p & 1);
                    if (p < y && (k = !k), a = k ? 0 : f % l ? l : f, this._lock = 1, this.render(a || (T ? 0 : et(p * _)), n, !l)._lock = 0, this._tTime = f, !n && this.parent && pr(this, "onRepeat"), this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1, y = p), a && a !== this._time || b !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (l = this._dur, c = this._tDur, O && (this._lock = 2, a = k ? l : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !T && this.invalidate()), this._lock = 0, !this._ts && !b) return this;
                    Ef(this, T)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (m = zd(this, et(a), et(d)), m && (f -= d - (d = m._start))), this._tTime = f, this._time = d, this._act = !w, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && f && l && !n && !y && (pr(this, "onStart"), this._tTime !== f)) return this;
            if (d >= a && i >= 0)
                for (u = this._first; u;) {
                    if (g = u._next, (u._act || d >= u._start) && u._ts && m !== u) {
                        if (u.parent !== this) return this.render(i, n, s);
                        if (u.render(u._ts > 0 ? (d - u._start) * u._ts : (u._dirty ? u.totalDuration() : u._tDur) + (d - u._start) * u._ts, n, s), d !== this._time || !this._ts && !b) {
                            m = 0, g && (f += this._zTime = -Ue);
                            break
                        }
                    }
                    u = g
                } else {
                    u = this._last;
                    for (var L = i < 0 ? i : d; u;) {
                        if (g = u._prev, (u._act || L <= u._end) && u._ts && m !== u) {
                            if (u.parent !== this) return this.render(i, n, s);
                            if (u.render(u._ts > 0 ? (L - u._start) * u._ts : (u._dirty ? u.totalDuration() : u._tDur) + (L - u._start) * u._ts, n, s || Mt && Xl(u)), d !== this._time || !this._ts && !b) {
                                m = 0, g && (f += this._zTime = L ? -Ue : Ue);
                                break
                            }
                        }
                        u = g
                    }
                }
            if (m && !n && (this.pause(), m.render(d >= a ? 0 : -Ue)._zTime = d >= a ? 1 : -1, this._ts)) return this._start = v, sa(this), this.render(i, n, s);
            this._onUpdate && !n && pr(this, "onUpdate", !0), (f === c && this._tTime >= this.totalDuration() || !f && a) && (v === this._start || Math.abs(w) !== Math.abs(this._ts)) && (this._lock || ((i || !l) && (f === c && this._ts > 0 || !f && this._ts < 0) && Si(this, 1), !n && !(i < 0 && !a) && (f || a || !c) && (pr(this, f === c && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < c && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, t.add = function(i, n) {
        var s = this;
        if (oi(n) || (n = Tr(this, n, i)), !(i instanceof Io)) {
            if (Ft(i)) return i.forEach(function(a) {
                return s.add(a, n)
            }), this;
            if (wt(i)) return this.addLabel(i, n);
            if (nt(i)) i = ct.delayedCall(0, i);
            else return this
        }
        return this !== i ? zr(this, i, n) : this
    }, t.getChildren = function(i, n, s, a) {
        i === void 0 && (i = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = -Mr);
        for (var c = [], l = this._first; l;) l._start >= a && (l instanceof ct ? n && c.push(l) : (s && c.push(l), i && c.push.apply(c, l.getChildren(!0, n, s)))), l = l._next;
        return c
    }, t.getById = function(i) {
        for (var n = this.getChildren(1, 1, 1), s = n.length; s--;)
            if (n[s].vars.id === i) return n[s]
    }, t.remove = function(i) {
        return wt(i) ? this.removeLabel(i) : nt(i) ? this.killTweensOf(i) : (i.parent === this && oa(this, i), i === this._recent && (this._recent = this._last), Gi(this))
    }, t.totalTime = function(i, n) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = et(cr.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), o.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime
    }, t.addLabel = function(i, n) {
        return this.labels[i] = Tr(this, n), this
    }, t.removeLabel = function(i) {
        return delete this.labels[i], this
    }, t.addPause = function(i, n, s) {
        var a = ct.delayedCall(0, n || Ro, s);
        return a.data = "isPause", this._hasPause = 1, zr(this, a, Tr(this, i))
    }, t.removePause = function(i) {
        var n = this._first;
        for (i = Tr(this, i); n;) n._start === i && n.data === "isPause" && Si(n), n = n._next
    }, t.killTweensOf = function(i, n, s) {
        for (var a = this.getTweensOf(i, s), c = a.length; c--;) gi !== a[c] && a[c].kill(i, n);
        return this
    }, t.getTweensOf = function(i, n) {
        for (var s = [], a = Er(i), c = this._first, l = oi(n), f; c;) c instanceof ct ? Ld(c._targets, a) && (l ? (!gi || c._initted && c._ts) && c.globalTime(0) <= n && c.globalTime(c.totalDuration()) > n : !n || c.isActive()) && s.push(c) : (f = c.getTweensOf(a, n)).length && s.push.apply(s, f), c = c._next;
        return s
    }, t.tweenTo = function(i, n) {
        n = n || {};
        var s = this,
            a = Tr(s, i),
            c = n,
            l = c.startAt,
            f = c.onStart,
            h = c.onStartParams,
            d = c.immediateRender,
            u, g = ct.to(s, yr({
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration: n.duration || Math.abs((a - (l && "time" in l ? l.time : s._time)) / s.timeScale()) || Ue,
                onStart: function() {
                    if (s.pause(), !u) {
                        var _ = n.duration || Math.abs((a - (l && "time" in l ? l.time : s._time)) / s.timeScale());
                        g._dur !== _ && Bn(g, _, 0, 1).render(g._time, !0, !0), u = 1
                    }
                    f && f.apply(g, h || [])
                }
            }, n));
        return d ? g.render(0) : g
    }, t.tweenFromTo = function(i, n, s) {
        return this.tweenTo(n, yr({
            startAt: {
                time: Tr(this, i)
            }
        }, s))
    }, t.recent = function() {
        return this._recent
    }, t.nextLabel = function(i) {
        return i === void 0 && (i = this._time), ku(this, Tr(this, i))
    }, t.previousLabel = function(i) {
        return i === void 0 && (i = this._time), ku(this, Tr(this, i), 1)
    }, t.currentLabel = function(i) {
        return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + Ue)
    }, t.shiftChildren = function(i, n, s) {
        s === void 0 && (s = 0);
        var a = this._first,
            c = this.labels,
            l;
        for (i = et(i); a;) a._start >= s && (a._start += i, a._end += i), a = a._next;
        if (n)
            for (l in c) c[l] >= s && (c[l] += i);
        return Gi(this)
    }, t.invalidate = function(i) {
        var n = this._first;
        for (this._lock = 0; n;) n.invalidate(i), n = n._next;
        return o.prototype.invalidate.call(this, i)
    }, t.clear = function(i) {
        i === void 0 && (i = !0);
        for (var n = this._first, s; n;) s = n._next, this.remove(n), n = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Gi(this)
    }, t.totalDuration = function(i) {
        var n = 0,
            s = this,
            a = s._last,
            c = Mr,
            l, f, h;
        if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
        if (s._dirty) {
            for (h = s.parent; a;) l = a._prev, a._dirty && a.totalDuration(), f = a._start, f > c && s._sort && a._ts && !s._lock ? (s._lock = 1, zr(s, a, f - a._delay, 1)._lock = 0) : c = f, f < 0 && a._ts && (n -= f, (!h && !s._dp || h && h.smoothChildTiming) && (s._start += et(f / s._ts), s._time -= f, s._tTime -= f), s.shiftChildren(-f, !1, -1 / 0), c = 0), a._end > n && a._ts && (n = a._end), a = l;
            Bn(s, s === tt && s._time > n ? s._time : n, 1, 1), s._dirty = 0
        }
        return s._tDur
    }, e.updateRoot = function(i) {
        if (tt._ts && (lf(tt, Xs(i, tt)), sf = cr.frame), cr.frame >= wu) {
            wu += _r.autoSleep || 120;
            var n = tt._first;
            if ((!n || !n._ts) && _r.autoSleep && cr._listeners.length < 2) {
                for (; n && !n._ts;) n = n._next;
                n || cr.sleep()
            }
        }
    }, e
}(Io);
yr(Ht.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var rp = function(e, t, r, i, n, s, a) {
        var c = new tr(this._pt, e, t, 0, 1, Ff, null, n),
            l = 0,
            f = 0,
            h, d, u, g, p, _, b, m;
        for (c.b = r, c.e = i, r += "", i += "", (b = ~i.indexOf("random(")) && (i = No(i)), s && (m = [r, i], s(m, e, t), r = m[0], i = m[1]), d = r.match(ha) || []; h = ha.exec(i);) g = h[0], p = i.substring(l, h.index), u ? u = (u + 1) % 5 : p.substr(-5) === "rgba(" && (u = 1), g !== d[f++] && (_ = parseFloat(d[f - 1]) || 0, c._pt = {
            _next: c._pt,
            p: p || f === 1 ? p : ",",
            s: _,
            c: g.charAt(1) === "=" ? Pn(_, g) - _ : parseFloat(g) - _,
            m: u && u < 4 ? Math.round : 0
        }, l = ha.lastIndex);
        return c.c = l < i.length ? i.substring(l, i.length) : "", c.fp = a, (tf.test(i) || b) && (c.e = 0), this._pt = c, c
    },
    Vl = function(e, t, r, i, n, s, a, c, l, f) {
        nt(i) && (i = i(n || 0, e, s));
        var h = e[t],
            d = r !== "get" ? r : nt(h) ? l ? e[t.indexOf("set") || !nt(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : h,
            u = nt(h) ? l ? ap : Rf : Wl,
            g;
        if (wt(i) && (~i.indexOf("random(") && (i = No(i)), i.charAt(1) === "=" && (g = Pn(d, i) + (Rt(d) || 0), (g || g === 0) && (i = g))), !f || d !== i || Ua) return !isNaN(d * i) && i !== "" ? (g = new tr(this._pt, e, t, +d || 0, i - (d || 0), typeof h == "boolean" ? up : Nf, 0, u), l && (g.fp = l), a && g.modifier(a, this, e), this._pt = g) : (!h && !(t in e) && $l(t, i), rp.call(this, e, t, d, i, u, c || _r.stringFilter, l))
    },
    ip = function(e, t, r, i, n) {
        if (nt(e) && (e = go(e, n, t, r, i)), !Wr(e) || e.style && e.nodeType || Ft(e) || Jc(e)) return wt(e) ? go(e, n, t, r, i) : e;
        var s = {},
            a;
        for (a in e) s[a] = go(e[a], n, t, r, i);
        return s
    },
    Df = function(e, t, r, i, n, s) {
        var a, c, l, f;
        if (lr[e] && (a = new lr[e]).init(n, a.rawVars ? t[e] : ip(t[e], i, n, s, r), r, i, s) !== !1 && (r._pt = c = new tr(r._pt, n, e, 0, 1, a.render, a, 0, a.priority), r !== xn))
            for (l = r._ptLookup[r._targets.indexOf(n)], f = a._props.length; f--;) l[a._props[f]] = c;
        return a
    },
    gi, Ua, ql = function o(e, t, r) {
        var i = e.vars,
            n = i.ease,
            s = i.startAt,
            a = i.immediateRender,
            c = i.lazy,
            l = i.onUpdate,
            f = i.runBackwards,
            h = i.yoyoEase,
            d = i.keyframes,
            u = i.autoRevert,
            g = e._dur,
            p = e._startAt,
            _ = e._targets,
            b = e.parent,
            m = b && b.data === "nested" ? b.vars.targets : _,
            w = e._overwrite === "auto" && !Rl,
            v = e.timeline,
            y, x, T, k, O, L, z, P, M, R, V, I, Y;
        if (v && (!d || !n) && (n = "none"), e._ease = ji(n, Fn.ease), e._yEase = h ? Mf(ji(h === !0 ? n : h, Fn.ease)) : 0, h && e._yoyo && !e._repeat && (h = e._yEase, e._yEase = e._ease, e._ease = h), e._from = !v && !!i.runBackwards, !v || d && !i.stagger) {
            if (P = _[0] ? Hi(_[0]).harness : 0, I = P && i[P.prop], y = Ys(i, Bl), p && (p._zTime < 0 && p.progress(1), t < 0 && f && a && !u ? p.render(-1, !0) : p.revert(f && g ? bs : Dd), p._lazy = 0), s) {
                if (Si(e._startAt = ct.set(_, yr({
                        data: "isStart",
                        overwrite: !1,
                        parent: b,
                        immediateRender: !0,
                        lazy: !p && Jt(c),
                        startAt: null,
                        delay: 0,
                        onUpdate: l && function() {
                            return pr(e, "onUpdate")
                        },
                        stagger: 0
                    }, s))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Mt || !a && !u) && e._startAt.revert(bs), a && g && t <= 0 && r <= 0) {
                    t && (e._zTime = t);
                    return
                }
            } else if (f && g && !p) {
                if (t && (a = !1), T = yr({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: a && !p && Jt(c),
                        immediateRender: a,
                        stagger: 0,
                        parent: b
                    }, y), I && (T[P.prop] = I), Si(e._startAt = ct.set(_, T)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Mt ? e._startAt.revert(bs) : e._startAt.render(-1, !0)), e._zTime = t, !a) o(e._startAt, Ue, Ue);
                else if (!t) return
            }
            for (e._pt = e._ptCache = 0, c = g && Jt(c) || c && !g, x = 0; x < _.length; x++) {
                if (O = _[x], z = O._gsap || Yl(_)[x]._gsap, e._ptLookup[x] = R = {}, Va[z.id] && bi.length && zs(), V = m === _ ? x : m.indexOf(O), P && (M = new P).init(O, I || y, e, V, m) !== !1 && (e._pt = k = new tr(e._pt, O, M.name, 0, 1, M.render, M, 0, M.priority), M._props.forEach(function(K) {
                        R[K] = k
                    }), M.priority && (L = 1)), !P || I)
                    for (T in y) lr[T] && (M = Df(T, y, e, V, O, m)) ? M.priority && (L = 1) : R[T] = k = Vl.call(e, O, T, "get", y[T], V, m, 0, i.stringFilter);
                e._op && e._op[x] && e.kill(O, e._op[x]), w && e._pt && (gi = e, tt.killTweensOf(O, R, e.globalTime(t)), Y = !e.parent, gi = 0), e._pt && c && (Va[z.id] = 1)
            }
            L && If(e), e._onInit && e._onInit(e)
        }
        e._onUpdate = l, e._initted = (!e._op || e._pt) && !Y, d && t <= 0 && v.render(Mr, !0, !0)
    },
    np = function(e, t, r, i, n, s, a, c) {
        var l = (e._pt && e._ptCache || (e._ptCache = {}))[t],
            f, h, d, u;
        if (!l)
            for (l = e._ptCache[t] = [], d = e._ptLookup, u = e._targets.length; u--;) {
                if (f = d[u][t], f && f.d && f.d._pt)
                    for (f = f.d._pt; f && f.p !== t && f.fp !== t;) f = f._next;
                if (!f) return Ua = 1, e.vars[t] = "+=0", ql(e, a), Ua = 0, c ? Lo(t + " not eligible for reset") : 1;
                l.push(f)
            }
        for (u = l.length; u--;) h = l[u], f = h._pt || h, f.s = (i || i === 0) && !n ? i : f.s + (i || 0) + s * f.c, f.c = r - f.s, h.e && (h.e = at(r) + Rt(h.e)), h.b && (h.b = f.s + Rt(h.b))
    },
    op = function(e, t) {
        var r = e[0] ? Hi(e[0]).harness : 0,
            i = r && r.aliases,
            n, s, a, c;
        if (!i) return t;
        n = In({}, t);
        for (s in i)
            if (s in n)
                for (c = i[s].split(","), a = c.length; a--;) n[c[a]] = n[s];
        return n
    },
    sp = function(e, t, r, i) {
        var n = t.ease || i || "power1.inOut",
            s, a;
        if (Ft(t)) a = r[e] || (r[e] = []), t.forEach(function(c, l) {
            return a.push({
                t: l / (t.length - 1) * 100,
                v: c,
                e: n
            })
        });
        else
            for (s in t) a = r[s] || (r[s] = []), s === "ease" || a.push({
                t: parseFloat(e),
                v: t[s],
                e: n
            })
    },
    go = function(e, t, r, i, n) {
        return nt(e) ? e.call(t, r, i, n) : wt(e) && ~e.indexOf("random(") ? No(e) : e
    },
    Af = zl + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Lf = {};
er(Af + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
    return Lf[o] = 1
});
var ct = function(o) {
    Qc(e, o);

    function e(r, i, n, s) {
        var a;
        typeof i == "number" && (n.duration = i, i = n, n = null), a = o.call(this, s ? i : ho(i)) || this;
        var c = a.vars,
            l = c.duration,
            f = c.delay,
            h = c.immediateRender,
            d = c.stagger,
            u = c.overwrite,
            g = c.keyframes,
            p = c.defaults,
            _ = c.scrollTrigger,
            b = c.yoyoEase,
            m = i.parent || tt,
            w = (Ft(r) || Jc(r) ? oi(r[0]) : "length" in i) ? [r] : Er(r),
            v, y, x, T, k, O, L, z;
        if (a._targets = w.length ? Yl(w) : Lo("GSAP target " + r + " not found. https://gsap.com", !_r.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = u, g || d || Jo(l) || Jo(f)) {
            if (i = a.vars, v = a.timeline = new Ht({
                    data: "nested",
                    defaults: p || {},
                    targets: m && m.data === "nested" ? m.vars.targets : w
                }), v.kill(), v.parent = v._dp = jr(a), v._start = 0, d || Jo(l) || Jo(f)) {
                if (T = w.length, L = d && mf(d), Wr(d))
                    for (k in d) ~Af.indexOf(k) && (z || (z = {}), z[k] = d[k]);
                for (y = 0; y < T; y++) x = Ys(i, Lf), x.stagger = 0, b && (x.yoyoEase = b), z && In(x, z), O = w[y], x.duration = +go(l, jr(a), y, O, w), x.delay = (+go(f, jr(a), y, O, w) || 0) - a._delay, !d && T === 1 && x.delay && (a._delay = f = x.delay, a._start += f, x.delay = 0), v.to(O, x, L ? L(y, O, w) : 0), v._ease = Ee.none;
                v.duration() ? l = f = 0 : a.timeline = 0
            } else if (g) {
                ho(yr(v.vars.defaults, {
                    ease: "none"
                })), v._ease = ji(g.ease || i.ease || "none");
                var P = 0,
                    M, R, V;
                if (Ft(g)) g.forEach(function(I) {
                    return v.to(w, I, ">")
                }), v.duration();
                else {
                    x = {};
                    for (k in g) k === "ease" || k === "easeEach" || sp(k, g[k], x, g.easeEach);
                    for (k in x)
                        for (M = x[k].sort(function(I, Y) {
                                return I.t - Y.t
                            }), P = 0, y = 0; y < M.length; y++) R = M[y], V = {
                            ease: R.e,
                            duration: (R.t - (y ? M[y - 1].t : 0)) / 100 * l
                        }, V[k] = R.v, v.to(w, V, P), P += V.duration;
                    v.duration() < l && v.to({}, {
                        duration: l - v.duration()
                    })
                }
            }
            l || a.duration(l = v.duration())
        } else a.timeline = 0;
        return u === !0 && !Rl && (gi = jr(a), tt.killTweensOf(w), gi = 0), zr(m, jr(a), n), i.reversed && a.reverse(), i.paused && a.paused(!0), (h || !l && !g && a._start === et(m._time) && Jt(h) && Id(jr(a)) && m.data !== "nested") && (a._tTime = -Ue, a.render(Math.max(0, -f) || 0)), _ && df(jr(a), _), a
    }
    var t = e.prototype;
    return t.render = function(i, n, s) {
        var a = this._time,
            c = this._tDur,
            l = this._dur,
            f = i < 0,
            h = i > c - Ue && !f ? c : i < Ue ? 0 : i,
            d, u, g, p, _, b, m, w, v;
        if (!l) Bd(this, i, n, s);
        else if (h !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f || this._lazy) {
            if (d = h, w = this.timeline, this._repeat) {
                if (p = l + this._rDelay, this._repeat < -1 && f) return this.totalTime(p * 100 + i, n, s);
                if (d = et(h % p), h === c ? (g = this._repeat, d = l) : (_ = et(h / p), g = ~~_, g && g === _ ? (d = l, g--) : d > l && (d = l)), b = this._yoyo && g & 1, b && (v = this._yEase, d = l - d), _ = $n(this._tTime, p), d === a && !s && this._initted && g === _) return this._tTime = h, this;
                g !== _ && (w && this._yEase && Ef(w, b), this.vars.repeatRefresh && !b && !this._lock && d !== p && this._initted && (this._lock = s = 1, this.render(et(p * g), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (pf(this, f ? i : d, s, n, h)) return this._tTime = 0, this;
                if (a !== this._time && !(s && this.vars.repeatRefresh && g !== _)) return this;
                if (l !== this._dur) return this.render(i, n, s)
            }
            if (this._tTime = h, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = m = (v || this._ease)(d / l), this._from && (this.ratio = m = 1 - m), !a && h && !n && !_ && (pr(this, "onStart"), this._tTime !== h)) return this;
            for (u = this._pt; u;) u.r(m, u.d), u = u._next;
            w && w.render(i < 0 ? i : w._dur * w._ease(d / this._dur), n, s) || this._startAt && (this._zTime = i), this._onUpdate && !n && (f && qa(this, i, n, s), pr(this, "onUpdate")), this._repeat && g !== _ && this.vars.onRepeat && !n && this.parent && pr(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (f && !this._onUpdate && qa(this, i, !0, !0), (i || !l) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Si(this, 1), !n && !(f && !a) && (h || a || b) && (pr(this, h === c ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < c && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, t.targets = function() {
        return this._targets
    }, t.invalidate = function(i) {
        return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), o.prototype.invalidate.call(this, i)
    }, t.resetTo = function(i, n, s, a, c) {
        Fo || cr.wake(), this._ts || this.play();
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
            f;
        return this._initted || ql(this, l), f = this._ease(l / this._dur), np(this, i, n, s, a, f, l, c) ? this.resetTo(i, n, s, a, 1) : (aa(this, 0), this.parent || ff(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, t.kill = function(i, n) {
        if (n === void 0 && (n = "all"), !i && (!n || n === "all")) return this._lazy = this._pt = 0, this.parent ? Zn(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Mt), this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(i, n, gi && gi.vars.overwrite !== !0)._first || Zn(this), this.parent && s !== this.timeline.totalDuration() && Bn(this, this._dur * this.timeline._tDur / s, 0, 1), this
        }
        var a = this._targets,
            c = i ? Er(i) : a,
            l = this._ptLookup,
            f = this._pt,
            h, d, u, g, p, _, b;
        if ((!n || n === "all") && Nd(a, c)) return n === "all" && (this._pt = 0), Zn(this);
        for (h = this._op = this._op || [], n !== "all" && (wt(n) && (p = {}, er(n, function(m) {
                return p[m] = 1
            }), n = p), n = op(a, n)), b = a.length; b--;)
            if (~c.indexOf(a[b])) {
                d = l[b], n === "all" ? (h[b] = n, g = d, u = {}) : (u = h[b] = h[b] || {}, g = n);
                for (p in g) _ = d && d[p], _ && ((!("kill" in _.d) || _.d.kill(p) === !0) && oa(this, _, "_pt"), delete d[p]), u !== "all" && (u[p] = 1)
            }
        return this._initted && !this._pt && f && Zn(this), this
    }, e.to = function(i, n) {
        return new e(i, n, arguments[2])
    }, e.from = function(i, n) {
        return po(1, arguments)
    }, e.delayedCall = function(i, n, s, a) {
        return new e(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: i,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: a
        })
    }, e.fromTo = function(i, n, s) {
        return po(2, arguments)
    }, e.set = function(i, n) {
        return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(i, n)
    }, e.killTweensOf = function(i, n, s) {
        return tt.killTweensOf(i, n, s)
    }, e
}(Io);
yr(ct.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
er("staggerTo,staggerFrom,staggerFromTo", function(o) {
    ct[o] = function() {
        var e = new Ht,
            t = Ha.call(arguments, 0);
        return t.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), e[o].apply(e, t)
    }
});
var Wl = function(e, t, r) {
        return e[t] = r
    },
    Rf = function(e, t, r) {
        return e[t](r)
    },
    ap = function(e, t, r, i) {
        return e[t](i.fp, r)
    },
    lp = function(e, t, r) {
        return e.setAttribute(t, r)
    },
    Hl = function(e, t) {
        return nt(e[t]) ? Rf : Nl(e[t]) && e.setAttribute ? lp : Wl
    },
    Nf = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
    },
    up = function(e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t)
    },
    Ff = function(e, t) {
        var r = t._pt,
            i = "";
        if (!e && t.b) i = t.b;
        else if (e === 1 && t.e) i = t.e;
        else {
            for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i, r = r._next;
            i += t.c
        }
        t.set(t.t, t.p, i, t)
    },
    Gl = function(e, t) {
        for (var r = t._pt; r;) r.r(e, r.d), r = r._next
    },
    cp = function(e, t, r, i) {
        for (var n = this._pt, s; n;) s = n._next, n.p === i && n.modifier(e, t, r), n = s
    },
    fp = function(e) {
        for (var t = this._pt, r, i; t;) i = t._next, t.p === e && !t.op || t.op === e ? oa(this, t, "_pt") : t.dep || (r = 1), t = i;
        return !r
    },
    hp = function(e, t, r, i) {
        i.mSet(e, t, i.m.call(i.tween, r, i.mt), i)
    },
    If = function(e) {
        for (var t = e._pt, r, i, n, s; t;) {
            for (r = t._next, i = n; i && i.pr > t.pr;) i = i._next;
            (t._prev = i ? i._prev : s) ? t._prev._next = t: n = t, (t._next = i) ? i._prev = t : s = t, t = r
        }
        e._pt = n
    },
    tr = function() {
        function o(t, r, i, n, s, a, c, l, f) {
            this.t = r, this.s = n, this.c = s, this.p = i, this.r = a || Nf, this.d = c || this, this.set = l || Wl, this.pr = f || 0, this._next = t, t && (t._prev = this)
        }
        var e = o.prototype;
        return e.modifier = function(r, i, n) {
            this.mSet = this.mSet || this.set, this.set = hp, this.m = r, this.mt = n, this.tween = i
        }, o
    }();
er(zl + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(o) {
    return Bl[o] = 1
});
mr.TweenMax = mr.TweenLite = ct;
mr.TimelineLite = mr.TimelineMax = Ht;
tt = new Ht({
    sortChildren: !1,
    defaults: Fn,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
_r.stringFilter = Pf;
var Ui = [],
    Ts = {},
    dp = [],
    Pu = 0,
    pp = 0,
    ma = function(e) {
        return (Ts[e] || dp).map(function(t) {
            return t()
        })
    },
    Ka = function() {
        var e = Date.now(),
            t = [];
        e - Pu > 2 && (ma("matchMediaInit"), Ui.forEach(function(r) {
            var i = r.queries,
                n = r.conditions,
                s, a, c, l;
            for (a in i) s = Fr.matchMedia(i[a]).matches, s && (c = 1), s !== n[a] && (n[a] = s, l = 1);
            l && (r.revert(), c && t.push(r))
        }), ma("matchMediaRevert"), t.forEach(function(r) {
            return r.onMatch(r, function(i) {
                return r.add(null, i)
            })
        }), Pu = e, ma("matchMedia"))
    },
    $f = function() {
        function o(t, r) {
            this.selector = r && Ga(r), this.data = [], this._r = [], this.isReverted = !1, this.id = pp++, t && this.add(t)
        }
        var e = o.prototype;
        return e.add = function(r, i, n) {
            nt(r) && (n = i, i = r, r = nt);
            var s = this,
                a = function() {
                    var l = Je,
                        f = s.selector,
                        h;
                    return l && l !== s && l.data.push(s), n && (s.selector = Ga(n)), Je = s, h = i.apply(s, arguments), nt(h) && s._r.push(h), Je = l, s.selector = f, s.isReverted = !1, h
                };
            return s.last = a, r === nt ? a(s, function(c) {
                return s.add(null, c)
            }) : r ? s[r] = a : a
        }, e.ignore = function(r) {
            var i = Je;
            Je = null, r(this), Je = i
        }, e.getTweens = function() {
            var r = [];
            return this.data.forEach(function(i) {
                return i instanceof o ? r.push.apply(r, i.getTweens()) : i instanceof ct && !(i.parent && i.parent.data === "nested") && r.push(i)
            }), r
        }, e.clear = function() {
            this._r.length = this.data.length = 0
        }, e.kill = function(r, i) {
            var n = this;
            if (r ? function() {
                    for (var a = n.getTweens(), c = n.data.length, l; c--;) l = n.data[c], l.data === "isFlip" && (l.revert(), l.getChildren(!0, !0, !1).forEach(function(f) {
                        return a.splice(a.indexOf(f), 1)
                    }));
                    for (a.map(function(f) {
                            return {
                                g: f._dur || f._delay || f._sat && !f._sat.vars.immediateRender ? f.globalTime(0) : -1 / 0,
                                t: f
                            }
                        }).sort(function(f, h) {
                            return h.g - f.g || -1 / 0
                        }).forEach(function(f) {
                            return f.t.revert(r)
                        }), c = n.data.length; c--;) l = n.data[c], l instanceof Ht ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(), l.kill()) : !(l instanceof ct) && l.revert && l.revert(r);
                    n._r.forEach(function(f) {
                        return f(r, n)
                    }), n.isReverted = !0
                }() : this.data.forEach(function(a) {
                    return a.kill && a.kill()
                }), this.clear(), i)
                for (var s = Ui.length; s--;) Ui[s].id === this.id && Ui.splice(s, 1)
        }, e.revert = function(r) {
            this.kill(r || {})
        }, o
    }(),
    gp = function() {
        function o(t) {
            this.contexts = [], this.scope = t, Je && Je.data.push(this)
        }
        var e = o.prototype;
        return e.add = function(r, i, n) {
            Wr(r) || (r = {
                matches: r
            });
            var s = new $f(0, n || this.scope),
                a = s.conditions = {},
                c, l, f;
            Je && !s.selector && (s.selector = Je.selector), this.contexts.push(s), i = s.add("onMatch", i), s.queries = r;
            for (l in r) l === "all" ? f = 1 : (c = Fr.matchMedia(r[l]), c && (Ui.indexOf(s) < 0 && Ui.push(s), (a[l] = c.matches) && (f = 1), c.addListener ? c.addListener(Ka) : c.addEventListener("change", Ka)));
            return f && i(s, function(h) {
                return s.add(null, h)
            }), this
        }, e.revert = function(r) {
            this.kill(r || {})
        }, e.kill = function(r) {
            this.contexts.forEach(function(i) {
                return i.kill(r, !0)
            })
        }, o
    }(),
    Vs = {
        registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            t.forEach(function(i) {
                return Tf(i)
            })
        },
        timeline: function(e) {
            return new Ht(e)
        },
        getTweensOf: function(e, t) {
            return tt.getTweensOf(e, t)
        },
        getProperty: function(e, t, r, i) {
            wt(e) && (e = Er(e)[0]);
            var n = Hi(e || {}).get,
                s = r ? cf : uf;
            return r === "native" && (r = ""), e && (t ? s((lr[t] && lr[t].get || n)(e, t, r, i)) : function(a, c, l) {
                return s((lr[a] && lr[a].get || n)(e, a, c, l))
            })
        },
        quickSetter: function(e, t, r) {
            if (e = Er(e), e.length > 1) {
                var i = e.map(function(f) {
                        return ir.quickSetter(f, t, r)
                    }),
                    n = i.length;
                return function(f) {
                    for (var h = n; h--;) i[h](f)
                }
            }
            e = e[0] || {};
            var s = lr[t],
                a = Hi(e),
                c = a.harness && (a.harness.aliases || {})[t] || t,
                l = s ? function(f) {
                    var h = new s;
                    xn._pt = 0, h.init(e, r ? f + r : f, xn, 0, [e]), h.render(1, h), xn._pt && Gl(1, xn)
                } : a.set(e, c);
            return s ? l : function(f) {
                return l(e, c, r ? f + r : f, a, 1)
            }
        },
        quickTo: function(e, t, r) {
            var i, n = ir.to(e, yr((i = {}, i[t] = "+=0.1", i.paused = !0, i.stagger = 0, i), r || {})),
                s = function(c, l, f) {
                    return n.resetTo(t, c, l, f)
                };
            return s.tween = n, s
        },
        isTweening: function(e) {
            return tt.getTweensOf(e, !0).length > 0
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = ji(e.ease, Fn.ease)), bu(Fn, e || {})
        },
        config: function(e) {
            return bu(_r, e || {})
        },
        registerEffect: function(e) {
            var t = e.name,
                r = e.effect,
                i = e.plugins,
                n = e.defaults,
                s = e.extendTimeline;
            (i || "").split(",").forEach(function(a) {
                return a && !lr[a] && !mr[a] && Lo(t + " effect requires " + a + " plugin.")
            }), da[t] = function(a, c, l) {
                return r(Er(a), yr(c || {}, n), l)
            }, s && (Ht.prototype[t] = function(a, c, l) {
                return this.add(da[t](a, Wr(c) ? c : (l = c) && {}, this), l)
            })
        },
        registerEase: function(e, t) {
            Ee[e] = ji(t)
        },
        parseEase: function(e, t) {
            return arguments.length ? ji(e, t) : Ee
        },
        getById: function(e) {
            return tt.getById(e)
        },
        exportRoot: function(e, t) {
            e === void 0 && (e = {});
            var r = new Ht(e),
                i, n;
            for (r.smoothChildTiming = Jt(e.smoothChildTiming), tt.remove(r), r._dp = 0, r._time = r._tTime = tt._time, i = tt._first; i;) n = i._next, (t || !(!i._dur && i instanceof ct && i.vars.onComplete === i._targets[0])) && zr(r, i, i._start - i._delay), i = n;
            return zr(tt, r, 0), r
        },
        context: function(e, t) {
            return e ? new $f(e, t) : Je
        },
        matchMedia: function(e) {
            return new gp(e)
        },
        matchMediaRefresh: function() {
            return Ui.forEach(function(e) {
                var t = e.conditions,
                    r, i;
                for (i in t) t[i] && (t[i] = !1, r = 1);
                r && e.revert()
            }) || Ka()
        },
        addEventListener: function(e, t) {
            var r = Ts[e] || (Ts[e] = []);
            ~r.indexOf(t) || r.push(t)
        },
        removeEventListener: function(e, t) {
            var r = Ts[e],
                i = r && r.indexOf(t);
            i >= 0 && r.splice(i, 1)
        },
        utils: {
            wrap: Gd,
            wrapYoyo: jd,
            distribute: mf,
            random: vf,
            snap: yf,
            normalize: Hd,
            getUnit: Rt,
            clamp: Xd,
            splitColor: kf,
            toArray: Er,
            selector: Ga,
            mapRange: bf,
            pipe: qd,
            unitize: Wd,
            interpolate: Ud,
            shuffle: _f
        },
        install: nf,
        effects: da,
        ticker: cr,
        updateRoot: Ht.updateRoot,
        plugins: lr,
        globalTimeline: tt,
        core: {
            PropTween: tr,
            globals: of ,
            Tween: ct,
            Timeline: Ht,
            Animation: Io,
            getCache: Hi,
            _removeLinkedListItem: oa,
            reverting: function() {
                return Mt
            },
            context: function(e) {
                return e && Je && (Je.data.push(e), e._ctx = Je), Je
            },
            suppressOverwrites: function(e) {
                return Rl = e
            }
        }
    };
er("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
    return Vs[o] = ct[o]
});
cr.add(Ht.updateRoot);
xn = Vs.to({}, {
    duration: 0
});
var _p = function(e, t) {
        for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t;) r = r._next;
        return r
    },
    mp = function(e, t) {
        var r = e._targets,
            i, n, s;
        for (i in t)
            for (n = r.length; n--;) s = e._ptLookup[n][i], s && (s = s.d) && (s._pt && (s = _p(s, i)), s && s.modifier && s.modifier(t[i], e, r[n], i))
    },
    ya = function(e, t) {
        return {
            name: e,
            headless: 1,
            rawVars: 1,
            init: function(i, n, s) {
                s._onInit = function(a) {
                    var c, l;
                    if (wt(n) && (c = {}, er(n, function(f) {
                            return c[f] = 1
                        }), n = c), t) {
                        c = {};
                        for (l in n) c[l] = t(n[l]);
                        n = c
                    }
                    mp(a, n)
                }
            }
        }
    },
    ir = Vs.registerPlugin({
        name: "attr",
        init: function(e, t, r, i, n) {
            var s, a, c;
            this.tween = r;
            for (s in t) c = e.getAttribute(s) || "", a = this.add(e, "setAttribute", (c || 0) + "", t[s], i, n, 0, 0, s), a.op = s, a.b = c, this._props.push(s)
        },
        render: function(e, t) {
            for (var r = t._pt; r;) Mt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next
        }
    }, {
        name: "endArray",
        headless: 1,
        init: function(e, t) {
            for (var r = t.length; r--;) this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1)
        }
    }, ya("roundProps", ja), ya("modifiers"), ya("snap", yf)) || Vs;
ct.version = Ht.version = ir.version = "3.14.2";
rf = 1;
Fl() && zn();
Ee.Power0;
Ee.Power1;
Ee.Power2;
Ee.Power3;
Ee.Power4;
Ee.Linear;
Ee.Quad;
Ee.Cubic;
Ee.Quart;
Ee.Quint;
Ee.Strong;
Ee.Elastic;
Ee.Back;
Ee.SteppedEase;
Ee.Bounce;
Ee.Sine;
Ee.Expo;
Ee.Circ;
/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var Mu, _i, Mn, jl, qi, Eu, Ul, yp = function() {
        return typeof window < "u"
    },
    si = {},
    Ii = 180 / Math.PI,
    En = Math.PI / 180,
    fn = Math.atan2,
    Cu = 1e8,
    Kl = /([A-Z])/g,
    vp = /(left|right|width|margin|padding|x)/i,
    wp = /[\s,\(]\S/,
    Yr = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    Qa = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    },
    bp = function(e, t) {
        return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    },
    xp = function(e, t) {
        return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
    },
    Tp = function(e, t) {
        return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
    },
    kp = function(e, t) {
        var r = t.s + t.c * e;
        t.set(t.t, t.p, ~~(r + (r < 0 ? -.5 : .5)) + t.u, t)
    },
    Bf = function(e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t)
    },
    zf = function(e, t) {
        return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
    },
    Sp = function(e, t, r) {
        return e.style[t] = r
    },
    Pp = function(e, t, r) {
        return e.style.setProperty(t, r)
    },
    Mp = function(e, t, r) {
        return e._gsap[t] = r
    },
    Ep = function(e, t, r) {
        return e._gsap.scaleX = e._gsap.scaleY = r
    },
    Cp = function(e, t, r, i, n) {
        var s = e._gsap;
        s.scaleX = s.scaleY = r, s.renderTransform(n, s)
    },
    Op = function(e, t, r, i, n) {
        var s = e._gsap;
        s[t] = r, s.renderTransform(n, s)
    },
    rt = "transform",
    rr = rt + "Origin",
    Dp = function o(e, t) {
        var r = this,
            i = this.target,
            n = i.style,
            s = i._gsap;
        if (e in si && n) {
            if (this.tfm = this.tfm || {}, e !== "transform") e = Yr[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
                return r.tfm[a] = Ur(i, a)
            }) : this.tfm[e] = s.x ? s[e] : Ur(i, e), e === rr && (this.tfm.zOrigin = s.zOrigin);
            else return Yr.transform.split(",").forEach(function(a) {
                return o.call(r, a, t)
            });
            if (this.props.indexOf(rt) >= 0) return;
            s.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(rr, t, "")), e = rt
        }(n || t) && this.props.push(e, t, n[e])
    },
    Yf = function(e) {
        e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
    },
    Ap = function() {
        var e = this.props,
            t = this.target,
            r = t.style,
            i = t._gsap,
            n, s;
        for (n = 0; n < e.length; n += 3) e[n + 1] ? e[n + 1] === 2 ? t[e[n]](e[n + 2]) : t[e[n]] = e[n + 2] : e[n + 2] ? r[e[n]] = e[n + 2] : r.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace(Kl, "-$1").toLowerCase());
        if (this.tfm) {
            for (s in this.tfm) i[s] = this.tfm[s];
            i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), n = Ul(), (!n || !n.isStart) && !r[rt] && (Yf(r), i.zOrigin && r[rr] && (r[rr] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1)
        }
    },
    Xf = function(e, t) {
        var r = {
            target: e,
            props: [],
            revert: Ap,
            save: Dp
        };
        return e._gsap || ir.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(i) {
            return r.save(i)
        }), r
    },
    Vf, Za = function(e, t) {
        var r = _i.createElementNS ? _i.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : _i.createElement(e);
        return r && r.style ? r : _i.createElement(e)
    },
    gr = function o(e, t, r) {
        var i = getComputedStyle(e);
        return i[t] || i.getPropertyValue(t.replace(Kl, "-$1").toLowerCase()) || i.getPropertyValue(t) || !r && o(e, Yn(t) || t, 1) || ""
    },
    Ou = "O,Moz,ms,Ms,Webkit".split(","),
    Yn = function(e, t, r) {
        var i = t || qi,
            n = i.style,
            s = 5;
        if (e in n && !r) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(Ou[s] + e in n););
        return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Ou[s] : "") + e
    },
    Ja = function() {
        yp() && window.document && (Mu = window, _i = Mu.document, Mn = _i.documentElement, qi = Za("div") || {
            style: {}
        }, Za("div"), rt = Yn(rt), rr = rt + "Origin", qi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Vf = !!Yn("perspective"), Ul = ir.core.reverting, jl = 1)
    },
    Du = function(e) {
        var t = e.ownerSVGElement,
            r = Za("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = e.cloneNode(!0),
            n;
        i.style.display = "block", r.appendChild(i), Mn.appendChild(r);
        try {
            n = i.getBBox()
        } catch {}
        return r.removeChild(i), Mn.removeChild(r), n
    },
    Au = function(e, t) {
        for (var r = t.length; r--;)
            if (e.hasAttribute(t[r])) return e.getAttribute(t[r])
    },
    qf = function(e) {
        var t, r;
        try {
            t = e.getBBox()
        } catch {
            t = Du(e), r = 1
        }
        return t && (t.width || t.height) || r || (t = Du(e)), t && !t.width && !t.x && !t.y ? {
            x: +Au(e, ["x", "cx", "x1"]) || 0,
            y: +Au(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : t
    },
    Wf = function(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && qf(e))
    },
    Pi = function(e, t) {
        if (t) {
            var r = e.style,
                i;
            t in si && t !== rr && (t = rt), r.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), r.removeProperty(i === "--" ? t : t.replace(Kl, "-$1").toLowerCase())) : r.removeAttribute(t)
        }
    },
    mi = function(e, t, r, i, n, s) {
        var a = new tr(e._pt, t, r, 0, 1, s ? zf : Bf);
        return e._pt = a, a.b = i, a.e = n, e._props.push(r), a
    },
    Lu = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    Lp = {
        grid: 1,
        flex: 1
    },
    Mi = function o(e, t, r, i) {
        var n = parseFloat(r) || 0,
            s = (r + "").trim().substr((n + "").length) || "px",
            a = qi.style,
            c = vp.test(t),
            l = e.tagName.toLowerCase() === "svg",
            f = (l ? "client" : "offset") + (c ? "Width" : "Height"),
            h = 100,
            d = i === "px",
            u = i === "%",
            g, p, _, b;
        if (i === s || !n || Lu[i] || Lu[s]) return n;
        if (s !== "px" && !d && (n = o(e, t, r, "px")), b = e.getCTM && Wf(e), (u || s === "%") && (si[t] || ~t.indexOf("adius"))) return g = b ? e.getBBox()[c ? "width" : "height"] : e[f], at(u ? n / g * h : n / 100 * g);
        if (a[c ? "width" : "height"] = h + (d ? s : i), p = i !== "rem" && ~t.indexOf("adius") || i === "em" && e.appendChild && !l ? e : e.parentNode, b && (p = (e.ownerSVGElement || {}).parentNode), (!p || p === _i || !p.appendChild) && (p = _i.body), _ = p._gsap, _ && u && _.width && c && _.time === cr.time && !_.uncache) return at(n / _.width * h);
        if (u && (t === "height" || t === "width")) {
            var m = e.style[t];
            e.style[t] = h + i, g = e[f], m ? e.style[t] = m : Pi(e, t)
        } else(u || s === "%") && !Lp[gr(p, "display")] && (a.position = gr(e, "position")), p === e && (a.position = "static"), p.appendChild(qi), g = qi[f], p.removeChild(qi), a.position = "absolute";
        return c && u && (_ = Hi(p), _.time = cr.time, _.width = p[f]), at(d ? g * n / h : g && n ? h / g * n : 0)
    },
    Ur = function(e, t, r, i) {
        var n;
        return jl || Ja(), t in Yr && t !== "transform" && (t = Yr[t], ~t.indexOf(",") && (t = t.split(",")[0])), si[t] && t !== "transform" ? (n = Bo(e, i), n = t !== "transformOrigin" ? n[t] : n.svg ? n.origin : Ws(gr(e, rr)) + " " + n.zOrigin + "px") : (n = e.style[t], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = qs[t] && qs[t](e, t, r) || gr(e, t) || af(e, t) || (t === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? Mi(e, t, n, r) + r : n
    },
    Rp = function(e, t, r, i) {
        if (!r || r === "none") {
            var n = Yn(t, e, 1),
                s = n && gr(e, n, 1);
            s && s !== r ? (t = n, r = s) : t === "borderColor" && (r = gr(e, "borderTopColor"))
        }
        var a = new tr(this._pt, e.style, t, 0, 1, Ff),
            c = 0,
            l = 0,
            f, h, d, u, g, p, _, b, m, w, v, y;
        if (a.b = r, a.e = i, r += "", i += "", i.substring(0, 6) === "var(--" && (i = gr(e, i.substring(4, i.indexOf(")")))), i === "auto" && (p = e.style[t], e.style[t] = i, i = gr(e, t) || i, p ? e.style[t] = p : Pi(e, t)), f = [r, i], Pf(f), r = f[0], i = f[1], d = r.match(bn) || [], y = i.match(bn) || [], y.length) {
            for (; h = bn.exec(i);) _ = h[0], m = i.substring(c, h.index), g ? g = (g + 1) % 5 : (m.substr(-5) === "rgba(" || m.substr(-5) === "hsla(") && (g = 1), _ !== (p = d[l++] || "") && (u = parseFloat(p) || 0, v = p.substr((u + "").length), _.charAt(1) === "=" && (_ = Pn(u, _) + v), b = parseFloat(_), w = _.substr((b + "").length), c = bn.lastIndex - w.length, w || (w = w || _r.units[t] || v, c === i.length && (i += w, a.e += w)), v !== w && (u = Mi(e, t, p, w) || 0), a._pt = {
                _next: a._pt,
                p: m || l === 1 ? m : ",",
                s: u,
                c: b - u,
                m: g && g < 4 || t === "zIndex" ? Math.round : 0
            });
            a.c = c < i.length ? i.substring(c, i.length) : ""
        } else a.r = t === "display" && i === "none" ? zf : Bf;
        return tf.test(i) && (a.e = 0), this._pt = a, a
    },
    Ru = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    Np = function(e) {
        var t = e.split(" "),
            r = t[0],
            i = t[1] || "50%";
        return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r, r = i, i = e), t[0] = Ru[r] || r, t[1] = Ru[i] || i, t.join(" ")
    },
    Fp = function(e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
            var r = t.t,
                i = r.style,
                n = t.u,
                s = r._gsap,
                a, c, l;
            if (n === "all" || n === !0) i.cssText = "", c = 1;
            else
                for (n = n.split(","), l = n.length; --l > -1;) a = n[l], si[a] && (c = 1, a = a === "transformOrigin" ? rr : rt), Pi(r, a);
            c && (Pi(r, rt), s && (s.svg && r.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", Bo(r, 1), s.uncache = 1, Yf(i)))
        }
    },
    qs = {
        clearProps: function(e, t, r, i, n) {
            if (n.data !== "isFromStart") {
                var s = e._pt = new tr(e._pt, t, r, 0, 0, Fp);
                return s.u = i, s.pr = -10, s.tween = n, e._props.push(r), 1
            }
        }
    },
    $o = [1, 0, 0, 1, 0, 0],
    Hf = {},
    Gf = function(e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
    },
    Nu = function(e) {
        var t = gr(e, rt);
        return Gf(t) ? $o : t.substr(7).match(ef).map(at)
    },
    Ql = function(e, t) {
        var r = e._gsap || Hi(e),
            i = e.style,
            n = Nu(e),
            s, a, c, l;
        return r.svg && e.getAttribute("transform") ? (c = e.transform.baseVal.consolidate().matrix, n = [c.a, c.b, c.c, c.d, c.e, c.f], n.join(",") === "1,0,0,1,0,0" ? $o : n) : (n === $o && !e.offsetParent && e !== Mn && !r.svg && (c = i.display, i.display = "block", s = e.parentNode, (!s || !e.offsetParent && !e.getBoundingClientRect().width) && (l = 1, a = e.nextElementSibling, Mn.appendChild(e)), n = Nu(e), c ? i.display = c : Pi(e, "display"), l && (a ? s.insertBefore(e, a) : s ? s.appendChild(e) : Mn.removeChild(e))), t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
    },
    el = function(e, t, r, i, n, s) {
        var a = e._gsap,
            c = n || Ql(e, !0),
            l = a.xOrigin || 0,
            f = a.yOrigin || 0,
            h = a.xOffset || 0,
            d = a.yOffset || 0,
            u = c[0],
            g = c[1],
            p = c[2],
            _ = c[3],
            b = c[4],
            m = c[5],
            w = t.split(" "),
            v = parseFloat(w[0]) || 0,
            y = parseFloat(w[1]) || 0,
            x, T, k, O;
        r ? c !== $o && (T = u * _ - g * p) && (k = v * (_ / T) + y * (-p / T) + (p * m - _ * b) / T, O = v * (-g / T) + y * (u / T) - (u * m - g * b) / T, v = k, y = O) : (x = qf(e), v = x.x + (~w[0].indexOf("%") ? v / 100 * x.width : v), y = x.y + (~(w[1] || w[0]).indexOf("%") ? y / 100 * x.height : y)), i || i !== !1 && a.smooth ? (b = v - l, m = y - f, a.xOffset = h + (b * u + m * p) - b, a.yOffset = d + (b * g + m * _) - m) : a.xOffset = a.yOffset = 0, a.xOrigin = v, a.yOrigin = y, a.smooth = !!i, a.origin = t, a.originIsAbsolute = !!r, e.style[rr] = "0px 0px", s && (mi(s, a, "xOrigin", l, v), mi(s, a, "yOrigin", f, y), mi(s, a, "xOffset", h, a.xOffset), mi(s, a, "yOffset", d, a.yOffset)), e.setAttribute("data-svg-origin", v + " " + y)
    },
    Bo = function(e, t) {
        var r = e._gsap || new Of(e);
        if ("x" in r && !t && !r.uncache) return r;
        var i = e.style,
            n = r.scaleX < 0,
            s = "px",
            a = "deg",
            c = getComputedStyle(e),
            l = gr(e, rr) || "0",
            f, h, d, u, g, p, _, b, m, w, v, y, x, T, k, O, L, z, P, M, R, V, I, Y, K, te, E, j, se, re, ie, Re;
        return f = h = d = p = _ = b = m = w = v = 0, u = g = 1, r.svg = !!(e.getCTM && Wf(e)), c.translate && ((c.translate !== "none" || c.scale !== "none" || c.rotate !== "none") && (i[rt] = (c.translate !== "none" ? "translate3d(" + (c.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (c.rotate !== "none" ? "rotate(" + c.rotate + ") " : "") + (c.scale !== "none" ? "scale(" + c.scale.split(" ").join(",") + ") " : "") + (c[rt] !== "none" ? c[rt] : "")), i.scale = i.rotate = i.translate = "none"), T = Ql(e, r.svg), r.svg && (r.uncache ? (K = e.getBBox(), l = r.xOrigin - K.x + "px " + (r.yOrigin - K.y) + "px", Y = "") : Y = !t && e.getAttribute("data-svg-origin"), el(e, Y || l, !!Y || r.originIsAbsolute, r.smooth !== !1, T)), y = r.xOrigin || 0, x = r.yOrigin || 0, T !== $o && (z = T[0], P = T[1], M = T[2], R = T[3], f = V = T[4], h = I = T[5], T.length === 6 ? (u = Math.sqrt(z * z + P * P), g = Math.sqrt(R * R + M * M), p = z || P ? fn(P, z) * Ii : 0, m = M || R ? fn(M, R) * Ii + p : 0, m && (g *= Math.abs(Math.cos(m * En))), r.svg && (f -= y - (y * z + x * M), h -= x - (y * P + x * R))) : (Re = T[6], re = T[7], E = T[8], j = T[9], se = T[10], ie = T[11], f = T[12], h = T[13], d = T[14], k = fn(Re, se), _ = k * Ii, k && (O = Math.cos(-k), L = Math.sin(-k), Y = V * O + E * L, K = I * O + j * L, te = Re * O + se * L, E = V * -L + E * O, j = I * -L + j * O, se = Re * -L + se * O, ie = re * -L + ie * O, V = Y, I = K, Re = te), k = fn(-M, se), b = k * Ii, k && (O = Math.cos(-k), L = Math.sin(-k), Y = z * O - E * L, K = P * O - j * L, te = M * O - se * L, ie = R * L + ie * O, z = Y, P = K, M = te), k = fn(P, z), p = k * Ii, k && (O = Math.cos(k), L = Math.sin(k), Y = z * O + P * L, K = V * O + I * L, P = P * O - z * L, I = I * O - V * L, z = Y, V = K), _ && Math.abs(_) + Math.abs(p) > 359.9 && (_ = p = 0, b = 180 - b), u = at(Math.sqrt(z * z + P * P + M * M)), g = at(Math.sqrt(I * I + Re * Re)), k = fn(V, I), m = Math.abs(k) > 2e-4 ? k * Ii : 0, v = ie ? 1 / (ie < 0 ? -ie : ie) : 0), r.svg && (Y = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !Gf(gr(e, rt)), Y && e.setAttribute("transform", Y))), Math.abs(m) > 90 && Math.abs(m) < 270 && (n ? (u *= -1, m += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (g *= -1, m += m <= 0 ? 180 : -180)), t = t || r.uncache, r.x = f - ((r.xPercent = f && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + s, r.y = h - ((r.yPercent = h && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + s, r.z = d + s, r.scaleX = at(u), r.scaleY = at(g), r.rotation = at(p) + a, r.rotationX = at(_) + a, r.rotationY = at(b) + a, r.skewX = m + a, r.skewY = w + a, r.transformPerspective = v + s, (r.zOrigin = parseFloat(l.split(" ")[2]) || !t && r.zOrigin || 0) && (i[rr] = Ws(l)), r.xOffset = r.yOffset = 0, r.force3D = _r.force3D, r.renderTransform = r.svg ? $p : Vf ? jf : Ip, r.uncache = 0, r
    },
    Ws = function(e) {
        return (e = e.split(" "))[0] + " " + e[1]
    },
    va = function(e, t, r) {
        var i = Rt(t);
        return at(parseFloat(t) + parseFloat(Mi(e, "x", r + "px", i))) + i
    },
    Ip = function(e, t) {
        t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, jf(e, t)
    },
    Di = "0deg",
    Hn = "0px",
    Ai = ") ",
    jf = function(e, t) {
        var r = t || this,
            i = r.xPercent,
            n = r.yPercent,
            s = r.x,
            a = r.y,
            c = r.z,
            l = r.rotation,
            f = r.rotationY,
            h = r.rotationX,
            d = r.skewX,
            u = r.skewY,
            g = r.scaleX,
            p = r.scaleY,
            _ = r.transformPerspective,
            b = r.force3D,
            m = r.target,
            w = r.zOrigin,
            v = "",
            y = b === "auto" && e && e !== 1 || b === !0;
        if (w && (h !== Di || f !== Di)) {
            var x = parseFloat(f) * En,
                T = Math.sin(x),
                k = Math.cos(x),
                O;
            x = parseFloat(h) * En, O = Math.cos(x), s = va(m, s, T * O * -w), a = va(m, a, -Math.sin(x) * -w), c = va(m, c, k * O * -w + w)
        }
        _ !== Hn && (v += "perspective(" + _ + Ai), (i || n) && (v += "translate(" + i + "%, " + n + "%) "), (y || s !== Hn || a !== Hn || c !== Hn) && (v += c !== Hn || y ? "translate3d(" + s + ", " + a + ", " + c + ") " : "translate(" + s + ", " + a + Ai), l !== Di && (v += "rotate(" + l + Ai), f !== Di && (v += "rotateY(" + f + Ai), h !== Di && (v += "rotateX(" + h + Ai), (d !== Di || u !== Di) && (v += "skew(" + d + ", " + u + Ai), (g !== 1 || p !== 1) && (v += "scale(" + g + ", " + p + Ai), m.style[rt] = v || "translate(0, 0)"
    },
    $p = function(e, t) {
        var r = t || this,
            i = r.xPercent,
            n = r.yPercent,
            s = r.x,
            a = r.y,
            c = r.rotation,
            l = r.skewX,
            f = r.skewY,
            h = r.scaleX,
            d = r.scaleY,
            u = r.target,
            g = r.xOrigin,
            p = r.yOrigin,
            _ = r.xOffset,
            b = r.yOffset,
            m = r.forceCSS,
            w = parseFloat(s),
            v = parseFloat(a),
            y, x, T, k, O;
        c = parseFloat(c), l = parseFloat(l), f = parseFloat(f), f && (f = parseFloat(f), l += f, c += f), c || l ? (c *= En, l *= En, y = Math.cos(c) * h, x = Math.sin(c) * h, T = Math.sin(c - l) * -d, k = Math.cos(c - l) * d, l && (f *= En, O = Math.tan(l - f), O = Math.sqrt(1 + O * O), T *= O, k *= O, f && (O = Math.tan(f), O = Math.sqrt(1 + O * O), y *= O, x *= O)), y = at(y), x = at(x), T = at(T), k = at(k)) : (y = h, k = d, x = T = 0), (w && !~(s + "").indexOf("px") || v && !~(a + "").indexOf("px")) && (w = Mi(u, "x", s, "px"), v = Mi(u, "y", a, "px")), (g || p || _ || b) && (w = at(w + g - (g * y + p * T) + _), v = at(v + p - (g * x + p * k) + b)), (i || n) && (O = u.getBBox(), w = at(w + i / 100 * O.width), v = at(v + n / 100 * O.height)), O = "matrix(" + y + "," + x + "," + T + "," + k + "," + w + "," + v + ")", u.setAttribute("transform", O), m && (u.style[rt] = O)
    },
    Bp = function(e, t, r, i, n) {
        var s = 360,
            a = wt(n),
            c = parseFloat(n) * (a && ~n.indexOf("rad") ? Ii : 1),
            l = c - i,
            f = i + l + "deg",
            h, d;
        return a && (h = n.split("_")[1], h === "short" && (l %= s, l !== l % (s / 2) && (l += l < 0 ? s : -s)), h === "cw" && l < 0 ? l = (l + s * Cu) % s - ~~(l / s) * s : h === "ccw" && l > 0 && (l = (l - s * Cu) % s - ~~(l / s) * s)), e._pt = d = new tr(e._pt, t, r, i, l, bp), d.e = f, d.u = "deg", e._props.push(r), d
    },
    Fu = function(e, t) {
        for (var r in t) e[r] = t[r];
        return e
    },
    zp = function(e, t, r) {
        var i = Fu({}, r._gsap),
            n = "perspective,force3D,transformOrigin,svgOrigin",
            s = r.style,
            a, c, l, f, h, d, u, g;
        i.svg ? (l = r.getAttribute("transform"), r.setAttribute("transform", ""), s[rt] = t, a = Bo(r, 1), Pi(r, rt), r.setAttribute("transform", l)) : (l = getComputedStyle(r)[rt], s[rt] = t, a = Bo(r, 1), s[rt] = l);
        for (c in si) l = i[c], f = a[c], l !== f && n.indexOf(c) < 0 && (u = Rt(l), g = Rt(f), h = u !== g ? Mi(r, c, l, g) : parseFloat(l), d = parseFloat(f), e._pt = new tr(e._pt, a, c, h, d - h, Qa), e._pt.u = g || 0, e._props.push(c));
        Fu(a, i)
    };
er("padding,margin,Width,Radius", function(o, e) {
    var t = "Top",
        r = "Right",
        i = "Bottom",
        n = "Left",
        s = (e < 3 ? [t, r, i, n] : [t + n, t + r, i + r, i + n]).map(function(a) {
            return e < 2 ? o + a : "border" + a + o
        });
    qs[e > 1 ? "border" + o : o] = function(a, c, l, f, h) {
        var d, u;
        if (arguments.length < 4) return d = s.map(function(g) {
            return Ur(a, g, l)
        }), u = d.join(" "), u.split(d[0]).length === 5 ? d[0] : u;
        d = (f + "").split(" "), u = {}, s.forEach(function(g, p) {
            return u[g] = d[p] = d[p] || d[(p - 1) / 2 | 0]
        }), a.init(c, u, h)
    }
});
var Uf = {
    name: "css",
    register: Ja,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, t, r, i, n) {
        var s = this._props,
            a = e.style,
            c = r.vars.startAt,
            l, f, h, d, u, g, p, _, b, m, w, v, y, x, T, k, O;
        jl || Ja(), this.styles = this.styles || Xf(e), k = this.styles.props, this.tween = r;
        for (p in t)
            if (p !== "autoRound" && (f = t[p], !(lr[p] && Df(p, t, r, i, e, n)))) {
                if (u = typeof f, g = qs[p], u === "function" && (f = f.call(r, i, e, n), u = typeof f), u === "string" && ~f.indexOf("random(") && (f = No(f)), g) g(this, e, p, f, r) && (T = 1);
                else if (p.substr(0, 2) === "--") l = (getComputedStyle(e).getPropertyValue(p) + "").trim(), f += "", xi.lastIndex = 0, xi.test(l) || (_ = Rt(l), b = Rt(f), b ? _ !== b && (l = Mi(e, p, l, b) + b) : _ && (f += _)), this.add(a, "setProperty", l, f, i, n, 0, 0, p), s.push(p), k.push(p, 0, a[p]);
                else if (u !== "undefined") {
                    if (c && p in c ? (l = typeof c[p] == "function" ? c[p].call(r, i, e, n) : c[p], wt(l) && ~l.indexOf("random(") && (l = No(l)), Rt(l + "") || l === "auto" || (l += _r.units[p] || Rt(Ur(e, p)) || ""), (l + "").charAt(1) === "=" && (l = Ur(e, p))) : l = Ur(e, p), d = parseFloat(l), m = u === "string" && f.charAt(1) === "=" && f.substr(0, 2), m && (f = f.substr(2)), h = parseFloat(f), p in Yr && (p === "autoAlpha" && (d === 1 && Ur(e, "visibility") === "hidden" && h && (d = 0), k.push("visibility", 0, a.visibility), mi(this, a, "visibility", d ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), p !== "scale" && p !== "transform" && (p = Yr[p], ~p.indexOf(",") && (p = p.split(",")[0]))), w = p in si, w) {
                        if (this.styles.save(p), O = f, u === "string" && f.substring(0, 6) === "var(--") {
                            if (f = gr(e, f.substring(4, f.indexOf(")"))), f.substring(0, 5) === "calc(") {
                                var L = e.style.perspective;
                                e.style.perspective = f, f = gr(e, "perspective"), L ? e.style.perspective = L : Pi(e, "perspective")
                            }
                            h = parseFloat(f)
                        }
                        if (v || (y = e._gsap, y.renderTransform && !t.parseTransform || Bo(e, t.parseTransform), x = t.smoothOrigin !== !1 && y.smooth, v = this._pt = new tr(this._pt, a, rt, 0, 1, y.renderTransform, y, 0, -1), v.dep = 1), p === "scale") this._pt = new tr(this._pt, y, "scaleY", y.scaleY, (m ? Pn(y.scaleY, m + h) : h) - y.scaleY || 0, Qa), this._pt.u = 0, s.push("scaleY", p), p += "X";
                        else if (p === "transformOrigin") {
                            k.push(rr, 0, a[rr]), f = Np(f), y.svg ? el(e, f, 0, x, 0, this) : (b = parseFloat(f.split(" ")[2]) || 0, b !== y.zOrigin && mi(this, y, "zOrigin", y.zOrigin, b), mi(this, a, p, Ws(l), Ws(f)));
                            continue
                        } else if (p === "svgOrigin") {
                            el(e, f, 1, x, 0, this);
                            continue
                        } else if (p in Hf) {
                            Bp(this, y, p, d, m ? Pn(d, m + f) : f);
                            continue
                        } else if (p === "smoothOrigin") {
                            mi(this, y, "smooth", y.smooth, f);
                            continue
                        } else if (p === "force3D") {
                            y[p] = f;
                            continue
                        } else if (p === "transform") {
                            zp(this, f, e);
                            continue
                        }
                    } else p in a || (p = Yn(p) || p);
                    if (w || (h || h === 0) && (d || d === 0) && !wp.test(f) && p in a) _ = (l + "").substr((d + "").length), h || (h = 0), b = Rt(f) || (p in _r.units ? _r.units[p] : _), _ !== b && (d = Mi(e, p, l, b)), this._pt = new tr(this._pt, w ? y : a, p, d, (m ? Pn(d, m + h) : h) - d, !w && (b === "px" || p === "zIndex") && t.autoRound !== !1 ? kp : Qa), this._pt.u = b || 0, w && O !== f ? (this._pt.b = l, this._pt.e = O, this._pt.r = Tp) : _ !== b && b !== "%" && (this._pt.b = l, this._pt.r = xp);
                    else if (p in a) Rp.call(this, e, p, l, m ? m + f : f);
                    else if (p in e) this.add(e, p, l || e[p], m ? m + f : f, i, n);
                    else if (p !== "parseTransform") {
                        $l(p, f);
                        continue
                    }
                    w || (p in a ? k.push(p, 0, a[p]) : typeof e[p] == "function" ? k.push(p, 2, e[p]()) : k.push(p, 1, l || e[p])), s.push(p)
                }
            }
        T && If(this)
    },
    render: function(e, t) {
        if (t.tween._time || !Ul())
            for (var r = t._pt; r;) r.r(e, r.d), r = r._next;
        else t.styles.revert()
    },
    get: Ur,
    aliases: Yr,
    getSetter: function(e, t, r) {
        var i = Yr[t];
        return i && i.indexOf(",") < 0 && (t = i), t in si && t !== rr && (e._gsap.x || Ur(e, "x")) ? r && Eu === r ? t === "scale" ? Ep : Mp : (Eu = r || {}) && (t === "scale" ? Cp : Op) : e.style && !Nl(e.style[t]) ? Sp : ~t.indexOf("-") ? Pp : Hl(e, t)
    },
    core: {
        _removeProperty: Pi,
        _getMatrix: Ql
    }
};
ir.utils.checkPrefix = Yn;
ir.core.getStyleSaver = Xf;
(function(o, e, t, r) {
    var i = er(o + "," + e + "," + t, function(n) {
        si[n] = 1
    });
    er(e, function(n) {
        _r.units[n] = "deg", Hf[n] = 1
    }), Yr[i[13]] = o + "," + e, er(r, function(n) {
        var s = n.split(":");
        Yr[s[1]] = i[s[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
er("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
    _r.units[o] = "px"
});
ir.registerPlugin(Uf);
var oe = ir.registerPlugin(Uf) || ir;
oe.core.Tween;
/*!
 * paths 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var Yp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
    Xp = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
    Vp = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
    qp = /(^[#\.][a-z]|[a-y][a-z])/i,
    Wp = Math.PI / 180,
    Hp = 180 / Math.PI,
    es = Math.sin,
    ts = Math.cos,
    Zt = Math.abs,
    Qr = Math.sqrt,
    eo = Math.atan2,
    zo = 1e8,
    Iu = function(e) {
        return typeof e == "string"
    },
    Kf = function(e) {
        return typeof e == "number"
    },
    Gp = function(e) {
        return typeof e > "u"
    },
    jp = {},
    Up = {},
    Hs = 1e5,
    Qf = function(e) {
        return Math.round((e + zo) % 1 * Hs) / Hs || (e < 0 ? 0 : 1)
    },
    Le = function(e) {
        return Math.round(e * Hs) / Hs || 0
    },
    $u = function(e) {
        return Math.round(e * 1e10) / 1e10 || 0
    },
    Bu = function(e) {
        return e.closed = Math.abs(e[0] - e[e.length - 2]) < .001 && Math.abs(e[1] - e[e.length - 1]) < .001
    },
    zu = function(e, t, r, i) {
        var n = e[t],
            s = i === 1 ? 6 : tl(n, r, i);
        if ((s || !i) && s + r + 2 < n.length) return e.splice(t, 0, n.slice(0, r + s + 2)), n.splice(0, r + s), 1
    },
    Zl = function(e, t, r) {
        var i = e.length,
            n = ~~(r * i);
        if (e[n] > t) {
            for (; --n && e[n] > t;);
            n < 0 && (n = 0)
        } else
            for (; e[++n] < t && n < i;);
        return n < i ? n : i - 1
    },
    Kp = function(e, t) {
        var r = e.length;
        for (t || e.reverse(); r--;) e[r].reversed || Jp(e[r])
    },
    Yu = function(e, t) {
        return t.totalLength = e.totalLength, e.samples ? (t.samples = e.samples.slice(0), t.lookup = e.lookup.slice(0), t.minLength = e.minLength, t.resolution = e.resolution) : e.totalPoints && (t.totalPoints = e.totalPoints), t
    },
    Qp = function(e, t) {
        var r = e.length,
            i = e[r - 1] || [],
            n = i.length;
        r && t[0] === i[n - 2] && t[1] === i[n - 1] && (t = i.concat(t.slice(2)), r--), e[r] = t
    },
    _o;

function ks(o) {
    o = Iu(o) && qp.test(o) && document.querySelector(o) || o;
    var e = o.getAttribute ? o : 0,
        t;
    return e && (o = o.getAttribute("d")) ? (e._gsPath || (e._gsPath = {}), t = e._gsPath[o], t && !t._dirty ? t : e._gsPath[o] = Yo(o)) : o ? Iu(o) ? Yo(o) : Kf(o[0]) ? [o] : o : console.warn("Expecting a <path> element or an SVG path data string")
}

function Zp(o) {
    for (var e = [], t = 0; t < o.length; t++) e[t] = Yu(o[t], o[t].slice(0));
    return Yu(o, e)
}

function Jp(o) {
    var e = 0,
        t;
    for (o.reverse(); e < o.length; e += 2) t = o[e], o[e] = o[e + 1], o[e + 1] = t;
    o.reversed = !o.reversed
}
var eg = function(e, t) {
        var r = document.createElementNS("http://www.w3.org/2000/svg", "path"),
            i = [].slice.call(e.attributes),
            n = i.length,
            s;
        for (t = "," + t + ","; --n > -1;) s = i[n].nodeName.toLowerCase(), t.indexOf("," + s + ",") < 0 && r.setAttributeNS(null, s, i[n].nodeValue);
        return r
    },
    tg = {
        rect: "rx,ry,x,y,width,height",
        circle: "r,cx,cy",
        ellipse: "rx,ry,cx,cy",
        line: "x1,x2,y1,y2"
    },
    rg = function(e, t) {
        for (var r = t ? t.split(",") : [], i = {}, n = r.length; --n > -1;) i[r[n]] = +e.getAttribute(r[n]) || 0;
        return i
    };

function ig(o, e) {
    var t = o.tagName.toLowerCase(),
        r = .552284749831,
        i, n, s, a, c, l, f, h, d, u, g, p, _, b, m, w, v, y, x, T, k, O;
    return t === "path" || !o.getBBox ? o : (l = eg(o, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), O = rg(o, tg[t]), t === "rect" ? (a = O.rx, c = O.ry || a, n = O.x, s = O.y, u = O.width - a * 2, g = O.height - c * 2, a || c ? (p = n + a * (1 - r), _ = n + a, b = _ + u, m = b + a * r, w = b + a, v = s + c * (1 - r), y = s + c, x = y + g, T = x + c * r, k = x + c, i = "M" + w + "," + y + " V" + x + " C" + [w, T, m, k, b, k, b - (b - _) / 3, k, _ + (b - _) / 3, k, _, k, p, k, n, T, n, x, n, x - (x - y) / 3, n, y + (x - y) / 3, n, y, n, v, p, s, _, s, _ + (b - _) / 3, s, b - (b - _) / 3, s, b, s, m, s, w, v, w, y].join(",") + "z") : i = "M" + (n + u) + "," + s + " v" + g + " h" + -u + " v" + -g + " h" + u + "z") : t === "circle" || t === "ellipse" ? (t === "circle" ? (a = c = O.r, h = a * r) : (a = O.rx, c = O.ry, h = c * r), n = O.cx, s = O.cy, f = a * r, i = "M" + (n + a) + "," + s + " C" + [n + a, s + h, n + f, s + c, n, s + c, n - f, s + c, n - a, s + h, n - a, s, n - a, s - h, n - f, s - c, n, s - c, n + f, s - c, n + a, s - h, n + a, s].join(",") + "z") : t === "line" ? i = "M" + O.x1 + "," + O.y1 + " L" + O.x2 + "," + O.y2 : (t === "polyline" || t === "polygon") && (d = (o.getAttribute("points") + "").match(Xp) || [], n = d.shift(), s = d.shift(), i = "M" + n + "," + s + " L" + d.join(","), t === "polygon" && (i += "," + n + "," + s + "z")), l.setAttribute("d", Jl(l._gsRawPath = Yo(i))), e && o.parentNode && (o.parentNode.insertBefore(l, o), o.parentNode.removeChild(o)), l)
}

function Zf(o, e, t) {
    var r = o[e],
        i = o[e + 2],
        n = o[e + 4],
        s;
    return r += (i - r) * t, i += (n - i) * t, r += (i - r) * t, s = i + (n + (o[e + 6] - n) * t - i) * t - r, r = o[e + 1], i = o[e + 3], n = o[e + 5], r += (i - r) * t, i += (n - i) * t, r += (i - r) * t, Le(eo(i + (n + (o[e + 7] - n) * t - i) * t - r, s) * Hp)
}

function Jf(o, e, t) {
    t = Gp(t) ? 1 : $u(t) || 0, e = $u(e) || 0;
    var r = Math.max(0, ~~(Zt(t - e) - 1e-8)),
        i = Zp(o);
    if (e > t && (e = 1 - e, t = 1 - t, Kp(i), i.totalLength = 0), e < 0 || t < 0) {
        var n = Math.abs(~~Math.min(e, t)) + 1;
        e += n, t += n
    }
    i.totalLength || Ki(i);
    var s = t > 1,
        a = Xu(i, e, jp, !0),
        c = Xu(i, t, Up),
        l = c.segment,
        f = a.segment,
        h = c.segIndex,
        d = a.segIndex,
        u = c.i,
        g = a.i,
        p = d === h,
        _ = u === g && p,
        b, m, w, v, y, x, T, k;
    if (s || r) {
        for (b = h < d || p && u < g || _ && c.t < a.t, zu(i, d, g, a.t) && (d++, b || (h++, _ ? (c.t = (c.t - a.t) / (1 - a.t), u = 0) : p && (u -= g))), Math.abs(1 - (t - e)) < 1e-5 ? h = d - 1 : !c.t && h ? h-- : zu(i, h, u, c.t) && b && d++, a.t === 1 && (d = (d + 1) % i.length), y = [], x = i.length, T = 1 + x * r, k = d, T += (x - d + h) % x, v = 0; v < T; v++) Qp(y, i[k++ % x]);
        i = y
    } else if (w = c.t === 1 ? 6 : tl(l, u, c.t), e !== t)
        for (m = tl(f, g, _ ? a.t / c.t : a.t), p && (w += m), l.splice(u + w + 2), (m || g) && f.splice(0, g + m), v = i.length; v--;)(v < d || v > h) && i.splice(v, 1);
    else l.angle = Zf(l, u + w, 0), u += w, a = l[u], c = l[u + 1], l.length = l.totalLength = 0, l.totalPoints = i.totalPoints = 8, l.push(a, c, a, c, a, c, a, c);
    return i.totalLength = 0, i
}

function eh(o, e, t) {
    e = e || 0, o.samples || (o.samples = [], o.lookup = []);
    var r = ~~o.resolution || 12,
        i = 1 / r,
        n = t ? e + t * 6 + 1 : o.length,
        s = o[e],
        a = o[e + 1],
        c = e ? e / 6 * r : 0,
        l = o.samples,
        f = o.lookup,
        h = (e ? o.minLength : zo) || zo,
        d = l[c + t * r - 1],
        u = e ? l[c - 1] : 0,
        g, p, _, b, m, w, v, y, x, T, k, O, L, z, P, M, R;
    for (l.length = f.length = 0, p = e + 2; p < n; p += 6) {
        if (_ = o[p + 4] - s, b = o[p + 2] - s, m = o[p] - s, y = o[p + 5] - a, x = o[p + 3] - a, T = o[p + 1] - a, w = v = k = O = 0, Zt(_) < .01 && Zt(y) < .01 && Zt(m) + Zt(T) < .01) o.length > 8 && (o.splice(p, 6), p -= 6, n -= 6);
        else
            for (g = 1; g <= r; g++) z = i * g, L = 1 - z, w = v - (v = (z * z * _ + 3 * L * (z * b + L * m)) * z), k = O - (O = (z * z * y + 3 * L * (z * x + L * T)) * z), M = Qr(k * k + w * w), M < h && (h = M), u += M, l[c++] = u;
        s += _, a += y
    }
    if (d)
        for (d -= u; c < l.length; c++) l[c] += d;
    if (l.length && h) {
        if (o.totalLength = R = l[l.length - 1] || 0, o.minLength = h, R / h < 9999)
            for (M = P = 0, g = 0; g < R; g += h) f[M++] = l[P] < g ? ++P : P
    } else o.totalLength = l[0] = 0;
    return e ? u - l[e / 2 - 1] : u
}

function Ki(o, e) {
    var t, r, i;
    for (i = t = r = 0; i < o.length; i++) o[i].resolution = ~~e || 12, t += eh(o[i]), r += o[i].length;
    return o.totalPoints = r, o.totalLength = t, o
}

function tl(o, e, t) {
    if (t <= 0 || t >= 1) return 0;
    var r = o[e],
        i = o[e + 1],
        n = o[e + 2],
        s = o[e + 3],
        a = o[e + 4],
        c = o[e + 5],
        l = o[e + 6],
        f = o[e + 7],
        h = r + (n - r) * t,
        d = n + (a - n) * t,
        u = i + (s - i) * t,
        g = s + (c - s) * t,
        p = h + (d - h) * t,
        _ = u + (g - u) * t,
        b = a + (l - a) * t,
        m = c + (f - c) * t;
    return d += (b - d) * t, g += (m - g) * t, o.splice(e + 2, 4, Le(h), Le(u), Le(p), Le(_), Le(p + (d - p) * t), Le(_ + (g - _) * t), Le(d), Le(g), Le(b), Le(m)), o.samples && o.samples.splice(e / 6 * o.resolution | 0, 0, 0, 0, 0, 0, 0, 0), 6
}

function Xu(o, e, t, r) {
    t = t || {}, o.totalLength || Ki(o), (e < 0 || e > 1) && (e = Qf(e));
    var i = 0,
        n = o[0],
        s, a, c, l, f, h, d;
    if (!e) d = h = i = 0, n = o[0];
    else if (e === 1) d = 1, i = o.length - 1, n = o[i], h = n.length - 8;
    else {
        if (o.length > 1) {
            for (c = o.totalLength * e, f = h = 0;
                (f += o[h++].totalLength) < c;) i = h;
            n = o[i], l = f - n.totalLength, e = (c - l) / (f - l) || 0
        }
        s = n.samples, a = n.resolution, c = n.totalLength * e, h = n.lookup.length ? n.lookup[~~(c / n.minLength)] || 0 : Zl(s, c, e), l = h ? s[h - 1] : 0, f = s[h], f < c && (l = f, f = s[++h]), d = 1 / a * ((c - l) / (f - l) + h % a), h = ~~(h / a) * 6, r && d === 1 && (h + 6 < n.length ? (h += 6, d = 0) : i + 1 < o.length && (h = d = 0, n = o[++i]))
    }
    return t.t = d, t.i = h, t.path = o, t.segment = n, t.segIndex = i, t
}

function Vu(o, e, t, r) {
    var i = o[0],
        n = r || {},
        s, a, c, l, f, h, d, u, g;
    if ((e < 0 || e > 1) && (e = Qf(e)), i.lookup || Ki(o), o.length > 1) {
        for (c = o.totalLength * e, f = h = 0;
            (f += o[h++].totalLength) < c;) i = o[h];
        l = f - i.totalLength, e = (c - l) / (f - l) || 0
    }
    return s = i.samples, a = i.resolution, c = i.totalLength * e, h = i.lookup.length ? i.lookup[e < 1 ? ~~(c / i.minLength) : i.lookup.length - 1] || 0 : Zl(s, c, e), l = h ? s[h - 1] : 0, f = s[h], f < c && (l = f, f = s[++h]), d = 1 / a * ((c - l) / (f - l) + h % a) || 0, g = 1 - d, h = ~~(h / a) * 6, u = i[h], n.x = Le((d * d * (i[h + 6] - u) + 3 * g * (d * (i[h + 4] - u) + g * (i[h + 2] - u))) * d + u), n.y = Le((d * d * (i[h + 7] - (u = i[h + 1])) + 3 * g * (d * (i[h + 5] - u) + g * (i[h + 3] - u))) * d + u), t && (n.angle = i.totalLength ? Zf(i, h, d >= 1 ? 1 - 1e-9 : d || 1e-9) : i.angle || 0), n
}

function Tn(o, e, t, r, i, n, s) {
    for (var a = o.length, c, l, f, h, d; --a > -1;)
        for (c = o[a], l = c.length, f = 0; f < l; f += 2) h = c[f], d = c[f + 1], c[f] = h * e + d * r + n, c[f + 1] = h * t + d * i + s;
    return o._dirty = 1, o
}

function ng(o, e, t, r, i, n, s, a, c) {
    if (!(o === a && e === c)) {
        t = Zt(t), r = Zt(r);
        var l = i % 360 * Wp,
            f = ts(l),
            h = es(l),
            d = Math.PI,
            u = d * 2,
            g = (o - a) / 2,
            p = (e - c) / 2,
            _ = f * g + h * p,
            b = -h * g + f * p,
            m = _ * _,
            w = b * b,
            v = m / (t * t) + w / (r * r);
        v > 1 && (t = Qr(v) * t, r = Qr(v) * r);
        var y = t * t,
            x = r * r,
            T = (y * x - y * w - x * m) / (y * w + x * m);
        T < 0 && (T = 0);
        var k = (n === s ? -1 : 1) * Qr(T),
            O = k * (t * b / r),
            L = k * -(r * _ / t),
            z = (o + a) / 2,
            P = (e + c) / 2,
            M = z + (f * O - h * L),
            R = P + (h * O + f * L),
            V = (_ - O) / t,
            I = (b - L) / r,
            Y = (-_ - O) / t,
            K = (-b - L) / r,
            te = V * V + I * I,
            E = (I < 0 ? -1 : 1) * Math.acos(V / Qr(te)),
            j = (V * K - I * Y < 0 ? -1 : 1) * Math.acos((V * Y + I * K) / Qr(te * (Y * Y + K * K)));
        isNaN(j) && (j = d), !s && j > 0 ? j -= u : s && j < 0 && (j += u), E %= u, j %= u;
        var se = Math.ceil(Zt(j) / (u / 4)),
            re = [],
            ie = j / se,
            Re = 4 / 3 * es(ie / 2) / (1 + ts(ie / 2)),
            Ce = f * t,
            Ie = h * t,
            we = h * -r,
            Qe = f * r,
            Oe;
        for (Oe = 0; Oe < se; Oe++) i = E + Oe * ie, _ = ts(i), b = es(i), V = ts(i += ie), I = es(i), re.push(_ - Re * b, b + Re * _, V + Re * I, I - Re * V, V, I);
        for (Oe = 0; Oe < re.length; Oe += 2) _ = re[Oe], b = re[Oe + 1], re[Oe] = _ * Ce + b * we + M, re[Oe + 1] = _ * Ie + b * Qe + R;
        return re[Oe - 2] = a, re[Oe - 1] = c, re
    }
}

function Yo(o) {
    var e = (o + "").replace(Vp, function(O) {
            var L = +O;
            return L < 1e-4 && L > -1e-4 ? 0 : L
        }).match(Yp) || [],
        t = [],
        r = 0,
        i = 0,
        n = 2 / 3,
        s = e.length,
        a = 0,
        c = "ERROR: malformed path: " + o,
        l, f, h, d, u, g, p, _, b, m, w, v, y, x, T, k = function(L, z, P, M) {
            m = (P - L) / 3, w = (M - z) / 3, p.push(L + m, z + w, P - m, M - w, P, M)
        };
    if (!o || !isNaN(e[0]) || isNaN(e[1])) return console.log(c), t;
    for (l = 0; l < s; l++)
        if (y = u, isNaN(e[l]) ? (u = e[l].toUpperCase(), g = u !== e[l]) : l--, h = +e[l + 1], d = +e[l + 2], g && (h += r, d += i), l || (_ = h, b = d), u === "M") p && (p.length < 8 ? t.length -= 1 : a += p.length, Bu(p)), r = _ = h, i = b = d, p = [h, d], t.push(p), l += 2, u = "L";
        else if (u === "C") p || (p = [0, 0]), g || (r = i = 0), p.push(h, d, r + e[l + 3] * 1, i + e[l + 4] * 1, r += e[l + 5] * 1, i += e[l + 6] * 1), l += 6;
    else if (u === "S") m = r, w = i, (y === "C" || y === "S") && (m += r - p[p.length - 4], w += i - p[p.length - 3]), g || (r = i = 0), p.push(m, w, h, d, r += e[l + 3] * 1, i += e[l + 4] * 1), l += 4;
    else if (u === "Q") m = r + (h - r) * n, w = i + (d - i) * n, g || (r = i = 0), r += e[l + 3] * 1, i += e[l + 4] * 1, p.push(m, w, r + (h - r) * n, i + (d - i) * n, r, i), l += 4;
    else if (u === "T") m = r - p[p.length - 4], w = i - p[p.length - 3], p.push(r + m, i + w, h + (r + m * 1.5 - h) * n, d + (i + w * 1.5 - d) * n, r = h, i = d), l += 2;
    else if (u === "H") k(r, i, r = h, i), l += 1;
    else if (u === "V") k(r, i, r, i = h + (g ? i - r : 0)), l += 1;
    else if (u === "L" || u === "Z") u === "Z" && (h = _, d = b, p.closed = !0), (u === "L" || Zt(r - h) > .5 || Zt(i - d) > .5) && (k(r, i, h, d), u === "L" && (l += 2)), r = h, i = d;
    else if (u === "A") {
        if (x = e[l + 4], T = e[l + 5], m = e[l + 6], w = e[l + 7], f = 7, x.length > 1 && (x.length < 3 ? (w = m, m = T, f--) : (w = T, m = x.substr(2), f -= 2), T = x.charAt(1), x = x.charAt(0)), v = ng(r, i, +e[l + 1], +e[l + 2], +e[l + 3], +x, +T, (g ? r : 0) + m * 1, (g ? i : 0) + w * 1), l += f, v)
            for (f = 0; f < v.length; f++) p.push(v[f]);
        r = p[p.length - 2], i = p[p.length - 1]
    } else console.log(c);
    return l = p.length, l < 6 ? (t.pop(), l = 0) : Bu(p), t.totalPoints = a + l, t
}

function qu(o, e, t, r, i, n, s, a, c, l, f) {
    var h = (o + t) / 2,
        d = (e + r) / 2,
        u = (t + i) / 2,
        g = (r + n) / 2,
        p = (i + s) / 2,
        _ = (n + a) / 2,
        b = (h + u) / 2,
        m = (d + g) / 2,
        w = (u + p) / 2,
        v = (g + _) / 2,
        y = (b + w) / 2,
        x = (m + v) / 2,
        T = s - o,
        k = a - e,
        O = Zt((t - s) * k - (r - a) * T),
        L = Zt((i - s) * k - (n - a) * T),
        z;
    return l || (l = [o, e, s, a], f = 2), l.splice(f || l.length - 2, 0, y, x), (O + L) * (O + L) > c * (T * T + k * k) && (z = l.length, qu(o, e, h, d, b, m, y, x, c, l, f), qu(y, x, w, v, p, _, s, a, c, l, f + 2 + (l.length - z))), l
}

function og(o, e) {
    e === void 0 && (e = 1);
    for (var t = o[0], r = 0, i = [t, r], n = 2; n < o.length; n += 2) i.push(t, r, o[n], r = (o[n] - t) * e / 2, t = o[n], -r);
    return i
}

function s_(o, e) {
    o.samples || eh(o);
    for (var t = o.samples, r = o.lookup, i = o.resolution, n = o.totalLength, s = o.slice(0, 2), a = [], c = o.length - 4, l = 6, f = .2, h = 0, d = 0, u, g, p, _, b, m, w, v, y, x, T, k, O, L; l < c; l += 6) Math.abs(eo(o[l + 1] - o[l - 1], o[l] - o[l - 2]) - eo(o[l + 3] - o[l + 1], o[l + 2] - o[l])) > f && a.push(l);
    if (a.push(o.length - 2), c = a.length, s.nonSmooth = k = [1], e > c)
        for (e -= c, b = 0; b < c; b++) {
            for (O = a[b], L = Math.round(O / 6 * i), y = t[L - 1] - h, g = Math.round(t[L - 1] / n * e) - d, d += g, m = 1 / (g + 1), w = 1; w <= g; w++) x = h + y * w * m, l = r.length ? r[x < n ? ~~(x / o.minLength) : r.length - 1] || 0 : Zl(t, x, x / n), p = l ? t[l - 1] : 0, _ = t[l], _ < x && (p = _, _ = t[++l]), u = 1 / i * ((x - p) / (_ - p) + l % i) || 0, v = 1 - u, l = ~~(l / i) * 6, T = o[l], s.push(Le((u * u * (o[l + 6] - T) + 3 * v * (u * (o[l + 4] - T) + v * (o[l + 2] - T))) * u + T), Le((u * u * (o[l + 7] - (T = o[l + 1])) + 3 * v * (u * (o[l + 5] - T) + v * (o[l + 3] - T))) * u + T));
            k[s.length] = 1, s.push(o[O], o[O + 1]), h += y
        }
    return l = o.length - 2, o.closed && Math.abs(eo(o[l + 1] - o[l - 1], o[l] - o[l - 2]) - eo(o[3] - o[1], o[2] - o[0])) <= f && (k[0] = k[k.length - 1] = 0), s
}

function rl(o, e) {
    Zt(o[0] - o[2]) < 1e-4 && Zt(o[1] - o[3]) < 1e-4 && (o = o.slice(2));
    var t = o.length - 2,
        r = +o[0],
        i = +o[1],
        n = +o[2],
        s = +o[3],
        a = [r, i, r, i],
        c = n - r,
        l = s - i,
        f = o.nonSmooth || [],
        h = Math.abs(o[t] - r) < .001 && Math.abs(o[t + 1] - i) < .001,
        d, u, g, p, _, b, m, w, v, y, x, T, k, O, L;
    if (!t) return [r, i, r, i, r, i, r, i];
    for (h && (o.push(n, s), n = r, s = i, r = o[t - 2], i = o[t - 1], o.unshift(r, i), t += 4, f = [0, 0].concat(f)), e = e || e === 0 ? +e : 1, g = 2; g < t; g += 2)
        if (d = r, u = i, r = n, i = s, n = +o[g + 2], s = +o[g + 3], !(r === n && i === s)) {
            if (p = c, _ = l, c = n - r, l = s - i, f[g]) {
                a.push(r - (r - d) / 4, i - (i - u) / 4, r, i, r + (n - r) / 4, i + (s - i) / 4);
                continue
            }
            b = Qr(p * p + _ * _), m = Qr(c * c + l * l), w = Qr(Math.pow(c / m + p / b, 2) + Math.pow(l / m + _ / b, 2)), v = (b + m) * e * .25 / w, y = r - (r - d) * (b ? v / b : 0), x = r + (n - r) * (m ? v / m : 0), T = r - (y + ((x - y) * (b * 3 / (b + m) + .5) / 4 || 0)), k = i - (i - u) * (b ? v / b : 0), O = i + (s - i) * (m ? v / m : 0), L = i - (k + ((O - k) * (b * 3 / (b + m) + .5) / 4 || 0)), a.push(Le(y + T), Le(k + L), Le(r), Le(i), Le(x + T), Le(O + L))
        }
    return r !== n || i !== s || a.length < 4 ? a.push(Le(n), Le(s), Le(n), Le(s)) : a.length -= 2, a.length === 2 ? a.push(r, i, r, i, r, i) : h && (a.splice(0, 6), a.length -= 6), a.closed = h, a
}

function sg(o, e, t, r, i, n) {
    var s = i - t,
        a = n - r,
        c;
    return (s || a) && (c = ((o - t) * s + (e - r) * a) / (s * s + a * a), c > 1 ? (t = i, r = n) : c > 0 && (t += s * c, r += a * c)), Math.pow(o - t, 2) + Math.pow(e - r, 2)
}

function il(o, e, t, r, i) {
    var n = r,
        s = o[e],
        a = o[e + 1],
        c = o[t],
        l = o[t + 1],
        f, h, d;
    for (h = e + 2; h < t; h += 2) d = sg(o[h], o[h + 1], s, a, c, l), d > n && (f = h, n = d);
    n > r && (f - e > 2 && il(o, e, f, r, i), i.push(o[f], o[f + 1]), t - f > 2 && il(o, f, t, r, i))
}

function a_(o, e) {
    var t = parseFloat(o[0]),
        r = parseFloat(o[1]),
        i = [t, r],
        n = o.length - 2,
        s, a, c, l, f, h, d;
    for (e = Math.pow(e || 1, 2), s = 2; s < n; s += 2) a = parseFloat(o[s]), c = parseFloat(o[s + 1]), l = t - a, f = r - c, l * l + f * f > e && (i.push(a, c), t = a, r = c);
    return i.push(parseFloat(o[n]), parseFloat(o[n + 1])), d = i.length - 2, h = [i[0], i[1]], il(i, 0, d, e, h), h.push(i[d], i[d + 1]), h
}

function th(o, e, t, r, i, n, s, a, c, l, f, h, d, u) {
    var g = (i - r) / n,
        p = 0,
        _ = r,
        b, m, w, v, y, x;
    for (_o = zo; _ <= i;) x = 1 - _, b = x * x * x * s + 3 * x * x * _ * c + 3 * x * _ * _ * f + _ * _ * _ * d, m = x * x * x * a + 3 * x * x * _ * l + 3 * x * _ * _ * h + _ * _ * _ * u, v = b - e, y = m - t, w = v * v + y * y, w < _o && (_o = w, p = _), _ += g;
    return o > 1 ? th(o - 1, e, t, Math.max(p - g, 0), Math.min(p + g, 1), n, s, a, c, l, f, h, d, u) : p
}

function l_(o, e, t, r) {
    var i = {
            j: 0,
            i: 0,
            t: 0
        },
        n = zo,
        s, a, c, l;
    for (a = 0; a < o.length; a++)
        for (l = o[a], s = 0; s < l.length; s += 6) c = th(1, e, t, 0, 1, r || 20, l[s], l[s + 1], l[s + 2], l[s + 3], l[s + 4], l[s + 5], l[s + 6], l[s + 7]), n > _o && (n = _o, i.j = a, i.i = s, i.t = c);
    return i
}

function Jl(o) {
    Kf(o[0]) && (o = [o]);
    var e = "",
        t = o.length,
        r, i, n, s;
    for (i = 0; i < t; i++) {
        for (s = o[i], e += "M" + Le(s[0]) + "," + Le(s[1]) + " C", r = s.length, n = 2; n < r; n++) e += Le(s[n++]) + "," + Le(s[n++]) + " " + Le(s[n++]) + "," + Le(s[n++]) + " " + Le(s[n++]) + "," + Le(s[n]) + " ";
        s.closed && (e += "z")
    }
    return e
}
/*!
 * CustomEase 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var Qt, rh, ih = function() {
        return Qt || typeof window < "u" && (Qt = window.gsap) && Qt.registerPlugin && Qt
    },
    Wu = function() {
        Qt = ih(), Qt ? (Qt.registerEase("_CE", ai.create), rh = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
    },
    ag = 1e20,
    rs = function(e) {
        return ~~(e * 1e3 + (e < 0 ? -.5 : .5)) / 1e3
    },
    lg = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
    ug = /[cLlsSaAhHvVtTqQ]/g,
    cg = function(e) {
        var t = e.length,
            r = ag,
            i;
        for (i = 1; i < t; i += 6) + e[i] < r && (r = +e[i]);
        return r
    },
    fg = function(e, t, r) {
        !r && r !== 0 && (r = Math.max(+e[e.length - 1], +e[1]));
        var i = +e[0] * -1,
            n = -r,
            s = e.length,
            a = 1 / (+e[s - 2] + i),
            c = -t || (Math.abs(+e[s - 1] - +e[1]) < .01 * (+e[s - 2] - +e[0]) ? cg(e) + n : +e[s - 1] + n),
            l;
        for (c ? c = 1 / c : c = -a, l = 0; l < s; l += 2) e[l] = (+e[l] + i) * a, e[l + 1] = (+e[l + 1] + n) * c
    },
    hg = function o(e, t, r, i, n, s, a, c, l, f, h) {
        var d = (e + r) / 2,
            u = (t + i) / 2,
            g = (r + n) / 2,
            p = (i + s) / 2,
            _ = (n + a) / 2,
            b = (s + c) / 2,
            m = (d + g) / 2,
            w = (u + p) / 2,
            v = (g + _) / 2,
            y = (p + b) / 2,
            x = (m + v) / 2,
            T = (w + y) / 2,
            k = a - e,
            O = c - t,
            L = Math.abs((r - a) * O - (i - c) * k),
            z = Math.abs((n - a) * O - (s - c) * k),
            P;
        return f || (f = [{
            x: e,
            y: t
        }, {
            x: a,
            y: c
        }], h = 1), f.splice(h || f.length - 1, 0, {
            x,
            y: T
        }), (L + z) * (L + z) > l * (k * k + O * O) && (P = f.length, o(e, t, d, u, m, w, x, T, l, f, h), o(x, T, v, y, _, b, a, c, l, f, h + 1 + (f.length - P))), f
    },
    ai = function() {
        function o(t, r, i) {
            rh || Wu(), this.id = t, this.setData(r, i)
        }
        var e = o.prototype;
        return e.setData = function(r, i) {
            i = i || {}, r = r || "0,0,1,1";
            var n = r.match(lg),
                s = 1,
                a = [],
                c = [],
                l = i.precision || 1,
                f = l <= 1,
                h, d, u, g, p, _, b, m, w;
            if (this.data = r, (ug.test(r) || ~r.indexOf("M") && r.indexOf("C") < 0) && (n = Yo(r)[0]), h = n.length, h === 4) n.unshift(0, 0), n.push(1, 1), h = 8;
            else if ((h - 2) % 6) throw "Invalid CustomEase";
            for ((+n[0] != 0 || +n[h - 2] != 1) && fg(n, i.height, i.originY), this.segment = n, g = 2; g < h; g += 6) d = {
                x: +n[g - 2],
                y: +n[g - 1]
            }, u = {
                x: +n[g + 4],
                y: +n[g + 5]
            }, a.push(d, u), hg(d.x, d.y, +n[g], +n[g + 1], +n[g + 2], +n[g + 3], u.x, u.y, 1 / (l * 2e5), a, a.length - 1);
            for (h = a.length, g = 0; g < h; g++) b = a[g], m = a[g - 1] || b, (b.x > m.x || m.y !== b.y && m.x === b.x || b === m) && b.x <= 1 ? (m.cx = b.x - m.x, m.cy = b.y - m.y, m.n = b, m.nx = b.x, f && g > 1 && Math.abs(m.cy / m.cx - a[g - 2].cy / a[g - 2].cx) > 2 && (f = 0), m.cx < s && (m.cx ? s = m.cx : (m.cx = .001, g === h - 1 && (m.x -= .001, s = Math.min(s, .001), f = 0)))) : (a.splice(g--, 1), h--);
            if (h = 1 / s + 1 | 0, p = 1 / h, _ = 0, b = a[0], f) {
                for (g = 0; g < h; g++) w = g * p, b.nx < w && (b = a[++_]), d = b.y + (w - b.x) / b.cx * b.cy, c[g] = {
                    x: w,
                    cx: p,
                    y: d,
                    cy: 0,
                    nx: 9
                }, g && (c[g - 1].cy = d - c[g - 1].y);
                _ = a[a.length - 1], c[h - 1].cy = _.y - d, c[h - 1].cx = _.x - c[c.length - 1].x
            } else {
                for (g = 0; g < h; g++) b.nx < g * p && (b = a[++_]), c[g] = b;
                _ < a.length - 1 && (c[g - 1] = a[a.length - 2])
            }
            return this.ease = function(v) {
                var y = c[v * h | 0] || c[h - 1];
                return y.nx < v && (y = y.n), y.y + (v - y.x) / y.cx * y.cy
            }, this.ease.custom = this, this.id && Qt && Qt.registerEase(this.id, this.ease), this
        }, e.getSVGData = function(r) {
            return o.getSVGData(this, r)
        }, o.create = function(r, i, n) {
            return new o(r, i, n).ease
        }, o.register = function(r) {
            Qt = r, Wu()
        }, o.get = function(r) {
            return Qt.parseEase(r)
        }, o.getSVGData = function(r, i) {
            i = i || {};
            var n = i.width || 100,
                s = i.height || 100,
                a = i.x || 0,
                c = (i.y || 0) + s,
                l = Qt.utils.toArray(i.path)[0],
                f, h, d, u, g, p, _, b, m, w;
            if (i.invert && (s = -s, c = 0), typeof r == "string" && (r = Qt.parseEase(r)), r.custom && (r = r.custom), r instanceof o) f = Jl(Tn([r.segment.slice(0)], n, 0, 0, -s, a, c));
            else {
                for (f = [a, c], _ = Math.max(5, (i.precision || 1) * 200), u = 1 / _, _ += 2, b = 5 / _, m = rs(a + u * n), w = rs(c + r(u) * -s), h = (w - c) / (m - a), d = 2; d < _; d++) g = rs(a + d * u * n), p = rs(c + r(d * u) * -s), (Math.abs((p - w) / (g - m) - h) > b || d === _ - 1) && (f.push(m, w), h = (p - w) / (g - m)), m = g, w = p;
                f = "M" + f.join(",")
            }
            return l && l.setAttribute("d", f), f
        }, o
    }();
ai.version = "3.14.2";
ai.headless = !0;
ih() && Qt.registerPlugin(ai);
/*!
 * matrix 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var Jr, Qi, eu, la, to, Ss, Gs, mo, Ar = "transform",
    nl = Ar + "Origin",
    nh, oh = function(e) {
        var t = e.ownerDocument || e;
        for (!(Ar in e.style) && ("msTransform" in e.style) && (Ar = "msTransform", nl = Ar + "Origin"); t.parentNode && (t = t.parentNode););
        if (Qi = window, Gs = new nn, t) {
            Jr = t, eu = t.documentElement, la = t.body, mo = Jr.createElementNS("http://www.w3.org/2000/svg", "g"), mo.style.transform = "none";
            var r = t.createElement("div"),
                i = t.createElement("div"),
                n = t && (t.body || t.firstElementChild);
            n && n.appendChild && (n.appendChild(r), r.appendChild(i), r.style.position = "static", r.style.transform = "translate3d(0,0,1px)", nh = i.offsetParent !== r, n.removeChild(r))
        }
        return t
    },
    dg = function(e) {
        for (var t, r; e && e !== la;) r = e._gsap, r && r.uncache && r.get(e, "x"), r && !r.scaleX && !r.scaleY && r.renderTransform && (r.scaleX = r.scaleY = 1e-4, r.renderTransform(1, r), t ? t.push(r) : t = [r]), e = e.parentNode;
        return t
    },
    sh = [],
    ah = [],
    pg = function() {
        return Qi.pageYOffset || Jr.scrollTop || eu.scrollTop || la.scrollTop || 0
    },
    gg = function() {
        return Qi.pageXOffset || Jr.scrollLeft || eu.scrollLeft || la.scrollLeft || 0
    },
    tu = function(e) {
        return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
    },
    _g = function o(e) {
        if (Qi.getComputedStyle(e).position === "fixed") return !0;
        if (e = e.parentNode, e && e.nodeType === 1) return o(e)
    },
    wa = function o(e, t) {
        if (e.parentNode && (Jr || oh(e))) {
            var r = tu(e),
                i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                n = r ? t ? "rect" : "g" : "div",
                s = t !== 2 ? 0 : 100,
                a = t === 3 ? 100 : 0,
                c = {
                    position: "absolute",
                    display: "block",
                    pointerEvents: "none",
                    margin: "0",
                    padding: "0"
                },
                l = Jr.createElementNS ? Jr.createElementNS(i.replace(/^https/, "http"), n) : Jr.createElement(n);
            return t && (r ? (Ss || (Ss = o(e)), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + s + "," + a + ")"), l.setAttribute("fill", "transparent"), Ss.appendChild(l)) : (to || (to = o(e), Object.assign(to.style, c)), Object.assign(l.style, c, {
                width: "0.1px",
                height: "0.1px",
                top: a + "px",
                left: s + "px"
            }), to.appendChild(l))), l
        }
        throw "Need document and parent."
    },
    mg = function(e) {
        for (var t = new nn, r = 0; r < e.numberOfItems; r++) t.multiply(e.getItem(r).matrix);
        return t
    },
    yg = function(e) {
        var t = e.getCTM(),
            r;
        return t || (r = e.style[Ar], e.style[Ar] = "none", e.appendChild(mo), t = mo.getCTM(), e.removeChild(mo), r ? e.style[Ar] = r : e.style.removeProperty(Ar.replace(/([A-Z])/g, "-$1").toLowerCase())), t || Gs.clone()
    },
    vg = function(e, t) {
        var r = tu(e),
            i = e === r,
            n = r ? sh : ah,
            s = e.parentNode,
            a = s && !r && s.shadowRoot && s.shadowRoot.appendChild ? s.shadowRoot : s,
            c, l, f, h, d, u;
        if (e === Qi) return e;
        if (n.length || n.push(wa(e, 1), wa(e, 2), wa(e, 3)), c = r ? Ss : to, r) i ? (f = yg(e), h = -f.e / f.a, d = -f.f / f.d, l = Gs) : e.getBBox ? (f = e.getBBox(), l = e.transform ? e.transform.baseVal : {}, l = l.numberOfItems ? l.numberOfItems > 1 ? mg(l) : l.getItem(0).matrix : Gs, h = l.a * f.x + l.c * f.y, d = l.b * f.x + l.d * f.y) : (l = new nn, h = d = 0), t && e.tagName.toLowerCase() === "g" && (h = d = 0), (i || !e.getBoundingClientRect().width ? r : s).appendChild(c), c.setAttribute("transform", "matrix(" + l.a + "," + l.b + "," + l.c + "," + l.d + "," + (l.e + h) + "," + (l.f + d) + ")");
        else {
            if (h = d = 0, nh)
                for (l = e.offsetParent, f = e; f && (f = f.parentNode) && f !== l && f.parentNode;)(Qi.getComputedStyle(f)[Ar] + "").length > 4 && (h = f.offsetLeft, d = f.offsetTop, f = 0);
            if (u = Qi.getComputedStyle(e), u.position !== "absolute" && u.position !== "fixed")
                for (l = e.offsetParent; s && s !== l;) h += s.scrollLeft || 0, d += s.scrollTop || 0, s = s.parentNode;
            f = c.style, f.top = e.offsetTop - d + "px", f.left = e.offsetLeft - h + "px", f[Ar] = u[Ar], f[nl] = u[nl], f.position = u.position === "fixed" ? "fixed" : "absolute", a.appendChild(c)
        }
        return c
    },
    ba = function(e, t, r, i, n, s, a) {
        return e.a = t, e.b = r, e.c = i, e.d = n, e.e = s, e.f = a, e
    },
    nn = function() {
        function o(t, r, i, n, s, a) {
            t === void 0 && (t = 1), r === void 0 && (r = 0), i === void 0 && (i = 0), n === void 0 && (n = 1), s === void 0 && (s = 0), a === void 0 && (a = 0), ba(this, t, r, i, n, s, a)
        }
        var e = o.prototype;
        return e.inverse = function() {
            var r = this.a,
                i = this.b,
                n = this.c,
                s = this.d,
                a = this.e,
                c = this.f,
                l = r * s - i * n || 1e-10;
            return ba(this, s / l, -i / l, -n / l, r / l, (n * c - s * a) / l, -(r * c - i * a) / l)
        }, e.multiply = function(r) {
            var i = this.a,
                n = this.b,
                s = this.c,
                a = this.d,
                c = this.e,
                l = this.f,
                f = r.a,
                h = r.c,
                d = r.b,
                u = r.d,
                g = r.e,
                p = r.f;
            return ba(this, f * i + d * s, f * n + d * a, h * i + u * s, h * n + u * a, c + g * i + p * s, l + g * n + p * a)
        }, e.clone = function() {
            return new o(this.a, this.b, this.c, this.d, this.e, this.f)
        }, e.equals = function(r) {
            var i = this.a,
                n = this.b,
                s = this.c,
                a = this.d,
                c = this.e,
                l = this.f;
            return i === r.a && n === r.b && s === r.c && a === r.d && c === r.e && l === r.f
        }, e.apply = function(r, i) {
            i === void 0 && (i = {});
            var n = r.x,
                s = r.y,
                a = this.a,
                c = this.b,
                l = this.c,
                f = this.d,
                h = this.e,
                d = this.f;
            return i.x = n * a + s * l + h || 0, i.y = n * c + s * f + d || 0, i
        }, o
    }();

function fr(o, e, t, r) {
    if (!o || !o.parentNode || (Jr || oh(o)).documentElement === o) return new nn;
    var i = dg(o),
        n = tu(o),
        s = n ? sh : ah,
        a = vg(o, t),
        c = s[0].getBoundingClientRect(),
        l = s[1].getBoundingClientRect(),
        f = s[2].getBoundingClientRect(),
        h = a.parentNode,
        d = !r && _g(o),
        u = new nn((l.left - c.left) / 100, (l.top - c.top) / 100, (f.left - c.left) / 100, (f.top - c.top) / 100, c.left + (d ? 0 : gg()), c.top + (d ? 0 : pg()));
    if (h.removeChild(a), i)
        for (c = i.length; c--;) l = i[c], l.scaleX = l.scaleY = 0, l.renderTransform(1, l);
    return e ? u.inverse() : u
}

function Hu(o) {
    if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o
}

function wg(o, e) {
    o.prototype = Object.create(e.prototype), o.prototype.constructor = o, o.__proto__ = e
}
var Me, je, hr, Lr, ei, xa, Kr, ol, ro, yi, lh, sl, Xo, ru, io, or, no, Ps, uh, al, js = 0,
    ch = function() {
        return typeof window < "u"
    },
    fh = function() {
        return Me || ch() && (Me = window.gsap) && Me.registerPlugin && Me
    },
    di = function(e) {
        return typeof e == "function"
    },
    yo = function(e) {
        return typeof e == "object"
    },
    Dr = function(e) {
        return typeof e > "u"
    },
    Ms = function() {
        return !1
    },
    vo = "transform",
    ll = "transformOrigin",
    $t = function(e) {
        return Math.round(e * 1e4) / 1e4
    },
    Gn = Array.isArray,
    is = function(e, t) {
        var r = hr.createElementNS ? hr.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : hr.createElement(e);
        return r.style ? r : hr.createElement(e)
    },
    Gu = 180 / Math.PI,
    Li = 1e20,
    bg = new nn,
    ci = Date.now || function() {
        return new Date().getTime()
    },
    Zi = [],
    Cn = {},
    xg = 0,
    Tg = /^(?:a|input|textarea|button|select)$/i,
    ju = 0,
    hn = {},
    Gr = {},
    hh = function(e, t) {
        var r = {},
            i;
        for (i in e) r[i] = t ? e[i] * t : e[i];
        return r
    },
    kg = function(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e
    },
    Uu = function o(e, t) {
        for (var r = e.length, i; r--;) t ? e[r].style.touchAction = t : e[r].style.removeProperty("touch-action"), i = e[r].children, i && i.length && o(i, t)
    },
    dh = function() {
        return Zi.forEach(function(e) {
            return e()
        })
    },
    Sg = function(e) {
        Zi.push(e), Zi.length === 1 && Me.ticker.add(dh)
    },
    Ku = function() {
        return !Zi.length && Me.ticker.remove(dh)
    },
    Qu = function(e) {
        for (var t = Zi.length; t--;) Zi[t] === e && Zi.splice(t, 1);
        Me.to(Ku, {
            overwrite: !0,
            delay: 15,
            duration: 0,
            onComplete: Ku,
            data: "_draggable"
        })
    },
    Pg = function(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e
    },
    dt = function(e, t, r, i) {
        if (e.addEventListener) {
            var n = Xo[t];
            i = i || (lh ? {
                passive: !1
            } : null), e.addEventListener(n || t, r, i), n && t !== n && e.addEventListener(t, r, i)
        }
    },
    lt = function(e, t, r, i) {
        if (e.removeEventListener) {
            var n = Xo[t];
            e.removeEventListener(n || t, r, i), n && t !== n && e.removeEventListener(t, r, i)
        }
    },
    wr = function(e) {
        e.preventDefault && e.preventDefault(), e.preventManipulation && e.preventManipulation()
    },
    Mg = function(e, t) {
        for (var r = e.length; r--;)
            if (e[r].identifier === t) return !0
    },
    Eg = function o(e) {
        ru = e.touches && js < e.touches.length, lt(e.target, "touchend", o)
    },
    Zu = function(e) {
        ru = e.touches && js < e.touches.length, dt(e.target, "touchend", Eg)
    },
    On = function(e) {
        return je.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0
    },
    Dn = function(e) {
        return je.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0
    },
    Ju = function o(e, t) {
        dt(e, "scroll", t), Xn(e.parentNode) || o(e.parentNode, t)
    },
    ec = function o(e, t) {
        lt(e, "scroll", t), Xn(e.parentNode) || o(e.parentNode, t)
    },
    Xn = function(e) {
        return !e || e === Lr || e.nodeType === 9 || e === hr.body || e === je || !e.nodeType || !e.parentNode
    },
    tc = function(e, t) {
        var r = t === "x" ? "Width" : "Height",
            i = "scroll" + r,
            n = "client" + r;
        return Math.max(0, Xn(e) ? Math.max(Lr[i], ei[i]) - (je["inner" + r] || Lr[n] || ei[n]) : e[i] - e[n])
    },
    Ta = function o(e, t) {
        var r = tc(e, "x"),
            i = tc(e, "y");
        Xn(e) ? e = Gr : o(e.parentNode, t), e._gsMaxScrollX = r, e._gsMaxScrollY = i, t || (e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0)
    },
    ka = function(e, t, r) {
        var i = e.style;
        i && (Dr(i[t]) && (t = ro(t, e) || t), r == null ? i.removeProperty && i.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase()) : i[t] = r)
    },
    Vo = function(e) {
        return je.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e)
    },
    Ri = {},
    dn = function(e) {
        if (e === je) return Ri.left = Ri.top = 0, Ri.width = Ri.right = Lr.clientWidth || e.innerWidth || ei.clientWidth || 0, Ri.height = Ri.bottom = (e.innerHeight || 0) - 20 < Lr.clientHeight ? Lr.clientHeight : e.innerHeight || ei.clientHeight || 0, Ri;
        var t = e.ownerDocument || hr,
            r = Dr(e.pageX) ? !e.nodeType && !Dr(e.left) && !Dr(e.top) ? e : yi(e)[0].getBoundingClientRect() : {
                left: e.pageX - Dn(t),
                top: e.pageY - On(t),
                right: e.pageX - Dn(t) + 1,
                bottom: e.pageY - On(t) + 1
            };
        return Dr(r.right) && !Dr(r.width) ? (r.right = r.left + r.width, r.bottom = r.top + r.height) : Dr(r.width) && (r = {
            width: r.right - r.left,
            height: r.bottom - r.top,
            right: r.right,
            left: r.left,
            bottom: r.bottom,
            top: r.top
        }), r
    },
    st = function(e, t, r) {
        var i = e.vars,
            n = i[r],
            s = e._listeners[t],
            a;
        return di(n) && (a = n.apply(i.callbackScope || e, i[r + "Params"] || [e.pointerEvent])), s && e.dispatchEvent(t) === !1 && (a = !1), a
    },
    rc = function(e, t) {
        var r = yi(e)[0],
            i, n, s;
        return !r.nodeType && r !== je ? Dr(e.left) ? (n = e.min || e.minX || e.minRotation || 0, i = e.min || e.minY || 0, {
            left: n,
            top: i,
            width: (e.max || e.maxX || e.maxRotation || 0) - n,
            height: (e.max || e.maxY || 0) - i
        }) : (s = {
            x: 0,
            y: 0
        }, {
            left: e.left - s.x,
            top: e.top - s.y,
            width: e.width,
            height: e.height
        }) : Cg(r, t)
    },
    br = {},
    Cg = function(e, t) {
        t = yi(t)[0];
        var r = e.getBBox && e.ownerSVGElement,
            i = e.ownerDocument || hr,
            n, s, a, c, l, f, h, d, u, g, p, _, b;
        if (e === je) a = On(i), n = Dn(i), s = n + (i.documentElement.clientWidth || e.innerWidth || i.body.clientWidth || 0), c = a + ((e.innerHeight || 0) - 20 < i.documentElement.clientHeight ? i.documentElement.clientHeight : e.innerHeight || i.body.clientHeight || 0);
        else {
            if (t === je || Dr(t)) return e.getBoundingClientRect();
            n = a = 0, r ? (g = e.getBBox(), p = g.width, _ = g.height) : (e.viewBox && (g = e.viewBox.baseVal) && (n = g.x || 0, a = g.y || 0, p = g.width, _ = g.height), p || (b = Vo(e), g = b.boxSizing === "border-box", p = (parseFloat(b.width) || e.clientWidth || 0) + (g ? 0 : parseFloat(b.borderLeftWidth) + parseFloat(b.borderRightWidth)), _ = (parseFloat(b.height) || e.clientHeight || 0) + (g ? 0 : parseFloat(b.borderTopWidth) + parseFloat(b.borderBottomWidth)))), s = p, c = _
        }
        return e === t ? {
            left: n,
            top: a,
            width: s - n,
            height: c - a
        } : (l = fr(t, !0).multiply(fr(e)), f = l.apply({
            x: n,
            y: a
        }), h = l.apply({
            x: s,
            y: a
        }), d = l.apply({
            x: s,
            y: c
        }), u = l.apply({
            x: n,
            y: c
        }), n = Math.min(f.x, h.x, d.x, u.x), a = Math.min(f.y, h.y, d.y, u.y), {
            left: n,
            top: a,
            width: Math.max(f.x, h.x, d.x, u.x) - n,
            height: Math.max(f.y, h.y, d.y, u.y) - a
        })
    },
    Sa = function(e, t, r, i, n, s) {
        var a = {},
            c, l, f;
        if (t)
            if (n !== 1 && t instanceof Array) {
                if (a.end = c = [], f = t.length, yo(t[0]))
                    for (l = 0; l < f; l++) c[l] = hh(t[l], n);
                else
                    for (l = 0; l < f; l++) c[l] = t[l] * n;
                r += 1.1, i -= 1.1
            } else di(t) ? a.end = function(h) {
                var d = t.call(e, h),
                    u, g;
                if (n !== 1)
                    if (yo(d)) {
                        u = {};
                        for (g in d) u[g] = d[g] * n;
                        d = u
                    } else d *= n;
                return d
            } : a.end = t;
        return (r || r === 0) && (a.max = r), (i || i === 0) && (a.min = i), s && (a.velocity = 0), a
    },
    Og = function o(e) {
        var t;
        return !e || !e.getAttribute || e === ei ? !1 : (t = e.getAttribute("data-clickable")) === "true" || t !== "false" && (Tg.test(e.nodeName + "") || e.getAttribute("contentEditable") === "true") ? !0 : o(e.parentNode)
    },
    ns = function(e, t) {
        for (var r = e.length, i; r--;) i = e[r], i.ondragstart = i.onselectstart = t ? null : Ms, Me.set(i, {
            lazy: !0,
            userSelect: t ? "text" : "none"
        })
    },
    Dg = function o(e) {
        if (Vo(e).position === "fixed") return !0;
        if (e = e.parentNode, e && e.nodeType === 1) return o(e)
    },
    ph, ul, Ag = function(e, t) {
        e = Me.utils.toArray(e)[0], t = t || {};
        var r = document.createElement("div"),
            i = r.style,
            n = e.firstChild,
            s = 0,
            a = 0,
            c = e.scrollTop,
            l = e.scrollLeft,
            f = e.scrollWidth,
            h = e.scrollHeight,
            d = 0,
            u = 0,
            g = 0,
            p, _, b, m, w, v;
        ph && t.force3D !== !1 ? (w = "translate3d(", v = "px,0px)") : vo && (w = "translate(", v = "px)"), this.scrollTop = function(y, x) {
            if (!arguments.length) return -this.top();
            this.top(-y, x)
        }, this.scrollLeft = function(y, x) {
            if (!arguments.length) return -this.left();
            this.left(-y, x)
        }, this.left = function(y, x) {
            if (!arguments.length) return -(e.scrollLeft + a);
            var T = e.scrollLeft - l,
                k = a;
            if ((T > 2 || T < -2) && !x) {
                l = e.scrollLeft, Me.killTweensOf(this, {
                    left: 1,
                    scrollLeft: 1
                }), this.left(-l), t.onKill && t.onKill();
                return
            }
            y = -y, y < 0 ? (a = y - .5 | 0, y = 0) : y > u ? (a = y - u | 0, y = u) : a = 0, (a || k) && (this._skip || (i[vo] = w + -a + "px," + -s + v), a + d >= 0 && (i.paddingRight = a + d + "px")), e.scrollLeft = y | 0, l = e.scrollLeft
        }, this.top = function(y, x) {
            if (!arguments.length) return -(e.scrollTop + s);
            var T = e.scrollTop - c,
                k = s;
            if ((T > 2 || T < -2) && !x) {
                c = e.scrollTop, Me.killTweensOf(this, {
                    top: 1,
                    scrollTop: 1
                }), this.top(-c), t.onKill && t.onKill();
                return
            }
            y = -y, y < 0 ? (s = y - .5 | 0, y = 0) : y > g ? (s = y - g | 0, y = g) : s = 0, (s || k) && (this._skip || (i[vo] = w + -a + "px," + -s + v)), e.scrollTop = y | 0, c = e.scrollTop
        }, this.maxScrollTop = function() {
            return g
        }, this.maxScrollLeft = function() {
            return u
        }, this.disable = function() {
            for (n = r.firstChild; n;) m = n.nextSibling, e.appendChild(n), n = m;
            e === r.parentNode && e.removeChild(r)
        }, this.enable = function() {
            if (n = e.firstChild, n !== r) {
                for (; n;) m = n.nextSibling, r.appendChild(n), n = m;
                e.appendChild(r), this.calibrate()
            }
        }, this.calibrate = function(y) {
            var x = e.clientWidth === p,
                T, k, O;
            c = e.scrollTop, l = e.scrollLeft, !(x && e.clientHeight === _ && r.offsetHeight === b && f === e.scrollWidth && h === e.scrollHeight && !y) && ((s || a) && (k = this.left(), O = this.top(), this.left(-e.scrollLeft), this.top(-e.scrollTop)), T = Vo(e), (!x || y) && (i.display = "block", i.width = "auto", i.paddingRight = "0px", d = Math.max(0, e.scrollWidth - e.clientWidth), d && (d += parseFloat(T.paddingLeft) + (ul ? parseFloat(T.paddingRight) : 0))), i.display = "inline-block", i.position = "relative", i.overflow = "visible", i.verticalAlign = "top", i.boxSizing = "content-box", i.width = "100%", i.paddingRight = d + "px", ul && (i.paddingBottom = T.paddingBottom), p = e.clientWidth, _ = e.clientHeight, f = e.scrollWidth, h = e.scrollHeight, u = e.scrollWidth - p, g = e.scrollHeight - _, b = r.offsetHeight, i.display = "block", (k || O) && (this.left(k), this.top(O)))
        }, this.content = r, this.element = e, this._skip = !1, this.enable()
    },
    Pa = function(e) {
        if (ch() && document.body) {
            var t = window && window.navigator;
            je = window, hr = document, Lr = hr.documentElement, ei = hr.body, xa = is("div"), Ps = !!window.PointerEvent, Kr = is("div"), Kr.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", no = Kr.style.cursor === "grab" ? "grab" : "move", io = t && t.userAgent.toLowerCase().indexOf("android") !== -1, sl = "ontouchstart" in Lr && "orientation" in je || t && (t.MaxTouchPoints > 0 || t.msMaxTouchPoints > 0), ul = function() {
                var r = is("div"),
                    i = is("div"),
                    n = i.style,
                    s = ei,
                    a;
                return n.display = "inline-block", n.position = "relative", r.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", r.appendChild(i), s.appendChild(r), a = i.offsetHeight + 18 > r.scrollHeight, s.removeChild(r), a
            }(), Xo = function(r) {
                for (var i = r.split(","), n = ("onpointerdown" in xa ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in xa ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : r).split(","), s = {}, a = 4; --a > -1;) s[i[a]] = n[a], s[n[a]] = i[a];
                try {
                    Lr.addEventListener("test", null, Object.defineProperty({}, "passive", {
                        get: function() {
                            lh = 1
                        }
                    }))
                } catch {}
                return s
            }("touchstart,touchmove,touchend,touchcancel"), dt(hr, "touchcancel", Ms), dt(je, "touchmove", Ms), ei && ei.addEventListener("touchstart", Ms), dt(hr, "contextmenu", function() {
                for (var r in Cn) Cn[r].isPressed && Cn[r].endDrag()
            }), Me = ol = fh()
        }
        Me ? (or = Me.plugins.inertia, uh = Me.core.context || function() {}, ro = Me.utils.checkPrefix, vo = ro(vo), ll = ro(ll), yi = Me.utils.toArray, al = Me.core.getStyleSaver, ph = !!ro("perspective")) : e && console.warn("Please gsap.registerPlugin(Draggable)")
    },
    Lg = function() {
        function o(t) {
            this._listeners = {}, this.target = t || this
        }
        var e = o.prototype;
        return e.addEventListener = function(r, i) {
            var n = this._listeners[r] || (this._listeners[r] = []);
            ~n.indexOf(i) || n.push(i)
        }, e.removeEventListener = function(r, i) {
            var n = this._listeners[r],
                s = n && n.indexOf(i);
            s >= 0 && n.splice(s, 1)
        }, e.dispatchEvent = function(r) {
            var i = this,
                n;
            return (this._listeners[r] || []).forEach(function(s) {
                return s.call(i, {
                    type: r,
                    target: i.target
                }) === !1 && (n = !1)
            }), n
        }, o
    }(),
    on = function(o) {
        wg(e, o);

        function e(t, r) {
            var i;
            i = o.call(this) || this, ol || Pa(1), t = yi(t)[0], i.styles = al && al(t, "transform,left,top"), or || (or = Me.plugins.inertia), i.vars = r = hh(r || {}), i.target = t, i.x = i.y = i.rotation = 0, i.dragResistance = parseFloat(r.dragResistance) || 0, i.edgeResistance = isNaN(r.edgeResistance) ? 1 : parseFloat(r.edgeResistance) || 0, i.lockAxis = r.lockAxis, i.autoScroll = r.autoScroll || 0, i.lockedAxis = null, i.allowEventDefault = !!r.allowEventDefault, Me.getProperty(t, "x");
            var n = (r.type || "x,y").toLowerCase(),
                s = ~n.indexOf("x") || ~n.indexOf("y"),
                a = n.indexOf("rotation") !== -1,
                c = a ? "rotation" : s ? "x" : "left",
                l = s ? "y" : "top",
                f = !!(~n.indexOf("x") || ~n.indexOf("left") || n === "scroll"),
                h = !!(~n.indexOf("y") || ~n.indexOf("top") || n === "scroll"),
                d = r.minimumMovement || 2,
                u = Hu(i),
                g = yi(r.trigger || r.handle || t),
                p = {},
                _ = 0,
                b = !1,
                m = r.autoScrollMarginTop || 40,
                w = r.autoScrollMarginRight || 40,
                v = r.autoScrollMarginBottom || 40,
                y = r.autoScrollMarginLeft || 40,
                x = r.clickableTest || Og,
                T = 0,
                k = t._gsap || Me.core.getCache(t),
                O = Dg(t),
                L = function(S, $) {
                    return parseFloat(k.get(t, S, $))
                },
                z = t.ownerDocument || hr,
                P, M, R, V, I, Y, K, te, E, j, se, re, ie, Re, Ce, Ie, we, Qe, Oe, qe, We, pe, ge, ne, _t, A, Ve, W, D, q, U, ue, fe, _e = function(S) {
                    return wr(S), S.stopImmediatePropagation && S.stopImmediatePropagation(), !1
                },
                Ne = function Q(S) {
                    if (u.autoScroll && u.isDragging && (b || we)) {
                        var $ = t,
                            C = u.autoScroll * 15,
                            N, X, F, H, B, G, ae, ee;
                        for (b = !1, Gr.scrollTop = je.pageYOffset != null ? je.pageYOffset : z.documentElement.scrollTop != null ? z.documentElement.scrollTop : z.body.scrollTop, Gr.scrollLeft = je.pageXOffset != null ? je.pageXOffset : z.documentElement.scrollLeft != null ? z.documentElement.scrollLeft : z.body.scrollLeft, H = u.pointerX - Gr.scrollLeft, B = u.pointerY - Gr.scrollTop; $ && !X;) X = Xn($.parentNode), N = X ? Gr : $.parentNode, F = X ? {
                            bottom: Math.max(Lr.clientHeight, je.innerHeight || 0),
                            right: Math.max(Lr.clientWidth, je.innerWidth || 0),
                            left: 0,
                            top: 0
                        } : N.getBoundingClientRect(), G = ae = 0, h && (ee = N._gsMaxScrollY - N.scrollTop, ee < 0 ? ae = ee : B > F.bottom - v && ee ? (b = !0, ae = Math.min(ee, C * (1 - Math.max(0, F.bottom - B) / v) | 0)) : B < F.top + m && N.scrollTop && (b = !0, ae = -Math.min(N.scrollTop, C * (1 - Math.max(0, B - F.top) / m) | 0)), ae && (N.scrollTop += ae)), f && (ee = N._gsMaxScrollX - N.scrollLeft, ee < 0 ? G = ee : H > F.right - w && ee ? (b = !0, G = Math.min(ee, C * (1 - Math.max(0, F.right - H) / w) | 0)) : H < F.left + y && N.scrollLeft && (b = !0, G = -Math.min(N.scrollLeft, C * (1 - Math.max(0, H - F.left) / y) | 0)), G && (N.scrollLeft += G)), X && (G || ae) && (je.scrollTo(N.scrollLeft, N.scrollTop), Et(u.pointerX + G, u.pointerY + ae)), $ = N
                    }
                    if (we) {
                        var de = u.x,
                            Ae = u.y;
                        a ? (u.deltaX = de - parseFloat(k.rotation), u.rotation = de, k.rotation = de + "deg", k.renderTransform(1, k)) : M ? (h && (u.deltaY = Ae - M.top(), M.top(Ae)), f && (u.deltaX = de - M.left(), M.left(de))) : s ? (h && (u.deltaY = Ae - parseFloat(k.y), k.y = Ae + "px"), f && (u.deltaX = de - parseFloat(k.x), k.x = de + "px"), k.renderTransform(1, k)) : (h && (u.deltaY = Ae - parseFloat(t.style.top || 0), t.style.top = Ae + "px"), f && (u.deltaX = de - parseFloat(t.style.left || 0), t.style.left = de + "px")), te && !S && !W && (W = !0, st(u, "drag", "onDrag") === !1 && (f && (u.x -= u.deltaX), h && (u.y -= u.deltaY), Q(!0)), W = !1)
                    }
                    we = !1
                },
                ce = function(S, $) {
                    var C = u.x,
                        N = u.y,
                        X, F;
                    t._gsap || (k = Me.core.getCache(t)), k.uncache && Me.getProperty(t, "x"), s ? (u.x = parseFloat(k.x), u.y = parseFloat(k.y)) : a ? u.x = u.rotation = $t(parseFloat(k.rotation)) : M ? (u.y = M.top(), u.x = M.left()) : (u.y = parseFloat(t.style.top || (F = Vo(t)) && F.top) || 0, u.x = parseFloat(t.style.left || (F || {}).left) || 0), (Oe || qe || We) && !$ && (u.isDragging || u.isThrowing) && (We && (hn.x = u.x, hn.y = u.y, X = We(hn), X.x !== u.x && (u.x = X.x, we = !0), X.y !== u.y && (u.y = X.y, we = !0)), Oe && (X = Oe(u.x), X !== u.x && (u.x = X, a && (u.rotation = X), we = !0)), qe && (X = qe(u.y), X !== u.y && (u.y = X), we = !0)), we && Ne(!0), S || (u.deltaX = u.x - C, u.deltaY = u.y - N, st(u, "throwupdate", "onThrowUpdate"))
                },
                $e = function(S, $, C, N) {
                    return $ == null && ($ = -Li), C == null && (C = Li), di(S) ? function(X) {
                        var F = u.isPressed ? 1 - u.edgeResistance : 1;
                        return S.call(u, (X > C ? C + (X - C) * F : X < $ ? $ + (X - $) * F : X) * N) * N
                    } : Gn(S) ? function(X) {
                        for (var F = S.length, H = 0, B = Li, G, ae; --F > -1;) G = S[F], ae = G - X, ae < 0 && (ae = -ae), ae < B && G >= $ && G <= C && (H = F, B = ae);
                        return S[H]
                    } : isNaN(S) ? function(X) {
                        return X
                    } : function() {
                        return S * N
                    }
                },
                De = function(S, $, C, N, X, F, H) {
                    return F = F && F < Li ? F * F : Li, di(S) ? function(B) {
                        var G = u.isPressed ? 1 - u.edgeResistance : 1,
                            ae = B.x,
                            ee = B.y,
                            de, Ae, Fe;
                        return B.x = ae = ae > C ? C + (ae - C) * G : ae < $ ? $ + (ae - $) * G : ae, B.y = ee = ee > X ? X + (ee - X) * G : ee < N ? N + (ee - N) * G : ee, de = S.call(u, B), de !== B && (B.x = de.x, B.y = de.y), H !== 1 && (B.x *= H, B.y *= H), F < Li && (Ae = B.x - ae, Fe = B.y - ee, Ae * Ae + Fe * Fe > F && (B.x = ae, B.y = ee)), B
                    } : Gn(S) ? function(B) {
                        for (var G = S.length, ae = 0, ee = Li, de, Ae, Fe, ke; --G > -1;) Fe = S[G], de = Fe.x - B.x, Ae = Fe.y - B.y, ke = de * de + Ae * Ae, ke < ee && (ae = G, ee = ke);
                        return ee <= F ? S[ae] : B
                    } : function(B) {
                        return B
                    }
                },
                me = function() {
                    var S, $, C, N;
                    K = !1, M ? (M.calibrate(), u.minX = se = -M.maxScrollLeft(), u.minY = ie = -M.maxScrollTop(), u.maxX = j = u.maxY = re = 0, K = !0) : r.bounds && (S = rc(r.bounds, t.parentNode), a ? (u.minX = se = S.left, u.maxX = j = S.left + S.width, u.minY = ie = u.maxY = re = 0) : !Dr(r.bounds.maxX) || !Dr(r.bounds.maxY) ? (S = r.bounds, u.minX = se = S.minX, u.minY = ie = S.minY, u.maxX = j = S.maxX, u.maxY = re = S.maxY) : ($ = rc(t, t.parentNode), u.minX = se = Math.round(L(c, "px") + S.left - $.left), u.minY = ie = Math.round(L(l, "px") + S.top - $.top), u.maxX = j = Math.round(se + (S.width - $.width)), u.maxY = re = Math.round(ie + (S.height - $.height))), se > j && (u.minX = j, u.maxX = j = se, se = u.minX), ie > re && (u.minY = re, u.maxY = re = ie, ie = u.minY), a && (u.minRotation = se, u.maxRotation = j), K = !0), r.liveSnap && (C = r.liveSnap === !0 ? r.snap || {} : r.liveSnap, N = Gn(C) || di(C), a ? (Oe = $e(N ? C : C.rotation, se, j, 1), qe = null) : C.points ? We = De(N ? C : C.points, se, j, ie, re, C.radius, M ? -1 : 1) : (f && (Oe = $e(N ? C : C.x || C.left || C.scrollLeft, se, j, M ? -1 : 1)), h && (qe = $e(N ? C : C.y || C.top || C.scrollTop, ie, re, M ? -1 : 1))))
                },
                ot = function() {
                    u.isThrowing = !1, st(u, "throwcomplete", "onThrowComplete")
                },
                Z = function() {
                    u.isThrowing = !1
                },
                vr = function(S, $) {
                    var C, N, X, F;
                    S && or ? (S === !0 && (C = r.snap || r.liveSnap || {}, N = Gn(C) || di(C), S = {
                        resistance: (r.throwResistance || r.resistance || 1e3) / (a ? 10 : 1)
                    }, a ? S.rotation = Sa(u, N ? C : C.rotation, j, se, 1, $) : (f && (S[c] = Sa(u, N ? C : C.points || C.x || C.left, j, se, M ? -1 : 1, $ || u.lockedAxis === "x")), h && (S[l] = Sa(u, N ? C : C.points || C.y || C.top, re, ie, M ? -1 : 1, $ || u.lockedAxis === "y")), (C.points || Gn(C) && yo(C[0])) && (S.linkedProps = c + "," + l, S.radius = C.radius))), u.isThrowing = !0, F = isNaN(r.overshootTolerance) ? r.edgeResistance === 1 ? 0 : 1 - u.edgeResistance + .2 : r.overshootTolerance, S.duration || (S.duration = {
                        max: Math.max(r.minDuration || 0, "maxDuration" in r ? r.maxDuration : 2),
                        min: isNaN(r.minDuration) ? F === 0 || yo(S) && S.resistance > 1e3 ? 0 : .5 : r.minDuration,
                        overshoot: F
                    }), u.tween = X = Me.to(M || t, {
                        inertia: S,
                        data: "_draggable",
                        inherit: !1,
                        onComplete: ot,
                        onInterrupt: Z,
                        onUpdate: r.fastMode ? st : ce,
                        onUpdateParams: r.fastMode ? [u, "onthrowupdate", "onThrowUpdate"] : C && C.radius ? [!1, !0] : []
                    }), r.fastMode || (M && (M._skip = !0), X.render(1e9, !0, !0), ce(!0, !0), u.endX = u.x, u.endY = u.y, a && (u.endRotation = u.x), X.play(0), ce(!0, !0), M && (M._skip = !1))) : K && u.applyBounds()
                },
                bt = function(S) {
                    var $ = ne,
                        C;
                    ne = fr(t.parentNode, !0), S && u.isPressed && !ne.equals($ || new nn) && (C = $.inverse().apply({
                        x: R,
                        y: V
                    }), ne.apply(C, C), R = C.x, V = C.y), ne.equals(bg) && (ne = null)
                },
                mt = function() {
                    var S = 1 - u.edgeResistance,
                        $ = O ? Dn(z) : 0,
                        C = O ? On(z) : 0,
                        N, X, F;
                    s && (k.x = L(c, "px") + "px", k.y = L(l, "px") + "px", k.renderTransform()), bt(!1), br.x = u.pointerX - $, br.y = u.pointerY - C, ne && ne.apply(br, br), R = br.x, V = br.y, we && (Et(u.pointerX, u.pointerY), Ne(!0)), ue = fr(t), M ? (me(), Y = M.top(), I = M.left()) : (It() ? (ce(!0, !0), me()) : u.applyBounds(), a ? (N = t.ownerSVGElement ? [k.xOrigin - t.getBBox().x, k.yOrigin - t.getBBox().y] : (Vo(t)[ll] || "0 0").split(" "), Ie = u.rotationOrigin = fr(t).apply({
                        x: parseFloat(N[0]) || 0,
                        y: parseFloat(N[1]) || 0
                    }), ce(!0, !0), X = u.pointerX - Ie.x - $, F = Ie.y - u.pointerY + C, I = u.x, Y = u.y = Math.atan2(F, X) * Gu) : (Y = L(l, "px"), I = L(c, "px"))), K && S && (I > j ? I = j + (I - j) / S : I < se && (I = se - (se - I) / S), a || (Y > re ? Y = re + (Y - re) / S : Y < ie && (Y = ie - (ie - Y) / S))), u.startX = I = $t(I), u.startY = Y = $t(Y)
                },
                It = function() {
                    return u.tween && u.tween.isActive()
                },
                jt = function() {
                    Kr.parentNode && !It() && !u.isDragging && Kr.parentNode.removeChild(Kr)
                },
                xt = function(S, $) {
                    var C;
                    if (!P || u.isPressed || !S || (S.type === "mousedown" || S.type === "pointerdown") && !$ && ci() - T < 30 && Xo[u.pointerEvent.type]) {
                        U && S && P && wr(S);
                        return
                    }
                    if (_t = It(), fe = !1, u.pointerEvent = S, Xo[S.type] ? (ge = ~S.type.indexOf("touch") ? S.currentTarget || S.target : z, dt(ge, "touchend", Be), dt(ge, "touchmove", le), dt(ge, "touchcancel", Be), dt(z, "touchstart", Zu)) : (ge = null, dt(z, "mousemove", le)), Ve = null, (!Ps || !ge) && (dt(z, "mouseup", Be), S && S.target && dt(S.target, "mouseup", Be)), pe = x.call(u, S.target) && r.dragClickables === !1 && !$, pe) {
                        dt(S.target, "change", Be), st(u, "pressInit", "onPressInit"), st(u, "press", "onPress"), ns(g, !0), U = !1;
                        return
                    }
                    if (A = !ge || f === h || u.vars.allowNativeTouchScrolling === !1 || u.vars.allowContextMenu && S && (S.ctrlKey || S.which > 2) ? !1 : f ? "y" : "x", U = !A && !u.allowEventDefault, U && (wr(S), dt(je, "touchforcechange", wr)), S.changedTouches ? (S = Re = S.changedTouches[0], Ce = S.identifier) : S.pointerId ? Ce = S.pointerId : Re = Ce = null, js++, Sg(Ne), V = u.pointerY = S.pageY, R = u.pointerX = S.pageX, st(u, "pressInit", "onPressInit"), (A || u.autoScroll) && Ta(t.parentNode), t.parentNode && u.autoScroll && !M && !a && t.parentNode._gsMaxScrollX && !Kr.parentNode && !t.getBBox && (Kr.style.width = t.parentNode.scrollWidth + "px", t.parentNode.appendChild(Kr)), mt(), u.tween && u.tween.kill(), u.isThrowing = !1, Me.killTweensOf(M || t, p, !0), M && Me.killTweensOf(t, {
                            scrollTo: 1
                        }, !0), u.tween = u.lockedAxis = null, (r.zIndexBoost || !a && !M && r.zIndexBoost !== !1) && (t.style.zIndex = e.zIndex++), u.isPressed = !0, te = !!(r.onDrag || u._listeners.drag), E = !!(r.onMove || u._listeners.move), r.cursor !== !1 || r.activeCursor)
                        for (C = g.length; --C > -1;) Me.set(g[C], {
                            cursor: r.activeCursor || r.cursor || (no === "grab" ? "grabbing" : no)
                        });
                    st(u, "press", "onPress"), or && or.track(M || t, s ? "x,y" : a ? "rotation" : "top,left")
                },
                le = function(S) {
                    var $ = S,
                        C, N, X, F, H, B;
                    if (!P || ru || !u.isPressed || !S) {
                        U && S && P && wr(S);
                        return
                    }
                    if (u.pointerEvent = S, C = S.changedTouches, C) {
                        if (S = C[0], S !== Re && S.identifier !== Ce) {
                            for (F = C.length; --F > -1 && (S = C[F]).identifier !== Ce && S.target !== t;);
                            if (F < 0) return
                        }
                    } else if (S.pointerId && Ce && S.pointerId !== Ce) return;
                    if (ge && A && !Ve && (br.x = S.pageX - (O ? Dn(z) : 0), br.y = S.pageY - (O ? On(z) : 0), ne && ne.apply(br, br), N = br.x, X = br.y, H = Math.abs(N - R), B = Math.abs(X - V), (H !== B && (H > d || B > d) || io && A === Ve) && (Ve = H > B && f ? "x" : "y", A && Ve !== A && dt(je, "touchforcechange", wr), u.vars.lockAxisOnTouchScroll !== !1 && f && h && (u.lockedAxis = Ve === "x" ? "y" : "x", di(u.vars.onLockAxis) && u.vars.onLockAxis.call(u, $)), io && A === Ve))) {
                        Be($);
                        return
                    }!u.allowEventDefault && (!A || Ve && A !== Ve) && $.cancelable !== !1 ? (wr($), U = !0) : U && (U = !1), u.autoScroll && (b = !0), Et(S.pageX, S.pageY, E)
                },
                Et = function(S, $, C) {
                    var N = 1 - u.dragResistance,
                        X = 1 - u.edgeResistance,
                        F = u.pointerX,
                        H = u.pointerY,
                        B = Y,
                        G = u.x,
                        ae = u.y,
                        ee = u.endX,
                        de = u.endY,
                        Ae = u.endRotation,
                        Fe = we,
                        ke, Se, Xe, he, Tt, Ze;
                    u.pointerX = S, u.pointerY = $, O && (S -= Dn(z), $ -= On(z)), a ? (he = $t(Math.atan2(Ie.y - $, S - Ie.x) * Gu), Tt = u.y - he, Tt > 180 ? (Y -= 360, u.y = he) : Tt < -180 && (Y += 360, u.y = he), ne && (Ze = S * ne.a + $ * ne.c + ne.e, $ = S * ne.b + $ * ne.d + ne.f, S = Ze), u.x !== I || Math.max(Math.abs(R - S), Math.abs(V - $)) > d ? (u.y = he, Xe = $t(I + (Y - he) * N)) : Xe = I) : (ne && (Ze = S * ne.a + $ * ne.c + ne.e, $ = S * ne.b + $ * ne.d + ne.f, S = Ze), Se = $ - V, ke = S - R, Se < d && Se > -d && (Se = 0), ke < d && ke > -d && (ke = 0), (u.lockAxis || u.lockedAxis) && (ke || Se) && (Ze = u.lockedAxis, Ze || (u.lockedAxis = Ze = f && Math.abs(ke) > Math.abs(Se) ? "y" : h ? "x" : null, Ze && di(u.vars.onLockAxis) && u.vars.onLockAxis.call(u, u.pointerEvent)), Ze === "y" ? Se = 0 : Ze === "x" && (ke = 0)), Xe = $t(I + ke * N), he = $t(Y + Se * N)), (Oe || qe || We) && (u.x !== Xe || u.y !== he && !a) && (We && (hn.x = Xe, hn.y = he, Ze = We(hn), Xe = $t(Ze.x), he = $t(Ze.y)), Oe && (Xe = $t(Oe(Xe))), qe && (he = $t(qe(he)))), K && (Xe > j ? Xe = j + Math.round((Xe - j) * X) : Xe < se && (Xe = se + Math.round((Xe - se) * X)), a || (he > re ? he = Math.round(re + (he - re) * X) : he < ie && (he = Math.round(ie + (he - ie) * X)))), (u.x !== Xe || u.y !== he && !a) && (a ? (u.endRotation = u.x = u.endX = $t(Xe), we = !0) : (h && (u.y = u.endY = he, we = !0), f && (u.x = u.endX = Xe, we = !0)), !C || st(u, "move", "onMove") !== !1 ? !u.isDragging && u.isPressed && (u.isDragging = fe = !0, st(u, "dragstart", "onDragStart")) : (u.pointerX = F, u.pointerY = H, Y = B, u.x = G, u.y = ae, u.endX = ee, u.endY = de, u.endRotation = Ae, we = Fe))
                },
                Be = function Q(S, $) {
                    if (!P || !u.isPressed || S && Ce != null && !$ && (S.pointerId && S.pointerId !== Ce && S.target !== t || S.changedTouches && !Mg(S.changedTouches, Ce))) {
                        U && S && P && wr(S);
                        return
                    }
                    u.isPressed = !1;
                    var C = S,
                        N = u.isDragging,
                        X = u.vars.allowContextMenu && S && (S.ctrlKey || S.which > 2),
                        F = Me.delayedCall(.001, jt),
                        H, B, G, ae, ee;
                    if (ge ? (lt(ge, "touchend", Q), lt(ge, "touchmove", le), lt(ge, "touchcancel", Q), lt(z, "touchstart", Zu)) : lt(z, "mousemove", le), lt(je, "touchforcechange", wr), (!Ps || !ge) && (lt(z, "mouseup", Q), S && S.target && lt(S.target, "mouseup", Q)), we = !1, N && (_ = ju = ci(), u.isDragging = !1), Qu(Ne), pe && !X) {
                        S && (lt(S.target, "change", Q), u.pointerEvent = C), ns(g, !1), st(u, "release", "onRelease"), st(u, "click", "onClick"), pe = !1;
                        return
                    }
                    for (B = g.length; --B > -1;) ka(g[B], "cursor", r.cursor || (r.cursor !== !1 ? no : null));
                    if (js--, S) {
                        if (H = S.changedTouches, H && (S = H[0], S !== Re && S.identifier !== Ce)) {
                            for (B = H.length; --B > -1 && (S = H[B]).identifier !== Ce && S.target !== t;);
                            if (B < 0 && !$) return
                        }
                        u.pointerEvent = C, u.pointerX = S.pageX, u.pointerY = S.pageY
                    }
                    return X && C ? (wr(C), U = !0, st(u, "release", "onRelease")) : C && !N ? (U = !1, _t && (r.snap || r.bounds) && vr(r.inertia || r.throwProps), st(u, "release", "onRelease"), (!io || C.type !== "touchmove") && C.type.indexOf("cancel") === -1 && (st(u, "click", "onClick"), ci() - T < 300 && st(u, "doubleclick", "onDoubleClick"), ae = C.target || t, T = ci(), ee = function() {
                        T !== D && u.enabled() && !u.isPressed && !C.defaultPrevented && (ae.click ? ae.click() : z.createEvent && (G = z.createEvent("MouseEvents"), G.initMouseEvent("click", !0, !0, je, 1, u.pointerEvent.screenX, u.pointerEvent.screenY, u.pointerX, u.pointerY, !1, !1, !1, !1, 0, null), ae.dispatchEvent(G)))
                    }, !io && !C.defaultPrevented && Me.delayedCall(.05, ee))) : (vr(r.inertia || r.throwProps), !u.allowEventDefault && C && (r.dragClickables !== !1 || !x.call(u, C.target)) && N && (!A || Ve && A === Ve) && C.cancelable !== !1 ? (U = !0, wr(C)) : U = !1, st(u, "release", "onRelease")), It() && F.duration(u.tween.duration()), N && st(u, "dragend", "onDragEnd"), !0
                },
                Pe = function(S) {
                    if (S && u.isDragging && !M) {
                        var $ = S.target || t.parentNode,
                            C = $.scrollLeft - $._gsScrollX,
                            N = $.scrollTop - $._gsScrollY;
                        (C || N) && (ne ? (R -= C * ne.a + N * ne.c, V -= N * ne.d + C * ne.b) : (R -= C, V -= N), $._gsScrollX += C, $._gsScrollY += N, Et(u.pointerX, u.pointerY))
                    }
                },
                He = function(S) {
                    var $ = ci(),
                        C = $ - T < 100,
                        N = $ - _ < 50,
                        X = C && D === T,
                        F = u.pointerEvent && u.pointerEvent.defaultPrevented,
                        H = C && q === T,
                        B = S.isTrusted || S.isTrusted == null && C && X;
                    if ((X || N && u.vars.suppressClickOnDrag !== !1) && S.stopImmediatePropagation && S.stopImmediatePropagation(), C && !(u.pointerEvent && u.pointerEvent.defaultPrevented) && (!X || B && !H)) {
                        B && X && (q = T), D = T;
                        return
                    }(u.isPressed || N || C) && (!B || !S.detail || !C || F) && wr(S), !C && !N && !fe && (S && S.target && (u.pointerEvent = S), st(u, "click", "onClick"))
                },
                Ct = function(S) {
                    return ne ? {
                        x: S.x * ne.a + S.y * ne.c + ne.e,
                        y: S.x * ne.b + S.y * ne.d + ne.f
                    } : {
                        x: S.x,
                        y: S.y
                    }
                };
            return Qe = e.get(t), Qe && Qe.kill(), i.startDrag = function(Q, S) {
                var $, C, N, X;
                xt(Q || u.pointerEvent, !0), S && !u.hitTest(Q || u.pointerEvent) && ($ = dn(Q || u.pointerEvent), C = dn(t), N = Ct({
                    x: $.left + $.width / 2,
                    y: $.top + $.height / 2
                }), X = Ct({
                    x: C.left + C.width / 2,
                    y: C.top + C.height / 2
                }), R -= N.x - X.x, V -= N.y - X.y), u.isDragging || (u.isDragging = fe = !0, st(u, "dragstart", "onDragStart"))
            }, i.drag = le, i.endDrag = function(Q) {
                return Be(Q || u.pointerEvent, !0)
            }, i.timeSinceDrag = function() {
                return u.isDragging ? 0 : (ci() - _) / 1e3
            }, i.timeSinceClick = function() {
                return (ci() - T) / 1e3
            }, i.hitTest = function(Q, S) {
                return e.hitTest(u.target, Q, S)
            }, i.getDirection = function(Q, S) {
                var $ = Q === "velocity" && or ? Q : yo(Q) && !a ? "element" : "start",
                    C, N, X, F, H, B;
                return $ === "element" && (H = dn(u.target), B = dn(Q)), C = $ === "start" ? u.x - I : $ === "velocity" ? or.getVelocity(t, c) : H.left + H.width / 2 - (B.left + B.width / 2), a ? C < 0 ? "counter-clockwise" : "clockwise" : (S = S || 2, N = $ === "start" ? u.y - Y : $ === "velocity" ? or.getVelocity(t, l) : H.top + H.height / 2 - (B.top + B.height / 2), X = Math.abs(C / N), F = X < 1 / S ? "" : C < 0 ? "left" : "right", X < S && (F !== "" && (F += "-"), F += N < 0 ? "up" : "down"), F)
            }, i.applyBounds = function(Q, S) {
                var $, C, N, X, F, H;
                if (Q && r.bounds !== Q) return r.bounds = Q, u.update(!0, S);
                if (ce(!0), me(), K && !It()) {
                    if ($ = u.x, C = u.y, $ > j ? $ = j : $ < se && ($ = se), C > re ? C = re : C < ie && (C = ie), (u.x !== $ || u.y !== C) && (N = !0, u.x = u.endX = $, a ? u.endRotation = $ : u.y = u.endY = C, we = !0, Ne(!0), u.autoScroll && !u.isDragging))
                        for (Ta(t.parentNode), X = t, Gr.scrollTop = je.pageYOffset != null ? je.pageYOffset : z.documentElement.scrollTop != null ? z.documentElement.scrollTop : z.body.scrollTop, Gr.scrollLeft = je.pageXOffset != null ? je.pageXOffset : z.documentElement.scrollLeft != null ? z.documentElement.scrollLeft : z.body.scrollLeft; X && !H;) H = Xn(X.parentNode), F = H ? Gr : X.parentNode, h && F.scrollTop > F._gsMaxScrollY && (F.scrollTop = F._gsMaxScrollY), f && F.scrollLeft > F._gsMaxScrollX && (F.scrollLeft = F._gsMaxScrollX), X = F;
                    u.isThrowing && (N || u.endX > j || u.endX < se || u.endY > re || u.endY < ie) && vr(r.inertia || r.throwProps, N)
                }
                return u
            }, i.update = function(Q, S, $) {
                if (S && u.isPressed) {
                    if (a) u.x = u.y = $t(parseFloat(k.rotation));
                    else {
                        var C = fr(t),
                            N = ue.apply({
                                x: u.x - I,
                                y: u.y - Y
                            }),
                            X = fr(t.parentNode, !0);
                        X.apply({
                            x: C.e - N.x,
                            y: C.f - N.y
                        }, N), u.x = $t(u.x - (N.x - X.e)), u.y = $t(u.y - (N.y - X.f))
                    }
                    Ne(!0), mt()
                }
                var F = u.x,
                    H = u.y;
                return bt(!S), Q ? u.applyBounds() : (we && $ && Ne(!0), ce(!0)), S && (Et(u.pointerX, u.pointerY), we && Ne(!0)), u.isPressed && !S && (f && Math.abs(F - u.x) > .01 || h && Math.abs(H - u.y) > .01 && !a) && mt(), u.autoScroll && (Ta(t.parentNode, u.isDragging), b = u.isDragging, Ne(!0), ec(t, Pe), Ju(t, Pe)), u
            }, i.enable = function(Q) {
                var S = {
                        lazy: !0
                    },
                    $, C, N;
                if (r.cursor !== !1 && (S.cursor = r.cursor || no), Me.utils.checkPrefix("touchCallout") && (S.touchCallout = "none"), Q !== "soft") {
                    for (Uu(g, f === h ? "none" : r.allowNativeTouchScrolling && t.scrollHeight === t.clientHeight == (t.scrollWidth === t.clientHeight) || r.allowEventDefault ? "manipulation" : f ? "pan-y" : "pan-x"), C = g.length; --C > -1;) N = g[C], Ps || dt(N, "mousedown", xt), dt(N, "touchstart", xt), dt(N, "click", He, !0), Me.set(N, S), N.getBBox && N.ownerSVGElement && f !== h && Me.set(N.ownerSVGElement, {
                        touchAction: r.allowNativeTouchScrolling || r.allowEventDefault ? "manipulation" : f ? "pan-y" : "pan-x"
                    }), r.allowContextMenu || dt(N, "contextmenu", _e);
                    ns(g, !1)
                }
                return Ju(t, Pe), P = !0, or && Q !== "soft" && or.track(M || t, s ? "x,y" : a ? "rotation" : "top,left"), t._gsDragID = $ = t._gsDragID || "d" + xg++, Cn[$] = u, M && (M.enable(), M.element._gsDragID = $), (r.bounds || a) && mt(), r.bounds && u.applyBounds(), u
            }, i.disable = function(Q) {
                for (var S = u.isDragging, $ = g.length, C; --$ > -1;) ka(g[$], "cursor", null);
                if (Q !== "soft") {
                    for (Uu(g, null), $ = g.length; --$ > -1;) C = g[$], ka(C, "touchCallout", null), lt(C, "mousedown", xt), lt(C, "touchstart", xt), lt(C, "click", He, !0), lt(C, "contextmenu", _e);
                    ns(g, !0), ge && (lt(ge, "touchcancel", Be), lt(ge, "touchend", Be), lt(ge, "touchmove", le)), lt(z, "mouseup", Be), lt(z, "mousemove", le)
                }
                return ec(t, Pe), P = !1, or && Q !== "soft" && (or.untrack(M || t, s ? "x,y" : a ? "rotation" : "top,left"), u.tween && u.tween.kill()), M && M.disable(), Qu(Ne), u.isDragging = u.isPressed = pe = !1, S && st(u, "dragend", "onDragEnd"), u
            }, i.enabled = function(Q, S) {
                return arguments.length ? Q ? u.enable(S) : u.disable(S) : P
            }, i.kill = function() {
                return u.isThrowing = !1, u.tween && u.tween.kill(), u.disable(), Me.set(g, {
                    clearProps: "userSelect"
                }), delete Cn[t._gsDragID], u
            }, i.revert = function() {
                this.kill(), this.styles && this.styles.revert()
            }, ~n.indexOf("scroll") && (M = i.scrollProxy = new Ag(t, kg({
                onKill: function() {
                    u.isPressed && Be(null)
                }
            }, r)), t.style.overflowY = h && !sl ? "auto" : "hidden", t.style.overflowX = f && !sl ? "auto" : "hidden", t = M.content), a ? p.rotation = 1 : (f && (p[c] = 1), h && (p[l] = 1)), k.force3D = "force3D" in r ? r.force3D : !0, uh(Hu(i)), i.enable(), i
        }
        return e.register = function(r) {
            Me = r, Pa()
        }, e.create = function(r, i) {
            return ol || Pa(!0), yi(r).map(function(n) {
                return new e(n, i)
            })
        }, e.get = function(r) {
            return Cn[(yi(r)[0] || {})._gsDragID]
        }, e.timeSinceDrag = function() {
            return (ci() - ju) / 1e3
        }, e.hitTest = function(r, i, n) {
            if (r === i) return !1;
            var s = dn(r),
                a = dn(i),
                c = s.top,
                l = s.left,
                f = s.right,
                h = s.bottom,
                d = s.width,
                u = s.height,
                g = a.left > f || a.right < l || a.top > h || a.bottom < c,
                p, _, b;
            return g || !n ? !g : (b = (n + "").indexOf("%") !== -1, n = parseFloat(n) || 0, p = {
                left: Math.max(l, a.left),
                top: Math.max(c, a.top)
            }, p.width = Math.min(f, a.right) - p.left, p.height = Math.min(h, a.bottom) - p.top, p.width < 0 || p.height < 0 ? !1 : b ? (n *= .01, _ = p.width * p.height, _ >= d * u * n || _ >= a.width * a.height * n) : p.width > n && p.height > n)
        }, e
    }(Lg);
Pg(on.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: !1,
    isPressed: !1
});
on.zIndex = 1e3;
on.version = "3.14.2";
fh() && Me.registerPlugin(on);
/*!
 * MotionPathPlugin 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var Rg = "x,translateX,left,marginLeft,xPercent".split(","),
    Ng = "y,translateY,top,marginTop,yPercent".split(","),
    Fg = Math.PI / 180,
    kr, gh, mn, cl, Ma, ic, Ig = function() {
        return kr || typeof window < "u" && (kr = window.gsap) && kr.registerPlugin && kr
    },
    jn = function(e, t, r, i) {
        for (var n = t.length, s = i === 2 ? 0 : i, a = 0; a < n; a++) e[s] = parseFloat(t[a][r]), i === 2 && (e[s + 1] = 0), s += 2;
        return e
    },
    kn = function(e, t, r) {
        return parseFloat(e._gsap.get(e, t, r || "px")) || 0
    },
    _h = function(e) {
        var t = e[0],
            r = e[1],
            i;
        for (i = 2; i < e.length; i += 2) t = e[i] += t, r = e[i + 1] += r
    },
    nc = function(e, t, r, i, n, s, a, c, l) {
        if (a.type === "cubic") t = [t];
        else {
            a.fromCurrent !== !1 && t.unshift(kn(r, i, c), n ? kn(r, n, l) : 0), a.relative && _h(t);
            var f = n ? rl : og;
            t = [f(t, a.curviness)]
        }
        return t = s(mh(t, r, a)), Us(e, r, i, t, "x", c), n && Us(e, r, n, t, "y", l), Ki(t, a.resolution || (a.curviness === 0 ? 20 : 12))
    },
    $g = function(e) {
        return e
    },
    Bg = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,
    oc = function(e, t, r) {
        var i = fr(e),
            n = 0,
            s = 0,
            a;
        return (e.tagName + "").toLowerCase() === "svg" ? (a = e.viewBox.baseVal, a.width || (a = {
            width: +e.getAttribute("width"),
            height: +e.getAttribute("height")
        })) : a = t && e.getBBox && e.getBBox(), t && t !== "auto" && (n = t.push ? t[0] * (a ? a.width : e.offsetWidth || 0) : t.x, s = t.push ? t[1] * (a ? a.height : e.offsetHeight || 0) : t.y), r.apply(n || s ? i.apply({
            x: n,
            y: s
        }) : {
            x: i.e,
            y: i.f
        })
    },
    fl = function(e, t, r, i) {
        var n = fr(e.parentNode, !0, !0),
            s = n.clone().multiply(fr(t)),
            a = oc(e, r, n),
            c = oc(t, i, n),
            l = c.x,
            f = c.y,
            h;
        return s.e = s.f = 0, i === "auto" && t.getTotalLength && t.tagName.toLowerCase() === "path" && (h = t.getAttribute("d").match(Bg) || [], h = s.apply({
            x: +h[0],
            y: +h[1]
        }), l += h.x, f += h.y), h && (h = s.apply(t.getBBox()), l -= h.x, f -= h.y), s.e = l - a.x, s.f = f - a.y, s
    },
    mh = function(e, t, r) {
        var i = r.align,
            n = r.matrix,
            s = r.offsetX,
            a = r.offsetY,
            c = r.alignOrigin,
            l = e[0][0],
            f = e[0][1],
            h = kn(t, "x"),
            d = kn(t, "y"),
            u, g, p;
        return !e || !e.length ? ks("M0,0L0,0") : (i && (i === "self" || (u = cl(i)[0] || t) === t ? Tn(e, 1, 0, 0, 1, h - l, d - f) : (c && c[2] !== !1 ? kr.set(t, {
            transformOrigin: c[0] * 100 + "% " + c[1] * 100 + "%"
        }) : c = [kn(t, "xPercent") / -100, kn(t, "yPercent") / -100], g = fl(t, u, c, "auto"), p = g.apply({
            x: l,
            y: f
        }), Tn(e, g.a, g.b, g.c, g.d, h + g.e - (p.x - g.e), d + g.f - (p.y - g.f)))), n ? Tn(e, n.a, n.b, n.c, n.d, n.e, n.f) : (s || a) && Tn(e, 1, 0, 0, 1, s || 0, a || 0), e)
    },
    Us = function(e, t, r, i, n, s) {
        var a = t._gsap,
            c = a.harness,
            l = c && c.aliases && c.aliases[r],
            f = l && l.indexOf(",") < 0 ? l : r,
            h = e._pt = new gh(e._pt, t, f, 0, 0, $g, 0, a.set(t, f, e));
        h.u = mn(a.get(t, f, s)) || 0, h.path = i, h.pp = n, e._props.push(f)
    },
    zg = function(e, t) {
        return function(r) {
            return e || t !== 1 ? Jf(r, e, t) : r
        }
    },
    hl = {
        version: "3.14.2",
        name: "motionPath",
        register: function(e, t, r) {
            kr = e, mn = kr.utils.getUnit, cl = kr.utils.toArray, Ma = kr.core.getStyleSaver, ic = kr.core.reverting || function() {}, gh = r
        },
        init: function(e, t, r) {
            if (!kr) return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
            (!(typeof t == "object" && !t.style) || !t.path) && (t = {
                path: t
            });
            var i = [],
                n = t,
                s = n.path,
                a = n.autoRotate,
                c = n.unitX,
                l = n.unitY,
                f = n.x,
                h = n.y,
                d = s[0],
                u = zg(t.start, "end" in t ? t.end : 1),
                g, p;
            if (this.rawPaths = i, this.target = e, this.tween = r, this.styles = Ma && Ma(e, "transform"), (this.rotate = a || a === 0) && (this.rOffset = parseFloat(a) || 0, this.radians = !!t.useRadians, this.rProp = t.rotation || "rotation", this.rSet = e._gsap.set(e, this.rProp, this), this.ru = mn(e._gsap.get(e, this.rProp)) || 0), Array.isArray(s) && !("closed" in s) && typeof d != "number") {
                for (p in d) !f && ~Rg.indexOf(p) ? f = p : !h && ~Ng.indexOf(p) && (h = p);
                f && h ? i.push(nc(this, jn(jn([], s, f, 0), s, h, 1), e, f, h, u, t, c || mn(s[0][f]), l || mn(s[0][h]))) : f = h = 0;
                for (p in d) p !== f && p !== h && i.push(nc(this, jn([], s, p, 2), e, p, 0, u, t, mn(s[0][p])))
            } else g = u(mh(ks(t.path), e, t)), Ki(g, t.resolution), i.push(g), Us(this, e, t.x || "x", g, "x", t.unitX || "px"), Us(this, e, t.y || "y", g, "y", t.unitY || "px");
            r.vars.immediateRender && this.render(r.progress(), this)
        },
        render: function(e, t) {
            var r = t.rawPaths,
                i = r.length,
                n = t._pt;
            if (t.tween._time || !ic()) {
                for (e > 1 ? e = 1 : e < 0 && (e = 0); i--;) Vu(r[i], e, !i && t.rotate, r[i]);
                for (; n;) n.set(n.t, n.p, n.path[n.pp] + n.u, n.d, e), n = n._next;
                t.rotate && t.rSet(t.target, t.rProp, r[0].angle * (t.radians ? Fg : 1) + t.rOffset + t.ru, t, e)
            } else t.styles.revert()
        },
        getLength: function(e) {
            return Ki(ks(e)).totalLength
        },
        sliceRawPath: Jf,
        getRawPath: ks,
        pointsToSegment: rl,
        stringToRawPath: Yo,
        rawPathToString: Jl,
        transformRawPath: Tn,
        getGlobalMatrix: fr,
        getPositionOnPath: Vu,
        cacheRawPathMeasurements: Ki,
        convertToPath: function(e, t) {
            return cl(e).map(function(r) {
                return ig(r, t !== !1)
            })
        },
        convertCoordinates: function(e, t, r) {
            var i = fr(t, !0, !0).multiply(fr(e));
            return r ? i.apply(r) : i
        },
        getAlignMatrix: fl,
        getRelativePosition: function(e, t, r, i) {
            var n = fl(e, t, r, i);
            return {
                x: n.e,
                y: n.f
            }
        },
        arrayToRawPath: function(e, t) {
            t = t || {};
            var r = jn(jn([], e, t.x || "x", 0), e, t.y || "y", 1);
            return t.relative && _h(r), [t.type === "cubic" ? r : rl(r, t.curviness)]
        }
    };
Ig() && kr.registerPlugin(hl);

function sc(o, e) {
    for (var t = 0; t < e.length; t++) {
        var r = e[t];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(o, r.key, r)
    }
}

function Yg(o, e, t) {
    return e && sc(o.prototype, e), t && sc(o, t), o
}
/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var Pt, Es, dr, vi, wi, An, yh, $i, wo, vh, ti, Or, wh, bh = function() {
        return Pt || typeof window < "u" && (Pt = window.gsap) && Pt.registerPlugin && Pt
    },
    xh = 1,
    Sn = [],
    Te = [],
    qr = [],
    bo = Date.now,
    dl = function(e, t) {
        return t
    },
    Xg = function() {
        var e = wo.core,
            t = e.bridge || {},
            r = e._scrollers,
            i = e._proxies;
        r.push.apply(r, Te), i.push.apply(i, qr), Te = r, qr = i, dl = function(s, a) {
            return t[s](a)
        }
    },
    Ti = function(e, t) {
        return ~qr.indexOf(e) && qr[qr.indexOf(e) + 1][t]
    },
    xo = function(e) {
        return !!~vh.indexOf(e)
    },
    zt = function(e, t, r, i, n) {
        return e.addEventListener(t, r, {
            passive: i !== !1,
            capture: !!n
        })
    },
    Bt = function(e, t, r, i) {
        return e.removeEventListener(t, r, !!i)
    },
    os = "scrollLeft",
    ss = "scrollTop",
    pl = function() {
        return ti && ti.isPressed || Te.cache++
    },
    Ks = function(e, t) {
        var r = function i(n) {
            if (n || n === 0) {
                xh && (dr.history.scrollRestoration = "manual");
                var s = ti && ti.isPressed;
                n = i.v = Math.round(n) || (ti && ti.iOS ? 1 : 0), e(n), i.cacheID = Te.cache, s && dl("ss", n)
            } else(t || Te.cache !== i.cacheID || dl("ref")) && (i.cacheID = Te.cache, i.v = e());
            return i.v + i.offset
        };
        return r.offset = 0, e && r
    },
    Gt = {
        s: os,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: Ks(function(o) {
            return arguments.length ? dr.scrollTo(o, gt.sc()) : dr.pageXOffset || vi[os] || wi[os] || An[os] || 0
        })
    },
    gt = {
        s: ss,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: Gt,
        sc: Ks(function(o) {
            return arguments.length ? dr.scrollTo(Gt.sc(), o) : dr.pageYOffset || vi[ss] || wi[ss] || An[ss] || 0
        })
    },
    Kt = function(e, t) {
        return (t && t._ctx && t._ctx.selector || Pt.utils.toArray)(e)[0] || (typeof e == "string" && Pt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
    },
    Vg = function(e, t) {
        for (var r = t.length; r--;)
            if (t[r] === e || t[r].contains(e)) return !0;
        return !1
    },
    Ei = function(e, t) {
        var r = t.s,
            i = t.sc;
        xo(e) && (e = vi.scrollingElement || wi);
        var n = Te.indexOf(e),
            s = i === gt.sc ? 1 : 2;
        !~n && (n = Te.push(e) - 1), Te[n + s] || zt(e, "scroll", pl);
        var a = Te[n + s],
            c = a || (Te[n + s] = Ks(Ti(e, r), !0) || (xo(e) ? i : Ks(function(l) {
                return arguments.length ? e[r] = l : e[r]
            })));
        return c.target = e, a || (c.smooth = Pt.getProperty(e, "scrollBehavior") === "smooth"), c
    },
    gl = function(e, t, r) {
        var i = e,
            n = e,
            s = bo(),
            a = s,
            c = t || 50,
            l = Math.max(500, c * 3),
            f = function(g, p) {
                var _ = bo();
                p || _ - s > c ? (n = i, i = g, a = s, s = _) : r ? i += g : i = n + (g - n) / (_ - a) * (s - a)
            },
            h = function() {
                n = i = r ? 0 : i, a = s = 0
            },
            d = function(g) {
                var p = a,
                    _ = n,
                    b = bo();
                return (g || g === 0) && g !== i && f(g), s === a || b - a > l ? 0 : (i + (r ? _ : -_)) / ((r ? b : s) - p) * 1e3
            };
        return {
            update: f,
            reset: h,
            getVelocity: d
        }
    },
    Un = function(e, t) {
        return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    },
    ac = function(e) {
        var t = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(r) ? t : r
    },
    Th = function() {
        wo = Pt.core.globals().ScrollTrigger, wo && wo.core && Xg()
    },
    kh = function(e) {
        return Pt = e || bh(), !Es && Pt && typeof document < "u" && document.body && (dr = window, vi = document, wi = vi.documentElement, An = vi.body, vh = [dr, vi, wi, An], Pt.utils.clamp, wh = Pt.core.context || function() {}, $i = "onpointerenter" in An ? "pointer" : "mouse", yh = it.isTouch = dr.matchMedia && dr.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in dr || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Or = it.eventTypes = ("ontouchstart" in wi ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in wi ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return xh = 0
        }, 500), Th(), Es = 1), Es
    };
Gt.op = gt;
Te.cache = 0;
var it = function() {
    function o(t) {
        this.init(t)
    }
    var e = o.prototype;
    return e.init = function(r) {
        Es || kh(Pt) || console.warn("Please gsap.registerPlugin(Observer)"), wo || Th();
        var i = r.tolerance,
            n = r.dragMinimum,
            s = r.type,
            a = r.target,
            c = r.lineHeight,
            l = r.debounce,
            f = r.preventDefault,
            h = r.onStop,
            d = r.onStopDelay,
            u = r.ignore,
            g = r.wheelSpeed,
            p = r.event,
            _ = r.onDragStart,
            b = r.onDragEnd,
            m = r.onDrag,
            w = r.onPress,
            v = r.onRelease,
            y = r.onRight,
            x = r.onLeft,
            T = r.onUp,
            k = r.onDown,
            O = r.onChangeX,
            L = r.onChangeY,
            z = r.onChange,
            P = r.onToggleX,
            M = r.onToggleY,
            R = r.onHover,
            V = r.onHoverEnd,
            I = r.onMove,
            Y = r.ignoreCheck,
            K = r.isNormalizer,
            te = r.onGestureStart,
            E = r.onGestureEnd,
            j = r.onWheel,
            se = r.onEnable,
            re = r.onDisable,
            ie = r.onClick,
            Re = r.scrollSpeed,
            Ce = r.capture,
            Ie = r.allowClicks,
            we = r.lockAxis,
            Qe = r.onLockAxis;
        this.target = a = Kt(a) || wi, this.vars = r, u && (u = Pt.utils.toArray(u)), i = i || 1e-9, n = n || 0, g = g || 1, Re = Re || 1, s = s || "wheel,touch,pointer", l = l !== !1, c || (c = parseFloat(dr.getComputedStyle(An).lineHeight) || 22);
        var Oe, qe, We, pe, ge, ne, _t, A = this,
            Ve = 0,
            W = 0,
            D = r.passive || !f && r.passive !== !1,
            q = Ei(a, Gt),
            U = Ei(a, gt),
            ue = q(),
            fe = U(),
            _e = ~s.indexOf("touch") && !~s.indexOf("pointer") && Or[0] === "pointerdown",
            Ne = xo(a),
            ce = a.ownerDocument || vi,
            $e = [0, 0, 0],
            De = [0, 0, 0],
            me = 0,
            ot = function() {
                return me = bo()
            },
            Z = function(N, X) {
                return (A.event = N) && u && Vg(N.target, u) || X && _e && N.pointerType !== "touch" || Y && Y(N, X)
            },
            vr = function() {
                A._vx.reset(), A._vy.reset(), qe.pause(), h && h(A)
            },
            bt = function() {
                var N = A.deltaX = ac($e),
                    X = A.deltaY = ac(De),
                    F = Math.abs(N) >= i,
                    H = Math.abs(X) >= i;
                z && (F || H) && z(A, N, X, $e, De), F && (y && A.deltaX > 0 && y(A), x && A.deltaX < 0 && x(A), O && O(A), P && A.deltaX < 0 != Ve < 0 && P(A), Ve = A.deltaX, $e[0] = $e[1] = $e[2] = 0), H && (k && A.deltaY > 0 && k(A), T && A.deltaY < 0 && T(A), L && L(A), M && A.deltaY < 0 != W < 0 && M(A), W = A.deltaY, De[0] = De[1] = De[2] = 0), (pe || We) && (I && I(A), We && (_ && We === 1 && _(A), m && m(A), We = 0), pe = !1), ne && !(ne = !1) && Qe && Qe(A), ge && (j(A), ge = !1), Oe = 0
            },
            mt = function(N, X, F) {
                $e[F] += N, De[F] += X, A._vx.update(N), A._vy.update(X), l ? Oe || (Oe = requestAnimationFrame(bt)) : bt()
            },
            It = function(N, X) {
                we && !_t && (A.axis = _t = Math.abs(N) > Math.abs(X) ? "x" : "y", ne = !0), _t !== "y" && ($e[2] += N, A._vx.update(N, !0)), _t !== "x" && (De[2] += X, A._vy.update(X, !0)), l ? Oe || (Oe = requestAnimationFrame(bt)) : bt()
            },
            jt = function(N) {
                if (!Z(N, 1)) {
                    N = Un(N, f);
                    var X = N.clientX,
                        F = N.clientY,
                        H = X - A.x,
                        B = F - A.y,
                        G = A.isDragging;
                    A.x = X, A.y = F, (G || (H || B) && (Math.abs(A.startX - X) >= n || Math.abs(A.startY - F) >= n)) && (We || (We = G ? 2 : 1), G || (A.isDragging = !0), It(H, B))
                }
            },
            xt = A.onPress = function(C) {
                Z(C, 1) || C && C.button || (A.axis = _t = null, qe.pause(), A.isPressed = !0, C = Un(C), Ve = W = 0, A.startX = A.x = C.clientX, A.startY = A.y = C.clientY, A._vx.reset(), A._vy.reset(), zt(K ? a : ce, Or[1], jt, D, !0), A.deltaX = A.deltaY = 0, w && w(A))
            },
            le = A.onRelease = function(C) {
                if (!Z(C, 1)) {
                    Bt(K ? a : ce, Or[1], jt, !0);
                    var N = !isNaN(A.y - A.startY),
                        X = A.isDragging,
                        F = X && (Math.abs(A.x - A.startX) > 3 || Math.abs(A.y - A.startY) > 3),
                        H = Un(C);
                    !F && N && (A._vx.reset(), A._vy.reset(), f && Ie && Pt.delayedCall(.08, function() {
                        if (bo() - me > 300 && !C.defaultPrevented) {
                            if (C.target.click) C.target.click();
                            else if (ce.createEvent) {
                                var B = ce.createEvent("MouseEvents");
                                B.initMouseEvent("click", !0, !0, dr, 1, H.screenX, H.screenY, H.clientX, H.clientY, !1, !1, !1, !1, 0, null), C.target.dispatchEvent(B)
                            }
                        }
                    })), A.isDragging = A.isGesturing = A.isPressed = !1, h && X && !K && qe.restart(!0), We && bt(), b && X && b(A), v && v(A, F)
                }
            },
            Et = function(N) {
                return N.touches && N.touches.length > 1 && (A.isGesturing = !0) && te(N, A.isDragging)
            },
            Be = function() {
                return (A.isGesturing = !1) || E(A)
            },
            Pe = function(N) {
                if (!Z(N)) {
                    var X = q(),
                        F = U();
                    mt((X - ue) * Re, (F - fe) * Re, 1), ue = X, fe = F, h && qe.restart(!0)
                }
            },
            He = function(N) {
                if (!Z(N)) {
                    N = Un(N, f), j && (ge = !0);
                    var X = (N.deltaMode === 1 ? c : N.deltaMode === 2 ? dr.innerHeight : 1) * g;
                    mt(N.deltaX * X, N.deltaY * X, 0), h && !K && qe.restart(!0)
                }
            },
            Ct = function(N) {
                if (!Z(N)) {
                    var X = N.clientX,
                        F = N.clientY,
                        H = X - A.x,
                        B = F - A.y;
                    A.x = X, A.y = F, pe = !0, h && qe.restart(!0), (H || B) && It(H, B)
                }
            },
            Q = function(N) {
                A.event = N, R(A)
            },
            S = function(N) {
                A.event = N, V(A)
            },
            $ = function(N) {
                return Z(N) || Un(N, f) && ie(A)
            };
        qe = A._dc = Pt.delayedCall(d || .25, vr).pause(), A.deltaX = A.deltaY = 0, A._vx = gl(0, 50, !0), A._vy = gl(0, 50, !0), A.scrollX = q, A.scrollY = U, A.isDragging = A.isGesturing = A.isPressed = !1, wh(this), A.enable = function(C) {
            return A.isEnabled || (zt(Ne ? ce : a, "scroll", pl), s.indexOf("scroll") >= 0 && zt(Ne ? ce : a, "scroll", Pe, D, Ce), s.indexOf("wheel") >= 0 && zt(a, "wheel", He, D, Ce), (s.indexOf("touch") >= 0 && yh || s.indexOf("pointer") >= 0) && (zt(a, Or[0], xt, D, Ce), zt(ce, Or[2], le), zt(ce, Or[3], le), Ie && zt(a, "click", ot, !0, !0), ie && zt(a, "click", $), te && zt(ce, "gesturestart", Et), E && zt(ce, "gestureend", Be), R && zt(a, $i + "enter", Q), V && zt(a, $i + "leave", S), I && zt(a, $i + "move", Ct)), A.isEnabled = !0, A.isDragging = A.isGesturing = A.isPressed = pe = We = !1, A._vx.reset(), A._vy.reset(), ue = q(), fe = U(), C && C.type && xt(C), se && se(A)), A
        }, A.disable = function() {
            A.isEnabled && (Sn.filter(function(C) {
                return C !== A && xo(C.target)
            }).length || Bt(Ne ? ce : a, "scroll", pl), A.isPressed && (A._vx.reset(), A._vy.reset(), Bt(K ? a : ce, Or[1], jt, !0)), Bt(Ne ? ce : a, "scroll", Pe, Ce), Bt(a, "wheel", He, Ce), Bt(a, Or[0], xt, Ce), Bt(ce, Or[2], le), Bt(ce, Or[3], le), Bt(a, "click", ot, !0), Bt(a, "click", $), Bt(ce, "gesturestart", Et), Bt(ce, "gestureend", Be), Bt(a, $i + "enter", Q), Bt(a, $i + "leave", S), Bt(a, $i + "move", Ct), A.isEnabled = A.isPressed = A.isDragging = !1, re && re(A))
        }, A.kill = A.revert = function() {
            A.disable();
            var C = Sn.indexOf(A);
            C >= 0 && Sn.splice(C, 1), ti === A && (ti = 0)
        }, Sn.push(A), K && xo(a) && (ti = A), A.enable(p)
    }, Yg(o, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]), o
}();
it.version = "3.14.2";
it.create = function(o) {
    return new it(o)
};
it.register = kh;
it.getAll = function() {
    return Sn.slice()
};
it.getById = function(o) {
    return Sn.filter(function(e) {
        return e.vars.id === o
    })[0]
};
bh() && Pt.registerPlugin(it);
/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var J, yn, xe, Ke, ur, Ye, iu, Qs, qo, To, oo, as, At, ua, _l, qt, lc, uc, vn, Sh, Ea, Ph, Vt, ml, Mh, Eh, hi, yl, nu, Ln, ou, ko, vl, Ca, ls = 1,
    Lt = Date.now,
    Oa = Lt(),
    Cr = 0,
    so = 0,
    cc = function(e, t, r) {
        var i = ar(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
        return r["_" + t + "Clamp"] = i, i ? e.substr(6, e.length - 7) : e
    },
    fc = function(e, t) {
        return t && (!ar(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
    },
    qg = function o() {
        return so && requestAnimationFrame(o)
    },
    hc = function() {
        return ua = 1
    },
    dc = function() {
        return ua = 0
    },
    Ir = function(e) {
        return e
    },
    ao = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    Ch = function() {
        return typeof window < "u"
    },
    Oh = function() {
        return J || Ch() && (J = window.gsap) && J.registerPlugin && J
    },
    sn = function(e) {
        return !!~iu.indexOf(e)
    },
    Dh = function(e) {
        return (e === "Height" ? ou : xe["inner" + e]) || ur["client" + e] || Ye["client" + e]
    },
    Ah = function(e) {
        return Ti(e, "getBoundingClientRect") || (sn(e) ? function() {
            return Ls.width = xe.innerWidth, Ls.height = ou, Ls
        } : function() {
            return Zr(e)
        })
    },
    Wg = function(e, t, r) {
        var i = r.d,
            n = r.d2,
            s = r.a;
        return (s = Ti(e, "getBoundingClientRect")) ? function() {
            return s()[i]
        } : function() {
            return (t ? Dh(n) : e["client" + n]) || 0
        }
    },
    Hg = function(e, t) {
        return !t || ~qr.indexOf(e) ? Ah(e) : function() {
            return Ls
        }
    },
    Xr = function(e, t) {
        var r = t.s,
            i = t.d2,
            n = t.d,
            s = t.a;
        return Math.max(0, (r = "scroll" + i) && (s = Ti(e, r)) ? s() - Ah(e)()[n] : sn(e) ? (ur[r] || Ye[r]) - Dh(i) : e[r] - e["offset" + i])
    },
    us = function(e, t) {
        for (var r = 0; r < vn.length; r += 3)(!t || ~t.indexOf(vn[r + 1])) && e(vn[r], vn[r + 1], vn[r + 2])
    },
    ar = function(e) {
        return typeof e == "string"
    },
    Nt = function(e) {
        return typeof e == "function"
    },
    lo = function(e) {
        return typeof e == "number"
    },
    Bi = function(e) {
        return typeof e == "object"
    },
    Kn = function(e, t, r) {
        return e && e.progress(t ? 0 : 1) && r && e.pause()
    },
    Da = function(e, t) {
        if (e.enabled) {
            var r = e._ctx ? e._ctx.add(function() {
                return t(e)
            }) : t(e);
            r && r.totalTime && (e.callbackAnimation = r)
        }
    },
    pn = Math.abs,
    Lh = "left",
    Rh = "top",
    su = "right",
    au = "bottom",
    Ji = "width",
    en = "height",
    So = "Right",
    Po = "Left",
    Mo = "Top",
    Eo = "Bottom",
    ut = "padding",
    Sr = "margin",
    Vn = "Width",
    lu = "Height",
    ht = "px",
    Pr = function(e) {
        return xe.getComputedStyle(e)
    },
    Gg = function(e) {
        var t = Pr(e).position;
        e.style.position = t === "absolute" || t === "fixed" ? t : "relative"
    },
    pc = function(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e
    },
    Zr = function(e, t) {
        var r = t && Pr(e)[_l] !== "matrix(1, 0, 0, 1, 0, 0)" && J.to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1),
            i = e.getBoundingClientRect();
        return r && r.progress(0).kill(), i
    },
    Zs = function(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0
    },
    Nh = function(e) {
        var t = [],
            r = e.labels,
            i = e.duration(),
            n;
        for (n in r) t.push(r[n] / i);
        return t
    },
    jg = function(e) {
        return function(t) {
            return J.utils.snap(Nh(e), t)
        }
    },
    uu = function(e) {
        var t = J.utils.snap(e),
            r = Array.isArray(e) && e.slice(0).sort(function(i, n) {
                return i - n
            });
        return r ? function(i, n, s) {
            s === void 0 && (s = .001);
            var a;
            if (!n) return t(i);
            if (n > 0) {
                for (i -= s, a = 0; a < r.length; a++)
                    if (r[a] >= i) return r[a];
                return r[a - 1]
            } else
                for (a = r.length, i += s; a--;)
                    if (r[a] <= i) return r[a];
            return r[0]
        } : function(i, n, s) {
            s === void 0 && (s = .001);
            var a = t(i);
            return !n || Math.abs(a - i) < s || a - i < 0 == n < 0 ? a : t(n < 0 ? i - e : i + e)
        }
    },
    Ug = function(e) {
        return function(t, r) {
            return uu(Nh(e))(t, r.direction)
        }
    },
    cs = function(e, t, r, i) {
        return r.split(",").forEach(function(n) {
            return e(t, n, i)
        })
    },
    vt = function(e, t, r, i, n) {
        return e.addEventListener(t, r, {
            passive: !i,
            capture: !!n
        })
    },
    yt = function(e, t, r, i) {
        return e.removeEventListener(t, r, !!i)
    },
    fs = function(e, t, r) {
        r = r && r.wheelHandler, r && (e(t, "wheel", r), e(t, "touchmove", r))
    },
    gc = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    },
    hs = {
        toggleActions: "play",
        anticipatePin: 0
    },
    Js = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    },
    Cs = function(e, t) {
        if (ar(e)) {
            var r = e.indexOf("="),
                i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (i *= t / 100), e = e.substr(0, r - 1)), e = i + (e in Js ? Js[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    },
    ds = function(e, t, r, i, n, s, a, c) {
        var l = n.startColor,
            f = n.endColor,
            h = n.fontSize,
            d = n.indent,
            u = n.fontWeight,
            g = Ke.createElement("div"),
            p = sn(r) || Ti(r, "pinType") === "fixed",
            _ = e.indexOf("scroller") !== -1,
            b = p ? Ye : r,
            m = e.indexOf("start") !== -1,
            w = m ? l : f,
            v = "border-color:" + w + ";font-size:" + h + ";color:" + w + ";font-weight:" + u + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return v += "position:" + ((_ || c) && p ? "fixed;" : "absolute;"), (_ || c || !p) && (v += (i === gt ? su : au) + ":" + (s + parseFloat(d)) + "px;"), a && (v += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), g._isStart = m, g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), g.style.cssText = v, g.innerText = t || t === 0 ? e + "-" + t : e, b.children[0] ? b.insertBefore(g, b.children[0]) : b.appendChild(g), g._offset = g["offset" + i.op.d2], Os(g, 0, i, m), g
    },
    Os = function(e, t, r, i) {
        var n = {
                display: "block"
            },
            s = r[i ? "os2" : "p2"],
            a = r[i ? "p2" : "os2"];
        e._isFlipped = i, n[r.a + "Percent"] = i ? -100 : 0, n[r.a] = i ? "1px" : 0, n["border" + s + Vn] = 1, n["border" + a + Vn] = 0, n[r.p] = t + "px", J.set(e, n)
    },
    be = [],
    wl = {},
    Wo, _c = function() {
        return Lt() - Cr > 34 && (Wo || (Wo = requestAnimationFrame(ii)))
    },
    gn = function() {
        (!Vt || !Vt.isPressed || Vt.startX > Ye.clientWidth) && (Te.cache++, Vt ? Wo || (Wo = requestAnimationFrame(ii)) : ii(), Cr || ln("scrollStart"), Cr = Lt())
    },
    Aa = function() {
        Eh = xe.innerWidth, Mh = xe.innerHeight
    },
    uo = function(e) {
        Te.cache++, (e === !0 || !At && !Ph && !Ke.fullscreenElement && !Ke.webkitFullscreenElement && (!ml || Eh !== xe.innerWidth || Math.abs(xe.innerHeight - Mh) > xe.innerHeight * .25)) && Qs.restart(!0)
    },
    an = {},
    Kg = [],
    Fh = function o() {
        return yt(ve, "scrollEnd", o) || Wi(!0)
    },
    ln = function(e) {
        return an[e] && an[e].map(function(t) {
            return t()
        }) || Kg
    },
    sr = [],
    Ih = function(e) {
        for (var t = 0; t < sr.length; t += 5)(!e || sr[t + 4] && sr[t + 4].query === e) && (sr[t].style.cssText = sr[t + 1], sr[t].getBBox && sr[t].setAttribute("transform", sr[t + 2] || ""), sr[t + 3].uncache = 1)
    },
    $h = function() {
        return Te.forEach(function(e) {
            return Nt(e) && ++e.cacheID && (e.rec = e())
        })
    },
    cu = function(e, t) {
        var r;
        for (qt = 0; qt < be.length; qt++) r = be[qt], r && (!t || r._ctx === t) && (e ? r.kill(1) : r.revert(!0, !0));
        ko = !0, t && Ih(t), t || ln("revert")
    },
    Bh = function(e, t) {
        Te.cache++, (t || !Wt) && Te.forEach(function(r) {
            return Nt(r) && r.cacheID++ && (r.rec = 0)
        }), ar(e) && (xe.history.scrollRestoration = nu = e)
    },
    Wt, tn = 0,
    mc, Qg = function() {
        if (mc !== tn) {
            var e = mc = tn;
            requestAnimationFrame(function() {
                return e === tn && Wi(!0)
            })
        }
    },
    zh = function() {
        Ye.appendChild(Ln), ou = !Vt && Ln.offsetHeight || xe.innerHeight, Ye.removeChild(Ln)
    },
    yc = function(e) {
        return qo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
            return t.style.display = e ? "none" : "block"
        })
    },
    Wi = function(e, t) {
        if (ur = Ke.documentElement, Ye = Ke.body, iu = [xe, Ke, ur, Ye], Cr && !e && !ko) {
            vt(ve, "scrollEnd", Fh);
            return
        }
        zh(), Wt = ve.isRefreshing = !0, ko || $h();
        var r = ln("refreshInit");
        Sh && ve.sort(), t || cu(), Te.forEach(function(i) {
            Nt(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0))
        }), be.slice(0).forEach(function(i) {
            return i.refresh()
        }), ko = !1, be.forEach(function(i) {
            if (i._subPinOffset && i.pin) {
                var n = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
                    s = i.pin[n];
                i.revert(!0, 1), i.adjustPinSpacing(i.pin[n] - s), i.refresh()
            }
        }), vl = 1, yc(!0), be.forEach(function(i) {
            var n = Xr(i.scroller, i._dir),
                s = i.vars.end === "max" || i._endClamp && i.end > n,
                a = i._startClamp && i.start >= n;
            (s || a) && i.setPositions(a ? n - 1 : i.start, s ? Math.max(a ? n : i.start + 1, n) : i.end, !0)
        }), yc(!1), vl = 0, r.forEach(function(i) {
            return i && i.render && i.render(-1)
        }), Te.forEach(function(i) {
            Nt(i) && (i.smooth && requestAnimationFrame(function() {
                return i.target.style.scrollBehavior = "smooth"
            }), i.rec && i(i.rec))
        }), Bh(nu, 1), Qs.pause(), tn++, Wt = 2, ii(2), be.forEach(function(i) {
            return Nt(i.vars.onRefresh) && i.vars.onRefresh(i)
        }), Wt = ve.isRefreshing = !1, ln("refresh")
    },
    bl = 0,
    Ds = 1,
    Co, ii = function(e) {
        if (e === 2 || !Wt && !ko) {
            ve.isUpdating = !0, Co && Co.update(0);
            var t = be.length,
                r = Lt(),
                i = r - Oa >= 50,
                n = t && be[0].scroll();
            if (Ds = bl > n ? -1 : 1, Wt || (bl = n), i && (Cr && !ua && r - Cr > 200 && (Cr = 0, ln("scrollEnd")), oo = Oa, Oa = r), Ds < 0) {
                for (qt = t; qt-- > 0;) be[qt] && be[qt].update(0, i);
                Ds = 1
            } else
                for (qt = 0; qt < t; qt++) be[qt] && be[qt].update(0, i);
            ve.isUpdating = !1
        }
        Wo = 0
    },
    xl = [Lh, Rh, au, su, Sr + Eo, Sr + So, Sr + Mo, Sr + Po, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    As = xl.concat([Ji, en, "boxSizing", "max" + Vn, "max" + lu, "position", Sr, ut, ut + Mo, ut + So, ut + Eo, ut + Po]),
    Zg = function(e, t, r) {
        Rn(r);
        var i = e._gsap;
        if (i.spacerIsNative) Rn(i.spacerState);
        else if (e._gsap.swappedIn) {
            var n = t.parentNode;
            n && (n.insertBefore(e, t), n.removeChild(t))
        }
        e._gsap.swappedIn = !1
    },
    La = function(e, t, r, i) {
        if (!e._gsap.swappedIn) {
            for (var n = xl.length, s = t.style, a = e.style, c; n--;) c = xl[n], s[c] = r[c];
            s.position = r.position === "absolute" ? "absolute" : "relative", r.display === "inline" && (s.display = "inline-block"), a[au] = a[su] = "auto", s.flexBasis = r.flexBasis || "auto", s.overflow = "visible", s.boxSizing = "border-box", s[Ji] = Zs(e, Gt) + ht, s[en] = Zs(e, gt) + ht, s[ut] = a[Sr] = a[Rh] = a[Lh] = "0", Rn(i), a[Ji] = a["max" + Vn] = r[Ji], a[en] = a["max" + lu] = r[en], a[ut] = r[ut], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
        }
    },
    Jg = /([A-Z])/g,
    Rn = function(e) {
        if (e) {
            var t = e.t.style,
                r = e.length,
                i = 0,
                n, s;
            for ((e.t._gsap || J.core.getCache(e.t)).uncache = 1; i < r; i += 2) s = e[i + 1], n = e[i], s ? t[n] = s : t[n] && t.removeProperty(n.replace(Jg, "-$1").toLowerCase())
        }
    },
    ps = function(e) {
        for (var t = As.length, r = e.style, i = [], n = 0; n < t; n++) i.push(As[n], r[As[n]]);
        return i.t = e, i
    },
    e0 = function(e, t, r) {
        for (var i = [], n = e.length, s = r ? 8 : 0, a; s < n; s += 2) a = e[s], i.push(a, a in t ? t[a] : e[s + 1]);
        return i.t = e.t, i
    },
    Ls = {
        left: 0,
        top: 0
    },
    vc = function(e, t, r, i, n, s, a, c, l, f, h, d, u, g) {
        Nt(e) && (e = e(c)), ar(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? Cs("0" + e.substr(3), r) : 0));
        var p = u ? u.time() : 0,
            _, b, m;
        if (u && u.seek(0), isNaN(e) || (e = +e), lo(e)) u && (e = J.utils.mapRange(u.scrollTrigger.start, u.scrollTrigger.end, 0, d, e)), a && Os(a, r, i, !0);
        else {
            Nt(t) && (t = t(c));
            var w = (e || "0").split(" "),
                v, y, x, T;
            m = Kt(t, c) || Ye, v = Zr(m) || {}, (!v || !v.left && !v.top) && Pr(m).display === "none" && (T = m.style.display, m.style.display = "block", v = Zr(m), T ? m.style.display = T : m.style.removeProperty("display")), y = Cs(w[0], v[i.d]), x = Cs(w[1] || "0", r), e = v[i.p] - l[i.p] - f + y + n - x, a && Os(a, x, i, r - x < 20 || a._isStart && x > 20), r -= r - x
        }
        if (g && (c[g] = e || -.001, e < 0 && (e = 0)), s) {
            var k = e + r,
                O = s._isStart;
            _ = "scroll" + i.d2, Os(s, k, i, O && k > 20 || !O && (h ? Math.max(Ye[_], ur[_]) : s.parentNode[_]) <= k + 1), h && (l = Zr(a), h && (s.style[i.op.p] = l[i.op.p] - i.op.m - s._offset + ht))
        }
        return u && m && (_ = Zr(m), u.seek(d), b = Zr(m), u._caScrollDist = _[i.p] - b[i.p], e = e / u._caScrollDist * d), u && u.seek(p), u ? e : Math.round(e)
    },
    t0 = /(webkit|moz|length|cssText|inset)/i,
    wc = function(e, t, r, i) {
        if (e.parentNode !== t) {
            var n = e.style,
                s, a;
            if (t === Ye) {
                e._stOrig = n.cssText, a = Pr(e);
                for (s in a) !+s && !t0.test(s) && a[s] && typeof n[s] == "string" && s !== "0" && (n[s] = a[s]);
                n.top = r, n.left = i
            } else n.cssText = e._stOrig;
            J.core.getCache(e).uncache = 1, t.appendChild(e)
        }
    },
    Yh = function(e, t, r) {
        var i = t,
            n = i;
        return function(s) {
            var a = Math.round(e());
            return a !== i && a !== n && Math.abs(a - i) > 3 && Math.abs(a - n) > 3 && (s = a, r && r()), n = i, i = Math.round(s), i
        }
    },
    gs = function(e, t, r) {
        var i = {};
        i[t.p] = "+=" + r, J.set(e, i)
    },
    bc = function(e, t) {
        var r = Ei(e, t),
            i = "_scroll" + t.p2,
            n = function s(a, c, l, f, h) {
                var d = s.tween,
                    u = c.onComplete,
                    g = {};
                l = l || r();
                var p = Yh(r, l, function() {
                    d.kill(), s.tween = 0
                });
                return h = f && h || 0, f = f || a - l, d && d.kill(), c[i] = a, c.inherit = !1, c.modifiers = g, g[i] = function() {
                    return p(l + f * d.ratio + h * d.ratio * d.ratio)
                }, c.onUpdate = function() {
                    Te.cache++, s.tween && ii()
                }, c.onComplete = function() {
                    s.tween = 0, u && u.call(d)
                }, d = s.tween = J.to(e, c), d
            };
        return e[i] = r, r.wheelHandler = function() {
            return n.tween && n.tween.kill() && (n.tween = 0)
        }, vt(e, "wheel", r.wheelHandler), ve.isTouch && vt(e, "touchmove", r.wheelHandler), n
    },
    ve = function() {
        function o(t, r) {
            yn || o.register(J) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), yl(this), this.init(t, r)
        }
        var e = o.prototype;
        return e.init = function(r, i) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !so) {
                this.update = this.refresh = this.kill = Ir;
                return
            }
            r = pc(ar(r) || lo(r) || r.nodeType ? {
                trigger: r
            } : r, hs);
            var n = r,
                s = n.onUpdate,
                a = n.toggleClass,
                c = n.id,
                l = n.onToggle,
                f = n.onRefresh,
                h = n.scrub,
                d = n.trigger,
                u = n.pin,
                g = n.pinSpacing,
                p = n.invalidateOnRefresh,
                _ = n.anticipatePin,
                b = n.onScrubComplete,
                m = n.onSnapComplete,
                w = n.once,
                v = n.snap,
                y = n.pinReparent,
                x = n.pinSpacer,
                T = n.containerAnimation,
                k = n.fastScrollEnd,
                O = n.preventOverlaps,
                L = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? Gt : gt,
                z = !h && h !== 0,
                P = Kt(r.scroller || xe),
                M = J.core.getCache(P),
                R = sn(P),
                V = ("pinType" in r ? r.pinType : Ti(P, "pinType") || R && "fixed") === "fixed",
                I = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
                Y = z && r.toggleActions.split(" "),
                K = "markers" in r ? r.markers : hs.markers,
                te = R ? 0 : parseFloat(Pr(P)["border" + L.p2 + Vn]) || 0,
                E = this,
                j = r.onRefreshInit && function() {
                    return r.onRefreshInit(E)
                },
                se = Wg(P, R, L),
                re = Hg(P, R),
                ie = 0,
                Re = 0,
                Ce = 0,
                Ie = Ei(P, L),
                we, Qe, Oe, qe, We, pe, ge, ne, _t, A, Ve, W, D, q, U, ue, fe, _e, Ne, ce, $e, De, me, ot, Z, vr, bt, mt, It, jt, xt, le, Et, Be, Pe, He, Ct, Q, S;
            if (E._startClamp = E._endClamp = !1, E._dir = L, _ *= 45, E.scroller = P, E.scroll = T ? T.time.bind(T) : Ie, qe = Ie(), E.vars = r, i = i || r.animation, "refreshPriority" in r && (Sh = 1, r.refreshPriority === -9999 && (Co = E)), M.tweenScroll = M.tweenScroll || {
                    top: bc(P, gt),
                    left: bc(P, Gt)
                }, E.tweenTo = we = M.tweenScroll[L.p], E.scrubDuration = function(F) {
                    Et = lo(F) && F, Et ? le ? le.duration(F) : le = J.to(i, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: Et,
                        paused: !0,
                        onComplete: function() {
                            return b && b(E)
                        }
                    }) : (le && le.progress(1).kill(), le = 0)
                }, i && (i.vars.lazy = !1, i._initted && !E.isReverted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), E.animation = i.pause(), i.scrollTrigger = E, E.scrubDuration(h), jt = 0, c || (c = i.vars.id)), v && ((!Bi(v) || v.push) && (v = {
                    snapTo: v
                }), "scrollBehavior" in Ye.style && J.set(R ? [Ye, ur] : P, {
                    scrollBehavior: "auto"
                }), Te.forEach(function(F) {
                    return Nt(F) && F.target === (R ? Ke.scrollingElement || ur : P) && (F.smooth = !1)
                }), Oe = Nt(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? jg(i) : v.snapTo === "labelsDirectional" ? Ug(i) : v.directional !== !1 ? function(F, H) {
                    return uu(v.snapTo)(F, Lt() - Re < 500 ? 0 : H.direction)
                } : J.utils.snap(v.snapTo), Be = v.duration || {
                    min: .1,
                    max: 2
                }, Be = Bi(Be) ? To(Be.min, Be.max) : To(Be, Be), Pe = J.delayedCall(v.delay || Et / 2 || .1, function() {
                    var F = Ie(),
                        H = Lt() - Re < 500,
                        B = we.tween;
                    if ((H || Math.abs(E.getVelocity()) < 10) && !B && !ua && ie !== F) {
                        var G = (F - pe) / q,
                            ae = i && !z ? i.totalProgress() : G,
                            ee = H ? 0 : (ae - xt) / (Lt() - oo) * 1e3 || 0,
                            de = J.utils.clamp(-G, 1 - G, pn(ee / 2) * ee / .185),
                            Ae = G + (v.inertia === !1 ? 0 : de),
                            Fe, ke, Se = v,
                            Xe = Se.onStart,
                            he = Se.onInterrupt,
                            Tt = Se.onComplete;
                        if (Fe = Oe(Ae, E), lo(Fe) || (Fe = Ae), ke = Math.max(0, Math.round(pe + Fe * q)), F <= ge && F >= pe && ke !== F) {
                            if (B && !B._initted && B.data <= pn(ke - F)) return;
                            v.inertia === !1 && (de = Fe - G), we(ke, {
                                duration: Be(pn(Math.max(pn(Ae - ae), pn(Fe - ae)) * .185 / ee / .05 || 0)),
                                ease: v.ease || "power3",
                                data: pn(ke - F),
                                onInterrupt: function() {
                                    return Pe.restart(!0) && he && he(E)
                                },
                                onComplete: function() {
                                    E.update(), ie = Ie(), i && !z && (le ? le.resetTo("totalProgress", Fe, i._tTime / i._tDur) : i.progress(Fe)), jt = xt = i && !z ? i.totalProgress() : E.progress, m && m(E), Tt && Tt(E)
                                }
                            }, F, de * q, ke - F - de * q), Xe && Xe(E, we.tween)
                        }
                    } else E.isActive && ie !== F && Pe.restart(!0)
                }).pause()), c && (wl[c] = E), d = E.trigger = Kt(d || u !== !0 && u), S = d && d._gsap && d._gsap.stRevert, S && (S = S(E)), u = u === !0 ? d : Kt(u), ar(a) && (a = {
                    targets: d,
                    className: a
                }), u && (g === !1 || g === Sr || (g = !g && u.parentNode && u.parentNode.style && Pr(u.parentNode).display === "flex" ? !1 : ut), E.pin = u, Qe = J.core.getCache(u), Qe.spacer ? U = Qe.pinState : (x && (x = Kt(x), x && !x.nodeType && (x = x.current || x.nativeElement), Qe.spacerIsNative = !!x, x && (Qe.spacerState = ps(x))), Qe.spacer = _e = x || Ke.createElement("div"), _e.classList.add("pin-spacer"), c && _e.classList.add("pin-spacer-" + c), Qe.pinState = U = ps(u)), r.force3D !== !1 && J.set(u, {
                    force3D: !0
                }), E.spacer = _e = Qe.spacer, It = Pr(u), ot = It[g + L.os2], ce = J.getProperty(u), $e = J.quickSetter(u, L.a, ht), La(u, _e, It), fe = ps(u)), K) {
                W = Bi(K) ? pc(K, gc) : gc, A = ds("scroller-start", c, P, L, W, 0), Ve = ds("scroller-end", c, P, L, W, 0, A), Ne = A["offset" + L.op.d2];
                var $ = Kt(Ti(P, "content") || P);
                ne = this.markerStart = ds("start", c, $, L, W, Ne, 0, T), _t = this.markerEnd = ds("end", c, $, L, W, Ne, 0, T), T && (Q = J.quickSetter([ne, _t], L.a, ht)), !V && !(qr.length && Ti(P, "fixedMarkers") === !0) && (Gg(R ? Ye : P), J.set([A, Ve], {
                    force3D: !0
                }), vr = J.quickSetter(A, L.a, ht), mt = J.quickSetter(Ve, L.a, ht))
            }
            if (T) {
                var C = T.vars.onUpdate,
                    N = T.vars.onUpdateParams;
                T.eventCallback("onUpdate", function() {
                    E.update(0, 0, 1), C && C.apply(T, N || [])
                })
            }
            if (E.previous = function() {
                    return be[be.indexOf(E) - 1]
                }, E.next = function() {
                    return be[be.indexOf(E) + 1]
                }, E.revert = function(F, H) {
                    if (!H) return E.kill(!0);
                    var B = F !== !1 || !E.enabled,
                        G = At;
                    B !== E.isReverted && (B && (He = Math.max(Ie(), E.scroll.rec || 0), Ce = E.progress, Ct = i && i.progress()), ne && [ne, _t, A, Ve].forEach(function(ae) {
                        return ae.style.display = B ? "none" : "block"
                    }), B && (At = E, E.update(B)), u && (!y || !E.isActive) && (B ? Zg(u, _e, U) : La(u, _e, Pr(u), Z)), B || E.update(B), At = G, E.isReverted = B)
                }, E.refresh = function(F, H, B, G) {
                    if (!((At || !E.enabled) && !H)) {
                        if (u && F && Cr) {
                            vt(o, "scrollEnd", Fh);
                            return
                        }!Wt && j && j(E), At = E, we.tween && !B && (we.tween.kill(), we.tween = 0), le && le.pause(), p && i && (i.revert({
                            kill: !1
                        }).invalidate(), i.getChildren ? i.getChildren(!0, !0, !1).forEach(function(ui) {
                            return ui.vars.immediateRender && ui.render(0, !0, !0)
                        }) : i.vars.immediateRender && i.render(0, !0, !0)), E.isReverted || E.revert(!0, !0), E._subPinOffset = !1;
                        var ae = se(),
                            ee = re(),
                            de = T ? T.duration() : Xr(P, L),
                            Ae = q <= .01 || !q,
                            Fe = 0,
                            ke = G || 0,
                            Se = Bi(B) ? B.end : r.end,
                            Xe = r.endTrigger || d,
                            he = Bi(B) ? B.start : r.start || (r.start === 0 || !d ? 0 : u ? "0 0" : "0 100%"),
                            Tt = E.pinnedContainer = r.pinnedContainer && Kt(r.pinnedContainer, E),
                            Ze = d && Math.max(0, be.indexOf(E)) || 0,
                            kt = Ze,
                            St, Ot, Oi, Qo, Dt, ft, Rr, fa, yu, qn, Nr, Wn, Zo;
                        for (K && Bi(B) && (Wn = J.getProperty(A, L.p), Zo = J.getProperty(Ve, L.p)); kt-- > 0;) ft = be[kt], ft.end || ft.refresh(0, 1) || (At = E), Rr = ft.pin, Rr && (Rr === d || Rr === u || Rr === Tt) && !ft.isReverted && (qn || (qn = []), qn.unshift(ft), ft.revert(!0, !0)), ft !== be[kt] && (Ze--, kt--);
                        for (Nt(he) && (he = he(E)), he = cc(he, "start", E), pe = vc(he, d, ae, L, Ie(), ne, A, E, ee, te, V, de, T, E._startClamp && "_startClamp") || (u ? -.001 : 0), Nt(Se) && (Se = Se(E)), ar(Se) && !Se.indexOf("+=") && (~Se.indexOf(" ") ? Se = (ar(he) ? he.split(" ")[0] : "") + Se : (Fe = Cs(Se.substr(2), ae), Se = ar(he) ? he : (T ? J.utils.mapRange(0, T.duration(), T.scrollTrigger.start, T.scrollTrigger.end, pe) : pe) + Fe, Xe = d)), Se = cc(Se, "end", E), ge = Math.max(pe, vc(Se || (Xe ? "100% 0" : de), Xe, ae, L, Ie() + Fe, _t, Ve, E, ee, te, V, de, T, E._endClamp && "_endClamp")) || -.001, Fe = 0, kt = Ze; kt--;) ft = be[kt] || {}, Rr = ft.pin, Rr && ft.start - ft._pinPush <= pe && !T && ft.end > 0 && (St = ft.end - (E._startClamp ? Math.max(0, ft.start) : ft.start), (Rr === d && ft.start - ft._pinPush < pe || Rr === Tt) && isNaN(he) && (Fe += St * (1 - ft.progress)), Rr === u && (ke += St));
                        if (pe += Fe, ge += Fe, E._startClamp && (E._startClamp += Fe), E._endClamp && !Wt && (E._endClamp = ge || -.001, ge = Math.min(ge, Xr(P, L))), q = ge - pe || (pe -= .01) && .001, Ae && (Ce = J.utils.clamp(0, 1, J.utils.normalize(pe, ge, He))), E._pinPush = ke, ne && Fe && (St = {}, St[L.a] = "+=" + Fe, Tt && (St[L.p] = "-=" + Ie()), J.set([ne, _t], St)), u && !(vl && E.end >= Xr(P, L))) St = Pr(u), Qo = L === gt, Oi = Ie(), De = parseFloat(ce(L.a)) + ke, !de && ge > 1 && (Nr = (R ? Ke.scrollingElement || ur : P).style, Nr = {
                            style: Nr,
                            value: Nr["overflow" + L.a.toUpperCase()]
                        }, R && Pr(Ye)["overflow" + L.a.toUpperCase()] !== "scroll" && (Nr.style["overflow" + L.a.toUpperCase()] = "scroll")), La(u, _e, St), fe = ps(u), Ot = Zr(u, !0), fa = V && Ei(P, Qo ? Gt : gt)(), g ? (Z = [g + L.os2, q + ke + ht], Z.t = _e, kt = g === ut ? Zs(u, L) + q + ke : 0, kt && (Z.push(L.d, kt + ht), _e.style.flexBasis !== "auto" && (_e.style.flexBasis = kt + ht)), Rn(Z), Tt && be.forEach(function(ui) {
                            ui.pin === Tt && ui.vars.pinSpacing !== !1 && (ui._subPinOffset = !0)
                        }), V && Ie(He)) : (kt = Zs(u, L), kt && _e.style.flexBasis !== "auto" && (_e.style.flexBasis = kt + ht)), V && (Dt = {
                            top: Ot.top + (Qo ? Oi - pe : fa) + ht,
                            left: Ot.left + (Qo ? fa : Oi - pe) + ht,
                            boxSizing: "border-box",
                            position: "fixed"
                        }, Dt[Ji] = Dt["max" + Vn] = Math.ceil(Ot.width) + ht, Dt[en] = Dt["max" + lu] = Math.ceil(Ot.height) + ht, Dt[Sr] = Dt[Sr + Mo] = Dt[Sr + So] = Dt[Sr + Eo] = Dt[Sr + Po] = "0", Dt[ut] = St[ut], Dt[ut + Mo] = St[ut + Mo], Dt[ut + So] = St[ut + So], Dt[ut + Eo] = St[ut + Eo], Dt[ut + Po] = St[ut + Po], ue = e0(U, Dt, y), Wt && Ie(0)), i ? (yu = i._initted, Ea(1), i.render(i.duration(), !0, !0), me = ce(L.a) - De + q + ke, bt = Math.abs(q - me) > 1, V && bt && ue.splice(ue.length - 2, 2), i.render(0, !0, !0), yu || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), Ea(0)) : me = q, Nr && (Nr.value ? Nr.style["overflow" + L.a.toUpperCase()] = Nr.value : Nr.style.removeProperty("overflow-" + L.a));
                        else if (d && Ie() && !T)
                            for (Ot = d.parentNode; Ot && Ot !== Ye;) Ot._pinOffset && (pe -= Ot._pinOffset, ge -= Ot._pinOffset), Ot = Ot.parentNode;
                        qn && qn.forEach(function(ui) {
                            return ui.revert(!1, !0)
                        }), E.start = pe, E.end = ge, qe = We = Wt ? He : Ie(), !T && !Wt && (qe < He && Ie(He), E.scroll.rec = 0), E.revert(!1, !0), Re = Lt(), Pe && (ie = -1, Pe.restart(!0)), At = 0, i && z && (i._initted || Ct) && i.progress() !== Ct && i.progress(Ct || 0, !0).render(i.time(), !0, !0), (Ae || Ce !== E.progress || T || p || i && !i._initted) && (i && !z && (i._initted || Ce || i.vars.immediateRender !== !1) && i.totalProgress(T && pe < -.001 && !Ce ? J.utils.normalize(pe, ge, 0) : Ce, !0), E.progress = Ae || (qe - pe) / q === Ce ? 0 : Ce), u && g && (_e._pinOffset = Math.round(E.progress * me)), le && le.invalidate(), isNaN(Wn) || (Wn -= J.getProperty(A, L.p), Zo -= J.getProperty(Ve, L.p), gs(A, L, Wn), gs(ne, L, Wn - (G || 0)), gs(Ve, L, Zo), gs(_t, L, Zo - (G || 0))), Ae && !Wt && E.update(), f && !Wt && !D && (D = !0, f(E), D = !1)
                    }
                }, E.getVelocity = function() {
                    return (Ie() - We) / (Lt() - oo) * 1e3 || 0
                }, E.endAnimation = function() {
                    Kn(E.callbackAnimation), i && (le ? le.progress(1) : i.paused() ? z || Kn(i, E.direction < 0, 1) : Kn(i, i.reversed()))
                }, E.labelToScroll = function(F) {
                    return i && i.labels && (pe || E.refresh() || pe) + i.labels[F] / i.duration() * q || 0
                }, E.getTrailing = function(F) {
                    var H = be.indexOf(E),
                        B = E.direction > 0 ? be.slice(0, H).reverse() : be.slice(H + 1);
                    return (ar(F) ? B.filter(function(G) {
                        return G.vars.preventOverlaps === F
                    }) : B).filter(function(G) {
                        return E.direction > 0 ? G.end <= pe : G.start >= ge
                    })
                }, E.update = function(F, H, B) {
                    if (!(T && !B && !F)) {
                        var G = Wt === !0 ? He : E.scroll(),
                            ae = F ? 0 : (G - pe) / q,
                            ee = ae < 0 ? 0 : ae > 1 ? 1 : ae || 0,
                            de = E.progress,
                            Ae, Fe, ke, Se, Xe, he, Tt, Ze;
                        if (H && (We = qe, qe = T ? Ie() : G, v && (xt = jt, jt = i && !z ? i.totalProgress() : ee)), _ && u && !At && !ls && Cr && (!ee && pe < G + (G - We) / (Lt() - oo) * _ ? ee = 1e-4 : ee === 1 && ge > G + (G - We) / (Lt() - oo) * _ && (ee = .9999)), ee !== de && E.enabled) {
                            if (Ae = E.isActive = !!ee && ee < 1, Fe = !!de && de < 1, he = Ae !== Fe, Xe = he || !!ee != !!de, E.direction = ee > de ? 1 : -1, E.progress = ee, Xe && !At && (ke = ee && !de ? 0 : ee === 1 ? 1 : de === 1 ? 2 : 3, z && (Se = !he && Y[ke + 1] !== "none" && Y[ke + 1] || Y[ke], Ze = i && (Se === "complete" || Se === "reset" || Se in i))), O && (he || Ze) && (Ze || h || !i) && (Nt(O) ? O(E) : E.getTrailing(O).forEach(function(Oi) {
                                    return Oi.endAnimation()
                                })), z || (le && !At && !ls ? (le._dp._time - le._start !== le._time && le.render(le._dp._time - le._start), le.resetTo ? le.resetTo("totalProgress", ee, i._tTime / i._tDur) : (le.vars.totalProgress = ee, le.invalidate().restart())) : i && i.totalProgress(ee, !!(At && (Re || F)))), u) {
                                if (F && g && (_e.style[g + L.os2] = ot), !V) $e(ao(De + me * ee));
                                else if (Xe) {
                                    if (Tt = !F && ee > de && ge + 1 > G && G + 1 >= Xr(P, L), y)
                                        if (!F && (Ae || Tt)) {
                                            var kt = Zr(u, !0),
                                                St = G - pe;
                                            wc(u, Ye, kt.top + (L === gt ? St : 0) + ht, kt.left + (L === gt ? 0 : St) + ht)
                                        } else wc(u, _e);
                                    Rn(Ae || Tt ? ue : fe), bt && ee < 1 && Ae || $e(De + (ee === 1 && !Tt ? me : 0))
                                }
                            }
                            v && !we.tween && !At && !ls && Pe.restart(!0), a && (he || w && ee && (ee < 1 || !Ca)) && qo(a.targets).forEach(function(Oi) {
                                return Oi.classList[Ae || w ? "add" : "remove"](a.className)
                            }), s && !z && !F && s(E), Xe && !At ? (z && (Ze && (Se === "complete" ? i.pause().totalProgress(1) : Se === "reset" ? i.restart(!0).pause() : Se === "restart" ? i.restart(!0) : i[Se]()), s && s(E)), (he || !Ca) && (l && he && Da(E, l), I[ke] && Da(E, I[ke]), w && (ee === 1 ? E.kill(!1, 1) : I[ke] = 0), he || (ke = ee === 1 ? 1 : 3, I[ke] && Da(E, I[ke]))), k && !Ae && Math.abs(E.getVelocity()) > (lo(k) ? k : 2500) && (Kn(E.callbackAnimation), le ? le.progress(1) : Kn(i, Se === "reverse" ? 1 : !ee, 1))) : z && s && !At && s(E)
                        }
                        if (mt) {
                            var Ot = T ? G / T.duration() * (T._caScrollDist || 0) : G;
                            vr(Ot + (A._isFlipped ? 1 : 0)), mt(Ot)
                        }
                        Q && Q(-G / T.duration() * (T._caScrollDist || 0))
                    }
                }, E.enable = function(F, H) {
                    E.enabled || (E.enabled = !0, vt(P, "resize", uo), R || vt(P, "scroll", gn), j && vt(o, "refreshInit", j), F !== !1 && (E.progress = Ce = 0, qe = We = ie = Ie()), H !== !1 && E.refresh())
                }, E.getTween = function(F) {
                    return F && we ? we.tween : le
                }, E.setPositions = function(F, H, B, G) {
                    if (T) {
                        var ae = T.scrollTrigger,
                            ee = T.duration(),
                            de = ae.end - ae.start;
                        F = ae.start + de * F / ee, H = ae.start + de * H / ee
                    }
                    E.refresh(!1, !1, {
                        start: fc(F, B && !!E._startClamp),
                        end: fc(H, B && !!E._endClamp)
                    }, G), E.update()
                }, E.adjustPinSpacing = function(F) {
                    if (Z && F) {
                        var H = Z.indexOf(L.d) + 1;
                        Z[H] = parseFloat(Z[H]) + F + ht, Z[1] = parseFloat(Z[1]) + F + ht, Rn(Z)
                    }
                }, E.disable = function(F, H) {
                    if (F !== !1 && E.revert(!0, !0), E.enabled && (E.enabled = E.isActive = !1, H || le && le.pause(), He = 0, Qe && (Qe.uncache = 1), j && yt(o, "refreshInit", j), Pe && (Pe.pause(), we.tween && we.tween.kill() && (we.tween = 0)), !R)) {
                        for (var B = be.length; B--;)
                            if (be[B].scroller === P && be[B] !== E) return;
                        yt(P, "resize", uo), R || yt(P, "scroll", gn)
                    }
                }, E.kill = function(F, H) {
                    E.disable(F, H), le && !H && le.kill(), c && delete wl[c];
                    var B = be.indexOf(E);
                    B >= 0 && be.splice(B, 1), B === qt && Ds > 0 && qt--, B = 0, be.forEach(function(G) {
                        return G.scroller === E.scroller && (B = 1)
                    }), B || Wt || (E.scroll.rec = 0), i && (i.scrollTrigger = null, F && i.revert({
                        kill: !1
                    }), H || i.kill()), ne && [ne, _t, A, Ve].forEach(function(G) {
                        return G.parentNode && G.parentNode.removeChild(G)
                    }), Co === E && (Co = 0), u && (Qe && (Qe.uncache = 1), B = 0, be.forEach(function(G) {
                        return G.pin === u && B++
                    }), B || (Qe.spacer = 0)), r.onKill && r.onKill(E)
                }, be.push(E), E.enable(!1, !1), S && S(E), i && i.add && !q) {
                var X = E.update;
                E.update = function() {
                    E.update = X, Te.cache++, pe || ge || E.refresh()
                }, J.delayedCall(.01, E.update), q = .01, pe = ge = 0
            } else E.refresh();
            u && Qg()
        }, o.register = function(r) {
            return yn || (J = r || Oh(), Ch() && window.document && o.enable(), yn = so), yn
        }, o.defaults = function(r) {
            if (r)
                for (var i in r) hs[i] = r[i];
            return hs
        }, o.disable = function(r, i) {
            so = 0, be.forEach(function(s) {
                return s[i ? "kill" : "disable"](r)
            }), yt(xe, "wheel", gn), yt(Ke, "scroll", gn), clearInterval(as), yt(Ke, "touchcancel", Ir), yt(Ye, "touchstart", Ir), cs(yt, Ke, "pointerdown,touchstart,mousedown", hc), cs(yt, Ke, "pointerup,touchend,mouseup", dc), Qs.kill(), us(yt);
            for (var n = 0; n < Te.length; n += 3) fs(yt, Te[n], Te[n + 1]), fs(yt, Te[n], Te[n + 2])
        }, o.enable = function() {
            if (xe = window, Ke = document, ur = Ke.documentElement, Ye = Ke.body, J && (qo = J.utils.toArray, To = J.utils.clamp, yl = J.core.context || Ir, Ea = J.core.suppressOverwrites || Ir, nu = xe.history.scrollRestoration || "auto", bl = xe.pageYOffset || 0, J.core.globals("ScrollTrigger", o), Ye)) {
                so = 1, Ln = document.createElement("div"), Ln.style.height = "100vh", Ln.style.position = "absolute", zh(), qg(), it.register(J), o.isTouch = it.isTouch, hi = it.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ml = it.isTouch === 1, vt(xe, "wheel", gn), iu = [xe, Ke, ur, Ye], J.matchMedia ? (o.matchMedia = function(l) {
                    var f = J.matchMedia(),
                        h;
                    for (h in l) f.add(h, l[h]);
                    return f
                }, J.addEventListener("matchMediaInit", function() {
                    $h(), cu()
                }), J.addEventListener("matchMediaRevert", function() {
                    return Ih()
                }), J.addEventListener("matchMedia", function() {
                    Wi(0, 1), ln("matchMedia")
                }), J.matchMedia().add("(orientation: portrait)", function() {
                    return Aa(), Aa
                })) : console.warn("Requires GSAP 3.11.0 or later"), Aa(), vt(Ke, "scroll", gn);
                var r = Ye.hasAttribute("style"),
                    i = Ye.style,
                    n = i.borderTopStyle,
                    s = J.core.Animation.prototype,
                    a, c;
                for (s.revert || Object.defineProperty(s, "revert", {
                        value: function() {
                            return this.time(-.01, !0)
                        }
                    }), i.borderTopStyle = "solid", a = Zr(Ye), gt.m = Math.round(a.top + gt.sc()) || 0, Gt.m = Math.round(a.left + Gt.sc()) || 0, n ? i.borderTopStyle = n : i.removeProperty("border-top-style"), r || (Ye.setAttribute("style", ""), Ye.removeAttribute("style")), as = setInterval(_c, 250), J.delayedCall(.5, function() {
                        return ls = 0
                    }), vt(Ke, "touchcancel", Ir), vt(Ye, "touchstart", Ir), cs(vt, Ke, "pointerdown,touchstart,mousedown", hc), cs(vt, Ke, "pointerup,touchend,mouseup", dc), _l = J.utils.checkPrefix("transform"), As.push(_l), yn = Lt(), Qs = J.delayedCall(.2, Wi).pause(), vn = [Ke, "visibilitychange", function() {
                        var l = xe.innerWidth,
                            f = xe.innerHeight;
                        Ke.hidden ? (lc = l, uc = f) : (lc !== l || uc !== f) && uo()
                    }, Ke, "DOMContentLoaded", Wi, xe, "load", Wi, xe, "resize", uo], us(vt), be.forEach(function(l) {
                        return l.enable(0, 1)
                    }), c = 0; c < Te.length; c += 3) fs(yt, Te[c], Te[c + 1]), fs(yt, Te[c], Te[c + 2])
            }
        }, o.config = function(r) {
            "limitCallbacks" in r && (Ca = !!r.limitCallbacks);
            var i = r.syncInterval;
            i && clearInterval(as) || (as = i) && setInterval(_c, i), "ignoreMobileResize" in r && (ml = o.isTouch === 1 && r.ignoreMobileResize), "autoRefreshEvents" in r && (us(yt) || us(vt, r.autoRefreshEvents || "none"), Ph = (r.autoRefreshEvents + "").indexOf("resize") === -1)
        }, o.scrollerProxy = function(r, i) {
            var n = Kt(r),
                s = Te.indexOf(n),
                a = sn(n);
            ~s && Te.splice(s, a ? 6 : 2), i && (a ? qr.unshift(xe, i, Ye, i, ur, i) : qr.unshift(n, i))
        }, o.clearMatchMedia = function(r) {
            be.forEach(function(i) {
                return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0)
            })
        }, o.isInViewport = function(r, i, n) {
            var s = (ar(r) ? Kt(r) : r).getBoundingClientRect(),
                a = s[n ? Ji : en] * i || 0;
            return n ? s.right - a > 0 && s.left + a < xe.innerWidth : s.bottom - a > 0 && s.top + a < xe.innerHeight
        }, o.positionInViewport = function(r, i, n) {
            ar(r) && (r = Kt(r));
            var s = r.getBoundingClientRect(),
                a = s[n ? Ji : en],
                c = i == null ? a / 2 : i in Js ? Js[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
            return n ? (s.left + c) / xe.innerWidth : (s.top + c) / xe.innerHeight
        }, o.killAll = function(r) {
            if (be.slice(0).forEach(function(n) {
                    return n.vars.id !== "ScrollSmoother" && n.kill()
                }), r !== !0) {
                var i = an.killAll || [];
                an = {}, i.forEach(function(n) {
                    return n()
                })
            }
        }, o
    }();
ve.version = "3.14.2";
ve.saveStyles = function(o) {
    return o ? qo(o).forEach(function(e) {
        if (e && e.style) {
            var t = sr.indexOf(e);
            t >= 0 && sr.splice(t, 5), sr.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), J.core.getCache(e), yl())
        }
    }) : sr
};
ve.revert = function(o, e) {
    return cu(!o, e)
};
ve.create = function(o, e) {
    return new ve(o, e)
};
ve.refresh = function(o) {
    return o ? uo(!0) : (yn || ve.register()) && Wi(!0)
};
ve.update = function(o) {
    return ++Te.cache && ii(o === !0 ? 2 : 0)
};
ve.clearScrollMemory = Bh;
ve.maxScroll = function(o, e) {
    return Xr(o, e ? Gt : gt)
};
ve.getScrollFunc = function(o, e) {
    return Ei(Kt(o), e ? Gt : gt)
};
ve.getById = function(o) {
    return wl[o]
};
ve.getAll = function() {
    return be.filter(function(o) {
        return o.vars.id !== "ScrollSmoother"
    })
};
ve.isScrolling = function() {
    return !!Cr
};
ve.snapDirectional = uu;
ve.addEventListener = function(o, e) {
    var t = an[o] || (an[o] = []);
    ~t.indexOf(e) || t.push(e)
};
ve.removeEventListener = function(o, e) {
    var t = an[o],
        r = t && t.indexOf(e);
    r >= 0 && t.splice(r, 1)
};
ve.batch = function(o, e) {
    var t = [],
        r = {},
        i = e.interval || .016,
        n = e.batchMax || 1e9,
        s = function(l, f) {
            var h = [],
                d = [],
                u = J.delayedCall(i, function() {
                    f(h, d), h = [], d = []
                }).pause();
            return function(g) {
                h.length || u.restart(!0), h.push(g.trigger), d.push(g), n <= h.length && u.progress(1)
            }
        },
        a;
    for (a in e) r[a] = a.substr(0, 2) === "on" && Nt(e[a]) && a !== "onRefreshInit" ? s(a, e[a]) : e[a];
    return Nt(n) && (n = n(), vt(ve, "refresh", function() {
        return n = e.batchMax()
    })), qo(o).forEach(function(c) {
        var l = {};
        for (a in r) l[a] = r[a];
        l.trigger = c, t.push(ve.create(l))
    }), t
};
var xc = function(e, t, r, i) {
        return t > i ? e(i) : t < 0 && e(0), r > i ? (i - t) / (r - t) : r < 0 ? t / (t - r) : 1
    },
    Ra = function o(e, t) {
        t === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = t === !0 ? "auto" : t ? "pan-" + t + (it.isTouch ? " pinch-zoom" : "") : "none", e === ur && o(Ye, t)
    },
    _s = {
        auto: 1,
        scroll: 1
    },
    r0 = function(e) {
        var t = e.event,
            r = e.target,
            i = e.axis,
            n = (t.changedTouches ? t.changedTouches[0] : t).target,
            s = n._gsap || J.core.getCache(n),
            a = Lt(),
            c;
        if (!s._isScrollT || a - s._isScrollT > 2e3) {
            for (; n && n !== Ye && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(_s[(c = Pr(n)).overflowY] || _s[c.overflowX]));) n = n.parentNode;
            s._isScroll = n && n !== r && !sn(n) && (_s[(c = Pr(n)).overflowY] || _s[c.overflowX]), s._isScrollT = a
        }(s._isScroll || i === "x") && (t.stopPropagation(), t._gsapAllow = !0)
    },
    Xh = function(e, t, r, i) {
        return it.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: i = i && r0,
            onPress: i,
            onDrag: i,
            onScroll: i,
            onEnable: function() {
                return r && vt(Ke, it.eventTypes[0], kc, !1, !0)
            },
            onDisable: function() {
                return yt(Ke, it.eventTypes[0], kc, !0)
            }
        })
    },
    i0 = /(input|label|select|textarea)/i,
    Tc, kc = function(e) {
        var t = i0.test(e.target.tagName);
        (t || Tc) && (e._gsapAllow = !0, Tc = t)
    },
    n0 = function(e) {
        Bi(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        var t = e,
            r = t.normalizeScrollX,
            i = t.momentum,
            n = t.allowNestedScroll,
            s = t.onRelease,
            a, c, l = Kt(e.target) || ur,
            f = J.core.globals().ScrollSmoother,
            h = f && f.get(),
            d = hi && (e.content && Kt(e.content) || h && e.content !== !1 && !h.smooth() && h.content()),
            u = Ei(l, gt),
            g = Ei(l, Gt),
            p = 1,
            _ = (it.isTouch && xe.visualViewport ? xe.visualViewport.scale * xe.visualViewport.width : xe.outerWidth) / xe.innerWidth,
            b = 0,
            m = Nt(i) ? function() {
                return i(a)
            } : function() {
                return i || 2.8
            },
            w, v, y = Xh(l, e.type, !0, n),
            x = function() {
                return v = !1
            },
            T = Ir,
            k = Ir,
            O = function() {
                c = Xr(l, gt), k = To(hi ? 1 : 0, c), r && (T = To(0, Xr(l, Gt))), w = tn
            },
            L = function() {
                d._gsap.y = ao(parseFloat(d._gsap.y) + u.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", u.offset = u.cacheID = 0
            },
            z = function() {
                if (v) {
                    requestAnimationFrame(x);
                    var K = ao(a.deltaY / 2),
                        te = k(u.v - K);
                    if (d && te !== u.v + u.offset) {
                        u.offset = te - u.v;
                        var E = ao((parseFloat(d && d._gsap.y) || 0) - u.offset);
                        d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + E + ", 0, 1)", d._gsap.y = E + "px", u.cacheID = Te.cache, ii()
                    }
                    return !0
                }
                u.offset && L(), v = !0
            },
            P, M, R, V, I = function() {
                O(), P.isActive() && P.vars.scrollY > c && (u() > c ? P.progress(1) && u(c) : P.resetTo("scrollY", c))
            };
        return d && J.set(d, {
            y: "+=0"
        }), e.ignoreCheck = function(Y) {
            return hi && Y.type === "touchmove" && z() || p > 1.05 && Y.type !== "touchstart" || a.isGesturing || Y.touches && Y.touches.length > 1
        }, e.onPress = function() {
            v = !1;
            var Y = p;
            p = ao((xe.visualViewport && xe.visualViewport.scale || 1) / _), P.pause(), Y !== p && Ra(l, p > 1.01 ? !0 : r ? !1 : "x"), M = g(), R = u(), O(), w = tn
        }, e.onRelease = e.onGestureStart = function(Y, K) {
            if (u.offset && L(), !K) V.restart(!0);
            else {
                Te.cache++;
                var te = m(),
                    E, j;
                r && (E = g(), j = E + te * .05 * -Y.velocityX / .227, te *= xc(g, E, j, Xr(l, Gt)), P.vars.scrollX = T(j)), E = u(), j = E + te * .05 * -Y.velocityY / .227, te *= xc(u, E, j, Xr(l, gt)), P.vars.scrollY = k(j), P.invalidate().duration(te).play(.01), (hi && P.vars.scrollY >= c || E >= c - 1) && J.to({}, {
                    onUpdate: I,
                    duration: te
                })
            }
            s && s(Y)
        }, e.onWheel = function() {
            P._ts && P.pause(), Lt() - b > 1e3 && (w = 0, b = Lt())
        }, e.onChange = function(Y, K, te, E, j) {
            if (tn !== w && O(), K && r && g(T(E[2] === K ? M + (Y.startX - Y.x) : g() + K - E[1])), te) {
                u.offset && L();
                var se = j[2] === te,
                    re = se ? R + Y.startY - Y.y : u() + te - j[1],
                    ie = k(re);
                se && re !== ie && (R += ie - re), u(ie)
            }(te || K) && ii()
        }, e.onEnable = function() {
            Ra(l, r ? !1 : "x"), ve.addEventListener("refresh", I), vt(xe, "resize", I), u.smooth && (u.target.style.scrollBehavior = "auto", u.smooth = g.smooth = !1), y.enable()
        }, e.onDisable = function() {
            Ra(l, !0), yt(xe, "resize", I), ve.removeEventListener("refresh", I), y.kill()
        }, e.lockAxis = e.lockAxis !== !1, a = new it(e), a.iOS = hi, hi && !u() && u(1), hi && J.ticker.add(Ir), V = a._dc, P = J.to(a, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: r ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: Yh(u, u(), function() {
                    return P.pause()
                })
            },
            onUpdate: ii,
            onComplete: V.vars.onComplete
        }), a
    };
ve.sort = function(o) {
    if (Nt(o)) return be.sort(o);
    var e = xe.pageYOffset || 0;
    return ve.getAll().forEach(function(t) {
        return t._sortY = t.trigger ? e + t.trigger.getBoundingClientRect().top : t.start + xe.innerHeight
    }), be.sort(o || function(t, r) {
        return (t.vars.refreshPriority || 0) * -1e6 + (t.vars.containerAnimation ? 1e6 : t._sortY) - ((r.vars.containerAnimation ? 1e6 : r._sortY) + (r.vars.refreshPriority || 0) * -1e6)
    })
};
ve.observe = function(o) {
    return new it(o)
};
ve.normalizeScroll = function(o) {
    if (typeof o > "u") return Vt;
    if (o === !0 && Vt) return Vt.enable();
    if (o === !1) {
        Vt && Vt.kill(), Vt = o;
        return
    }
    var e = o instanceof it ? o : n0(o);
    return Vt && Vt.target === e.target && Vt.kill(), sn(e.target) && (Vt = e), e
};
ve.core = {
    _getVelocityProp: gl,
    _inputObserver: Xh,
    _scrollers: Te,
    _proxies: qr,
    bridge: {
        ss: function() {
            Cr || ln("scrollStart"), Cr = Lt()
        },
        ref: function() {
            return At
        }
    }
};
Oh() && J.registerPlugin(ve);
/*!
 * DrawSVGPlugin 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var Vr, fu, ea, Vh, qh, Sc, Tl, Wh, Hh = function() {
        return typeof window < "u"
    },
    Gh = function() {
        return Vr || Hh() && (Vr = window.gsap) && Vr.registerPlugin && Vr
    },
    o0 = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    Na = {
        rect: ["width", "height"],
        circle: ["r", "r"],
        ellipse: ["rx", "ry"],
        line: ["x2", "y2"]
    },
    Xi = function(e) {
        return Math.round(e * 1e4) / 1e4
    },
    ri = function(e) {
        return parseFloat(e) || 0
    },
    Pc = function(e, t) {
        var r = ri(e);
        return ~e.indexOf("%") ? r / 100 * t : r
    },
    ms = function(e, t) {
        return ri(e.getAttribute(t))
    },
    Rs = Math.sqrt,
    Mc = function(e, t, r, i, n, s) {
        return Rs(Math.pow((ri(r) - ri(e)) * n, 2) + Math.pow((ri(i) - ri(t)) * s, 2))
    },
    Ec = function(e) {
        return console.warn(e)
    },
    jh = function(e) {
        return e.getAttribute("vector-effect") === "non-scaling-stroke"
    },
    s0 = 1,
    a0 = function(e, t, r) {
        var i = e.indexOf(" "),
            n, s;
        return i < 0 ? (n = r !== void 0 ? r + "" : e, s = e) : (n = e.substr(0, i), s = e.substr(i + 1)), n = Pc(n, t), s = Pc(s, t), n > s ? [s, n] : [n, s]
    },
    Ns = function(e) {
        if (e = fu(e)[0], !e) return 0;
        var t = e.tagName.toLowerCase(),
            r = e.style,
            i = 1,
            n = 1,
            s, a, c, l, f, h, d;
        jh(e) && (n = e.getScreenCTM(), i = Rs(n.a * n.a + n.b * n.b), n = Rs(n.d * n.d + n.c * n.c));
        try {
            a = e.getBBox()
        } catch {
            Ec("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
        }
        var u = a || {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            g = u.x,
            p = u.y,
            _ = u.width,
            b = u.height;
        if ((!a || !_ && !b) && Na[t] && (_ = ms(e, Na[t][0]), b = ms(e, Na[t][1]), t !== "rect" && t !== "line" && (_ *= 2, b *= 2), t === "line" && (g = ms(e, "x1"), p = ms(e, "y1"), _ = Math.abs(_ - g), b = Math.abs(b - p))), t === "path") l = r.strokeDasharray, r.strokeDasharray = "none", s = e.getTotalLength() || 0, Xi(i) !== Xi(n) && !Sc && (Sc = 1) && Ec("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), s *= (i + n) / 2, r.strokeDasharray = l;
        else if (t === "rect") s = _ * 2 * i + b * 2 * n;
        else if (t === "line") s = Mc(g, p, g + _, p + b, i, n);
        else if (t === "polyline" || t === "polygon")
            for (c = e.getAttribute("points").match(o0) || [], t === "polygon" && c.push(c[0], c[1]), s = 0, f = 2; f < c.length; f += 2) s += Mc(c[f - 2], c[f - 1], c[f], c[f + 1], i, n) || 0;
        else(t === "circle" || t === "ellipse") && (h = _ / 2 * i, d = b / 2 * n, s = Math.PI * (3 * (h + d) - Rs((3 * h + d) * (h + 3 * d))));
        return s || 0
    },
    Cc = function(e, t) {
        if (e = fu(e)[0], !e) return [0, 0];
        t || (t = Ns(e) + 1);
        var r = ea.getComputedStyle(e),
            i = r.strokeDasharray || "",
            n = ri(r.strokeDashoffset),
            s = i.indexOf(",");
        return s < 0 && (s = i.indexOf(" ")), i = s < 0 ? t : ri(i.substr(0, s)), i > t && (i = t), [-n || 0, i - n || 0]
    },
    Oc = function() {
        Hh() && (ea = window, qh = Vr = Gh(), fu = Vr.utils.toArray, Tl = Vr.core.getStyleSaver, Wh = Vr.core.reverting || function() {}, Vh = ((ea.navigator || {}).userAgent || "").indexOf("Edge") !== -1)
    },
    kl = {
        version: "3.14.2",
        name: "drawSVG",
        register: function(e) {
            Vr = e, Oc()
        },
        init: function(e, t, r, i, n) {
            if (!e.getBBox) return !1;
            qh || Oc();
            var s = Ns(e),
                a, c, l;
            return this.styles = Tl && Tl(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit"), this.tween = r, this._style = e.style, this._target = e, t + "" == "true" ? t = "0 100%" : t ? (t + "").indexOf(" ") === -1 && (t = "0 " + t) : t = "0 0", a = Cc(e, s), c = a0(t, s, a[0]), this._length = Xi(s), this._dash = Xi(a[1] - a[0]), this._offset = Xi(-a[0]), this._dashPT = this.add(this, "_dash", this._dash, Xi(c[1] - c[0]), 0, 0, 0, 0, 0, 1), this._offsetPT = this.add(this, "_offset", this._offset, Xi(-c[0]), 0, 0, 0, 0, 0, 1), Vh && (l = ea.getComputedStyle(e), l.strokeLinecap !== l.strokeLinejoin && (c = ri(l.strokeMiterlimit), this.add(e.style, "strokeMiterlimit", c, c + .01))), this._live = jh(e) || ~(t + "").indexOf("live"), this._nowrap = ~(t + "").indexOf("nowrap"), this._props.push("drawSVG"), s0
        },
        render: function(e, t) {
            if (t.tween._time || !Wh()) {
                var r = t._pt,
                    i = t._style,
                    n, s, a, c;
                if (r) {
                    for (t._live && (n = Ns(t._target), n !== t._length && (s = n / t._length, t._length = n, t._offsetPT && (t._offsetPT.s *= s, t._offsetPT.c *= s), t._dashPT ? (t._dashPT.s *= s, t._dashPT.c *= s) : t._dash *= s)); r;) r.r(e, r.d), r = r._next;
                    a = t._dash || e && e !== 1 && 1e-4 || 0, n = t._length - a + .1, c = t._offset, a && c && a + Math.abs(c % t._length) > t._length - .05 && (c += c < 0 ? .005 : -.005) && (n += .005), i.strokeDashoffset = a ? c : c + .001, i.strokeDasharray = n < .1 ? "none" : a ? a + "px," + (t._nowrap ? 999999 : n) + "px" : "0px, 999999px"
                }
            } else t.styles.revert()
        },
        getLength: Ns,
        getPosition: Cc
    };
Gh() && Vr.registerPlugin(kl);
/*!
 * VelocityTracker: 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var $r, Sl, Oo, Uh, wn, Vi, Pl, Kh, Qh = function() {
        return $r || typeof window < "u" && ($r = window.gsap)
    },
    Ml = {},
    l0 = function(e) {
        return Math.round(e * 1e4) / 1e4
    },
    El = function(e) {
        return Kh(e).id
    },
    co = function(e) {
        return Ml[El(typeof e == "string" ? Oo(e)[0] : e)]
    },
    Dc = function(e) {
        var t = wn,
            r;
        if (e - Pl >= .05)
            for (Pl = e; t;) r = t.g(t.t, t.p), (r !== t.v1 || e - t.t1 > .2) && (t.v2 = t.v1, t.v1 = r, t.t2 = t.t1, t.t1 = e), t = t._next
    },
    u0 = {
        deg: 360,
        rad: Math.PI * 2
    },
    Fa = function() {
        $r = Qh(), $r && (Oo = $r.utils.toArray, Uh = $r.utils.getUnit, Kh = $r.core.getCache, Vi = $r.ticker, Sl = 1)
    },
    c0 = function(e, t, r, i) {
        this.t = e, this.p = t, this.g = e._gsap.get, this.rCap = u0[r || Uh(this.g(e, t))], this.v1 = this.v2 = this.g(e, t), this.t1 = this.t2 = Vi.time, i && (this._next = i, i._prev = this)
    },
    Ko = function() {
        function o(t, r) {
            Sl || Fa(), this.target = Oo(t)[0], Ml[El(this.target)] = this, this._props = {}, r && this.add(r)
        }
        o.register = function(r) {
            $r = r, Fa()
        };
        var e = o.prototype;
        return e.get = function(r, i) {
            var n = this._props[r] || console.warn("Not tracking " + r + " velocity."),
                s, a, c;
            return s = parseFloat(i ? n.v1 : n.g(n.t, n.p)), a = s - parseFloat(n.v2), c = n.rCap, c && (a = a % c, a !== a % (c / 2) && (a = a < 0 ? a + c : a - c)), l0(a / ((i ? n.t1 : Vi.time) - n.t2))
        }, e.getAll = function() {
            var r = {},
                i = this._props,
                n;
            for (n in i) r[n] = this.get(n);
            return r
        }, e.isTracking = function(r) {
            return r in this._props
        }, e.add = function(r, i) {
            var n = this._props[r];
            n ? (n.v1 = n.v2 = n.g(n.t, n.p), n.t1 = n.t2 = Vi.time) : (wn || (Vi.add(Dc), Pl = Vi.time), wn = this._props[r] = new c0(this.target, r, i, wn))
        }, e.remove = function(r) {
            var i = this._props[r],
                n, s;
            i && (n = i._prev, s = i._next, n && (n._next = s), s ? s._prev = n : wn === i && (Vi.remove(Dc), wn = 0), delete this._props[r])
        }, e.kill = function(r) {
            for (var i in this._props) this.remove(i);
            r || delete Ml[El(this.target)]
        }, o.track = function(r, i, n) {
            Sl || Fa();
            for (var s = [], a = Oo(r), c = i.split(","), l = (n || "").split(","), f = a.length, h, d; f--;) {
                for (h = co(a[f]) || new o(a[f]), d = c.length; d--;) h.add(c[d], l[d] || l[0]);
                s.push(h)
            }
            return s
        }, o.untrack = function(r, i) {
            var n = i && i.split(",");
            Oo(r).forEach(function(s) {
                var a = co(s);
                a && (n ? n.forEach(function(c) {
                    return a.remove(c)
                }) : a.kill(1))
            })
        }, o.isTracking = function(r, i) {
            var n = co(r);
            return n && n.isTracking(i)
        }, o.getVelocity = function(r, i) {
            var n = co(r);
            return !n || !n.isTracking(i) ? console.warn("Not tracking velocity of " + i) : n.get(i)
        }, o
    }();
Ko.getByTarget = co;
Qh() && $r.registerPlugin(Ko);
/*!
 * InertiaPlugin 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var pt, Zh, Ac, Jh, Cl, Do, ed, td, rd, hu, id, Ao, Ol, nd, ta = Ko.getByTarget,
    od = function() {
        return pt || typeof window < "u" && (pt = window.gsap) && pt.registerPlugin && pt
    },
    f0 = function(e) {
        return typeof e == "string"
    },
    Ho = function(e) {
        return typeof e == "number"
    },
    ki = function(e) {
        return typeof e == "object"
    },
    Dl = function(e) {
        return typeof e == "function"
    },
    h0 = 1,
    sd = Array.isArray,
    d0 = function(e) {
        return e
    },
    rn = 1e10,
    Lc = 1 / rn,
    ad = .05,
    p0 = function(e) {
        return Math.round(e * 1e4) / 1e4
    },
    g0 = function(e, t, r) {
        for (var i in t) !(i in e) && i !== r && (e[i] = t[i]);
        return e
    },
    _0 = function o(e) {
        var t = {},
            r, i;
        for (r in e) t[r] = ki(i = e[r]) && !sd(i) ? o(i) : i;
        return t
    },
    Rc = function(e, t, r, i, n) {
        var s = t.length,
            a = 0,
            c = rn,
            l, f, h, d;
        if (ki(e)) {
            for (; s--;) {
                l = t[s], f = 0;
                for (h in e) d = l[h] - e[h], f += d * d;
                f < c && (a = s, c = f)
            }
            if ((n || rn) < rn && n < Math.sqrt(c)) return e
        } else
            for (; s--;) l = t[s], f = l - e, f < 0 && (f = -f), f < c && l >= i && l <= r && (a = s, c = f);
        return t[a]
    },
    ld = function(e, t, r, i, n, s, a) {
        if (e.end === "auto") return e;
        var c = e.end,
            l, f;
        if (r = isNaN(r) ? rn : r, i = isNaN(i) ? -rn : i, ki(t)) {
            if (l = t.calculated ? t : (Dl(c) ? c(t, a) : Rc(t, c, r, i, s)) || t, !t.calculated) {
                for (f in l) t[f] = l[f];
                t.calculated = !0
            }
            l = l[n]
        } else l = Dl(c) ? c(t, a) : sd(c) ? Rc(t, c, r, i, s) : parseFloat(c);
        return l > r ? l = r : l < i && (l = i), {
            max: l,
            min: l,
            unitFactor: e.unitFactor
        }
    },
    ra = function(e, t, r) {
        return isNaN(e[t]) ? r : +e[t]
    },
    du = function(e, t) {
        return t * ad * e / hu
    },
    Nc = function(e, t, r) {
        return Math.abs((t - e) * hu / r / ad)
    },
    ud = {
        resistance: 1,
        checkpoint: 1,
        preventOvershoot: 1,
        linkedProps: 1,
        radius: 1,
        duration: 1
    },
    cd = function(e, t, r, i) {
        if (t.linkedProps) {
            var n = t.linkedProps.split(","),
                s = {},
                a, c, l, f, h, d;
            for (a = 0; a < n.length; a++) c = n[a], l = t[c], l && (Ho(l.velocity) ? f = l.velocity : (h = h || ta(e), f = h && h.isTracking(c) ? h.get(c) : 0), d = Math.abs(f / ra(l, "resistance", i)), s[c] = parseFloat(r(e, c)) + du(f, d));
            return s
        }
    },
    m0 = function(e, t, r, i, n, s) {
        if (r === void 0 && (r = 10), i === void 0 && (i = .2), n === void 0 && (n = 1), s === void 0 && (s = 0), f0(e) && (e = Jh(e)[0]), !e) return 0;
        var a = 0,
            c = rn,
            l = t.inertia || t,
            f = rd(e).get,
            h = ra(l, "resistance", Do.resistance),
            d, u, g, p, _, b, m, w, v, y;
        y = cd(e, l, f, h);
        for (d in l) ud[d] || (u = l[d], ki(u) || (w = w || ta(e), w && w.isTracking(d) ? u = Ho(u) ? {
            velocity: u
        } : {
            velocity: w.get(d)
        } : (p = +u || 0, g = Math.abs(p / h))), ki(u) && (Ho(u.velocity) ? p = u.velocity : (w = w || ta(e), p = w && w.isTracking(d) ? w.get(d) : 0), g = id(i, r, Math.abs(p / ra(u, "resistance", h))), _ = parseFloat(f(e, d)) || 0, b = _ + du(p, g), "end" in u && (u = ld(u, y && d in y ? y : b, u.max, u.min, d, l.radius, p), s && (Ao === t && (Ao = l = _0(t)), l[d] = g0(u, l[d], "end"))), "max" in u && b > +u.max + Lc ? (v = u.unitFactor || Do.unitFactors[d] || 1, m = _ > u.max && u.min !== u.max || p * v > -15 && p * v < 45 ? i + (r - i) * .1 : Nc(_, u.max, p), m + n < c && (c = m + n)) : "min" in u && b < +u.min - Lc && (v = u.unitFactor || Do.unitFactors[d] || 1, m = _ < u.min && u.min !== u.max || p * v > -45 && p * v < 15 ? i + (r - i) * .1 : Nc(_, u.min, p), m + n < c && (c = m + n)), m > a && (a = m)), g > a && (a = g));
        return a > c && (a = c), a > r ? r : a < i ? i : a
    },
    Fc = function() {
        pt = od(), pt && (Ac = pt.parseEase, Jh = pt.utils.toArray, ed = pt.utils.getUnit, rd = pt.core.getCache, id = pt.utils.clamp, Ol = pt.core.getStyleSaver, nd = pt.core.reverting || function() {}, Cl = Ac("power3"), hu = Cl(.05), td = pt.core.PropTween, pt.config({
            resistance: 100,
            unitFactors: {
                time: 1e3,
                totalTime: 1e3,
                progress: 1e3,
                totalProgress: 1e3
            }
        }), Do = pt.config(), pt.registerPlugin(Ko), Zh = 1)
    },
    pu = {
        version: "3.14.2",
        name: "inertia",
        register: function(e) {
            pt = e, Fc()
        },
        init: function(e, t, r, i, n) {
            Zh || Fc();
            var s = ta(e);
            if (t === "auto") {
                if (!s) {
                    console.warn("No inertia tracking on " + e + ". InertiaPlugin.track(target) first.");
                    return
                }
                t = s.getAll()
            }
            this.styles = Ol && typeof e.style == "object" && Ol(e), this.target = e, this.tween = r, Ao = t;
            var a = e._gsap,
                c = a.get,
                l = t.duration,
                f = ki(l),
                h = t.preventOvershoot || f && l.overshoot === 0,
                d = ra(t, "resistance", Do.resistance),
                u = Ho(l) ? l : m0(e, t, f && l.max || 10, f && l.min || .2, f && "overshoot" in l ? +l.overshoot : h ? 0 : 1, !0),
                g, p, _, b, m, w, v, y, x;
            t = Ao, Ao = 0, x = cd(e, t, c, d);
            for (g in t) ud[g] || (p = t[g], Dl(p) && (p = p(i, e, n)), Ho(p) ? m = p : ki(p) && !isNaN(p.velocity) ? m = +p.velocity : s && s.isTracking(g) ? m = s.get(g) : console.warn("ERROR: No velocity was defined for " + e + " property: " + g), w = du(m, u), y = 0, _ = c(e, g), b = ed(_), _ = parseFloat(_), ki(p) && (v = _ + w, "end" in p && (p = ld(p, x && g in x ? x : v, p.max, p.min, g, t.radius, m)), "max" in p && +p.max < v ? h || p.preventOvershoot ? w = p.max - _ : y = p.max - _ - w : "min" in p && +p.min > v && (h || p.preventOvershoot ? w = p.min - _ : y = p.min - _ - w)), this._props.push(g), this.styles && this.styles.save(g), this._pt = new td(this._pt, e, g, _, 0, d0, 0, a.set(e, g, this)), this._pt.u = b || 0, this._pt.c1 = w, this._pt.c2 = y);
            return r.duration(u), h0
        },
        render: function(e, t) {
            var r = t._pt;
            if (e = Cl(t.tween._time / t.tween._dur), e || !nd())
                for (; r;) r.set(r.t, r.p, p0(r.s + r.c1 * e + r.c2 * e * e) + r.u, r.d, e), r = r._next;
            else t.styles.revert()
        }
    };
"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(o) {
    return pu[o] = Ko[o]
});
od() && pt.registerPlugin(pu);

function Ic(o, e) {
    for (var t = 0; t < e.length; t++) {
        var r = e[t];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(o, r.key, r)
    }
}

function y0(o, e, t) {
    return e && Ic(o.prototype, e), t && Ic(o, t), o
}
/*!
 * ScrollSmoother 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var ze, ys, Yt, pi, fo, Hr, zi, $c, ye, Br, vs, Bc, zc, Yc, Xc, fd = function() {
        return typeof window < "u"
    },
    hd = function() {
        return ze || fd() && (ze = window.gsap) && ze.registerPlugin && ze
    },
    v0 = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    fi = function(e) {
        return ye.maxScroll(e || Yt)
    },
    w0 = function(e, t) {
        var r = e.parentNode || fo,
            i = e.getBoundingClientRect(),
            n = r.getBoundingClientRect(),
            s = n.top - i.top,
            a = n.bottom - i.bottom,
            c = (Math.abs(s) > Math.abs(a) ? s : a) / (1 - t),
            l = -c * t,
            f, h;
        return c > 0 && (f = n.height / (Yt.innerHeight + n.height), h = f === .5 ? n.height * 2 : Math.min(n.height, Math.abs(-c * f / (2 * f - 1))) * 2 * (t || 1), l += t ? -h * t : -h / 2, c += h), {
            change: c,
            offset: l
        }
    },
    b0 = function(e) {
        var t = pi.querySelector(".ScrollSmoother-wrapper");
        return t || (t = pi.createElement("div"), t.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t
    },
    li = function() {
        function o(e) {
            var t = this;
            ys || o.register(ze) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, Br && Br.kill(), Br = this, Yc(this);
            var r = e,
                i = r.smoothTouch,
                n = r.onUpdate,
                s = r.onStop,
                a = r.smooth,
                c = r.onFocusIn,
                l = r.normalizeScroll,
                f = r.wholePixels,
                h, d, u, g, p, _, b, m, w, v, y, x, T, k, O = this,
                L = e.effectsPrefix || "",
                z = ye.getScrollFunc(Yt),
                P = ye.isTouch === 1 ? i === !0 ? .8 : parseFloat(i) || 0 : a === 0 || a === !1 ? 0 : parseFloat(a) || .8,
                M = P && +e.speed || 1,
                R = 0,
                V = 0,
                I = 1,
                Y = Bc(0),
                K = function() {
                    return Y.update(-R)
                },
                te = {
                    y: 0
                },
                E = function() {
                    return h.style.overflow = "visible"
                },
                j, se = function(D) {
                    D.update();
                    var q = D.getTween();
                    q && (q.pause(), q._time = q._dur, q._tTime = q._tDur), j = !1, D.animation.progress(D.progress, !0)
                },
                re = function(D, q) {
                    (D !== R && !v || q) && (f && (D = Math.round(D)), P && (h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + D + ", 0, 1)", h._gsap.y = D + "px"), V = D - R, R = D, ye.isUpdating || o.isRefreshing || ye.update())
                },
                ie = function(D) {
                    return arguments.length ? (D < 0 && (D = 0), te.y = -D, j = !0, v ? R = -D : re(-D), ye.isRefreshing ? g.update() : z(D / M), this) : -R
                },
                Re = typeof ResizeObserver < "u" && e.autoResize !== !1 && new ResizeObserver(function() {
                    if (!ye.isRefreshing) {
                        var W = fi(d) * M;
                        W < -R && ie(W), Xc.restart(!0)
                    }
                }),
                Ce, Ie = function(D) {
                    d.scrollTop = 0, !(D.target.contains && D.target.contains(d) || c && c(t, D) === !1) && (ye.isInViewport(D.target) || D.target === Ce || t.scrollTo(D.target, !1, "center center"), Ce = D.target)
                },
                we = function(D, q) {
                    if (D < q.start) return D;
                    var U = isNaN(q.ratio) ? 1 : q.ratio,
                        ue = q.end - q.start,
                        fe = D - q.start,
                        _e = q.offset || 0,
                        Ne = q.pins || [],
                        ce = Ne.offset || 0,
                        $e = q._startClamp && q.start <= 0 || q.pins && q.pins.offset ? 0 : q._endClamp && q.end === fi() ? 1 : .5;
                    return Ne.forEach(function(De) {
                        ue -= De.distance, De.nativeStart <= D && (fe -= De.distance)
                    }), ce && (fe *= (ue - ce / U) / ue), D + (fe - _e * $e) / U - fe
                },
                Qe = function W(D, q, U) {
                    U || (D.pins.length = D.pins.offset = 0);
                    var ue = D.pins,
                        fe = D.markers,
                        _e, Ne, ce, $e, De, me, ot, Z;
                    for (ot = 0; ot < q.length; ot++)
                        if (Z = q[ot], D.trigger && Z.trigger && D !== Z && (Z.trigger === D.trigger || Z.pinnedContainer === D.trigger || D.trigger.contains(Z.trigger)) && (De = Z._startNative || Z._startClamp || Z.start, me = Z._endNative || Z._endClamp || Z.end, ce = we(De, D), $e = Z.pin && me > 0 ? ce + (me - De) : we(me, D), Z.setPositions(ce, $e, !0, (Z._startClamp ? Math.max(0, ce) : ce) - De), Z.markerStart && fe.push(ze.quickSetter([Z.markerStart, Z.markerEnd], "y", "px")), Z.pin && Z.end > 0 && !U)) {
                            if (_e = Z.end - Z.start, Ne = D._startClamp && Z.start < 0, Ne) {
                                if (D.start > 0) {
                                    D.setPositions(0, D.end + (D._startNative - D.start), !0), W(D, q);
                                    return
                                }
                                _e += Z.start, ue.offset = -Z.start
                            }
                            ue.push({
                                start: Z.start,
                                nativeStart: De,
                                end: Z.end,
                                distance: _e,
                                trig: Z
                            }), D.setPositions(D.start, D.end + (Ne ? -Z.start : _e), !0)
                        }
                },
                Oe = function(D, q) {
                    p.forEach(function(U) {
                        return Qe(U, D, q)
                    })
                },
                qe = function() {
                    fo = pi.documentElement, Hr = pi.body, E(), requestAnimationFrame(E), p && (ye.getAll().forEach(function(D) {
                        D._startNative = D.start, D._endNative = D.end
                    }), p.forEach(function(D) {
                        var q = D._startClamp || D.start,
                            U = D.autoSpeed ? Math.min(fi(), D.end) : q + Math.abs((D.end - q) / D.ratio),
                            ue = U - D.end;
                        if (q -= ue / 2, U -= ue / 2, q > U) {
                            var fe = q;
                            q = U, U = fe
                        }
                        D._startClamp && q < 0 ? (U = D.ratio < 0 ? fi() : D.end / D.ratio, ue = U - D.end, q = 0) : (D.ratio < 0 || D._endClamp && U >= fi()) && (U = fi(), q = D.ratio < 0 || D.ratio > 1 ? 0 : U - (U - D.start) / D.ratio, ue = (U - q) * D.ratio - (D.end - D.start)), D.offset = ue || 1e-4, D.pins.length = D.pins.offset = 0, D.setPositions(q, U, !0)
                    }), Oe(ye.sort())), Y.reset()
                },
                We = function() {
                    return ye.addEventListener("refresh", qe)
                },
                pe = function() {
                    return p && p.forEach(function(D) {
                        return D.vars.onRefresh(D)
                    })
                },
                ge = function() {
                    return p && p.forEach(function(D) {
                        return D.vars.onRefreshInit(D)
                    }), pe
                },
                ne = function(D, q, U, ue) {
                    return function() {
                        var fe = typeof q == "function" ? q(U, ue) : q;
                        fe || fe === 0 || (fe = ue.getAttribute("data-" + L + D) || (D === "speed" ? 1 : 0)), ue.setAttribute("data-" + L + D, fe);
                        var _e = (fe + "").substr(0, 6) === "clamp(";
                        return {
                            clamp: _e,
                            value: _e ? fe.substr(6, fe.length - 7) : fe
                        }
                    }
                },
                _t = function(D, q, U, ue, fe) {
                    fe = (typeof fe == "function" ? fe(ue, D) : fe) || 0;
                    var _e = ne("speed", q, ue, D),
                        Ne = ne("lag", U, ue, D),
                        ce = ze.getProperty(D, "y"),
                        $e = D._gsap,
                        De, me, ot, Z, vr, bt, mt = [],
                        It = function() {
                            q = _e(), U = parseFloat(Ne().value), De = parseFloat(q.value) || 1, ot = q.value === "auto", vr = ot || me && me._startClamp && me.start <= 0 || mt.offset ? 0 : me && me._endClamp && me.end === fi() ? 1 : .5, Z && Z.kill(), Z = U && ze.to(D, {
                                ease: vs,
                                overwrite: !1,
                                y: "+=0",
                                duration: U
                            }), me && (me.ratio = De, me.autoSpeed = ot)
                        },
                        jt = function() {
                            $e.y = ce + "px", $e.renderTransform(1), It()
                        },
                        xt = [],
                        le = 0,
                        Et = function(Pe) {
                            if (ot) {
                                jt();
                                var He = w0(D, $c(0, 1, -Pe.start / (Pe.end - Pe.start)));
                                le = He.change, bt = He.offset
                            } else bt = mt.offset || 0, le = (Pe.end - Pe.start - bt) * (1 - De);
                            mt.forEach(function(Ct) {
                                return le -= Ct.distance * (1 - De)
                            }), Pe.offset = le || .001, Pe.vars.onUpdate(Pe), Z && Z.progress(1)
                        };
                    return It(), (De !== 1 || ot || Z) && (me = ye.create({
                        trigger: ot ? D.parentNode : D,
                        start: function() {
                            return q.clamp ? "clamp(top bottom+=" + fe + ")" : "top bottom+=" + fe
                        },
                        end: function() {
                            return q.value < 0 ? "max" : q.clamp ? "clamp(bottom top-=" + fe + ")" : "bottom top-=" + fe
                        },
                        scroller: d,
                        scrub: !0,
                        refreshPriority: -999,
                        onRefreshInit: jt,
                        onRefresh: Et,
                        onKill: function(Pe) {
                            var He = p.indexOf(Pe);
                            He >= 0 && p.splice(He, 1), jt()
                        },
                        onUpdate: function(Pe) {
                            var He = ce + le * (Pe.progress - vr),
                                Ct = mt.length,
                                Q = 0,
                                S, $, C;
                            if (Pe.offset) {
                                if (Ct) {
                                    for ($ = -R, C = Pe.end; Ct--;) {
                                        if (S = mt[Ct], S.trig.isActive || $ >= S.start && $ <= S.end) {
                                            Z && (S.trig.progress += S.trig.direction < 0 ? .001 : -.001, S.trig.update(0, 0, 1), Z.resetTo("y", parseFloat($e.y), -V, !0), I && Z.progress(1));
                                            return
                                        }
                                        $ > S.end && (Q += S.distance), C -= S.distance
                                    }
                                    He = ce + Q + le * ((ze.utils.clamp(Pe.start, Pe.end, $) - Pe.start - Q) / (C - Pe.start) - vr)
                                }
                                xt.length && !ot && xt.forEach(function(N) {
                                    return N(He - Q)
                                }), He = v0(He + bt), Z ? (Z.resetTo("y", He, -V, !0), I && Z.progress(1)) : ($e.y = He + "px", $e.renderTransform(1))
                            }
                        }
                    }), Et(me), ze.core.getCache(me.trigger).stRevert = ge, me.startY = ce, me.pins = mt, me.markers = xt, me.ratio = De, me.autoSpeed = ot, D.style.willChange = "transform"), me
                };
            We(), ye.addEventListener("killAll", We), ze.delayedCall(.5, function() {
                return I = 0
            }), this.scrollTop = ie, this.scrollTo = function(W, D, q) {
                var U = ze.utils.clamp(0, fi(), isNaN(W) ? t.offset(W, q, !!D && !v) : +W);
                D ? v ? ze.to(t, {
                    duration: P,
                    scrollTop: U,
                    overwrite: "auto",
                    ease: vs
                }) : z(U) : ie(U)
            }, this.offset = function(W, D, q) {
                W = zi(W)[0];
                var U = W.style.cssText,
                    ue = ye.create({
                        trigger: W,
                        start: D || "top top"
                    }),
                    fe;
                return p && (I ? ye.refresh() : Oe([ue], !0)), fe = ue.start / (q ? M : 1), ue.kill(!1), W.style.cssText = U, ze.core.getCache(W).uncache = 1, fe
            };

            function A() {
                return u = h.clientHeight, h.style.overflow = "visible", Hr.style.height = Yt.innerHeight + (u - Yt.innerHeight) / M + "px", u - Yt.innerHeight
            }
            this.content = function(W) {
                if (arguments.length) {
                    var D = zi(W || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || Hr.children[0];
                    return D !== h && (h = D, w = h.getAttribute("style") || "", Re && Re.observe(h), ze.set(h, {
                        overflow: "visible",
                        width: "100%",
                        boxSizing: "border-box",
                        y: "+=0"
                    }), P || ze.set(h, {
                        clearProps: "transform"
                    })), this
                }
                return h
            }, this.wrapper = function(W) {
                return arguments.length ? (d = zi(W || "#smooth-wrapper")[0] || b0(h), m = d.getAttribute("style") || "", A(), ze.set(d, P ? {
                    overflow: "hidden",
                    position: "fixed",
                    height: "100%",
                    width: "100%",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                } : {
                    overflow: "visible",
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    top: "auto",
                    bottom: "auto",
                    left: "auto",
                    right: "auto"
                }), this) : d
            }, this.effects = function(W, D) {
                var q;
                if (p || (p = []), !W) return p.slice(0);
                W = zi(W), W.forEach(function(De) {
                    for (var me = p.length; me--;) p[me].trigger === De && p[me].kill()
                }), D = D || {};
                var U = D,
                    ue = U.speed,
                    fe = U.lag,
                    _e = U.effectsPadding,
                    Ne = [],
                    ce, $e;
                for (ce = 0; ce < W.length; ce++) $e = _t(W[ce], ue, fe, ce, _e), $e && Ne.push($e);
                return (q = p).push.apply(q, Ne), D.refresh !== !1 && ye.refresh(), Ne
            }, this.sections = function(W, D) {
                var q;
                if (_ || (_ = []), !W) return _.slice(0);
                var U = zi(W).map(function(ue) {
                    return ye.create({
                        trigger: ue,
                        start: "top 120%",
                        end: "bottom -20%",
                        onToggle: function(_e) {
                            ue.style.opacity = _e.isActive ? "1" : "0", ue.style.pointerEvents = _e.isActive ? "all" : "none"
                        }
                    })
                });
                return D && D.add ? (q = _).push.apply(q, U) : _ = U.slice(0), U
            }, this.content(e.content), this.wrapper(e.wrapper), this.render = function(W) {
                return re(W || W === 0 ? W : R)
            }, this.getVelocity = function() {
                return Y.getVelocity(-R)
            }, ye.scrollerProxy(d, {
                scrollTop: ie,
                scrollHeight: function() {
                    return A() && Hr.scrollHeight
                },
                fixedMarkers: e.fixedMarkers !== !1 && !!P,
                content: h,
                getBoundingClientRect: function() {
                    return {
                        top: 0,
                        left: 0,
                        width: Yt.innerWidth,
                        height: Yt.innerHeight
                    }
                }
            }), ye.defaults({
                scroller: d
            });
            var Ve = ye.getAll().filter(function(W) {
                return W.scroller === Yt || W.scroller === d
            });
            Ve.forEach(function(W) {
                return W.revert(!0, !0)
            }), g = ye.create({
                animation: ze.fromTo(te, {
                    y: function() {
                        return k = 0, 0
                    }
                }, {
                    y: function() {
                        return k = 1, -A()
                    },
                    immediateRender: !1,
                    ease: "none",
                    data: "ScrollSmoother",
                    duration: 100,
                    onUpdate: function() {
                        if (k) {
                            var D = j;
                            D && (se(g), te.y = R), re(te.y, D), K(), n && !v && n(O)
                        }
                    }
                }),
                onRefreshInit: function(D) {
                    if (!o.isRefreshing) {
                        if (o.isRefreshing = !0, p) {
                            var q = ye.getAll().filter(function(ue) {
                                return !!ue.pin
                            });
                            p.forEach(function(ue) {
                                ue.vars.pinnedContainer || q.forEach(function(fe) {
                                    if (fe.pin.contains(ue.trigger)) {
                                        var _e = ue.vars;
                                        _e.pinnedContainer = fe.pin, ue.vars = null, ue.init(_e, ue.animation)
                                    }
                                })
                            })
                        }
                        var U = D.getTween();
                        T = U && U._end > U._dp._time, x = R, te.y = 0, P && (ye.isTouch === 1 && (d.style.position = "absolute"), d.scrollTop = 0, ye.isTouch === 1 && (d.style.position = "fixed"))
                    }
                },
                onRefresh: function(D) {
                    D.animation.invalidate(), te.y = 0, D.setPositions(D.start, A() / M), T || se(D), te.y = -z() * M, re(te.y), I || (T && (j = !1), D.animation.progress(ze.utils.clamp(0, 1, x / M / -D.end))), T && (D.progress -= .001, D.update()), o.isRefreshing = !1
                },
                id: "ScrollSmoother",
                scroller: Yt,
                invalidateOnRefresh: !0,
                start: 0,
                refreshPriority: -9999,
                end: function() {
                    return A() / M
                },
                onScrubComplete: function() {
                    Y.reset(), s && s(t)
                },
                scrub: P || !0
            }), this.smooth = function(W) {
                return arguments.length && (P = W || 0, M = P && +e.speed || 1, g.scrubDuration(W)), g.getTween() ? g.getTween().duration() : 0
            }, g.getTween() && (g.getTween().vars.ease = e.ease || vs), this.scrollTrigger = g, e.effects && this.effects(e.effects === !0 ? "[data-" + L + "speed], [data-" + L + "lag]" : e.effects, {
                effectsPadding: e.effectsPadding,
                refresh: !1
            }), e.sections && this.sections(e.sections === !0 ? "[data-section]" : e.sections), Ve.forEach(function(W) {
                W.vars.scroller = d, W.revert(!1, !0), W.init(W.vars, W.animation)
            }), this.paused = function(W, D) {
                return arguments.length ? (!!v !== W && (W ? (g.getTween() && g.getTween().pause(), z(-R / M), Y.reset(), y = ye.normalizeScroll(), y && y.disable(), v = ye.observe({
                    preventDefault: !0,
                    type: "wheel,touch,scroll",
                    debounce: !1,
                    allowClicks: !0,
                    onChangeY: function() {
                        return ie(-R)
                    }
                }), v.nested = zc(fo, "wheel,touch,scroll", !0, D !== !1)) : (v.nested.kill(), v.kill(), v = 0, y && y.enable(), g.progress = (-R / M - g.start) / (g.end - g.start), se(g))), this) : !!v
            }, this.kill = this.revert = function() {
                t.paused(!1), se(g), g.kill();
                for (var W = (p || []).concat(_ || []), D = W.length; D--;) W[D].kill();
                ye.scrollerProxy(d), ye.removeEventListener("killAll", We), ye.removeEventListener("refresh", qe), d.style.cssText = m, h.style.cssText = w;
                var q = ye.defaults({});
                q && q.scroller === d && ye.defaults({
                    scroller: Yt
                }), t.normalizer && ye.normalizeScroll(!1), clearInterval(b), Br = null, Re && Re.disconnect(), Hr.style.removeProperty("height"), Yt.removeEventListener("focusin", Ie)
            }, this.refresh = function(W, D) {
                return g.refresh(W, D)
            }, l && (this.normalizer = ye.normalizeScroll(l === !0 ? {
                debounce: !0,
                content: !P && h
            } : l)), ye.config(e), "scrollBehavior" in Yt.getComputedStyle(Hr) && ze.set([Hr, fo], {
                scrollBehavior: "auto"
            }), Yt.addEventListener("focusin", Ie), b = setInterval(K, 250), pi.readyState === "loading" || requestAnimationFrame(function() {
                return ye.refresh()
            })
        }
        return o.register = function(t) {
            return ys || (ze = t || hd(), fd() && window.document && (Yt = window, pi = document, fo = pi.documentElement, Hr = pi.body), ze && (zi = ze.utils.toArray, $c = ze.utils.clamp, vs = ze.parseEase("expo"), Yc = ze.core.context || function() {}, ye = ze.core.globals().ScrollTrigger, ze.core.globals("ScrollSmoother", o), Hr && ye && (Xc = ze.delayedCall(.2, function() {
                return ye.isRefreshing || Br && Br.refresh()
            }).pause(), Bc = ye.core._getVelocityProp, zc = ye.core._inputObserver, o.refresh = ye.refresh, ys = 1))), ys
        }, y0(o, [{
            key: "progress",
            get: function() {
                return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
            }
        }]), o
    }();
li.version = "3.14.2";
li.create = function(o) {
    return Br && o && Br.content() === zi(o.content)[0] ? Br : new li(o)
};
li.get = function() {
    return Br
};
hd() && ze.registerPlugin(li);
class nr {
    constructor(e) {
        this.block = e, this.init(), this.initEvents()
    }
    init() {}
    initEvents() {}
}
const gu = (o = () => {}) => {
    oe.matchMedia().add("(prefers-reduced-motion: no-preference)", o)
};
class x0 extends nr {
    init() {
        this.DOM = {
            columns: this.block.querySelectorAll(".brands__item")
        }, this.column = {
            one: this.DOM.columns[0].innerHTML,
            two: this.DOM.columns[1].innerHTML,
            three: this.DOM.columns[2].innerHTML,
            four: this.DOM.columns[3].innerHTML,
            five: this.DOM.columns[4].innerHTML,
            six: this.DOM.columns[5].innerHTML
        }, this.createTimeline()
    }
    createTimeline() {
        oe.matchMedia().add({
            isMobile: "(max-width: 768px)",
            isDesktop: "(min-width: 769px ) and (max-width: 1240px)",
            isLargeDesktop: "(min-width: 1241px)"
        }, t => {
            let r;
            t.conditions.isMobile ? (r = 3, this.DOM.columns[0].innerHTML = [this.column.one + this.column.two], this.DOM.columns[1].innerHTML = [this.column.three + this.column.four], this.DOM.columns[2].innerHTML = [this.column.five + this.column.six]) : t.conditions.isDesktop ? (r = 5, this.DOM.columns[0].innerHTML = [this.column.one + this.column.two], this.DOM.columns[1].innerHTML = this.column.three, this.DOM.columns[2].innerHTML = this.column.four, this.DOM.columns[3].innerHTML = this.column.five, this.DOM.columns[4].innerHTML = this.column.six) : t.conditions.isLargeDesktop && (r = 6, this.DOM.columns[0].innerHTML = this.column.one, this.DOM.columns[1].innerHTML = this.column.two, this.DOM.columns[2].innerHTML = this.column.three, this.DOM.columns[3].innerHTML = this.column.four, this.DOM.columns[4].innerHTML = this.column.five, this.DOM.columns[5].innerHTML = this.column.six), gu(() => {
                for (let i = 0; i < r; i++) {
                    const s = this.DOM.columns[i].querySelectorAll("svg"),
                        a = oe.utils.random(["-200%", "200%"]),
                        c = i % 2 === 0,
                        l = oe.timeline({
                            repeat: -1,
                            delay: -r + i * .2
                        });
                    s.forEach(f => {
                        l.to(f, {
                            keyframes: [{
                                y: c ? a : 0,
                                x: c ? 0 : a,
                                duration: .3
                            }, {
                                autoAlpha: 1,
                                x: 0,
                                y: 0,
                                duration: .5,
                                ease: "power2.out"
                            }, {
                                delay: 3,
                                y: c ? 0 : a,
                                x: c ? a : 0,
                                duration: .3,
                                ease: "power2.in"
                            }]
                        }).set(f, {
                            autoAlpha: 0
                        })
                    })
                }
            })
        })
    }
}
class T0 extends nr {
    init() {
        const e = oe.utils.selector(this.block);
        this.DOM = {
            button: this.block,
            flair: e(".button__flair")
        }, this.xSet = oe.quickSetter(this.DOM.flair, "xPercent"), this.ySet = oe.quickSetter(this.DOM.flair, "yPercent"), this.hasFill = this.DOM.button.classList.contains("button--fill")
    }
    getXY(e) {
        const {
            left: t,
            top: r,
            width: i,
            height: n
        } = this.DOM.button.getBoundingClientRect(), s = oe.utils.pipe(oe.utils.mapRange(0, i, 0, 100), oe.utils.clamp(0, 100)), a = oe.utils.pipe(oe.utils.mapRange(0, n, 0, 100), oe.utils.clamp(0, 100));
        return {
            x: s(e.clientX - t),
            y: a(e.clientY - r)
        }
    }
    initEvents() {
        "ontouchstart" in window || navigator.maxTouchPoints > 0 || (this.DOM.button.addEventListener("mouseenter", t => {
            const {
                x: r,
                y: i
            } = this.getXY(t);
            this.xSet(r), this.ySet(i), this.hasFill ? oe.to(this.DOM.flair, {
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }) : oe.to(this.DOM.flair, {
                scale: 1,
                duration: .4,
                ease: "power2.out"
            })
        }), this.DOM.button.addEventListener("mouseleave", t => {
            const {
                x: r,
                y: i
            } = this.getXY(t);
            oe.killTweensOf(this.DOM.flair), this.hasFill ? oe.to(this.DOM.flair, {
                xPercent: r > 90 ? r + 20 : r < 10 ? r - 20 : r,
                yPercent: i > 90 ? i + 20 : i < 10 ? i - 20 : i,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }) : oe.to(this.DOM.flair, {
                xPercent: r > 90 ? r + 20 : r < 10 ? r - 20 : r,
                yPercent: i > 90 ? i + 20 : i < 10 ? i - 20 : i,
                scale: 0,
                duration: .3,
                ease: "power2.out"
            })
        }), this.DOM.button.addEventListener("mousemove", t => {
            const {
                x: r,
                y: i
            } = this.getXY(t);
            oe.to(this.DOM.flair, {
                xPercent: r,
                yPercent: i,
                duration: this.hasFill ? 1 : .4,
                ease: "power2"
            })
        }))
    }
}
oe.registerPlugin(it);
class k0 extends nr {
    init() {
        this.wrapper = this.block.querySelector(".showcase__wrap"), this.items = this.wrapper.querySelectorAll(".showcase__item"), this.titles = this.wrapper.querySelectorAll(".showcase__titles p"), this.titleLinks = this.wrapper.querySelectorAll(".showcase__titles a"), this.tools = this.wrapper.querySelectorAll(".showcase__tools p"), this.videos = this.wrapper.querySelectorAll(".showcase__video"), this.previous = this.block.querySelector(".button.prev"), this.next = this.block.querySelector(".button.next"), this.loopItems = this.loopItems.bind(this), this.loop = this.loopItems(), this.loop.previous()
    }
    initEvents() {
        const e = "is-moving";
        this.previous.addEventListener("click", this.loop.previous), this.next.addEventListener("click", this.loop.next), it.create({
            target: this.wrapper,
            type: "touch,pointer",
            dragMinimum: 10,
            onPress: () => {
                this.wrapper.classList.add(e)
            },
            onRelease: () => {
                this.wrapper.classList.remove(e)
            },
            onLeft: () => {
                this.loop.next()
            },
            onRight: () => {
                this.loop.previous()
            }
        }), ve.create({
            trigger: this.wrapper,
            start: "top bottom",
            end: "bottom top",
            once: !0,
            onEnter: () => {
                this.videos[1].play()
            }
        })
    }
    loopItems() {
        const e = oe.utils.toArray(this.items);
        let t = oe.timeline({
                paused: !0,
                draggable: !0,
                defaults: {
                    ease: "none"
                },
                onReverseComplete: () => t.totalTime(t.rawTime() + t.duration() * 100)
            }),
            r = e.length,
            i = e[0].offsetLeft,
            n = [],
            s = [],
            a = [],
            c = 0,
            l = 1e3,
            f = oe.utils.snap(1),
            h = () => e.forEach((y, x) => {
                s[x] = parseFloat(oe.getProperty(y, "width", "px")), a[x] = f(parseFloat(oe.getProperty(y, "x", "px")) / s[x] * 100 + oe.getProperty(y, "xPercent"))
            }),
            d = () => e[r - 1].offsetLeft + a[r - 1] / 100 * s[r - 1] - i + e[r - 1].offsetWidth * oe.getProperty(e[r - 1], "scaleX"),
            u, g, p, _, b, m;
        for (h(), oe.set(e, {
                xPercent: y => a[y]
            }), oe.set(e, {
                x: 0
            }), u = d(), m = 0; m < r; m++) b = e[m], g = a[m] / 100 * s[m], p = b.offsetLeft + g - i, _ = p + s[m] * oe.getProperty(b, "scaleX"), t.to(b, {
            xPercent: f((g - _) / s[m] * 100),
            duration: _ / l
        }, 0).fromTo(b, {
            xPercent: f((g - _ + u) / s[m] * 100)
        }, {
            xPercent: a[m],
            duration: (g - _ + u - g) / l,
            immediateRender: !1
        }, _ / l).add("label" + m, p / l), n[m] = p / l;
        const w = y => {
                e.forEach(T => T.classList.remove("showcase__item--active")), this.titles.forEach(T => T.classList.remove("active")), this.titleLinks.forEach(T => {
                    T.setAttribute("tabindex", "-1"), T.setAttribute("aria-hidden", "true")
                }), this.tools.forEach(T => {
                    T.setAttribute("tabindex", "-1"), T.setAttribute("aria-hidden", "true")
                }), this.tools.forEach(T => T.classList.remove("active")), this.videos.forEach(T => T.pause());
                let x = oe.utils.wrap(0, e.length);
                e[x(y)].classList.add("showcase__item--active"), this.titles[x(y)].classList.add("active"), this.titleLinks[x(y)].removeAttribute("tabindex"), this.titleLinks[x(y)].removeAttribute("aria-hidden"), this.tools[x(y)].removeAttribute("tabindex"), this.tools[x(y)].removeAttribute("aria-hidden"), this.tools[x(y)].classList.add("active"), this.videos[x(y)].play()
            },
            v = y => {
                const x = {
                    duration: .8,
                    ease: "back.out(.95)"
                };
                Math.abs(y - c) > r / 2 && (y += y > c ? -r : r);
                let T = oe.utils.wrap(0, r, y),
                    k = n[T];
                return k > t.time() != y > c && (x.modifiers = {
                    time: oe.utils.wrap(0, t.duration())
                }, k += t.duration() * (y > c ? 1 : -1)), c = T, x.overwrite = !0, t.tweenTo(k, x)
            };
        return t.next = () => {
            this.animating || (this.animating = !0, this.timeout = setTimeout(() => {
                this.animating = !1
            }, 800), v(c + 1) && w(c + 1))
        }, t.previous = () => {
            this.animating || (this.animating = !0, this.timeout = setTimeout(() => {
                this.animating = !1
            }, 800), v(c - 1) && w(c + 1))
        }, t.toIndex = y => v(y), t.updateIndex = () => c = Math.round(t.progress() * e.length), t.times = n, t.progress(1, !0).progress(0, !0), t
    }
} /*! @vimeo/player v2.20.1 | (c) 2023 Vimeo | MIT License | https://github.com/vimeo/player.js */
function Vc(o, e) {
    var t = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(o);
        e && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(o, i).enumerable
        })), t.push.apply(t, r)
    }
    return t
}

function qc(o) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e] != null ? arguments[e] : {};
        e % 2 ? Vc(Object(t), !0).forEach(function(r) {
            Fs(o, r, t[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t)) : Vc(Object(t)).forEach(function(r) {
            Object.defineProperty(o, r, Object.getOwnPropertyDescriptor(t, r))
        })
    }
    return o
}

function Xt() {
    Xt = function() {
        return o
    };
    var o = {},
        e = Object.prototype,
        t = e.hasOwnProperty,
        r = Object.defineProperty || function(P, M, R) {
            P[M] = R.value
        },
        i = typeof Symbol == "function" ? Symbol : {},
        n = i.iterator || "@@iterator",
        s = i.asyncIterator || "@@asyncIterator",
        a = i.toStringTag || "@@toStringTag";

    function c(P, M, R) {
        return Object.defineProperty(P, M, {
            value: R,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), P[M]
    }
    try {
        c({}, "")
    } catch {
        c = function(M, R, V) {
            return M[R] = V
        }
    }

    function l(P, M, R, V) {
        var I = M && M.prototype instanceof d ? M : d,
            Y = Object.create(I.prototype),
            K = new O(V || []);
        return r(Y, "_invoke", {
            value: y(P, R, K)
        }), Y
    }

    function f(P, M, R) {
        try {
            return {
                type: "normal",
                arg: P.call(M, R)
            }
        } catch (V) {
            return {
                type: "throw",
                arg: V
            }
        }
    }
    o.wrap = l;
    var h = {};

    function d() {}

    function u() {}

    function g() {}
    var p = {};
    c(p, n, function() {
        return this
    });
    var _ = Object.getPrototypeOf,
        b = _ && _(_(L([])));
    b && b !== e && t.call(b, n) && (p = b);
    var m = g.prototype = d.prototype = Object.create(p);

    function w(P) {
        ["next", "throw", "return"].forEach(function(M) {
            c(P, M, function(R) {
                return this._invoke(M, R)
            })
        })
    }

    function v(P, M) {
        function R(I, Y, K, te) {
            var E = f(P[I], P, Y);
            if (E.type !== "throw") {
                var j = E.arg,
                    se = j.value;
                return se && typeof se == "object" && t.call(se, "__await") ? M.resolve(se.__await).then(function(re) {
                    R("next", re, K, te)
                }, function(re) {
                    R("throw", re, K, te)
                }) : M.resolve(se).then(function(re) {
                    j.value = re, K(j)
                }, function(re) {
                    return R("throw", re, K, te)
                })
            }
            te(E.arg)
        }
        var V;
        r(this, "_invoke", {
            value: function(I, Y) {
                function K() {
                    return new M(function(te, E) {
                        R(I, Y, te, E)
                    })
                }
                return V = V ? V.then(K, K) : K()
            }
        })
    }

    function y(P, M, R) {
        var V = "suspendedStart";
        return function(I, Y) {
            if (V === "executing") throw new Error("Generator is already running");
            if (V === "completed") {
                if (I === "throw") throw Y;
                return z()
            }
            for (R.method = I, R.arg = Y;;) {
                var K = R.delegate;
                if (K) {
                    var te = x(K, R);
                    if (te) {
                        if (te === h) continue;
                        return te
                    }
                }
                if (R.method === "next") R.sent = R._sent = R.arg;
                else if (R.method === "throw") {
                    if (V === "suspendedStart") throw V = "completed", R.arg;
                    R.dispatchException(R.arg)
                } else R.method === "return" && R.abrupt("return", R.arg);
                V = "executing";
                var E = f(P, M, R);
                if (E.type === "normal") {
                    if (V = R.done ? "completed" : "suspendedYield", E.arg === h) continue;
                    return {
                        value: E.arg,
                        done: R.done
                    }
                }
                E.type === "throw" && (V = "completed", R.method = "throw", R.arg = E.arg)
            }
        }
    }

    function x(P, M) {
        var R = M.method,
            V = P.iterator[R];
        if (V === void 0) return M.delegate = null, R === "throw" && P.iterator.return && (M.method = "return", M.arg = void 0, x(P, M), M.method === "throw") || R !== "return" && (M.method = "throw", M.arg = new TypeError("The iterator does not provide a '" + R + "' method")), h;
        var I = f(V, P.iterator, M.arg);
        if (I.type === "throw") return M.method = "throw", M.arg = I.arg, M.delegate = null, h;
        var Y = I.arg;
        return Y ? Y.done ? (M[P.resultName] = Y.value, M.next = P.nextLoc, M.method !== "return" && (M.method = "next", M.arg = void 0), M.delegate = null, h) : Y : (M.method = "throw", M.arg = new TypeError("iterator result is not an object"), M.delegate = null, h)
    }

    function T(P) {
        var M = {
            tryLoc: P[0]
        };
        1 in P && (M.catchLoc = P[1]), 2 in P && (M.finallyLoc = P[2], M.afterLoc = P[3]), this.tryEntries.push(M)
    }

    function k(P) {
        var M = P.completion || {};
        M.type = "normal", delete M.arg, P.completion = M
    }

    function O(P) {
        this.tryEntries = [{
            tryLoc: "root"
        }], P.forEach(T, this), this.reset(!0)
    }

    function L(P) {
        if (P) {
            var M = P[n];
            if (M) return M.call(P);
            if (typeof P.next == "function") return P;
            if (!isNaN(P.length)) {
                var R = -1,
                    V = function I() {
                        for (; ++R < P.length;)
                            if (t.call(P, R)) return I.value = P[R], I.done = !1, I;
                        return I.value = void 0, I.done = !0, I
                    };
                return V.next = V
            }
        }
        return {
            next: z
        }
    }

    function z() {
        return {
            value: void 0,
            done: !0
        }
    }
    return u.prototype = g, r(m, "constructor", {
        value: g,
        configurable: !0
    }), r(g, "constructor", {
        value: u,
        configurable: !0
    }), u.displayName = c(g, a, "GeneratorFunction"), o.isGeneratorFunction = function(P) {
        var M = typeof P == "function" && P.constructor;
        return !!M && (M === u || (M.displayName || M.name) === "GeneratorFunction")
    }, o.mark = function(P) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(P, g) : (P.__proto__ = g, c(P, a, "GeneratorFunction")), P.prototype = Object.create(m), P
    }, o.awrap = function(P) {
        return {
            __await: P
        }
    }, w(v.prototype), c(v.prototype, s, function() {
        return this
    }), o.AsyncIterator = v, o.async = function(P, M, R, V, I) {
        I === void 0 && (I = Promise);
        var Y = new v(l(P, M, R, V), I);
        return o.isGeneratorFunction(M) ? Y : Y.next().then(function(K) {
            return K.done ? K.value : Y.next()
        })
    }, w(m), c(m, a, "Generator"), c(m, n, function() {
        return this
    }), c(m, "toString", function() {
        return "[object Generator]"
    }), o.keys = function(P) {
        var M = Object(P),
            R = [];
        for (var V in M) R.push(V);
        return R.reverse(),
            function I() {
                for (; R.length;) {
                    var Y = R.pop();
                    if (Y in M) return I.value = Y, I.done = !1, I
                }
                return I.done = !0, I
            }
    }, o.values = L, O.prototype = {
        constructor: O,
        reset: function(P) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !P)
                for (var M in this) M.charAt(0) === "t" && t.call(this, M) && !isNaN(+M.slice(1)) && (this[M] = void 0)
        },
        stop: function() {
            this.done = !0;
            var P = this.tryEntries[0].completion;
            if (P.type === "throw") throw P.arg;
            return this.rval
        },
        dispatchException: function(P) {
            if (this.done) throw P;
            var M = this;

            function R(E, j) {
                return Y.type = "throw", Y.arg = P, M.next = E, j && (M.method = "next", M.arg = void 0), !!j
            }
            for (var V = this.tryEntries.length - 1; V >= 0; --V) {
                var I = this.tryEntries[V],
                    Y = I.completion;
                if (I.tryLoc === "root") return R("end");
                if (I.tryLoc <= this.prev) {
                    var K = t.call(I, "catchLoc"),
                        te = t.call(I, "finallyLoc");
                    if (K && te) {
                        if (this.prev < I.catchLoc) return R(I.catchLoc, !0);
                        if (this.prev < I.finallyLoc) return R(I.finallyLoc)
                    } else if (K) {
                        if (this.prev < I.catchLoc) return R(I.catchLoc, !0)
                    } else {
                        if (!te) throw new Error("try statement without catch or finally");
                        if (this.prev < I.finallyLoc) return R(I.finallyLoc)
                    }
                }
            }
        },
        abrupt: function(P, M) {
            for (var R = this.tryEntries.length - 1; R >= 0; --R) {
                var V = this.tryEntries[R];
                if (V.tryLoc <= this.prev && t.call(V, "finallyLoc") && this.prev < V.finallyLoc) {
                    var I = V;
                    break
                }
            }
            I && (P === "break" || P === "continue") && I.tryLoc <= M && M <= I.finallyLoc && (I = null);
            var Y = I ? I.completion : {};
            return Y.type = P, Y.arg = M, I ? (this.method = "next", this.next = I.finallyLoc, h) : this.complete(Y)
        },
        complete: function(P, M) {
            if (P.type === "throw") throw P.arg;
            return P.type === "break" || P.type === "continue" ? this.next = P.arg : P.type === "return" ? (this.rval = this.arg = P.arg, this.method = "return", this.next = "end") : P.type === "normal" && M && (this.next = M), h
        },
        finish: function(P) {
            for (var M = this.tryEntries.length - 1; M >= 0; --M) {
                var R = this.tryEntries[M];
                if (R.finallyLoc === P) return this.complete(R.completion, R.afterLoc), k(R), h
            }
        },
        catch: function(P) {
            for (var M = this.tryEntries.length - 1; M >= 0; --M) {
                var R = this.tryEntries[M];
                if (R.tryLoc === P) {
                    var V = R.completion;
                    if (V.type === "throw") {
                        var I = V.arg;
                        k(R)
                    }
                    return I
                }
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function(P, M, R) {
            return this.delegate = {
                iterator: L(P),
                resultName: M,
                nextLoc: R
            }, this.method === "next" && (this.arg = void 0), h
        }
    }, o
}

function Wc(o, e, t, r, i, n, s) {
    try {
        var a = o[n](s),
            c = a.value
    } catch (l) {
        t(l);
        return
    }
    a.done ? e(c) : Promise.resolve(c).then(r, i)
}

function Yi(o) {
    return function() {
        var e = this,
            t = arguments;
        return new Promise(function(r, i) {
            var n = o.apply(e, t);

            function s(c) {
                Wc(n, r, i, s, a, "next", c)
            }

            function a(c) {
                Wc(n, r, i, s, a, "throw", c)
            }
            s(void 0)
        })
    }
}

function dd(o, e) {
    if (!(o instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function Hc(o, e) {
    for (var t = 0; t < e.length; t++) {
        var r = e[t];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(o, _d(r.key), r)
    }
}

function pd(o, e, t) {
    return e && Hc(o.prototype, e), t && Hc(o, t), Object.defineProperty(o, "prototype", {
        writable: !1
    }), o
}

function Fs(o, e, t) {
    return e = _d(e), e in o ? Object.defineProperty(o, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[e] = t, o
}

function S0(o, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    o.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: o,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(o, "prototype", {
        writable: !1
    }), e && jo(o, e)
}

function Go(o) {
    return Go = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    }, Go(o)
}

function jo(o, e) {
    return jo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i, r
    }, jo(o, e)
}

function gd() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Is(o, e, t) {
    return gd() ? Is = Reflect.construct.bind() : Is = function(i, n, s) {
        var a = [null];
        a.push.apply(a, n);
        var c = Function.bind.apply(i, a),
            l = new c;
        return s && jo(l, s.prototype), l
    }, Is.apply(null, arguments)
}

function P0(o) {
    return Function.toString.call(o).indexOf("[native code]") !== -1
}

function Al(o) {
    var e = typeof Map == "function" ? new Map : void 0;
    return Al = function(r) {
        if (r === null || !P0(r)) return r;
        if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof e < "u") {
            if (e.has(r)) return e.get(r);
            e.set(r, i)
        }

        function i() {
            return Is(r, arguments, Go(this).constructor)
        }
        return i.prototype = Object.create(r.prototype, {
            constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), jo(i, r)
    }, Al(o)
}

function $s(o) {
    if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o
}

function M0(o, e) {
    if (e && (typeof e == "object" || typeof e == "function")) return e;
    if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $s(o)
}

function E0(o) {
    var e = gd();
    return function() {
        var r = Go(o),
            i;
        if (e) {
            var n = Go(this).constructor;
            i = Reflect.construct(r, arguments, n)
        } else i = r.apply(this, arguments);
        return M0(this, i)
    }
}

function C0(o, e) {
    if (typeof o != "object" || o === null) return o;
    var t = o[Symbol.toPrimitive];
    if (t !== void 0) {
        var r = t.call(o, e || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(o)
}

function _d(o) {
    var e = C0(o, "string");
    return typeof e == "symbol" ? e : String(e)
}
var md = typeof global < "u" && {}.toString.call(global) === "[object global]";

function Gc(o, e) {
    return o.indexOf(e.toLowerCase()) === 0 ? o : "".concat(e.toLowerCase()).concat(o.substr(0, 1).toUpperCase()).concat(o.substr(1))
}

function O0(o) {
    return !!(o && o.nodeType === 1 && "nodeName" in o && o.ownerDocument && o.ownerDocument.defaultView)
}

function D0(o) {
    return !isNaN(parseFloat(o)) && isFinite(o) && Math.floor(o) == o
}

function un(o) {
    return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(o)
}

function yd(o) {
    var e = /^https:\/\/player\.vimeo\.com\/video\/\d+/;
    return e.test(o)
}

function vd() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        e = o.id,
        t = o.url,
        r = e || t;
    if (!r) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
    if (D0(r)) return "https://vimeo.com/".concat(r);
    if (un(r)) return r.replace("http:", "https:");
    throw e ? new TypeError("“".concat(e, "” is not a valid video id.")) : new TypeError("“".concat(r, "” is not a vimeo.com url."))
}
var jc = function(e, t, r) {
        var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "addEventListener",
            n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "removeEventListener",
            s = typeof t == "string" ? [t] : t;
        return s.forEach(function(a) {
            e[i](a, r)
        }), {
            cancel: function() {
                return s.forEach(function(c) {
                    return e[n](c, r)
                })
            }
        }
    },
    A0 = typeof Array.prototype.indexOf < "u",
    L0 = typeof window < "u" && typeof window.postMessage < "u";
if (!md && (!A0 || !L0)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
var Nn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function R0(o, e) {
    return e = {
        exports: {}
    }, o(e, e.exports), e.exports
}
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
(function(o) {
    if (o.WeakMap) return;
    var e = Object.prototype.hasOwnProperty,
        t = Object.defineProperty && function() {
            try {
                return Object.defineProperty({}, "x", {
                    value: 1
                }).x === 1
            } catch {}
        }(),
        r = function(n, s, a) {
            t ? Object.defineProperty(n, s, {
                configurable: !0,
                writable: !0,
                value: a
            }) : n[s] = a
        };
    o.WeakMap = function() {
        function n() {
            if (this === void 0) throw new TypeError("Constructor WeakMap requires 'new'");
            if (r(this, "_id", a("_WeakMap")), arguments.length > 0) throw new TypeError("WeakMap iterable is not supported")
        }
        r(n.prototype, "delete", function(l) {
            if (s(this, "delete"), !i(l)) return !1;
            var f = l[this._id];
            return f && f[0] === l ? (delete l[this._id], !0) : !1
        }), r(n.prototype, "get", function(l) {
            if (s(this, "get"), !!i(l)) {
                var f = l[this._id];
                if (f && f[0] === l) return f[1]
            }
        }), r(n.prototype, "has", function(l) {
            if (s(this, "has"), !i(l)) return !1;
            var f = l[this._id];
            return !!(f && f[0] === l)
        }), r(n.prototype, "set", function(l, f) {
            if (s(this, "set"), !i(l)) throw new TypeError("Invalid value used as weak map key");
            var h = l[this._id];
            return h && h[0] === l ? (h[1] = f, this) : (r(l, this._id, [l, f]), this)
        });

        function s(l, f) {
            if (!i(l) || !e.call(l, "_id")) throw new TypeError(f + " method called on incompatible receiver " + typeof l)
        }

        function a(l) {
            return l + "_" + c() + "." + c()
        }

        function c() {
            return Math.random().toString().substring(2)
        }
        return r(n, "_polyfill", !0), n
    }();

    function i(n) {
        return Object(n) === n
    }
})(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Nn);
var xr = R0(function(o) {
        /*! Native Promise Only
            v0.8.1 (c) Kyle Simpson
            MIT License: http://getify.mit-license.org
        */
        (function(t, r, i) {
            r[t] = r[t] || i(), o.exports && (o.exports = r[t])
        })("Promise", Nn, function() {
            var t, r, i, n = Object.prototype.toString,
                s = typeof setImmediate < "u" ? function(w) {
                    return setImmediate(w)
                } : setTimeout;
            try {
                Object.defineProperty({}, "x", {}), t = function(w, v, y, x) {
                    return Object.defineProperty(w, v, {
                        value: y,
                        writable: !0,
                        configurable: x !== !1
                    })
                }
            } catch {
                t = function(v, y, x) {
                    return v[y] = x, v
                }
            }
            i = function() {
                var w, v, y;

                function x(T, k) {
                    this.fn = T, this.self = k, this.next = void 0
                }
                return {
                    add: function(k, O) {
                        y = new x(k, O), v ? v.next = y : w = y, v = y, y = void 0
                    },
                    drain: function() {
                        var k = w;
                        for (w = v = r = void 0; k;) k.fn.call(k.self), k = k.next
                    }
                }
            }();

            function a(m, w) {
                i.add(m, w), r || (r = s(i.drain))
            }

            function c(m) {
                var w, v = typeof m;
                return m != null && (v == "object" || v == "function") && (w = m.then), typeof w == "function" ? w : !1
            }

            function l() {
                for (var m = 0; m < this.chain.length; m++) f(this, this.state === 1 ? this.chain[m].success : this.chain[m].failure, this.chain[m]);
                this.chain.length = 0
            }

            function f(m, w, v) {
                var y, x;
                try {
                    w === !1 ? v.reject(m.msg) : (w === !0 ? y = m.msg : y = w.call(void 0, m.msg), y === v.promise ? v.reject(TypeError("Promise-chain cycle")) : (x = c(y)) ? x.call(y, v.resolve, v.reject) : v.resolve(y))
                } catch (T) {
                    v.reject(T)
                }
            }

            function h(m) {
                var w, v = this;
                if (!v.triggered) {
                    v.triggered = !0, v.def && (v = v.def);
                    try {
                        (w = c(m)) ? a(function() {
                            var y = new g(v);
                            try {
                                w.call(m, function() {
                                    h.apply(y, arguments)
                                }, function() {
                                    d.apply(y, arguments)
                                })
                            } catch (x) {
                                d.call(y, x)
                            }
                        }): (v.msg = m, v.state = 1, v.chain.length > 0 && a(l, v))
                    } catch (y) {
                        d.call(new g(v), y)
                    }
                }
            }

            function d(m) {
                var w = this;
                w.triggered || (w.triggered = !0, w.def && (w = w.def), w.msg = m, w.state = 2, w.chain.length > 0 && a(l, w))
            }

            function u(m, w, v, y) {
                for (var x = 0; x < w.length; x++)(function(k) {
                    m.resolve(w[k]).then(function(L) {
                        v(k, L)
                    }, y)
                })(x)
            }

            function g(m) {
                this.def = m, this.triggered = !1
            }

            function p(m) {
                this.promise = m, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
            }

            function _(m) {
                if (typeof m != "function") throw TypeError("Not a function");
                if (this.__NPO__ !== 0) throw TypeError("Not a promise");
                this.__NPO__ = 1;
                var w = new p(this);
                this.then = function(y, x) {
                    var T = {
                        success: typeof y == "function" ? y : !0,
                        failure: typeof x == "function" ? x : !1
                    };
                    return T.promise = new this.constructor(function(O, L) {
                        if (typeof O != "function" || typeof L != "function") throw TypeError("Not a function");
                        T.resolve = O, T.reject = L
                    }), w.chain.push(T), w.state !== 0 && a(l, w), T.promise
                }, this.catch = function(y) {
                    return this.then(void 0, y)
                };
                try {
                    m.call(void 0, function(y) {
                        h.call(w, y)
                    }, function(y) {
                        d.call(w, y)
                    })
                } catch (v) {
                    d.call(w, v)
                }
            }
            var b = t({}, "constructor", _, !1);
            return _.prototype = b, t(b, "__NPO__", 0, !1), t(_, "resolve", function(w) {
                var v = this;
                return w && typeof w == "object" && w.__NPO__ === 1 ? w : new v(function(x, T) {
                    if (typeof x != "function" || typeof T != "function") throw TypeError("Not a function");
                    x(w)
                })
            }), t(_, "reject", function(w) {
                return new this(function(y, x) {
                    if (typeof y != "function" || typeof x != "function") throw TypeError("Not a function");
                    x(w)
                })
            }), t(_, "all", function(w) {
                var v = this;
                return n.call(w) != "[object Array]" ? v.reject(TypeError("Not an array")) : w.length === 0 ? v.resolve([]) : new v(function(x, T) {
                    if (typeof x != "function" || typeof T != "function") throw TypeError("Not a function");
                    var k = w.length,
                        O = Array(k),
                        L = 0;
                    u(v, w, function(P, M) {
                        O[P] = M, ++L === k && x(O)
                    }, T)
                })
            }), t(_, "race", function(w) {
                var v = this;
                return n.call(w) != "[object Array]" ? v.reject(TypeError("Not an array")) : new v(function(x, T) {
                    if (typeof x != "function" || typeof T != "function") throw TypeError("Not a function");
                    u(v, w, function(O, L) {
                        x(L)
                    }, T)
                })
            }), _
        })
    }),
    ni = new WeakMap;

function Qn(o, e, t) {
    var r = ni.get(o.element) || {};
    e in r || (r[e] = []), r[e].push(t), ni.set(o.element, r)
}

function ia(o, e) {
    var t = ni.get(o.element) || {};
    return t[e] || []
}

function na(o, e, t) {
    var r = ni.get(o.element) || {};
    if (!r[e]) return !0;
    if (!t) return r[e] = [], ni.set(o.element, r), !0;
    var i = r[e].indexOf(t);
    return i !== -1 && r[e].splice(i, 1), ni.set(o.element, r), r[e] && r[e].length === 0
}

function N0(o, e) {
    var t = ia(o, e);
    if (t.length < 1) return !1;
    var r = t.shift();
    return na(o, e, r), r
}

function F0(o, e) {
    var t = ni.get(o);
    ni.set(e, t), ni.delete(o)
}

function ca(o) {
    if (typeof o == "string") try {
        o = JSON.parse(o)
    } catch (e) {
        return console.warn(e), {}
    }
    return o
}

function Ni(o, e, t) {
    if (!(!o.element.contentWindow || !o.element.contentWindow.postMessage)) {
        var r = {
            method: e
        };
        t !== void 0 && (r.value = t);
        var i = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
        i >= 8 && i < 10 && (r = JSON.stringify(r)), o.element.contentWindow.postMessage(r, o.origin)
    }
}

function I0(o, e) {
    e = ca(e);
    var t = [],
        r;
    if (e.event) {
        if (e.event === "error") {
            var i = ia(o, e.data.method);
            i.forEach(function(s) {
                var a = new Error(e.data.message);
                a.name = e.data.name, s.reject(a), na(o, e.data.method, s)
            })
        }
        t = ia(o, "event:".concat(e.event)), r = e.data
    } else if (e.method) {
        var n = N0(o, e.method);
        n && (t.push(n), r = e.value)
    }
    t.forEach(function(s) {
        try {
            if (typeof s == "function") {
                s.call(o, r);
                return
            }
            s.resolve(r)
        } catch {}
    })
}
var $0 = ["autopause", "autoplay", "background", "byline", "color", "colors", "controls", "dnt", "height", "id", "interactive_params", "keyboard", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];

function wd(o) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return $0.reduce(function(t, r) {
        var i = o.getAttribute("data-vimeo-".concat(r));
        return (i || i === "") && (t[r] = i === "" ? 1 : i), t
    }, e)
}

function _u(o, e) {
    var t = o.html;
    if (!e) throw new TypeError("An element must be provided");
    if (e.getAttribute("data-vimeo-initialized") !== null) return e.querySelector("iframe");
    var r = document.createElement("div");
    return r.innerHTML = t, e.appendChild(r.firstChild), e.setAttribute("data-vimeo-initialized", "true"), e.querySelector("iframe")
}

function bd(o) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        t = arguments.length > 2 ? arguments[2] : void 0;
    return new Promise(function(r, i) {
        if (!un(o)) throw new TypeError("“".concat(o, "” is not a vimeo.com url."));
        var n = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(o));
        for (var s in e) e.hasOwnProperty(s) && (n += "&".concat(s, "=").concat(encodeURIComponent(e[s])));
        var a = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
        a.open("GET", n, !0), a.onload = function() {
            if (a.status === 404) {
                i(new Error("“".concat(o, "” was not found.")));
                return
            }
            if (a.status === 403) {
                i(new Error("“".concat(o, "” is not embeddable.")));
                return
            }
            try {
                var c = JSON.parse(a.responseText);
                if (c.domain_status_code === 403) {
                    _u(c, t), i(new Error("“".concat(o, "” is not embeddable.")));
                    return
                }
                r(c)
            } catch (l) {
                i(l)
            }
        }, a.onerror = function() {
            var c = a.status ? " (".concat(a.status, ")") : "";
            i(new Error("There was an error fetching the embed code from Vimeo".concat(c, ".")))
        }, a.send()
    })
}

function B0() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document,
        e = [].slice.call(o.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
        t = function(i) {
            "console" in window && console.error && console.error("There was an error creating an embed: ".concat(i))
        };
    e.forEach(function(r) {
        try {
            if (r.getAttribute("data-vimeo-defer") !== null) return;
            var i = wd(r),
                n = vd(i);
            bd(n, i, r).then(function(s) {
                return _u(s, r)
            }).catch(t)
        } catch (s) {
            t(s)
        }
    })
}

function z0() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoPlayerResizeEmbeds_) {
        window.VimeoPlayerResizeEmbeds_ = !0;
        var e = function(r) {
            if (un(r.origin) && !(!r.data || r.data.event !== "spacechange")) {
                for (var i = o.querySelectorAll("iframe"), n = 0; n < i.length; n++)
                    if (i[n].contentWindow === r.source) {
                        var s = i[n].parentElement;
                        s.style.paddingBottom = "".concat(r.data.data[0].bottom, "px");
                        break
                    }
            }
        };
        window.addEventListener("message", e)
    }
}

function Y0() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoSeoMetadataAppended) {
        window.VimeoSeoMetadataAppended = !0;
        var e = function(r) {
            if (un(r.origin)) {
                var i = ca(r.data);
                if (!(!i || i.event !== "ready"))
                    for (var n = o.querySelectorAll("iframe"), s = 0; s < n.length; s++) {
                        var a = n[s],
                            c = a.contentWindow === r.source;
                        if (yd(a.src) && c) {
                            var l = new mu(a);
                            l.callMethod("appendVideoMetadata", window.location.href)
                        }
                    }
            }
        };
        window.addEventListener("message", e)
    }
}

function X0() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoCheckedUrlTimeParam) {
        window.VimeoCheckedUrlTimeParam = !0;
        var e = function(i) {
                "console" in window && console.error && console.error("There was an error getting video Id: ".concat(i))
            },
            t = function(i) {
                if (un(i.origin)) {
                    var n = ca(i.data);
                    if (!(!n || n.event !== "ready"))
                        for (var s = o.querySelectorAll("iframe"), a = function() {
                                var f = s[c],
                                    h = f.contentWindow === i.source;
                                if (yd(f.src) && h) {
                                    var d = new mu(f);
                                    d.getVideoId().then(function(u) {
                                        var g = new RegExp("[?&]vimeo_t_".concat(u, "=([^&#]*)")).exec(window.location.href);
                                        if (g && g[1]) {
                                            var p = decodeURI(g[1]);
                                            d.setCurrentTime(p)
                                        }
                                    }).catch(e)
                                }
                            }, c = 0; c < s.length; c++) a()
                }
            };
        window.addEventListener("message", t)
    }
}

function V0() {
    var o = function() {
            for (var r, i = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ], n = 0, s = i.length, a = {}; n < s; n++)
                if (r = i[n], r && r[1] in document) {
                    for (n = 0; n < r.length; n++) a[i[0][n]] = r[n];
                    return a
                }
            return !1
        }(),
        e = {
            fullscreenchange: o.fullscreenchange,
            fullscreenerror: o.fullscreenerror
        },
        t = {
            request: function(i) {
                return new Promise(function(n, s) {
                    var a = function l() {
                        t.off("fullscreenchange", l), n()
                    };
                    t.on("fullscreenchange", a), i = i || document.documentElement;
                    var c = i[o.requestFullscreen]();
                    c instanceof Promise && c.then(a).catch(s)
                })
            },
            exit: function() {
                return new Promise(function(i, n) {
                    if (!t.isFullscreen) {
                        i();
                        return
                    }
                    var s = function c() {
                        t.off("fullscreenchange", c), i()
                    };
                    t.on("fullscreenchange", s);
                    var a = document[o.exitFullscreen]();
                    a instanceof Promise && a.then(s).catch(n)
                })
            },
            on: function(i, n) {
                var s = e[i];
                s && document.addEventListener(s, n)
            },
            off: function(i, n) {
                var s = e[i];
                s && document.removeEventListener(s, n)
            }
        };
    return Object.defineProperties(t, {
        isFullscreen: {
            get: function() {
                return !!document[o.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return document[o.fullscreenElement]
            }
        },
        isEnabled: {
            enumerable: !0,
            get: function() {
                return !!document[o.fullscreenEnabled]
            }
        }
    }), t
}
var q0 = {
        role: "viewer",
        autoPlayMuted: !0,
        allowedDrift: .3,
        maxAllowedDrift: 1,
        minCheckInterval: .1,
        maxRateAdjustment: .2,
        maxTimeToCatchUp: 1
    },
    W0 = function(o) {
        S0(t, o);
        var e = E0(t);

        function t(r, i) {
            var n, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                a = arguments.length > 3 ? arguments[3] : void 0;
            return dd(this, t), n = e.call(this), Fs($s(n), "logger", void 0), Fs($s(n), "speedAdjustment", 0), Fs($s(n), "adjustSpeed", function() {
                var c = Yi(Xt().mark(function l(f, h) {
                    var d;
                    return Xt().wrap(function(g) {
                        for (;;) switch (g.prev = g.next) {
                            case 0:
                                if (n.speedAdjustment !== h) {
                                    g.next = 2;
                                    break
                                }
                                return g.abrupt("return");
                            case 2:
                                return g.next = 4, f.getPlaybackRate();
                            case 4:
                                return g.t0 = g.sent, g.t1 = n.speedAdjustment, g.t2 = g.t0 - g.t1, g.t3 = h, d = g.t2 + g.t3, n.log("New playbackRate:  ".concat(d)), g.next = 12, f.setPlaybackRate(d);
                            case 12:
                                n.speedAdjustment = h;
                            case 13:
                            case "end":
                                return g.stop()
                        }
                    }, l)
                }));
                return function(l, f) {
                    return c.apply(this, arguments)
                }
            }()), n.logger = a, n.init(i, r, qc(qc({}, q0), s)), n
        }
        return pd(t, [{
            key: "disconnect",
            value: function() {
                this.dispatchEvent(new Event("disconnect"))
            }
        }, {
            key: "init",
            value: function() {
                var r = Yi(Xt().mark(function n(s, a, c) {
                    var l = this,
                        f, h, d;
                    return Xt().wrap(function(g) {
                        for (;;) switch (g.prev = g.next) {
                            case 0:
                                return g.next = 2, this.waitForTOReadyState(s, "open");
                            case 2:
                                if (c.role !== "viewer") {
                                    g.next = 10;
                                    break
                                }
                                return g.next = 5, this.updatePlayer(s, a, c);
                            case 5:
                                f = jc(s, "change", function() {
                                    return l.updatePlayer(s, a, c)
                                }), h = this.maintainPlaybackPosition(s, a, c), this.addEventListener("disconnect", function() {
                                    h.cancel(), f.cancel()
                                }), g.next = 14;
                                break;
                            case 10:
                                return g.next = 12, this.updateTimingObject(s, a);
                            case 12:
                                d = jc(a, ["seeked", "play", "pause", "ratechange"], function() {
                                    return l.updateTimingObject(s, a)
                                }, "on", "off"), this.addEventListener("disconnect", function() {
                                    return d.cancel()
                                });
                            case 14:
                            case "end":
                                return g.stop()
                        }
                    }, n, this)
                }));

                function i(n, s, a) {
                    return r.apply(this, arguments)
                }
                return i
            }()
        }, {
            key: "updateTimingObject",
            value: function() {
                var r = Yi(Xt().mark(function n(s, a) {
                    return Xt().wrap(function(l) {
                        for (;;) switch (l.prev = l.next) {
                            case 0:
                                return l.t0 = s, l.next = 3, a.getCurrentTime();
                            case 3:
                                return l.t1 = l.sent, l.next = 6, a.getPaused();
                            case 6:
                                if (!l.sent) {
                                    l.next = 10;
                                    break
                                }
                                l.t2 = 0, l.next = 13;
                                break;
                            case 10:
                                return l.next = 12, a.getPlaybackRate();
                            case 12:
                                l.t2 = l.sent;
                            case 13:
                                l.t3 = l.t2, l.t4 = {
                                    position: l.t1,
                                    velocity: l.t3
                                }, l.t0.update.call(l.t0, l.t4);
                            case 16:
                            case "end":
                                return l.stop()
                        }
                    }, n)
                }));

                function i(n, s) {
                    return r.apply(this, arguments)
                }
                return i
            }()
        }, {
            key: "updatePlayer",
            value: function() {
                var r = Yi(Xt().mark(function n(s, a, c) {
                    var l, f, h;
                    return Xt().wrap(function(u) {
                        for (;;) switch (u.prev = u.next) {
                            case 0:
                                if (l = s.query(), f = l.position, h = l.velocity, typeof f == "number" && a.setCurrentTime(f), typeof h != "number") {
                                    u.next = 25;
                                    break
                                }
                                if (h !== 0) {
                                    u.next = 11;
                                    break
                                }
                                return u.next = 6, a.getPaused();
                            case 6:
                                if (u.t0 = u.sent, u.t0 !== !1) {
                                    u.next = 9;
                                    break
                                }
                                a.pause();
                            case 9:
                                u.next = 25;
                                break;
                            case 11:
                                if (!(h > 0)) {
                                    u.next = 25;
                                    break
                                }
                                return u.next = 14, a.getPaused();
                            case 14:
                                if (u.t1 = u.sent, u.t1 !== !0) {
                                    u.next = 19;
                                    break
                                }
                                return u.next = 18, a.play().catch(function() {
                                    var g = Yi(Xt().mark(function p(_) {
                                        return Xt().wrap(function(m) {
                                            for (;;) switch (m.prev = m.next) {
                                                case 0:
                                                    if (!(_.name === "NotAllowedError" && c.autoPlayMuted)) {
                                                        m.next = 5;
                                                        break
                                                    }
                                                    return m.next = 3, a.setMuted(!0);
                                                case 3:
                                                    return m.next = 5, a.play().catch(function(w) {
                                                        return console.error("Couldn't play the video from TimingSrcConnector. Error:", w)
                                                    });
                                                case 5:
                                                case "end":
                                                    return m.stop()
                                            }
                                        }, p)
                                    }));
                                    return function(p) {
                                        return g.apply(this, arguments)
                                    }
                                }());
                            case 18:
                                this.updatePlayer(s, a, c);
                            case 19:
                                return u.next = 21, a.getPlaybackRate();
                            case 21:
                                if (u.t2 = u.sent, u.t3 = h, u.t2 === u.t3) {
                                    u.next = 25;
                                    break
                                }
                                a.setPlaybackRate(h);
                            case 25:
                            case "end":
                                return u.stop()
                        }
                    }, n, this)
                }));

                function i(n, s, a) {
                    return r.apply(this, arguments)
                }
                return i
            }()
        }, {
            key: "maintainPlaybackPosition",
            value: function(i, n, s) {
                var a = this,
                    c = s.allowedDrift,
                    l = s.maxAllowedDrift,
                    f = s.minCheckInterval,
                    h = s.maxRateAdjustment,
                    d = s.maxTimeToCatchUp,
                    u = Math.min(d, Math.max(f, l)) * 1e3,
                    g = function() {
                        var _ = Yi(Xt().mark(function b() {
                            var m, w, v, y, x;
                            return Xt().wrap(function(k) {
                                for (;;) switch (k.prev = k.next) {
                                    case 0:
                                        if (k.t0 = i.query().velocity === 0, k.t0) {
                                            k.next = 6;
                                            break
                                        }
                                        return k.next = 4, n.getPaused();
                                    case 4:
                                        k.t1 = k.sent, k.t0 = k.t1 === !0;
                                    case 6:
                                        if (!k.t0) {
                                            k.next = 8;
                                            break
                                        }
                                        return k.abrupt("return");
                                    case 8:
                                        return k.t2 = i.query().position, k.next = 11, n.getCurrentTime();
                                    case 11:
                                        if (k.t3 = k.sent, m = k.t2 - k.t3, w = Math.abs(m), a.log("Drift: ".concat(m)), !(w > l)) {
                                            k.next = 22;
                                            break
                                        }
                                        return k.next = 18, a.adjustSpeed(n, 0);
                                    case 18:
                                        n.setCurrentTime(i.query().position), a.log("Resync by currentTime"), k.next = 29;
                                        break;
                                    case 22:
                                        if (!(w > c)) {
                                            k.next = 29;
                                            break
                                        }
                                        return v = w / d, y = h, x = v < y ? (y - v) / 2 : y, k.next = 28, a.adjustSpeed(n, x * Math.sign(m));
                                    case 28:
                                        a.log("Resync by playbackRate");
                                    case 29:
                                    case "end":
                                        return k.stop()
                                }
                            }, b)
                        }));
                        return function() {
                            return _.apply(this, arguments)
                        }
                    }(),
                    p = setInterval(function() {
                        return g()
                    }, u);
                return {
                    cancel: function() {
                        return clearInterval(p)
                    }
                }
            }
        }, {
            key: "log",
            value: function(i) {
                var n;
                (n = this.logger) === null || n === void 0 || n.call(this, "TimingSrcConnector: ".concat(i))
            }
        }, {
            key: "waitForTOReadyState",
            value: function(i, n) {
                return new Promise(function(s) {
                    var a = function c() {
                        i.readyState === n ? s() : i.addEventListener("readystatechange", c, {
                            once: !0
                        })
                    };
                    a()
                })
            }
        }]), t
    }(Al(EventTarget)),
    _n = new WeakMap,
    Ia = new WeakMap,
    Ut = {},
    mu = function() {
        function o(e) {
            var t = this,
                r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (dd(this, o), window.jQuery && e instanceof jQuery && (e.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), e = e[0]), typeof document < "u" && typeof e == "string" && (e = document.getElementById(e)), !O0(e)) throw new TypeError("You must pass either a valid element or a valid id.");
            if (e.nodeName !== "IFRAME") {
                var i = e.querySelector("iframe");
                i && (e = i)
            }
            if (e.nodeName === "IFRAME" && !un(e.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
            if (_n.has(e)) return _n.get(e);
            this._window = e.ownerDocument.defaultView, this.element = e, this.origin = "*";
            var n = new xr(function(a, c) {
                if (t._onMessage = function(h) {
                        if (!(!un(h.origin) || t.element.contentWindow !== h.source)) {
                            t.origin === "*" && (t.origin = h.origin);
                            var d = ca(h.data),
                                u = d && d.event === "error",
                                g = u && d.data && d.data.method === "ready";
                            if (g) {
                                var p = new Error(d.data.message);
                                p.name = d.data.name, c(p);
                                return
                            }
                            var _ = d && d.event === "ready",
                                b = d && d.method === "ping";
                            if (_ || b) {
                                t.element.setAttribute("data-ready", "true"), a();
                                return
                            }
                            I0(t, d)
                        }
                    }, t._window.addEventListener("message", t._onMessage), t.element.nodeName !== "IFRAME") {
                    var l = wd(e, r),
                        f = vd(l);
                    bd(f, l, e).then(function(h) {
                        var d = _u(h, e);
                        return t.element = d, t._originalElement = e, F0(e, d), _n.set(t.element, t), h
                    }).catch(c)
                }
            });
            if (Ia.set(this, n), _n.set(this.element, this), this.element.nodeName === "IFRAME" && Ni(this, "ping"), Ut.isEnabled) {
                var s = function() {
                    return Ut.exit()
                };
                this.fullscreenchangeHandler = function() {
                    Ut.isFullscreen ? Qn(t, "event:exitFullscreen", s) : na(t, "event:exitFullscreen", s), t.ready().then(function() {
                        Ni(t, "fullscreenchange", Ut.isFullscreen)
                    })
                }, Ut.on("fullscreenchange", this.fullscreenchangeHandler)
            }
            return this
        }
        return pd(o, [{
            key: "callMethod",
            value: function(t) {
                var r = this,
                    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return new xr(function(n, s) {
                    return r.ready().then(function() {
                        Qn(r, t, {
                            resolve: n,
                            reject: s
                        }), Ni(r, t, i)
                    }).catch(s)
                })
            }
        }, {
            key: "get",
            value: function(t) {
                var r = this;
                return new xr(function(i, n) {
                    return t = Gc(t, "get"), r.ready().then(function() {
                        Qn(r, t, {
                            resolve: i,
                            reject: n
                        }), Ni(r, t)
                    }).catch(n)
                })
            }
        }, {
            key: "set",
            value: function(t, r) {
                var i = this;
                return new xr(function(n, s) {
                    if (t = Gc(t, "set"), r == null) throw new TypeError("There must be a value to set.");
                    return i.ready().then(function() {
                        Qn(i, t, {
                            resolve: n,
                            reject: s
                        }), Ni(i, t, r)
                    }).catch(s)
                })
            }
        }, {
            key: "on",
            value: function(t, r) {
                if (!t) throw new TypeError("You must pass an event name.");
                if (!r) throw new TypeError("You must pass a callback function.");
                if (typeof r != "function") throw new TypeError("The callback must be a function.");
                var i = ia(this, "event:".concat(t));
                i.length === 0 && this.callMethod("addEventListener", t).catch(function() {}), Qn(this, "event:".concat(t), r)
            }
        }, {
            key: "off",
            value: function(t, r) {
                if (!t) throw new TypeError("You must pass an event name.");
                if (r && typeof r != "function") throw new TypeError("The callback must be a function.");
                var i = na(this, "event:".concat(t), r);
                i && this.callMethod("removeEventListener", t).catch(function(n) {})
            }
        }, {
            key: "loadVideo",
            value: function(t) {
                return this.callMethod("loadVideo", t)
            }
        }, {
            key: "ready",
            value: function() {
                var t = Ia.get(this) || new xr(function(r, i) {
                    i(new Error("Unknown player. Probably unloaded."))
                });
                return xr.resolve(t)
            }
        }, {
            key: "addCuePoint",
            value: function(t) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return this.callMethod("addCuePoint", {
                    time: t,
                    data: r
                })
            }
        }, {
            key: "removeCuePoint",
            value: function(t) {
                return this.callMethod("removeCuePoint", t)
            }
        }, {
            key: "enableTextTrack",
            value: function(t, r) {
                if (!t) throw new TypeError("You must pass a language.");
                return this.callMethod("enableTextTrack", {
                    language: t,
                    kind: r
                })
            }
        }, {
            key: "disableTextTrack",
            value: function() {
                return this.callMethod("disableTextTrack")
            }
        }, {
            key: "pause",
            value: function() {
                return this.callMethod("pause")
            }
        }, {
            key: "play",
            value: function() {
                return this.callMethod("play")
            }
        }, {
            key: "requestFullscreen",
            value: function() {
                return Ut.isEnabled ? Ut.request(this.element) : this.callMethod("requestFullscreen")
            }
        }, {
            key: "exitFullscreen",
            value: function() {
                return Ut.isEnabled ? Ut.exit() : this.callMethod("exitFullscreen")
            }
        }, {
            key: "getFullscreen",
            value: function() {
                return Ut.isEnabled ? xr.resolve(Ut.isFullscreen) : this.get("fullscreen")
            }
        }, {
            key: "requestPictureInPicture",
            value: function() {
                return this.callMethod("requestPictureInPicture")
            }
        }, {
            key: "exitPictureInPicture",
            value: function() {
                return this.callMethod("exitPictureInPicture")
            }
        }, {
            key: "getPictureInPicture",
            value: function() {
                return this.get("pictureInPicture")
            }
        }, {
            key: "remotePlaybackPrompt",
            value: function() {
                return this.callMethod("remotePlaybackPrompt")
            }
        }, {
            key: "unload",
            value: function() {
                return this.callMethod("unload")
            }
        }, {
            key: "destroy",
            value: function() {
                var t = this;
                return new xr(function(r) {
                    if (Ia.delete(t), _n.delete(t.element), t._originalElement && (_n.delete(t._originalElement), t._originalElement.removeAttribute("data-vimeo-initialized")), t.element && t.element.nodeName === "IFRAME" && t.element.parentNode && (t.element.parentNode.parentNode && t._originalElement && t._originalElement !== t.element.parentNode ? t.element.parentNode.parentNode.removeChild(t.element.parentNode) : t.element.parentNode.removeChild(t.element)), t.element && t.element.nodeName === "DIV" && t.element.parentNode) {
                        t.element.removeAttribute("data-vimeo-initialized");
                        var i = t.element.querySelector("iframe");
                        i && i.parentNode && (i.parentNode.parentNode && t._originalElement && t._originalElement !== i.parentNode ? i.parentNode.parentNode.removeChild(i.parentNode) : i.parentNode.removeChild(i))
                    }
                    t._window.removeEventListener("message", t._onMessage), Ut.isEnabled && Ut.off("fullscreenchange", t.fullscreenchangeHandler), r()
                })
            }
        }, {
            key: "getAutopause",
            value: function() {
                return this.get("autopause")
            }
        }, {
            key: "setAutopause",
            value: function(t) {
                return this.set("autopause", t)
            }
        }, {
            key: "getBuffered",
            value: function() {
                return this.get("buffered")
            }
        }, {
            key: "getCameraProps",
            value: function() {
                return this.get("cameraProps")
            }
        }, {
            key: "setCameraProps",
            value: function(t) {
                return this.set("cameraProps", t)
            }
        }, {
            key: "getChapters",
            value: function() {
                return this.get("chapters")
            }
        }, {
            key: "getCurrentChapter",
            value: function() {
                return this.get("currentChapter")
            }
        }, {
            key: "getColor",
            value: function() {
                return this.get("color")
            }
        }, {
            key: "getColors",
            value: function() {
                return xr.all([this.get("colorOne"), this.get("colorTwo"), this.get("colorThree"), this.get("colorFour")])
            }
        }, {
            key: "setColor",
            value: function(t) {
                return this.set("color", t)
            }
        }, {
            key: "setColors",
            value: function(t) {
                if (!Array.isArray(t)) return new xr(function(n, s) {
                    return s(new TypeError("Argument must be an array."))
                });
                var r = new xr(function(n) {
                        return n(null)
                    }),
                    i = [t[0] ? this.set("colorOne", t[0]) : r, t[1] ? this.set("colorTwo", t[1]) : r, t[2] ? this.set("colorThree", t[2]) : r, t[3] ? this.set("colorFour", t[3]) : r];
                return xr.all(i)
            }
        }, {
            key: "getCuePoints",
            value: function() {
                return this.get("cuePoints")
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                return this.get("currentTime")
            }
        }, {
            key: "setCurrentTime",
            value: function(t) {
                return this.set("currentTime", t)
            }
        }, {
            key: "getDuration",
            value: function() {
                return this.get("duration")
            }
        }, {
            key: "getEnded",
            value: function() {
                return this.get("ended")
            }
        }, {
            key: "getLoop",
            value: function() {
                return this.get("loop")
            }
        }, {
            key: "setLoop",
            value: function(t) {
                return this.set("loop", t)
            }
        }, {
            key: "setMuted",
            value: function(t) {
                return this.set("muted", t)
            }
        }, {
            key: "getMuted",
            value: function() {
                return this.get("muted")
            }
        }, {
            key: "getPaused",
            value: function() {
                return this.get("paused")
            }
        }, {
            key: "getPlaybackRate",
            value: function() {
                return this.get("playbackRate")
            }
        }, {
            key: "setPlaybackRate",
            value: function(t) {
                return this.set("playbackRate", t)
            }
        }, {
            key: "getPlayed",
            value: function() {
                return this.get("played")
            }
        }, {
            key: "getQualities",
            value: function() {
                return this.get("qualities")
            }
        }, {
            key: "getQuality",
            value: function() {
                return this.get("quality")
            }
        }, {
            key: "setQuality",
            value: function(t) {
                return this.set("quality", t)
            }
        }, {
            key: "getRemotePlaybackAvailability",
            value: function() {
                return this.get("remotePlaybackAvailability")
            }
        }, {
            key: "getRemotePlaybackState",
            value: function() {
                return this.get("remotePlaybackState")
            }
        }, {
            key: "getSeekable",
            value: function() {
                return this.get("seekable")
            }
        }, {
            key: "getSeeking",
            value: function() {
                return this.get("seeking")
            }
        }, {
            key: "getTextTracks",
            value: function() {
                return this.get("textTracks")
            }
        }, {
            key: "getVideoEmbedCode",
            value: function() {
                return this.get("videoEmbedCode")
            }
        }, {
            key: "getVideoId",
            value: function() {
                return this.get("videoId")
            }
        }, {
            key: "getVideoTitle",
            value: function() {
                return this.get("videoTitle")
            }
        }, {
            key: "getVideoWidth",
            value: function() {
                return this.get("videoWidth")
            }
        }, {
            key: "getVideoHeight",
            value: function() {
                return this.get("videoHeight")
            }
        }, {
            key: "getVideoUrl",
            value: function() {
                return this.get("videoUrl")
            }
        }, {
            key: "getVolume",
            value: function() {
                return this.get("volume")
            }
        }, {
            key: "setVolume",
            value: function(t) {
                return this.set("volume", t)
            }
        }, {
            key: "setTimingSrc",
            value: function() {
                var e = Yi(Xt().mark(function r(i, n) {
                    var s = this,
                        a;
                    return Xt().wrap(function(l) {
                        for (;;) switch (l.prev = l.next) {
                            case 0:
                                if (i) {
                                    l.next = 2;
                                    break
                                }
                                throw new TypeError("A Timing Object must be provided.");
                            case 2:
                                return l.next = 4, this.ready();
                            case 4:
                                return a = new W0(this, i, n), Ni(this, "notifyTimingObjectConnect"), a.addEventListener("disconnect", function() {
                                    return Ni(s, "notifyTimingObjectDisconnect")
                                }), l.abrupt("return", a);
                            case 8:
                            case "end":
                                return l.stop()
                        }
                    }, r, this)
                }));

                function t(r, i) {
                    return e.apply(this, arguments)
                }
                return t
            }()
        }]), o
    }();
md || (Ut = V0(), B0(), z0(), Y0(), X0());
class H0 extends nr {
    init() {
        this.id = this.block.getAttribute("data-id"), this.cover = this.block.classList.contains("video--cover");
        var e = {
            id: this.id,
            background: this.cover
        };
        this.player = new mu(this.block, e), this.cover && Promise.all([this.player.getVideoWidth(), this.player.getVideoHeight()]).then(t => {
            const [r, i] = t;
            this.aspectRatio = r / i, this.updatePosition()
        }), this.updatePosition = this.updatePosition.bind(this)
    }
    initEvents() {
        this.cover && window.addEventListener("resize", this.updatePosition)
    }
    updatePosition() {
        const e = this.block.getBoundingClientRect(),
            t = e.width / e.height;
        t < this.aspectRatio ? (this.player.element.style.width = `${this.aspectRatio/t*100}%`, this.player.element.style.height = "") : (this.player.element.style.height = `${t/this.aspectRatio*100}%`, this.player.element.style.width = "")
    }
}
oe.registerPlugin(ve);
class G0 extends nr {
    init() {
        const e = {
            wrap: this.block,
            braces: this.block.querySelectorAll(".subtitle__brace"),
            label: this.block.querySelectorAll(".subtitle__label")
        };
        this.DOM = e, this.startDelay = Number(this.block.dataset.delay), this.buildOn()
    }
    buildOn() {
        const e = oe.timeline({
            defaults: {
                ease: "power3.out",
                duration: .3
            },
            scrollTrigger: {
                trigger: this.block,
                start: "top 90%",
                once: !0
            }
        });
        oe.set(this.DOM.wrap, {
            autoAlpha: 1
        }), gu(() => {
            e.from(this.DOM.label, {
                opacity: 0,
                duration: .7,
                delay: this.startDelay
            }).from(this.DOM.braces[0], {
                opacity: 0,
                xPercent: 100
            }, "<0.1").from(this.DOM.braces[1], {
                opacity: 0,
                xPercent: -100
            }, "<")
        })
    }
}
oe.registerPlugin(on, pu);
class j0 extends nr {
    init() {
        const e = {
            wrapper: this.block,
            container: this.block.querySelector(".tools-morelinks__main"),
            carousel: this.block.querySelector(".tools-morelinks__items"),
            items: this.block.querySelectorAll(".tools-morelinks__item")
        };
        this.DOM = e, this.initMoreLinks()
    }
    setBounds() {
        on.get(this.DOM.carousel).applyBounds({
            minX: -this.DOM.carousel.offsetWidth + this.DOM.container.offsetWidth + 16,
            maxX: 0
        })
    }
    createCarousel() {
        on.create(this.DOM.carousel, {
            type: "x",
            overshootTolerance: 0,
            inertia: !0,
            maxDuration: .5,
            snap: {
                x: e => {
                    const t = this.DOM.items[0].offsetWidth,
                        r = oe.utils.snap(t, e);
                    return r === 0 ? 0 : r
                }
            }
        }), this.setBounds()
    }
    initMoreLinks() {
        this.DOM.items && (this.createCarousel(), window.addEventListener("resize", this.setBounds.bind(this)))
    }
}
oe.registerPlugin(ve);
class U0 extends nr {
    init() {
        const e = {
            select: this.block.querySelector(".demos__plugins-groups-select"),
            pluginSelects: this.block.querySelectorAll(".demos__plugin-select"),
            plugins: this.block.querySelectorAll(".demos__plugins-groups-plugins"),
            buttons: this.block.querySelectorAll("[data-demos-btn]"),
            demoButton: this.block.querySelector("[data-js=demo-button]"),
            docsButton: this.block.querySelector("[data-js=docs-button]"),
            iframe: this.block.querySelector(".js-demo-iframe")
        };
        this.DOM = e, this.DOM.pluginSelects.forEach(t => this.handlePluginSelect(t)), !(!this.DOM.select || !this.DOM.plugins) && this.handleSelect()
    }
    initEvents() {
        const e = "is-active";
        this.DOM.buttons.forEach(t => {
            t.addEventListener("click", r => {
                this.updateDemo(r.target), this.DOM.buttons.forEach(i => {
                    i.classList.remove(e)
                }), t.classList.add(e)
            })
        })
    }
    handleSelect() {
        const e = this.DOM.plugins[this.DOM.select.value].querySelector("select"),
            t = e.options[e.selectedIndex];
        this.updateDemo(t), this.DOM.select.addEventListener("change", r => {
            this.DOM.plugins.forEach(s => {
                s.classList.remove("demos__plugins-groups-plugins--active")
            }), this.DOM.plugins[this.DOM.select.value].classList.add("demos__plugins-groups-plugins--active");
            const i = this.DOM.plugins[this.DOM.select.value].querySelector("select"),
                n = i.options[i.selectedIndex];
            this.updateDemo(n)
        })
    }
    handlePluginSelect(e) {
        const t = e.options[e.selectedIndex];
        this.updateDemo(t), e.addEventListener("change", r => {
            r.target;
            const i = e.options[e.selectedIndex];
            this.updateDemo(i)
        })
    }
    updateDemo(e) {
        let t = e.dataset.id,
            r = e.dataset.docs;
        this.DOM.iframe.src = `https://codepen.io/GreenSock/debug/${t}`, this.DOM.demoButton.setAttribute("href", `https://codepen.io/GreenSock/pen/${t}`), r && this.DOM.docsButton.setAttribute("href", r)
    }
}
class K0 extends nr {
    init() {
        const e = {
            items: this.block.querySelectorAll(".testimonials__item"),
            controls: this.block.querySelectorAll(".testimonials__control--button"),
            previous: this.block.querySelector(".prev"),
            next: this.block.querySelector(".next")
        };
        this.el = e, this.previousIndex = 0, this.currentIndex = 0, this.controlIndex = 0, this.handleNavigation(), this.navigateToNextSlide = this.navigateToNextSlide.bind(this)
    }
    handleNavigation() {
        this.el.controls.forEach(e => {
            e.addEventListener("click", t => {
                const r = parseInt(t.target.dataset.index);
                this.updateCurrent(r)
            })
        }), this.el.previous.addEventListener("click", () => {
            this.navigateToPreviousSlide()
        }), this.el.next.addEventListener("click", () => {
            this.navigateToNextSlide()
        })
    }
    navigateToPreviousSlide() {
        const e = this.currentIndex > 0 ? this.currentIndex - 1 : this.el.items.length - 1;
        this.updateCurrent(e)
    }
    navigateToNextSlide() {
        const e = this.currentIndex < this.el.items.length - 1 ? this.currentIndex + 1 : 0;
        this.updateCurrent(e)
    }
    updateCurrent(e) {
        this.disableButtons(), this.currentIndex = e, this.handleTestimonialState(), this.transitionOut()
    }
    transitionOut() {
        const e = this.previousIndex,
            r = this.el.items[e],
            i = {
                authorName: r.querySelector(".testimonials__author--name"),
                authorFlair: r.querySelector(".testimonials__author--flair"),
                quote: r.querySelector(".testimonials__quote"),
                image: r.querySelector(".testimonials__image"),
                imageClip: r.querySelector(".tesimonials__image--clip")
            };
        oe.timeline({
            default: {
                ease: "power3.in"
            },
            onComplete: () => {
                this.transitionIn()
            }
        }).to([i.authorName, i.quote], {
            x: -40,
            autoAlpha: 0,
            duration: .3
        }, 0).to(i.image, {
            autoAlpha: 0,
            duration: .3
        }, 0).to(i.authorFlair, {
            scaleX: 0,
            duration: .3
        }, 0)
    }
    transitionIn() {
        const e = this.currentIndex,
            r = this.el.items[e],
            i = {
                authorName: r.querySelector(".testimonials__author--name"),
                authorFlair: r.querySelector(".testimonials__author--flair"),
                quote: r.querySelector(".testimonials__quote"),
                image: r.querySelector(".testimonials__image"),
                imageClip: r.querySelector(".tesimonials__image--clip")
            };
        oe.timeline({
            delay: .1,
            defaults: {
                ease: "power3.out"
            },
            onComplete: () => {
                this.enableButtons()
            }
        }).fromTo(i.image, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            duration: .4
        }).fromTo(i.quote, {
            x: -40,
            autoAlpha: 0
        }, {
            x: 0,
            autoAlpha: 1,
            duration: .4
        }, .05).fromTo(i.authorName, {
            x: -40,
            autoAlpha: 0
        }, {
            x: 0,
            autoAlpha: 1,
            duration: .4
        }, .15).fromTo(i.authorFlair, {
            scaleX: 0
        }, {
            scaleX: 1,
            duration: .4
        }, .15)
    }
    disableButtons() {
        this.el.controls.forEach(e => {
            e.disabled = !0
        }), this.el.previous.disabled = !0, this.el.next.disabled = !0
    }
    enableButtons() {
        this.previousIndex = this.currentIndex, this.el.controls.forEach(e => {
            e.disabled = !1
        }), this.el.previous.disabled = !1, this.el.next.disabled = !1
    }
    handleTestimonialState() {
        const e = this.currentIndex,
            t = this.el.items,
            r = this.el.controls;
        this.el.items.forEach(i => i.classList.remove("testimonials__item--active")), this.el.controls.forEach(i => i.classList.remove("testimonials__control--active")), t[e].classList.add("testimonials__item--active"), r[e].classList.add("testimonials__control--active")
    }
}
oe.registerPlugin(ai);
class Q0 extends nr {
    init() {
        const e = oe.utils.selector(this.block),
            t = {
                block: this.block,
                get: e(".get-gsap-btn__word:first-child"),
                gsap: e(".get-gsap-btn__word:last-child"),
                icons: e(".get-gsap-btn__button svg"),
                circles: e("#btn-circles"),
                windmill: e("#btn-windmill"),
                square: e("#btn-square"),
                star: e("#btn-star")
            };
        this.DOM = t, this.eases = {
            airtime: ai.create("custom", "M0,0 C0.05,0.356 0.377,0.435 0.5,0.5 0.61,0.558 0.948,0.652 1,1 "),
            rotaaaaate: ai.create("custom", "M0,0 C0.148,0.346 0.254,0.444 0.5,0.5 0.751,0.557 0.852,0.646 1,1 ")
        }, this.playing = !1, this.tl = this.createTimeline(), this.playTimeline = this.playTimeline.bind(this)
    }
    initEvents() {
        oe.matchMedia().add("(min-width: 1240px) and (prefers-reduced-motion: no-preference)", () => (this.DOM.block.addEventListener("mouseenter", this.playTimeline), () => {
            this.DOM.block.removeEventListener("mouseenter", this.playTimeline)
        }))
    }
    createTimeline() {
        const e = oe.timeline({
            defaults: {
                duration: 1
            },
            paused: !0,
            onStart: () => {
                this.playing = !0
            },
            onComplete: () => {
                this.playing = !1
            }
        });
        return oe.set([this.DOM.circles, this.DOM.windmill, this.DOM.square, this.DOM.star], {
            scale: 0
        }), e.set([this.DOM.circles, this.DOM.windmill, this.DOM.square, this.DOM.star], {
            scale: 0,
            x: 0,
            y: 10,
            rotateZ: 0
        }).set(this.DOM.icons[0], {
            yPercent: -140
        }).set(this.DOM.icons[1], {
            yPercent: 0
        }).to(this.DOM.get, {
            keyframes: [{
                x: -30,
                ease: "power4.out"
            }, {
                x: 0,
                ease: "power4.in"
            }]
        }).to(this.DOM.gsap, {
            keyframes: [{
                x: 30,
                ease: "power4.out"
            }, {
                x: 0,
                ease: "power4.in"
            }]
        }, "<").to(this.DOM.icons[0], {
            yPercent: 0,
            duration: .6,
            ease: "power3.in"
        }, "<.3").to(this.DOM.icons[1], {
            yPercent: 140,
            duration: .6,
            ease: "power3.out"
        }, "<").to([this.DOM.circles, this.DOM.windmill, this.DOM.square, this.DOM.star], {
            keyframes: [{
                scale: 0,
                zIndex: 2,
                duration: 0
            }, {
                y: () => oe.utils.random(-80, -120),
                scale: 1
            }, {
                zIndex: -1,
                duration: .05
            }, {
                y: 0,
                scale: .3
            }],
            ease: this.eases.airtime,
            stagger: .15
        }, "<").to([this.DOM.circles, this.DOM.windmill, this.DOM.square, this.DOM.star], {
            x: () => oe.utils.random(-50, 100),
            rotateZ: () => -360,
            ease: this.eases.rotaaaaate,
            stagger: .15
        }, "<"), e
    }
    playTimeline() {
        this.playing || this.tl.invalidate().play(0)
    }
}
class Z0 extends nr {
    init() {
        const e = {
            block: this.block,
            video: this.block.querySelector("video")
        };
        this.DOM = e
    }
    initEvents() {
        oe.matchMedia().add("(prefers-reduced-motion: no-preference) and (min-width: 1240px)", () => {
            this.DOM.block.addEventListener("mouseenter", () => {
                this.playVideo()
            }), this.DOM.block.addEventListener("mouseleave", () => {
                this.stopVideo()
            })
        })
    }
    playVideo() {
        this.pauseTimeout && clearTimeout(this.pauseTimeout), this.DOM.video.currentTime = 0, this.DOM.video.play()
    }
    stopVideo() {
        this.pauseTimeout = setTimeout(() => {
            this.DOM.video.pause()
        }, 1e3)
    }
}
oe.registerPlugin(li);
class J0 extends nr {
    init() {
        gu(() => {
            li.create({
                smooth: 1.8,
                effects: !0
            }), document.body.classList.add("has-smooth-scroll")
        })
    }
}

function e_(o, e) {
    for (var t = 0; t < e.length; t++) {
        var r = e[t];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(o, r.key, r)
    }
}

function ws(o) {
    return function(e) {
        if (Array.isArray(e)) return $a(e)
    }(o) || function(e) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e)
    }(o) || function(e, t) {
        if (e) {
            if (typeof e == "string") return $a(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
            if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return $a(e, t)
        }
    }(o) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }()
}

function $a(o, e) {
    (e == null || e > o.length) && (e = o.length);
    for (var t = 0, r = new Array(e); t < e; t++) r[t] = o[t];
    return r
}
var Uc, Ba, Fi, za, Kc, Ll = (Uc = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], Ba = function() {
    function o(r) {
        var i = r.targetModal,
            n = r.triggers,
            s = n === void 0 ? [] : n,
            a = r.onShow,
            c = a === void 0 ? function() {} : a,
            l = r.onClose,
            f = l === void 0 ? function() {} : l,
            h = r.openTrigger,
            d = h === void 0 ? "data-micromodal-trigger" : h,
            u = r.closeTrigger,
            g = u === void 0 ? "data-micromodal-close" : u,
            p = r.openClass,
            _ = p === void 0 ? "is-open" : p,
            b = r.disableScroll,
            m = b !== void 0 && b,
            w = r.disableFocus,
            v = w !== void 0 && w,
            y = r.awaitCloseAnimation,
            x = y !== void 0 && y,
            T = r.awaitOpenAnimation,
            k = T !== void 0 && T,
            O = r.debugMode,
            L = O !== void 0 && O;
        (function(z, P) {
            if (!(z instanceof P)) throw new TypeError("Cannot call a class as a function")
        })(this, o), this.modal = document.getElementById(i), this.config = {
            debugMode: L,
            disableScroll: m,
            openTrigger: d,
            closeTrigger: g,
            openClass: _,
            onShow: c,
            onClose: f,
            awaitCloseAnimation: x,
            awaitOpenAnimation: k,
            disableFocus: v
        }, s.length > 0 && this.registerTriggers.apply(this, ws(s)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this)
    }
    var e, t;
    return e = o, (t = [{
        key: "registerTriggers",
        value: function() {
            for (var r = this, i = arguments.length, n = new Array(i), s = 0; s < i; s++) n[s] = arguments[s];
            n.filter(Boolean).forEach(function(a) {
                a.addEventListener("click", function(c) {
                    return r.showModal(c)
                })
            })
        }
    }, {
        key: "showModal",
        value: function() {
            var r = this,
                i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
            if (this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add(this.config.openClass), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.awaitOpenAnimation) {
                var n = function s() {
                    r.modal.removeEventListener("animationend", s, !1), r.setFocusToFirstNode()
                };
                this.modal.addEventListener("animationend", n, !1)
            } else this.setFocusToFirstNode();
            this.config.onShow(this.modal, this.activeElement, i)
        }
    }, {
        key: "closeModal",
        value: function() {
            var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null,
                i = this.modal;
            if (this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.scrollBehaviour("enable"), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, r), this.config.awaitCloseAnimation) {
                var n = this.config.openClass;
                this.modal.addEventListener("animationend", function s() {
                    i.classList.remove(n), i.removeEventListener("animationend", s, !1)
                }, !1)
            } else i.classList.remove(this.config.openClass)
        }
    }, {
        key: "closeModalById",
        value: function(r) {
            this.modal = document.getElementById(r), this.modal && this.closeModal()
        }
    }, {
        key: "scrollBehaviour",
        value: function(r) {
            if (this.config.disableScroll) {
                var i = document.querySelector("body");
                switch (r) {
                    case "enable":
                        Object.assign(i.style, {
                            overflow: ""
                        });
                        break;
                    case "disable":
                        Object.assign(i.style, {
                            overflow: "hidden"
                        })
                }
            }
        }
    }, {
        key: "addEventListeners",
        value: function() {
            this.modal.addEventListener("touchstart", this.onClick), this.modal.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onKeydown)
        }
    }, {
        key: "removeEventListeners",
        value: function() {
            this.modal.removeEventListener("touchstart", this.onClick), this.modal.removeEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown)
        }
    }, {
        key: "onClick",
        value: function(r) {
            (r.target.hasAttribute(this.config.closeTrigger) || r.target.parentNode.hasAttribute(this.config.closeTrigger)) && (r.preventDefault(), r.stopPropagation(), this.closeModal(r))
        }
    }, {
        key: "onKeydown",
        value: function(r) {
            r.keyCode === 27 && this.closeModal(r), r.keyCode === 9 && this.retainFocus(r)
        }
    }, {
        key: "getFocusableNodes",
        value: function() {
            var r = this.modal.querySelectorAll(Uc);
            return Array.apply(void 0, ws(r))
        }
    }, {
        key: "setFocusToFirstNode",
        value: function() {
            var r = this;
            if (!this.config.disableFocus) {
                var i = this.getFocusableNodes();
                if (i.length !== 0) {
                    var n = i.filter(function(s) {
                        return !s.hasAttribute(r.config.closeTrigger)
                    });
                    n.length > 0 && n[0].focus(), n.length === 0 && i[0].focus()
                }
            }
        }
    }, {
        key: "retainFocus",
        value: function(r) {
            var i = this.getFocusableNodes();
            if (i.length !== 0)
                if (i = i.filter(function(s) {
                        return s.offsetParent !== null
                    }), this.modal.contains(document.activeElement)) {
                    var n = i.indexOf(document.activeElement);
                    r.shiftKey && n === 0 && (i[i.length - 1].focus(), r.preventDefault()), !r.shiftKey && i.length > 0 && n === i.length - 1 && (i[0].focus(), r.preventDefault())
                } else i[0].focus()
        }
    }]) && e_(e.prototype, t), o
}(), Fi = null, za = function(o) {
    if (!document.getElementById(o)) return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(o, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(o, '"></div>')), !1
}, Kc = function(o, e) {
    if (function(r) {
            r.length <= 0 && (console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'))
        }(o), !e) return !0;
    for (var t in e) za(t);
    return !0
}, {
    init: function(o) {
        var e = Object.assign({}, {
                openTrigger: "data-micromodal-trigger"
            }, o),
            t = ws(document.querySelectorAll("[".concat(e.openTrigger, "]"))),
            r = function(s, a) {
                var c = [];
                return s.forEach(function(l) {
                    var f = l.attributes[a].value;
                    c[f] === void 0 && (c[f] = []), c[f].push(l)
                }), c
            }(t, e.openTrigger);
        if (e.debugMode !== !0 || Kc(t, r) !== !1)
            for (var i in r) {
                var n = r[i];
                e.targetModal = i, e.triggers = ws(n), Fi = new Ba(e)
            }
    },
    show: function(o, e) {
        var t = e || {};
        t.targetModal = o, t.debugMode === !0 && za(o) === !1 || (Fi && Fi.removeEventListeners(), (Fi = new Ba(t)).showModal())
    },
    close: function(o) {
        o ? Fi.closeModalById(o) : Fi.closeModal()
    }
});
typeof window < "u" && (window.MicroModal = Ll);
class t_ extends nr {
    init() {
        this.DOM = {
            buttons: this.block.querySelectorAll(".button")
        }, Ll.init({
            disableScroll: !0
        })
    }
    initEvents() {
        this.DOM.buttons.forEach(e => {
            e.addEventListener("click", () => {
                setTimeout(() => {
                    Ll.close(this.block.id)
                }, 10)
            })
        })
    }
}
class r_ extends nr {
    init() {}
}
class i_ extends nr {
    init() {
        this.plugins = document.querySelectorAll("[data-plugin]"), this.createPlugins()
    }
    createPlugins() {
        this.plugins.forEach(e => {
            switch (e.getAttribute("data-plugin")) {
                case "svg-morph-plugin":
                    return new r_(e);
                default:
                    return null
            }
        })
    }
}
const n_ = typeof window < "u";
n_ && (oe.registerPlugin(oe, ve, li, ai, hl, kl), window.gsap = oe, window.ScrollTrigger = ve, window.ScrollSmoother = li, window.CustomEase = ai, window.MotionPathPlugin = hl, window.DrawSVGPlugin = kl);
class o_ extends xd {
    createBlock(e, t) {
        switch (e) {
            case "scroll-hero":
                return new J0(t);
            case "brands":
                return new x0(t);
            case "button":
                return new T0(t);
            case "demos":
                return new U0(t);
            case "get-gsap-btn":
                return new Q0(t);
            case "hover-video":
                return new Z0(t);
            case "showcase":
                return new k0(t);
            case "subtitle":
                return new G0(t);
            case "video":
                return new H0(t);
            case "more-links":
                return new j0(t);
            case "testimonials":
                return new K0(t);
            case "tooltip":
                return new t_(t);
            case "plugins":
                return new i_(t);
            default:
                return null
        }
    }
}
new o_;
export {
    ai as C, kl as D, pu as I, hl as M, it as O, ve as S, oh as _, nr as a, xd as b, li as c, nn as d, Yo as e, qu as f, oe as g, l_ as h, tl as i, Zp as j, fr as k, on as l, gg as m, pg as n, yg as o, rl as p, ks as q, Jl as r, a_ as s, Tn as t, ig as u, Ki as v, gu as w, s_ as x, Jp as y
};
//# sourceMappingURL=index-9465eb56.js.map