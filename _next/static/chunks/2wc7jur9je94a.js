(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 13595, e => {
            "use strict";
            var r = e.i(43476),
            t = e.i(71645),
            l = e.i(57688),
            o = e.i(63676),
            a = e.i(56420);
            let s = (0, a.default)("chevron-left", [["path", {
                            d: "m15 18-6-6 6-6",
                            key: "1wnfg3"
                        }
                    ]]),
            i = (0, a.default)("chevron-right", [["path", {
                            d: "m9 18 6-6-6-6",
                            key: "mthhwq"
                        }
                    ]]);
            e.s(["GameGallery", 0, function ({
                        items: e
                    }) {
                        let [a, n] = (0, t.useState)(null),
                        d = (0, t.useCallback)(() => n(null), []),
                        c = (0, t.useCallback)(() => n(r => null === r ? r : (r - 1 + e.length) % e.length), [e.length]),
                        u = (0, t.useCallback)(() => n(r => null === r ? r : (r + 1) % e.length), [e.length]);
                        return (0, t.useEffect)(() => {
                            if (null === a)
                                return;
                            let e = e => {
                                "Escape" === e.key && d(),
                                "ArrowLeft" === e.key && c(),
                                "ArrowRight" === e.key && u()
                            };
                            return document.addEventListener("keydown", e),
                            document.body.style.overflow = "hidden",
                            () => {
                                document.removeEventListener("keydown", e),
                                document.body.style.overflow = ""
                            }
                        }, [a, d, c, u]),
                        (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                    className: "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3",
                                    children: e.map((e, t) => (0, r.jsxs)("button", {
                                            type: "button",
                                            onClick: () => n(t),
                                            className: "group relative aspect-video overflow-hidden rounded-xl border border-border bg-card/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                            "aria-label": `Ampliar imagen: ${e.alt}`,
                                            children: [(0, r.jsx)(l.default, {
                                                    src: e.src || "/placeholder.svg",
                                                    alt: e.alt,
                                                    fill: !0,
                                                    sizes: "(max-width: 768px) 50vw, 33vw",
                                                    className: "object-cover transition-transform duration-500 group-hover:scale-105"
                                                }), (0, r.jsx)("div", {
                                                    className: "absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/10"
                                                })]
                                        }, e.src))
                                }), null !== a && (0, r.jsxs)("div", {
                                    className: "fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md",
                                    role: "dialog",
                                    "aria-modal": "true",
                                    "aria-label": "Visor de imágenes",
                                    onClick: d,
                                    children: [(0, r.jsx)("button", {
                                            type: "button",
                                            onClick: d,
                                            className: "absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:border-primary/50",
                                            "aria-label": "Cerrar",
                                            children: (0, r.jsx)(o.X, {
                                                className: "h-5 w-5"
                                            })
                                        }), e.length > 1 && (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)("button", {
                                                    type: "button",
                                                    onClick: e => {
                                                        e.stopPropagation(),
                                                        c()
                                                    },
                                                    className: "absolute left-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:border-primary/50",
                                                    "aria-label": "Anterior",
                                                    children: (0, r.jsx)(s, {
                                                        className: "h-5 w-5"
                                                    })
                                                }), (0, r.jsx)("button", {
                                                    type: "button",
                                                    onClick: e => {
                                                        e.stopPropagation(),
                                                        u()
                                                    },
                                                    className: "absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:border-primary/50",
                                                    "aria-label": "Siguiente",
                                                    children: (0, r.jsx)(i, {
                                                        className: "h-5 w-5"
                                                    })
                                                })]
                                        }), (0, r.jsxs)("figure", {
                                            className: "relative max-h-[85vh] w-full max-w-5xl",
                                            onClick: e => e.stopPropagation(),
                                            children: [(0, r.jsx)("div", {
                                                    className: "relative aspect-video w-full overflow-hidden rounded-2xl border border-border",
                                                    children: (0, r.jsx)(l.default, {
                                                        src: e[a].src || "/placeholder.svg",
                                                        alt: e[a].alt,
                                                        fill: !0,
                                                        sizes: "90vw",
                                                        className: "object-contain"
                                                    })
                                                }), (0, r.jsx)("figcaption", {
                                                    className: "mt-3 text-center text-sm text-muted-foreground",
                                                    children: e[a].alt
                                                })]
                                        })]
                                })]
                        })
                    }
                ], 13595)
        }
    ]);
