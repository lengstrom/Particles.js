function Particle() {
	this.renderer = false;
	this.hide = function() {

	};

	this.buildRenderer = function() {
		this.renderer = true;
	}
}

Particle.prototype = {
	x:0,
	y:0,
	vx:0,
	vy:0,
	shape:0,
	fillColor:0,
	strokeColor:0,
	radius:0,
	scale:0,
	sides:0,
	stroke:0,
	src:0,
	opacity:0,
	angle:0,
}

	this.remove();
	this.hide();
	this.show();
}