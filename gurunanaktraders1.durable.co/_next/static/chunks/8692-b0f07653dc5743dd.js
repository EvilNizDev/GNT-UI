(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8692], {
        85789: function(n, e, t) {
            "use strict";
            var o, i = t(34727),
                r = t(14251),
                l = t(44747),
                s = t(97582),
                u = t(85893),
                a = t(9008),
                d = t.n(a),
                c = t(67294),
                v = t(90387),
                f = t(25935),
                p = t(30120),
                h = t(31996),
                m = t(85518),
                g = t(74865),
                w = t.n(g),
                b = t(11163),
                y = t.n(b),
                j = t(5152),
                x = t.n(j),
                C = (0, u.jsx)("div", {}),
                S = x()((function() {
                    return Promise.all([t.e(5644), t.e(2693), t.e(6880), t.e(2872), t.e(6166), t.e(3175)]).then(t.bind(t, 73175))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [73175]
                        }
                    },
                    loading: function() {
                        return C
                    }
                }),
                Z = x()((function() {
                    return Promise.all([t.e(5644), t.e(2693), t.e(6880), t.e(2872), t.e(6166), t.e(165)]).then(t.bind(t, 165))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [165]
                        }
                    },
                    loading: function() {
                        return C
                    }
                }),
                _ = [];
            w().configure({
                showSpinner: !1
            }), y().events.on("routeChangeStart", (function(n) {
                w().start()
            })), y().events.on("routeChangeComplete", (function() {
                return w().done()
            })), y().events.on("routeChangeError", (function() {
                return w().done()
            }));
            e.Z = function(n) {
                var e, a, g, w, b, y, j, x, C, I, k, A, F, E, L, P, B, O, U, q, N, R, $, H, T, J, M, W, G = n.children,
                    V = n.website,
                    z = n.page,
                    K = n.apiUrl,
                    Q = n.ipAddress,
                    Y = (0, v.useRouter)(),
                    D = (0, c.useState)(0),
                    X = D[0],
                    nn = D[1],
                    en = (0, c.useState)(!1),
                    tn = en[0],
                    on = en[1],
                    rn = (0, c.useState)(null),
                    ln = rn[0],
                    sn = rn[1],
                    un = (0, c.useState)(0),
                    an = un[0],
                    dn = un[1],
                    cn = new h.bl(K),
                    vn = null !== (W = V.seo) && void 0 !== W ? W : {},
                    fn = vn.headCode,
                    pn = vn.footerCode,
                    hn = (0, l.Z)(vn, ["headCode", "footerCode"]),
                    mn = (0, r.Z)({
                        globalHeadCode: fn,
                        globalFooterCode: pn
                    }, hn, null === z || void 0 === z ? void 0 : z.seo),
                    gn = (0, c.useCallback)(function() {
                        var n = (0, i.Z)((function(n) {
                            return (0, s.__generator)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return 0 !== n.target.scrollTop && 0 !== X || nn(n.target.scrollTop), tn ? [3, 2] : [4, bn("scroll")];
                                    case 1:
                                        e.sent(), on(!0), e.label = 2;
                                    case 2:
                                        return [2]
                                }
                            }))
                        }));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }(), [tn]),
                    wn = c.Children.map(G, (function(n) {
                        return c.isValidElement(n) ? c.cloneElement(n, (0, r.Z)({}, n.props)) : n
                    })),
                    bn = function() {
                        var n = (0, i.Z)((function(n) {
                            var e, o, i, r, l, u, a, d, c, v;
                            return (0, s.__generator)(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return (a = JSON.parse(localStorage.getItem("user") || "{}")) && a.ip && !(p.ou.now().diff(p.ou.fromISO(a.date), "hours").hours > 24) && a.hash ? [3, 4] : (d = Q || "0.0.0.0", window.unsupportedBrowser || Q ? [3, 3] : [4, t.e(6216).then(t.bind(t, 76216))]);
                                    case 1:
                                        return [4, s.sent().publicIpv4()];
                                    case 2:
                                        d = s.sent(), s.label = 3;
                                    case 3:
                                        c = p.ou.now().toMillis(), localStorage.setItem("user", JSON.stringify({
                                            ip: d,
                                            date: p.ou.now().startOf("day").toISO(),
                                            hash: c
                                        })), a.ip = d, a.hash = c, s.label = 4;
                                    case 4:
                                        v = {
                                            idWebsite: V._id,
                                            url: document.location.pathname,
                                            event: n,
                                            platform: (null === window || void 0 === window || null === (e = window.navigator) || void 0 === e ? void 0 : e.platform) ? null === window || void 0 === window || null === (o = window.navigator) || void 0 === o || null === (i = o.platform) || void 0 === i ? void 0 : i.toString() : (null === window || void 0 === window || null === (r = window.navigator) || void 0 === r ? void 0 : r.oscpu) ? null === window || void 0 === window || null === (l = window.navigator) || void 0 === l ? void 0 : l.oscpu : "bot",
                                            title: document.title.split(" - ")[0] || "Home",
                                            device: /bot|googlebot|crawler|spider|robot|crawling/i.test(null === window || void 0 === window || null === (u = window.navigator) || void 0 === u ? void 0 : u.userAgent) ? "bot" : m.tq ? "mobile" : "desktop",
                                            ip: a.ip,
                                            hash: a.hash
                                        }, _.find((function(n) {
                                            return n.event === v.event
                                        })) || _.push(v), s.label = 5;
                                    case 5:
                                        return [2]
                                }
                            }))
                        }));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }();
                return (0, c.useEffect)((function() {
                    return an < 6 && (clearInterval(o), o = setInterval((0, i.Z)((function() {
                            return (0, s.__generator)(this, (function(n) {
                                return bn("ping"), dn(an + 1), [2]
                            }))
                        })), 3e4)), ln !== Y.asPath && (bn("open"), sn(Y.asPath), dn(0), on(!1)),
                        function() {
                            an >= 6 && dn(0), clearInterval(o), on(!1)
                        }
                }), [Y, an]), (0, c.useEffect)((function() {
                    var n, e = function() {
                        var n = (0, i.Z)((function() {
                            var n;
                            return (0, s.__generator)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return (null === _ || void 0 === _ ? void 0 : _.length) > 0 && (n = _.shift()) ? [4, cn.post("/website/register-user-action", n)] : [3, 2];
                                    case 1:
                                        e.sent(), e.label = 2;
                                    case 2:
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }();
                    return e(), n = setInterval((function() {
                            e()
                        }), 500), document.querySelector("body").addEventListener("scroll", gn), window.addEventListener("scroll", gn),
                        function() {
                            clearInterval(n), document.querySelector("body").removeEventListener("scroll", gn), window.removeEventListener("scroll", gn)
                        }
                }), [tn]), (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsxs)(d(), {
                        children: [(0, u.jsx)("meta", {
                            name: "theme-color",
                            content: function() {
                                var n;
                                return (null === V || void 0 === V || null === (n = V.header) || void 0 === n ? void 0 : n.background) || (null === V || void 0 === V ? void 0 : V.primaryColor)
                            }()
                        }), (0, u.jsx)("link", {
                            rel: "icon",
                            href: (null === (e = V.favicon) || void 0 === e ? void 0 : e.url) || "/favicon.ico"
                        }), (0, u.jsx)("title", {
                            children: (null === mn || void 0 === mn ? void 0 : mn.title) ? mn.title : (null === (a = V.Business) || void 0 === a ? void 0 : a.name) + " | " + (null === (g = V.Business) || void 0 === g || null === (w = g.type) || void 0 === w ? void 0 : w.name)
                        }), (0, u.jsx)("meta", {
                            name: "description",
                            content: (null === mn || void 0 === mn ? void 0 : mn.description) ? mn.description : ""
                        }), (0, u.jsx)("meta", {
                            name: "keywords",
                            content: (null === mn || void 0 === mn ? void 0 : mn.keywords) ? mn.keywords : (null === V || void 0 === V || null === (b = V.Business) || void 0 === b || null === (y = b.name) || void 0 === y ? void 0 : y.split(" ").join(",")) + "," + (null === V || void 0 === V || null === (j = V.Business) || void 0 === j || null === (x = j.type) || void 0 === x || null === (C = x.name) || void 0 === C ? void 0 : C.split(" ").join(","))
                        }), (0, u.jsx)("meta", {
                            property: "og:title",
                            content: (null === mn || void 0 === mn ? void 0 : mn.title) ? mn.title : (null === (I = V.Business) || void 0 === I ? void 0 : I.name) + " | " + (null === (k = V.Business) || void 0 === k || null === (A = k.type) || void 0 === A ? void 0 : A.name)
                        }), (0, u.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, u.jsx)("meta", {
                            property: "og:description",
                            content: (null === mn || void 0 === mn ? void 0 : mn.description) ? mn.description : ""
                        }), (null === mn || void 0 === mn || null === (F = mn.Image) || void 0 === F ? void 0 : F.url) && (0, u.jsx)("meta", {
                            property: "og:image",
                            content: mn.Image.url
                        }), (null === mn || void 0 === mn ? void 0 : mn.globalHeadCode) && (0, f.ZP)(mn.globalHeadCode), (null === mn || void 0 === mn ? void 0 : mn.headCode) && (0, f.ZP)(mn.headCode), (null === V || void 0 === V || null === (E = V.fonts) || void 0 === E || null === (L = E.head) || void 0 === L ? void 0 : L.name) && (null === V || void 0 === V || null === (P = V.fonts) || void 0 === P || null === (B = P.body) || void 0 === B ? void 0 : B.name) && (0, u.jsxs)(u.Fragment, {
                            children: [(0, u.jsx)("link", {
                                rel: "preconnect",
                                href: "https://fonts.googleapis.com"
                            }), (0, u.jsx)("link", {
                                rel: "preconnect",
                                href: "https://fonts.gstatic.com",
                                crossOrigin: !0
                            }), (0, u.jsx)("link", {
                                href: "https://fonts.googleapis.com/css2?family=".concat(null === V || void 0 === V || null === (O = V.fonts) || void 0 === O || null === (U = O.head) || void 0 === U || null === (q = U.name) || void 0 === q ? void 0 : q.replace(/ /gi, "+"), ":wght@").concat(null === V || void 0 === V || null === (N = V.fonts) || void 0 === N || null === (R = N.head) || void 0 === R ? void 0 : R.weight, "&family=").concat(null === V || void 0 === V || null === ($ = V.fonts) || void 0 === $ || null === (H = $.body) || void 0 === H || null === (T = H.name) || void 0 === T ? void 0 : T.replace(/ /gi, "+"), ":wght@").concat(null === V || void 0 === V || null === (J = V.fonts) || void 0 === J || null === (M = J.body) || void 0 === M ? void 0 : M.weight, "&display=swap"),
                                rel: "stylesheet"
                            })]
                        }), (null === V || void 0 === V ? void 0 : V.searchIndexing) ? (0, u.jsx)("meta", {
                            name: "robots",
                            content: "all"
                        }) : (0, u.jsx)("meta", {
                            name: "robots",
                            content: "noindex,nofollow"
                        })]
                    }), (0, u.jsxs)("div", {
                        id: "main-body",
                        onScroll: function(n) {
                            return gn(n)
                        },
                        className: "min-h-full w-full flex flex-col smooth-scroll",
                        style: (0, h.SV)(V),
                        children: [(0, u.jsx)(S, {
                            scrollY: X,
                            website: V
                        }), wn, (0, u.jsx)(Z, {
                            website: V
                        })]
                    }), (null === mn || void 0 === mn ? void 0 : mn.globalFooterCode) && (0, f.ZP)(mn.globalFooterCode), (null === mn || void 0 === mn ? void 0 : mn.footerCode) && (0, f.ZP)(mn.footerCode)]
                })
            }
        },
        31996: function(n, e, t) {
            "use strict";
            t.d(e, {
                bl: function() {
                    return v
                },
                $O: function() {
                    return y
                },
                h: function() {
                    return A
                },
                Z9: function() {
                    return h
                },
                SV: function() {
                    return _
                },
                AK: function() {
                    return w
                },
                p$: function() {
                    return S
                },
                n3: function() {
                    return L
                },
                yW: function() {
                    return E
                },
                Qm: function() {
                    return F
                },
                G0: function() {
                    return I
                },
                A2: function() {
                    return P
                },
                j2: function() {
                    return Z
                },
                mR: function() {
                    return j
                },
                jn: function() {
                    return k
                },
                s: function() {
                    return x
                },
                ac: function() {
                    return C
                },
                oH: function() {
                    return b
                }
            });
            var o = t(85893),
                i = t(34727),
                r = t(75815),
                l = t(67573),
                s = t(97582),
                u = t(9669),
                a = t.n(u),
                d = t(40782),
                c = t(83454),
                v = function n(e, t) {
                    (0, r.Z)(this, n);
                    var o = this;
                    (0, l.Z)(this, "get", function() {
                        var n = (0, i.Z)((function(n, e) {
                            return (0, s.__generator)(this, (function(t) {
                                return [2, new Promise((function(t, r) {
                                    a().get(n, {
                                        baseURL: o.baseURL,
                                        params: e || {},
                                        headers: {
                                            "Content-Type": "application/json",
                                            Accept: "*/*"
                                        }
                                    }).then(function() {
                                        var n = (0, i.Z)((function(n) {
                                            return (0, s.__generator)(this, (function(e) {
                                                return t(n.data), [2]
                                            }))
                                        }));
                                        return function(e) {
                                            return n.apply(this, arguments)
                                        }
                                    }()).catch((function(n) {
                                        n.response ? t({
                                            status: !1,
                                            message: n.response.data.message
                                        }) : n.request ? t({
                                            status: !1,
                                            message: n.request.message
                                        }) : t({
                                            status: !1,
                                            message: n.message
                                        }), t({
                                            status: !1,
                                            message: n.config
                                        })
                                    }))
                                }))]
                            }))
                        }));
                        return function(e, t) {
                            return n.apply(this, arguments)
                        }
                    }());
                    var u = this;
                    (0, l.Z)(this, "post", function() {
                        var n = (0, i.Z)((function(n, e, t) {
                            return (0, s.__generator)(this, (function(o) {
                                return [2, new Promise((function(o, i) {
                                    a().post(n, e || {}, {
                                        baseURL: u.baseURL,
                                        headers: {
                                            "Content-Type": t ? "multipart/form-data" : "application/json",
                                            Accept: "*/*"
                                        }
                                    }).then((function(n) {
                                        o(n.data)
                                    })).catch((function(n) {
                                        n.response ? o(n.response.data) : n.request ? o({
                                            status: !1,
                                            message: n.request
                                        }) : o({
                                            status: !1,
                                            message: n.message
                                        }), o({
                                            status: !1,
                                            message: n.config
                                        })
                                    }))
                                }))]
                            }))
                        }));
                        return function(e, t, o) {
                            return n.apply(this, arguments)
                        }
                    }()), a().defaults.withCredentials = null === t || void 0 === t || t, this.baseURL = e || c.env.API_URL || "https://api.durable.co"
                },
                f = t(5506),
                p = function(n) {
                    var e = n.closeToast;
                    return (0, o.jsx)(f.Z, {
                        className: "h-5 w-5 text-gray-600",
                        onClick: e
                    })
                },
                h = {
                    default: function(n) {
                        (0, d.Am)(n)
                    },
                    info: function(n) {
                        d.Am.info(n)
                    },
                    success: function(n) {
                        d.Am.success(n)
                    },
                    warn: function(n) {
                        d.Am.warn(n)
                    },
                    error: function(n) {
                        d.Am.error(n, {
                            autoClose: !1,
                            closeButton: (0, o.jsx)(p, {})
                        })
                    }
                },
                m = t(85789),
                g = t(67294);
            t(24266), t(79981);

            function w() {
                for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
                return e.filter(Boolean).join(" ")
            }

            function b(n) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)
            }

            function y(n) {
                var e = !1;
                if (!n || !n[0]) return n;
                "#" === n[0] && (n = n.slice(1), e = !0);
                var t = parseInt(6 === (null === n || void 0 === n ? void 0 : n.length) ? n : "".concat(n[0]).concat(n[0]).concat(n[1]).concat(n[1]).concat(n[2]).concat(n[2]), 16),
                    o = ((t >> 16) + (255 & t) + (t >> 8 & 255)) / 3;
                return (e ? "#" : "") + (o = o > 128 ? "111827" : "FFFFFF")
            }
            var j = function(n, e) {
                var t;
                return e /= 100, /^#([A-Fa-f0-9]{3}){1,2}$/.test(n) ? (3 === (null === (t = n.substring(1).split("")) || void 0 === t ? void 0 : t.length) && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]), "rgba(" + [(t = "0x" + t.join("")) >> 16 & 255, t >> 8 & 255, 255 & t].join(",") + "," + e + ")") : n
            };

            function x(n) {
                var e = n.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
                    t = e ? (256 | e[1]).toString(16).slice(1) + (256 | e[2]).toString(16).slice(1) + (256 | e[3]).toString(16).slice(1) : n;
                return "#".concat(t)
            }

            function C(n) {
                var e = (0, g.useState)(!0),
                    t = e[0],
                    o = e[1];
                return (0, g.useEffect)((function() {
                    var e = window.matchMedia(n);
                    e.matches !== t && o(e.matches);
                    var i = function() {
                        o(e.matches)
                    };
                    return e.addListener(i),
                        function() {
                            return e.removeListener(i)
                        }
                }), [t, n]), t
            }

            function S(n) {
                return JSON.parse(JSON.stringify(n))
            }
            var Z = function(n) {
                    var e, t, o, i;
                    return {
                        fontFamily: (null === n || void 0 === n || null === (e = n.fonts) || void 0 === e || null === (t = e.head) || void 0 === t ? void 0 : t.family) || '"Inter", sans-serif',
                        fontWeight: (null === n || void 0 === n || null === (o = n.fonts) || void 0 === o || null === (i = o.head) || void 0 === i ? void 0 : i.weight) || 500
                    }
                },
                _ = function(n) {
                    var e, t, o, i;
                    return {
                        fontFamily: (null === n || void 0 === n || null === (e = n.fonts) || void 0 === e || null === (t = e.body) || void 0 === t ? void 0 : t.family) || '"Inter", sans-serif',
                        fontWeight: (null === n || void 0 === n || null === (o = n.fonts) || void 0 === o || null === (i = o.body) || void 0 === i ? void 0 : i.weight) || 500
                    }
                };

            function I(n) {
                var e = n.props.children[0].props.website,
                    t = n.props.children[0].props.page,
                    i = n.props.children[0].props.apiUrl;
                return (0, o.jsx)(m.Z, {
                    page: t,
                    website: e,
                    apiUrl: i,
                    children: n
                })
            }

            function k(n) {
                var e, t, o;
                return n.match(/^rgb/) ? (e = (n = n.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/))[1], t = n[2], o = n[3]) : (e = (n = +("0x" + n.slice(1).replace(n.length < 5 && /./g, "$&$&"))) >> 16, t = n >> 8 & 255, o = 255 & n), Math.sqrt(e * e * .299 + t * t * .587 + o * o * .114) <= 127.5
            }

            function A(n, e) {
                var t = parseInt(n.replace("#", ""), 16),
                    o = Math.round(2.55 * e),
                    i = (t >> 16) + o,
                    r = (t >> 8 & 255) + o,
                    l = (255 & t) + o;
                return "#" + (16777216 + 65536 * (i < 255 ? i < 1 ? 0 : i : 255) + 256 * (r < 255 ? r < 1 ? 0 : r : 255) + (l < 255 ? l < 1 ? 0 : l : 255)).toString(16).slice(1)
            }

            function F(n) {
                if (!n) return "";
                var e = n.split(" ");
                return e.length > 1 && "" !== e[1] ? e[0][0] + e[1][0] : n[0] + n[1]
            }
            var E = function(n) {
                    return "small" === n ? "rounded-sm md:rounded-md lg:rounded-lg" : "medium" === n ? "rounded-lg md:rounded-xl lg:rounded-2xl" : "large" === n ? "rounded-2xl md:rounded-3xl lg:rounded-4xl" : ""
                },
                L = function(n) {
                    return "1:1" === n ? "aspect-w-1 aspect-h-1" : "2:3" === n ? "aspect-w-2 aspect-h-3" : "3:2" === n ? "aspect-w-3 aspect-h-2" : "aspect-w-16 aspect-h-9"
                },
                P = function(n) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    switch (n) {
                        case "top":
                            return e ? "justify-start" : "items-start";
                        case "bottom":
                            return e ? "justify-end" : "items-end";
                        default:
                            return e ? "justify-center" : "items-center"
                    }
                }
        },
        42480: function() {}
    }
]);