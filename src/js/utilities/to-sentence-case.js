/* To Sentence Case, forked from © 2018 David Gouch | https://github.com/gouch/to-title-case */
/*
 * Changes made by me:
 * - Split on ">" to handle words after an opening HTML tag
 * - Test for first word, even when there's markup
 * - Detect all-caps strings (ignoring HTML) and convert to lowercase before applying title case
 */

// eslint-disable-next-line no-extend-native
export default function toSentenceCase(string) {
  'use strict'
  var alphanumericPattern = /([A-Za-z0-9\u00C0-\u00FF])/
  
  /* Change: Include ">" to split on closing HTML tags */
  var wordSeparators = /([> :–—-])/

  /* Change: Detect whether string is all caps (not including HTML) */
  var allUpper = string.replace(/<[^>]*>/g, ' ').search(/[a-z]/g) === -1;
  if (allUpper) {
    string = string.toLowerCase();
  }

  let didFirstWord = false;

  return string.split(wordSeparators)
    .map(function (current, index, array) {
      /* Ignore intentional capitalization */
      if (current.substr(1).search(/[A-Z]|\../) > -1) {
        didFirstWord = true;
        return current
      }

      /* Capitalize the first letter */
      if( !didFirstWord ) {
        if (current.substr(0, 1).search(alphanumericPattern) > -1) {
          didFirstWord = true;
        }
        return current.replace(alphanumericPattern, function (match) {
          return match.toUpperCase()
        })
      } else {
        return current.toLowerCase();
      }
    })
    .join('')
}