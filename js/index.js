/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/buttons/consolidate-format-tags.js"
/*!***************************************************!*\
  !*** ./src/js/buttons/consolidate-format-tags.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConsolidateFormattingTagsButton)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/code.mjs");
/* harmony import */ var _components_editor_find_replace_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/editor-find-replace-button */ "./src/js/components/editor-find-replace-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* WordPress Dependencies */



/* Internal Dependencies */


function ConsolidateFormattingTagsButton() {
  function consolidateFormattingTags(postContent) {
    return postContent.replace(/<\/strong>(\s*)<strong>/gi, '$1').replace(/<\/b>(\s*)<b>/gi, '$1').replace(/<\/em>(\s*)<em>/gi, '$1').replace(/<\/i>(\s*)<i>/gi, '$1').replace(/<\/u>(\s*)<u>/gi, '$1');
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_editor_find_replace_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    buttonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Consolidate Formatting Tags', 'mrw-post-cleanup-utilities'),
    buttonIcon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"],
    contentTransform: consolidateFormattingTags
  });
}

/***/ },

/***/ "./src/js/buttons/convert-sentence-case.js"
/*!*************************************************!*\
  !*** ./src/js/buttons/convert-sentence-case.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SentenceCaseButton)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/paragraph.mjs");
/* harmony import */ var _components_selected_blocks_transform_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/selected-blocks-transform-button */ "./src/js/components/selected-blocks-transform-button.js");
/* harmony import */ var _utilities_to_sentence_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/to-sentence-case */ "./src/js/utilities/to-sentence-case.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* WordPress Dependencies */




/* Internal Dependencies */



function SentenceCaseButton() {
  function convertToSentenceCase(block) {
    const newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)(block.name, {
      ...block.attributes,
      content: (0,_utilities_to_sentence_case__WEBPACK_IMPORTED_MODULE_4__["default"])(block.attributes.content)
    });
    return newBlock;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_selected_blocks_transform_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Convert to Sentence Case', 'mrw-post-cleanup-utilities'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"],
    blockTransform: convertToSentenceCase,
    blockTest: () => true
  });
}

/***/ },

/***/ "./src/js/buttons/convert-title-case.js"
/*!**********************************************!*\
  !*** ./src/js/buttons/convert-title-case.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TitleCaseButton)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/title.mjs");
/* harmony import */ var _components_selected_blocks_transform_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/selected-blocks-transform-button */ "./src/js/components/selected-blocks-transform-button.js");
/* harmony import */ var _vendor_to_title_case_to_title_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vendor/to-title-case/to-title-case */ "./src/js/vendor/to-title-case/to-title-case.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* WordPress Dependencies */




/* Internal Dependencies */



function TitleCaseButton() {
  function convertToTitleCase(block) {
    const newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)(block.name, {
      ...block.attributes,
      content: (0,_vendor_to_title_case_to_title_case__WEBPACK_IMPORTED_MODULE_4__["default"])(block.attributes.content)
    });
    return newBlock;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_selected_blocks_transform_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Convert to Title Case', 'mrw-post-cleanup-utilities'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"],
    blockTransform: convertToTitleCase,
    blockTest: () => true
  });
}

/***/ },

/***/ "./src/js/buttons/delete-empty-text-blocks.js"
/*!****************************************************!*\
  !*** ./src/js/buttons/delete-empty-text-blocks.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteEmptyTextBlocksButton)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/border.mjs");
/* harmony import */ var _components_multi_block_transform_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/multi-block-transform-button */ "./src/js/components/multi-block-transform-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* WordPress Dependencies */



/* Internal Dependencies */


function DeleteEmptyTextBlocksButton(attributes) {
  function isEmptyHeadingOrParagraph(block) {
    if (block?.name !== 'core/heading' && block?.name !== 'core/paragraph') {
      return false;
    }
    const content = block.attributes?.content;
    return !content || content.toString().trim() === '';
  }

  // Returning a falsy value tells MultiBlockTransformButton to remove the
  // block instead of replacing it.
  function deleteBlock(block) {
    return undefined;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_multi_block_transform_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Delete Empty Text Blocks', 'mrw-post-cleanup-utilities'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"],
    blockTest: isEmptyHeadingOrParagraph,
    blockTransform: deleteBlock,
    ...attributes
  });
}

/***/ },

/***/ "./src/js/buttons/double-space-to-single-space.js"
/*!********************************************************!*\
  !*** ./src/js/buttons/double-space-to-single-space.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoDoubleSpaceButton)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/flip-horizontal.mjs");
/* harmony import */ var _components_editor_find_replace_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/editor-find-replace-button */ "./src/js/components/editor-find-replace-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* WordPress Dependencies */



/* Internal Dependencies */


