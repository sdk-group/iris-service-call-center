'use strict'

let events = {
	reception: {}
}

let tasks = [];


module.exports = {
	module: require('./call-center.js'),
	name: 'call-center',
	permissions: [],
	tasks: tasks,
	exposed: true,
	events: {
		group: 'reception',
		shorthands: events.reception
	}
};