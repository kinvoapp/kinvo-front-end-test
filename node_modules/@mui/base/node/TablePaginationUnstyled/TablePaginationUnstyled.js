"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("@mui/utils");

var _utils2 = require("../utils");

var _composeClasses = _interopRequireDefault(require("../composeClasses"));

var _isHostComponent = _interopRequireDefault(require("../utils/isHostComponent"));

var _TablePaginationActionsUnstyled = _interopRequireDefault(require("./TablePaginationActionsUnstyled"));

var _tablePaginationUnstyledClasses = require("./tablePaginationUnstyledClasses");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["component", "components", "componentsProps", "colSpan", "count", "getItemAriaLabel", "labelDisplayedRows", "labelId", "labelRowsPerPage", "onPageChange", "onRowsPerPageChange", "page", "rowsPerPage", "rowsPerPageOptions", "selectId"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function defaultLabelDisplayedRows({
  from,
  to,
  count
}) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}

function defaultGetAriaLabel(type) {
  return `Go to ${type} page`;
}

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
    toolbar: ['toolbar'],
    spacer: ['spacer'],
    selectLabel: ['selectLabel'],
    select: ['select'],
    input: ['input'],
    selectIcon: ['selectIcon'],
    menuItem: ['menuItem'],
    displayedRows: ['displayedRows'],
    actions: ['actions']
  };
  return (0, _composeClasses.default)(slots, _tablePaginationUnstyledClasses.getTablePaginationUnstyledUtilityClass, {});
};
/**
 * A pagination for tables.
 *
 * Demos:
 *
 * - [Table pagination](https://mui.com/base/react-table-pagination/)
 *
 * API:
 *
 * - [TablePaginationUnstyled API](https://mui.com/base/api/table-pagination-unstyled/)
 */


