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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/.pnpm/axios@1.6.2/node_modules/axios/lib/axios.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/.pnpm/framer-motion@10.16.16_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.4_react-dom@18.2.0_react@18.2.0/node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_AiOutlineArrowLeft_react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=AiOutlineArrowLeft!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/.pnpm/react-icons@4.12.0_react@18.2.0/node_modules/react-icons/ai/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst itemVariants = {\n    open: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            type: \"spring\",\n            stiffness: 300,\n            damping: 24\n        }\n    },\n    closed: {\n        opacity: 0,\n        y: 20,\n        transition: {\n            duration: 0.2\n        }\n    }\n};\nfunction page(param) {\n    let { params } = param;\n    _s();\n    const [quizData, setQuizData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            \"id\": 0,\n            \"question\": \"\",\n            \"answer\": \"\",\n            \"variants\": [\n                \"\",\n                \"\",\n                \"\",\n                \"\"\n            ],\n            \"location\": \"\",\n            \"hardness\": \"\",\n            \"lat\": 0,\n            \"lon\": 0,\n            \"author\": \"\",\n            \"quizIn\": \"\",\n            \"categorie\": \"\"\n        }\n    ]);\n    //http://localhost:4000/Quests/46.147.176.2\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const query = \"https://4qf73x8p-4000.euw.devtunnels.ms/Quests/\".concat(params.lat, \"/\").concat(params.lon);\n            const responseQuiz = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(query);\n            setQuizData(responseQuiz.data);\n        })();\n    }, []);\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [userAnswers, setUserAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [showResult, setShowResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleAnswerClick = (selectedVariant)=>{\n        const isCorrect = selectedVariant === quizData[currentQuestion].answer;\n        setUserAnswers([\n            ...userAnswers,\n            {\n                question: quizData[currentQuestion].question,\n                answer: selectedVariant,\n                isCorrect\n            }\n        ]);\n        if (currentQuestion < quizData.length - 1) {\n            setCurrentQuestion(currentQuestion + 1);\n        } else {\n            setShowResult(true);\n        }\n    };\n    const calculateScore = ()=>{\n        const correctAnswers = userAnswers.filter((answer)=>answer.isCorrect).length;\n        if (correctAnswers == quizData.length) {\n            return \"Ты ответил правильно на \".concat(correctAnswers, \" из  \").concat(quizData.length, \" !\\n    Молодец!!!\");\n        } else {\n            return \" Ты ответил правильно на \".concat(correctAnswers, \" из  \").concat(quizData.length, \" !        \\n   В следующий раз точно получится!!! \");\n        }\n    };\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    if (quizData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: quizData[0] ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: showResult ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \" text-link-base text-center font-extrabold items-center text-2xl\",\n                            children: \"Результат квиза\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 5\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \" text-link-base text-center font-extrabold items-center text-2xl \",\n                            children: calculateScore()\n                        }, void 0, false, {\n                            fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \" bg-button-base hover:bg-hint-base text-button-base font-bold py-2 px-4 rounded-full text-xl flex\",\n                            onClick: ()=>router.push(\"/\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineArrowLeft_react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineArrowLeft, {}, void 0, false, {\n                                    fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 1\n                                }, this),\n                                \"Обратно на главную\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.nav, {\n                        initial: false,\n                        animate: isOpen ? \"open\" : \"closed\",\n                        className: \"w-full flex justify-center items-center  flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" text-link-base text-center font-extrabold items-center text-2xl  flex-col\",\n                                children: [\n                                    \"Название Квиза: \",\n                                    quizData[currentQuestion].quizIn\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 8\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" text-link-base text-center font-extrabold items-center text-2xl flex-c \",\n                                children: [\n                                    \"Автор: \",\n                                    quizData[currentQuestion].author\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 8\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.button, {\n                                whileTap: {\n                                    scale: 0.97\n                                },\n                                onClick: ()=>setIsOpen(!isOpen),\n                                className: \" bg-button-base hover:bg-hint-base text-button-base font-bold py-2 px-4 rounded-full text-xl \",\n                                children: quizData[currentQuestion].question\n                            }, void 0, false, {\n                                fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.ul, {\n                                variants: {\n                                    open: {\n                                        clipPath: \"inset(0% 0% 0% 0% round 10px)\",\n                                        transition: {\n                                            type: \"spring\",\n                                            bounce: 0,\n                                            duration: 0.7,\n                                            delayChildren: 0.3,\n                                            staggerChildren: 0.05\n                                        }\n                                    },\n                                    closed: {\n                                        clipPath: \"inset(10% 50% 90% 50% round 10px)\",\n                                        transition: {\n                                            type: \"spring\",\n                                            bounce: 0,\n                                            duration: 0.3\n                                        }\n                                    }\n                                },\n                                style: {\n                                    pointerEvents: isOpen ? \"auto\" : \"none\"\n                                },\n                                children: [\n                                    quizData[currentQuestion].variants.map((variant, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                                                variants: itemVariants,\n                                                onClick: ()=>handleAnswerClick(variant),\n                                                className: \" bg-button-base  text-button-base font-bold py-2 px-14 rounded-full text-xl \",\n                                                children: [\n                                                    index + 1,\n                                                    \": \",\n                                                    variant\n                                                ]\n                                            }, index, true, {\n                                                fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                                                lineNumber: 139,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false)),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \" text-link-base  text-left font-extrabold items-center text-xl \",\n                                        children: [\n                                            \"Сложность вопроса: \",\n                                            quizData[currentQuestion].hardness\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                                        lineNumber: 142,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \" text-link-base text-left font-extrabold  text-xl \",\n                                        children: [\n                                            \"Категория вопроса: \",\n                                            quizData[currentQuestion].categorie\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                                        lineNumber: 143,\n                                        columnNumber: 16\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" text-link-base text-center font-extrabold items-center text-2xl \",\n                        children: \"К сожалению произошла непредвиденная ошибка\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                        lineNumber: 151,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-button-base hover:bg-hint-base text-button-base font-bold py-2 px-4 rounded-full text-xl flex\",\n                        onClick: ()=>router.push(\"/\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineArrowLeft_react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineArrowLeft, {}, void 0, false, {\n                                fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                                lineNumber: 153,\n                                columnNumber: 1\n                            }, this),\n                            \"Обратно на главную\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                        lineNumber: 152,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\code\\\\MiniApp\\\\miniapp\\\\src\\\\app\\\\quest\\\\[lat]\\\\[lon]\\\\page.tsx\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, this)\n        }, void 0, false);\n    } else {\n        return \"error\";\n    }\n}\n_s(page, \"fhVSTnxJ7QQ0kfzhamNZFHMicnc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcXVlc3QvW2xhdF0vW2xvbl0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDK0M7QUFDdEI7QUFFb0I7QUFDRjtBQUNRO0FBS25ELE1BQU1PLGVBQXlCO0lBQzdCQyxNQUFNO1FBQ0pDLFNBQVM7UUFDVEMsR0FBRztRQUNIQyxZQUFZO1lBQUVDLE1BQU07WUFBVUMsV0FBVztZQUFLQyxTQUFTO1FBQUc7SUFDNUQ7SUFDQUMsUUFBUTtRQUFFTixTQUFTO1FBQUdDLEdBQUc7UUFBSUMsWUFBWTtZQUFFSyxVQUFVO1FBQUk7SUFBRTtBQUM3RDtBQUNBLFNBQVNDLEtBQUssS0FBYztRQUFkLEVBQUNDLE1BQU0sRUFBTyxHQUFkOztJQWNWLE1BQU0sQ0FBQ0MsVUFBU0MsWUFBWSxHQUFHbEIsK0NBQVFBLENBQVc7UUFBQztZQUNqRCxNQUFLO1lBQ0wsWUFBVztZQUNYLFVBQVM7WUFDVCxZQUFXO2dCQUFDO2dCQUFJO2dCQUFHO2dCQUFHO2FBQUc7WUFDekIsWUFBWTtZQUNaLFlBQVc7WUFDWCxPQUFNO1lBQ04sT0FBTztZQUNQLFVBQVM7WUFDVCxVQUFVO1lBQ1YsYUFBWTtRQUNkO0tBQUU7SUFDRiwyQ0FBMkM7SUFDM0NELGdEQUFTQSxDQUFDO1FBQ2I7WUFDRyxNQUFNb0IsUUFBUSxrREFBZ0VILE9BQWRBLE9BQU9JLEdBQUcsRUFBQyxLQUFjLE9BQVhKLE9BQU9LLEdBQUc7WUFDeEYsTUFBTUMsZUFBZSxNQUFNckIsNkNBQUtBLENBQUNzQixHQUFHLENBQUNKO1lBQ3JDRCxZQUFZSSxhQUFhRSxJQUFJO1FBQ2hDO0lBQ0csR0FBRSxFQUFFO0lBQ0osTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHMUIsK0NBQVFBLENBQVM7SUFDbkUsTUFBTSxDQUFDMkIsYUFBYUMsZUFBZSxHQUFHNUIsK0NBQVFBLENBQTZELEVBQUU7SUFDN0csTUFBTSxDQUFDNkIsWUFBWUMsY0FBYyxHQUFHOUIsK0NB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K0NBQXZKQzs7Ozs7O2tEQUd6Qyw4REFBQ3JCO3dDQUFFRCxXQUFVOzs0Q0FBa0U7NENBQW9CNUIsUUFBUSxDQUFDUSxnQkFBZ0IsQ0FBQzRDLFFBQVE7Ozs7Ozs7a0RBQ3JJLDhEQUFDdkI7d0NBQUVELFdBQVU7OzRDQUFxRDs0Q0FBb0I1QixRQUFRLENBQUNRLGdCQUFnQixDQUFDNkMsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FPbEksOERBQUMzQjs7a0NBQ0QsOERBQUNHO3dCQUFFRCxXQUFVO2tDQUFvRTs7Ozs7O2tDQUNqRiw4REFBQ0U7d0JBQU9GLFdBQVU7d0JBQW9HRyxTQUFTLElBQUtSLE9BQU9TLElBQUksQ0FBRTs7MENBQ3ZKLDhEQUFDN0Msd0dBQWtCQTs7Ozs7NEJBQUk7Ozs7Ozs7Ozs7Ozs7O0lBT3JCLE9BQ0k7UUFDRixPQUFPO0lBQ1Q7QUFDRjtHQWhKU1c7O1FBNkRLWixzREFBU0E7OztBQXFGdkIsK0RBQWVZLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9xdWVzdC9bbGF0XS9bbG9uXS9wYWdlLnRzeD84YjFiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge21vdGlvbixWYXJpYW50c30gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgeyBBaU91dGxpbmVBcnJvd0xlZnQgfSBmcm9tICdyZWFjdC1pY29ucy9haSdcclxuaW50ZXJmYWNlIFByb3BzICB7XHJcbiAgICBwYXJhbXM6e2xhdDpudW1iZXIsbG9uOm51bWJlcn1cclxufVxyXG5cclxuY29uc3QgaXRlbVZhcmlhbnRzOiBWYXJpYW50cyA9IHtcclxuICBvcGVuOiB7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgeTogMCxcclxuICAgIHRyYW5zaXRpb246IHsgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiAzMDAsIGRhbXBpbmc6IDI0IH1cclxuICB9LFxyXG4gIGNsb3NlZDogeyBvcGFjaXR5OiAwLCB5OiAyMCwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC4yIH0gfVxyXG59O1xyXG5mdW5jdGlvbiBwYWdlKHtwYXJhbXN9OlByb3BzKSB7XHJcbiAgdHlwZSBRdWl6RGF0YSA9WyB7XHJcbiAgICBpZDpudW1iZXIsXHJcbiAgICBxdWVzdGlvbjpzdHJpbmcsXHJcbiAgICBhbnN3ZXI6c3RyaW5nLFxyXG4gICAgdmFyaWFudHM6c3RyaW5nW10sXHJcbiAgICBsb2NhdGlvbjogc3RyaW5nLFxyXG4gICAgaGFyZG5lc3M6c3RyaW5nLFxyXG4gICAgbGF0Om51bWJlcixcclxuICAgIGxvbjogbnVtYmVyLFxyXG4gICAgYXV0aG9yOnN0cmluZyxcclxuICAgIHF1aXpJbjogc3RyaW5nLCBcclxuICAgIGNhdGVnb3JpZTpzdHJpbmdcclxuICB9XVxyXG4gICAgY29uc3QgW3F1aXpEYXRhLHNldFF1aXpEYXRhXSA9IHVzZVN0YXRlPFF1aXpEYXRhPihbe1xyXG4gICAgICBcImlkXCI6MCxcclxuICAgICAgXCJxdWVzdGlvblwiOlwiXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6XCJcIixcclxuICAgICAgXCJ2YXJpYW50c1wiOltcIlwiLCBcIlwiLFwiXCIsXCJcIl0sXHJcbiAgICAgIFwibG9jYXRpb25cIjogXCJcIixcclxuICAgICAgXCJoYXJkbmVzc1wiOlwiXCIsXHJcbiAgICAgIFwibGF0XCI6MCxcclxuICAgICAgXCJsb25cIjogMCxcclxuICAgICAgXCJhdXRob3JcIjpcIlwiLFxyXG4gICAgICBcInF1aXpJblwiOiBcIlwiLFxyXG4gICAgICBcImNhdGVnb3JpZVwiOlwiXCJcclxuICAgIH1dKVxyXG4gICAgLy9odHRwOi8vbG9jYWxob3N0OjQwMDAvUXVlc3RzLzQ2LjE0Ny4xNzYuMlxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbihhc3luYyAoKSA9PntcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYGh0dHBzOi8vNHFmNzN4OHAtNDAwMC5ldXcuZGV2dHVubmVscy5tcy9RdWVzdHMvJHtwYXJhbXMubGF0fS8ke3BhcmFtcy5sb259YDtcclxuICAgIGNvbnN0IHJlc3BvbnNlUXVpeiA9IGF3YWl0IGF4aW9zLmdldChxdWVyeSlcclxuICAgIHNldFF1aXpEYXRhKHJlc3BvbnNlUXVpei5kYXRhKTtcclxuIH0gKSgpXHJcbiAgICB9LFtdKVxyXG4gICAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Q3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbmNvbnN0IFt1c2VyQW5zd2Vycywgc2V0VXNlckFuc3dlcnNdID0gdXNlU3RhdGU8eyBxdWVzdGlvbjogc3RyaW5nOyBhbnN3ZXI6IHN0cmluZzsgaXNDb3JyZWN0OiBib29sZWFuIH1bXT4oW10pO1xyXG5jb25zdCBbc2hvd1Jlc3VsdCwgc2V0U2hvd1Jlc3VsdF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG5jb25zdCBoYW5kbGVBbnN3ZXJDbGljayA9IChzZWxlY3RlZFZhcmlhbnQ6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGlzQ29ycmVjdCA9IHNlbGVjdGVkVmFyaWFudCA9PT0gcXVpekRhdGFbY3VycmVudFF1ZXN0aW9uXS5hbnN3ZXI7XHJcbiAgc2V0VXNlckFuc3dlcnMoWy4uLnVzZXJBbnN3ZXJzLCB7IHF1ZXN0aW9uOiBxdWl6RGF0YVtjdXJyZW50UXVlc3Rpb25dLnF1ZXN0aW9uLCBhbnN3ZXI6IHNlbGVjdGVkVmFyaWFudCwgaXNDb3JyZWN0IH1dKTtcclxuICBpZiAoY3VycmVudFF1ZXN0aW9uIDwgcXVpekRhdGEubGVuZ3RoIC0gMSkge1xyXG4gICAgc2V0Q3VycmVudFF1ZXN0aW9uKGN1cnJlbnRRdWVzdGlvbiArIDEpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXRTaG93UmVzdWx0KHRydWUpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNhbGN1bGF0ZVNjb3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvcnJlY3RBbnN3ZXJzID0gdXNlckFuc3dlcnMuZmlsdGVyKChhbnN3ZXIpID0+IGFuc3dlci5pc0NvcnJlY3QpLmxlbmd0aDtcclxuICBpZihjb3JyZWN0QW5zd2VycyA9PSBxdWl6RGF0YS5sZW5ndGgpe1xyXG4gICAgcmV0dXJuIGDQotGLINC+0YLQstC10YLQuNC7INC/0YDQsNCy0LjQu9GM0L3QviDQvdCwICR7Y29ycmVjdEFuc3dlcnN9INC40LcgICR7cXVpekRhdGEubGVuZ3RofSAhXHJcbiAgICDQnNC+0LvQvtC00LXRhiEhIWBcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIHJldHVybiBgINCi0Ysg0L7RgtCy0LXRgtC40Lsg0L/RgNCw0LLQuNC70YzQvdC+INC90LAgJHtjb3JyZWN0QW5zd2Vyc30g0LjQtyAgJHtxdWl6RGF0YS5sZW5ndGh9ICEgICAgICAgIFxyXG4gICDQkiDRgdC70LXQtNGD0Y7RidC40Lkg0YDQsNC3INGC0L7Rh9C90L4g0L/QvtC70YPRh9C40YLRgdGPISEhIGBcclxuICB9XHJcblxyXG59O1xyXG5jb25zdCByb3V0ZXI9IHVzZVJvdXRlcigpXHJcbmNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbmlmKHF1aXpEYXRhKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIHtcclxuICAgICAgICBxdWl6RGF0YVswXSAgP1xyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtzaG93UmVzdWx0ID8gXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgPGgxICBjbGFzc05hbWU9JyB0ZXh0LWxpbmstYmFzZSB0ZXh0LWNlbnRlciBmb250LWV4dHJhYm9sZCBpdGVtcy1jZW50ZXIgdGV4dC0yeGwnPtCg0LXQt9GD0LvRjNGC0LDRgiDQutCy0LjQt9CwPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPScgdGV4dC1saW5rLWJhc2UgdGV4dC1jZW50ZXIgZm9udC1leHRyYWJvbGQgaXRlbXMtY2VudGVyIHRleHQtMnhsICc+e2NhbGN1bGF0ZVNjb3JlKCl9PC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBiZy1idXR0b24tYmFzZSBob3ZlcjpiZy1oaW50LWJhc2UgdGV4dC1idXR0b24tYmFzZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbCB0ZXh0LXhsIGZsZXhcIiBvbkNsaWNrPXsoKT0+IHJvdXRlci5wdXNoKGAvYCl9PlxyXG48QWlPdXRsaW5lQXJyb3dMZWZ0ICAvPlxyXG7QntCx0YDQsNGC0L3QviDQvdCwINCz0LvQsNCy0L3Rg9GOXHJcbjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA6IFxyXG4gICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLm5hdlxyXG4gICAgICBpbml0aWFsPXtmYWxzZX1cclxuICAgICAgYW5pbWF0ZT17aXNPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxyXG4gICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgIGZsZXgtY29sXCJcclxuICAgID5cclxuICAgICAgIDxwIGNsYXNzTmFtZT0nIHRleHQtbGluay1iYXNlIHRleHQtY2VudGVyIGZvbnQtZXh0cmFib2xkIGl0ZW1zLWNlbnRlciB0ZXh0LTJ4bCAgZmxleC1jb2wnPtCd0LDQt9Cy0LDQvdC40LUg0JrQstC40LfQsDoge3F1aXpEYXRhW2N1cnJlbnRRdWVzdGlvbl0ucXVpeklufTwvcD5cclxuICAgICAgIDxwIGNsYXNzTmFtZT0nIHRleHQtbGluay1iYXNlIHRleHQtY2VudGVyIGZvbnQtZXh0cmFib2xkIGl0ZW1zLWNlbnRlciB0ZXh0LTJ4bCBmbGV4LWMgJz7QkNCy0YLQvtGAOiB7cXVpekRhdGFbY3VycmVudFF1ZXN0aW9uXS5hdXRob3J9PC9wPlxyXG4gICAgICA8bW90aW9uLmJ1dHRvblxyXG4gICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk3IH19XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfVxyXG4gICAgICAgIGNsYXNzTmFtZT0nIGJnLWJ1dHRvbi1iYXNlIGhvdmVyOmJnLWhpbnQtYmFzZSB0ZXh0LWJ1dHRvbi1iYXNlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsIHRleHQteGwgJ1xyXG4gICAgICA+XHJcbntxdWl6RGF0YVtjdXJyZW50UXVlc3Rpb25dLnF1ZXN0aW9ufVxyXG4gICAgICA8L21vdGlvbi5idXR0b24+XHJcbiAgICAgIDxtb3Rpb24udWxcclxuICAgICAgICB2YXJpYW50cz17e1xyXG4gICAgICAgICAgb3Blbjoge1xyXG4gICAgICAgICAgICBjbGlwUGF0aDogXCJpbnNldCgwJSAwJSAwJSAwJSByb3VuZCAxMHB4KVwiLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcclxuICAgICAgICAgICAgICBib3VuY2U6IDAsXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDAuNyxcclxuICAgICAgICAgICAgICBkZWxheUNoaWxkcmVuOiAwLjMsXHJcbiAgICAgICAgICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjA1XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjbG9zZWQ6IHtcclxuICAgICAgICAgICAgY2xpcFBhdGg6IFwiaW5zZXQoMTAlIDUwJSA5MCUgNTAlIHJvdW5kIDEwcHgpXCIsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICB0eXBlOiBcInNwcmluZ1wiLFxyXG4gICAgICAgICAgICAgIGJvdW5jZTogMCxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMC4zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICAgIHN0eWxlPXt7IHBvaW50ZXJFdmVudHM6IGlzT3BlbiA/IFwiYXV0b1wiIDogXCJub25lXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgICAgICB7cXVpekRhdGFbY3VycmVudFF1ZXN0aW9uXS52YXJpYW50cy5tYXAoKHZhcmlhbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24ubGkgdmFyaWFudHM9e2l0ZW1WYXJpYW50c30ga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gaGFuZGxlQW5zd2VyQ2xpY2sodmFyaWFudCl9Y2xhc3NOYW1lPScgYmctYnV0dG9uLWJhc2UgIHRleHQtYnV0dG9uLWJhc2UgZm9udC1ib2xkIHB5LTIgcHgtMTQgcm91bmRlZC1mdWxsIHRleHQteGwgJz57aW5kZXggKzF9OiB7dmFyaWFudH08L21vdGlvbi5saT5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9JyB0ZXh0LWxpbmstYmFzZSAgdGV4dC1sZWZ0IGZvbnQtZXh0cmFib2xkIGl0ZW1zLWNlbnRlciB0ZXh0LXhsICc+0KHQu9C+0LbQvdC+0YHRgtGMINCy0L7Qv9GA0L7RgdCwOiB7cXVpekRhdGFbY3VycmVudFF1ZXN0aW9uXS5oYXJkbmVzc308L3A+XHJcbiAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nIHRleHQtbGluay1iYXNlIHRleHQtbGVmdCBmb250LWV4dHJhYm9sZCAgdGV4dC14bCAnPtCa0LDRgtC10LPQvtGA0LjRjyDQstC+0L/RgNC+0YHQsDoge3F1aXpEYXRhW2N1cnJlbnRRdWVzdGlvbl0uY2F0ZWdvcmllfTwvcD5cclxuICAgICAgPC9tb3Rpb24udWw+XHJcbiAgICA8L21vdGlvbi5uYXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxufVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgOlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9JyB0ZXh0LWxpbmstYmFzZSB0ZXh0LWNlbnRlciBmb250LWV4dHJhYm9sZCBpdGVtcy1jZW50ZXIgdGV4dC0yeGwgJz7QmiDRgdC+0LbQsNC70LXQvdC40Y4g0L/RgNC+0LjQt9C+0YjQu9CwINC90LXQv9GA0LXQtNCy0LjQtNC10L3QvdCw0Y8g0L7RiNC40LHQutCwPC9wPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBiZy1idXR0b24tYmFzZSBob3ZlcjpiZy1oaW50LWJhc2UgdGV4dC1idXR0b24tYmFzZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbCB0ZXh0LXhsIGZsZXhcIiBvbkNsaWNrPXsoKT0+IHJvdXRlci5wdXNoKGAvYCl9PlxyXG48QWlPdXRsaW5lQXJyb3dMZWZ0ICAvPlxyXG7QntCx0YDQsNGC0L3QviDQvdCwINCz0LvQsNCy0L3Rg9GOXHJcbjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbn1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgcmV0dXJuICdlcnJvcidcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwibW90aW9uIiwidXNlUm91dGVyIiwiQWlPdXRsaW5lQXJyb3dMZWZ0IiwiaXRlbVZhcmlhbnRzIiwib3BlbiIsIm9wYWNpdHkiLCJ5IiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiY2xvc2VkIiwiZHVyYXRpb24iLCJwYWdlIiwicGFyYW1zIiwicXVpekRhdGEiLCJzZXRRdWl6RGF0YSIsInF1ZXJ5IiwibGF0IiwibG9uIiwicmVzcG9uc2VRdWl6IiwiZ2V0IiwiZGF0YSIsImN1cnJlbnRRdWVzdGlvbiIsInNldEN1cnJlbnRRdWVzdGlvbiIsInVzZXJBbnN3ZXJzIiwic2V0VXNlckFuc3dlcnMiLCJzaG93UmVzdWx0Iiwic2V0U2hvd1Jlc3VsdCIsImhhbmRsZUFuc3dlckNsaWNrIiwic2VsZWN0ZWRWYXJpYW50IiwiaXNDb3JyZWN0IiwiYW5zd2VyIiwicXVlc3Rpb24iLCJsZW5ndGgiLCJjYWxjdWxhdGVTY29yZSIsImNvcnJlY3RBbnN3ZXJzIiwiZmlsdGVyIiwicm91dGVyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJwIiwiYnV0dG9uIiwib25DbGljayIsInB1c2giLCJuYXYiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInF1aXpJbiIsImF1dGhvciIsIndoaWxlVGFwIiwic2NhbGUiLCJ1bCIsInZhcmlhbnRzIiwiY2xpcFBhdGgiLCJib3VuY2UiLCJkZWxheUNoaWxkcmVuIiwic3RhZ2dlckNoaWxkcmVuIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwibWFwIiwidmFyaWFudCIsImluZGV4IiwibGkiLCJoYXJkbmVzcyIsImNhdGVnb3JpZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/quest/[lat]/[lon]/page.tsx\n"));

/***/ })

});