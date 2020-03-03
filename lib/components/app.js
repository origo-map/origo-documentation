'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _navigation = require('./navigation');

var _navigation2 = _interopRequireDefault(_navigation);

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

var _rounded_toggle = require('./rounded_toggle');

var _rounded_toggle2 = _interopRequireDefault(_rounded_toggle);

var _mixin = require('react-pure-render/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _githubSlugger = require('github-slugger');

var _githubSlugger2 = _interopRequireDefault(_githubSlugger);

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _custom = require('../../custom');

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var slugger = new _githubSlugger2.default();
var slug = function slug(title) {
  slugger.reset();return slugger.slug(title);
};

var languageOptions = ['JavaScript'];
var defaultLanguage = 'JavaScript';

var debouncedReplaceState = (0, _lodash2.default)(function (hash) {
  window.history.replaceState('', '', hash);
}, 100);

var App = _react2.default.createClass({
  displayName: 'App',

  mixins: [_mixin2.default],
  propTypes: {
    content: _react2.default.PropTypes.string.isRequired,
    ast: _react2.default.PropTypes.object.isRequired
  },
  getInitialState: function getInitialState() {
    var _this = this;

    var active = 'Introduction';

    if (process.browser) {
      var hash = window.location.hash.split('#').pop();
      var languageFromURL = _querystring2.default.parse(window.location.search.substring(1)).language;
      var language = languageOptions.includes(languageFromURL) ? languageFromURL : defaultLanguage;
      var mqls = {
        desktop: window.matchMedia('(min-width: 961px)'),
        tablet: window.matchMedia('(max-width: 960px)'),
        mobile: window.matchMedia('(max-width: 640px)')
      };
      Object.keys(mqls).forEach(function (key) {
        mqls[key].addListener(_this.mediaQueryChanged);
      });
      if (hash) {
        var headingForHash = this.props.ast.children.filter(function (child) {
          return child.type === 'heading';
        }).find(function (heading) {
          return heading.data.id === hash;
        });
        if (headingForHash) {
          active = headingForHash.children[0].value;
        }
      }
      return {
        // media queryMatches
        mqls: mqls,
        // object of currently matched queries, like { desktop: true }
        queryMatches: {},
        language: language,
        columnMode: 2,
        activeSection: active,
        // for the toggle-able navigation on mobile
        showNav: false
      };
    } else {
      return {
        mqls: {
          desktop: true
        },
        queryMatches: {
          desktop: true
        },
        language: defaultLanguage,
        activeSection: '',
        showNav: false
      };
    }
  },
  toggleNav: function toggleNav() {
    this.setState({ showNav: !this.state.showNav });
  },
  componentDidMount: function componentDidMount() {
    this.mediaQueryChanged();
    this.onScroll = (0, _lodash2.default)(this._onScroll, 100);
    document.addEventListener('scroll', this.onScroll);
    this._onScroll();
  },
  _onScroll: function _onScroll() {
    var sections = document.querySelectorAll('div.section');
    if (!sections.length) return;
    for (var i = 0; i < sections.length; i++) {
      var rect = sections[i].getBoundingClientRect();
      if (rect.bottom > 0) {
        this.setState({
          activeSection: sections[i].getAttribute('data-title')
        });
        return;
      }
    }
  },
  mediaQueryChanged: function mediaQueryChanged() {
    this.setState({
      queryMatches: {
        mobile: this.state.mqls.mobile.matches,
        tablet: this.state.mqls.tablet.matches,
        desktop: this.state.mqls.desktop.matches
      }
    });
  },
  componentWillUnmount: function componentWillUnmount() {
    var _this2 = this;

    Object.keys(this.state.mqls).forEach(function (key) {
      return _this2.state.mqls[key].removeListener(_this2.mediaQueryChanged);
    });
    document.body.removeEventListener('scroll', this.onScroll);
  },
  onChangeLanguage: function onChangeLanguage(language) {
    this.setState({ language: language }, function () {
      if (window.history) {
        window.history.pushState(null, null, '?' + _querystring2.default.stringify({ language: language }) + window.location.hash);
      }
    });
  },
  componentDidUpdate: function componentDidUpdate(_, prevState) {
    if (prevState.activeSection !== this.state.activeSection) {
      // when the section changes, replace the hash
      debouncedReplaceState('#' + slug(this.state.activeSection));
    } else if (prevState.language !== this.state.language || prevState.columnMode !== this.state.columnMode) {
      // when the language changes, use the hash to set scroll
      window.location.hash = window.location.hash;
    }
  },
  navigationItemClicked: function navigationItemClicked(activeSection) {
    var _this3 = this;

    setTimeout(function () {
      _this3.setState({ activeSection: activeSection });
    }, 10);
    if (!this.state.queryMatches.desktop) {
      this.toggleNav();
    }
  },
  toggleColumnMode: function toggleColumnMode() {
    this.setState({
      columnMode: this.state.columnMode === 1 ? 2 : 1
    });
  },
  render: function render() {
    var ast = this.props.ast;
    var _state = this.state,
        activeSection = _state.activeSection,
        queryMatches = _state.queryMatches,
        showNav = _state.showNav,
        columnMode = _state.columnMode;

    var col1 = columnMode === 1 && queryMatches.desktop;
    return _react2.default.createElement(
      'div',
      { className: 'container unlimiter' },
      !col1 && !queryMatches.mobile && _react2.default.createElement(
        'div',
        { className: 'fixed-top fixed-right ' + (queryMatches.desktop && 'space-left16') },
        _react2.default.createElement('div', { className: 'fill-light col6 pin-right' })
      ),
      queryMatches.desktop && _react2.default.createElement(
        'div',
        { className: 'space-top5 scroll-styled pad1 width16 sidebar fixed-left fill-dark dark' },
        _react2.default.createElement(_navigation2.default, {
          navigationItemClicked: this.navigationItemClicked,
          activeSection: activeSection,
          ast: ast })
      ),
      _react2.default.createElement(
        'div',
        { className: '' + (queryMatches.desktop && 'space-left16') },
        _react2.default.createElement(
          'div',
          { className: col1 ? 'col8 margin1' : '' },
          _react2.default.createElement(_content2.default, {
            leftClassname: col1 ? 'space-bottom4 pad2x prose clip' : 'space-bottom8 col6 pad2x prose clip',
            rightClassname: col1 ? 'space-bottom2 pad2 prose clip fill-light space-top5' : 'space-bottom4 col6 pad2 prose clip fill-light space-top5',
            ast: ast,
            language: this.state.language.toLowerCase() })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'fixed-top ' + (queryMatches.desktop && 'space-left16') },
        _react2.default.createElement(
          'div',
          { className: 'events fill-light bottom-shadow pad1 ' + (col1 ? '' : 'col6 pin-topright') + ' ' + (queryMatches.tablet ? 'dark fill-blue' : '') + ' ' + (queryMatches.mobile ? 'space-top5 fixed-topright' : '') },
          _react2.default.createElement(
            'div',
            { className: 'space-right1 small quiet inline' },
            'Show examples in:'
          ),
          _react2.default.createElement(_rounded_toggle2.default, {
            options: languageOptions,
            onChange: this.onChangeLanguage,
            active: this.state.language }),
          _react2.default.createElement(
            'div',
            { className: 'fr pad0' },
            queryMatches.desktop ? _react2.default.createElement('a', {
              title: 'Display as ' + (col1 ? 2 : 1) + ' column',
              onClick: this.toggleColumnMode,
              style: { cursor: 'pointer' },
              className: 'icon quiet caret-' + (col1 ? 'right' : 'left') + ' pad0 fill-darken0 round' }) : null
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'fill-dark dark bottom-shadow fixed-top ' + (queryMatches.tablet ? 'pad1y pad2x col6' : 'pad0 width16') },
        _react2.default.createElement('a', { href: '#origo-map', className: 'active space-top1 space-left1 pin-topleft icon round dark pad0 ' + _custom.brandClasses }),
        _react2.default.createElement(
          'div',
          { className: 'strong small pad0\n          ' + (queryMatches.mobile ? 'space-left3' : '') + '\n          ' + (queryMatches.tablet ? 'space-left2' : 'space-left4 line-height15') },
          queryMatches.desktop ? _custom.brandNames.desktop : queryMatches.mobile ? _custom.brandNames.mobile : _custom.brandNames.tablet
        ),
        queryMatches.tablet && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            {
              onClick: this.toggleNav,
              className: 'short quiet pin-topright button rcon ' + (showNav ? 'caret-up' : 'caret-down') + ' space-right1 space-top1' },
            _react2.default.createElement(
              'span',
              { className: 'micro' },
              activeSection
            )
          ),
          showNav && _react2.default.createElement(
            'div',
            {
              className: 'fixed-left keyline-top fill-dark pin-left col6 pad2 scroll-styled space-top5' },
            _react2.default.createElement(_navigation2.default, {
              navigationItemClicked: this.navigationItemClicked,
              activeSection: activeSection,
              ast: ast })
          )
        )
      )
    );
  }
});

module.exports = App;