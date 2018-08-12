var Job = require('../models/Job.js');

// Create a new job in the database
exports.createJob = function(job, callback) {
	Job.create(job, callback);
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function(callback) {
	Job.find({ salary: { $gt: 50000 } }, callback);
};


