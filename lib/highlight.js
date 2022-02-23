'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = attacher;

var _unistUtilVisit = require('unist-util-visit');

var _unistUtilVisit2 = _interopRequireDefault(_unistUtilVisit);

var _core = require('highlight.js/lib/core');

var _core2 = _interopRequireDefault(_core);

var _python = require('highlight.js/lib/languages/python');

var _python2 = _interopRequireDefault(_python);

var _javascript = require('highlight.js/lib/languages/javascript');

var _javascript2 = _interopRequireDefault(_javascript);

var _json = require('highlight.js/lib/languages/json');

var _json2 = _interopRequireDefault(_json);

var _bash = require('highlight.js/lib/languages/bash');

var _bash2 = _interopRequireDefault(_bash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_core2.default.registerLanguage('python', _python2.default);
_core2.default.registerLanguage('javascript', _javascript2.default);
_core2.default.registerLanguage('json', _json2.default);
_core2.default.registerLanguage('bash', _bash2.default);

/**
 * Adapted from remark-highlight.js
 * https://github.com/ben-eb/remark-highlight.js
 */
function attacher() {
    function visitor(node) {
        if (!node.lang) {
            return;
        }

        var data = node.data;

        if (!data) {
            node.data = data = {};
        }

        data.htmlContent = _core2.default.highlightAuto(node.value, [node.lang]).value;
        data.htmlAttributes = data.htmlAttributes || {};
        data.htmlAttributes.class = ['hljs', data.htmlAttributes.class].filter(Boolean).join(' ');
    }

    return function (ast) {
        return (0, _unistUtilVisit2.default)(ast, 'code', visitor);
    };
}