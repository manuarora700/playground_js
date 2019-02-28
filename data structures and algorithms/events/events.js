// Implement basic events in JS
// Include functions -- on() , off() and trigger()

// Create an eventing library out of the events class
// The events class should have methods 'on', 'trigger' and 'off'

class Events {
	constructor() {
		this.events = {};
	}
	// register an event
	on(eventName, callback) {
		if(thisevents[eventName]) {
			this.events[eventName].push(callabck);
		}
		else {
			this.event[eventName] = [callback];
		}
	}
	trigger(eventName) {
		if(this.events[eventName])) {
			for(let cv of this.events[eventname]) {
				cb();
			}
		}
	}
	off(eventName) {
		delete this.events[eventName];
	}
}