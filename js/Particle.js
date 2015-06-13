function Particle() {
	var renderer = false;
	this.hidden = false;

	this.hide = function() {
		this.hidden = false;
	};

	this.show = function() {
		this.hidden = true;
	}

	this.buildRenderer = function() {
		this.renderer = true;
	}
}

function makeSetter(arg) {
	if (!arg in ['x', 'y', 'vx', 'vy']) {
		return function(value) {
			this[arg] = value;
			this.renderer = false;
			return this;
		}
	} else {
		return function(value) {
			this[arg] = value;
			return this;
		}
	}
}

var particleAttributes = {
	x:0,
	y:0,
	vx:0,
	vy:0,
	renderType:0,
	fillColor:0,
	strokeColor:0,
	radius:0,
	scale:0,
	sides:0,
	stroke:0,
	src:0,
	opacity:0,
	angle:0,
};

Particle.prototype = particleAttributes;

// create setters
for (var prop in Particle.prototype) {
	Particle.prototype['set' + toUpperCase(prop.charAt(0)) + prop.substr(1)] = makeSetter(prop);
}