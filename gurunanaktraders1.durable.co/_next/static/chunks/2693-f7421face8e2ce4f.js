"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2693], {
        61363: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return i
                }
            });
            var r, i = ((r = i || {}).Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r)
        },
        44080: function(e, t, n) {
            n.d(t, {
                u: function() {
                    return k
                }
            });
            var r = n(67294),
                i = n(12351),
                u = n(16567),
                o = n(32984),
                l = n(14879),
                a = n(16723),
                s = n(3855),
                c = n(82180),
                f = n(23784);
            var d = n(9362);

            function m(e, ...t) {
                e && t.length > 0 && e.classList.add(...t)
            }

            function v(e, ...t) {
                e && t.length > 0 && e.classList.remove(...t)
            }

            function p(e, t, n, r) {
                let i = n ? "enter" : "leave",
                    u = (0, d.k)(),
                    l = void 0 !== r ? function(e) {
                        let t = {
                            called: !1
                        };
                        return (...n) => {
                            if (!t.called) return t.called = !0, e(...n)
                        }
                    }(r) : () => {};
                "enter" === i && (e.removeAttribute("hidden"), e.style.display = "");
                let a = (0, o.E)(i, {
                        enter: () => t.enter,
                        leave: () => t.leave
                    }),
                    s = (0, o.E)(i, {
                        enter: () => t.enterTo,
                        leave: () => t.leaveTo
                    }),
                    c = (0, o.E)(i, {
                        enter: () => t.enterFrom,
                        leave: () => t.leaveFrom
                    });
                return v(e, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), m(e, ...a, ...c), u.nextFrame((() => {
                    v(e, ...c), m(e, ...s),
                        function(e, t) {
                            let n = (0, d.k)();
                            if (!e) return n.dispose;
                            let {
                                transitionDuration: r,
                                transitionDelay: i
                            } = getComputedStyle(e), [u, o] = [r, i].map((e => {
                                let [t = 0] = e.split(",").filter(Boolean).map((e => e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e))).sort(((e, t) => t - e));
                                return t
                            })), l = u + o;
                            if (0 !== l) {
                                n.group((n => {
                                    n.setTimeout((() => {
                                        t(), n.dispose()
                                    }), l), n.addEventListener(e, "transitionrun", (e => {
                                        e.target === e.currentTarget && n.dispose()
                                    }))
                                }));
                                let r = n.addEventListener(e, "transitionend", (e => {
                                    e.target === e.currentTarget && (t(), r())
                                }))
                            } else t();
                            n.add((() => t())), n.dispose
                        }(e, (() => (v(e, ...a), m(e, ...t.entered), l())))
                })), u.dispose
            }
            var h = n(94192);
            var E = n(73781),
                g = n(44067);

            function b(e = "") {
                return e.split(" ").filter((e => e.trim().length > 1))
            }
            let w = (0, r.createContext)(null);
            w.displayName = "TransitionContext";
            var y, F = ((y = F || {}).Visible = "visible", y.Hidden = "hidden", y);
            let O = (0, r.createContext)(null);

            function T(e) {
                return "children" in e ? T(e.children) : e.current.filter((({
                    el: e
                }) => null !== e.current)).filter((({
                    state: e
                }) => "visible" === e)).length > 0
            }

            function N(e, t) {
                let n = (0, s.E)(e),
                    u = (0, r.useRef)([]),
                    a = (0, l.t)(),
                    c = (0, h.G)(),
                    f = (0, E.z)(((e, t = i.l4.Hidden) => {
                        let r = u.current.findIndex((({
                            el: t
                        }) => t === e)); - 1 !== r && ((0, o.E)(t, {
                            [i.l4.Unmount]() {
                                u.current.splice(r, 1)
                            },
                            [i.l4.Hidden]() {
                                u.current[r].state = "hidden"
                            }
                        }), c.microTask((() => {
                            var e;
                            !T(u) && a.current && (null == (e = n.current) || e.call(n))
                        })))
                    })),
                    d = (0, E.z)((e => {
                        let t = u.current.find((({
                            el: t
                        }) => t === e));
                        return t ? "visible" !== t.state && (t.state = "visible") : u.current.push({
                            el: e,
                            state: "visible"
                        }), () => f(e, i.l4.Unmount)
                    })),
                    m = (0, r.useRef)([]),
                    v = (0, r.useRef)(Promise.resolve()),
                    p = (0, r.useRef)({
                        enter: [],
                        leave: [],
                        idle: []
                    }),
                    g = (0, E.z)(((e, n, r) => {
                        m.current.splice(0), t && (t.chains.current[n] = t.chains.current[n].filter((([t]) => t !== e))), null == t || t.chains.current[n].push([e, new Promise((e => {
                            m.current.push(e)
                        }))]), null == t || t.chains.current[n].push([e, new Promise((e => {
                            Promise.all(p.current[n].map((([e, t]) => t))).then((() => e()))
                        }))]), "enter" === n ? v.current = v.current.then((() => null == t ? void 0 : t.wait.current)).then((() => r(n))) : r(n)
                    })),
                    b = (0, E.z)(((e, t, n) => {
                        Promise.all(p.current[t].splice(0).map((([e, t]) => t))).then((() => {
                            var e;
                            null == (e = m.current.shift()) || e()
                        })).then((() => n(t)))
                    }));
                return (0, r.useMemo)((() => ({
                    children: u,
                    register: d,
                    unregister: f,
                    onStart: g,
                    onStop: b,
                    wait: v,
                    chains: p
                })), [d, f, u, g, b, p, v])
            }

            function S() {}
            O.displayName = "NestingContext";
            let A = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

            function P(e) {
                var t;
                let n = {};
                for (let r of A) n[r] = null != (t = e[r]) ? t : S;
                return n
            }
            let L = i.AN.RenderStrategy;
            let C = (0, i.yV)((function(e, t) {
                    let {
                        show: n,
                        appear: o = !1,
                        unmount: l,
                        ...s
                    } = e, d = (0, r.useRef)(null), m = (0, f.T)(d, t);
                    (0, c.H)();
                    let v = (0, u.oJ)();
                    if (void 0 === n && null !== v && (n = (v & u.ZM.Open) === u.ZM.Open), ![!0, !1].includes(n)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
                    let [p, h] = (0, r.useState)(n ? "visible" : "hidden"), g = N((() => {
                        h("hidden")
                    })), [b, y] = (0, r.useState)(!0), F = (0, r.useRef)([n]);
                    (0, a.e)((() => {
                        !1 !== b && F.current[F.current.length - 1] !== n && (F.current.push(n), y(!1))
                    }), [F, n]);
                    let S = (0, r.useMemo)((() => ({
                        show: n,
                        appear: o,
                        initial: b
                    })), [n, o, b]);
                    (0, r.useEffect)((() => {
                        if (n) h("visible");
                        else if (T(g)) {
                            let e = d.current;
                            if (!e) return;
                            let t = e.getBoundingClientRect();
                            0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && h("hidden")
                        } else h("hidden")
                    }), [n, g]);
                    let A = {
                            unmount: l
                        },
                        P = (0, E.z)((() => {
                            var t;
                            b && y(!1), null == (t = e.beforeEnter) || t.call(e)
                        })),
                        C = (0, E.z)((() => {
                            var t;
                            b && y(!1), null == (t = e.beforeLeave) || t.call(e)
                        }));
                    return r.createElement(O.Provider, {
                        value: g
                    }, r.createElement(w.Provider, {
                        value: S
                    }, (0, i.sY)({
                        ourProps: { ...A,
                            as: r.Fragment,
                            children: r.createElement(x, {
                                ref: m,
                                ...A,
                                ...s,
                                beforeEnter: P,
                                beforeLeave: C
                            })
                        },
                        theirProps: {},
                        defaultTag: r.Fragment,
                        features: L,
                        visible: "visible" === p,
                        name: "Transition"
                    })))
                })),
                x = (0, i.yV)((function(e, t) {
                    let {
                        beforeEnter: n,
                        afterEnter: m,
                        beforeLeave: v,
                        afterLeave: y,
                        enter: F,
                        enterFrom: S,
                        enterTo: A,
                        entered: C,
                        leave: x,
                        leaveFrom: M,
                        leaveTo: k,
                        ...R
                    } = e, j = (0, r.useRef)(null), H = (0, f.T)(j, t), I = R.unmount ? i.l4.Unmount : i.l4.Hidden, {
                        show: D,
                        appear: U,
                        initial: _
                    } = function() {
                        let e = (0, r.useContext)(w);
                        if (null === e) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return e
                    }(), [z, V] = (0, r.useState)(D ? "visible" : "hidden"), q = function() {
                        let e = (0, r.useContext)(O);
                        if (null === e) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return e
                    }(), {
                        register: Z,
                        unregister: G
                    } = q, Y = (0, r.useRef)(null);
                    (0, r.useEffect)((() => Z(j)), [Z, j]), (0, r.useEffect)((() => {
                        if (I === i.l4.Hidden && j.current) return D && "visible" !== z ? void V("visible") : (0, o.E)(z, {
                            hidden: () => G(j),
                            visible: () => Z(j)
                        })
                    }), [z, j, Z, G, D, I]);
                    let $ = (0, s.E)({
                            enter: b(F),
                            enterFrom: b(S),
                            enterTo: b(A),
                            entered: b(C),
                            leave: b(x),
                            leaveFrom: b(M),
                            leaveTo: b(k)
                        }),
                        B = function(e) {
                            let t = (0, r.useRef)(P(e));
                            return (0, r.useEffect)((() => {
                                t.current = P(e)
                            }), [e]), t
                        }({
                            beforeEnter: n,
                            afterEnter: m,
                            beforeLeave: v,
                            afterLeave: y
                        }),
                        J = (0, c.H)();
                    (0, r.useEffect)((() => {
                        if (J && "visible" === z && null === j.current) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                    }), [j, z, J]);
                    let K = _ && !U,
                        W = !J || K || Y.current === D ? "idle" : D ? "enter" : "leave",
                        X = function(e = 0) {
                            let [t, n] = (0, r.useState)(e), i = (0, l.t)(), u = (0, r.useCallback)((e => {
                                i.current && n((t => t | e))
                            }), [t, i]), o = (0, r.useCallback)((e => Boolean(t & e)), [t]), a = (0, r.useCallback)((e => {
                                i.current && n((t => t & ~e))
                            }), [n, i]), s = (0, r.useCallback)((e => {
                                i.current && n((t => t ^ e))
                            }), [n]);
                            return {
                                flags: t,
                                addFlag: u,
                                hasFlag: o,
                                removeFlag: a,
                                toggleFlag: s
                            }
                        }(0),
                        Q = (0, E.z)((e => (0, o.E)(e, {
                            enter: () => {
                                X.addFlag(u.ZM.Opening), B.current.beforeEnter()
                            },
                            leave: () => {
                                X.addFlag(u.ZM.Closing), B.current.beforeLeave()
                            },
                            idle: () => {}
                        }))),
                        ee = (0, E.z)((e => (0, o.E)(e, {
                            enter: () => {
                                X.removeFlag(u.ZM.Opening), B.current.afterEnter()
                            },
                            leave: () => {
                                X.removeFlag(u.ZM.Closing), B.current.afterLeave()
                            },
                            idle: () => {}
                        }))),
                        te = N((() => {
                            V("hidden"), G(j)
                        }), q);
                    (function({
                        container: e,
                        direction: t,
                        classes: n,
                        onStart: r,
                        onStop: i
                    }) {
                        let u = (0, l.t)(),
                            o = (0, h.G)(),
                            c = (0, s.E)(t);
                        (0, a.e)((() => {
                            let t = (0, d.k)();
                            o.add(t.dispose);
                            let l = e.current;
                            if (l && "idle" !== c.current && u.current) return t.dispose(), r.current(c.current), t.add(p(l, n.current, "enter" === c.current, (() => {
                                t.dispose(), i.current(c.current)
                            }))), t.dispose
                        }), [t])
                    })({
                        container: j,
                        classes: $,
                        direction: W,
                        onStart: (0, s.E)((e => {
                            te.onStart(j, e, Q)
                        })),
                        onStop: (0, s.E)((e => {
                            te.onStop(j, e, ee), "leave" === e && !T(te) && (V("hidden"), G(j))
                        }))
                    }), (0, r.useEffect)((() => {
                        K && (I === i.l4.Hidden ? Y.current = null : Y.current = D)
                    }), [D, K, z]);
                    let ne = R,
                        re = {
                            ref: H
                        };
                    return U && D && _ && (ne = { ...ne,
                        className: (0, g.A)(R.className, ...$.current.enter, ...$.current.enterFrom)
                    }), r.createElement(O.Provider, {
                        value: te
                    }, r.createElement(u.up, {
                        value: (0, o.E)(z, {
                            visible: u.ZM.Open,
                            hidden: u.ZM.Closed
                        }) | X.flags
                    }, (0, i.sY)({
                        ourProps: re,
                        theirProps: ne,
                        defaultTag: "div",
                        features: L,
                        visible: "visible" === z,
                        name: "Transition.Child"
                    })))
                })),
                M = (0, i.yV)((function(e, t) {
                    let n = null !== (0, r.useContext)(w),
                        i = null !== (0, u.oJ)();
                    return r.createElement(r.Fragment, null, !n && i ? r.createElement(C, {
                        ref: t,
                        ...e
                    }) : r.createElement(x, {
                        ref: t,
                        ...e
                    }))
                })),
                k = Object.assign(C, {
                    Child: M,
                    Root: C
                })
        },
        94192: function(e, t, n) {
            n.d(t, {
                G: function() {
                    return u
                }
            });
            var r = n(67294),
                i = n(9362);

            function u() {
                let [e] = (0, r.useState)(i.k);
                return (0, r.useEffect)((() => () => e.dispose()), [e]), e
            }
        },
        73781: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return u
                }
            });
            var r = n(67294),
                i = n(3855);
            let u = function(e) {
                let t = (0, i.E)(e);
                return r.useCallback(((...e) => t.current(...e)), [t])
            }
        },
        19946: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return a
                }
            });
            var r, i = n(67294),
                u = n(16723),
                o = n(82180),
                l = n(77896);
            let a = null != (r = i.useId) ? r : function() {
                let e = (0, o.H)(),
                    [t, n] = i.useState(e ? () => l.O.nextId() : null);
                return (0, u.e)((() => {
                    null === t && n(l.O.nextId())
                }), [t]), null != t ? "" + t : void 0
            }
        },
        14879: function(e, t, n) {
            n.d(t, {
                t: function() {
                    return u
                }
            });
            var r = n(67294),
                i = n(16723);

            function u() {
                let e = (0, r.useRef)(!1);
                return (0, i.e)((() => (e.current = !0, () => {
                    e.current = !1
                })), []), e
            }
        },
        16723: function(e, t, n) {
            n.d(t, {
                e: function() {
                    return u
                }
            });
            var r = n(67294),
                i = n(77896);
            let u = (e, t) => {
                i.O.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t)
            }
        },
        3855: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return u
                }
            });
            var r = n(67294),
                i = n(16723);

            function u(e) {
                let t = (0, r.useRef)(e);
                return (0, i.e)((() => {
                    t.current = e
                }), [e]), t
            }
        },
        39650: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return a
                }
            });
            var r = n(67294),
                i = n(84575),
                u = n(3855);

            function o(e, t, n) {
                let i = (0, u.E)(t);
                (0, r.useEffect)((() => {
                    function t(e) {
                        i.current(e)
                    }
                    return document.addEventListener(e, t, n), () => document.removeEventListener(e, t, n)
                }), [e, n])
            }
            var l = n(7815);

            function a(e, t, n = !0) {
                let u = (0, r.useRef)(!1);

                function a(n, r) {
                    if (!u.current || n.defaultPrevented) return;
                    let o = r(n);
                    if (null === o || !o.getRootNode().contains(o)) return;
                    let l = function e(t) {
                        return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                    }(e);
                    for (let e of l) {
                        if (null === e) continue;
                        let t = e instanceof HTMLElement ? e : e.current;
                        if (null != t && t.contains(o) || n.composed && n.composedPath().includes(t)) return
                    }
                    return !(0, i.sP)(o, i.tJ.Loose) && -1 !== o.tabIndex && n.preventDefault(), t(n, o)
                }(0, r.useEffect)((() => {
                    requestAnimationFrame((() => {
                        u.current = n
                    }))
                }), [n]);
                let s = (0, r.useRef)(null);
                o("mousedown", (e => {
                    var t, n;
                    u.current && (s.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
                }), !0), o("click", (e => {
                    s.current && (a(e, (() => s.current)), s.current = null)
                }), !0), (0, l.s)("blur", (e => a(e, (() => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null))), !0)
            }
        },
        82180: function(e, t, n) {
            n.d(t, {
                H: function() {
                    return u
                }
            });
            var r = n(67294),
                i = n(77896);

            function u() {
                let [e, t] = (0, r.useState)(i.O.isHandoffComplete);
                return e && !1 === i.O.isHandoffComplete && t(!1), (0, r.useEffect)((() => {
                    !0 !== e && t(!0)
                }), [e]), (0, r.useEffect)((() => i.O.handoff()), []), e
            }
        },
        23784: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return l
                },
                h: function() {
                    return o
                }
            });
            var r = n(67294),
                i = n(73781);
            let u = Symbol();

            function o(e, t = !0) {
                return Object.assign(e, {
                    [u]: t
                })
            }

            function l(...e) {
                let t = (0, r.useRef)(e);
                (0, r.useEffect)((() => {
                    t.current = e
                }), [e]);
                let n = (0, i.z)((e => {
                    for (let n of t.current) null != n && ("function" == typeof n ? n(e) : n.current = e)
                }));
                return e.every((e => null == e || (null == e ? void 0 : e[u]))) ? void 0 : n
            }
        },
        96599: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return u
                }
            });
            var r = n(67294),
                i = n(73781);

            function u(e, t) {
                let n = (0, r.useRef)([]),
                    u = (0, i.z)(e);
                (0, r.useEffect)((() => {
                    let e = [...n.current];
                    for (let [r, i] of t.entries())
                        if (n.current[r] !== i) {
                            let r = u(t, e);
                            return n.current = t, r
                        }
                }), [u, ...t])
            }
        },
        7815: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return u
                }
            });
            var r = n(67294),
                i = n(3855);

            function u(e, t, n) {
                let u = (0, i.E)(t);
                (0, r.useEffect)((() => {
                    function t(e) {
                        u.current(e)
                    }
                    return window.addEventListener(e, t, n), () => window.removeEventListener(e, t, n)
                }), [e, n])
            }
        },
        46045: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return u
                },
                _: function() {
                    return o
                }
            });
            var r = n(12351);
            var i, u = ((i = u || {})[i.None = 1] = "None", i[i.Focusable = 2] = "Focusable", i[i.Hidden = 4] = "Hidden", i);
            let o = (0, r.yV)((function(e, t) {
                let {
                    features: n = 1,
                    ...i
                } = e, u = {
                    ref: t,
                    "aria-hidden": 2 === (2 & n) || void 0,
                    style: {
                        position: "fixed",
                        top: 1,
                        left: 1,
                        width: 1,
                        height: 0,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: "0",
                        ...4 === (4 & n) && 2 !== (2 & n) && {
                            display: "none"
                        }
                    }
                };
                return (0, r.sY)({
                    ourProps: u,
                    theirProps: i,
                    slot: {},
                    defaultTag: "div",
                    name: "Hidden"
                })
            }))
        },
        16567: function(e, t, n) {
            n.d(t, {
                ZM: function() {
                    return o
                },
                oJ: function() {
                    return l
                },
                up: function() {
                    return a
                }
            });
            var r = n(67294);
            let i = (0, r.createContext)(null);
            i.displayName = "OpenClosedContext";
            var u, o = ((u = o || {})[u.Open = 1] = "Open", u[u.Closed = 2] = "Closed", u[u.Closing = 4] = "Closing", u[u.Opening = 8] = "Opening", u);

            function l() {
                return (0, r.useContext)(i)
            }

            function a({
                value: e,
                children: t
            }) {
                return r.createElement(i.Provider, {
                    value: e
                }, t)
            }
        },
        64103: function(e, t, n) {
            function r(e) {
                let t = e.parentElement,
                    n = null;
                for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
                let r = "" === (null == t ? void 0 : t.getAttribute("disabled"));
                return (!r || ! function(e) {
                    if (!e) return !1;
                    let t = e.previousElementSibling;
                    for (; null !== t;) {
                        if (t instanceof HTMLLegendElement) return !1;
                        t = t.previousElementSibling
                    }
                    return !0
                }(n)) && r
            }
            n.d(t, {
                P: function() {
                    return r
                }
            })
        },
        44067: function(e, t, n) {
            function r(...e) {
                return e.filter(Boolean).join(" ")
            }
            n.d(t, {
                A: function() {
                    return r
                }
            })
        },
        9362: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return i
                }
            });
            var r = n(81021);

            function i() {
                let e = [],
                    t = {
                        addEventListener: (e, n, r, i) => (e.addEventListener(n, r, i), t.add((() => e.removeEventListener(n, r, i)))),
                        requestAnimationFrame(...e) {
                            let n = requestAnimationFrame(...e);
                            return t.add((() => cancelAnimationFrame(n)))
                        },
                        nextFrame: (...e) => t.requestAnimationFrame((() => t.requestAnimationFrame(...e))),
                        setTimeout(...e) {
                            let n = setTimeout(...e);
                            return t.add((() => clearTimeout(n)))
                        },
                        microTask(...e) {
                            let n = {
                                current: !0
                            };
                            return (0, r.Y)((() => {
                                n.current && e[0]()
                            })), t.add((() => {
                                n.current = !1
                            }))
                        },
                        style(e, t, n) {
                            let r = e.style.getPropertyValue(t);
                            return Object.assign(e.style, {
                                [t]: n
                            }), this.add((() => {
                                Object.assign(e.style, {
                                    [t]: r
                                })
                            }))
                        },
                        group(e) {
                            let t = i();
                            return e(t), this.add((() => t.dispose()))
                        },
                        add: t => (e.push(t), () => {
                            let n = e.indexOf(t);
                            if (n >= 0)
                                for (let t of e.splice(n, 1)) t()
                        }),
                        dispose() {
                            for (let t of e.splice(0)) t()
                        }
                    };
                return t
            }
        },
        77896: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return u
                }
            });
            var r = Object.defineProperty,
                i = (e, t, n) => (((e, t, n) => {
                    t in e ? r(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                })(e, "symbol" != typeof t ? t + "" : t, n), n);
            let u = new class {
                constructor() {
                    i(this, "current", this.detect()), i(this, "handoffState", "pending"), i(this, "currentId", 0)
                }
                set(e) {
                    this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e)
                }
                reset() {
                    this.set(this.detect())
                }
                nextId() {
                    return ++this.currentId
                }
                get isServer() {
                    return "server" === this.current
                }
                get isClient() {
                    return "client" === this.current
                }
                detect() {
                    return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
                }
                handoff() {
                    "pending" === this.handoffState && (this.handoffState = "complete")
                }
                get isHandoffComplete() {
                    return "complete" === this.handoffState
                }
            }
        },
        84575: function(e, t, n) {
            n.d(t, {
                C5: function() {
                    return g
                },
                EO: function() {
                    return y
                },
                TO: function() {
                    return c
                },
                fE: function() {
                    return f
                },
                jA: function() {
                    return F
                },
                sP: function() {
                    return p
                },
                tJ: function() {
                    return v
                },
                wI: function() {
                    return h
                },
                z2: function() {
                    return w
                }
            });
            var r = n(9362),
                i = n(32984),
                u = n(15466);
            let o = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e => `${e}:not([tabindex='-1'])`)).join(",");
            var l, a, s, c = ((s = c || {})[s.First = 1] = "First", s[s.Previous = 2] = "Previous", s[s.Next = 4] = "Next", s[s.Last = 8] = "Last", s[s.WrapAround = 16] = "WrapAround", s[s.NoScroll = 32] = "NoScroll", s),
                f = ((a = f || {})[a.Error = 0] = "Error", a[a.Overflow = 1] = "Overflow", a[a.Success = 2] = "Success", a[a.Underflow = 3] = "Underflow", a),
                d = ((l = d || {})[l.Previous = -1] = "Previous", l[l.Next = 1] = "Next", l);

            function m(e = document.body) {
                return null == e ? [] : Array.from(e.querySelectorAll(o)).sort(((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER))))
            }
            var v = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(v || {});

            function p(e, t = 0) {
                var n;
                return e !== (null == (n = (0, u.r)(e)) ? void 0 : n.body) && (0, i.E)(t, {
                    0: () => e.matches(o),
                    1() {
                        let t = e;
                        for (; null !== t;) {
                            if (t.matches(o)) return !0;
                            t = t.parentElement
                        }
                        return !1
                    }
                })
            }

            function h(e) {
                let t = (0, u.r)(e);
                (0, r.k)().nextFrame((() => {
                    t && !p(t.activeElement, 0) && g(e)
                }))
            }
            var E = (e => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(E || {});

            function g(e) {
                null == e || e.focus({
                    preventScroll: !0
                })
            }
            "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("keydown", (e => {
                e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
            }), !0), document.addEventListener("click", (e => {
                1 === e.detail ? delete document.documentElement.dataset.headlessuiFocusVisible : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = "")
            }), !0));
            let b = ["textarea", "input"].join(",");

            function w(e, t = (e => e)) {
                return e.slice().sort(((e, n) => {
                    let r = t(e),
                        i = t(n);
                    if (null === r || null === i) return 0;
                    let u = r.compareDocumentPosition(i);
                    return u & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                }))
            }

            function y(e, t) {
                return F(m(), t, {
                    relativeTo: e
                })
            }

            function F(e, t, {
                sorted: n = !0,
                relativeTo: r = null,
                skipElements: i = []
            } = {}) {
                let u = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
                    o = Array.isArray(e) ? n ? w(e) : e : m(e);
                i.length > 0 && o.length > 1 && (o = o.filter((e => !i.includes(e)))), r = null != r ? r : u.activeElement;
                let l, a = (() => {
                        if (5 & t) return 1;
                        if (10 & t) return -1;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    s = (() => {
                        if (1 & t) return 0;
                        if (2 & t) return Math.max(0, o.indexOf(r)) - 1;
                        if (4 & t) return Math.max(0, o.indexOf(r)) + 1;
                        if (8 & t) return o.length - 1;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    c = 32 & t ? {
                        preventScroll: !0
                    } : {},
                    f = 0,
                    d = o.length;
                do {
                    if (f >= d || f + d <= 0) return 0;
                    let e = s + f;
                    if (16 & t) e = (e + d) % d;
                    else {
                        if (e < 0) return 3;
                        if (e >= d) return 1
                    }
                    l = o[e], null == l || l.focus(c), f += a
                } while (l !== u.activeElement);
                return 6 & t && function(e) {
                    var t, n;
                    return null != (n = null == (t = null == e ? void 0 : e.matches) ? void 0 : t.call(e, b)) && n
                }(l) && l.select(), 2
            }
        },
        32984: function(e, t, n) {
            function r(e, t, ...n) {
                if (e in t) {
                    let r = t[e];
                    return "function" == typeof r ? r(...n) : r
                }
                let i = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);
                throw Error.captureStackTrace && Error.captureStackTrace(i, r), i
            }
            n.d(t, {
                E: function() {
                    return r
                }
            })
        },
        81021: function(e, t, n) {
            function r(e) {
                "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch((e => setTimeout((() => {
                    throw e
                }))))
            }
            n.d(t, {
                Y: function() {
                    return r
                }
            })
        },
        15466: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return i
                }
            });
            var r = n(77896);

            function i(e) {
                return r.O.isServer ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
            }
        },
        78657: function(e, t, n) {
            function r() {
                return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
            }

            function i() {
                return r() || /Android/gi.test(window.navigator.userAgent)
            }
            n.d(t, {
                gn: function() {
                    return r
                },
                tq: function() {
                    return i
                }
            })
        },
        12351: function(e, t, n) {
            n.d(t, {
                AN: function() {
                    return a
                },
                l4: function() {
                    return s
                },
                oA: function() {
                    return v
                },
                sY: function() {
                    return c
                },
                yV: function() {
                    return m
                }
            });
            var r, i, u = n(67294),
                o = n(44067),
                l = n(32984),
                a = ((i = a || {})[i.None = 0] = "None", i[i.RenderStrategy = 1] = "RenderStrategy", i[i.Static = 2] = "Static", i),
                s = ((r = s || {})[r.Unmount = 0] = "Unmount", r[r.Hidden = 1] = "Hidden", r);

            function c({
                ourProps: e,
                theirProps: t,
                slot: n,
                defaultTag: r,
                features: i,
                visible: u = !0,
                name: o
            }) {
                let a = d(t, e);
                if (u) return f(a, n, r, o);
                let s = null != i ? i : 0;
                if (2 & s) {
                    let {
                        static: e = !1,
                        ...t
                    } = a;
                    if (e) return f(t, n, r, o)
                }
                if (1 & s) {
                    let {
                        unmount: e = !0,
                        ...t
                    } = a;
                    return (0, l.E)(e ? 0 : 1, {
                        0: () => null,
                        1: () => f({ ...t,
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }, n, r, o)
                    })
                }
                return f(a, n, r, o)
            }

            function f(e, t = {}, n, r) {
                let {
                    as: i = n,
                    children: l,
                    refName: a = "ref",
                    ...s
                } = p(e, ["unmount", "static"]), c = void 0 !== e.ref ? {
                    [a]: e.ref
                } : {}, f = "function" == typeof l ? l(t) : l;
                "className" in s && s.className && "function" == typeof s.className && (s.className = s.className(t));
                let m = {};
                if (t) {
                    let e = !1,
                        n = [];
                    for (let [r, i] of Object.entries(t)) "boolean" == typeof i && (e = !0), !0 === i && n.push(r);
                    e && (m["data-headlessui-state"] = n.join(" "))
                }
                if (i === u.Fragment && Object.keys(v(s)).length > 0) {
                    if (!(0, u.isValidElement)(f) || Array.isArray(f) && f.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s).map((e => `  - ${e}`)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((e => `  - ${e}`)).join("\n")].join("\n"));
                    let e = f.props,
                        t = "function" == typeof(null == e ? void 0 : e.className) ? (...t) => (0, o.A)(null == e ? void 0 : e.className(...t), s.className) : (0, o.A)(null == e ? void 0 : e.className, s.className),
                        n = t ? {
                            className: t
                        } : {};
                    return (0, u.cloneElement)(f, Object.assign({}, d(f.props, v(p(s, ["ref"]))), m, c, function(...e) {
                        return {
                            ref: e.every((e => null == e)) ? void 0 : t => {
                                for (let n of e) null != n && ("function" == typeof n ? n(t) : n.current = t)
                            }
                        }
                    }(f.ref, c.ref), n))
                }
                return (0, u.createElement)(i, Object.assign({}, p(s, ["ref"]), i !== u.Fragment && c, i !== u.Fragment && m), f)
            }

            function d(...e) {
                if (0 === e.length) return {};
                if (1 === e.length) return e[0];
                let t = {},
                    n = {};
                for (let r of e)
                    for (let e in r) e.startsWith("on") && "function" == typeof r[e] ? (null != n[e] || (n[e] = []), n[e].push(r[e])) : t[e] = r[e];
                if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map((e => [e, void 0]))));
                for (let r in n) Object.assign(t, {
                    [r](e, ...t) {
                        let i = n[r];
                        for (let n of i) {
                            if ((e instanceof Event || (null == e ? void 0 : e.nativeEvent) instanceof Event) && e.defaultPrevented) return;
                            n(e, ...t)
                        }
                    }
                });
                return t
            }

            function m(e) {
                var t;
                return Object.assign((0, u.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function v(e) {
                let t = Object.assign({}, e);
                for (let n in t) void 0 === t[n] && delete t[n];
                return t
            }

            function p(e, t = []) {
                let n = Object.assign({}, e);
                for (let r of t) r in n && delete n[r];
                return n
            }
        }
    }
]);