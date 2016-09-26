'use strict'

let events = {
	reception: {}
}

let tasks = [];


module.exports = {
	module: require('./call-center.js'),
	permissions: [],
	tasks: tasks,
	exposed: true,
	events: {
		group: 'reception',
		shorthands: events.reception
	}
};
