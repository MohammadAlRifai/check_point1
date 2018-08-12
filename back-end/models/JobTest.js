var expect = require('chai').expect;
var mongoose = require('mongoose');
var Job = require('./Job.js');

describe('Job Model', function () {

  it('should be a Mongoose model', function () {
    expect(new Job()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(Job.schema).to.exist;
  });

it("should have a `company` property", function () {
    expect(Job.schema.paths.company).to.exist;
  });

  it("should have a `company` property that is a string", function () {
    expect(Job.schema.paths.company.options.type.name).to.equal("String");

    it("should have a `title` property", function () {
    expect(Job.schema.paths.title).to.exist;
  });

  it("should have a `title` property that is a string", function () {
    expect(Job.schema.paths.title.options.type.name).to.equal("String");

    it("should have a `description` property", function () {
    expect(Job.schema.paths.description).to.exist;
  });

  it("should have a `description` property that is a string", function () {
    expect(Job.schema.paths.description.options.type.name).to.equal("String");

    it("should have a `postedDate` property", function () {
    expect(Job.schema.paths.postedDate).to.exist;
  });

  it("should have a `postedDate` property that is a string", function () {
    expect(Job.schema.paths.postedDate.options.type.name).to.equal("Date");

    it("should have a `salary` property", function () {
    expect(Job.schema.paths.salary).to.exist;
  });

  it("should have a `salary` property that is a string", function () {
    expect(Job.schema.paths.salary.options.type.name).to.equal("Number");

});