const TablePaginationUnstyled = /*#__PURE__*/React.forwardRef(function TablePaginationUnstyled(props, ref) {
  var _ref, _components$Select, _components$Actions, _components$MenuItem, _components$SelectLab, _components$Displayed, _components$Toolbar, _components$Spacer;

  const {
    component,
    components = {},
    componentsProps = {},
    colSpan: colSpanProp,
    count,
    getItemAriaLabel = defaultGetAriaLabel,
    labelDisplayedRows = defaultLabelDisplayedRows,
    labelId: labelIdProp,
    labelRowsPerPage = 'Rows per page:',
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    rowsPerPageOptions = [10, 25, 50, 100],
    selectId: selectIdProp
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses();
  let colSpan;

  if (!component || component === 'td' || !(0, _isHostComponent.default)(component)) {
    colSpan = colSpanProp || 1000; // col-span over everything
  }

  const getLabelDisplayedRowsTo = () => {
    if (count === -1) {
      return (page + 1) * rowsPerPage;
    }

    return rowsPerPage === -1 ? count : Math.min(count, (page + 1) * rowsPerPage);
  };

  const selectId = (0, _utils.unstable_useId)(selectIdProp);
  const labelId = (0, _utils.unstable_useId)(labelIdProp);
  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : 'td';
  const rootProps = (0, _utils2.useSlotProps)({
    elementType: Root,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      colSpan,
      ref
    },
    ownerState,
    className: classes.root
  });
  const Select = (_components$Select = components.Select) != null ? _components$Select : 'select';
  const selectProps = (0, _utils2.useSlotProps)({
    elementType: Select,
    externalSlotProps: componentsProps.select,
    additionalProps: {
      value: rowsPerPage,
      id: selectId,
      onChange: e => onRowsPerPageChange && onRowsPerPageChange(e),
      'aria-label': rowsPerPage.toString(),
      'aria-labelledby': [labelId, selectId].filter(Boolean).join(' ') || undefined
    },
    ownerState,
    className: classes.select
  });
  const Actions = (_components$Actions = components.Actions) != null ? _components$Actions : _TablePaginationActionsUnstyled.default;
  const actionsProps = (0, _utils2.useSlotProps)({
    elementType: Actions,
    externalSlotProps: componentsProps.actions,
    additionalProps: {
      page,
      rowsPerPage,
      count,
      onPageChange,
      getItemAriaLabel
    },
    ownerState,
    className: classes.actions
  });
  const MenuItem = (_components$MenuItem = components.MenuItem) != null ? _components$MenuItem : 'option';
  const menuItemProps = (0, _utils2.useSlotProps)({
    elementType: MenuItem,
    externalSlotProps: componentsProps.menuItem,
    additionalProps: {
      value: undefined
    },
    ownerState,
    className: classes.menuItem
  });
  const SelectLabel = (_components$SelectLab = components.SelectLabel) != null ? _components$SelectLab : 'p';
  const selectLabelProps = (0, _utils2.useSlotProps)({
    elementType: SelectLabel,
    externalSlotProps: componentsProps.selectLabel,
    additionalProps: {
      id: labelId
    },
    ownerState,
    className: classes.selectLabel
  });
  const DisplayedRows = (_components$Displayed = components.DisplayedRows) != null ? _components$Displayed : 'p';
  const displayedRowsProps = (0, _utils2.useSlotProps)({
    elementType: DisplayedRows,
    externalSlotProps: componentsProps.displayedRows,
    ownerState,
    className: classes.displayedRows
  });
  const Toolbar = (_components$Toolbar = components.Toolbar) != null ? _components$Toolbar : 'div';
  const toolbarProps = (0, _utils2.useSlotProps)({
    elementType: Toolbar,
    externalSlotProps: componentsProps.toolbar,
    ownerState,
    className: classes.toolbar
  });
  const Spacer = (_components$Spacer = components.Spacer) != null ? _components$Spacer : 'div';
  const spacerProps = (0, _utils2.useSlotProps)({
    elementType: Spacer,
    externalSlotProps: componentsProps.spacer,
    ownerState,
    className: classes.spacer
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, (0, _extends2.default)({}, rootProps, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(Toolbar, (0, _extends2.default)({}, toolbarProps, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Spacer, (0, _extends2.default)({}, spacerProps)), rowsPerPageOptions.length > 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(SelectLabel, (0, _extends2.default)({}, selectLabelProps, {
        children: labelRowsPerPage
      })), rowsPerPageOptions.length > 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(Select, (0, _extends2.default)({}, selectProps, {
        children: rowsPerPageOptions.map(rowsPerPageOption => /*#__PURE__*/(0, React.createElement)(MenuItem, (0, _extends2.default)({}, menuItemProps, {
          key: typeof rowsPerPageOption !== 'number' && rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption,
          value: typeof rowsPerPageOption !== 'number' && rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption
        }), typeof rowsPerPageOption !== 'number' && rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption))
      })), /*#__PURE__*/(0, _jsxRuntime.jsx)(DisplayedRows, (0, _extends2.default)({}, displayedRowsProps, {
        children: labelDisplayedRows({
          from: count === 0 ? 0 : page * rowsPerPage + 1,
          to: getLabelDisplayedRowsTo(),
          count: count === -1 ? -1 : count,
          page
        })
      })), /*#__PURE__*/(0, _jsxRuntime.jsx)(Actions, (0, _extends2.default)({}, actionsProps))]
    }))
  }));
});
process.env.NODE_ENV !== "production" ? TablePaginationUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  children: _propTypes.default.node,

  /**
   * @ignore
   */
  colSpan: _propTypes.default.number,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,

  /**
   * The components used for each slot inside the TablePagination.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: _propTypes.default.shape({
    Actions: _propTypes.default.elementType,
    DisplayedRows: _propTypes.default.elementType,
    MenuItem: _propTypes.default.elementType,
    Root: _propTypes.default.elementType,
    Select: _propTypes.default.elementType,
    SelectLabel: _propTypes.default.elementType,
    Spacer: _propTypes.default.elementType,
    Toolbar: _propTypes.default.elementType
  }),

  /**
   * The props used for each slot inside the TablePagination.
   * @default {}
   */
  componentsProps: _propTypes.default.shape({
    actions: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    displayedRows: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    menuItem: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    root: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    select: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    selectLabel: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    spacer: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    toolbar: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
  }),

  /**
   * The total number of rows.
   *
   * To enable server side pagination for an unknown number of items, provide -1.
   */
  count: _propTypes.default.number.isRequired,

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @param {string} type The link or button type to format ('first' | 'last' | 'next' | 'previous').
   * @returns {string}
   * @default function defaultGetAriaLabel(type: ItemAriaLabelType) {
   *   return `Go to ${type} page`;
   * }
   */
  getItemAriaLabel: _propTypes.default.func,

  /**
   * Customize the displayed rows label. Invoked with a `{ from, to, count, page }`
   * object.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default function defaultLabelDisplayedRows({ from, to, count }: LabelDisplayedRowsArgs) {
   *   return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
   * }
   */
  labelDisplayedRows: _propTypes.default.func,

  /**
   * Id of the label element within the pagination.
   */
  labelId: _propTypes.default.string,

  /**
   * Customize the rows per page label.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Rows per page:'
   */
  labelRowsPerPage: _propTypes.default.node,

  /**
   * Callback fired when the page is changed.
   *
   * @param {React.MouseEvent<HTMLButtonElement> | null} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange: _propTypes.default.func.isRequired,

  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   */
  onRowsPerPageChange: _propTypes.default.func,

  /**
   * The zero-based index of the current page.
   */
  page: (0, _utils.chainPropTypes)(_utils.integerPropType.isRequired, props => {
    const {
      count,
      page,
      rowsPerPage
    } = props;

    if (count === -1) {
      return null;
    }

    const newLastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);

    if (page < 0 || page > newLastPage) {
      return new Error('MUI: The page prop of a TablePaginationUnstyled is out of range ' + `(0 to ${newLastPage}, but page is ${page}).`);
    }

    return null;
  }),

  /**
   * The number of rows per page.
   *
   * Set -1 to display all the rows.
   */
  rowsPerPage: _utils.integerPropType.isRequired,

  /**
   * Customizes the options of the rows per page select field. If less than two options are
   * available, no select field will be displayed.
   * Use -1 for the value with a custom label to show all the rows.
   * @default [10, 25, 50, 100]
   */
  rowsPerPageOptions: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.number.isRequired
  })]).isRequired),

  /**
   * Id of the select element within the pagination.
   */
  selectId: _propTypes.default.string
} : void 0;
var _default = TablePaginationUnstyled;
exports.default = _default;