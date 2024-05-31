'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var tokens = require('@thumbtack/thumbprint-tokens');
var canUseDom = require('../../utils/can-use-dom.js');
var useCloseOnEscape = require('../../utils/use-close-on-escape.js');
var ConditionalPortal = require('../../utils/ConditionalPortal.js');
var reactPopper = require('react-popper');
var assign = _interopDefault(require('lodash/assign'));
var styles = _interopDefault(require('./index.module.scss'));

// tooltips from flickering in and out when the user moves their cursor rapidly over the launcher.
// Higher values are more likely to prevent flickering, but increased the perceived lag when the
// user _is_ trying to open the tooltip.

var OPEN_TIMEOUT = 100;

var WhenChildrenChange =
/*#__PURE__*/
function (_React$Component) {
  _rollupPluginBabelHelpers.inherits(WhenChildrenChange, _React$Component);

  function WhenChildrenChange() {
    _rollupPluginBabelHelpers.classCallCheck(this, WhenChildrenChange);

    return _rollupPluginBabelHelpers.possibleConstructorReturn(this, _rollupPluginBabelHelpers.getPrototypeOf(WhenChildrenChange).apply(this, arguments));
  }

  _rollupPluginBabelHelpers.createClass(WhenChildrenChange, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          children = _this$props.children,
          doProp = _this$props.do;

      if (children !== prevProps.children) {
        doProp();
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children;
    }
  }]);

  return WhenChildrenChange;
}(React__default.Component);

var doesWindowSupportTouch = function doesWindowSupportTouch() {
  return typeof window !== 'undefined' && 'ontouchstart' in window;
};

function Tooltip(_ref) {
  var _ref$container = _ref.container,
      container = _ref$container === void 0 ? 'body' : _ref$container,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'top' : _ref$position,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'dark' : _ref$theme,
      zIndex = _ref.zIndex,
      text = _ref.text,
      children = _ref.children,
      _ref$closeDelayLength = _ref.closeDelayLength,
      closeDelayLength = _ref$closeDelayLength === void 0 ? 200 : _ref$closeDelayLength;

  var _useState = React.useState(false),
      _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = React.useState(undefined),
      _useState4 = _rollupPluginBabelHelpers.slicedToArray(_useState3, 2),
      openTimeout = _useState4[0],
      setOpenTimeout = _useState4[1];

  var _useState5 = React.useState(undefined),
      _useState6 = _rollupPluginBabelHelpers.slicedToArray(_useState5, 2),
      closeTimeout = _useState6[0],
      setCloseTimeout = _useState6[1];

  var show = function show() {
    if (closeTimeout) {
      window.clearTimeout(closeTimeout);
    }

    setIsOpen(true);
  };

  var hide = function hide() {
    setIsOpen(false);
  };

  var onFocus = function onFocus() {
    if (!doesWindowSupportTouch()) {
      show();
    }
  };

  var onMouseEnter = function onMouseEnter() {
    if (!doesWindowSupportTouch()) {
      // Trigger the tooltip to show after a small delay to prevent flickering.
      setOpenTimeout(window.setTimeout(show, OPEN_TIMEOUT));
    }
  };

  var onMouseLeave = function onMouseLeave() {
    // By default this adds a small delay before closing to improve the user experience.
    setCloseTimeout(window.setTimeout(hide, closeDelayLength));

    if (openTimeout) {
      // When the mouse leaves we should clear any in-progress open timeouts, to prevent the
      // tooltip from showing after the user is no longer hovering over the launcher.
      clearTimeout(openTimeout);
    }
  };

  var onClick = function onClick() {
    if (doesWindowSupportTouch()) {
      if (isOpen) {
        hide();
      } else {
        show();
      }
    }
  };

  useCloseOnEscape.default(hide, canUseDom.default); // Appends the tooltip right before `</body>` when true.

  var shouldDisplace = container === 'body';
  return React__default.createElement(reactPopper.Manager, null, React__default.createElement(reactPopper.Reference, null, function (_ref2) {
    var ref = _ref2.ref;
    return children({
      ref: ref,
      onMouseEnter: onMouseEnter,
      onFocus: onFocus,
      onMouseLeave: onMouseLeave,
      onBlur: hide,
      onClick: onClick,
      ariaLabel: text
    });
  }), React__default.createElement(ConditionalPortal.default, {
    shouldDisplace: shouldDisplace
  }, canUseDom.default && isOpen && React__default.createElement(reactPopper.Popper, {
    placement: position,
    modifiers: {
      offset: {
        offset: "0, ".concat(tokens.tpSpace3)
      },
      preventOverflow: {
        boundariesElement: 'window'
      }
    },
    positionFixed: false
  }, function (_ref3) {
    var _classNames, _classNames2;

    var ref = _ref3.ref,
        style = _ref3.style,
        placement = _ref3.placement,
        arrowProps = _ref3.arrowProps,
        scheduleUpdate = _ref3.scheduleUpdate;
    return (// This function is documented within `react-popper`:
      // https://github.com/FezVrasta/react-popper
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
      React__default.createElement("div", {
        role: "tooltip",
        "data-test-id": "tooltip",
        className: classNames((_classNames = {}, _rollupPluginBabelHelpers.defineProperty(_classNames, styles.tooltip, true), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.tooltipDark, theme === 'dark'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.tooltipLight, theme === 'light'), _classNames)),
        ref: ref,
        style: assign({}, style, {
          zIndex: zIndex
        }),
        "data-placement": placement,
        onMouseEnter: show,
        onMouseLeave: onMouseLeave,
        onClick: function onClick(event) {
          // This is to ensure the default event propagation is stopped when the tooltip
          // is created by portals.
          // https://reactjs.org/docs/portals.html#event-bubbling-through-portals
          // https://github.com/facebook/react/issues/11387
          if (shouldDisplace) {
            event.stopPropagation();
          } // This is to ensure the tooltip would be closed if it's clicked in touch screen
          // devices so it could easier to be toggled off.


          if (doesWindowSupportTouch()) {
            hide();
          }
        }
      }, React__default.createElement(WhenChildrenChange, {
        do: scheduleUpdate
      }, text), React__default.createElement("div", {
        className: classNames((_classNames2 = {}, _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.nubbin, true), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.nubbinTop, placement === 'top'), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.nubbinBottom, placement === 'bottom'), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.nubbinDark, theme === 'dark'), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.nubbinLight, theme === 'light'), _classNames2)),
        ref: arrowProps.ref,
        style: arrowProps.style
      }))
    );
  })));
}

exports.default = Tooltip;
//# sourceMappingURL=index.js.map
