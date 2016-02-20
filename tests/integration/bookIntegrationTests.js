/**
 * Created by Kirk.Clawson on 2/19/2016.
 */

var should = require('should');
var app = require('../../app.js');
var mongoose = require('mongoose');
var agent = require('supertest').agent(app);

var Book = mongoose.model('Book');

describe('Book Crud Test', function(){
    it('should allow a book to be posted and return a read and _id', function(done){
        "use strict";
        var bookToPost = {title:'Test Book Title', author: 'Test Author', genre:'Fiction'};

        agent.post('/api/books')
            .send(bookToPost)
            .expect(200)
            .end(function(err, results){
                results.body.read.should.equal(false);
                results.body.should.have.property('_id');
                done();
            });
    });

    afterEach(function(done){
        "use strict";
        Book.remove().exec();
        done();
    });
});