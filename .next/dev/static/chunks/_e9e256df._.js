(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/windowsize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const useWindowSize = ()=>{
    _s();
    const [windowSize, setWindowSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: undefined,
        height: undefined
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWindowSize.useEffect": ()=>{
            const handleResize = {
                "useWindowSize.useEffect.handleResize": ()=>{
                    setWindowSize({
                        width: window.innerWidth,
                        height: window.innerHeight
                    });
                }
            }["useWindowSize.useEffect.handleResize"];
            handleResize();
            window.addEventListener("resize", handleResize);
            return ({
                "useWindowSize.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["useWindowSize.useEffect"];
        }
    }["useWindowSize.useEffect"], []);
    return windowSize;
};
_s(useWindowSize, "WMqaMVAPr0u8CJVTsAIdEuYrbbM=");
const __TURBOPACK__default__export__ = useWindowSize;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/constants/motion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buttonVariant",
    ()=>buttonVariant,
    "buttonrightVariant",
    ()=>buttonrightVariant,
    "fadeIn",
    ()=>fadeIn,
    "footerVariants",
    ()=>footerVariants,
    "navVariants",
    ()=>navVariants,
    "planetVariants",
    ()=>planetVariants,
    "slideIn",
    ()=>slideIn,
    "staggerContainer",
    ()=>staggerContainer,
    "textContainer",
    ()=>textContainer,
    "textVariant",
    ()=>textVariant,
    "textVariant2",
    ()=>textVariant2,
    "zoomIn",
    ()=>zoomIn
]);
const navVariants = {
    hidden: {
        opacity: 0,
        y: -50,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 140
        }
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            delay: 0.05
        }
    }
};
const slideIn = (direction, type, delay, duration)=>({
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type,
                delay: delay * 0.1,
                duration: duration ? duration * 0.5 : 0.3,
                ease: "easeOut"
            }
        }
    });
const staggerContainer = (staggerChildren, delayChildren)=>({
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren ? staggerChildren * 0.5 : 0.05,
                delayChildren: delayChildren ? delayChildren * 0.1 : 0
            }
        }
    });
const textVariant = (delay)=>({
        hidden: {
            y: 50,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: delay * 0.1
            }
        }
    });
const buttonVariant = (delay)=>({
        hidden: {
            x: -50,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: delay * 0.1
            }
        }
    });
const buttonrightVariant = (delay)=>({
        hidden: {
            x: 50,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: delay * 0.1
            }
        }
    });
const textContainer = {
    hidden: {
        opacity: 0
    },
    show: (i = 1)=>({
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: i * 0.05
            }
        })
};
const textVariant2 = {
    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween",
            ease: "easeIn"
        }
    }
};
const fadeIn = (direction, type, delay, duration)=>({
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type,
                delay: delay * 0.1,
                duration: duration ? duration * 0.5 : 0.3,
                ease: "easeOut"
            }
        }
    });
const planetVariants = (direction)=>({
        hidden: {
            x: direction === "left" ? "-100%" : "100%",
            rotate: 120
        },
        show: {
            x: 0,
            rotate: 0,
            transition: {
                type: "spring",
                duration: 1.8,
                delay: 0.1
            }
        }
    });
const zoomIn = (delay, duration)=>({
        hidden: {
            scale: 0,
            opacity: 0
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween",
                delay: delay * 0.1,
                duration: duration ? duration * 0.5 : 0.3,
                ease: "easeOut"
            }
        }
    });
const footerVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 140
        }
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            delay: 0.1
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Banner.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Banner",
    ()=>Banner,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$components$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/components.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$windowsize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/windowsize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/motion.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const Banner = ({ title, urlDesktop, urlMobile, description, underline })=>{
    _s();
    const { width } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$windowsize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$components$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].banner} relative overflow-hidden`,
        variants: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
        initial: "hidden",
        whileInView: "show",
        viewport: {
            once: false,
            amount: 0.25
        },
        children: [
            width < 480 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "w-screen h-screen object-cover",
                src: urlMobile,
                alt: "model-y-image",
                fill: true,
                sizes: "100vw",
                priority: true
            }, void 0, false, {
                fileName: "[project]/components/Banner.js",
                lineNumber: 31,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "w-screen h-screen object-cover",
                src: urlDesktop,
                alt: "model-y-image",
                fill: true,
                sizes: "100vw",
                priority: true
            }, void 0, false, {
                fileName: "[project]/components/Banner.js",
                lineNumber: 40,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$components$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerdescription} absolute top-[20%] left-[50%]`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textVariant"])(1),
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$components$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerheading} text-3xl m-1 lg:text-4xl lg:my-[6px]`,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/Banner.js",
                        lineNumber: 52,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textVariant"])(1.4),
                        className: `${underline ? `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$components$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].demo}` : ""} text-xs lg:text-sm`,
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/components/Banner.js",
                        lineNumber: 58,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Banner.js",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$components$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerbutton} absolute top-[80%] left-[50%] flex flex-col md:flex-row`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariant"])(1.8),
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$components$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].herobutton1} my-2 mx-4 w-[240px] rounded-[5px] py-2 px-2 text-white lg:w-[340px]`,
                        children: "Custom Order"
                    }, void 0, false, {
                        fileName: "[project]/components/Banner.js",
                        lineNumber: 68,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonrightVariant"])(1.8),
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$components$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].herobutton2} my-2 mx-4 w-[240px] rounded-[5px] py-2 px-2 bg-white text-black lg:w-[340px]`,
                        children: "View Inventory"
                    }, void 0, false, {
                        fileName: "[project]/components/Banner.js",
                        lineNumber: 74,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Banner.js",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Banner.js",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Banner, "7ylMWtgt/PZegaW+VXObWeRbjaQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$windowsize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Banner;
const __TURBOPACK__default__export__ = Banner;
var _c;
__turbopack_context__.k.register(_c, "Banner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_e9e256df._.js.map