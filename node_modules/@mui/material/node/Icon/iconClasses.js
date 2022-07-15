"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getIconUtilityClass = getIconUtilityClass;

var _base = require("@mui/base");

function getIconUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiIcon', slot);
}

const iconClasses = (0, _base.generateUtilityClasses)('MuiIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);
var _default = iconClasses;
exports.default = _default;