function NoDoubleSpaceButton() {
  // This will replace all instances of double spaces with single spaces
  function replaceDoubleSpaces(postContent) {
    return postContent.replace(/  /g, ' ').replace(/&nbsp; /g, ' ').replace(/ &nbsp;/g, ' ').replace(/&nbsp;&nbsp;/g, ' ');
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_editor_find_replace_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    buttonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove Double Spaces', 'mrw-post-cleanup-utilities'),
    buttonIcon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"],
    contentTransform: replaceDoubleSpaces
  });
}

/***/ },

/***/ "./src/js/buttons/fix-fake-headings.js"
/*!*********************************************!*\
  !*** ./src/js/buttons/fix-fake-headings.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FixFakeHeadingsButton)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/heading.mjs");
/* harmony import */ var _components_multi_block_transform_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/multi-block-transform-button */ "./src/js/components/multi-block-transform-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* WordPress Dependencies */




/* Internal Dependencies */


function FixFakeHeadingsButton(attributes) {
  let {
    level
  } = attributes;
  const levelString = level;
  if (level === 2) {
    level = undefined;
  }
  function isFakeHeading(block) {
    if (block?.name !== 'core/paragraph') {
      return false;
    }
    const blockContent = block.attributes.content.trim();
    if (blockContent === undefined) {
      return false;
    }
    const startsWithBold = (blockContent.match(/^<strong>/g) || []).length === 1;
    const endsWithBold = (blockContent.match(/<\/strong>$/g) || []).length === 1;
    const onlyOneBold = (blockContent.match(/<\/strong>/g) || []).length === 1;
    return startsWithBold && endsWithBold && onlyOneBold;
  }
  function convertParagraphToHeading(block) {
    const newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)('core/heading', {
      ...block.attributes,
      content: block.attributes.content.replace(/^<strong>/, '').replace(/<\/strong>$/, ''),
      level
    });
    return newBlock;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_multi_block_transform_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Make Fake Headings H%1$ds', 'mrw-post-cleanup-utilities'), levelString),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"],
    blockTest: isFakeHeading,
    blockTransform: convertParagraphToHeading,
    ...attributes
  });
}

/***/ },

/***/ "./src/js/buttons/promote-heading-levels.js"
/*!**************************************************!*\
  !*** ./src/js/buttons/promote-heading-levels.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PromoteHeadingLevels)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/level-up.mjs");
/* harmony import */ var _components_multi_block_transform_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/multi-block-transform-button */ "./src/js/components/multi-block-transform-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* WordPress Dependencies */




/* Internal Dependencies */


function PromoteHeadingLevels(attributes) {
  function isHeadingButNot2(block) {
    return block?.name === 'core/heading' && block.attributes.level > 2;
  }
  function PromoteHeadingLevel(block) {
    const newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)('core/heading', {
      ...block.attributes,
      content: block.attributes.content,
      level: Math.max(2, block.attributes.level - 1)
    });
    return newBlock;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_multi_block_transform_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Promote Headings', 'mrw-post-cleanup-utilities'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"],
    blockTest: isHeadingButNot2,
    blockTransform: PromoteHeadingLevel,
    ...attributes
  });
}

/***/ },

/***/ "./src/js/buttons/remove-linebreaks.js"
/*!*********************************************!*\
  !*** ./src/js/buttons/remove-linebreaks.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RemoveLinebreaksButton)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/keyboard-return.mjs");
/* harmony import */ var _components_editor_find_replace_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/editor-find-replace-button */ "./src/js/components/editor-find-replace-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* WordPress Dependencies */



/* Internal Dependencies */


function RemoveLinebreaksButton() {
  function removeLinebreaks(postContent) {
    return postContent.replace(/<br>/gi, ' ').replace(/<br \/>/gi, ' ');
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_editor_find_replace_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    buttonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove Linebreaks', 'mrw-post-cleanup-utilities'),
    buttonIcon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"],
    contentTransform: removeLinebreaks
  });
}

/***/ },

/***/ "./src/js/buttons/remove-nbsp.js"
/*!***************************************!*\
  !*** ./src/js/buttons/remove-nbsp.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RemoveNBSPsButton)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/home-button.mjs");
/* harmony import */ var _components_editor_find_replace_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/editor-find-replace-button */ "./src/js/components/editor-find-replace-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* WordPress Dependencies */



/* Internal Dependencies */


function RemoveNBSPsButton() {
  function removeNBSPs(postContent) {
    return postContent.replace(/&nbsp;/gi, ' ');
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_editor_find_replace_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    buttonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove Non-breaking Spaces', 'mrw-post-cleanup-utilities'),
    buttonIcon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"],
    contentTransform: removeNBSPs
  });
}

/***/ },

/***/ "./src/js/buttons/remove-target-blank.js"
/*!***********************************************!*\
  !*** ./src/js/buttons/remove-target-blank.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RemoveTargetBlankButton)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/external.mjs");
/* harmony import */ var _components_editor_find_replace_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/editor-find-replace-button */ "./src/js/components/editor-find-replace-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* WordPress Dependencies */



/* Internal Dependencies */


