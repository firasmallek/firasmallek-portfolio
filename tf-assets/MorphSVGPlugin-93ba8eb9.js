import {
    e as F,
    r as R,
    q as At,
    u as _t,
    v as ut,
    p as wt,
    x as Tt,
    y as Y
} from "./index-9465eb56.js";

function B() {
    return B = Object.assign || function(y) {
        for (var t = 1; t < arguments.length; t++) {
            var e = arguments[t];
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (y[i] = e[i])
        }
        return y
    }, B.apply(this, arguments)
}
var A, J, j, dt, O, yt, mt = function() {
        return A || typeof window < "u" && (A = window.gsap) && A.registerPlugin && A
    },
    H = function(t) {
        return typeof t == "function"
    },
    Q = Math.atan2,
    et = Math.cos,
    it = Math.sin,
    C = Math.sqrt,
    V = Math.PI,
    nt = V * 2,
    zt = V * .3,
    bt = V * .7,
    K = 1e20,
    L = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
    vt = /(^[#.][a-z]|[a-y][a-z])/i,
    Ct = /[achlmqstvz]/i,
    v = function(t) {
        return console && console.warn(t)
    },
    T = function(t) {
        return Math.round(t * 1e5) / 1e5 || 0
    },
    rt = function(t) {
        var e = t.length,
            i = 0,
            n = 0,
            l;
        for (l = 0; l < e; l++) i += t[l++], n += t[l];
        return [i / (e / 2), n / (e / 2)]
    },
    N = function(t) {
        var e = t.length,
            i = t[0],
            n = i,
            l = t[1],
            r = l,
            a, s, g;
        for (g = 6; g < e; g += 6) a = t[g], s = t[g + 1], a > i ? i = a : a < n && (n = a), s > l ? l = s : s < r && (r = s);
        return t.centerX = (i + n) / 2, t.centerY = (l + r) / 2, t.size = (i - n) * (l - r)
    },
    X = function(t, e) {
        e === void 0 && (e = 3);
        for (var i = t.length, n = t[0][0], l = n, r = t[0][1], a = r, s = 1 / e, g, c, _, o, h, d, u, p, f, x, M, m, S, w, z, b; --i > -1;)
            for (h = t[i], g = h.length, o = 6; o < g; o += 6)
                for (f = h[o], x = h[o + 1], M = h[o + 2] - f, w = h[o + 3] - x, m = h[o + 4] - f, z = h[o + 5] - x, S = h[o + 6] - f, b = h[o + 7] - x, d = e; --d > -1;) u = s * d, p = 1 - u, c = (u * u * S + 3 * p * (u * m + p * M)) * u + f, _ = (u * u * b + 3 * p * (u * z + p * w)) * u + x, c > n ? n = c : c < l && (l = c), _ > r ? r = _ : _ < a && (a = _);
        return t.centerX = (n + l) / 2, t.centerY = (r + a) / 2, t.left = l, t.width = n - l, t.top = a, t.height = r - a, t.size = (n - l) * (r - a)
    },
    xt = function(t, e) {
        return e.length - t.length
    },
    ot = function(t, e) {
        var i = t.size || N(t),
            n = e.size || N(e);
        return Math.abs(n - i) < (i + n) / 20 ? e.centerX - t.centerX || e.centerY - t.centerY : n - i
    },
    st = function(t, e) {
        var i = t.slice(0),
            n = t.length,
            l = n - 2,
            r, a;
        for (e = e | 0, r = 0; r < n; r++) a = (r + e) % l, t[r++] = i[a], t[r] = i[a + 1]
    },
    U = function(t, e, i, n, l) {
        var r = t.length,
            a = 0,
            s = r - 2,
            g, c, _, o;
        for (i *= 6, c = 0; c < r; c += 6) g = (c + i) % s, o = t[g] - (e[c] - n), _ = t[g + 1] - (e[c + 1] - l), a += C(_ * _ + o * o);
        return a
    },
    Ft = function(t, e, i) {
        var n = t.length,
            l = rt(t),
            r = rt(e),
            a = r[0] - l[0],
            s = r[1] - l[1],
            g = U(t, e, 0, a, s),
            c = 0,
            _, o, h;
        for (h = 6; h < n; h += 6) o = U(t, e, h / 6, a, s), o < g && (g = o, c = h);
        if (i)
            for (_ = t.slice(0), Y(_), h = 6; h < n; h += 6) o = U(_, e, h / 6, a, s), o < g && (g = o, c = -h);
        return c / 6
    },
    Rt = function(t, e, i) {
        for (var n = t.length, l = K, r = 0, a = 0, s, g, c, _, o, h; --n > -1;)
            for (s = t[n], h = s.length, o = 0; o < h; o += 6) g = s[o] - e, c = s[o + 1] - i, _ = C(g * g + c * c), _ < l && (l = _, r = s[o], a = s[o + 1]);
        return [r, a]
    },
    Nt = function(t, e, i, n, l, r) {
        var a = e.length,
            s = 0,
            g = Math.min(t.size || N(t), e[i].size || N(e[i])) * n,
            c = K,
            _ = t.centerX + l,
            o = t.centerY + r,
            h, d, u, p, f;
        for (d = i; d < a && (h = e[d].size || N(e[d]), !(h < g)); d++) u = e[d].centerX - _, p = e[d].centerY - o, f = C(u * u + p * p), f < c && (s = d, c = f);
        return f = e[s], e.splice(s, 1), f
    },
    Yt = function(t, e, i) {
        i === void 0 && (i = 1);
        for (var n = t[e], l = t[e + 1], r = t[e + 2], a = t[e + 3], s = t[e + 4], g = t[e + 5], c = t[e + 6], _ = t[e + 7], o, h, d, u, p, f, x, M, m; i-- > 0;) o = 1 - 1 / (i + 2), h = n + (r - n) * o, d = r + (s - r) * o, u = l + (a - l) * o, p = a + (g - a) * o, f = h + (d - h) * o, x = u + (p - u) * o, M = s + (c - s) * o, m = g + (_ - g) * o, d += (M - d) * o, p += (m - p) * o, t.splice(e + 2, 4, r = T(h), a = T(u), s = T(f), g = T(x), c = T(f + (d - f) * o), _ = T(x + (p - x) * o), T(d), T(p), T(M), T(m))
    },
    jt = function(t) {
        for (var e = t.length, i = -K, n; e--;) t[e] > i && (i = t[e], n = e);
        return n
    },
    G = function(t, e) {
        for (var i = [], n = [], l = t.length - 2, r = 0; r < l; r += 6) i.push(Math.pow(t[r] - t[r + 6], 2) + Math.pow(t[r + 1] - t[r + 7], 2));
        for (; e--;) r = jt(i), n[r] = l = (n[r] || 0) + 1, i[r] *= l / (l + 1);
        for (r = i.length; r--;) n[r] && Yt(t, r * 6, n[r])
    },
    $ = function(t, e) {
        return e || ut(t), Math.max(4, Math.round(t.totalLength / 4))
    },
    lt = function(t) {
        return t.slice(0).sort(xt)
    },
    Mt = function(t) {
        for (var e = t[0], i = t[1], n = 2; n < t.length; n += 2)
            if (Math.abs(t[n] - e) > .01 || Math.abs(t[n + 1] - i) > .01) return !1;
        return !0
    },
    E = function(t, e) {
        e = e || {};
        var i = e,
            n = i.redraw,
            l = i.points,
            r = i.maxSegments,
            a = r === void 0 ? 999 : r,
            s = 0,
            g = t,
            c = Array.isArray(l) ? l : 0,
            _, o, h, d, u;
        if (n = n !== !1, n) ut(t);
        else
            for (t.totalPoints = 0, o = t.length; o--;) t.totalPoints += t[o].length;
        for (c ? (g = lt(t), c = lt(c), u = c[0].totalLength / Math.round(c[0].length / 6)) : ((!l || l === "auto") && (l = $(t, n), n || (l -= Math.round(t.totalPoints / 6))), l = Math.max(n ? 10 : 4, Math.min(999, l))), o = 0; o < g.length; o++) {
            if (h = g[o], _ = Math.max(n ? 10 : 4, c ? Math.round(c[o] ? c[o].length / 6 : g[o].totalLength / u || 0) : Math.round((s / l + (n ? h.totalLength / t.totalLength : h.length / t.totalPoints)) * l) - s), !(o >= a || c && (!c[o] || Mt(c[o]))))
                if (n) {
                    var p;
                    d = wt(Tt(h, _), e.curviness), h.length = 0, (p = h).push.apply(p, d)
                } else G(h, _);
            s += _
        }
        return t
    },
    W = function(t, e, i, n, l) {
        var r = e.length - t.length,
            a = r > 0 ? e : t,
            s = r > 0 ? t : e,
            g = 0,
            c = n === "complexity" ? xt : ot,
            _ = n === "position" ? 0 : typeof n == "number" ? n : .8,
            o = s.length,
            h = typeof i == "object" && i.push ? i.slice(0) : [i],
            d = h[0] === "reverse" || h[0] < 0,
            u = i === "log",
            p, f, x, M, m, S, w;
        if (s[0]) {
            if (a.length > 1 && (t.sort(c), e.sort(c), a.size || X(a), s.size || X(s), S = a.centerX - s.centerX, w = a.centerY - s.centerY, c === ot))
                for (o = 0; o < s.length; o++) a.splice(o, 0, Nt(s[o], a, o, _, S, w));
            if (r)
                for (r < 0 && (r = -r), a[0].length > s[0].length && G(s[0], (a[0].length - s[0].length) / 6 | 0), o = s.length; g < r;) M = a[o].size || N(a[o]), x = Rt(s, a[o].centerX, a[o].centerY), M = x[0], m = x[1], s[o++] = [M, m, M, m, M, m, M, m], s.totalPoints += 8, g++;
            for (o = 0; o < t.length; o++) p = e[o], f = t[o], r = p.length - f.length, r < 0 ? G(p, -r / 6 | 0) : r > 0 && G(f, r / 6 | 0), d && l !== !1 && !f.reversed && Y(f), i = h[o] || h[o] === 0 ? h[o] : "auto", i && (f.closed || Math.abs(f[0] - f[f.length - 2]) < .5 && Math.abs(f[1] - f[f.length - 1]) < .5 ? i === "auto" || i === "log" ? (h[o] = i = Ft(f, p, !o || l === !1), i < 0 && (d = !0, Y(f), i = -i), st(f, i * 6)) : i !== "reverse" && (o && i < 0 && Y(f), st(f, (i < 0 ? -i : i) * 6)) : !d && (i === "auto" && Math.abs(p[0] - f[0]) + Math.abs(p[1] - f[1]) + Math.abs(p[p.length - 2] - f[f.length - 2]) + Math.abs(p[p.length - 1] - f[f.length - 1]) > Math.abs(p[0] - f[f.length - 2]) + Math.abs(p[1] - f[f.length - 1]) + Math.abs(p[p.length - 2] - f[0]) + Math.abs(p[p.length - 1] - f[1]) || i % 2) ? (Y(f), h[o] = -1, d = !0) : i === "auto" ? h[o] = 0 : i === "reverse" && (h[o] = -1), f.closed !== p.closed && (f.closed = p.closed = !1));
            return u && v("shapeIndex:[" + h.join(",") + "]"), t.shapeIndex = h, h
        }
    },
    at = function(t, e, i, n, l) {
        var r = F(t[0]),
            a = F(t[1]);
        W(r, a, e || e === 0 ? e : "auto", i, l) && (t[0] = R(r), t[1] = R(a), (n === "log" || n === !0) && v('precompile:["' + t[0] + '","' + t[1] + '"]'))
    },
    Ot = function(t, e) {
        if (!e) return t;
        var i = t.match(L) || [],
            n = i.length,
            l = "",
            r, a, s;
        for (e === "reverse" ? (a = n - 1, r = -2) : (a = ((parseInt(e, 10) || 0) * 2 + 1 + n * 100) % n, r = 2), s = 0; s < n; s += 2) l += i[a - 1] + "," + i[a] + " ", a = (a + r) % n;
        return l
    },
    ft = function(t, e) {
        var i = 0,
            n = parseFloat(t[0]),
            l = parseFloat(t[1]),
            r = n + "," + l + " ",
            a = .999999,
            s, g, c, _, o, h, d;
        for (c = t.length, s = e * .5 / (c * .5 - 1), g = 0; g < c - 2; g += 2) {
            if (i += s, h = parseFloat(t[g + 2]), d = parseFloat(t[g + 3]), i > a)
                for (o = 1 / (Math.floor(i) + 1), _ = 1; i > a;) r += (n + (h - n) * o * _).toFixed(2) + "," + (l + (d - l) * o * _).toFixed(2) + " ", i--, _++;
            r += h + "," + d + " ", n = h, l = d
        }
        return r
    },
    k = function(t) {
        var e = t[0].match(L) || [],
            i = t[1].match(L) || [],
            n = i.length - e.length;
        n > 0 ? t[0] = ft(e, n) : t[1] = ft(i, -n)
    },
    Dt = function(t) {
        return isNaN(t) ? k : function(e) {
            k(e), e[1] = Ot(e[1], parseInt(t, 10))
        }
    },
    Xt = function(t, e, i) {
        var n = typeof t == "string",
            l, r;
        return (!n || vt.test(t) || (t.match(L) || []).length < 3) && (l = J(t)[0], l ? (r = (l.nodeName + "").toUpperCase(), e && r !== "PATH" && (l = _t(l, !1), r = "PATH"), t = l.getAttribute(r === "PATH" ? "d" : "points") || "", l === i && (t = l.getAttributeNS(null, "data-original") || t)) : (v("WARNING: invalid morph to: " + t), t = !1)), t
    },
    ht = function(t) {
        for (var e = t.length, i, n, l, r, a, s, g, c; --e > -1;)
            for (i = t[e], c = i.cpData = i.cpData || [], c.length = 0, g = i.length - 2, s = 0; s < g; s += 6) n = i[s] - i[s + 2], l = i[s + 1] - i[s + 3], r = i[s + 6] - i[s + 4], a = i[s + 7] - i[s + 5], c[s + 2] = Q(l, n), c[s + 3] = C(n * n + l * l), c[s + 4] = Q(a, r), c[s + 5] = C(r * r + a * a);
        return t
    },
    ct = function(t) {
        var e = t.trim().split(" "),
            i = ~t.indexOf("left") ? 0 : ~t.indexOf("right") ? 100 : isNaN(parseFloat(e[0])) ? 50 : parseFloat(e[0]),
            n = ~t.indexOf("top") ? 0 : ~t.indexOf("bottom") ? 100 : isNaN(parseFloat(e[1])) ? 50 : parseFloat(e[1]);
        return {
            x: i / 100,
            y: n / 100
        }
    },
    St = function(t) {
        return t !== t % V ? t + (t < 0 ? nt : -nt) : t
    },
    gt = "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
    Lt = function(t, e, i, n) {
        var l = this._origin,
            r = this._eOrigin,
            a = t[i] - l.x,
            s = t[i + 1] - l.y,
            g = C(a * a + s * s),
            c = Q(s, a),
            _, o;
        return a = e[i] - r.x, s = e[i + 1] - r.y, _ = Q(s, a) - c, o = St(_), !n && j && Math.abs(o + j.ca) < zt && (n = j), this._anchorPT = j = {
            _next: this._anchorPT,
            t,
            sa: c,
            ca: n && o * n.ca < 0 && Math.abs(o) > bt ? _ : o,
            sl: g,
            cl: C(a * a + s * s) - g,
            i
        }
    },
    pt = function(t) {
        A = mt(), O = O || A && A.plugins.morphSVG, A && O ? (J = A.utils.toArray, yt = A.core.reverting || function() {}, O.prototype._tweenRotation = Lt, dt = 1) : t && v("Please gsap.registerPlugin(MorphSVGPlugin)")
    },
    D = {
        version: "3.14.2",
        name: "morphSVG",
        rawVars: 1,
        register: function(t, e) {
            A = t, O = e, pt()
        },
        init: function(t, e, i, n, l) {
            if (dt || pt(1), !e) return v("invalid shape"), !1;
            H(e) && (e = e.call(i, n, t, l));
            var r, a, s, g, c, _, o, h, d, u, p, f, x, M, m, S, w, z, b, Z;
            if (typeof e == "string" || e.getBBox || e[0]) e = {
                shape: e
            };
            else if (typeof e == "object") {
                r = {};
                for (a in e) r[a] = H(e[a]) && a !== "render" ? e[a].call(i, n, t, l) : e[a];
                e = r
            }
            var I = t.nodeType ? window.getComputedStyle(t) : {},
                tt = I.fill + "",
                Pt = !(tt === "none" || (tt.match(L) || [])[3] === "0" || I.fillRule === "evenodd"),
                P = e.smooth,
                q = (e.origin || "50 50").split(",");
            if (P === !0 || P === "auto" ? P = {} : typeof P == "number" && (P = {
                    points: P
                }), r = (t.nodeName + "").toUpperCase(), c = r === "POLYLINE" || r === "POLYGON", r !== "PATH" && !c && !e.prop) return v("Cannot morph a <" + r + "> element. " + gt), !1;
            if (a = r === "PATH" ? "d" : "points", !e.prop && !H(t.setAttribute)) return !1;
            if (g = Xt(e.shape || e.d || e.points || "", a === "d", t), c && Ct.test(g)) return v("A <" + r + "> cannot accept path data. " + gt), !1;
            if (_ = e.shapeIndex || e.shapeIndex === 0 ? e.shapeIndex : "auto", o = e.map || D.defaultMap, this._prop = e.prop, this._render = e.render || D.defaultRender, this._apply = "updateTarget" in e ? e.updateTarget : D.defaultUpdateTarget, this._rnd = Math.pow(10, isNaN(e.precision) ? 2 : +e.precision), this._tween = i, g) {
                if (this._target = t, w = typeof e.precompile == "object", u = this._original = this._prop ? t[this._prop] : t.getAttribute(a), !this._prop && !t.getAttributeNS(null, "data-original") && t.setAttributeNS(null, "data-original", u), a === "d" || this._prop) {
                    if (u = F(w ? e.precompile[0] : u), p = F(w ? e.precompile[1] : g), P) {
                        for (x = u.length; --x;) Mt(u[x]) && u.splice(x, 1);
                        E(u, B({}, P, {
                            points: +P.points || Math.max($(u), $(p)),
                            maxSegments: p.length
                        })), E(p, P.redraw === !1 ? P : B({}, P, {
                            points: u
                        }))
                    }
                    if (!w && !W(u, p, _, o, Pt)) return !1;
                    for ((e.precompile === "log" || e.precompile === !0) && v('precompile:["' + R(u) + '","' + R(p) + '"]'), b = (e.type || D.defaultType) !== "linear", Z = e.curveMode || b, ht(u), ht(p), b && (u.size || X(u), p.size || X(p), z = ct(q[0]), this._origin = u.origin = {
                            x: u.left + z.x * u.width,
                            y: u.top + z.y * u.height
                        }, q[1] && (z = ct(q[1])), this._eOrigin = {
                            x: p.left + z.x * p.width,
                            y: p.top + z.y * p.height
                        }), this._rawPath = t._gsRawPath = u, x = u.length; --x > -1;) {
                        for (m = u[x], S = p[x], h = m.cpData, d = S.cpData, M = m.length, j = 0, f = 0; f < M; f += 6)(S[f] !== m[f] || S[f + 1] !== m[f + 1]) && (b ? s = this._tweenRotation(m, S, f) : (s = this.add(m, f, m[f], S[f], 0, 0, 0, 0, 0, 1), s = this.add(m, f + 1, m[f + 1], S[f + 1], 0, 0, 0, 0, 0, 1) || s));
                        for (f = 0; f < M; f += 2) Z && (h[f] !== d[f] || h[f + 1] !== d[f + 1]) && h[f + 1] && d[f + 1] ? this._controlPT = {
                            _next: this._controlPT,
                            i: f,
                            j: x,
                            ai: f % 6 > 3 ? f + 2 : f - 2,
                            sa: h[f],
                            ca: St(d[f] - h[f]),
                            sl: h[f + 1],
                            cl: d[f + 1] - h[f + 1]
                        } : (S[f] !== m[f] && (s = this.add(m, f, m[f], S[f], 0, 0, 0, 0, 0, 1)), S[f + 1] !== m[f + 1] && (s = this.add(m, f + 1, m[f + 1], S[f + 1], 0, 0, 0, 0, 0, 1) || s))
                    }
                } else s = this.add(t, "setAttribute", t.getAttribute(a) + "", g + "", n, l, 0, Dt(_), a);
                b && (this.add(this._origin, "x", this._origin.x, this._eOrigin.x, 0, 0, 0, 0, 0, 1), s = this.add(this._origin, "y", this._origin.y, this._eOrigin.y, 0, 0, 0, 0, 0, 1)), s && (this._props.push("morphSVG"), s.end = P && P.persist !== !1 ? R(p) : g, s.endProp = a)
            }
            return 1
        },
        render: function(t, e) {
            for (var i = e._rawPath, n = e._controlPT, l = e._anchorPT, r = e._rnd, a = e._target, s = e._pt, g, c, _, o, h, d, u, p, f; s;) s.r(t, s.d), s = s._next;
            if (t === 1 && e._apply)
                for (s = e._pt; s;) s.end && (e._prop ? a[e._prop] = s.end : a.setAttribute(s.endProp, s.end)), s = s._next;
            else if (i) {
                for (; l;) h = l.sa + t * l.ca, o = l.sl + t * l.cl, l.t[l.i] = e._origin.x + et(h) * o, l.t[l.i + 1] = e._origin.y + it(h) * o, l = l._next;
                for (; n;) _ = i[n.j], d = n.i, h = n.sa + t * n.ca, p = it(h), f = et(h), o = n.sl + t * n.cl, _[d] = _[n.ai] - f * o, _[d + 1] = _[n.ai + 1] - p * o, n = n._next;
                if (!t && yt() && (i = F(e._original)), a._gsRawPath = i, e._apply) {
                    for (g = "", c = " ", u = 0; u < i.length; u++) {
                        for (_ = i[u], o = _.length, g += "M" + (_[0] * r | 0) / r + c + (_[1] * r | 0) / r + " C", d = 2; d < o; d++) g += (_[d] * r | 0) / r + c;
                        _.closed && (g += "z")
                    }
                    e._prop ? a[e._prop] = g : a.setAttribute("d", g)
                }
            }
            e._render && i && e._render.call(e._tween, i, a)
        },
        kill: function(t) {
            this._pt = this._rawPath = 0
        },
        getRawPath: At,
        stringToRawPath: F,
        rawPathToString: R,
        smoothRawPath: E,
        normalizeStrings: function(t, e, i) {
            var n = i.shapeIndex,
                l = i.map,
                r = [t, e];
            return at(r, n, l), r
        },
        pathFilter: at,
        pointsFilter: k,
        getTotalSize: X,
        equalizeSegmentQuantity: W,
        convertToPath: function(t, e) {
            return J(t).map(function(i) {
                return _t(i, e !== !1)
            })
        },
        defaultType: "linear",
        defaultUpdateTarget: !0,
        defaultMap: "size"
    };
mt() && A.registerPlugin(D);
export {
    D as M
};
//# sourceMappingURL=MorphSVGPlugin-93ba8eb9.js.map