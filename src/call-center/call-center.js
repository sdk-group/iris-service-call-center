'use strict'

const emitter = require("global-queue");
const patchwerk = require('patchwerk')(emitter);


class CallCenter {
	constructor() {
		this.emitter = emitter;
	}
	init(config) {}
	launch() {
		console.log('Call Center Init');
		return Promise.resolve(true);
	}
	actionReady() {
		return Promise.resolve(true);
	}
	actionBootstrap() {
		return Promise.resolve(true);
	}
}

module.exports = CallCenter;