function RemoveTargetBlankButton() {
  // This will remove all instances of target="_blank" attributes
  function removeTargetBlank(postContent) {
    return postContent.replace(/ target="_blank"/gi, '').replace(/ rel="noopener noreferrer"/gi, '').replace(/ rel="noopener"/gi, '').replace(/ rel="noreferrer"/gi, '');
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_editor_find_replace_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    buttonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove target="_blank"', 'mrw-post-cleanup-utilities'),
    buttonIcon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"],
    contentTransform: removeTargetBlank
  });
}

/***/ },

/***/ "./src/js/buttons/reset-heading-levels.js"
/*!************************************************!*\
  !*** ./src/js/buttons/reset-heading-levels.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetHeadingLevelsButton)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-outdent.mjs");
/* harmony import */ var _components_multi_block_transform_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/multi-block-transform-button */ "./src/js/components/multi-block-transform-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* WordPress Dependencies */




/* Internal Dependencies */


function ResetHeadingLevelsButton(attributes) {
  const {
    level
  } = attributes;
  function isHeadingButNotSelectedLevel(block, level) {
    return block?.name === 'core/heading' && block.attributes.level !== level;
  }
  function resetHeadingLevel(block) {
    const newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/heading', {
      ...block.attributes,
      content: block.attributes.content,
      level
    });
    return newBlock;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_multi_block_transform_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset to H%1$ds', 'mrw-post-cleanup-utilities'), level),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"],
    blockTest: isHeadingButNotSelectedLevel,
    blockTransform: resetHeadingLevel,
    ...attributes
  });
}

/***/ },

/***/ "./src/js/buttons/strip-bold-from-headings.js"
/*!****************************************************!*\
  !*** ./src/js/buttons/strip-bold-from-headings.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StripBoldFromHeadingsButton)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-bold.mjs");
/* harmony import */ var _components_multi_block_transform_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/multi-block-transform-button */ "./src/js/components/multi-block-transform-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* WordPress Dependencies */




/* Internal Dependencies */


function StripBoldFromHeadingsButton(attributes) {
  function isHeadingWithBold(block) {
    return block?.name === 'core/heading' && block.attributes.content.includes('<strong');
  }
  function StripBoldFromHeading(block) {
    const newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)('core/heading', {
      ...block.attributes,
      content: block.attributes.content.replace(/<strong>|<\/strong>|<b>|<\/b>/g, '')
    });
    return newBlock;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_multi_block_transform_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Strip Bold from Headings', 'mrw-post-cleanup-utilities'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"],
    blockTest: isHeadingWithBold,
    blockTransform: StripBoldFromHeading
  });
}

/***/ },

/***/ "./src/js/buttons/strip-empty-links.js"
/*!*********************************************!*\
  !*** ./src/js/buttons/strip-empty-links.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StripEmptyLinksButton)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link-off.mjs");
/* harmony import */ var _components_editor_find_replace_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/editor-find-replace-button */ "./src/js/components/editor-find-replace-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* WordPress Dependencies */



/* Internal Dependencies */


function StripEmptyLinksButton() {
  function stripEmptyLinks(postContent) {
    return postContent.replace(/<a.+>(\s*)<\/a>/gi, '$1');
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_editor_find_replace_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    buttonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Strip Empty Links', 'mrw-post-cleanup-utilities'),
    buttonIcon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"],
    contentTransform: stripEmptyLinks
  });
}

/***/ },

/***/ "./src/js/buttons/strip-underlines.js"
/*!********************************************!*\
  !*** ./src/js/buttons/strip-underlines.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StripUnderlinesButton)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-underline.mjs");
/* harmony import */ var _components_editor_find_replace_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/editor-find-replace-button */ "./src/js/components/editor-find-replace-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* WordPress Dependencies */



/* Internal Dependencies */


function StripUnderlinesButton() {
  // This will remove all instances of underlines using either the <u> tag or inline styles. If a span is only used to apply this one inline style, then we can and should safely remove the span as well
  function stripUnderlines(postContent) {
    return postContent.replace(/<u>/gi, '').replace(/<\/u>/gi, '').replace(/<span style="text-decoration: underline;">(.*)<\/span>/gi, '$1').replace(/text-decoration: underline;/gi, '');
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_editor_find_replace_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    buttonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Strip Underlines', 'mrw-post-cleanup-utilities'),
    buttonIcon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"],
    contentTransform: stripUnderlines
  });
}

/***/ },

/***/ "./src/js/components/editor-find-replace-button.js"
/*!*********************************************************!*\
  !*** ./src/js/components/editor-find-replace-button.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    variant: "secondary",
    ...props
  });
}

/***/ },

/***/ "./src/js/components/multi-block-transform-button.js"
/*!***********************************************************!*\
  !*** ./src/js/components/multi-block-transform-button.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MultiBlockTransformButton)
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
 * The <MultiBlockTransformButton /> component creates a button that, when clicked, will recursively test all blocks against a criteria function and transform them via a transform function if they meet the criteria.
 *
 * Note: the current behavior means that each transformed block creates a new undo/history point for the editor
 *
 * @param {*} props Expects four props, a blockTest function that accepts a block object and returns true or false, a blockTransform function that accepts a block object and returns a new block object (or a falsy value to delete the block), the label for the button's label, an icon (valid dashicon string)
 */

