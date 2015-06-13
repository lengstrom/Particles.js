
function ParticleSystem(canvas) = {
	var particles = [];
	this.getParticles = function() {
		return particles
	}

	this.removeParticle = function(particle) {
		particles.splice(particles.index(particle), 1);
		return this
	}

	this.num = function(n) {
		if (particles.length > n) {
			particles = particles.slice(0, n)
		} else {
			while (particles.length < n) {
				particles.push(new Particle());
			}
		}

		return this;
	};

	this.build = function() {
		for (var i = 0; i < particles.length; i++) {
			particles[i].buildRenderer();
		}

		this.num = undefined; // remove functionality of num after building - could be unpredictable
		return this;
	};
}

var BaseParticleSystem = {};
for (i in Particle.prototype) {
	BaseParticleSystem[i] = makeSetter(i);
}

ParticleSystem.prototype = BaseParticleSystem;
function makeSetter(arg) {
	if (arg in ['velocity']) {
		return function(value, max) {
			var valueType = typeof value;
			if (!max) {
				particles.map();
			} else if (valueType !== 'function') {
				particles.map(function(_, p) {
					p[arg] = c;
				});
			} else {
				particles.map(function(_, p, __) {
					p[arg] = c(_, p, __);
				});
			return this;
		};
	} else {
		return function(value, max) {
			var valueType = typeof value;
			if (!max) {
				particles.map(function(_, p) {
					p[arg] = Math.random() * max - min;
					p.buildRenderer = false;
				});
			} else if (valueType !== 'function') {
				particles.map(function(_, p) {
					p[arg] = c;
					p.buildRenderer = false;
				});
			} else {
				particles.map(function(_, p, __) {
					p[arg] = c(_, p, __);
					p.buildRenderer = false;
				});
			return this;
		};
	}
}

return ParticleSystem