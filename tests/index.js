import { RepackBase } from '../src/index';

const should = require('should');
const vorpal = require('vorpal');

describe('RepackBase', function() {
    it('should be and object', function () {
        var base = new RepackBase();
        base.cli.should.be.type('object');
    });

    it('#cli should have a property cli', function () {
        var base = new RepackBase();
        base.should.have.property('cli');
    });

    it('#cli should be an instance of vorpal', function () {
        var base = new RepackBase();
        base.cli.should.be.an.instanceOf(vorpal);
    });
});
