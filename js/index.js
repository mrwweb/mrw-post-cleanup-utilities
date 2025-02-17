/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/buttons/fix-fake-headings.js":
/*!*********************************************!*\
  !*** ./src/js/buttons/fix-fake-headings.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FixFakeHeadingsButton)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _compontents_block_transform_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../compontents/block-transform-button */ "./src/js/compontents/block-transform-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function FixFakeHeadingsButton(attributes) {
  let {
    level
  } = attributes;
  if (level === 2) {
    level = undefined;
  }
  function isFakeHeading(block) {
    if (block?.name !== "core/paragraph") {
      return false;
    }
    const blockContent = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.getBlockContent)(block).trim();
    if (blockContent === undefined) {
      return false;
    }
    const startsWithBold = blockContent.indexOf("<p><strong>") > -1;
    const endsWithBold = (blockContent.match(/<\/strong>[\s]?<\/p>$/g) || []).length === 1;
    if (!startsWithBold || !endsWithBold) {
      return false;
    }
    const onlyOneBold = (blockContent.match(/<\/strong>/g) || []).length === 1;
    return onlyOneBold;
  }
  function convertParagraphToHeading(block) {
    const blockContent = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.getBlockContent)(block);
    const newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)("core/heading", {
      content: blockContent.replace("<p><strong>", "").replace("</strong></p>", "").replace("<u>", "").replace("</u>", "").trim(),
      level
    });
    return newBlock;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_compontents_block_transform_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    blockTest: isFakeHeading,
    blockTransform: convertParagraphToHeading,
    buttonText: "Fix Fake Headings",
    buttonIcon: "heading"
  });
}

/***/ }),

/***/ "./src/js/buttons/promote-heading-levels.js":
/*!**************************************************!*\
  !*** ./src/js/buttons/promote-heading-levels.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PromoteHeadingLevels)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _compontents_block_transform_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../compontents/block-transform-button */ "./src/js/compontents/block-transform-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function PromoteHeadingLevels(attributes) {
  function isHeadingButNot2(block) {
    return block?.name === "core/heading" && block.attributes.level > 2;
  }
  function PromoteHeadingLevel(block) {
    const blockContent = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.getBlockContent)(block);
    const newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)("core/heading", {
      ...block.attributes,
      content: blockContent
      // regex for any number
      .replace(/<h[2-6][^>]*>/i, '').replace(/<\/h[2-6]>/i, '').trim(),
      level: Math.max(2, block.attributes.level - 1)
    });
    return newBlock;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_compontents_block_transform_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    blockTest: isHeadingButNot2,
    blockTransform: PromoteHeadingLevel,
    buttonText: "Promote Headings",
    buttonIcon: "arrow-up-alt"
  });
}

/***/ }),

/***/ "./src/js/buttons/reset-heading-levels.js":
/*!************************************************!*\
  !*** ./src/js/buttons/reset-heading-levels.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetHeadingLevelsButton)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _compontents_block_transform_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../compontents/block-transform-button */ "./src/js/compontents/block-transform-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function ResetHeadingLevelsButton(attributes) {
  const {
    level
  } = attributes;
  function isHeadingButNotSelectedLevel(block, level) {
    return block?.name === "core/heading" && block.attributes.level !== level;
  }
  function resetHeadingLevel(block) {
    const blockContent = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.getBlockContent)(block);
    const newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)("core/heading", {
      ...block.attributes,
      content: blockContent
      // regex for any number
      .replace(/<h[2-6][^>]*>/i, '').replace(/<\/h[2-6]>/i, '').trim(),
      level
    });
    return newBlock;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_compontents_block_transform_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    blockTest: isHeadingButNotSelectedLevel,
    blockTransform: resetHeadingLevel,
    buttonText: "Make all headings H" + level + "s",
    buttonIcon: "image-rotate"
  });
}

/***/ }),

