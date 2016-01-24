/**
 * Created by dbuarque on 1/24/16.
 */
'use strict';

const vorpal = require('vorpal');
const debug  = require('debug')('repack:base');

export class RepackBase {
    constructor(){
        this.cli = vorpal();
        this.debug = debug;
    }
}