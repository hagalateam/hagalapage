(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 48303, e => {
            "use strict";
            let r,
            o,
            t,
            a,
            n;
            var l,
            s = e.i(43476),
            i = e.i(71645),
            d = e.i(22016),
            c = e.i(18566);
            let m = (0, e.i(56420).default)("menu", [["path", {
                            d: "M4 5h16",
                            key: "1tepv9"
                        }
                    ], ["path", {
                            d: "M4 12h16",
                            key: "1lakjw"
                        }
                    ], ["path", {
                            d: "M4 19h16",
                            key: "1djgab"
                        }
                    ]]);
            var u = e.i(63676);
            let p = "HAGALA TEAM",
            b = [{
                    label: "Inicio",
                    href: "/"
                }, {
                    label: "Juegos",
                    href: "/juegos"
                }, {
                    label: "Contacto",
                    href: "/contacto"
                }
            ];
            var f = e.i(57688);
            let g = (e = new Map, r = null, o) => ({
                nextPart: e,
                validators: r,
                classGroupId: o
            }),
            h = [],
            x = (e, r, o) => {
                if (0 == e.length - r)
                    return o.classGroupId;
                let t = e[r],
                a = o.nextPart.get(t);
                if (a) {
                    let o = x(e, r + 1, a);
                    if (o)
                        return o
                }
                let n = o.validators;
                if (null === n)
                    return;
                let l = 0 === r ? e.join("-") : e.slice(r).join("-"),
                s = n.length;
                for (let e = 0; e < s; e++) {
                    let r = n[e];
                    if (r.validator(l))
                        return r.classGroupId
                }
            },
            w = (e, r) => {
                let o = g();
                for (let t in e)
                    k(e[t], o, t, r);
                return o
            },
            k = (e, r, o, t) => {
                let a = e.length;
                for (let n = 0; n < a; n++)
                    v(e[n], r, o, t)
            },
            v = (e, r, o, t) => {
                "string" == typeof e ? y(e, r, o) : "function" == typeof e ? z(e, r, o, t) : j(e, r, o, t)
            },
            y = (e, r, o) => {
                ("" === e ? r : A(r, e)).classGroupId = o
            },
            z = (e, r, o, t) => {
                N(e) ? k(e(t), r, o, t) : (null === r.validators && (r.validators = []), r.validators.push({
                        classGroupId: o,
                        validator: e
                    }))
            },
            j = (e, r, o, t) => {
                let a = Object.entries(e),
                n = a.length;
                for (let e = 0; e < n; e++) {
                    let [n, l] = a[e];
                    k(l, A(r, n), o, t)
                }
            },
            A = (e, r) => {
                let o = e,
                t = r.split("-"),
                a = t.length;
                for (let e = 0; e < a; e++) {
                    let r = t[e],
                    a = o.nextPart.get(r);
                    a || (a = g(), o.nextPart.set(r, a)),
                    o = a
                }
                return o
            },
            N = e => "isThemeGetter" in e && !0 === e.isThemeGetter,
            S = [],
            E = (e, r, o, t, a) => ({
                modifiers: e,
                hasImportantModifier: r,
                baseClassName: o,
                maybePostfixModifierPosition: t,
                isExternal: a
            }),
            P = /\s+/,
            C = e => {
                let r;
                if ("string" == typeof e)
                    return e;
                let o = "";
                for (let t = 0; t < e.length; t++)
                    e[t] && (r = C(e[t])) && (o && (o += " "), o += r);
                return o
            },
            $ = [],
            T = e => {
                let r = r => r[e] || $;
                return r.isThemeGetter = !0,
                r
            },
            G = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
            _ = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
            I = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
            O = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
            W = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
            L = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
            B = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
            M = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
            R = e => I.test(e),
            q = e => !!e && !Number.isNaN(Number(e)),
            V = e => !!e && Number.isInteger(Number(e)),
            H = e => e.endsWith("%") && q(e.slice(0, -1)),
            Y = e => O.test(e),
            U = () => !0,
            K = e => W.test(e) && !L.test(e),
            X = () => !1,
            F = e => B.test(e),
            J = e => M.test(e),
            D = e => !ee(e) && !ei(e),
            Q = e => e.startsWith("@container") && ("/" === e[10] && void 0 !== e[11] || "s" === e[11] && void 0 !== e[16] && e.startsWith("-size/", 10) || "n" === e[11] && void 0 !== e[18] && e.startsWith("-normal/", 10)),
            Z = e => eg(e, ek, X),
            ee = e => G.test(e),
            er = e => eg(e, ev, K),
            eo = e => eg(e, ey, q),
            et = e => eg(e, ej, U),
            ea = e => eg(e, ez, X),
            en = e => eg(e, ex, X),
            el = e => eg(e, ew, J),
            es = e => eg(e, eA, F),
            ei = e => _.test(e),
            ed = e => eh(e, ev),
            ec = e => eh(e, ez),
            em = e => eh(e, ex),
            eu = e => eh(e, ek),
            ep = e => eh(e, ew),
            eb = e => eh(e, eA, !0),
            ef = e => eh(e, ej, !0),
            eg = (e, r, o) => {
                let t = G.exec(e);
                return !!t && (t[1] ? r(t[1]) : o(t[2]))
            },
            eh = (e, r, o = !1) => {
                let t = _.exec(e);
                return !!t && (t[1] ? r(t[1]) : o)
            },
            ex = e => "position" === e || "percentage" === e,
            ew = e => "image" === e || "url" === e,
            ek = e => "length" === e || "size" === e || "bg-size" === e,
            ev = e => "length" === e,
            ey = e => "number" === e,
            ez = e => "family-name" === e,
            ej = e => "number" === e || "weight" === e,
            eA = e => "shadow" === e,
            eN = (l = () => {
                let e = T("color"),
                r = T("font"),
                o = T("text"),
                t = T("font-weight"),
                a = T("tracking"),
                n = T("leading"),
                l = T("breakpoint"),
                s = T("container"),
                i = T("spacing"),
                d = T("radius"),
                c = T("shadow"),
                m = T("inset-shadow"),
                u = T("text-shadow"),
                p = T("drop-shadow"),
                b = T("blur"),
                f = T("perspective"),
                g = T("aspect"),
                h = T("ease"),
                x = T("animate"),
                w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                k = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
                v = () => [...k(), ei, ee],
                y = () => ["auto", "hidden", "clip", "visible", "scroll"],
                z = () => ["auto", "contain", "none"],
                j = () => [ei, ee, i],
                A = () => [R, "full", "auto", ...j()],
                N = () => [V, "none", "subgrid", ei, ee],
                S = () => ["auto", {
                        span: ["full", V, ei, ee]
                    }, V, ei, ee],
                E = () => [V, "auto", ei, ee],
                P = () => ["auto", "min", "max", "fr", ei, ee],
                C = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
                $ = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
                G = () => ["auto", ...j()],
                _ = () => [R, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...j()],
                I = () => [R, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...j()],
                O = () => [R, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...j()],
                W = () => [e, ei, ee],
                L = () => [...k(), em, en, {
                        position: [ei, ee]
                    }
                ],
                B = () => ["no-repeat", {
                        repeat: ["", "x", "y", "space", "round"]
                    }
                ],
                M = () => ["auto", "cover", "contain", eu, Z, {
                        size: [ei, ee]
                    }
                ],
                K = () => [H, ed, er],
                X = () => ["", "none", "full", d, ei, ee],
                F = () => ["", q, ed, er],
                J = () => ["solid", "dashed", "dotted", "double"],
                eg = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                eh = () => [q, H, em, en],
                ex = () => ["", "none", b, ei, ee],
                ew = () => ["none", q, ei, ee],
                ek = () => ["none", q, ei, ee],
                ev = () => [q, ei, ee],
                ey = () => [R, "full", ...j()];
                return {
                    cacheSize: 500,
                    theme: {
                        animate: ["spin", "ping", "pulse", "bounce"],
                        aspect: ["video"],
                        blur: [Y],
                        breakpoint: [Y],
                        color: [U],
                        container: [Y],
                        "drop-shadow": [Y],
                        ease: ["in", "out", "in-out"],
                        font: [D],
                        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                        "inset-shadow": [Y],
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                        radius: [Y],
                        shadow: [Y],
                        spacing: ["px", q],
                        text: [Y],
                        "text-shadow": [Y],
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
                    },
                    classGroups: {
                        aspect: [{
                                aspect: ["auto", "square", R, ee, ei, g]
                            }
                        ],
                        container: ["container"],
                        "container-type": [{
                                "@container": ["", "normal", "size", ei, ee]
                            }
                        ],
                        "container-named": [Q],
                        columns: [{
                                columns: [q, ee, ei, s]
                            }
                        ],
                        "break-after": [{
                                "break-after": w()
                            }
                        ],
                        "break-before": [{
                                "break-before": w()
                            }
                        ],
                        "break-inside": [{
                                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                            }
                        ],
                        "box-decoration": [{
                                "box-decoration": ["slice", "clone"]
                            }
                        ],
                        box: [{
                                box: ["border", "content"]
                            }
                        ],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        sr: ["sr-only", "not-sr-only"],
                        float: [{
                                float: ["right", "left", "none", "start", "end"]
                            }
                        ],
                        clear: [{
                                clear: ["left", "right", "both", "none", "start", "end"]
                            }
                        ],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                                object: ["contain", "cover", "fill", "none", "scale-down"]
                            }
                        ],
                        "object-position": [{
                                object: v()
                            }
                        ],
                        overflow: [{
                                overflow: y()
                            }
                        ],
                        "overflow-x": [{
                                "overflow-x": y()
                            }
                        ],
                        "overflow-y": [{
                                "overflow-y": y()
                            }
                        ],
                        overscroll: [{
                                overscroll: z()
                            }
                        ],
                        "overscroll-x": [{
                                "overscroll-x": z()
                            }
                        ],
                        "overscroll-y": [{
                                "overscroll-y": z()
                            }
                        ],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                                inset: A()
                            }
                        ],
                        "inset-x": [{
                                "inset-x": A()
                            }
                        ],
                        "inset-y": [{
                                "inset-y": A()
                            }
                        ],
                        start: [{
                                "inset-s": A(),
                                start: A()
                            }
                        ],
                        end: [{
                                "inset-e": A(),
                                end: A()
                            }
                        ],
                        "inset-bs": [{
                                "inset-bs": A()
                            }
                        ],
                        "inset-be": [{
                                "inset-be": A()
                            }
                        ],
                        top: [{
                                top: A()
                            }
                        ],
                        right: [{
                                right: A()
                            }
                        ],
                        bottom: [{
                                bottom: A()
                            }
                        ],
                        left: [{
                                left: A()
                            }
                        ],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                                z: [V, "auto", ei, ee]
                            }
                        ],
                        basis: [{
                                basis: [R, "full", "auto", s, ...j()]
                            }
                        ],
                        "flex-direction": [{
                                flex: ["row", "row-reverse", "col", "col-reverse"]
                            }
                        ],
                        "flex-wrap": [{
                                flex: ["nowrap", "wrap", "wrap-reverse"]
                            }
                        ],
                        flex: [{
                                flex: [q, R, "auto", "initial", "none", ee]
                            }
                        ],
                        grow: [{
                                grow: ["", q, ei, ee]
                            }
                        ],
                        shrink: [{
                                shrink: ["", q, ei, ee]
                            }
                        ],
                        order: [{
                                order: [V, "first", "last", "none", ei, ee]
                            }
                        ],
                        "grid-cols": [{
                                "grid-cols": N()
                            }
                        ],
                        "col-start-end": [{
                                col: S()
                            }
                        ],
                        "col-start": [{
                                "col-start": E()
                            }
                        ],
                        "col-end": [{
                                "col-end": E()
                            }
                        ],
                        "grid-rows": [{
                                "grid-rows": N()
                            }
                        ],
                        "row-start-end": [{
                                row: S()
                            }
                        ],
                        "row-start": [{
                                "row-start": E()
                            }
                        ],
                        "row-end": [{
                                "row-end": E()
                            }
                        ],
                        "grid-flow": [{
                                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                            }
                        ],
                        "auto-cols": [{
                                "auto-cols": P()
                            }
                        ],
                        "auto-rows": [{
                                "auto-rows": P()
                            }
                        ],
                        gap: [{
                                gap: j()
                            }
                        ],
                        "gap-x": [{
                                "gap-x": j()
                            }
                        ],
                        "gap-y": [{
                                "gap-y": j()
                            }
                        ],
                        "justify-content": [{
                                justify: [...C(), "normal"]
                            }
                        ],
                        "justify-items": [{
                                "justify-items": [...$(), "normal"]
                            }
                        ],
                        "justify-self": [{
                                "justify-self": ["auto", ...$()]
                            }
                        ],
                        "align-content": [{
                                content: ["normal", ...C()]
                            }
                        ],
                        "align-items": [{
                                items: [...$(), {
                                        baseline: ["", "last"]
                                    }
                                ]
                            }
                        ],
                        "align-self": [{
                                self: ["auto", ...$(), {
                                        baseline: ["", "last"]
                                    }
                                ]
                            }
                        ],
                        "place-content": [{
                                "place-content": C()
                            }
                        ],
                        "place-items": [{
                                "place-items": [...$(), "baseline"]
                            }
                        ],
                        "place-self": [{
                                "place-self": ["auto", ...$()]
                            }
                        ],
                        p: [{
                                p: j()
                            }
                        ],
                        px: [{
                                px: j()
                            }
                        ],
                        py: [{
                                py: j()
                            }
                        ],
                        ps: [{
                                ps: j()
                            }
                        ],
                        pe: [{
                                pe: j()
                            }
                        ],
                        pbs: [{
                                pbs: j()
                            }
                        ],
                        pbe: [{
                                pbe: j()
                            }
                        ],
                        pt: [{
                                pt: j()
                            }
                        ],
                        pr: [{
                                pr: j()
                            }
                        ],
                        pb: [{
                                pb: j()
                            }
                        ],
                        pl: [{
                                pl: j()
                            }
                        ],
                        m: [{
                                m: G()
                            }
                        ],
                        mx: [{
                                mx: G()
                            }
                        ],
                        my: [{
                                my: G()
                            }
                        ],
                        ms: [{
                                ms: G()
                            }
                        ],
                        me: [{
                                me: G()
                            }
                        ],
                        mbs: [{
                                mbs: G()
                            }
                        ],
                        mbe: [{
                                mbe: G()
                            }
                        ],
                        mt: [{
                                mt: G()
                            }
                        ],
                        mr: [{
                                mr: G()
                            }
                        ],
                        mb: [{
                                mb: G()
                            }
                        ],
                        ml: [{
                                ml: G()
                            }
                        ],
                        "space-x": [{
                                "space-x": j()
                            }
                        ],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                                "space-y": j()
                            }
                        ],
                        "space-y-reverse": ["space-y-reverse"],
                        size: [{
                                size: _()
                            }
                        ],
                        "inline-size": [{
                                inline: ["auto", ...I()]
                            }
                        ],
                        "min-inline-size": [{
                                "min-inline": ["auto", ...I()]
                            }
                        ],
                        "max-inline-size": [{
                                "max-inline": ["none", ...I()]
                            }
                        ],
                        "block-size": [{
                                block: ["auto", ...O()]
                            }
                        ],
                        "min-block-size": [{
                                "min-block": ["auto", ...O()]
                            }
                        ],
                        "max-block-size": [{
                                "max-block": ["none", ...O()]
                            }
                        ],
                        w: [{
                                w: [s, "screen", ..._()]
                            }
                        ],
                        "min-w": [{
                                "min-w": [s, "screen", "none", ..._()]
                            }
                        ],
                        "max-w": [{
                                "max-w": [s, "screen", "none", "prose", {
                                        screen: [l]
                                    }, ..._()]
                            }
                        ],
                        h: [{
                                h: ["screen", "lh", ..._()]
                            }
                        ],
                        "min-h": [{
                                "min-h": ["screen", "lh", "none", ..._()]
                            }
                        ],
                        "max-h": [{
                                "max-h": ["screen", "lh", ..._()]
                            }
                        ],
                        "font-size": [{
                                text: ["base", o, ed, er]
                            }
                        ],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                                font: [t, ef, et]
                            }
                        ],
                        "font-stretch": [{
                                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", H, ee]
                            }
                        ],
                        "font-family": [{
                                font: [ec, ea, r]
                            }
                        ],
                        "font-features": [{
                                "font-features": [ee]
                            }
                        ],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                        tracking: [{
                                tracking: [a, ei, ee]
                            }
                        ],
                        "line-clamp": [{
                                "line-clamp": [q, "none", ei, eo]
                            }
                        ],
                        leading: [{
                                leading: [n, ...j()]
                            }
                        ],
                        "list-image": [{
                                "list-image": ["none", ei, ee]
                            }
                        ],
                        "list-style-position": [{
                                list: ["inside", "outside"]
                            }
                        ],
                        "list-style-type": [{
                                list: ["disc", "decimal", "none", ei, ee]
                            }
                        ],
                        "text-alignment": [{
                                text: ["left", "center", "right", "justify", "start", "end"]
                            }
                        ],
                        "placeholder-color": [{
                                placeholder: W()
                            }
                        ],
                        "text-color": [{
                                text: W()
                            }
                        ],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                                decoration: [...J(), "wavy"]
                            }
                        ],
                        "text-decoration-thickness": [{
                                decoration: [q, "from-font", "auto", ei, er]
                            }
                        ],
                        "text-decoration-color": [{
                                decoration: W()
                            }
                        ],
                        "underline-offset": [{
                                "underline-offset": [q, "auto", ei, ee]
                            }
                        ],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{
                                text: ["wrap", "nowrap", "balance", "pretty"]
                            }
                        ],
                        indent: [{
                                indent: j()
                            }
                        ],
                        "tab-size": [{
                                tab: [V, ei, ee]
                            }
                        ],
                        "vertical-align": [{
                                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ei, ee]
                            }
                        ],
                        whitespace: [{
                                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                            }
                        ],
                        break: [{
                                break: ["normal", "words", "all", "keep"]
                            }
                        ],
                        wrap: [{
                                wrap: ["break-word", "anywhere", "normal"]
                            }
                        ],
                        hyphens: [{
                                hyphens: ["none", "manual", "auto"]
                            }
                        ],
                        content: [{
                                content: ["none", ei, ee]
                            }
                        ],
                        "bg-attachment": [{
                                bg: ["fixed", "local", "scroll"]
                            }
                        ],
                        "bg-clip": [{
                                "bg-clip": ["border", "padding", "content", "text"]
                            }
                        ],
                        "bg-origin": [{
                                "bg-origin": ["border", "padding", "content"]
                            }
                        ],
                        "bg-position": [{
                                bg: L()
                            }
                        ],
                        "bg-repeat": [{
                                bg: B()
                            }
                        ],
                        "bg-size": [{
                                bg: M()
                            }
                        ],
                        "bg-image": [{
                                bg: ["none", {
                                        linear: [{
                                                to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                                            }, V, ei, ee],
                                        radial: ["", ei, ee],
                                        conic: [V, ei, ee]
                                    }, ep, el]
                            }
                        ],
                        "bg-color": [{
                                bg: W()
                            }
                        ],
                        "gradient-from-pos": [{
                                from: K()
                            }
                        ],
                        "gradient-via-pos": [{
                                via: K()
                            }
                        ],
                        "gradient-to-pos": [{
                                to: K()
                            }
                        ],
                        "gradient-from": [{
                                from: W()
                            }
                        ],
                        "gradient-via": [{
                                via: W()
                            }
                        ],
                        "gradient-to": [{
                                to: W()
                            }
                        ],
                        rounded: [{
                                rounded: X()
                            }
                        ],
                        "rounded-s": [{
                                "rounded-s": X()
                            }
                        ],
                        "rounded-e": [{
                                "rounded-e": X()
                            }
                        ],
                        "rounded-t": [{
                                "rounded-t": X()
                            }
                        ],
                        "rounded-r": [{
                                "rounded-r": X()
                            }
                        ],
                        "rounded-b": [{
                                "rounded-b": X()
                            }
                        ],
                        "rounded-l": [{
                                "rounded-l": X()
                            }
                        ],
                        "rounded-ss": [{
                                "rounded-ss": X()
                            }
                        ],
                        "rounded-se": [{
                                "rounded-se": X()
                            }
                        ],
                        "rounded-ee": [{
                                "rounded-ee": X()
                            }
                        ],
                        "rounded-es": [{
                                "rounded-es": X()
                            }
                        ],
                        "rounded-tl": [{
                                "rounded-tl": X()
                            }
                        ],
                        "rounded-tr": [{
                                "rounded-tr": X()
                            }
                        ],
                        "rounded-br": [{
                                "rounded-br": X()
                            }
                        ],
                        "rounded-bl": [{
                                "rounded-bl": X()
                            }
                        ],
                        "border-w": [{
                                border: F()
                            }
                        ],
                        "border-w-x": [{
                                "border-x": F()
                            }
                        ],
                        "border-w-y": [{
                                "border-y": F()
                            }
                        ],
                        "border-w-s": [{
                                "border-s": F()
                            }
                        ],
                        "border-w-e": [{
                                "border-e": F()
                            }
                        ],
                        "border-w-bs": [{
                                "border-bs": F()
                            }
                        ],
                        "border-w-be": [{
                                "border-be": F()
                            }
                        ],
                        "border-w-t": [{
                                "border-t": F()
                            }
                        ],
                        "border-w-r": [{
                                "border-r": F()
                            }
                        ],
                        "border-w-b": [{
                                "border-b": F()
                            }
                        ],
                        "border-w-l": [{
                                "border-l": F()
                            }
                        ],
                        "divide-x": [{
                                "divide-x": F()
                            }
                        ],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                                "divide-y": F()
                            }
                        ],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "border-style": [{
                                border: [...J(), "hidden", "none"]
                            }
                        ],
                        "divide-style": [{
                                divide: [...J(), "hidden", "none"]
                            }
                        ],
                        "border-color": [{
                                border: W()
                            }
                        ],
                        "border-color-x": [{
                                "border-x": W()
                            }
                        ],
                        "border-color-y": [{
                                "border-y": W()
                            }
                        ],
                        "border-color-s": [{
                                "border-s": W()
                            }
                        ],
                        "border-color-e": [{
                                "border-e": W()
                            }
                        ],
                        "border-color-bs": [{
                                "border-bs": W()
                            }
                        ],
                        "border-color-be": [{
                                "border-be": W()
                            }
                        ],
                        "border-color-t": [{
                                "border-t": W()
                            }
                        ],
                        "border-color-r": [{
                                "border-r": W()
                            }
                        ],
                        "border-color-b": [{
                                "border-b": W()
                            }
                        ],
                        "border-color-l": [{
                                "border-l": W()
                            }
                        ],
                        "divide-color": [{
                                divide: W()
                            }
                        ],
                        "outline-style": [{
                                outline: [...J(), "none", "hidden"]
                            }
                        ],
                        "outline-offset": [{
                                "outline-offset": [q, ei, ee]
                            }
                        ],
                        "outline-w": [{
                                outline: ["", q, ed, er]
                            }
                        ],
                        "outline-color": [{
                                outline: W()
                            }
                        ],
                        shadow: [{
                                shadow: ["", "none", c, eb, es]
                            }
                        ],
                        "shadow-color": [{
                                shadow: W()
                            }
                        ],
                        "inset-shadow": [{
                                "inset-shadow": ["none", m, eb, es]
                            }
                        ],
                        "inset-shadow-color": [{
                                "inset-shadow": W()
                            }
                        ],
                        "ring-w": [{
                                ring: F()
                            }
                        ],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                                ring: W()
                            }
                        ],
                        "ring-offset-w": [{
                                "ring-offset": [q, er]
                            }
                        ],
                        "ring-offset-color": [{
                                "ring-offset": W()
                            }
                        ],
                        "inset-ring-w": [{
                                "inset-ring": F()
                            }
                        ],
                        "inset-ring-color": [{
                                "inset-ring": W()
                            }
                        ],
                        "text-shadow": [{
                                "text-shadow": ["none", u, eb, es]
                            }
                        ],
                        "text-shadow-color": [{
                                "text-shadow": W()
                            }
                        ],
                        opacity: [{
                                opacity: [q, ei, ee]
                            }
                        ],
                        "mix-blend": [{
                                "mix-blend": [...eg(), "plus-darker", "plus-lighter"]
                            }
                        ],
                        "bg-blend": [{
                                "bg-blend": eg()
                            }
                        ],
                        "mask-clip": [{
                                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                            }, "mask-no-clip"],
                        "mask-composite": [{
                                mask: ["add", "subtract", "intersect", "exclude"]
                            }
                        ],
                        "mask-image-linear-pos": [{
                                "mask-linear": [q]
                            }
                        ],
                        "mask-image-linear-from-pos": [{
                                "mask-linear-from": eh()
                            }
                        ],
                        "mask-image-linear-to-pos": [{
                                "mask-linear-to": eh()
                            }
                        ],
                        "mask-image-linear-from-color": [{
                                "mask-linear-from": W()
                            }
                        ],
                        "mask-image-linear-to-color": [{
                                "mask-linear-to": W()
                            }
                        ],
                        "mask-image-t-from-pos": [{
                                "mask-t-from": eh()
                            }
                        ],
                        "mask-image-t-to-pos": [{
                                "mask-t-to": eh()
                            }
                        ],
                        "mask-image-t-from-color": [{
                                "mask-t-from": W()
                            }
                        ],
                        "mask-image-t-to-color": [{
                                "mask-t-to": W()
                            }
                        ],
                        "mask-image-r-from-pos": [{
                                "mask-r-from": eh()
                            }
                        ],
                        "mask-image-r-to-pos": [{
                                "mask-r-to": eh()
                            }
                        ],
                        "mask-image-r-from-color": [{
                                "mask-r-from": W()
                            }
                        ],
                        "mask-image-r-to-color": [{
                                "mask-r-to": W()
                            }
                        ],
                        "mask-image-b-from-pos": [{
                                "mask-b-from": eh()
                            }
                        ],
                        "mask-image-b-to-pos": [{
                                "mask-b-to": eh()
                            }
                        ],
                        "mask-image-b-from-color": [{
                                "mask-b-from": W()
                            }
                        ],
                        "mask-image-b-to-color": [{
                                "mask-b-to": W()
                            }
                        ],
                        "mask-image-l-from-pos": [{
                                "mask-l-from": eh()
                            }
                        ],
                        "mask-image-l-to-pos": [{
                                "mask-l-to": eh()
                            }
                        ],
                        "mask-image-l-from-color": [{
                                "mask-l-from": W()
                            }
                        ],
                        "mask-image-l-to-color": [{
                                "mask-l-to": W()
                            }
                        ],
                        "mask-image-x-from-pos": [{
                                "mask-x-from": eh()
                            }
                        ],
                        "mask-image-x-to-pos": [{
                                "mask-x-to": eh()
                            }
                        ],
                        "mask-image-x-from-color": [{
                                "mask-x-from": W()
                            }
                        ],
                        "mask-image-x-to-color": [{
                                "mask-x-to": W()
                            }
                        ],
                        "mask-image-y-from-pos": [{
                                "mask-y-from": eh()
                            }
                        ],
                        "mask-image-y-to-pos": [{
                                "mask-y-to": eh()
                            }
                        ],
                        "mask-image-y-from-color": [{
                                "mask-y-from": W()
                            }
                        ],
                        "mask-image-y-to-color": [{
                                "mask-y-to": W()
                            }
                        ],
                        "mask-image-radial": [{
                                "mask-radial": [ei, ee]
                            }
                        ],
                        "mask-image-radial-from-pos": [{
                                "mask-radial-from": eh()
                            }
                        ],
                        "mask-image-radial-to-pos": [{
                                "mask-radial-to": eh()
                            }
                        ],
                        "mask-image-radial-from-color": [{
                                "mask-radial-from": W()
                            }
                        ],
                        "mask-image-radial-to-color": [{
                                "mask-radial-to": W()
                            }
                        ],
                        "mask-image-radial-shape": [{
                                "mask-radial": ["circle", "ellipse"]
                            }
                        ],
                        "mask-image-radial-size": [{
                                "mask-radial": [{
                                        closest: ["side", "corner"],
                                        farthest: ["side", "corner"]
                                    }
                                ]
                            }
                        ],
                        "mask-image-radial-pos": [{
                                "mask-radial-at": k()
                            }
                        ],
                        "mask-image-conic-pos": [{
                                "mask-conic": [q]
                            }
                        ],
                        "mask-image-conic-from-pos": [{
                                "mask-conic-from": eh()
                            }
                        ],
                        "mask-image-conic-to-pos": [{
                                "mask-conic-to": eh()
                            }
                        ],
                        "mask-image-conic-from-color": [{
                                "mask-conic-from": W()
                            }
                        ],
                        "mask-image-conic-to-color": [{
                                "mask-conic-to": W()
                            }
                        ],
                        "mask-mode": [{
                                mask: ["alpha", "luminance", "match"]
                            }
                        ],
                        "mask-origin": [{
                                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                            }
                        ],
                        "mask-position": [{
                                mask: L()
                            }
                        ],
                        "mask-repeat": [{
                                mask: B()
                            }
                        ],
                        "mask-size": [{
                                mask: M()
                            }
                        ],
                        "mask-type": [{
                                "mask-type": ["alpha", "luminance"]
                            }
                        ],
                        "mask-image": [{
                                mask: ["none", ei, ee]
                            }
                        ],
                        filter: [{
                                filter: ["", "none", ei, ee]
                            }
                        ],
                        blur: [{
                                blur: ex()
                            }
                        ],
                        brightness: [{
                                brightness: [q, ei, ee]
                            }
                        ],
                        contrast: [{
                                contrast: [q, ei, ee]
                            }
                        ],
                        "drop-shadow": [{
                                "drop-shadow": ["", "none", p, eb, es]
                            }
                        ],
                        "drop-shadow-color": [{
                                "drop-shadow": W()
                            }
                        ],
                        grayscale: [{
                                grayscale: ["", q, ei, ee]
                            }
                        ],
                        "hue-rotate": [{
                                "hue-rotate": [q, ei, ee]
                            }
                        ],
                        invert: [{
                                invert: ["", q, ei, ee]
                            }
                        ],
                        saturate: [{
                                saturate: [q, ei, ee]
                            }
                        ],
                        sepia: [{
                                sepia: ["", q, ei, ee]
                            }
                        ],
                        "backdrop-filter": [{
                                "backdrop-filter": ["", "none", ei, ee]
                            }
                        ],
                        "backdrop-blur": [{
                                "backdrop-blur": ex()
                            }
                        ],
                        "backdrop-brightness": [{
                                "backdrop-brightness": [q, ei, ee]
                            }
                        ],
                        "backdrop-contrast": [{
                                "backdrop-contrast": [q, ei, ee]
                            }
                        ],
                        "backdrop-grayscale": [{
                                "backdrop-grayscale": ["", q, ei, ee]
                            }
                        ],
                        "backdrop-hue-rotate": [{
                                "backdrop-hue-rotate": [q, ei, ee]
                            }
                        ],
                        "backdrop-invert": [{
                                "backdrop-invert": ["", q, ei, ee]
                            }
                        ],
                        "backdrop-opacity": [{
                                "backdrop-opacity": [q, ei, ee]
                            }
                        ],
                        "backdrop-saturate": [{
                                "backdrop-saturate": [q, ei, ee]
                            }
                        ],
                        "backdrop-sepia": [{
                                "backdrop-sepia": ["", q, ei, ee]
                            }
                        ],
                        "border-collapse": [{
                                border: ["collapse", "separate"]
                            }
                        ],
                        "border-spacing": [{
                                "border-spacing": j()
                            }
                        ],
                        "border-spacing-x": [{
                                "border-spacing-x": j()
                            }
                        ],
                        "border-spacing-y": [{
                                "border-spacing-y": j()
                            }
                        ],
                        "table-layout": [{
                                table: ["auto", "fixed"]
                            }
                        ],
                        caption: [{
                                caption: ["top", "bottom"]
                            }
                        ],
                        transition: [{
                                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ei, ee]
                            }
                        ],
                        "transition-behavior": [{
                                transition: ["normal", "discrete"]
                            }
                        ],
                        duration: [{
                                duration: [q, "initial", ei, ee]
                            }
                        ],
                        ease: [{
                                ease: ["linear", "initial", h, ei, ee]
                            }
                        ],
                        delay: [{
                                delay: [q, ei, ee]
                            }
                        ],
                        animate: [{
                                animate: ["none", x, ei, ee]
                            }
                        ],
                        backface: [{
                                backface: ["hidden", "visible"]
                            }
                        ],
                        perspective: [{
                                perspective: [f, ei, ee]
                            }
                        ],
                        "perspective-origin": [{
                                "perspective-origin": v()
                            }
                        ],
                        rotate: [{
                                rotate: ew()
                            }
                        ],
                        "rotate-x": [{
                                "rotate-x": ew()
                            }
                        ],
                        "rotate-y": [{
                                "rotate-y": ew()
                            }
                        ],
                        "rotate-z": [{
                                "rotate-z": ew()
                            }
                        ],
                        scale: [{
                                scale: ek()
                            }
                        ],
                        "scale-x": [{
                                "scale-x": ek()
                            }
                        ],
                        "scale-y": [{
                                "scale-y": ek()
                            }
                        ],
                        "scale-z": [{
                                "scale-z": ek()
                            }
                        ],
                        "scale-3d": ["scale-3d"],
                        skew: [{
                                skew: ev()
                            }
                        ],
                        "skew-x": [{
                                "skew-x": ev()
                            }
                        ],
                        "skew-y": [{
                                "skew-y": ev()
                            }
                        ],
                        transform: [{
                                transform: [ei, ee, "", "none", "gpu", "cpu"]
                            }
                        ],
                        "transform-origin": [{
                                origin: v()
                            }
                        ],
                        "transform-style": [{
                                transform: ["3d", "flat"]
                            }
                        ],
                        translate: [{
                                translate: ey()
                            }
                        ],
                        "translate-x": [{
                                "translate-x": ey()
                            }
                        ],
                        "translate-y": [{
                                "translate-y": ey()
                            }
                        ],
                        "translate-z": [{
                                "translate-z": ey()
                            }
                        ],
                        "translate-none": ["translate-none"],
                        zoom: [{
                                zoom: [V, ei, ee]
                            }
                        ],
                        accent: [{
                                accent: W()
                            }
                        ],
                        appearance: [{
                                appearance: ["none", "auto"]
                            }
                        ],
                        "caret-color": [{
                                caret: W()
                            }
                        ],
                        "color-scheme": [{
                                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                            }
                        ],
                        cursor: [{
                                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ei, ee]
                            }
                        ],
                        "field-sizing": [{
                                "field-sizing": ["fixed", "content"]
                            }
                        ],
                        "pointer-events": [{
                                "pointer-events": ["auto", "none"]
                            }
                        ],
                        resize: [{
                                resize: ["none", "", "y", "x"]
                            }
                        ],
                        "scroll-behavior": [{
                                scroll: ["auto", "smooth"]
                            }
                        ],
                        "scrollbar-thumb-color": [{
                                "scrollbar-thumb": W()
                            }
                        ],
                        "scrollbar-track-color": [{
                                "scrollbar-track": W()
                            }
                        ],
                        "scrollbar-gutter": [{
                                "scrollbar-gutter": ["auto", "stable", "both"]
                            }
                        ],
                        "scrollbar-w": [{
                                scrollbar: ["auto", "thin", "none"]
                            }
                        ],
                        "scroll-m": [{
                                "scroll-m": j()
                            }
                        ],
                        "scroll-mx": [{
                                "scroll-mx": j()
                            }
                        ],
                        "scroll-my": [{
                                "scroll-my": j()
                            }
                        ],
                        "scroll-ms": [{
                                "scroll-ms": j()
                            }
                        ],
                        "scroll-me": [{
                                "scroll-me": j()
                            }
                        ],
                        "scroll-mbs": [{
                                "scroll-mbs": j()
                            }
                        ],
                        "scroll-mbe": [{
                                "scroll-mbe": j()
                            }
                        ],
                        "scroll-mt": [{
                                "scroll-mt": j()
                            }
                        ],
                        "scroll-mr": [{
                                "scroll-mr": j()
                            }
                        ],
                        "scroll-mb": [{
                                "scroll-mb": j()
                            }
                        ],
                        "scroll-ml": [{
                                "scroll-ml": j()
                            }
                        ],
                        "scroll-p": [{
                                "scroll-p": j()
                            }
                        ],
                        "scroll-px": [{
                                "scroll-px": j()
                            }
                        ],
                        "scroll-py": [{
                                "scroll-py": j()
                            }
                        ],
                        "scroll-ps": [{
                                "scroll-ps": j()
                            }
                        ],
                        "scroll-pe": [{
                                "scroll-pe": j()
                            }
                        ],
                        "scroll-pbs": [{
                                "scroll-pbs": j()
                            }
                        ],
                        "scroll-pbe": [{
                                "scroll-pbe": j()
                            }
                        ],
                        "scroll-pt": [{
                                "scroll-pt": j()
                            }
                        ],
                        "scroll-pr": [{
                                "scroll-pr": j()
                            }
                        ],
                        "scroll-pb": [{
                                "scroll-pb": j()
                            }
                        ],
                        "scroll-pl": [{
                                "scroll-pl": j()
                            }
                        ],
                        "snap-align": [{
                                snap: ["start", "end", "center", "align-none"]
                            }
                        ],
                        "snap-stop": [{
                                snap: ["normal", "always"]
                            }
                        ],
                        "snap-type": [{
                                snap: ["none", "x", "y", "both"]
                            }
                        ],
                        "snap-strictness": [{
                                snap: ["mandatory", "proximity"]
                            }
                        ],
                        touch: [{
                                touch: ["auto", "none", "manipulation"]
                            }
                        ],
                        "touch-x": [{
                                "touch-pan": ["x", "left", "right"]
                            }
                        ],
                        "touch-y": [{
                                "touch-pan": ["y", "up", "down"]
                            }
                        ],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{
                                select: ["none", "text", "all", "auto"]
                            }
                        ],
                        "will-change": [{
                                "will-change": ["auto", "scroll", "contents", "transform", ei, ee]
                            }
                        ],
                        fill: [{
                                fill: ["none", ...W()]
                            }
                        ],
                        "stroke-w": [{
                                stroke: [q, ed, er, eo]
                            }
                        ],
                        stroke: [{
                                stroke: ["none", ...W()]
                            }
                        ],
                        "forced-color-adjust": [{
                                "forced-color-adjust": ["auto", "none"]
                            }
                        ]
                    },
                    conflictingClassGroups: {
                        "container-named": ["container-type"],
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        translate: ["translate-x", "translate-y", "translate-none"],
                        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    },
                    postfixLookupClassGroups: ["container-type"],
                    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
                }
            }, n = e => {
                    let a = o(e);
                    if (a)
                        return a;
                    let n = ((e, r) => {
                        let {
                            parseClassName: o,
                            getClassGroupId: t,
                            getConflictingClassGroupIds: a,
                            sortModifiers: n,
                            postfixLookupClassGroupIds: l
                        } = r,
                        s = [],
                        i = e.trim().split(P),
                        d = "";
                        for (let e = i.length - 1; e >= 0; e -= 1) {
                            let r,
                            c = i[e], {
                                isExternal: m,
                                modifiers: u,
                                hasImportantModifier: p,
                                baseClassName: b,
                                maybePostfixModifierPosition: f
                            } = o(c);
                            if (m) {
                                d = c + (d.length > 0 ? " " + d : d);
                                continue
                            }
                            let g = !!f;
                            if (g) {
                                let e = (r = t(b.substring(0, f))) && l[r] ? t(b) : void 0;
                                e && e !== r && (r = e, g = !1)
                            } else
                                r = t(b);
                            if (!r) {
                                if (!g || !(r = t(b))) {
                                    d = c + (d.length > 0 ? " " + d : d);
                                    continue
                                }
                                g = !1
                            }
                            let h = 0 === u.length ? "" : 1 === u.length ? u[0] : n(u).join(":"),
                            x = p ? h + "!" : h,
                            w = x + r;
                            if (s.indexOf(w) > -1)
                                continue;
                            s.push(w);
                            let k = a(r, g);
                            for (let e = 0; e < k.length; ++e) {
                                let r = k[e];
                                s.push(x + r)
                            }
                            d = c + (d.length > 0 ? " " + d : d)
                        }
                        return d
                    })(e, r);
                    return t(e, n),
                    n
                }, a = e => {
                    var s;
                    let i;
                    return o = (r = {
                            cache: (e => {
                                if (e < 1)
                                    return {
                                        get: () => void 0,
                                        set: () => {}
                                    };
                                let r = 0,
                                o = Object.create(null),
                                t = Object.create(null),
                                a = (a, n) => {
                                    o[a] = n,
                                    ++r > e && (r = 0, t = o, o = Object.create(null))
                                };
                                return {
                                    get(e) {
                                        let r = o[e];
                                        return void 0 !== r ? r : void 0 !== (r = t[e]) ? (a(e, r), r) : void 0
                                    },
                                    set(e, r) {
                                        e in o ? o[e] = r : a(e, r)
                                    }
                                }
                            })((s = [].reduce((e, r) => r(e), l())).cacheSize),
                            parseClassName: (e => {
                                let {
                                    prefix: r,
                                    experimentalParseClassName: o
                                } = e,
                                t = e => {
                                    let r,
                                    o = [],
                                    t = 0,
                                    a = 0,
                                    n = 0,
                                    l = e.length;
                                    for (let s = 0; s < l; s++) {
                                        let l = e[s];
                                        if (0 === t && 0 === a) {
                                            if (":" === l) {
                                                o.push(e.slice(n, s)),
                                                n = s + 1;
                                                continue
                                            }
                                            if ("/" === l) {
                                                r = s;
                                                continue
                                            }
                                        }
                                        "[" === l ? t++ : "]" === l ? t-- : "(" === l ? a++ : ")" === l && a--
                                    }
                                    let s = 0 === o.length ? e : e.slice(n),
                                    i = s,
                                    d = !1;
                                    return s.endsWith("!") ? (i = s.slice(0, -1), d = !0) : s.startsWith("!") && (i = s.slice(1), d = !0),
                                    E(o, d, i, r && r > n ? r - n : void 0)
                                };
                                if (r) {
                                    let e = r + ":",
                                    o = t;
                                    t = r => r.startsWith(e) ? o(r.slice(e.length)) : E(S, !1, r, void 0, !0)
                                }
                                if (o) {
                                    let e = t;
                                    t = r => o({
                                        className: r,
                                        parseClassName: e
                                    })
                                }
                                return t
                            })(s),
                            sortModifiers: (i = new Map, s.orderSensitiveModifiers.forEach((e, r) => {
                                    i.set(e, 1e6 + r)
                                }), e => {
                                let r = [],
                                o = [];
                                for (let t = 0; t < e.length; t++) {
                                    let a = e[t],
                                    n = "[" === a[0],
                                    l = i.has(a);
                                    n || l ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(a)) : o.push(a)
                                }
                                return o.length > 0 && (o.sort(), r.push(...o)),
                                r
                            }),
                            postfixLookupClassGroupIds: (e => {
                                let r = Object.create(null),
                                o = e.postfixLookupClassGroups;
                                if (o)
                                    for (let e = 0; e < o.length; e++)
                                        r[o[e]] = !0;
                                return r
                            })(s),
                            ...(e => {
                                let r = (e => {
                                    let {
                                        theme: r,
                                        classGroups: o
                                    } = e;
                                    return w(o, r)
                                })(e), {
                                    conflictingClassGroups: o,
                                    conflictingClassGroupModifiers: t
                                } = e;
                                return {
                                    getClassGroupId: e => {
                                        if (e.startsWith("[") && e.endsWith("]")) {
                                            var o;
                                            let r,
                                            t,
                                            a;
                                            return -1 === (o = e).slice(1, -1).indexOf(":") ? void 0 : (t = (r = o.slice(1, -1)).indexOf(":"), (a = r.slice(0, t)) ? "arbitrary.." + a : void 0)
                                        }
                                        let t = e.split("-"),
                                        a =  + ("" === t[0] && t.length > 1);
                                        return x(t, a, r)
                                    },
                                    getConflictingClassGroupIds: (e, r) => {
                                        if (r) {
                                            let r = t[e],
                                            a = o[e];
                                            if (r) {
                                                if (a) {
                                                    let e = Array(a.length + r.length);
                                                    for (let r = 0; r < a.length; r++)
                                                        e[r] = a[r];
                                                    for (let o = 0; o < r.length; o++)
                                                        e[a.length + o] = r[o];
                                                    return e
                                                }
                                                return r
                                            }
                                            return a || h
                                        }
                                        return o[e] || h
                                    }
                                }
                            })(s)
                        }).cache.get,
                    t = r.cache.set,
                    a = n,
                    n(e)
                }, (...e) => a(((...e) => {
                        let r,
                        o,
                        t = 0,
                        a = "";
                        for (; t < e.length; )
                            (r = e[t++]) && (o = C(r)) && (a && (a += " "), a += o);
                        return a
                    })(...e)));
            function eS(...e) {
                return eN(function () {
                    for (var e, r, o = 0, t = "", a = arguments.length; o < a; o++)
                        (e = arguments[o]) && (r = function e(r) {
                            var o,
                            t,
                            a = "";
                            if ("string" == typeof r || "number" == typeof r)
                                a += r;
                            else if ("object" == typeof r)
                                if (Array.isArray(r)) {
                                    var n = r.length;
                                    for (o = 0; o < n; o++)
                                        r[o] && (t = e(r[o])) && (a && (a += " "), a += t)
                                } else
                                    for (t in r)
                                        r[t] && (a && (a += " "), a += t);
                            return a
                        }
                            (e)) && (t && (t += " "), t += r);
                    return t
                }
                    (e))
            }
            function eE({
                className: e,
                showText: r = !0,
                size: o = 36
            }) {
                return (0, s.jsxs)(d.default, {
                    href: "/",
                    className: eS("group inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", e),
                    "aria-label": `${p} — Inicio`,
                    children: [(0, s.jsx)(f.default, {
                            src: "/assets/hagala/logo.png",
                            alt: "",
                            width: o,
                            height: o,
                            className: "h-9 w-9 object-contain drop-shadow-[0_0_12px_oklch(0.62_0.2_295/0.5)] transition-transform group-hover:scale-105",
                            priority: !0
                        }), r && (0, s.jsx)("span", {
                            className: "font-display text-sm font-semibold uppercase leading-tight tracking-[0.2em] text-foreground",
                            children: p
                        })]
                })
            }
            e.s(["SiteHeader", 0, function () {
                        let e = (0, c.usePathname)(),
                        [r, o] = (0, i.useState)(!1),
                        [t, a] = (0, i.useState)(!1),
                        [n, l] = (0, i.useState)(!1),
                        p = (0, i.useRef)(0);
                        (0, i.useEffect)(() => {
                            p.current = window.scrollY;
                            let e = () => {
                                let e = window.scrollY;
                                a(e > 12),
                                n || (e > p.current && e > 120 ? o(!0) : o(!1)),
                                p.current = e
                            };
                            return window.addEventListener("scroll", e, {
                                passive: !0
                            }),
                            () => window.removeEventListener("scroll", e)
                        }, [n]),
                        (0, i.useEffect)(() => {
                            l(!1)
                        }, [e]);
                        let f = r => "/" === r ? "/" === e : e.startsWith(r);
                        return (0, s.jsx)("header", {
                            className: eS("fixed inset-x-0 top-0 z-50 transition-transform duration-300 will-change-transform", r ? "-translate-y-full" : "translate-y-0"),
                            children: (0, s.jsxs)("div", {
                                className: eS("transition-colors duration-300", t || n ? "border-b border-border bg-background/80 backdrop-blur-xl" : "border-b border-transparent bg-gradient-to-b from-background/70 to-transparent"),
                                children: [(0, s.jsxs)("div", {
                                        className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
                                        children: [(0, s.jsx)(eE, {}), (0, s.jsx)("nav", {
                                                className: "hidden items-center gap-1 md:flex",
                                                "aria-label": "Navegación principal",
                                                children: b.map(e => (0, s.jsxs)(d.default, {
                                                        href: e.href,
                                                        className: eS("relative rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-foreground", f(e.href) ? "text-foreground" : "text-muted-foreground"),
                                                        children: [e.label, f(e.href) && (0, s.jsx)("span", {
                                                                className: "absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                                                            })]
                                                    }, e.href))
                                            }), (0, s.jsx)("button", {
                                                type: "button",
                                                className: "inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-white/5 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                                "aria-label": n ? "Cerrar menú" : "Abrir menú",
                                                "aria-expanded": n,
                                                "aria-controls": "mobile-menu",
                                                onClick: () => l(e => !e),
                                                children: n ? (0, s.jsx)(u.X, {
                                                    className: "h-5 w-5"
                                                }) : (0, s.jsx)(m, {
                                                    className: "h-5 w-5"
                                                })
                                            })]
                                    }), (0, s.jsx)("div", {
                                        id: "mobile-menu",
                                        className: eS("overflow-hidden border-t border-border/60 transition-[max-height,opacity] duration-300 md:hidden", n ? "max-h-72 opacity-100" : "max-h-0 opacity-0"),
                                        children: (0, s.jsx)("nav", {
                                            className: "mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6",
                                            "aria-label": "Navegación móvil",
                                            children: b.map(e => (0, s.jsx)(d.default, {
                                                    href: e.href,
                                                    className: eS("rounded-lg px-4 py-3 text-base font-medium transition-colors", f(e.href) ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"),
                                                    children: e.label
                                                }, e.href))
                                        })
                                    })]
                            })
                        })
                    }
                ], 48303)
        }, 2355, e => {
            "use strict";
            var r = e.i(47167),
            o = e.i(71645),
            t = e.i(18566);
            function a() {
                return "u" > typeof window
            }
            function n() {
                return "production"
            }
            function l() {
                return "development" === ((a() ? window.vam : n()) || "production")
            }
            function s(e) {
                return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[/?#]|$)`)
            }
            function i(e) {
                return (0, o.useEffect)(() => {
                    var r;
                    e.beforeSend && (null == (r = window.va) || r.call(window, "beforeSend", e.beforeSend))
                }, [e.beforeSend]),
                (0, o.useEffect)(() => {
                    !function (e = {
                            debug: !0
                        }) {
                        var r;
                        if (!a())
                            return;
                        !function (e = "auto") {
                            if ("auto" === e) {
                                window.vam = n();
                                return
                            }
                            window.vam = e
                        }
                        (e.mode),
                        window.va || (window.va = function (...e) {
                            (window.vaq = window.vaq || []).push(e)
                        }),
                        e.beforeSend && (null == (r = window.va) || r.call(window, "beforeSend", e.beforeSend));
                        let o = e.scriptSrc ? e.scriptSrc : l() ? "https://va.vercel-scripts.com/v1/script.debug.js" : e.basePath ? `${e.basePath}/insights/script.js` : "/_vercel/insights/script.js";
                        if (document.head.querySelector(`script[src*="${o}"]`))
                            return;
                        let t = document.createElement("script");
                        t.src = o,
                        t.defer = !0,
                        t.dataset.sdkn = "@vercel/analytics" + (e.framework ? `/${e.framework}` : ""),
                        t.dataset.sdkv = "1.6.1",
                        e.disableAutoTrack && (t.dataset.disableAutoTrack = "1"),
                        e.endpoint ? t.dataset.endpoint = e.endpoint : e.basePath && (t.dataset.endpoint = `${e.basePath}/insights`),
                        e.dsn && (t.dataset.dsn = e.dsn),
                        t.onerror = () => {
                            let e = l() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                            console.log(`[Vercel Web Analytics] Failed to load script from ${o}. ${e}`)
                        },
                        l() && !1 === e.debug && (t.dataset.debug = "false"),
                        document.head.appendChild(t)
                    }
                    ({
                        framework: e.framework || "react",
                        basePath: e.basePath ?? function () {
                            if (void 0 !== r.default && void 0 !== r.default.env)
                                return r.default.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
                        }
                        (),
                        ...void 0 !== e.route && {
                            disableAutoTrack: !0
                        },
                        ...e
                    })
                }, []),
                (0, o.useEffect)(() => {
                    e.route && e.path && function ({
                        route: e,
                        path: r
                    }) {
                        var o;
                        null == (o = window.va) || o.call(window, "pageview", {
                            route: e,
                            path: r
                        })
                    }
                    ({
                        route: e.route,
                        path: e.path
                    })
                }, [e.route, e.path]),
                null
            }
            function d(e) {
                let a,
                n,
                l, {
                    route: d,
                    path: c
                } = (a = (0, t.useParams)(), n = (0, t.useSearchParams)(), l = (0, t.usePathname)(), a ? {
                    route: function (e, r) {
                        if (!e || !r)
                            return e;
                        let o = e;
                        try {
                            let e = Object.entries(r);
                            for (let [r, t] of e)
                                if (!Array.isArray(t)) {
                                    let e = s(t);
                                    e.test(o) && (o = o.replace(e, `/[${r}]`))
                                }
                            for (let [r, t] of e)
                                if (Array.isArray(t)) {
                                    let e = s(t.join("/"));
                                    e.test(o) && (o = o.replace(e, `/[...${r}]`))
                                }
                            return o
                        } catch (r) {
                            return e
                        }
                    }
                    (l, Object.keys(a).length ? a : Object.fromEntries(n.entries())),
                    path: l
                }
                     : {
                    route: null,
                    path: l
                });
                return o.default.createElement(i, {
                    path: c,
                    route: d,
                    ...e,
                    basePath: function () {
                        if (void 0 !== r.default && void 0 !== r.default.env)
                            return r.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH
                    }
                    (),
                    framework: "next"
                })
            }
            e.s(["Analytics", 0, function (e) {
                        return o.default.createElement(o.Suspense, {
                            fallback: null
                        }, o.default.createElement(d, {
                                ...e
                            }))
                    }
                ])
        }, 18566, (e, r, o) => {
            r.exports = e.r(76562)
        }
    ]);