/***/ "./src/js/compontents/block-transform-button.js":
/*!******************************************************!*\
  !*** ./src/js/compontents/block-transform-button.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function BlockTransformButton(props) {
  const {
    blockTest,
    blockTransform,
    buttonText,
    buttonIcon
  } = props;

  /*
  Lesson learned: React hooks must be called in the root of the functional compontent!
  See: https://react.dev/warnings/invalid-hook-call-warning#breaking-rules-of-hooks
  and See: https://developer.wordpress.org/news/2024/03/28/how-to-work-effectively-with-the-useselect-hook/#but-call-them-outside-when-you-re-in-an-event-handler
  */
  const {
    replaceBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store);
  const blocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).getBlocks(), []);

  /**
   * Function that 1) tests a block to see if it meets a specific criteria, and 2) if it does, transforms it via the second function. It is recursive and will go through nested blocks utnil all blocks have been tested and possibly transformed.
   *
   * @param {object} block a WordPress block editor block object
   * @param {function} criteriaFunction a function that tests the block to see if it meets a specific criteria
   * @param {function} transformFunction a function that transforms the block if it meets the criteria
   */
  function recurseAndTransform(block, criteriaFunction, transformFunction) {
    if (criteriaFunction(block)) {
      const newBlock = transformFunction(block);
      replaceBlock(block.clientId, newBlock);
    } else if (block?.innerBlocks?.length) {
      block.innerBlocks.forEach(block => recurseAndTransform(block));
    }
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    text: buttonText,
    icon: buttonIcon,
    isDestructive: true,
    onClick: () => {
      blocks.forEach(block => recurseAndTransform(block, blockTest, blockTransform));
    },
    __nextHasNoMarginBottom: true,
    variant: "secondary"
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockTransformButton);

/***/ }),

/***/ "./src/js/compontents/sidebar-panel-section.js":
/*!*****************************************************!*\
  !*** ./src/js/compontents/sidebar-panel-section.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SidebarPanelSection)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function SidebarPanelSection(props) {
  const {
    panelName,
    title,
    icon,
    description,
    children
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    name: panelName,
    title: title,
    className: panelName,
    icon: icon,
    initialOpen: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      style: {
        display: "flex",
        gap: "12px",
        flexDirection: "column"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        children: description
      }), children]
    })
  });
}

/***/ }),

/***/ "./src/js/sidebar-plugin.js":
/*!**********************************!*\
  !*** ./src/js/sidebar-plugin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _compontents_sidebar_panel_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compontents/sidebar-panel-section */ "./src/js/compontents/sidebar-panel-section.js");
/* harmony import */ var _buttons_fix_fake_headings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/fix-fake-headings */ "./src/js/buttons/fix-fake-headings.js");
/* harmony import */ var _buttons_reset_heading_levels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttons/reset-heading-levels */ "./src/js/buttons/reset-heading-levels.js");
/* harmony import */ var _buttons_promote_heading_levels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttons/promote-heading-levels */ "./src/js/buttons/promote-heading-levels.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* WordPress dependencies */




/* Internal dependencies */





const CleanupUtilitiesSidebar = () => {
  const [fakeHeadingsLevel, setFakeHeadingsLevel] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(2);
  const [resetHeadingsLevel, setResetHeadingsLevel] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(2);
  const headingLevels = [{
    label: "2",
    value: 2
  }, {
    label: "3",
    value: 3
  }, {
    label: "4",
    value: 4
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.PluginSidebar, {
    name: "mrw-post-cleanup-utilities",
    title: "Post Cleanup Utilities",
    icon: "admin-tools",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_compontents_sidebar_panel_section__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "mrw-fix-headings",
      title: "Fix Fake Headings",
      icon: "heading",
      description: "This button will find any paragraphs that are completely\r bolded and turn them into headings. By default, headings are\r level 2 (main subsections), but many pages (especially\r Guides) may benefit from conversion to Heading 3 or Heading\r 4 and then updating just a few Headings to level 2/3.",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: "Heading Level",
        value: fakeHeadingsLevel,
        options: headingLevels,
        onChange: value => setFakeHeadingsLevel(parseInt(value))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_buttons_fix_fake_headings__WEBPACK_IMPORTED_MODULE_4__["default"], {
        level: fakeHeadingsLevel
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_compontents_sidebar_panel_section__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "mrw-reset-headings",
      title: "Reset Heading Levels",
      icon: "image-rotate",
      description: "Change all heading blocks to the selected level.",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: "Heading Level",
        value: resetHeadingsLevel,
        options: headingLevels,
        onChange: value => setResetHeadingsLevel(parseInt(value))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_buttons_reset_heading_levels__WEBPACK_IMPORTED_MODULE_5__["default"], {
        level: resetHeadingsLevel
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_compontents_sidebar_panel_section__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "mrw-promote-headings",
      title: "Promote Heading Levels",
      icon: "arrow-up-alt",
      description: "\"Raise\" all headings in the hierarchy by one level (decrease numeric level by one). Change in levels is capped at 2, so this tool may result in flattening heading structure.",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_buttons_promote_heading_levels__WEBPACK_IMPORTED_MODULE_6__["default"], {})
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CleanupUtilitiesSidebar);

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["editor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["plugins"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sidebar_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar-plugin */ "./src/js/sidebar-plugin.js");
/* Core dependencies */


/* Internal Dependencies */

(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)("cleanup-utilities-sidebar", {
  render: _sidebar_plugin__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/******/ })()
;
//# sourceMappingURL=index.js.map