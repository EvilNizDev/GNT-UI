"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6166], {
        52077: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(85893),
                a = n(41664),
                s = n.n(a),
                l = n(16494),
                i = n(31996);

            function o(e) {
                var t, n, a, o, u = e.button,
                    c = e.type,
                    d = e.website,
                    m = e.action,
                    v = e.loading,
                    f = e.className,
                    p = (null === d || void 0 === d || null === (t = d.button) || void 0 === t ? void 0 : t.background) || (null === d || void 0 === d ? void 0 : d.secondaryColor),
                    g = {
                        background: "outline" === (null === d || void 0 === d || null === (n = d.button) || void 0 === n ? void 0 : n.style) ? "transparent" : p,
                        borderRadius: isNaN(null === d || void 0 === d || null === (a = d.button) || void 0 === a ? void 0 : a.cornerRadius) ? 8 : d.button.cornerRadius,
                        color: "outline" === (null === d || void 0 === d || null === (o = d.button) || void 0 === o ? void 0 : o.style) ? p : (0, i.$O)(p),
                        border: "2px solid ".concat(p)
                    };
                return m && "function" === typeof m || "submit" === c ? (0, r.jsx)("button", {
                    type: "submit" === c ? "submit" : "button",
                    onClick: m,
                    className: (0, i.AK)("button primary", f),
                    style: g,
                    disabled: v,
                    children: v ? (0, r.jsx)(l.Z, {}) : u.label
                }) : (0, r.jsx)(s(), {
                    href: function(e) {
                        if (e) {
                            if ("email" === e.type) return "mailto:" + e.link;
                            if ("phone" === e.type) return "tel:" + e.link;
                            if ("section" === e.type) return "#" + e.link;
                            if ("page" === e.type) {
                                var t, n, r, a = null === d || void 0 === d || null === (t = d.pages) || void 0 === t ? void 0 : t.find((function(t) {
                                        return t._id === e.page
                                    })),
                                    s = (null === a || void 0 === a ? void 0 : a.Parent) ? null === d || void 0 === d || null === (n = d.pages) || void 0 === n ? void 0 : n.find((function(e) {
                                        return e._id === (null === a || void 0 === a ? void 0 : a.Parent)
                                    })) : null,
                                    l = "";
                                return s && (l += "".concat(s.slug, "/")), l += null !== (r = null === a || void 0 === a ? void 0 : a.slug) && void 0 !== r ? r : "/"
                            }
                            var i, o = null === (i = e.link) || void 0 === i ? void 0 : i.replace(/https?:\/\//gi, "");
                            return o && "#" !== o ? "https://" + o : "#"
                        }
                        return "/"
                    }(u),
                    scroll: "section" !== (null === u || void 0 === u ? void 0 : u.type),
                    children: (0, r.jsx)("a", {
                        className: (0, i.AK)("button primary", f),
                        target: function(e) {
                            var t, n, r, a = null === d || void 0 === d || null === (t = d.pages) || void 0 === t ? void 0 : t.find((function(t) {
                                return t._id === e.page
                            }));
                            return e.newPage ? "_blank" : (null === a || void 0 === a ? void 0 : a.forceRender) ? "_parent" : (null === d || void 0 === d || null === (n = d.button) || void 0 === n ? void 0 : n.target) ? null === d || void 0 === d || null === (r = d.button) || void 0 === r ? void 0 : r.target : "_self"
                        }(u),
                        style: g,
                        children: u.label
                    })
                })
            }
        },
        74007: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var r = n(85893),
                a = n(67294),
                s = n(17258),
                l = n(44080),
                i = n(31996),
                o = n(40944);

            function u(e) {
                var t = e.className,
                    n = e.icon,
                    u = e.iconClassName,
                    c = e.button,
                    d = e.buttonClassName,
                    m = e.openClassName,
                    v = e.iconOpenClassName,
                    f = e.children,
                    p = e.inline,
                    g = e.itemsContainerClass,
                    y = e.disabled,
                    x = e.itemsContainerStyle,
                    h = e.openUp,
                    b = void 0 !== h && h,
                    N = function() {
                        R(function(e) {
                            if (!e) return !1;
                            var t = e.getBoundingClientRect();
                            return !(t.left >= 0 && t.right <= (window.innerWidth || document.documentElement.clientWidth))
                        }(j.current))
                    },
                    j = (0, a.useRef)(),
                    w = (0, a.useState)(!1),
                    I = w[0],
                    R = w[1];
                return (0, r.jsx)(s.v, {
                    as: "div",
                    className: (0, i.AK)("relative inline-block text-left", t),
                    onClick: function(e) {
                        return e.stopPropagation()
                    },
                    children: function(e) {
                        var t = e.open;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(s.v.Button, {
                                className: (0, i.AK)(d, t ? m : "", "cursor-pointer z-5 focus:outline-none"),
                                disabled: y,
                                onClick: function(e) {
                                    return e.stopPropagation()
                                },
                                children: c || (0, r.jsx)(o.Z, {
                                    icon: n || "DotsVerticalIcon",
                                    className: (0, i.AK)(u, "h-5 w-5", t ? v || "text-indigo-500" : "text-gray-500")
                                })
                            }), (0, r.jsx)(l.u, {
                                show: t,
                                as: a.Fragment,
                                enter: "transition ease-out duration-100",
                                enterFrom: "transform opacity-0 scale-95",
                                enterTo: "transform opacity-100 scale-100",
                                leave: "transition ease-in duration-75",
                                leaveFrom: "transform opacity-100 scale-100",
                                leaveTo: "transform opacity-0 scale-95",
                                ref: j,
                                beforeEnter: N,
                                afterLeave: function() {
                                    return R(!1)
                                },
                                children: (0, r.jsx)(s.v.Items, {
                                    className: (0, i.AK)(g, "z-100 max-h-60 py-3 px-6 rounded-lg bg-white focus:outline-none overflow-y-auto space-y-2 shadow-lg", p ? "static" : "absolute", b ? "bottom-full origin-bottom-left" : "top-full origin-top-left", I ? "right-0" : "left-0"),
                                    style: x,
                                    children: f
                                })
                            })]
                        })
                    }
                })
            }
        },
        40944: function(e, t, n) {
            var r = n(6453),
                a = n(85893),
                s = n(83282);
            t.Z = function(e) {
                var t = (0, r.Z)({}, s)[e.icon];
                return t ? (0, a.jsx)(t, {
                    className: e.className,
                    onClick: e.onClick,
                    "aria-hidden": "true"
                }) : "<></>"
            }
        },
        16494: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(85893),
                a = n(31996);

            function s(e) {
                var t = e.text,
                    n = e.className,
                    s = e.classNameChild;
                switch (e.variant) {
                    case "form":
                        return (0, r.jsx)("div", {
                            className: "w-full max-w-screen-sm my-8",
                            children: (0, r.jsxs)("div", {
                                className: "animate-pulse flex space-y-8 flex-col",
                                children: [(0, r.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, r.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/2"
                                    }), (0, r.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, r.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-5/6"
                                    })]
                                }), (0, r.jsx)("hr", {}), (0, r.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, r.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/4"
                                    }), (0, r.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, r.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-1/2"
                                    })]
                                }), (0, r.jsx)("hr", {}), (0, r.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, r.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/4"
                                    }), (0, r.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, r.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-1/2"
                                    })]
                                }), (0, r.jsx)("hr", {}), (0, r.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, r.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/6"
                                    }), (0, r.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, r.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-3/4"
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "h-10 bg-gray-200 rounded w-1/4 ml-auto mt-4"
                                })]
                            })
                        });
                    case "skeleton":
                        return (0, r.jsx)("div", {
                            className: n,
                            children: (0, r.jsx)("div", {
                                className: "animate-pulse",
                                children: (0, r.jsx)("div", {
                                    className: (0, a.AK)("h-6 bg-gray-200 rounded", s)
                                })
                            })
                        });
                    case "table":
                        return (0, r.jsx)("div", {
                            className: "w-full my-8",
                            children: (0, r.jsxs)("div", {
                                className: "animate-pulse flex space-y-2 flex-col",
                                children: [(0, r.jsxs)("div", {
                                    className: "space-x-2 flex",
                                    children: [(0, r.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, r.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, r.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, r.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, r.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, r.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    })]
                                }), [1, 2, 3, 4, 5, 6].map((function(e) {
                                    return (0, r.jsxs)("div", {
                                        className: "space-x-2 flex",
                                        children: [(0, r.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, r.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, r.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, r.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, r.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, r.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        })]
                                    }, e)
                                }))]
                            })
                        });
                    default:
                        return (0, r.jsxs)("div", {
                            className: (0, a.AK)("inline-flex items-center", n),
                            children: [(0, r.jsxs)("svg", {
                                className: (0, a.AK)("animate-spin ml-1 mr-3 h-4 w-4", n && "text-indigo-600"),
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [(0, r.jsx)("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }), (0, r.jsx)("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })]
                            }), t || "" === t ? t : "Loading..."]
                        })
                }
            }
        },
        75654: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return x
                }
            });
            var r = n(85893),
                a = n(31996),
                s = n(71029),
                l = n(85296),
                i = n(44171),
                o = n(43180),
                u = n(10151),
                c = n(36234),
                d = n(66909),
                m = n(49791),
                v = n(28239),
                f = n(48192),
                p = n(94206),
                g = n(13487),
                y = function(e) {
                    var t = e.type,
                        n = e.className,
                        a = e.style;
                    switch (t) {
                        case "angi":
                            return (0, r.jsx)(s.Z, {
                                className: n,
                                style: a
                            });
                        case "behance":
                            return (0, r.jsx)(l.Z, {
                                className: n,
                                style: a
                            });
                        case "dribbble":
                            return (0, r.jsx)(i.Z, {
                                className: n,
                                style: a
                            });
                        case "facebook":
                            return (0, r.jsx)(o.Z, {
                                className: n,
                                style: a
                            });
                        case "homeadvisor":
                            return (0, r.jsx)(u.Z, {
                                className: n,
                                style: a
                            });
                        case "instagram":
                            return (0, r.jsx)(c.Z, {
                                className: n,
                                style: a
                            });
                        case "linkedin":
                            return (0, r.jsx)(d.Z, {
                                className: n,
                                style: a
                            });
                        case "pinterest":
                            return (0, r.jsx)(m.Z, {
                                className: n,
                                style: a
                            });
                        case "tiktok":
                            return (0, r.jsx)(v.Z, {
                                className: n,
                                style: a
                            });
                        case "thumbtack":
                            return (0, r.jsx)(f.Z, {
                                className: n,
                                style: a
                            });
                        case "twitter":
                            return (0, r.jsx)(p.Z, {
                                className: n,
                                style: a
                            });
                        case "youtube":
                            return (0, r.jsx)(g.Z, {
                                className: n,
                                style: a
                            });
                        default:
                            return null
                    }
                },
                x = function(e) {
                    var t, n, s, l, i, o, u, c, d = e.icon,
                        m = e.color,
                        v = e.settings,
                        f = void 0 === v ? {} : v,
                        p = f.size = null !== (l = f.size) && void 0 !== l ? l : "large",
                        g = f.shape = null !== (i = f.shape) && void 0 !== i ? i : "none",
                        x = f.style = null !== (o = f.style) && void 0 !== o ? o : "solid",
                        h = "large" === p ? "w-8 h-8" : "medium" === p ? "w-7 h-7" : "w-6 h-6",
                        b = {};
                    return "none" !== g && (b = function() {
                        var e = "large" === p ? "w-12 h-12" : "medium" === p ? "w-10 h-10" : "w-8 h-8",
                            t = "circle" === g ? "rounded-full" : "square" === g ? "rounded-none" : "rounded" === g ? "rounded-md" : "",
                            n = "solid" === x ? m : "outline" === x ? "transparent" : "",
                            r = "outline" === x ? "border" : "";
                        return {
                            classes: (0, a.AK)(e, t, r),
                            styles: {
                                backgroundColor: n,
                                borderColor: m
                            }
                        }
                    }()), (0, r.jsxs)("div", {
                        className: (0, a.AK)("flex justify-center items-center", null !== (u = b.classes) && void 0 !== u ? u : ""),
                        style: null !== (c = b.styles) && void 0 !== c ? c : {},
                        children: ["custom" !== d.type && (0, r.jsx)(y, {
                            type: d.type,
                            className: (0, a.AK)(h),
                            style: {
                                color: "none" === g || "outline" === x ? m : (0, a.$O)(m)
                            }
                        }), "custom" === d.type && (null === (t = d.icon) || void 0 === t ? void 0 : t._id) && (0, r.jsx)("div", {
                            className: (0, a.AK)("flex-shrink-0 relative", h),
                            children: (0, r.jsx)("div", {
                                className: "absolute w-full h-full",
                                style: {
                                    backgroundColor: "none" === g || "outline" === x ? m : (0, a.$O)(m),
                                    WebkitMaskImage: 'url("'.concat(null === (n = d.icon) || void 0 === n ? void 0 : n.url, '")'),
                                    maskImage: 'url("'.concat(null === (s = d.icon) || void 0 === s ? void 0 : s.url, '")'),
                                    WebkitMaskPosition: "center",
                                    maskPosition: "center",
                                    WebkitMaskRepeat: "no-repeat",
                                    maskRepeat: "no-repeat",
                                    WebkitMaskSize: "contain",
                                    maskSize: "contain"
                                }
                            })
                        })]
                    })
                }
        },
        17258: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return L
                }
            });
            var r = n(67294),
                a = n(32984),
                s = n(12351),
                l = n(9362),
                i = n(94192),
                o = n(16723),
                u = n(23784),
                c = n(19946),
                d = n(61363),
                m = n(11497),
                v = n(64103),
                f = n(84575),
                p = n(39650),
                g = n(31591),
                y = n(16567),
                x = n(14157),
                h = n(51074),
                b = n(73781),
                N = n(40476);
            let j = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

            function w(e) {
                var t, n;
                let r = null != (t = e.innerText) ? t : "",
                    a = e.cloneNode(!0);
                if (!(a instanceof HTMLElement)) return r;
                let s = !1;
                for (let i of a.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) i.remove(), s = !0;
                let l = s ? null != (n = a.innerText) ? n : "" : r;
                return j.test(l) && (l = l.replace(j, "")), l
            }

            function I(e) {
                let t = (0, r.useRef)(""),
                    n = (0, r.useRef)("");
                return (0, b.z)((() => {
                    let r = e.current;
                    if (!r) return "";
                    let a = r.innerText;
                    if (t.current === a) return n.current;
                    let s = function(e) {
                        let t = e.getAttribute("aria-label");
                        if ("string" == typeof t) return t.trim();
                        let n = e.getAttribute("aria-labelledby");
                        if (n) {
                            let e = n.split(" ").map((e => {
                                let t = document.getElementById(e);
                                if (t) {
                                    let e = t.getAttribute("aria-label");
                                    return "string" == typeof e ? e.trim() : w(t).trim()
                                }
                                return null
                            })).filter(Boolean);
                            if (e.length > 0) return e.join(", ")
                        }
                        return w(e).trim()
                    }(r).trim().toLowerCase();
                    return t.current = a, n.current = s, s
                }))
            }
            var R, k = ((R = k || {})[R.Open = 0] = "Open", R[R.Closed = 1] = "Closed", R),
                T = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(T || {}),
                C = (e => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItem = 5] = "RegisterItem", e[e.UnregisterItem = 6] = "UnregisterItem", e))(C || {});

            function M(e, t = (e => e)) {
                let n = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
                    r = (0, f.z2)(t(e.items.slice()), (e => e.dataRef.current.domRef.current)),
                    a = n ? r.indexOf(n) : null;
                return -1 === a && (a = null), {
                    items: r,
                    activeItemIndex: a
                }
            }
            let P = {
                    1: e => 1 === e.menuState ? e : { ...e,
                        activeItemIndex: null,
                        menuState: 1
                    },
                    0: e => 0 === e.menuState ? e : { ...e,
                        __demoMode: !1,
                        menuState: 0
                    },
                    2: (e, t) => {
                        var n;
                        let r = M(e),
                            a = (0, m.d)(t, {
                                resolveItems: () => r.items,
                                resolveActiveIndex: () => r.activeItemIndex,
                                resolveId: e => e.id,
                                resolveDisabled: e => e.dataRef.current.disabled
                            });
                        return { ...e,
                            ...r,
                            searchQuery: "",
                            activeItemIndex: a,
                            activationTrigger: null != (n = t.trigger) ? n : 1
                        }
                    },
                    3: (e, t) => {
                        let n = "" !== e.searchQuery ? 0 : 1,
                            r = e.searchQuery + t.value.toLowerCase(),
                            a = (null !== e.activeItemIndex ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find((e => {
                                var t;
                                return (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(r)) && !e.dataRef.current.disabled
                            })),
                            s = a ? e.items.indexOf(a) : -1;
                        return -1 === s || s === e.activeItemIndex ? { ...e,
                            searchQuery: r
                        } : { ...e,
                            searchQuery: r,
                            activeItemIndex: s,
                            activationTrigger: 1
                        }
                    },
                    4: e => "" === e.searchQuery ? e : { ...e,
                        searchQuery: "",
                        searchActiveItemIndex: null
                    },
                    5: (e, t) => {
                        let n = M(e, (e => [...e, {
                            id: t.id,
                            dataRef: t.dataRef
                        }]));
                        return { ...e,
                            ...n
                        }
                    },
                    6: (e, t) => {
                        let n = M(e, (e => {
                            let n = e.findIndex((e => e.id === t.id));
                            return -1 !== n && e.splice(n, 1), e
                        }));
                        return { ...e,
                            ...n,
                            activationTrigger: 1
                        }
                    }
                },
                S = (0, r.createContext)(null);

            function D(e) {
                let t = (0, r.useContext)(S);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Menu /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, D), t
                }
                return t
            }

            function F(e, t) {
                return (0, a.E)(t.type, P, e, t)
            }
            S.displayName = "MenuContext";
            let A = r.Fragment;
            let E = s.AN.RenderStrategy | s.AN.Static;
            let _ = r.Fragment;
            let Z = (0, s.yV)((function(e, t) {
                    let {
                        __demoMode: n = !1,
                        ...l
                    } = e, i = (0, r.useReducer)(F, {
                        __demoMode: n,
                        menuState: n ? 0 : 1,
                        buttonRef: (0, r.createRef)(),
                        itemsRef: (0, r.createRef)(),
                        items: [],
                        searchQuery: "",
                        activeItemIndex: null,
                        activationTrigger: 1
                    }), [{
                        menuState: o,
                        itemsRef: c,
                        buttonRef: d
                    }, m] = i, v = (0, u.T)(t);
                    (0, p.O)([d, c], ((e, t) => {
                        var n;
                        m({
                            type: 1
                        }), (0, f.sP)(t, f.tJ.Loose) || (e.preventDefault(), null == (n = d.current) || n.focus())
                    }), 0 === o);
                    let g = (0, b.z)((() => {
                            m({
                                type: 1
                            })
                        })),
                        x = (0, r.useMemo)((() => ({
                            open: 0 === o,
                            close: g
                        })), [o, g]),
                        h = {
                            ref: v
                        };
                    return r.createElement(S.Provider, {
                        value: i
                    }, r.createElement(y.up, {
                        value: (0, a.E)(o, {
                            0: y.ZM.Open,
                            1: y.ZM.Closed
                        })
                    }, (0, s.sY)({
                        ourProps: h,
                        theirProps: l,
                        slot: x,
                        defaultTag: A,
                        name: "Menu"
                    })))
                })),
                z = (0, s.yV)((function(e, t) {
                    var n;
                    let a = (0, c.M)(),
                        {
                            id: l = `headlessui-menu-button-${a}`,
                            ...o
                        } = e,
                        [f, p] = D("Menu.Button"),
                        g = (0, u.T)(f.buttonRef, t),
                        y = (0, i.G)(),
                        h = (0, b.z)((e => {
                            switch (e.key) {
                                case d.R.Space:
                                case d.R.Enter:
                                case d.R.ArrowDown:
                                    e.preventDefault(), e.stopPropagation(), p({
                                        type: 0
                                    }), y.nextFrame((() => p({
                                        type: 2,
                                        focus: m.T.First
                                    })));
                                    break;
                                case d.R.ArrowUp:
                                    e.preventDefault(), e.stopPropagation(), p({
                                        type: 0
                                    }), y.nextFrame((() => p({
                                        type: 2,
                                        focus: m.T.Last
                                    })))
                            }
                        })),
                        N = (0, b.z)((e => {
                            if (e.key === d.R.Space) e.preventDefault()
                        })),
                        j = (0, b.z)((t => {
                            if ((0, v.P)(t.currentTarget)) return t.preventDefault();
                            e.disabled || (0 === f.menuState ? (p({
                                type: 1
                            }), y.nextFrame((() => {
                                var e;
                                return null == (e = f.buttonRef.current) ? void 0 : e.focus({
                                    preventScroll: !0
                                })
                            }))) : (t.preventDefault(), p({
                                type: 0
                            })))
                        })),
                        w = (0, r.useMemo)((() => ({
                            open: 0 === f.menuState
                        })), [f]),
                        I = {
                            ref: g,
                            id: l,
                            type: (0, x.f)(e, f.buttonRef),
                            "aria-haspopup": "menu",
                            "aria-controls": null == (n = f.itemsRef.current) ? void 0 : n.id,
                            "aria-expanded": e.disabled ? void 0 : 0 === f.menuState,
                            onKeyDown: h,
                            onKeyUp: N,
                            onClick: j
                        };
                    return (0, s.sY)({
                        ourProps: I,
                        theirProps: o,
                        slot: w,
                        defaultTag: "button",
                        name: "Menu.Button"
                    })
                })),
                O = (0, s.yV)((function(e, t) {
                    var n, a;
                    let o = (0, c.M)(),
                        {
                            id: v = `headlessui-menu-items-${o}`,
                            ...p
                        } = e,
                        [x, N] = D("Menu.Items"),
                        j = (0, u.T)(x.itemsRef, t),
                        w = (0, h.i)(x.itemsRef),
                        I = (0, i.G)(),
                        R = (0, y.oJ)(),
                        k = null !== R ? (R & y.ZM.Open) === y.ZM.Open : 0 === x.menuState;
                    (0, r.useEffect)((() => {
                        let e = x.itemsRef.current;
                        e && 0 === x.menuState && e !== (null == w ? void 0 : w.activeElement) && e.focus({
                            preventScroll: !0
                        })
                    }), [x.menuState, x.itemsRef, w]), (0, g.B)({
                        container: x.itemsRef.current,
                        enabled: 0 === x.menuState,
                        accept: e => "menuitem" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                        walk(e) {
                            e.setAttribute("role", "none")
                        }
                    });
                    let T = (0, b.z)((e => {
                            var t, n;
                            switch (I.dispose(), e.key) {
                                case d.R.Space:
                                    if ("" !== x.searchQuery) return e.preventDefault(), e.stopPropagation(), N({
                                        type: 3,
                                        value: e.key
                                    });
                                case d.R.Enter:
                                    if (e.preventDefault(), e.stopPropagation(), N({
                                            type: 1
                                        }), null !== x.activeItemIndex) {
                                        let {
                                            dataRef: e
                                        } = x.items[x.activeItemIndex];
                                        null == (n = null == (t = e.current) ? void 0 : t.domRef.current) || n.click()
                                    }(0, f.wI)(x.buttonRef.current);
                                    break;
                                case d.R.ArrowDown:
                                    return e.preventDefault(), e.stopPropagation(), N({
                                        type: 2,
                                        focus: m.T.Next
                                    });
                                case d.R.ArrowUp:
                                    return e.preventDefault(), e.stopPropagation(), N({
                                        type: 2,
                                        focus: m.T.Previous
                                    });
                                case d.R.Home:
                                case d.R.PageUp:
                                    return e.preventDefault(), e.stopPropagation(), N({
                                        type: 2,
                                        focus: m.T.First
                                    });
                                case d.R.End:
                                case d.R.PageDown:
                                    return e.preventDefault(), e.stopPropagation(), N({
                                        type: 2,
                                        focus: m.T.Last
                                    });
                                case d.R.Escape:
                                    e.preventDefault(), e.stopPropagation(), N({
                                        type: 1
                                    }), (0, l.k)().nextFrame((() => {
                                        var e;
                                        return null == (e = x.buttonRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    }));
                                    break;
                                case d.R.Tab:
                                    e.preventDefault(), e.stopPropagation(), N({
                                        type: 1
                                    }), (0, l.k)().nextFrame((() => {
                                        (0, f.EO)(x.buttonRef.current, e.shiftKey ? f.TO.Previous : f.TO.Next)
                                    }));
                                    break;
                                default:
                                    1 === e.key.length && (N({
                                        type: 3,
                                        value: e.key
                                    }), I.setTimeout((() => N({
                                        type: 4
                                    })), 350))
                            }
                        })),
                        C = (0, b.z)((e => {
                            if (e.key === d.R.Space) e.preventDefault()
                        })),
                        M = (0, r.useMemo)((() => ({
                            open: 0 === x.menuState
                        })), [x]),
                        P = {
                            "aria-activedescendant": null === x.activeItemIndex || null == (n = x.items[x.activeItemIndex]) ? void 0 : n.id,
                            "aria-labelledby": null == (a = x.buttonRef.current) ? void 0 : a.id,
                            id: v,
                            onKeyDown: T,
                            onKeyUp: C,
                            role: "menu",
                            tabIndex: 0,
                            ref: j
                        };
                    return (0, s.sY)({
                        ourProps: P,
                        theirProps: p,
                        slot: M,
                        defaultTag: "div",
                        features: E,
                        visible: k,
                        name: "Menu.Items"
                    })
                })),
                K = (0, s.yV)((function(e, t) {
                    let n = (0, c.M)(),
                        {
                            id: a = `headlessui-menu-item-${n}`,
                            disabled: i = !1,
                            ...d
                        } = e,
                        [v, p] = D("Menu.Item"),
                        g = null !== v.activeItemIndex && v.items[v.activeItemIndex].id === a,
                        y = (0, r.useRef)(null),
                        x = (0, u.T)(t, y);
                    (0, o.e)((() => {
                        if (v.__demoMode || 0 !== v.menuState || !g || 0 === v.activationTrigger) return;
                        let e = (0, l.k)();
                        return e.requestAnimationFrame((() => {
                            var e, t;
                            null == (t = null == (e = y.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                                block: "nearest"
                            })
                        })), e.dispose
                    }), [v.__demoMode, y, g, v.menuState, v.activationTrigger, v.activeItemIndex]);
                    let h = I(y),
                        j = (0, r.useRef)({
                            disabled: i,
                            domRef: y,
                            get textValue() {
                                return h()
                            }
                        });
                    (0, o.e)((() => {
                        j.current.disabled = i
                    }), [j, i]), (0, o.e)((() => (p({
                        type: 5,
                        id: a,
                        dataRef: j
                    }), () => p({
                        type: 6,
                        id: a
                    }))), [j, a]);
                    let w = (0, b.z)((() => {
                            p({
                                type: 1
                            })
                        })),
                        R = (0, b.z)((e => {
                            if (i) return e.preventDefault();
                            p({
                                type: 1
                            }), (0, f.wI)(v.buttonRef.current)
                        })),
                        k = (0, b.z)((() => {
                            if (i) return p({
                                type: 2,
                                focus: m.T.Nothing
                            });
                            p({
                                type: 2,
                                focus: m.T.Specific,
                                id: a
                            })
                        })),
                        T = (0, N.g)(),
                        C = (0, b.z)((e => T.update(e))),
                        M = (0, b.z)((e => {
                            T.wasMoved(e) && (i || g || p({
                                type: 2,
                                focus: m.T.Specific,
                                id: a,
                                trigger: 0
                            }))
                        })),
                        P = (0, b.z)((e => {
                            T.wasMoved(e) && (i || g && p({
                                type: 2,
                                focus: m.T.Nothing
                            }))
                        })),
                        S = (0, r.useMemo)((() => ({
                            active: g,
                            disabled: i,
                            close: w
                        })), [g, i, w]);
                    return (0, s.sY)({
                        ourProps: {
                            id: a,
                            ref: x,
                            role: "menuitem",
                            tabIndex: !0 === i ? void 0 : -1,
                            "aria-disabled": !0 === i || void 0,
                            disabled: void 0,
                            onClick: R,
                            onFocus: k,
                            onPointerEnter: C,
                            onMouseEnter: C,
                            onPointerMove: M,
                            onMouseMove: M,
                            onPointerLeave: P,
                            onMouseLeave: P
                        },
                        theirProps: d,
                        slot: S,
                        defaultTag: _,
                        name: "Menu.Item"
                    })
                })),
                L = Object.assign(Z, {
                    Button: z,
                    Items: O,
                    Item: K
                })
        }
    }
]);