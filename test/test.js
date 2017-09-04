'use strict';


var Nightmare = require("nightmare");
var expect = require("chai").expect;


describe("page load", function(){
    this.timeout(10000)
    describe("/ home page", () => {
        it('should load home page', done => {
             Nightmare({ show: true })
             .goto("http://localhost:3306/")
             .end()
             .then(function (result) {done() })
             .catch(done)
        })
 	})
});