function MultiBlockTransformButton(props) {
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
    replaceBlock,
    removeBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store);
  const {
    getBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store);

  /**
   * Function that 1) tests a block to see if it meets a specific criteria, and 2) if it does, transforms it via the second function. It is recursive and will go through nested blocks utnil all blocks have been tested and possibly transformed.
   *
   * @param {Object}   block             a WordPress block editor block object
   * @param {Function} criteriaFunction  a function that tests the block to see if it meets a specific criteria and returns true or false. When true, the transform function is applied to the block
   * @param {Function} transformFunction a function that transforms the block if it meets the criteria. The function is expected to return a valid block object (usually created with createBlock() from @wordpress/blocks), or a falsy value to delete the block instead of replacing it
   */
  function recurseAndTransform(block) {
    if (blockTest(block)) {
      const newBlock = blockTransform(block);
      if (newBlock) {
        replaceBlock(block.clientId, newBlock);
      } else {
        removeBlock(block.clientId);
      }
    } else if (block?.innerBlocks?.length) {
      block.innerBlocks.forEach(block => recurseAndTransform(block));
    }
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    text: label,
    icon: icon,
    isDestructive: true,
    onClick: () => {
      getBlocks().forEach(block => recurseAndTransform(block));
    },
    __nextHasNoMarginBottom: true,
    variant: "secondary",
    ...props
  });
}

/***/ },

/***/ "./src/js/components/selected-blocks-transform-button.js"
/*!***************************************************************!*\
  !*** ./src/js/components/selected-blocks-transform-button.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectedBlocksTransformButton)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




/* import recurseAndTransform from "../utlities/recurse-and-transform"; */

/**
 * The <SelectedBlocksTransformButton /> component creates a button that, when clicked, will recursively modify the currently selected block.
 *
 *
 * @param {*} props Expects three props, a blockTransform function that accepts a block object and returns a new block object, the label for the button's label, an icon (valid dashicon string)
 */

function SelectedBlocksTransformButton(props) {
  const {
    blockTransform,
    blockTest,
    label,
    icon
  } = props;
  const {
    replaceBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store);
  const {
    getSelectedBlockClientIds,
    getBlocksByClientId
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store);

  /**
   * Function that 1) tests a block to see if it meets a specific criteria, and 2) if it does, transforms it via the second function. It is recursive and will go through nested blocks utnil all blocks have been tested and possibly transformed.
   *
   * @param {Object}   block             a WordPress block editor block object
   * @param {Function} criteriaFunction  a function that tests the block to see if it meets a specific criteria and returns true or false. When true, the transform function is applied to the block
   * @param {Function} transformFunction a function that transforms the block if it meets the criteria. The function is expected to return a valid block object, usually created with createBlock() from @wordpress/blocks
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
      const blocks = getBlocksByClientId(getSelectedBlockClientIds());
      blocks.forEach(block => recurseAndTransform(block, blockTransform, () => blocks.content));
    },
    __nextHasNoMarginBottom: true,
    variant: "secondary"
  });
}

/***/ },

/***/ "./src/js/components/sidebar-panel-section.js"
/*!****************************************************!*\
  !*** ./src/js/components/sidebar-panel-section.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
 * @return
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
        display: 'flex',
        gap: '12px',
        flexDirection: 'column'
      },
      children: [description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        children: description
      }), children]
    })
  });
}

/***/ },

/***/ "./src/js/sidebar-plugin.js"
/*!**********************************!*\
  !*** ./src/js/sidebar-plugin.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _buttons_double_space_to_single_space__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buttons/double-space-to-single-space */ "./src/js/buttons/double-space-to-single-space.js");
