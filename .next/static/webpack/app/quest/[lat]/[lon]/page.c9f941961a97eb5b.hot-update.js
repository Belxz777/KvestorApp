"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/quest/[lat]/[lon]/page",{

/***/ "(app-pages-browser)/./src/app/quest/[lat]/[lon]/page.tsx":
/*!********************************************!*\
  !*** ./src/app/quest/[lat]/[lon]/page.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/.pnpm/axios@1.6.2/node_modules/axios/lib/axios.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/.pnpm/framer-motion@10.16.16_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.4_react-dom@18.2.0_react@18.2.0/node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_AiOutlineArrowLeft_react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=AiOutlineArrowLeft!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/.pnpm/react-icons@4.12.0_react@18.2.0/node_modules/react-icons/ai/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst itemVariants = {\n    open: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            type: \"spring\",\n            stiffness: 300,\n            damping: 24\n        }\n    },\n    closed: {\n        opacity: 0,\n        y: 20,\n        transition: {\n            duration: 0.2\n        }\n    }\n};\nfunction page(param) {\n    let { params } = param;\n    _s();\n    const [quizData, setQuizData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            \"id\": 0,\n            \"question\": \"\",\n            \"answer\": \"\",\n            \"variants\": [\n                \"\",\n                \"\",\n                \"\",\n                \"\"\n            ],\n            \"location\": \"\",\n            \"hardness\": \"\",\n            \"lat\": 0,\n            \"lon\": 0,\n            \"author\": \"\",\n            \"quizIn\": \"\",\n            \"categorie\": \"\"\n        }\n    ]);\n    //http://localhost:4000/Quests/46.147.176.2\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const query = \"https://4qf73x8p-4000.euw.devtunnels.ms/Quests/\".concat(params.lat, \"/\").concat(params.lon);\n            const responseQuiz = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(query);\n            setQuizData(responseQuiz.data);\n        })();\n    }, []);\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [userAnswers, setUserAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [showResult, setShowResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleAnswerClick = (selectedVariant)=>{\n        const isCorrect = selectedVariant === quizData[currentQuestion].answer;\n        setUserAnswers([\n            ...userAnswers,\n            {\n                question: quizData[currentQuestion].question,\n                answer: selectedVariant,\n                isCorrect\n            }\n        ]);\n        if (currentQuestion < quizData.length - 1) {\n            setCurrentQuestion(currentQuestion + 1);\n        } else {\n            setShowResult(true);\n        }\n    };\n    const calculateScore = ()=>{\n        const correctAnswers = userAnswers.filter((answer)=>answer.isCorrect).length;\n        if (correctAnswers == quizData.length) {\n            return \"Ты ответил правильно на \".concat(correctAnswers, \" из  \").concat(quizData.length, \" !\\n    Молодец!!!\");\n        } else {\n            return \" Ты ответил правильно на \".concat(correctAnswers, \" из  \").concat(quizData.length, \" !        \\n   В следующий раз точно получится!!! \");\n        }\n    };\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    if (quizData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: quizData[0] ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: showResult ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \" text-link-base text-center font-extrabold items-center text-2xl\",\n                            children: \"Результат квиза\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 5\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \" text-link-base text-center font-extrabold items-center text-2xl \",\n                            children: calculateScore()\n                        }, void 0, false, {\n                            fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \" bg-button-base hover:bg-hint-base text-button-base font-bold py-2 px-4 rounded-full text-xl flex\",\n                            onClick: ()=>router.push(\"/\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineArrowLeft_react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineArrowLeft, {}, void 0, false, {\n                                    fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 1\n                                }, this),\n                                \"Обратно на главную\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.nav, {\n                        initial: false,\n                        animate: isOpen ? \"open\" : \"closed\",\n                        className: \"w-full flex justify-center items-center\",\n                        children: [\n                            \"Категория вопроса: \",\n                            quizData[currentQuestion].categorie,\n                            \"Название Квиза: \",\n                            quizData[currentQuestion].quizIn,\n                            \"Автор: \",\n                            quizData[currentQuestion].author,\n                            \"Сложность вопроса: \",\n                            quizData[currentQuestion].hardness,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.button, {\n                                whileTap: {\n                                    scale: 0.97\n                                },\n                                onClick: ()=>setIsOpen(!isOpen),\n                                className: \" bg-button-base hover:bg-hint-base text-button-base font-bold py-2 px-4 rounded-full text-xl \",\n                                children: quizData[currentQuestion].question\n                            }, void 0, false, {\n                                fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.ul, {\n                                variants: {\n                                    open: {\n                                        clipPath: \"inset(0% 0% 0% 0% round 10px)\",\n                                        transition: {\n                                            type: \"spring\",\n                                            bounce: 0,\n                                            duration: 0.7,\n                                            delayChildren: 0.3,\n                                            staggerChildren: 0.05\n                                        }\n                                    },\n                                    closed: {\n                                        clipPath: \"inset(10% 50% 90% 50% round 10px)\",\n                                        transition: {\n                                            type: \"spring\",\n                                            bounce: 0,\n                                            duration: 0.3\n                                        }\n                                    }\n                                },\n                                style: {\n                                    pointerEvents: isOpen ? \"auto\" : \"none\"\n                                },\n                                children: quizData[currentQuestion].variants.map((variant, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                                        variants: itemVariants,\n                                        onClick: ()=>handleAnswerClick(variant),\n                                        className: \" bg-button-base  text-button-base font-bold py-2 px-14 rounded-full text-xl \",\n                                        children: [\n                                            index + 1,\n                                            \": \",\n                                            variant\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                                        lineNumber: 140,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" text-link-base text-center font-extrabold items-center text-2xl \",\n                        children: \"К сожалению произошла непредвиденная ошибка\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-button-base hover:bg-hint-base text-button-base font-bold py-2 px-4 rounded-full text-xl flex\",\n                        onClick: ()=>router.push(\"/\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineArrowLeft_react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineArrowLeft, {}, void 0, false, {\n                                fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                                lineNumber: 151,\n                                columnNumber: 1\n                            }, this),\n                            \"Обратно на главную\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                lineNumber: 148,\n                columnNumber: 7\n            }, this)\n        }, void 0, false);\n    } else {\n        return \"error\";\n    }\n}\n_s(page, \"fhVSTnxJ7QQ0kfzhamNZFHMicnc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcXVlc3QvW2xhdF0vW2xvbl0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDK0M7QUFDdEI7QUFFb0I7QUFDRjtBQUNRO0FBS25ELE1BQU1PLGVBQXlCO0lBQzdCQyxNQUFNO1FBQ0pDLFNBQVM7UUFDVEMsR0FBRztRQUNIQyxZQUFZO1lBQUVDLE1BQU07WUFBVUMsV0FBVztZQUFLQyxTQUFTO1FBQUc7SUFDNUQ7SUFDQUMsUUFBUTtRQUFFTixTQUFTO1FBQUdDLEdBQUc7UUFBSUMsWUFBWTtZQUFFSyxVQUFVO1FBQUk7SUFBRTtBQUM3RDtBQUNBLFNBQVNDLEtBQUssS0FBYztRQUFkLEVBQUNDLE1BQU0sRUFBTyxHQUFkOztJQWNWLE1BQU0sQ0FBQ0MsVUFBU0MsWUFBWSxHQUFHbEIsK0NBQVFBLENBQVc7UUFBQztZQUNqRCxNQUFLO1lBQ0wsWUFBVztZQUNYLFVBQVM7WUFDVCxZQUFXO2dCQUFDO2dCQUFJO2dCQUFHO2dCQUFHO2FBQUc7WUFDekIsWUFBWTtZQUNaLFlBQVc7WUFDWCxPQUFNO1lBQ04sT0FBTztZQUNQLFVBQVM7WUFDVCxVQUFVO1lBQ1YsYUFBWTtRQUNkO0tBQUU7SUFDRiwyQ0FBMkM7SUFDM0NELGdEQUFTQSxDQUFDO1FBQ2I7WUFDRyxNQUFNb0IsUUFBUSxrREFBZ0VILE9BQWRBLE9BQU9JLEdBQUcsRUFBQyxLQUFjLE9BQVhKLE9BQU9LLEdBQUc7WUFDeEYsTUFBTUMsZUFBZSxNQUFNckIsNkNBQUtBLENBQUNzQixHQUFHLENBQUNKO1lBQ3JDRCxZQUFZSSxhQUFhRSxJQUFJO1FBQ2hDO0lBQ0csR0FBRSxFQUFFO0lBQ0osTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHMUIsK0NBQVFBLENBQVM7SUFDbkUsTUFBTSxDQUFDMkIsYUFBYUMsZUFBZSxHQUFHNUIsK0NBQVFBLENBQTZELEVBQUU7SUFDN0csTUFBTSxDQUFDNkIsWUFBWUMsY0FBYyxHQUFHOUIsK0NB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QU87NENBQUU7NENBQUdEOzt1Q0FBdkpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQVFsRCw4REFBQzFCOztrQ0FDRCw4REFBQ0c7d0JBQUVELFdBQVU7a0NBQW9FOzs7Ozs7a0NBQ2pGLDhEQUFDRTt3QkFBT0YsV0FBVTt3QkFBb0dHLFNBQVMsSUFBS1IsT0FBT1MsSUFBSSxDQUFFOzswQ0FDdkosOERBQUM3Qyx3R0FBa0JBOzs7Ozs0QkFBSTs7Ozs7Ozs7Ozs7Ozs7SUFPckIsT0FDSTtRQUNGLE9BQU87SUFDVDtBQUNGO0dBOUlTVzs7UUE2REtaLHNEQUFTQTs7O0FBbUZ2QiwrREFBZVksSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3F1ZXN0L1tsYXRdL1tsb25dL3BhZ2UudHN4PzhiMWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7bW90aW9uLFZhcmlhbnRzfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXHJcbmltcG9ydCB7IEFpT3V0bGluZUFycm93TGVmdCB9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xyXG5pbnRlcmZhY2UgUHJvcHMgIHtcclxuICAgIHBhcmFtczp7bGF0Om51bWJlcixsb246bnVtYmVyfVxyXG59XHJcblxyXG5jb25zdCBpdGVtVmFyaWFudHM6IFZhcmlhbnRzID0ge1xyXG4gIG9wZW46IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB5OiAwLFxyXG4gICAgdHJhbnNpdGlvbjogeyB0eXBlOiBcInNwcmluZ1wiLCBzdGlmZm5lc3M6IDMwMCwgZGFtcGluZzogMjQgfVxyXG4gIH0sXHJcbiAgY2xvc2VkOiB7IG9wYWNpdHk6IDAsIHk6IDIwLCB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjIgfSB9XHJcbn07XHJcbmZ1bmN0aW9uIHBhZ2Uoe3BhcmFtc306UHJvcHMpIHtcclxuICB0eXBlIFF1aXpEYXRhID1bIHtcclxuICAgIGlkOm51bWJlcixcclxuICAgIHF1ZXN0aW9uOnN0cmluZyxcclxuICAgIGFuc3dlcjpzdHJpbmcsXHJcbiAgICB2YXJpYW50czpzdHJpbmdbXSxcclxuICAgIGxvY2F0aW9uOiBzdHJpbmcsXHJcbiAgICBoYXJkbmVzczpzdHJpbmcsXHJcbiAgICBsYXQ6bnVtYmVyLFxyXG4gICAgbG9uOiBudW1iZXIsXHJcbiAgICBhdXRob3I6c3RyaW5nLFxyXG4gICAgcXVpekluOiBzdHJpbmcsIFxyXG4gICAgY2F0ZWdvcmllOnN0cmluZ1xyXG4gIH1dXHJcbiAgICBjb25zdCBbcXVpekRhdGEsc2V0UXVpekRhdGFdID0gdXNlU3RhdGU8UXVpekRhdGE+KFt7XHJcbiAgICAgIFwiaWRcIjowLFxyXG4gICAgICBcInF1ZXN0aW9uXCI6XCJcIixcclxuICAgICAgXCJhbnN3ZXJcIjpcIlwiLFxyXG4gICAgICBcInZhcmlhbnRzXCI6W1wiXCIsIFwiXCIsXCJcIixcIlwiXSxcclxuICAgICAgXCJsb2NhdGlvblwiOiBcIlwiLFxyXG4gICAgICBcImhhcmRuZXNzXCI6XCJcIixcclxuICAgICAgXCJsYXRcIjowLFxyXG4gICAgICBcImxvblwiOiAwLFxyXG4gICAgICBcImF1dGhvclwiOlwiXCIsXHJcbiAgICAgIFwicXVpekluXCI6IFwiXCIsXHJcbiAgICAgIFwiY2F0ZWdvcmllXCI6XCJcIlxyXG4gICAgfV0pXHJcbiAgICAvL2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9RdWVzdHMvNDYuMTQ3LjE3Ni4yXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuKGFzeW5jICgpID0+e1xyXG4gICAgY29uc3QgcXVlcnkgPSBgaHR0cHM6Ly80cWY3M3g4cC00MDAwLmV1dy5kZXZ0dW5uZWxzLm1zL1F1ZXN0cy8ke3BhcmFtcy5sYXR9LyR7cGFyYW1zLmxvbn1gO1xyXG4gICAgY29uc3QgcmVzcG9uc2VRdWl6ID0gYXdhaXQgYXhpb3MuZ2V0KHF1ZXJ5KVxyXG4gICAgc2V0UXVpekRhdGEocmVzcG9uc2VRdWl6LmRhdGEpO1xyXG4gfSApKClcclxuICAgIH0sW10pXHJcbiAgICBjb25zdCBbY3VycmVudFF1ZXN0aW9uLCBzZXRDdXJyZW50UXVlc3Rpb25dID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuY29uc3QgW3VzZXJBbnN3ZXJzLCBzZXRVc2VyQW5zd2Vyc10gPSB1c2VTdGF0ZTx7IHF1ZXN0aW9uOiBzdHJpbmc7IGFuc3dlcjogc3RyaW5nOyBpc0NvcnJlY3Q6IGJvb2xlYW4gfVtdPihbXSk7XHJcbmNvbnN0IFtzaG93UmVzdWx0LCBzZXRTaG93UmVzdWx0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbmNvbnN0IGhhbmRsZUFuc3dlckNsaWNrID0gKHNlbGVjdGVkVmFyaWFudDogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgaXNDb3JyZWN0ID0gc2VsZWN0ZWRWYXJpYW50ID09PSBxdWl6RGF0YVtjdXJyZW50UXVlc3Rpb25dLmFuc3dlcjtcclxuICBzZXRVc2VyQW5zd2VycyhbLi4udXNlckFuc3dlcnMsIHsgcXVlc3Rpb246IHF1aXpEYXRhW2N1cnJlbnRRdWVzdGlvbl0ucXVlc3Rpb24sIGFuc3dlcjogc2VsZWN0ZWRWYXJpYW50LCBpc0NvcnJlY3QgfV0pO1xyXG4gIGlmIChjdXJyZW50UXVlc3Rpb24gPCBxdWl6RGF0YS5sZW5ndGggLSAxKSB7XHJcbiAgICBzZXRDdXJyZW50UXVlc3Rpb24oY3VycmVudFF1ZXN0aW9uICsgMSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNldFNob3dSZXN1bHQodHJ1ZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY2FsY3VsYXRlU2NvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29ycmVjdEFuc3dlcnMgPSB1c2VyQW5zd2Vycy5maWx0ZXIoKGFuc3dlcikgPT4gYW5zd2VyLmlzQ29ycmVjdCkubGVuZ3RoO1xyXG4gIGlmKGNvcnJlY3RBbnN3ZXJzID09IHF1aXpEYXRhLmxlbmd0aCl7XHJcbiAgICByZXR1cm4gYNCi0Ysg0L7RgtCy0LXRgtC40Lsg0L/RgNCw0LLQuNC70YzQvdC+INC90LAgJHtjb3JyZWN0QW5zd2Vyc30g0LjQtyAgJHtxdWl6RGF0YS5sZW5ndGh9ICFcclxuICAgINCc0L7Qu9C+0LTQtdGGISEhYFxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgcmV0dXJuIGAg0KLRiyDQvtGC0LLQtdGC0LjQuyDQv9GA0LDQstC40LvRjNC90L4g0L3QsCAke2NvcnJlY3RBbnN3ZXJzfSDQuNC3ICAke3F1aXpEYXRhLmxlbmd0aH0gISAgICAgICAgXHJcbiAgINCSINGB0LvQtdC00YPRjtGJ0LjQuSDRgNCw0Lcg0YLQvtGH0L3QviDQv9C+0LvRg9GH0LjRgtGB0Y8hISEgYFxyXG4gIH1cclxuXHJcbn07XHJcbmNvbnN0IHJvdXRlcj0gdXNlUm91dGVyKClcclxuY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuaWYocXVpekRhdGEpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAge1xyXG4gICAgICAgIHF1aXpEYXRhWzBdICA/XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3Nob3dSZXN1bHQgPyBcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICA8aDEgIGNsYXNzTmFtZT0nIHRleHQtbGluay1iYXNlIHRleHQtY2VudGVyIGZvbnQtZXh0cmFib2xkIGl0ZW1zLWNlbnRlciB0ZXh0LTJ4bCc+0KDQtdC30YPQu9GM0YLQsNGCINC60LLQuNC30LA8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9JyB0ZXh0LWxpbmstYmFzZSB0ZXh0LWNlbnRlciBmb250LWV4dHJhYm9sZCBpdGVtcy1jZW50ZXIgdGV4dC0yeGwgJz57Y2FsY3VsYXRlU2NvcmUoKX08L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIGJnLWJ1dHRvbi1iYXNlIGhvdmVyOmJnLWhpbnQtYmFzZSB0ZXh0LWJ1dHRvbi1iYXNlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsIHRleHQteGwgZmxleFwiIG9uQ2xpY2s9eygpPT4gcm91dGVyLnB1c2goYC9gKX0+XHJcbjxBaU91dGxpbmVBcnJvd0xlZnQgIC8+XHJcbtCe0LHRgNCw0YLQvdC+INC90LAg0LPQu9Cw0LLQvdGD0Y5cclxuPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDogXHJcbiAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24ubmF2XHJcbiAgICAgIGluaXRpYWw9e2ZhbHNlfVxyXG4gICAgICBhbmltYXRlPXtpc09wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XHJcbiAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgICA+XHJcbiAgICAgINCa0LDRgtC10LPQvtGA0LjRjyDQstC+0L/RgNC+0YHQsDoge3F1aXpEYXRhW2N1cnJlbnRRdWVzdGlvbl0uY2F0ZWdvcmllfVxyXG7QndCw0LfQstCw0L3QuNC1INCa0LLQuNC30LA6IHtxdWl6RGF0YVtjdXJyZW50UXVlc3Rpb25dLnF1aXpJbn1cclxu0JDQstGC0L7RgDoge3F1aXpEYXRhW2N1cnJlbnRRdWVzdGlvbl0uYXV0aG9yfVxyXG7QodC70L7QttC90L7RgdGC0Ywg0LLQvtC/0YDQvtGB0LA6IHtxdWl6RGF0YVtjdXJyZW50UXVlc3Rpb25dLmhhcmRuZXNzfVxyXG4gICAgICA8bW90aW9uLmJ1dHRvblxyXG4gICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk3IH19XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfVxyXG4gICAgICAgIGNsYXNzTmFtZT0nIGJnLWJ1dHRvbi1iYXNlIGhvdmVyOmJnLWhpbnQtYmFzZSB0ZXh0LWJ1dHRvbi1iYXNlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsIHRleHQteGwgJ1xyXG4gICAgICA+XHJcbntxdWl6RGF0YVtjdXJyZW50UXVlc3Rpb25dLnF1ZXN0aW9ufVxyXG4gICAgICA8L21vdGlvbi5idXR0b24+XHJcbiAgICAgIDxtb3Rpb24udWxcclxuICAgICAgICB2YXJpYW50cz17e1xyXG4gICAgICAgICAgb3Blbjoge1xyXG4gICAgICAgICAgICBjbGlwUGF0aDogXCJpbnNldCgwJSAwJSAwJSAwJSByb3VuZCAxMHB4KVwiLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcclxuICAgICAgICAgICAgICBib3VuY2U6IDAsXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDAuNyxcclxuICAgICAgICAgICAgICBkZWxheUNoaWxkcmVuOiAwLjMsXHJcbiAgICAgICAgICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjA1XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjbG9zZWQ6IHtcclxuICAgICAgICAgICAgY2xpcFBhdGg6IFwiaW5zZXQoMTAlIDUwJSA5MCUgNTAlIHJvdW5kIDEwcHgpXCIsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICB0eXBlOiBcInNwcmluZ1wiLFxyXG4gICAgICAgICAgICAgIGJvdW5jZTogMCxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMC4zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICAgIHN0eWxlPXt7IHBvaW50ZXJFdmVudHM6IGlzT3BlbiA/IFwiYXV0b1wiIDogXCJub25lXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgICAgICB7cXVpekRhdGFbY3VycmVudFF1ZXN0aW9uXS52YXJpYW50cy5tYXAoKHZhcmlhbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLmxpIHZhcmlhbnRzPXtpdGVtVmFyaWFudHN9IGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUFuc3dlckNsaWNrKHZhcmlhbnQpfWNsYXNzTmFtZT0nIGJnLWJ1dHRvbi1iYXNlICB0ZXh0LWJ1dHRvbi1iYXNlIGZvbnQtYm9sZCBweS0yIHB4LTE0IHJvdW5kZWQtZnVsbCB0ZXh0LXhsICc+e2luZGV4ICsxfToge3ZhcmlhbnR9PC9tb3Rpb24ubGk+XHJcbiAgICAgICAgICAgICApKX1cclxuICAgICAgPC9tb3Rpb24udWw+XHJcbiAgICA8L21vdGlvbi5uYXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxufVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgOlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9JyB0ZXh0LWxpbmstYmFzZSB0ZXh0LWNlbnRlciBmb250LWV4dHJhYm9sZCBpdGVtcy1jZW50ZXIgdGV4dC0yeGwgJz7QmiDRgdC+0LbQsNC70LXQvdC40Y4g0L/RgNC+0LjQt9C+0YjQu9CwINC90LXQv9GA0LXQtNCy0LjQtNC10L3QvdCw0Y8g0L7RiNC40LHQutCwPC9wPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBiZy1idXR0b24tYmFzZSBob3ZlcjpiZy1oaW50LWJhc2UgdGV4dC1idXR0b24tYmFzZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbCB0ZXh0LXhsIGZsZXhcIiBvbkNsaWNrPXsoKT0+IHJvdXRlci5wdXNoKGAvYCl9PlxyXG48QWlPdXRsaW5lQXJyb3dMZWZ0ICAvPlxyXG7QntCx0YDQsNGC0L3QviDQvdCwINCz0LvQsNCy0L3Rg9GOXHJcbjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbn1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgcmV0dXJuICdlcnJvcidcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwibW90aW9uIiwidXNlUm91dGVyIiwiQWlPdXRsaW5lQXJyb3dMZWZ0IiwiaXRlbVZhcmlhbnRzIiwib3BlbiIsIm9wYWNpdHkiLCJ5IiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiY2xvc2VkIiwiZHVyYXRpb24iLCJwYWdlIiwicGFyYW1zIiwicXVpekRhdGEiLCJzZXRRdWl6RGF0YSIsInF1ZXJ5IiwibGF0IiwibG9uIiwicmVzcG9uc2VRdWl6IiwiZ2V0IiwiZGF0YSIsImN1cnJlbnRRdWVzdGlvbiIsInNldEN1cnJlbnRRdWVzdGlvbiIsInVzZXJBbnN3ZXJzIiwic2V0VXNlckFuc3dlcnMiLCJzaG93UmVzdWx0Iiwic2V0U2hvd1Jlc3VsdCIsImhhbmRsZUFuc3dlckNsaWNrIiwic2VsZWN0ZWRWYXJpYW50IiwiaXNDb3JyZWN0IiwiYW5zd2VyIiwicXVlc3Rpb24iLCJsZW5ndGgiLCJjYWxjdWxhdGVTY29yZSIsImNvcnJlY3RBbnN3ZXJzIiwiZmlsdGVyIiwicm91dGVyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJwIiwiYnV0dG9uIiwib25DbGljayIsInB1c2giLCJuYXYiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImNhdGVnb3JpZSIsInF1aXpJbiIsImF1dGhvciIsImhhcmRuZXNzIiwid2hpbGVUYXAiLCJzY2FsZSIsInVsIiwidmFyaWFudHMiLCJjbGlwUGF0aCIsImJvdW5jZSIsImRlbGF5Q2hpbGRyZW4iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJtYXAiLCJ2YXJpYW50IiwiaW5kZXgiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/quest/[lat]/[lon]/page.tsx\n"));

/***/ })

});