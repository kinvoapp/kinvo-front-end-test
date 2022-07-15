import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _span, _span2, _span3, _span4;

import * as React from 'react';
import { useSlotProps } from '../utils';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var LastPageIconDefault = function LastPageIconDefault() {
  return _span || (_span = /*#__PURE__*/_jsx("span", {
    children: '⇾|'
  }));
};

var FirstPageIconDefault = function FirstPageIconDefault() {
  return _span2 || (_span2 = /*#__PURE__*/_jsx("span", {
    children: '|⇽'
  }));
};

var NextPageIconDefault = function NextPageIconDefault() {
  return _span3 || (_span3 = /*#__PURE__*/_jsx("span", {
    children: '⇾'
  }));
};

var BackPageIconDefault = function BackPageIconDefault() {
  return _span4 || (_span4 = /*#__PURE__*/_jsx("span", {
    children: '⇽'
  }));
};

function defaultGetAriaLabel(type) {
  return "Go to ".concat(type, " page");
}
/**
 * @ignore - internal component.
 */


var TablePaginationActionsUnstyled = /*#__PURE__*/React.forwardRef(function TablePaginationActionsUnstyled(props, ref) {
  var _ref, _components$Root, _components$FirstButt, _components$LastButto, _components$NextButto, _components$BackButto, _components$LastPageI, _components$FirstPage, _components$NextPageI, _components$BackPageI;

  var component = props.component,
      _props$components = props.components,
      components = _props$components === void 0 ? {} : _props$components,
      _props$componentsProp = props.componentsProps,
      componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
      count = props.count,
      _props$getItemAriaLab = props.getItemAriaLabel,
      getItemAriaLabel = _props$getItemAriaLab === void 0 ? defaultGetAriaLabel : _props$getItemAriaLab,
      onPageChange = props.onPageChange,
      page = props.page,
      rowsPerPage = props.rowsPerPage,
      _props$showFirstButto = props.showFirstButton,
      showFirstButton = _props$showFirstButto === void 0 ? false : _props$showFirstButto,
      _props$showLastButton = props.showLastButton,
      showLastButton = _props$showLastButton === void 0 ? false : _props$showLastButton,
      direction = props.direction,
      ownerStateProp = props.ownerState,
      other = _objectWithoutProperties(props, ["component", "components", "componentsProps", "count", "getItemAriaLabel", "onPageChange", "page", "rowsPerPage", "showFirstButton", "showLastButton", "direction", "ownerState"]);

  var ownerState = props;

  var handleFirstPageButtonClick = function handleFirstPageButtonClick(event) {
    onPageChange(event, 0);
  };

  var handleBackButtonClick = function handleBackButtonClick(event) {
    onPageChange(event, page - 1);
  };

  var handleNextButtonClick = function handleNextButtonClick(event) {
    onPageChange(event, page + 1);
  };

  var handleLastPageButtonClick = function handleLastPageButtonClick(event) {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  var Root = (_ref = (_components$Root = components.Root) != null ? _components$Root : component) != null ? _ref : 'div';
  var rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: ref
    },
    ownerState: ownerState
  });
  var FirstButton = (_components$FirstButt = components.FirstButton) != null ? _components$FirstButt : 'button';
  var firstButtonProps = useSlotProps({
    elementType: FirstButton,
    externalSlotProps: componentsProps.firstButton,
    additionalProps: {
      onClick: handleFirstPageButtonClick,
      disabled: page === 0,
      'aria-label': getItemAriaLabel('first', page),
      title: getItemAriaLabel('first', page)
    },
    ownerState: ownerState
  });
  var LastButton = (_components$LastButto = components.LastButton) != null ? _components$LastButto : 'button';
  var lastButtonProps = useSlotProps({
    elementType: LastButton,
    externalSlotProps: componentsProps.lastButton,
    additionalProps: {
      onClick: handleLastPageButtonClick,
      disabled: page >= Math.ceil(count / rowsPerPage) - 1,
      'aria-label': getItemAriaLabel('last', page),
      title: getItemAriaLabel('last', page)
    },
    ownerState: ownerState
  });
  var NextButton = (_components$NextButto = components.NextButton) != null ? _components$NextButto : 'button';
  var nextButtonProps = useSlotProps({
    elementType: NextButton,
    externalSlotProps: componentsProps.nextButton,
    additionalProps: {
      onClick: handleNextButtonClick,
      disabled: count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false,
      'aria-label': getItemAriaLabel('next', page),
      title: getItemAriaLabel('next', page)
    },
    ownerState: ownerState
  });
  var BackButton = (_components$BackButto = components.BackButton) != null ? _components$BackButto : 'button';
  var backButtonProps = useSlotProps({
    elementType: BackButton,
    externalSlotProps: componentsProps.backButton,
    additionalProps: {
      onClick: handleBackButtonClick,
      disabled: page === 0,
      'aria-label': getItemAriaLabel('previous', page),
      title: getItemAriaLabel('previous', page)
    },
    ownerState: ownerState
  });
  var LastPageIcon = (_components$LastPageI = components.LastPageIcon) != null ? _components$LastPageI : LastPageIconDefault;
  var FirstPageIcon = (_components$FirstPage = components.FirstPageIcon) != null ? _components$FirstPage : FirstPageIconDefault;
  var NextPageIcon = (_components$NextPageI = components.NextPageIcon) != null ? _components$NextPageI : NextPageIconDefault;
  var BackPageIcon = (_components$BackPageI = components.BackPageIcon) != null ? _components$BackPageI : BackPageIconDefault;
  return /*#__PURE__*/_jsxs(Root, _extends({}, rootProps, {
    children: [showFirstButton && /*#__PURE__*/_jsx(FirstButton, _extends({}, firstButtonProps, {
      children: direction === 'rtl' ? /*#__PURE__*/_jsx(LastPageIcon, {}) : /*#__PURE__*/_jsx(FirstPageIcon, {})
    })), /*#__PURE__*/_jsx(BackButton, _extends({}, backButtonProps, {
      children: direction === 'rtl' ? /*#__PURE__*/_jsx(NextPageIcon, {}) : /*#__PURE__*/_jsx(BackPageIcon, {})
    })), /*#__PURE__*/_jsx(NextButton, _extends({}, nextButtonProps, {
      children: direction === 'rtl' ? /*#__PURE__*/_jsx(BackPageIcon, {}) : /*#__PURE__*/_jsx(NextPageIcon, {})
    })), showLastButton && /*#__PURE__*/_jsx(LastButton, _extends({}, lastButtonProps, {
      children: direction === 'rtl' ? /*#__PURE__*/_jsx(FirstPageIcon, {}) : /*#__PURE__*/_jsx(LastPageIcon, {})
    }))]
  }));
});
export default TablePaginationActionsUnstyled;