/* harmony import */ var _buttons_remove_linebreaks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./buttons/remove-linebreaks */ "./src/js/buttons/remove-linebreaks.js");
/* harmony import */ var _buttons_remove_nbsp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./buttons/remove-nbsp */ "./src/js/buttons/remove-nbsp.js");
/* harmony import */ var _buttons_convert_title_case__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./buttons/convert-title-case */ "./src/js/buttons/convert-title-case.js");
/* harmony import */ var _buttons_convert_sentence_case__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./buttons/convert-sentence-case */ "./src/js/buttons/convert-sentence-case.js");
/* harmony import */ var _buttons_strip_empty_links__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./buttons/strip-empty-links */ "./src/js/buttons/strip-empty-links.js");
/* harmony import */ var _buttons_strip_bold_from_headings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./buttons/strip-bold-from-headings */ "./src/js/buttons/strip-bold-from-headings.js");
/* harmony import */ var _buttons_remove_target_blank__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./buttons/remove-target-blank */ "./src/js/buttons/remove-target-blank.js");
/* harmony import */ var _buttons_consolidate_format_tags__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./buttons/consolidate-format-tags */ "./src/js/buttons/consolidate-format-tags.js");
/* harmony import */ var _buttons_delete_empty_text_blocks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./buttons/delete-empty-text-blocks */ "./src/js/buttons/delete-empty-text-blocks.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/fullscreen.mjs");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/heading.mjs");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/info.mjs");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.mjs");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/pencil.mjs");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/tool.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__);
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
    label: '2',
    value: 2
  }, {
    label: '3',
    value: 3
  }, {
    label: '4',
    value: 4
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.PluginSidebar, {
    name: "mrw-post-cleanup-utilities",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Cleanup Utilities', 'mrw-post-cleanup-utilities'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_24__["default"],
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_components_sidebar_panel_section__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "mrw-headings",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Headings', 'mrw-post-cleanup-utilities'),
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_20__["default"],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_buttons_fix_fake_headings__WEBPACK_IMPORTED_MODULE_5__["default"], {
          level: fakeHeadingsLevel,
          "aria-describedby": "mrw-fix-fake-headings-help"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heading Level', 'mrw-post-cleanup-utilities'),
          value: fakeHeadingsLevel,
          options: headingLevels,
          onChange: value => setFakeHeadingsLevel(parseInt(value)),
          hideLabelFromVision: true
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("p", {
        className: "mrw-help-text",
        id: "mrw-fix-fake-headings-help",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_21__["default"],
          size: "18"
        }), ' ', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Turns Paragraphs blocks containing only bold text into Heading blocks of the selected level.', 'mrw-post-cleanup-utilities')]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_buttons_reset_heading_levels__WEBPACK_IMPORTED_MODULE_6__["default"], {
          level: resetHeadingsLevel,
          "aria-describedby": "mrw-reset-headings-help"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heading Level', 'mrw-post-cleanup-utilities'),
          value: resetHeadingsLevel,
          options: headingLevels,
          onChange: value => setResetHeadingsLevel(parseInt(value)),
          hideLabelFromVision: true
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("p", {
        className: "mrw-help-text",
        id: "mrw-reset-headings-help",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_21__["default"],
          size: "18"
        }), ' ', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Change all heading blocks to the selected level.', 'mrw-post-cleanup-utilities')]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_buttons_promote_heading_levels__WEBPACK_IMPORTED_MODULE_7__["default"], {
        "aria-describedby": "mrw-promote-headings-help"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("p", {
        className: "mrw-help-text",
        id: "mrw-promote-headings-help",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_21__["default"],
          size: "18"
        }), ' ', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move every heading up the hierarchy by one level (e.g. H3 becomes H2). Change is capped at H2.', 'mrw-post-cleanup-utilities')]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_buttons_strip_bold_from_headings__WEBPACK_IMPORTED_MODULE_15__["default"], {})]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_components_sidebar_panel_section__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "mrw-formatting",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Formatting', 'mrw-post-cleanup-utilities'),
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_23__["default"],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_buttons_consolidate_format_tags__WEBPACK_IMPORTED_MODULE_17__["default"], {
        "aria-describedby": "mrw-conslidate-formatting-help"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("p", {
        className: "mrw-help-text",
        id: "mrw-conslidate-formatting-help",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_21__["default"],
          size: "18"
        }), ' ', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Merges consecutive bold, italic, and underline tags.', 'mrw-post-cleanup-utilities')]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_buttons_strip_underlines__WEBPACK_IMPORTED_MODULE_8__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_buttons_convert_title_case__WEBPACK_IMPORTED_MODULE_12__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_buttons_convert_sentence_case__WEBPACK_IMPORTED_MODULE_13__["default"], {})]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_components_sidebar_panel_section__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "mrw-whitespace",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Whitespace', 'mrw-post-cleanup-utilities'),
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_19__["default"],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_buttons_double_space_to_single_space__WEBPACK_IMPORTED_MODULE_9__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_buttons_remove_nbsp__WEBPACK_IMPORTED_MODULE_11__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_buttons_remove_linebreaks__WEBPACK_IMPORTED_MODULE_10__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_buttons_delete_empty_text_blocks__WEBPACK_IMPORTED_MODULE_18__["default"], {
        "aria-describedby": "mrw-empty-text-blocks-help"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("p", {
        className: "mrw-help-text",
        id: "mrw-empty-text-blocks-help",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_21__["default"],
          size: "18"
        }), ' ', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Deletes Paragraphs and Headings that are empty or only contain whitespace.', 'mrw-post-cleanup-utilities')]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_components_sidebar_panel_section__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "mrw-links",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Links', 'mrw-post-cleanup-utilities'),
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_22__["default"],
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove all target="_blank" attributes from links.', 'mrw-post-cleanup-utilities'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_buttons_strip_empty_links__WEBPACK_IMPORTED_MODULE_14__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_buttons_remove_target_blank__WEBPACK_IMPORTED_MODULE_16__["default"], {})]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CleanupUtilitiesSidebar);

/***/ },

/***/ "./src/js/utilities/to-sentence-case.js"
/*!**********************************************!*\
  !*** ./src/js/utilities/to-sentence-case.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toSentenceCase)
/* harmony export */ });
/* To Sentence Case, forked from © 2018 David Gouch | https://github.com/gouch/to-title-case */
/*
 * Changes made by me:
 * - Split on ">" to handle words after an opening HTML tag
 * - Test for first word, even when there's markup
 * - Detect all-caps strings (ignoring HTML) and convert to lowercase before applying title case
 */

