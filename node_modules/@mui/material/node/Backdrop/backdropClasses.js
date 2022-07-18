"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getBackdropUtilityClass = getBackdropUtilityClass;

var _base = require("@mui/base");

function getBackdropUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiBackdrop', slot);
}

const backdropClasses = (0, _base.generateUtilityClasses)('MuiBackdrop', ['root', 'invisible']);
var _default = backdropClasses;
exports.default = _default;