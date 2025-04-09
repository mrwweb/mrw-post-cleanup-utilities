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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_block_transform_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/block-transform-button */ "./src/js/components/block-transform-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* WordPress Dependencies */



/* Internal Dependencies */


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
    const blockContent = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.getBlockContent)(block).trim();
    if (blockContent === undefined) {
      return false;
    }
    const startsWithBold = (blockContent.match(/^<p(.*)>[\s]?<strong>/g) || []).length === 1;
    const endsWithBold = (blockContent.match(/<\/strong>[\s]?<\/p>$/g) || []).length === 1;
    if (!startsWithBold || !endsWithBold) {
      return false;
    }
    const onlyOneBold = (blockContent.match(/<\/strong>/g) || []).length === 1;
    return onlyOneBold;
  }
  function convertParagraphToHeading(block) {
    const blockContent = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.getBlockContent)(block);
    const newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)("core/heading", {
      ...block.attributes,
      content: blockContent.replace(/^<p(.*)>[\s]?<strong>/, "").replace(/<\/strong>[\s]?<\/p>$/, "").trim(),
      level
    });
    return newBlock;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_block_transform_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fix Fake Headings", 'mrw-post-cleanup-utilities'),
    icon: "heading",
    blockTest: isFakeHeading,
    blockTransform: convertParagraphToHeading
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_block_transform_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/block-transform-button */ "./src/js/components/block-transform-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* WordPress Dependencies */



/* Internal Dependencies */


function PromoteHeadingLevels(attributes) {
  function isHeadingButNot2(block) {
    return block?.name === "core/heading" && block.attributes.level > 2;
  }
  function PromoteHeadingLevel(block) {
    const blockContent = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.getBlockContent)(block);
    const newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)("core/heading", {
      ...block.attributes,
      content: blockContent
      // regex for any number
      .replace(/<h[2-6][^>]*>/i, '').replace(/<\/h[2-6]>/i, '').trim(),
      level: Math.max(2, block.attributes.level - 1)
    });
    return newBlock;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_block_transform_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Promote Headings", 'mrw-post-cleanup-utilities'),
    icon: "arrow-up-alt",
    blockTest: isHeadingButNot2,
    blockTransform: PromoteHeadingLevel
  });
}

/***/ }),

/***/ "./src/js/buttons/remove-linebreaks.js":
/*!*********************************************!*\
  !*** ./src/js/buttons/remove-linebreaks.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RemoveLinebreaksButton)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_editor_find_replace_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/editor-find-replace-button */ "./src/js/components/editor-find-replace-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* WordPress Dependencies */


/* Internal Dependencies */


function RemoveLinebreaksButton() {
  function removeLinebreaks(postContent) {
    return postContent.replace(/<br>/gi, ' ').replace(/<br \/>/gi, ' ');
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_editor_find_replace_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    buttonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove Linebreaks', 'mrw-post-cleanup-utilities'),
    buttonIcon: 'editor-break',
    contentTransform: removeLinebreaks
  });
}

/***/ }),

/***/ "./src/js/buttons/remove-nbsp.js":
/*!***************************************!*\
  !*** ./src/js/buttons/remove-nbsp.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RemoveNBSPsButton)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_editor_find_replace_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/editor-find-replace-button */ "./src/js/components/editor-find-replace-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* WordPress Dependencies */


/* Internal Dependencies */


function RemoveNBSPsButton() {
  function removeNBSPs(postContent) {
    return postContent.replace(/&nbsp;/gi, ' ');
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_editor_find_replace_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    buttonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove Non-breaking Spaces', 'mrw-post-cleanup-utilities'),
    buttonIcon: 'button',
    contentTransform: removeNBSPs
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_block_transform_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/block-transform-button */ "./src/js/components/block-transform-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* WordPress Dependencies */



/* Internal Dependencies */


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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_block_transform_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Make all headings H%1$ds", 'mrw-post-cleanup-utilities'), level),
    icon: "image-rotate",
    blockTest: isHeadingButNotSelectedLevel,
    blockTransform: resetHeadingLevel
  });
}

/***/ }),

/***/ "./src/js/buttons/strip-underlines.js":
/*!********************************************!*\
  !*** ./src/js/buttons/strip-underlines.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StripUnderlinesButton)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_editor_find_replace_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/editor-find-replace-button */ "./src/js/components/editor-find-replace-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* WordPress Dependencies */