function toSentenceCase(string) {
  'use strict';

  const alphanumericPattern = /([A-Za-z0-9\u00C0-\u00FF])/;

  /* Change: Include ">" to split on closing HTML tags */
  const wordSeparators = /([> :–—-])/;

  /* Change: Detect whether string is all caps (not including HTML) */
  const allUpper = string.replace(/<[^>]*>/g, ' ').search(/[a-z]/g) === -1;
  if (allUpper) {
    string = string.toLowerCase();
  }
  let didFirstWord = false;
  return string.split(wordSeparators).map(function (current, index, array) {
    /* Ignore intentional capitalization */
    if (current.substr(1).search(/[A-Z]|\../) > -1) {
      didFirstWord = true;
      return current;
    }

    /* Capitalize the first letter */
    if (!didFirstWord) {
      if (current.substr(0, 1).search(alphanumericPattern) > -1) {
        didFirstWord = true;
      }
      return current.replace(alphanumericPattern, function (match) {
        return match.toUpperCase();
      });
    }
    return current.toLowerCase();
  }).join('');
}

/***/ },

/***/ "./src/js/vendor/to-title-case/to-title-case.js"
/*!******************************************************!*\
  !*** ./src/js/vendor/to-title-case/to-title-case.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toTitleCase)
/* harmony export */ });
/* To Title Case © 2018 David Gouch | https://github.com/gouch/to-title-case */
/*
 * Changes made by me:
 * - Split on ">" to capitalize words after an opening HTML tag
 * - Detect all-caps strings (ignoring HTML) and convert to lowercase before applying title case
 */

// eslint-disable-next-line no-extend-native
function toTitleCase(string) {
  'use strict';

  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|v.?|vs.?|via)$/i;
  var alphanumericPattern = /([A-Za-z0-9\u00C0-\u00FF])/;

  /* Change: Include ">" to split on closing HTML tags */
  var wordSeparators = /([> :–—-])/;

  /* Change: Detect whether string is all caps (not including HTML) */
  var allUpper = string.replace(/<[^>]*>/g, ' ').search(/[a-z]/g) === -1;
  if (allUpper) {
    string = string.toLowerCase();
  }
  return string.split(wordSeparators).map(function (current, index, array) {
    if (/* Check for small words */
    current.search(smallWords) > -1 && /* Skip first and last word */
    index !== 0 && index !== array.length - 1 && /* Ignore title end and subtitle start */
    array[index - 3] !== ':' && array[index + 1] !== ':' && (/* Ignore small words that start a hyphenated phrase */
    array[index + 1] !== '-' || array[index - 1] === '-' && array[index + 1] === '-')) {
      return current.toLowerCase();
    }

    /* Ignore intentional capitalization */
    if (current.substr(1).search(/[A-Z]|\../) > -1) {
      return current;
    }

    /* Ignore URLs */
    if (array[index + 1] === ':' && array[index + 2] !== '') {
      return current;
    }

    /* Capitalize the first letter */
    return current.replace(alphanumericPattern, function (match) {
      return match.toUpperCase();
    });
  }).join('');
}

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/editor"
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["editor"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "@wordpress/plugins"
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["plugins"];

/***/ },

/***/ "@wordpress/primitives"
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["primitives"];

/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/border.mjs"
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/border.mjs ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ border_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/border.tsx


var border_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "m6.6 15.6-1.2.8c.6.9 1.3 1.6 2.2 2.2l.8-1.2c-.7-.5-1.3-1.1-1.8-1.8zM5.5 12c0-.4 0-.9.1-1.3l-1.5-.3c0 .5-.1 1.1-.1 1.6s.1 1.1.2 1.6l1.5-.3c-.2-.4-.2-.9-.2-1.3zm11.9-3.6 1.2-.8c-.6-.9-1.3-1.6-2.2-2.2l-.8 1.2c.7.5 1.3 1.1 1.8 1.8zM5.3 7.6l1.2.8c.5-.7 1.1-1.3 1.8-1.8l-.7-1.3c-.9.6-1.7 1.4-2.3 2.3zm14.5 2.8-1.5.3c.1.4.1.8.1 1.3s0 .9-.1 1.3l1.5.3c.1-.5.2-1 .2-1.6s-.1-1.1-.2-1.6zM12 18.5c-.4 0-.9 0-1.3-.1l-.3 1.5c.5.1 1 .2 1.6.2s1.1-.1 1.6-.2l-.3-1.5c-.4.1-.9.1-1.3.1zm3.6-1.1.8 1.2c.9-.6 1.6-1.3 2.2-2.2l-1.2-.8c-.5.7-1.1 1.3-1.8 1.8zM10.4 4.2l.3 1.5c.4-.1.8-.1 1.3-.1s.9 0 1.3.1l.3-1.5c-.5-.1-1.1-.2-1.6-.2s-1.1.1-1.6.2z" }) });

