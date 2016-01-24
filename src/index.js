/**
 * Created by dbuarque on 1/24/16.
 */
'use strict';

const vorpal = require('vorpal');
const use = require('vorpal-use');

const debug  = require('debug')('repack:base');

export class RepackBase {
    constructor(){
        this.cli = vorpal().use(use);
        this.debug = debug;
    }
}