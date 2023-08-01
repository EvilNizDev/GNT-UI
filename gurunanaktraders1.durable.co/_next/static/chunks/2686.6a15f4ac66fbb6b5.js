"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2686], {
        3517: function(e, l, n) {
            n.d(l, {
                IP: function() {
                    return d
                },
                dF: function() {
                    return t
                },
                hA: function() {
                    return r
                }
            });
            var i = n(85893),
                o = n(31996);
            n(67294);

            function t(e) {
                switch (null === e || void 0 === e ? void 0 : e.type) {
                    case "color":
                    case "gradient":
                        return null === e || void 0 === e ? void 0 : e.color;
                    case "image":
                        var l, n, i;
                        return (null === e || void 0 === e || null === (l = e.overlay) || void 0 === l || null === (n = l.color) || void 0 === n ? void 0 : n.includes("rgba")) ? (0, o.s)(e.overlay.color) : null === e || void 0 === e || null === (i = e.overlay) || void 0 === i ? void 0 : i.color;
                    default:
                        return e
                }
            }

            function d(e) {
                switch (null === e || void 0 === e ? void 0 : e.type) {
                    case "color":
                        return {
                            backgroundColor: e.color
                        };
                    case "gradient":
                        var l, n, i;
                        return {
                            backgroundImage: "linear-gradient(".concat(null !== (l = e.direction) && void 0 !== l ? l : "180deg", ", ").concat(null !== (n = e.color) && void 0 !== n ? n : "#FFFFFF", ", ").concat(null !== (i = e.color2) && void 0 !== i ? i : "#D1D5DB", ")")
                        };
                    case "image":
                        var o, t;
                        return {
                            backgroundImage: "url(".concat((null === (o = e.image) || void 0 === o ? void 0 : o.preview) || (null === (t = e.image) || void 0 === t ? void 0 : t.url) || e.image, ")"),
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
                var l, n, t, d, r, a = e.background,
                    s = (null === a || void 0 === a || null === (l = a.overlay) || void 0 === l ? void 0 : l.color.includes("rgba")) ? (0, o.s)(null === a || void 0 === a || null === (n = a.overlay) || void 0 === n ? void 0 : n.color) : null === a || void 0 === a || null === (t = a.overlay) || void 0 === t ? void 0 : t.color;
                return "image" === (null === a || void 0 === a ? void 0 : a.type) && a.overlay ? (0, i.jsx)("div", {
                    className: (0, o.AK)("w-full h-full absolute top-0 left-0 z-0"),
                    style: {
                        backgroundColor: (0, o.mR)(null !== s && void 0 !== s ? s : "#000000", null !== (r = null === a || void 0 === a || null === (d = a.overlay) || void 0 === d ? void 0 : d.amount) && void 0 !== r ? r : 50)
                    }
                }) : null
            }
        },
        52686: function(e, l, n) {
            n.r(l), n.d(l, {
                default: function() {
                    return m
                }
            });
            var i = n(14251),
                o = n(52875),
                t = n(85893),
                d = n(31996),
                r = n(41125),
                a = n(5152),
                s = n.n(a),
                u = n(67294),
                c = {
                    dark: "dark-v11",
                    light: "light-v11",
                    outdoors: "outdoors-v12",
                    satellite: "satellite-v9",
                    streets: "streets-v12"
                },
                x = function(e) {
                    var l, i = e.latLng,
                        o = e.markerColor,
                        d = void 0 === o ? r.theme.extend.colors.indigo[600] : o,
                        a = e.theme,
                        x = void 0 === a ? "light" : a,
                        v = e.className,
                        p = e.zoom,
                        m = void 0 === p ? 10 : p,
                        h = (0, u.useState)(null),
                        g = h[0],
                        f = h[1];
                    return (0, u.useEffect)((function() {
                        f(s()((function() {
                            return n.e(6348).then(n.bind(n, 16348)).then((function(e) {
                                return e.StaticMap
                            }))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return [16348]
                                }
                            }
                        }))
                    }), []), g ? (0, t.jsx)(g, {
                        latLng: null !== i && void 0 !== i ? i : {
                            lat: 37.0902,
                            lng: -95.7129
                        },
                        markerColor: d,
                        theme: null !== (l = c[x]) && void 0 !== l ? l : c.light,
                        className: v,
                        zoom: m
                    }) : null
                },
                v = n(399),
                p = n(3517);

            function m(e) {
                var l, n, r, a, s, u, c, m, h, g, f, b = e.id,
                    w = e.website,
                    y = e.block,
                    j = null === y || void 0 === y ? void 0 : y.align,
                    k = null !== (h = null === y || void 0 === y ? void 0 : y.background) && void 0 !== h ? h : "#FFFFFF",
                    N = (0, d.$O)((0, p.dF)(k)),
                    F = null !== (g = null === y || void 0 === y ? void 0 : y.cornerRadius) && void 0 !== g ? g : "no-rounded",
                    z = null === y || void 0 === y ? void 0 : y.address,
                    H = null !== (f = null === y || void 0 === y ? void 0 : y.latLng) && void 0 !== f ? f : {
                        lat: 37.0902,
                        lng: -95.7129
                    };
                !y || null !== y.headline && void 0 !== y.headline || (y.headline = "Location");
                var A, C, Z, K, S = (0, v.Z)(y).minHeight;
                return (0, t.jsx)("section", {
                    id: b,
                    className: (0, d.AK)("relative flex z-10", "min-h-screen" === (null === y || void 0 === y || null === (l = y.spacing) || void 0 === l ? void 0 : l.minHeight) && "background" === (null === y || void 0 === y ? void 0 : y.style) ? (0, d.A2)(y.verticalAlign) : "", "min-h-screen" !== (null === y || void 0 === y || null === (n = y.spacing) || void 0 === n ? void 0 : n.minHeight) && "background" === (null === y || void 0 === y ? void 0 : y.style) ? "!min-h-80vh md:!min-h-50vh" : ""),
                    style: (0, o.Z)((0, i.Z)({}, (0, p.IP)(k)), {
                        minHeight: "min-h-screen" === (null === y || void 0 === y || null === (r = y.spacing) || void 0 === r ? void 0 : r.minHeight) ? S : ""
                    }),
                    children: "background" === (null === y || void 0 === y ? void 0 : y.style) ? (0, t.jsxs)(t.Fragment, {
                        children: [H && (0, t.jsx)(x, {
                            latLng: H,
                            className: (0, d.AK)("min-h-screen" === (null === y || void 0 === y || null === (a = y.spacing) || void 0 === a ? void 0 : a.minHeight) && "h-full w-full", "!absolute inset-0 z-5"),
                            theme: null !== (A = null === y || void 0 === y ? void 0 : y.theme) && void 0 !== A ? A : "light",
                            markerColor: null !== (C = null === y || void 0 === y ? void 0 : y.marker) && void 0 !== C ? C : w.primaryColor,
                            zoom: 17
                        }), (0, t.jsx)("div", {
                            className: "relative z-10 container mx-auto py-12 lg:py-14 xl:py-20",
                            children: (0, t.jsx)("div", {
                                className: (0, d.AK)("flex flex-row w-full", "left" !== j && "md:flex-row-reverse"),
                                children: (0, t.jsxs)("div", {
                                    className: (0, d.AK)("w-full md:w-1/2 xl:w-2/5 flex flex-col gap-6 p-6 lg:p-10 shadow", (0, d.yW)(F)),
                                    style: (0, p.IP)(k),
                                    children: [(0, t.jsxs)("div", {
                                        children: [(null === y || void 0 === y ? void 0 : y.headline) && (0, t.jsx)("p", {
                                            className: "heading-medium mb-4",
                                            style: (0, i.Z)({
                                                color: N
                                            }, (0, d.j2)(w)),
                                            children: y.headline
                                        }), (0, t.jsx)("pre", {
                                            className: "body-normal",
                                            style: (0, i.Z)({
                                                color: N
                                            }, (0, d.SV)(w)),
                                            children: z
                                        })]
                                    }), null === y || void 0 === y || null === (s = y.additional) || void 0 === s ? void 0 : s.map((function(e, l) {
                                        return (0, t.jsxs)("div", {
                                            children: [(0, t.jsx)("p", {
                                                className: "heading-medium mb-4",
                                                style: (0, i.Z)({
                                                    color: N
                                                }, (0, d.j2)(w)),
                                                children: e.title
                                            }), (0, t.jsx)("p", {
                                                className: "body-normal",
                                                style: {
                                                    color: N
                                                },
                                                children: e.content
                                            })]
                                        }, l)
                                    }))]
                                })
                            })
                        })]
                    }) : (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(p.hA, {
                            background: k
                        }), (0, t.jsx)("div", {
                            className: (0, d.AK)("container mx-auto flex-grow relative z-10", function(e) {
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
                            }(null === y || void 0 === y ? void 0 : y.spacing)),
                            children: (0, t.jsxs)("div", {
                                className: (0, d.AK)("flex flex-col w-full h-full gap-10 lg:gap-20", "left" === j ? "lg:flex-row" : "lg:!flex-row-reverse"),
                                children: [(0, t.jsx)("div", {
                                    className: (0, d.AK)("w-full md:w-1/2  h-full overflow-hidden", (0, d.yW)(F)),
                                    children: (0, t.jsx)(x, {
                                        latLng: H,
                                        className: (0, d.AK)("  w-full z-5", "min-h-screen" === (null === y || void 0 === y || null === (u = y.spacing) || void 0 === u ? void 0 : u.minHeight) ? "h-full" : "h-40 md:h-72 lg:h-96"),
                                        theme: null !== (Z = null === y || void 0 === y ? void 0 : y.theme) && void 0 !== Z ? Z : "light",
                                        markerColor: null !== (K = null === y || void 0 === y ? void 0 : y.marker) && void 0 !== K ? K : w.primaryColor,
                                        zoom: 17
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: (0, d.AK)("w-full md:w-1/2 flex flex-col gap-6 lg:mt-10", (0, d.A2)("min-h-screen" === (null === y || void 0 === y || null === (c = y.spacing) || void 0 === c ? void 0 : c.minHeight) ? y.verticalAlign : "center", !0)),
                                    children: [(0, t.jsxs)("div", {
                                        children: [(null === y || void 0 === y ? void 0 : y.headline) && (0, t.jsx)("p", {
                                            className: "heading-medium mb-4",
                                            style: (0, i.Z)({
                                                color: N
                                            }, (0, d.j2)(w)),
                                            children: y.headline
                                        }), (0, t.jsx)("pre", {
                                            className: "body-normal",
                                            style: (0, i.Z)({
                                                color: N
                                            }, (0, d.SV)(w)),
                                            children: z
                                        })]
                                    }), null === y || void 0 === y || null === (m = y.additional) || void 0 === m ? void 0 : m.map((function(e, l) {
                                        return (0, t.jsxs)("div", {
                                            children: [(0, t.jsx)("p", {
                                                className: "heading-medium mb-4",
                                                style: (0, i.Z)({
                                                    color: N
                                                }, (0, d.j2)(w)),
                                                children: e.title
                                            }), (0, t.jsx)("p", {
                                                className: "body-normal",
                                                style: {
                                                    color: N
                                                },
                                                children: e.content
                                            })]
                                        }, l)
                                    }))]
                                })]
                            })
                        })]
                    })
                })
            }
        },
        399: function(e, l, n) {
            n.d(l, {
                Z: function() {
                    return o
                }
            });
            var i = n(67294);

            function o(e) {
                var l, n, o = (0, i.useState)(0),
                    t = o[0],
                    d = o[1],
                    r = (0, i.useState)([0, 0]),
                    a = r[0],
                    s = r[1];
                return (0, i.useEffect)((function() {
                    var e = function() {
                        s([window.innerWidth, window.innerHeight])
                    };
                    return window.addEventListener("resize", e), e(),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }), []), (0, i.useEffect)((function() {
                    var l;
                    e && d(1 === e.idx ? (null === (l = null === document || void 0 === document ? void 0 : document.getElementById("website-header")) || void 0 === l ? void 0 : l.offsetHeight) || 80 : 0)
                }), [e, a]), {
                    minHeight: (null === e || void 0 === e || null === (l = e.spacing) || void 0 === l ? void 0 : l.minHeight) ? "calc(".concat("min-h-screen" === (null === e || void 0 === e || null === (n = e.spacing) || void 0 === n ? void 0 : n.minHeight) ? "100vh" : "240px", " - ").concat((null === e || void 0 === e ? void 0 : e.combineWithHeader) ? 0 : t, "px)") : "240px",
                    headerHeight: t
                }
            }
        },
        41125: function(e, l, n) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var i = n(16791).Z,
                o = n(75874);
            e.exports = {
                mode: "jit",
                purge: {
                    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./components/**/**/*.{js,ts,jsx,tsx}", "./hooks/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
                    safelist: ["hidden", "h-12", "h-24", "h-45", "h-48", "h-53", "h-54", "h-64", "h-72", "h-80", "h-85", "h-90", "h-96", "h-106", "h-120", "h-128", "h-132", "h-144", "h-160", "h-192", "h-240", "w-12", "h-36", "w-36", "w-24", "w-48", "w-80", "w-96", "w-128", "mx-auto", "ml-auto", "mr-auto", "justify-start", "justify-end", "justify-center", "align-start", "align-end", "align-center", "flex", "flex-col", "flex-row", "h-150", "z-100", "max-w-full", "items-start", "items-end", "items-center", "min-h-screen", "min-h-80vh", "min-h-50vh", "min-h-100"]
                },
                darkMode: !1,
                theme: {
                    fontFamily: {
                        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"]
                    },
                    screens: i({
                        xs: "440px"
                    }, o.screens),
                    container: {
                        padding: "1.5rem",
                        screens: {
                            sm: "640px",
                            md: "768px",
                            lg: "1024px",
                            xl: "1280px",
                            "2xl": "1536px"
                        }
                    },
                    zIndex: {
                        0: 0,
                        10: 10,
                        20: 20,
                        30: 30,
                        40: 40,
                        50: 50,
                        25: 25,
                        60: 60,
                        70: 70,
                        75: 75,
                        80: 80,
                        90: 90,
                        100: 100,
                        max: 999999,
                        auto: "auto"
                    },
                    customForms: function(e) {
                        return {
                            default: {
                                checkbox: {
                                    "&:focus": {
                                        outline: "none",
                                        boxShadow: "none",
                                        borderColor: "none"
                                    }
                                }
                            }
                        }
                    },
                    extend: {
                        fontSize: {
                            base: ["16px", "16px"],
                            "label-sm": ["10px", "12px"],
                            label: ["14px", "16px"],
                            "label-lg": ["16px", "16px"],
                            "body-sm": ["12px", "16px"],
                            body: ["16px", "20px"],
                            "body-lg": ["20px", "24px"],
                            h6: ["16px", "28px"],
                            h5: ["20px", "28px"],
                            h4: ["24px", "32px"],
                            h3: ["32px", "40px"],
                            h2: ["40px", "48px"],
                            h1: ["48px", "56px"],
                            display: ["64px", "72px"],
                            xxl: ["16rem", "1"]
                        },
                        padding: {
                            18: "4.5rem"
                        },
                        width: {
                            18: "4.5rem",
                            20: "80px",
                            22: "5.5rem",
                            30: "120px",
                            40: "160px",
                            50: "200px",
                            60: "240px",
                            75: "300px",
                            80: "320px",
                            90: "360px",
                            96: "384px",
                            100: "400px",
                            120: "480px",
                            128: "512px",
                            140: "560px",
                            150: "600px",
                            160: "640px",
                            "0/1": "0%",
                            "1/1": "100%"
                        },
                        height: {
                            .75: "3px",
                            9.5: "38px",
                            22: "5.5rem",
                            45: "180px",
                            53: "212px",
                            54: "216px",
                            64: "256px",
                            72: "288px",
                            80: "320px",
                            85: "340px",
                            90: "360px",
                            96: "384px",
                            100: "400px",
                            106: "424px",
                            120: "480px",
                            128: "512px",
                            132: "528px",
                            144: "576px",
                            150: "600px",
                            160: "640px",
                            192: "768px",
                            200: "800px",
                            210: "840px",
                            220: "880px",
                            230: "920px",
                            240: "960px",
                            250: "1000px",
                            260: "1040px"
                        },
                        backgroundSize: {
                            full: "100%"
                        },
                        backgroundPosition: {
                            "-top-4": "center top -1rem",
                            "-top-20": "center top -5rem"
                        },
                        minHeight: {
                            0: "0",
                            "1/4": "25%",
                            "1/2": "50%",
                            "3/4": "75%",
                            full: "100%",
                            20: "80px",
                            80: "320px",
                            120: "480px",
                            130: "520px",
                            screen: "100vh",
                            "50vh": "50vh",
                            "80vh": "80vh"
                        },
                        maxHeight: {
                            0: "0",
                            "1/4": "25%",
                            "1/2": "50%",
                            "3/4": "75%",
                            full: "100%",
                            20: "80px",
                            40: "160px",
                            50: "200px",
                            60: "240px",
                            70: "280px",
                            80: "320px",
                            100: "400px",
                            150: "600px",
                            250: "1000px"
                        },
                        maxWidth: {
                            20: "80px",
                            30: "120px",
                            40: "160px",
                            50: "200px",
                            60: "240px",
                            70: "280px",
                            80: "320px",
                            90: "360px",
                            100: "400px",
                            110: "440px",
                            120: "480px",
                            140: "560px",
                            160: "640px",
                            200: "800px",
                            220: "860px",
                            250: "1000px",
                            full: "100%"
                        },
                        flex: {
                            0: "0 0 auto",
                            "col-1": "flex 1 1 10%"
                        },
                        borderRadius: {
                            "4xl": "2rem"
                        }
                    }
                },
                variants: {
                    extend: {}
                },
                plugins: [n(64221), n(50130)]
            }
        }
    }
]);