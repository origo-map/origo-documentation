'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mixin = require('react-pure-render/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RoundedToggle = _react2.default.createClass({
  displayName: 'RoundedToggle',

  mixins: [_mixin2.default],
  propTypes: {
    options: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string).isRequired,
    active: _react2.default.PropTypes.string.isRequired,
    onChange: _react2.default.PropTypes.func.isRequired
  },
  render: function render() {
    var _this = this;

    var _props = this.props,
        options = _props.options,
        active = _props.active;

    return _react2.default.createElement(
      'div',
      { className: 'rounded-toggle inline short' },
      options.map(function (option) {
        return _react2.default.createElement(RoundedToggleOption, {
          key: option,
          option: option,
          onClick: _this.props.onChange,
          className: 'strong ' + (option === active ? 'active' : '') });
      })
    );
  }
});

var RoundedToggleOption = _react2.default.createClass({
  displayName: 'RoundedToggleOption',

  mixins: [_mixin2.default],
  propTypes: {
    option: _react2.default.PropTypes.string.isRequired,
    className: _react2.default.PropTypes.string.isRequired,
    onClick: _react2.default.PropTypes.func.isRequired
  },
  onClick: function onClick() {
    this.props.onClick(this.props.option);
  },
  render: function render() {
    var _props2 = this.props,
        className = _props2.className,
        option = _props2.option;

    return _react2.default.createElement(
      'a',
      {
        onClick: this.onClick,
        className: className },
      option
    );
  }
});

module.exports = RoundedToggle;