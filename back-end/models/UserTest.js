var expect = require('chai').expect;
var mongoose = require('mongoose');
var User = require('./User.js');

describe('User Model', function () {

  it('User should be a Mongoose model', function () {
    expect(new User()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(User.schema).to.exist;
  });
  it("should have a `name` property", function () {
    expect(User.schema.paths.name).to.exist;
  });

  it("should have a `name` property that is a string", function () {
    expect(User.schema.paths.name.options.type.name).to.equal("String");

    it("should have a `email` property", function () {
    expect(User.schema.paths.email).to.exist;
  });

  it("should have a `email` property that is a string", function () {
    expect(User.schema.paths.email.options.type.name).to.equal("String");



});
