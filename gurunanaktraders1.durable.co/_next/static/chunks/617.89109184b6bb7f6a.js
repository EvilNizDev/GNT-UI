(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [617], {
        3517: function(e, o, n) {
            "use strict";
            n.d(o, {
                IP: function() {
                    return a
                },
                dF: function() {
                    return i
                },
                hA: function() {
                    return r
                }
            });
            var t = n(85893),
                l = n(31996);
            n(67294);

            function i(e) {
                switch (null === e || void 0 === e ? void 0 : e.type) {
                    case "color":
                    case "gradient":
                        return null === e || void 0 === e ? void 0 : e.color;
                    case "image":
                        var o, n, t;
                        return (null === e || void 0 === e || null === (o = e.overlay) || void 0 === o || null === (n = o.color) || void 0 === n ? void 0 : n.includes("rgba")) ? (0, l.s)(e.overlay.color) : null === e || void 0 === e || null === (t = e.overlay) || void 0 === t ? void 0 : t.color;
                    default:
                        return e
                }
            }

            function a(e) {
                switch (null === e || void 0 === e ? void 0 : e.type) {
                    case "color":
                        return {
                            backgroundColor: e.color
                        };
                    case "gradient":
                        var o, n, t;
                        return {
                            backgroundImage: "linear-gradient(".concat(null !== (o = e.direction) && void 0 !== o ? o : "180deg", ", ").concat(null !== (n = e.color) && void 0 !== n ? n : "#FFFFFF", ", ").concat(null !== (t = e.color2) && void 0 !== t ? t : "#D1D5DB", ")")
                        };
                    case "image":
                        var l, i;
                        return {
                            backgroundImage: "url(".concat((null === (l = e.image) || void 0 === l ? void 0 : l.preview) || (null === (i = e.image) || void 0 === i ? void 0 : i.url) || e.image, ")"),
                            backgroundPosition: "".concat(e.imagePositionX || "center", " ").concat(e.imagePositionY || "center"),
                            backgroundSize: "cover"
                        };
                    default:
                        return {
                            backgroundColor: e
                        }
                }
            }
            var r = function(e) {
                var o, n, i, a, r, s = e.background,
                    u = (null === s || void 0 === s || null === (o = s.overlay) || void 0 === o ? void 0 : o.color.includes("rgba")) ? (0, l.s)(null === s || void 0 === s || null === (n = s.overlay) || void 0 === n ? void 0 : n.color) : null === s || void 0 === s || null === (i = s.overlay) || void 0 === i ? void 0 : i.color;
                return "image" === (null === s || void 0 === s ? void 0 : s.type) && s.overlay ? (0, t.jsx)("div", {
                    className: (0, l.AK)("w-full h-full absolute top-0 left-0 z-0"),
                    style: {
                        backgroundColor: (0, l.mR)(null !== u && void 0 !== u ? u : "#000000", null !== (r = null === s || void 0 === s || null === (a = s.overlay) || void 0 === a ? void 0 : a.amount) && void 0 !== r ? r : 50)
                    }
                }) : null
            }
        },
        52077: function(e, o, n) {
            "use strict";
            n.d(o, {
                Z: function() {
                    return s
                }
            });
            var t = n(85893),
                l = n(41664),
                i = n.n(l),
                a = n(16494),
                r = n(31996);

            function s(e) {
                var o, n, l, s, u = e.button,
                    d = e.type,
                    c = e.website,
                    v = e.action,
                    f = e.loading,
                    p = e.className,
                    m = (null === c || void 0 === c || null === (o = c.button) || void 0 === o ? void 0 : o.background) || (null === c || void 0 === c ? void 0 : c.secondaryColor),
                    g = {
                        background: "outline" === (null === c || void 0 === c || null === (n = c.button) || void 0 === n ? void 0 : n.style) ? "transparent" : m,
                        borderRadius: isNaN(null === c || void 0 === c || null === (l = c.button) || void 0 === l ? void 0 : l.cornerRadius) ? 8 : c.button.cornerRadius,
                        color: "outline" === (null === c || void 0 === c || null === (s = c.button) || void 0 === s ? void 0 : s.style) ? m : (0, r.$O)(m),
                        border: "2px solid ".concat(m)
                    };
                return v && "function" === typeof v || "submit" === d ? (0, t.jsx)("button", {
                    type: "submit" === d ? "submit" : "button",
                    onClick: v,
                    className: (0, r.AK)("button primary", p),
                    style: g,
                    disabled: f,
                    children: f ? (0, t.jsx)(a.Z, {}) : u.label
                }) : (0, t.jsx)(i(), {
                    href: function(e) {
                        if (e) {
                            if ("email" === e.type) return "mailto:" + e.link;
                            if ("phone" === e.type) return "tel:" + e.link;
                            if ("section" === e.type) return "#" + e.link;
                            if ("page" === e.type) {
                                var o, n, t, l = null === c || void 0 === c || null === (o = c.pages) || void 0 === o ? void 0 : o.find((function(o) {
                                        return o._id === e.page
                                    })),
                                    i = (null === l || void 0 === l ? void 0 : l.Parent) ? null === c || void 0 === c || null === (n = c.pages) || void 0 === n ? void 0 : n.find((function(e) {
                                        return e._id === (null === l || void 0 === l ? void 0 : l.Parent)
                                    })) : null,
                                    a = "";
                                return i && (a += "".concat(i.slug, "/")), a += null !== (t = null === l || void 0 === l ? void 0 : l.slug) && void 0 !== t ? t : "/"
                            }
                            var r, s = null === (r = e.link) || void 0 === r ? void 0 : r.replace(/https?:\/\//gi, "");
                            return s && "#" !== s ? "https://" + s : "#"
                        }
                        return "/"
                    }(u),
                    scroll: "section" !== (null === u || void 0 === u ? void 0 : u.type),
                    children: (0, t.jsx)("a", {
                        className: (0, r.AK)("button primary", p),
                        target: function(e) {
                            var o, n, t, l = null === c || void 0 === c || null === (o = c.pages) || void 0 === o ? void 0 : o.find((function(o) {
                                return o._id === e.page
                            }));
                            return e.newPage ? "_blank" : (null === l || void 0 === l ? void 0 : l.forceRender) ? "_parent" : (null === c || void 0 === c || null === (n = c.button) || void 0 === n ? void 0 : n.target) ? null === c || void 0 === c || null === (t = c.button) || void 0 === t ? void 0 : t.target : "_self"
                        }(u),
                        style: g,
                        children: u.label
                    })
                })
            }
        },
        16494: function(e, o, n) {
            "use strict";
            n.d(o, {
                Z: function() {
                    return i
                }
            });
            var t = n(85893),
                l = n(31996);

            function i(e) {
                var o = e.text,
                    n = e.className,
                    i = e.classNameChild;
                switch (e.variant) {
                    case "form":
                        return (0, t.jsx)("div", {
                            className: "w-full max-w-screen-sm my-8",
                            children: (0, t.jsxs)("div", {
                                className: "animate-pulse flex space-y-8 flex-col",
                                children: [(0, t.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, t.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/2"
                                    }), (0, t.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, t.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-5/6"
                                    })]
                                }), (0, t.jsx)("hr", {}), (0, t.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, t.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/4"
                                    }), (0, t.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, t.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-1/2"
                                    })]
                                }), (0, t.jsx)("hr", {}), (0, t.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, t.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/4"
                                    }), (0, t.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, t.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-1/2"
                                    })]
                                }), (0, t.jsx)("hr", {}), (0, t.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, t.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/6"
                                    }), (0, t.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, t.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-3/4"
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: "h-10 bg-gray-200 rounded w-1/4 ml-auto mt-4"
                                })]
                            })
                        });
                    case "skeleton":
                        return (0, t.jsx)("div", {
                            className: n,
                            children: (0, t.jsx)("div", {
                                className: "animate-pulse",
                                children: (0, t.jsx)("div", {
                                    className: (0, l.AK)("h-6 bg-gray-200 rounded", i)
                                })
                            })
                        });
                    case "table":
                        return (0, t.jsx)("div", {
                            className: "w-full my-8",
                            children: (0, t.jsxs)("div", {
                                className: "animate-pulse flex space-y-2 flex-col",
                                children: [(0, t.jsxs)("div", {
                                    className: "space-x-2 flex",
                                    children: [(0, t.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, t.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, t.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, t.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, t.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, t.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    })]
                                }), [1, 2, 3, 4, 5, 6].map((function(e) {
                                    return (0, t.jsxs)("div", {
                                        className: "space-x-2 flex",
                                        children: [(0, t.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, t.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, t.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, t.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, t.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, t.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        })]
                                    }, e)
                                }))]
                            })
                        });
                    default:
                        return (0, t.jsxs)("div", {
                            className: (0, l.AK)("inline-flex items-center", n),
                            children: [(0, t.jsxs)("svg", {
                                className: (0, l.AK)("animate-spin ml-1 mr-3 h-4 w-4", n && "text-indigo-600"),
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [(0, t.jsx)("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }), (0, t.jsx)("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })]
                            }), o || "" === o ? o : "Loading..."]
                        })
                }
            }
        },
        40617: function(e, o, n) {
            "use strict";
            n.r(o), n.d(o, {
                default: function() {
                    return v
                }
            });
            var t = n(14251),
                l = n(52875),
                i = n(85893),
                a = n(31996),
                r = n(29260),
                s = n.n(r),
                u = n(52077),
                d = n(399),
                c = n(3517);

            function v(e) {
                var o, n = e.id,
                    r = e.block,
                    v = e.website,
                    f = null === r || void 0 === r ? void 0 : r.headline,
                    p = null === r || void 0 === r ? void 0 : r.showImage,
                    m = null === r || void 0 === r ? void 0 : r.showIcon,
                    g = null === r || void 0 === r ? void 0 : r.showHeading,
                    b = null === r || void 0 === r ? void 0 : r.showContent,
                    h = null === r || void 0 === r ? void 0 : r.showButton,
                    y = null === r || void 0 === r ? void 0 : r.aspectRatio,
                    x = null === r || void 0 === r ? void 0 : r.cornerRadius,
                    j = null === r || void 0 === r ? void 0 : r.align,
                    w = null !== (o = null === r || void 0 === r ? void 0 : r.background) && void 0 !== o ? o : "#FFFFFF",
                    N = (0, a.$O)((0, c.dF)(w)),
                    k = (0, d.Z)(r).minHeight;
                return (0, i.jsxs)("section", {
                    id: n,
                    className: (0, a.AK)("flex flex-none flex-shrink-0 relative z-10", (0, a.A2)((null === r || void 0 === r ? void 0 : r.verticalAlign) || "center")),
                    style: (0, l.Z)((0, t.Z)({}, (0, c.IP)(w)), {
                        minHeight: k
                    }),
                    children: [(0, i.jsx)(c.hA, {
                        background: w
                    }), (0, i.jsxs)("div", {
                        className: (0, a.AK)("container mx-auto relative z-10", function(e) {
                            var o = "";
                            switch (null === e || void 0 === e ? void 0 : e.top) {
                                case "none":
                                    o += "pt-0 ";
                                    break;
                                case "small":
                                    o += "pt-8 lg:pt-12 ";
                                    break;
                                case "medium":
                                    o += "pt-12 lg:pt-20 ";
                                    break;
                                case "large":
                                    o += "pt-16 lg:pt-32 ";
                                    break;
                                default:
                                    o += "pt-12 lg:pt-14 xl:pt-20 "
                            }
                            switch (null === e || void 0 === e ? void 0 : e.bottom) {
                                case "none":
                                    o += "pb-0";
                                    break;
                                case "small":
                                    o += "pb-8 lg:pb-12";
                                    break;
                                case "medium":
                                    o += "pb-12 lg:pb-20";
                                    break;
                                case "large":
                                    o += "pb-16 lg:pb-32";
                                    break;
                                default:
                                    o += "pb-12 lg:pb-14 xl:pb-20"
                            }
                            return o
                        }(null === r || void 0 === r ? void 0 : r.spacing)),
                        children: [f && (0, i.jsx)("h2", {
                            className: (0, a.AK)("heading-large mb-6", "text-".concat(j)),
                            style: (0, t.Z)({
                                color: N
                            }, (0, a.j2)(v)),
                            children: f
                        }), (null === r || void 0 === r ? void 0 : r.items) && (0, i.jsxs)("div", {
                            className: (0, a.AK)("flex flex-col sm:flex-row flex-wrap gap-10", "justify-".concat("left" === j ? "start" : "center" === j ? "center" : "end")),
                            children: [(0, i.jsx)("span", {
                                className: "hidden justify-center justify-end justify-start"
                            }), r.items.map((function(e, o) {
                                var n, l, d, c, f, w;
                                return (0, i.jsxs)("div", {
                                    className: "block-list-item w-full",
                                    children: [p && e.image && (0, i.jsx)("div", {
                                        className: (0, a.AK)("flex-shrink-0 relative mb-6", (0, a.n3)(y)),
                                        children: (0, i.jsx)(s(), {
                                            src: e.image.url,
                                            onContextMenu: function(e) {
                                                e.preventDefault()
                                            },
                                            objectFit: (null === r || void 0 === r ? void 0 : r.imageFit) || "cover",
                                            objectPosition: "".concat(e.imagePositionX || "center", " ").concat(e.imagePositionY || "center"),
                                            layout: "fill",
                                            alt: e.title,
                                            className: (0, a.yW)(x)
                                        })
                                    }), m && (null === (n = e.icon) || void 0 === n ? void 0 : n.media) && (0, i.jsx)("div", {
                                        className: (0, a.AK)("flex-shrink-0 relative mb-6", (null === r || void 0 === r ? void 0 : r.iconSize) || "w-12 h-12", "left" === j ? "mr-auto" : "center" === j ? "mx-auto" : "ml-auto"),
                                        children: (0, i.jsx)("div", {
                                            className: "absolute w-full h-full",
                                            style: {
                                                backgroundColor: (null === (l = e.icon) || void 0 === l ? void 0 : l.color) || "#1F2937",
                                                WebkitMaskImage: 'url("'.concat(null === e || void 0 === e || null === (d = e.icon) || void 0 === d || null === (c = d.media) || void 0 === c ? void 0 : c.url, '")'),
                                                maskImage: 'url("'.concat(null === e || void 0 === e || null === (f = e.icon) || void 0 === f || null === (w = f.media) || void 0 === w ? void 0 : w.url, '")'),
                                                WebkitMaskPosition: "center",
                                                maskPosition: "center",
                                                WebkitMaskRepeat: "no-repeat",
                                                maskRepeat: "no-repeat",
                                                WebkitMaskSize: "contain",
                                                maskSize: "contain"
                                            }
                                        })
                                    }), (0, i.jsxs)("div", {
                                        className: "text-".concat(j),
                                        children: [g && (0, i.jsx)("p", {
                                            className: "heading-medium mb-4",
                                            style: (0, t.Z)({
                                                color: N
                                            }, (0, a.j2)(v)),
                                            children: e.title
                                        }), b && (0, i.jsx)("div", {
                                            className: "rich-text-block",
                                            style: {
                                                color: N
                                            },
                                            dangerouslySetInnerHTML: {
                                                __html: e.content
                                            }
                                        }), h && (null === e || void 0 === e ? void 0 : e.button) && (0, i.jsx)(u.Z, {
                                            button: e.button,
                                            website: v,
                                            className: "lg mt-4"
                                        })]
                                    })]
                                }, o)
                            }))]
                        })]
                    })]
                })
            }
        },
        399: function(e, o, n) {
            "use strict";
            n.d(o, {
                Z: function() {
                    return l
                }
            });
            var t = n(67294);

            function l(e) {
                var o, n, l = (0, t.useState)(0),
                    i = l[0],
                    a = l[1],
                    r = (0, t.useState)([0, 0]),
                    s = r[0],
                    u = r[1];
                return (0, t.useEffect)((function() {
                    var e = function() {
                        u([window.innerWidth, window.innerHeight])
                    };
                    return window.addEventListener("resize", e), e(),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }), []), (0, t.useEffect)((function() {
                    var o;
                    e && a(1 === e.idx ? (null === (o = null === document || void 0 === document ? void 0 : document.getElementById("website-header")) || void 0 === o ? void 0 : o.offsetHeight) || 80 : 0)
                }), [e, s]), {
                    minHeight: (null === e || void 0 === e || null === (o = e.spacing) || void 0 === o ? void 0 : o.minHeight) ? "calc(".concat("min-h-screen" === (null === e || void 0 === e || null === (n = e.spacing) || void 0 === n ? void 0 : n.minHeight) ? "100vh" : "240px", " - ").concat((null === e || void 0 === e ? void 0 : e.combineWithHeader) ? 0 : i, "px)") : "240px",
                    headerHeight: i
                }
            }
        },
        71210: function(e, o) {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.getDomainLocale = function(e, o, n, t) {
                return !1
            };
            ("function" === typeof o.default || "object" === typeof o.default && null !== o.default) && "undefined" === typeof o.default.__esModule && (Object.defineProperty(o.default, "__esModule", {
                value: !0
            }), Object.assign(o.default, o), e.exports = o.default)
        },
        48418: function(e, o, n) {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var t = n(39274).Z;
            n(25654).default;
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0;
            var l = n(12845).Z,
                i = n(38774).Z,
                a = l(n(67294)),
                r = n(76273),
                s = n(22725),
                u = n(63462),
                d = n(21018),
                c = n(57190),
                v = n(71210),
                f = n(98684),
                p = {};

            function m(e, o, n, t) {
                if (e && r.isLocalURL(o)) {
                    Promise.resolve(e.prefetch(o, n, t)).catch((function(e) {
                        0
                    }));
                    var l = t && "undefined" !== typeof t.locale ? t.locale : e && e.locale;
                    p[o + "%" + n + (l ? "%" + l : "")] = !0
                }
            }
            var g = a.default.forwardRef((function(e, o) {
                var n, l = e.href,
                    g = e.as,
                    b = e.children,
                    h = e.prefetch,
                    y = e.passHref,
                    x = e.replace,
                    j = e.shallow,
                    w = e.scroll,
                    N = e.locale,
                    k = e.onClick,
                    C = e.onMouseEnter,
                    P = e.onTouchStart,
                    _ = e.legacyBehavior,
                    O = void 0 === _ ? !0 !== Boolean(!1) : _,
                    R = i(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                n = b, !O || "string" !== typeof n && "number" !== typeof n || (n = a.default.createElement("a", null, n));
                var L = !1 !== h,
                    M = a.default.useContext(u.RouterContext),
                    A = a.default.useContext(d.AppRouterContext);
                A && (M = A);
                var E, F = a.default.useMemo((function() {
                        var e = t(r.resolveHref(M, l, !0), 2),
                            o = e[0],
                            n = e[1];
                        return {
                            href: o,
                            as: g ? r.resolveHref(M, g) : n || o
                        }
                    }), [M, l, g]),
                    H = F.href,
                    K = F.as,
                    S = a.default.useRef(H),
                    Z = a.default.useRef(K);
                O && (E = a.default.Children.only(n));
                var D = O ? E && "object" === typeof E && E.ref : o,
                    z = t(c.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    I = z[0],
                    T = z[1],
                    B = z[2],
                    W = a.default.useCallback((function(e) {
                        Z.current === K && S.current === H || (B(), Z.current = K, S.current = H), I(e), D && ("function" === typeof D ? D(e) : "object" === typeof D && (D.current = e))
                    }), [K, D, H, B, I]);
                a.default.useEffect((function() {
                    var e = T && L && r.isLocalURL(H),
                        o = "undefined" !== typeof N ? N : M && M.locale,
                        n = p[H + "%" + K + (o ? "%" + o : "")];
                    e && !n && m(M, H, K, {
                        locale: o
                    })
                }), [K, H, T, N, L, M]);
                var U = {
                    ref: W,
                    onClick: function(e) {
                        O || "function" !== typeof k || k(e), O && E.props && "function" === typeof E.props.onClick && E.props.onClick(e), e.defaultPrevented || function(e, o, n, t, l, i, s, u, d, c) {
                            if ("A" !== e.currentTarget.nodeName.toUpperCase() || ! function(e) {
                                    var o = e.currentTarget.target;
                                    return o && "_self" !== o || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) && r.isLocalURL(n)) {
                                e.preventDefault();
                                var v = function() {
                                    "beforePopState" in o ? o[l ? "replace" : "push"](n, t, {
                                        shallow: i,
                                        locale: u,
                                        scroll: s
                                    }) : o[l ? "replace" : "push"](n, {
                                        forceOptimisticNavigation: !c
                                    })
                                };
                                d ? a.default.startTransition(v) : v()
                            }
                        }(e, M, H, K, x, j, w, N, Boolean(A), L)
                    },
                    onMouseEnter: function(e) {
                        O || "function" !== typeof C || C(e), O && E.props && "function" === typeof E.props.onMouseEnter && E.props.onMouseEnter(e), !L && A || r.isLocalURL(H) && m(M, H, K, {
                            priority: !0
                        })
                    },
                    onTouchStart: function(e) {
                        O || "function" !== typeof P || P(e), O && E.props && "function" === typeof E.props.onTouchStart && E.props.onTouchStart(e), !L && A || r.isLocalURL(H) && m(M, H, K, {
                            priority: !0
                        })
                    }
                };
                if (!O || y || "a" === E.type && !("href" in E.props)) {
                    var G = "undefined" !== typeof N ? N : M && M.locale,
                        X = M && M.isLocaleDomain && v.getDomainLocale(K, G, M.locales, M.domainLocales);
                    U.href = X || f.addBasePath(s.addLocale(K, G, M && M.defaultLocale))
                }
                return O ? a.default.cloneElement(E, U) : a.default.createElement("a", Object.assign({}, R, U), n)
            }));
            o.default = g, ("function" === typeof o.default || "object" === typeof o.default && null !== o.default) && "undefined" === typeof o.default.__esModule && (Object.defineProperty(o.default, "__esModule", {
                value: !0
            }), Object.assign(o.default, o), e.exports = o.default)
        },
        21018: function(e, o, n) {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.TemplateContext = o.GlobalLayoutRouterContext = o.LayoutRouterContext = o.AppRouterContext = void 0;
            var t = (0, n(12845).Z)(n(67294)),
                l = t.default.createContext(null);
            o.AppRouterContext = l;
            var i = t.default.createContext(null);
            o.LayoutRouterContext = i;
            var a = t.default.createContext(null);
            o.GlobalLayoutRouterContext = a;
            var r = t.default.createContext(null);
            o.TemplateContext = r
        },
        41664: function(e, o, n) {
            e.exports = n(48418)
        },
        52875: function(e, o, n) {
            "use strict";

            function t(e, o) {
                return o = null != o ? o : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : function(e, o) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        o && (t = t.filter((function(o) {
                            return Object.getOwnPropertyDescriptor(e, o).enumerable
                        }))), n.push.apply(n, t)
                    }
                    return n
                }(Object(o)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(o, n))
                })), e
            }
            n.d(o, {
                Z: function() {
                    return t
                }
            })
        }
    }
]);