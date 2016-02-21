/**
 * Created by Kirk.Clawson on 2/19/2016.
 */

var should = require('should');
var sinon = require('sinon');

describe('Book Controller Tests', function(){
    describe('Post', function () {
        it('should not allow an empty title', function(){
            "use strict";
            var mockBook = function(){this.save = function(){}};
            var mockReq = {
                body: {
                    author: 'Test Author'
                }
            };
            var mockRes = {
                status: sinon.spy(),
                send: sinon.spy()
            };

            var underTest = require('../.././bookController')(mockBook);
            underTest.post(mockReq, mockRes);

            mockRes.status.calledWith(400).should.equal(true, 'Bad Status ' + mockRes.status.args[0][0]);
            mockRes.send.calledWith("Title is required").should.equal(true);
        });
    });
});