/* Internal Dependencies */


function StripUnderlinesButton() {
  // This will remove all instances of underlines using either the <u> tag or inline styles. If a span is only used to apply this one inline style, then we can and should safely remove the span as well
  function stripUnderlines(postContent) {
    return postContent.replace(/<u>/gi, '').replace(/<\\u>/gi, '').replace(/<span style="text-decoration: underline;">(.*)<\/span>/gi, '$1').replace(/text-decoration: underline;/gi, '');
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_editor_find_replace_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    buttonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Strip Underlines', 'mrw-post-cleanup-utilities'),
    buttonIcon: 'editor-underline',
    contentTransform: stripUnderlines
  });
}

/***/ }),

/***/ "./src/js/components/block-transform-button.js":
/*!*****************************************************!*\
  !*** ./src/js/components/block-transform-button.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlockTransformButton)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




/**
 * The <BlockTransformButton /> component creates a button that, when clicked, will recursively test all blocks against a criteria function and transform them via a transform function if they meet the criteria.
 * 
 * Note: the current behavior means that each transformed block creates a new undo/history point for the editor
 * 
 * @param {*} props Expects four props, a blockTest function that accepts a block object and returns true or false, a blockTransform function that accepts a block object and returns a new block object, the label for the button's label, an icon (valid dashicon string)
 */

function BlockTransformButton(props) {
  const {
    blockTest,
    blockTransform,
    label,
    icon
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
   * @param {function} criteriaFunction a function that tests the block to see if it meets a specific criteria and returns true or false. When true, the transform function is applied to the block
   * @param {function} transformFunction a function that transforms the block if it meets the criteria. The function is expected to return a valid block object, usually created with createBlock() from @wordpress/blocks
   */
  function recurseAndTransform(block) {
    if (blockTest(block)) {
      const newBlock = blockTransform(block);
      replaceBlock(block.clientId, newBlock);
    } else if (block?.innerBlocks?.length) {
      block.innerBlocks.forEach(block => recurseAndTransform(block));
    }
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    text: label,
    icon: icon,
    isDestructive: true,
    onClick: () => {
      blocks.forEach(block => recurseAndTransform(block));
    },
    __nextHasNoMarginBottom: true,
    variant: "secondary"
  });
}

/***/ }),

/***/ "./src/js/components/editor-find-replace-button.js":
/*!*********************************************************!*\
  !*** ./src/js/components/editor-find-replace-button.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditorFindReplaceButton)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






/**
 * The <EditorFindReplaceButton /> component creates a button that, when clicked, apply a transform function to the post content as a string
 * 
 * @param {*} props Expects four props, a transformFunction that accepts a string and returns a modified string, the buttonText for the button's label, a buttonIcon (valid dashicon string)
 */

function EditorFindReplaceButton(props) {
  const {
    contentTransform,
    buttonText,
    buttonIcon
  } = props;
  const {
    resetBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
  const postContent = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).getEditedPostContent(), []);

  /**
   * Apply the transform function to the post content, parse back into block objects, and reset the editor with those updated blocks
   */
  function updatePost() {
    const newContent = contentTransform(postContent);
    const updatedBlocks = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.parse)(newContent);
    resetBlocks(updatedBlocks);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    text: buttonText,
    icon: buttonIcon,
    isDestructive: true,
    __nextHasNoMarginBottom: true,
    onClick: () => updatePost(),
    variant: "secondary"
  });
}

/***/ }),

/***/ "./src/js/components/sidebar-panel-section.js":
/*!****************************************************!*\
  !*** ./src/js/components/sidebar-panel-section.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SidebarPanelSection)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


/**
 * The <SidebarPanelSection /> component creates a standard display for the section panel containing a post cleanup utility. At it's simplest, that is a single button and description, though it may also contain extra configuration settings for that cleanup transformation
 * 
 * @param {*} props Expects four props, a `name` (used for the ID/name and className), the panel's `title`, an `icon` (valid dashicon string) for the panel's icon, and a `description` of the transformation
 * @returns 
 */

