function ParticleSystem(canvas) = {
	this.particles = [];
	var particles = this.particles;

	this.num = function(n) {
		if (this.particles.length > n) {
			this.particles = this.particles.slice(0, n)
		} else {
			while (this.particles.length < n) {
				this.particles.push(new Particle());
			}
		}

		return this;
	};

	this.build = function() {
)
		return this;
	};

}

var BaseParticleSystem = {};
for (i in particle.prototype) {
	BaseParticleSystem[i] = makeSetter(i);
}

ParticleSystem.prototype = BaseParticleSystem;
function makeSetter(arg) {
	if (arg in ['velocity']) {
		return function(value, max) {
			var valueType = typeof value;
			if (!max) {
				this.particles.map();
			} else if (valueType !== 'function') {
				this.particles.map(function(_, p) {
					p[arg] = c;
				});
			} else {
				this.particles.map(function(_, p, __) {
					p[arg] = c(_, p, __);
				});
			return this;
		};
	} else {
		return function(value, max) {
			var valueType = typeof value;
			if (!max) {
				this.particles.map(function(_, p) {
					p[arg] = Math.random() * max - min;
					p.renderer = false;
				});
			} else if (valueType !== 'function') {
				this.particles.map(function(_, p) {
					p[arg] = c;
					p.renderer = false;
				});
			} else {
				this.particles.map(function(_, p, __) {
					p[arg] = c(_, p, __);
					p.renderer = false;
				});
			return this;
		};
	}
}