//# sourceMappingURL=border.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/code.mjs"
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/code.mjs ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ code_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/code.tsx


var code_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", style: { fill: "none" }, stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M7.99997 7L3.70708 11.2929C3.31655 11.6834 3.31655 12.3166 3.70708 12.7071L7.99997 17M16 17L20.2929 12.7071C20.6834 12.3166 20.6834 11.6834 20.2929 11.2929L16 7", strokeLinejoin: "round", vectorEffect: "non-scaling-stroke" }) });

//# sourceMappingURL=code.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/external.mjs"
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/external.mjs ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ external_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/external.tsx


var external_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z" }) });

//# sourceMappingURL=external.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/flip-horizontal.mjs"
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/flip-horizontal.mjs ***!
  \********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ flip_horizontal_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/flip-horizontal.tsx


var flip_horizontal_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M4 6v12c0 1.1.9 2 2 2h3v-1.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h3V4H6c-1.1 0-2 .9-2 2zm7.2 16h1.5V2h-1.5v20zM15 5.5h1.5V4H15v1.5zm3.5.5H20c0-1.1-.9-2-2-2v1.5c.3 0 .5.2.5.5zm0 10.5H20v-2h-1.5v2zm0-3.5H20v-2h-1.5v2zm-.5 5.5V20c1.1 0 2-.9 2-2h-1.5c0 .3-.2.5-.5.5zM15 20h1.5v-1.5H15V20zm3.5-10.5H20v-2h-1.5v2z" }) });

//# sourceMappingURL=flip-horizontal.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/format-bold.mjs"
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-bold.mjs ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format_bold_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/format-bold.tsx


var format_bold_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M14.7 11.3c1-.6 1.5-1.6 1.5-3 0-2.3-1.3-3.4-4-3.4H7v14h5.8c1.4 0 2.5-.3 3.3-1 .8-.7 1.2-1.7 1.2-2.9.1-1.9-.8-3.1-2.6-3.7zm-5.1-4h2.3c.6 0 1.1.1 1.4.4.3.3.5.7.5 1.2s-.2 1-.5 1.2c-.3.3-.8.4-1.4.4H9.6V7.3zm4.6 9c-.4.3-1 .4-1.7.4H9.6v-3.9h2.9c.7 0 1.3.2 1.7.5.4.3.6.8.6 1.5s-.2 1.2-.6 1.5z" }) });

//# sourceMappingURL=format-bold.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/format-outdent.mjs"
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-outdent.mjs ***!
  \*******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format_outdent_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/format-outdent.tsx


var format_outdent_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-4-4.6l-4 4 4 4 1-1-3-3 3-3-1-1z" }) });

//# sourceMappingURL=format-outdent.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/format-underline.mjs"
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-underline.mjs ***!
  \*********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format_underline_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/format-underline.tsx


var format_underline_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M7 18v1h10v-1H7zm5-2c1.5 0 2.6-.4 3.4-1.2.8-.8 1.1-2 1.1-3.5V5H15v5.8c0 1.2-.2 2.1-.6 2.8-.4.7-1.2 1-2.4 1s-2-.3-2.4-1c-.4-.7-.6-1.6-.6-2.8V5H7.5v6.2c0 1.5.4 2.7 1.1 3.5.8.9 1.9 1.3 3.4 1.3z" }) });

//# sourceMappingURL=format-underline.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/fullscreen.mjs"
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/fullscreen.mjs ***!
  \***************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fullscreen_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/fullscreen.tsx


var fullscreen_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M6 4a2 2 0 0 0-2 2v3h1.5V6a.5.5 0 0 1 .5-.5h3V4H6Zm3 14.5H6a.5.5 0 0 1-.5-.5v-3H4v3a2 2 0 0 0 2 2h3v-1.5Zm6 1.5v-1.5h3a.5.5 0 0 0 .5-.5v-3H20v3a2 2 0 0 1-2 2h-3Zm3-16a2 2 0 0 1 2 2v3h-1.5V6a.5.5 0 0 0-.5-.5h-3V4h3Z" }) });

//# sourceMappingURL=fullscreen.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/heading.mjs"
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/heading.mjs ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ heading_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/heading.tsx


var heading_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M6 5V18.5911L12 13.8473L18 18.5911V5H6Z" }) });

//# sourceMappingURL=heading.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/home-button.mjs"
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/home-button.mjs ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home_button_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/home-button.tsx


var home_button_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", style: { fill: "none" }, stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Rect, { x: "5", y: "5", width: "14", height: "14", rx: "2", stroke: "currentColor", vectorEffect: "non-scaling-stroke" }) });

