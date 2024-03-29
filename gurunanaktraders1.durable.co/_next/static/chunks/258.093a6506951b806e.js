"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [258], {
        3517: function(e, l, n) {
            n.d(l, {
                IP: function() {
                    return r
                },
                dF: function() {
                    return t
                },
                hA: function() {
                    return a
                }
            });
            var o = n(85893),
                i = n(31996);
            n(67294);

            function t(e) {
                switch (null === e || void 0 === e ? void 0 : e.type) {
                    case "color":
                    case "gradient":
                        return null === e || void 0 === e ? void 0 : e.color;
                    case "image":
                        var l, n, o;
                        return (null === e || void 0 === e || null === (l = e.overlay) || void 0 === l || null === (n = l.color) || void 0 === n ? void 0 : n.includes("rgba")) ? (0, i.s)(e.overlay.color) : null === e || void 0 === e || null === (o = e.overlay) || void 0 === o ? void 0 : o.color;
                    default:
                        return e
                }
            }

            function r(e) {
                switch (null === e || void 0 === e ? void 0 : e.type) {
                    case "color":
                        return {
                            backgroundColor: e.color
                        };
                    case "gradient":
                        var l, n, o;
                        return {
                            backgroundImage: "linear-gradient(".concat(null !== (l = e.direction) && void 0 !== l ? l : "180deg", ", ").concat(null !== (n = e.color) && void 0 !== n ? n : "#FFFFFF", ", ").concat(null !== (o = e.color2) && void 0 !== o ? o : "#D1D5DB", ")")
                        };
                    case "image":
                        var i, t;
                        return {
                            backgroundImage: "url(".concat((null === (i = e.image) || void 0 === i ? void 0 : i.preview) || (null === (t = e.image) || void 0 === t ? void 0 : t.url) || e.image, ")"),
                            backgroundPosition: "".concat(e.imagePositionX || "center", " ").concat(e.imagePositionY || "center"),
                            backgroundSize: "cover"
                        };
                    default:
                        return {
                            backgroundColor: e
                        }
                }
            }
            var a = function(e) {
                var l, n, t, r, a, d = e.background,
                    u = (null === d || void 0 === d || null === (l = d.overlay) || void 0 === l ? void 0 : l.color.includes("rgba")) ? (0, i.s)(null === d || void 0 === d || null === (n = d.overlay) || void 0 === n ? void 0 : n.color) : null === d || void 0 === d || null === (t = d.overlay) || void 0 === t ? void 0 : t.color;
                return "image" === (null === d || void 0 === d ? void 0 : d.type) && d.overlay ? (0, o.jsx)("div", {
                    className: (0, i.AK)("w-full h-full absolute top-0 left-0 z-0"),
                    style: {
                        backgroundColor: (0, i.mR)(null !== u && void 0 !== u ? u : "#000000", null !== (a = null === d || void 0 === d || null === (r = d.overlay) || void 0 === r ? void 0 : r.amount) && void 0 !== a ? a : 50)
                    }
                }) : null
            }
        },
        40944: function(e, l, n) {
            var o = n(6453),
                i = n(85893),
                t = n(83282);
            l.Z = function(e) {
                var l = (0, o.Z)({}, t)[e.icon];
                return l ? (0, i.jsx)(l, {
                    className: e.className,
                    onClick: e.onClick,
                    "aria-hidden": "true"
                }) : "<></>"
            }
        },
        10258: function(e, l, n) {
            n.r(l), n.d(l, {
                default: function() {
                    return g
                }
            });
            var o = n(14251),
                i = n(52875),
                t = n(85893),
                r = n(31996),
                a = n(33752),
                d = n.n(a),
                u = n(40944),
                c = n(29260),
                v = n.n(c),
                s = n(399),
                m = n(3517);

            function g(e) {
                var l, n, a, c, g, f, h, x, b, p, y, w = e.id,
                    j = e.website,
                    k = e.block;
                Array.isArray(k.items) || (k.items = [{
                    content: k.content,
                    by: k.by
                }]);
                var N, A = null === k || void 0 === k ? void 0 : k.align,
                    C = null !== (N = null === k || void 0 === k ? void 0 : k.background) && void 0 !== N ? N : "#FFFFFF",
                    F = (0, r.$O)((0, m.dF)(C)),
                    K = (0, s.Z)(k).minHeight;
                return (0, t.jsxs)("section", {
                    id: w,
                    className: (0, r.AK)("flex flex-none flex-shrink-0 relative z-10", (0, r.A2)((null === k || void 0 === k ? void 0 : k.verticalAlign) || "center")),
                    style: (0, i.Z)((0, o.Z)({}, (0, m.IP)(C)), {
                        minHeight: K
                    }),
                    children: [(0, t.jsx)(m.hA, {
                        background: C
                    }), (0, t.jsx)("div", {
                        className: (0, r.AK)("container mx-auto testimonials-carousel relative z-10", function(e) {
                            var l = "";
                            switch (null === e || void 0 === e ? void 0 : e.top) {
                                case "none":
                                    l += "pt-0 ";
                                    break;
                                case "small":
                                    l += "pt-8 lg:pt-12 ";
                                    break;
                                case "medium":
                                    l += "pt-12 lg:pt-20 ";
                                    break;
                                case "large":
                                    l += "pt-16 lg:pt-32 ";
                                    break;
                                default:
                                    l += "pt-12 lg:pt-14 xl:pt-20 "
                            }
                            switch (null === e || void 0 === e ? void 0 : e.bottom) {
                                case "none":
                                    l += "pb-0";
                                    break;
                                case "small":
                                    l += "pb-8 lg:pb-12";
                                    break;
                                case "medium":
                                    l += "pb-12 lg:pb-20";
                                    break;
                                case "large":
                                    l += "pb-16 lg:pb-32";
                                    break;
                                default:
                                    l += "pb-12 lg:pb-14 xl:pb-20"
                            }
                            return l
                        }(null === k || void 0 === k ? void 0 : k.spacing)),
                        children: (null === k || void 0 === k || null === (l = k.items) || void 0 === l ? void 0 : l.length) > 1 ? (0, t.jsx)(d(), {
                            cellAlign: "center",
                            slidesToShow: 1,
                            autoplay: !0,
                            pauseOnHover: !0,
                            wrapAround: !0,
                            transitionMode: "scroll",
                            defaultControlsConfig: {
                                nextButtonStyle: {
                                    background: "transparent"
                                },
                                nextButtonText: (0, t.jsx)(u.Z, {
                                    icon: "ChevronRightIcon",
                                    className: (0, r.AK)("w-6 lg:w-12 h-6 lg:h-12 -mr-4 md:mr-0", "#111827" === F ? "text-gray-900" : "text-white")
                                }),
                                prevButtonStyle: {
                                    background: "transparent"
                                },
                                prevButtonText: (0, t.jsx)(u.Z, {
                                    icon: "ChevronLeftIcon",
                                    className: (0, r.AK)("w-6 lg:w-12 h-6 lg:h-12 -ml-4 md:ml-0", "#111827" === F ? "text-gray-900" : "text-white")
                                })
                            },
                            renderBottomCenterControls: function(e) {
                                var l;
                                return (0, t.jsx)("ul", {
                                    className: (0, r.AK)("flex gap-4 lg:gap-5 w-full", "right" === A ? "justify-end" : "left" === A ? "justify-start" : "justify-center"),
                                    children: null === k || void 0 === k || null === (l = k.items) || void 0 === l ? void 0 : l.map((function(l, n) {
                                        return (0, t.jsx)("li", {
                                            children: (0, t.jsx)("button", {
                                                className: (0, r.AK)("w-2.5 h-2.5 rounded-full transition-all", e.currentSlide === n ? "bg-gray-900 ring-4 ring-gray-200" : "", e.currentSlide > n ? "bg-gray-900" : "", e.currentSlide < n ? "bg-gray-400" : ""),
                                                onClick: function() {
                                                    return e.goToSlide(n)
                                                }
                                            })
                                        }, n)
                                    }))
                                })
                            },
                            children: null === k || void 0 === k || null === (n = k.items) || void 0 === n ? void 0 : n.map((function(e, l) {
                                var n, i, a;
                                return (0, t.jsx)("div", {
                                    className: (0, r.AK)("px-8 md:px-28 my-auto h-full flex"),
                                    children: (0, t.jsxs)("div", {
                                        className: (0, r.AK)("flex flex-col gap-4 justify-center lg:max-w-5xl break-word", "text-".concat(A), "".concat("left" === A ? "ml-0 mr-auto items-start" : "right" === A ? "ml-auto mr-0 items-end" : "mx-auto items-center")),
                                        children: [(null === (n = e.image) || void 0 === n ? void 0 : n.url) && (0, t.jsx)("div", {
                                            className: (0, r.AK)("relative w-24 h-24 rounded-full overflow-hidden"),
                                            children: (0, t.jsx)(v(), {
                                                onContextMenu: function(e) {
                                                    e.preventDefault()
                                                },
                                                src: null === e || void 0 === e || null === (i = e.image) || void 0 === i ? void 0 : i.url,
                                                alt: null === e || void 0 === e || null === (a = e.image) || void 0 === a ? void 0 : a.author,
                                                layout: "fill",
                                                objectFit: "cover"
                                            })
                                        }), e.content && (0, t.jsx)("h3", {
                                            className: "heading-medium",
                                            style: (0, o.Z)({
                                                color: F
                                            }, (0, r.j2)(j)),
                                            children: e.content
                                        }), e.by && (0, t.jsx)("p", {
                                            className: "body-large",
                                            style: {
                                                color: F
                                            },
                                            children: e.by
                                        })]
                                    })
                                }, "testimonial-item-".concat(l))
                            }))
                        }) : (0, t.jsx)("div", {
                            className: "flex h-full my-auto",
                            children: (0, t.jsxs)("div", {
                                className: (0, r.AK)("max-w-5xl flex flex-col gap-4 justify-center", "text-".concat(A), "".concat("left" === A ? "ml-0 mr-auto items-start" : "right" === A ? "ml-auto mr-0 items-end" : "mx-auto items-center")),
                                children: [(null === (a = null === k || void 0 === k ? void 0 : k.items[0]) || void 0 === a ? void 0 : a.image) && (0, t.jsx)("div", {
                                    className: (0, r.AK)("relative w-24 h-24 rounded-full overflow-hidden"),
                                    children: (0, t.jsx)(v(), {
                                        onContextMenu: function(e) {
                                            e.preventDefault()
                                        },
                                        src: null === (c = null === k || void 0 === k ? void 0 : k.items[0]) || void 0 === c || null === (g = c.image) || void 0 === g ? void 0 : g.url,
                                        alt: null === (f = null === k || void 0 === k ? void 0 : k.items[0]) || void 0 === f || null === (h = f.image) || void 0 === h ? void 0 : h.author,
                                        layout: "fill",
                                        objectFit: "cover"
                                    })
                                }), (null === (x = null === k || void 0 === k ? void 0 : k.items[0]) || void 0 === x ? void 0 : x.content) && (0, t.jsx)("h3", {
                                    className: "heading-medium",
                                    style: (0, o.Z)({
                                        color: F
                                    }, (0, r.j2)(j)),
                                    children: null === (b = null === k || void 0 === k ? void 0 : k.items[0]) || void 0 === b ? void 0 : b.content
                                }), (null === (p = null === k || void 0 === k ? void 0 : k.items[0]) || void 0 === p ? void 0 : p.by) && (0, t.jsx)("p", {
                                    className: "body-large",
                                    style: {
                                        color: F
                                    },
                                    children: null === (y = null === k || void 0 === k ? void 0 : k.items[0]) || void 0 === y ? void 0 : y.by
                                })]
                            })
                        })
                    })]
                })
            }
        },
        399: function(e, l, n) {
            n.d(l, {
                Z: function() {
                    return i
                }
            });
            var o = n(67294);

            function i(e) {
                var l, n, i = (0, o.useState)(0),
                    t = i[0],
                    r = i[1],
                    a = (0, o.useState)([0, 0]),
                    d = a[0],
                    u = a[1];
                return (0, o.useEffect)((function() {
                    var e = function() {
                        u([window.innerWidth, window.innerHeight])
                    };
                    return window.addEventListener("resize", e), e(),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }), []), (0, o.useEffect)((function() {
                    var l;
                    e && r(1 === e.idx ? (null === (l = null === document || void 0 === document ? void 0 : document.getElementById("website-header")) || void 0 === l ? void 0 : l.offsetHeight) || 80 : 0)
                }), [e, d]), {
                    minHeight: (null === e || void 0 === e || null === (l = e.spacing) || void 0 === l ? void 0 : l.minHeight) ? "calc(".concat("min-h-screen" === (null === e || void 0 === e || null === (n = e.spacing) || void 0 === n ? void 0 : n.minHeight) ? "100vh" : "240px", " - ").concat((null === e || void 0 === e ? void 0 : e.combineWithHeader) ? 0 : t, "px)") : "240px",
                    headerHeight: t
                }
            }
        }
    }
]);