function SidebarPanelSection(props) {
  const {
    name,
    title,
    icon,
    description,
    children
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    name: name,
    title: title,
    className: name,
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_sidebar_panel_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar-panel-section */ "./src/js/components/sidebar-panel-section.js");
/* harmony import */ var _buttons_fix_fake_headings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttons/fix-fake-headings */ "./src/js/buttons/fix-fake-headings.js");
/* harmony import */ var _buttons_reset_heading_levels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttons/reset-heading-levels */ "./src/js/buttons/reset-heading-levels.js");
/* harmony import */ var _buttons_promote_heading_levels__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buttons/promote-heading-levels */ "./src/js/buttons/promote-heading-levels.js");
/* harmony import */ var _buttons_strip_underlines__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buttons/strip-underlines */ "./src/js/buttons/strip-underlines.js");
/* harmony import */ var _buttons_remove_linebreaks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buttons/remove-linebreaks */ "./src/js/buttons/remove-linebreaks.js");
/* harmony import */ var _buttons_remove_nbsp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./buttons/remove-nbsp */ "./src/js/buttons/remove-nbsp.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
/**
 * The custom sidebar containing all utilities. Each utility is put into its own SidebarPanelSection component.
 * 
 * Some sections may require custom, non-persistent settings (e.g. what heading level to change all headings to), which are also declared here
 */

/* WordPress dependencies */





/* Internal dependencies */








const CleanupUtilitiesSidebar = () => {
  const [fakeHeadingsLevel, setFakeHeadingsLevel] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(2);
  const [resetHeadingsLevel, setResetHeadingsLevel] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(2);
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.PluginSidebar, {
    name: "mrw-post-cleanup-utilities",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Post Cleanup Utilities", 'mrw-post-cleanup-utilities'),
    icon: "admin-tools",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_sidebar_panel_section__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "mrw-fix-headings",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fix Fake Headings", 'mrw-post-cleanup-utilities'),
      icon: "heading",
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Turns Paragraphs blocks containing only bold text into Heading blocks of the selected level.", 'mrw-post-cleanup-utilities'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Heading Level", 'mrw-post-cleanup-utilities'),
        value: fakeHeadingsLevel,
        options: headingLevels,
        onChange: value => setFakeHeadingsLevel(parseInt(value))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_buttons_fix_fake_headings__WEBPACK_IMPORTED_MODULE_5__["default"], {
        level: fakeHeadingsLevel
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_sidebar_panel_section__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "mrw-reset-headings",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Reset Heading Levels", 'mrw-post-cleanup-utilities'),
      icon: "image-rotate",
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Change all heading blocks to the selected level.", 'mrw-post-cleanup-utilities'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Heading Level", 'mrw-post-cleanup-utilities'),
        value: resetHeadingsLevel,
        options: headingLevels,
        onChange: value => setResetHeadingsLevel(parseInt(value))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_buttons_reset_heading_levels__WEBPACK_IMPORTED_MODULE_6__["default"], {
        level: resetHeadingsLevel
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_sidebar_panel_section__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "mrw-promote-headings",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Promote Heading Levels", 'mrw-post-cleanup-utilities'),
      icon: "arrow-up-alt",
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Move every heading up the hierarchy by one level (e.g. H3 becomes H2). Change is capped at H2.", 'mrw-post-cleanup-utilities'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_buttons_promote_heading_levels__WEBPACK_IMPORTED_MODULE_7__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_sidebar_panel_section__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "mrw-strip-underlines",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Strip Underlines", 'mrw-post-cleanup-utilities'),
      icon: "editor-underline",
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove all underlines created by either the <u> element or inline styles.", 'mrw-post-cleanup-utilities'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_buttons_strip_underlines__WEBPACK_IMPORTED_MODULE_8__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_sidebar_panel_section__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "mrw-remove-linebreaks",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove Linebreaks", 'mrw-post-cleanup-utilities'),
      icon: "editor-break",
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove all linebreaks within paragraphs, headings, etc.", 'mrw-post-cleanup-utilities'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_buttons_remove_linebreaks__WEBPACK_IMPORTED_MODULE_9__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_sidebar_panel_section__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "mrw-remove-nbsps",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove Non-breaking Spaces", 'mrw-post-cleanup-utilities'),
      icon: "button",
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove the &nbsp; character that can result in double-spaces or undesired text wrapping.", 'mrw-post-cleanup-utilities'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_buttons_remove_nbsp__WEBPACK_IMPORTED_MODULE_10__["default"], {})
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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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