//# sourceMappingURL=home-button.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/info.mjs"
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/info.mjs ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ info_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/info.tsx


var info_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", style: { fill: "none" }, stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M12 16V11M12 9.5V8M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z", strokeLinejoin: "round", vectorEffect: "non-scaling-stroke" }) });

//# sourceMappingURL=info.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/keyboard-return.mjs"
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/keyboard-return.mjs ***!
  \********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ keyboard_return_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/keyboard-return.tsx


var keyboard_return_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "m6.734 16.106 2.176-2.38-1.093-1.028-3.846 4.158 3.846 4.158 1.093-1.028-2.176-2.38h2.811c1.125 0 2.25.03 3.374 0 1.428-.001 3.362-.25 4.963-1.277 1.66-1.065 2.868-2.906 2.868-5.859 0-2.479-1.327-4.896-3.65-5.93-1.82-.813-3.044-.8-4.806-.788l-.567.002v1.5c.184 0 .368 0 .553-.002 1.82-.007 2.704-.014 4.21.657 1.854.827 2.76 2.657 2.76 4.561 0 2.472-.973 3.824-2.178 4.596-1.258.807-2.864 1.04-4.163 1.04h-.02c-1.115.03-2.229 0-3.344 0H6.734Z" }) });

//# sourceMappingURL=keyboard-return.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/level-up.mjs"
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/level-up.mjs ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ level_up_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/level-up.tsx


var level_up_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "m13.53 8.47-1.06 1.06-2.72-2.72V12h-1.5V6.81L5.53 9.53 4.47 8.47 9 3.94l4.53 4.53Zm-1.802 7.968c1.307.697 3.235.812 5.772.812v1.5c-2.463 0-4.785-.085-6.478-.988a4.721 4.721 0 0 1-2.07-2.13C8.48 14.67 8.25 13.471 8.25 12h1.5c0 1.328.208 2.28.548 2.969.332.675.81 1.138 1.43 1.47Z" }) });

//# sourceMappingURL=level-up.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/link-off.mjs"
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link-off.mjs ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ link_off_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/link-off.tsx


var link_off_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", style: { fill: "none" }, stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M9.5 12H12.5M10 7.75H8.25C5.90279 7.75 4 9.65279 4 12C4 14.3472 5.90279 16.25 8.25 16.25H10.2333M14 16.25H15.75C18.0972 16.25 20 14.3472 20 12C20 9.65279 18.0972 7.75 15.75 7.75H14.7667M8.5 19.5L16.5 4.5", strokeLinejoin: "round", vectorEffect: "non-scaling-stroke" }) });

//# sourceMappingURL=link-off.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/link.mjs"
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link.mjs ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ link_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/link.tsx


var link_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", style: { fill: "none" }, stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M9.5 12L14.5 12M10 7.75H8.25C5.90279 7.75 4 9.65279 4 12C4 14.3472 5.90279 16.25 8.25 16.25H10M14 16.25H15.75C18.0972 16.25 20 14.3472 20 12C20 9.65279 18.0972 7.75 15.75 7.75L14 7.75", vectorEffect: "non-scaling-stroke" }) });

//# sourceMappingURL=link.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/paragraph.mjs"
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/paragraph.mjs ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ paragraph_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/paragraph.tsx


var paragraph_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", style: { fill: "none" }, stroke: "currentColor", strokeWidth: "1.5", children: [
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M10.75 20V4.75L14.75 4.75M14.75 20V4.75M14.75 4.75H18.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M5.75 9C5.75 11.3472 7.65279 13.25 10 13.25H10.75V4.75H10C7.65279 4.75 5.75 6.65279 5.75 9Z", fill: "currentColor", vectorEffect: "non-scaling-stroke" })
] });

//# sourceMappingURL=paragraph.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/pencil.mjs"
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/pencil.mjs ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pencil_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/pencil.tsx


var pencil_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z" }) });

//# sourceMappingURL=pencil.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/title.mjs"
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/title.mjs ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ title_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/title.tsx


var title_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "m4 5.5h2v6.5h1.5v-6.5h2v-1.5h-5.5zm16 10.5h-16v-1.5h16zm-7 4h-9v-1.5h9z" }) });

//# sourceMappingURL=title.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/tool.mjs"
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/tool.mjs ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tool_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/tool.tsx


var tool_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M14.103 7.128l2.26-2.26a4 4 0 00-5.207 4.804L5.828 15a2 2 0 102.828 2.828l5.329-5.328a4 4 0 004.804-5.208l-2.261 2.26-1.912-.512-.513-1.912zm-7.214 9.64a.5.5 0 11.707-.707.5.5 0 01-.707.707z" }) });

//# sourceMappingURL=tool.mjs.map


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sidebar_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar-plugin */ "./src/js/sidebar-plugin.js");
/* Core dependencies */


/* Internal Dependencies */

(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('cleanup-utilities-sidebar', {
  render: _sidebar_plugin__WEBPACK_IMPORTED_MODULE_1__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map