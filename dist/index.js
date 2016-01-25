/**
 * Created by dbuarque on 1/24/16.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vorpal = require('vorpal');
var use = require('vorpal-use');

var debug = require('debug')('repack:base');

var RepackBase = exports.RepackBase = function RepackBase() {
    _classCallCheck(this, RepackBase);

    this.cli = vorpal().use(use);
    this.debug = debug;
};
//# sourceMappingURL=index.js.map