module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/constants/data.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bannerinfos",
    ()=>Bannerinfos,
    "ModelS1_Specs",
    ()=>ModelS1_Specs,
    "ModelS2_Specs",
    ()=>ModelS2_Specs,
    "ModelSPlaid1_Specs",
    ()=>ModelSPlaid1_Specs,
    "ModelSPlaid2_Specs",
    ()=>ModelSPlaid2_Specs,
    "Roof1_Specs",
    ()=>Roof1_Specs,
    "Roof2_Specs",
    ()=>Roof2_Specs
]);
const Bannerinfos = [
    {
        id: "1",
        title: "Model Y",
        urlDesktop: "/home/model-y.jpg",
        urlMobile: "/home/model-y-mobile.jpg",
        description: "Schedule a Demo Drive",
        underline: true
    },
    {
        id: "2",
        title: "Model 3",
        urlDesktop: "/home/model-3.jpg",
        urlMobile: "/home/model-3-mobile.jpg",
        description: "Schedule a Demo Drive",
        underline: true
    },
    {
        id: "3",
        title: "Model S",
        urlDesktop: "/home/model-s.jpg",
        urlMobile: "/home/model-s-mobile.jpg",
        description: "Schedule a Demo Drive",
        underline: true
    },
    {
        id: "4",
        title: "Model X",
        urlDesktop: "/home/model-x.jpg",
        urlMobile: "/home/model-x-mobile.jpg",
        description: "Schedule a Demo Drive",
        underline: true
    },
    {
        id: "5",
        title: "Solar Planes",
        urlDesktop: "/home/solarpanels.jpg",
        urlMobile: "/home/solarpanels-mobile.jpg",
        description: "Lowest Cost Solar Panels in America",
        underline: false
    },
    {
        id: "6",
        title: "Solar Roof",
        urlDesktop: "/home/solarroof.jpg",
        urlMobile: "/home/solarroof-mobile.jpg",
        description: "Produce Clean Energy From Your Roof",
        underline: false
    },
    {
        id: "7",
        title: "Accessories",
        urlDesktop: "/home/accessories.jpg",
        urlMobile: "/home/accessories-mobile.jpg",
        description: "",
        underline: false
    }
];
const ModelSPlaid1_Specs = [
    {
        id: "1",
        heading: "Range (EPA est.)",
        description: "396 mi"
    },
    {
        id: "2",
        heading: "1/4 Mile 9.23@155",
        description: "mph trap speed"
    },
    {
        id: "3",
        heading: "Peak Power",
        description: "1,020 hp"
    },
    {
        id: "4",
        heading: "Wheels",
        description: "19'' or 21''"
    },
    {
        id: "5",
        heading: "Cargo",
        description: "28 cu ft"
    },
    {
        id: "6",
        heading: "Weight",
        description: "4,766 lbs"
    }
];
const ModelSPlaid2_Specs = [
    {
        id: "1",
        heading: "*Acceleration",
        description: "1.99 s 0-60 mph with rollout subtracted"
    },
    {
        id: "2",
        heading: "†Top Speed",
        description: "200 mph when equipped with paid hardware upgrades"
    },
    {
        id: "3",
        heading: "Drag Coefficient",
        description: "0.208 Cd"
    },
    {
        id: "4",
        heading: "Powertrain",
        description: "Tri Motor"
    },
    {
        id: "5",
        heading: "Supercharging Max",
        description: "250 kW"
    }
];
const ModelS1_Specs = [
    {
        id: "1",
        heading: "Range (EPA est.)",
        description: "405 mi"
    },
    {
        id: "3",
        heading: "Peak Power",
        description: "670 hp"
    },
    {
        id: "4",
        heading: "Wheels",
        description: "19'' or 21''"
    },
    {
        id: "5",
        heading: "Cargo",
        description: "28 cu ft"
    },
    {
        id: "6",
        heading: "Acceleration",
        description: "3.1 s 0-60 mph"
    }
];
const ModelS2_Specs = [
    {
        id: "2",
        heading: "†Top Speed",
        description: "149 mph"
    },
    {
        id: "3",
        heading: "Drag Coefficient",
        description: "0.208 Cd"
    },
    {
        id: "1",
        heading: "*Weight",
        description: "4,561 lbs"
    },
    {
        id: "4",
        heading: "Powertrain",
        description: "Dual Motor"
    },
    {
        id: "5",
        heading: "Supercharging Max",
        description: "250 kW"
    }
];
const Roof1_Specs = [
    {
        id: "3",
        heading: "Solar Glass Tiles",
        description: "72 W"
    },
    {
        id: "4",
        heading: "Steel Tiles",
        description: "Corrosion and weather resistant"
    },
    {
        id: "5",
        heading: "Wind Rating",
        description: "Class F (highest rating)"
    }
];
const Roof2_Specs = [
    {
        id: "2",
        heading: "Fire Rating",
        description: "Class A (highest rating)"
    },
    {
        id: "3",
        heading: "Hail Rating",
        description: "Class 3"
    },
    {
        id: "1",
        heading: "*Roof Pitch",
        description: "≥ 2:12"
    }
];
}),
"[project]/components/Banner.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Banner",
    ()=>Banner,
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Banner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Banner() from the server but Banner is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/Banner.js <module evaluation>", "Banner");
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/Banner.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/Banner.js <module evaluation>", "default");
}),
"[project]/components/Banner.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Banner",
    ()=>Banner,
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Banner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Banner() from the server but Banner is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/Banner.js", "Banner");
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/Banner.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/Banner.js", "default");
}),
"[project]/components/Banner.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Banner$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/Banner.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Banner$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/Banner.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Banner$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/styles/components.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "banner": "components-module__8llB-a__banner",
  "bannerbutton": "components-module__8llB-a__bannerbutton",
  "bannerdescription": "components-module__8llB-a__bannerdescription",
  "bannerheading": "components-module__8llB-a__bannerheading",
  "bannerpagedescription": "components-module__8llB-a__bannerpagedescription",
  "close": "components-module__8llB-a__close",
  "demo": "components-module__8llB-a__demo",
  "font": "components-module__8llB-a__font",
  "hero": "components-module__8llB-a__hero",
  "herobutton1": "components-module__8llB-a__herobutton1",
  "herobutton2": "components-module__8llB-a__herobutton2",
  "list": "components-module__8llB-a__list",
  "menu": "components-module__8llB-a__menu",
  "ordernow": "components-module__8llB-a__ordernow",
  "sidemenu": "components-module__8llB-a__sidemenu",
});
}),
"[project]/components/Hero.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbarbanner$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbarbanner.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Banner$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Banner.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$components$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/components.module.css [app-rsc] (css module)");
;
;
;
;
;
const Hero = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbarbanner$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                fixed: true,
                white: "false"
            }, void 0, false, {
                fileName: "[project]/components/Hero.js",
                lineNumber: 9,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$components$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].hero}`,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Bannerinfos"].map((Bannerinfo)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Banner$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        title: Bannerinfo.title,
                        id: Bannerinfo.id,
                        urlDesktop: Bannerinfo.urlDesktop,
                        urlMobile: Bannerinfo.urlMobile,
                        description: Bannerinfo.description,
                        underline: Bannerinfo.underline
                    }, Bannerinfo.id, false, {
                        fileName: "[project]/components/Hero.js",
                        lineNumber: 13,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/components/Hero.js",
                lineNumber: 10,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.js",
        lineNumber: 8,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Hero;
}),
"[project]/app/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Hero.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    title: "Electric Cars, Solar & Clean Energy | Tesla",
    description: "Generated by create next app"
};
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/page.js",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1914ed5d._.js.map