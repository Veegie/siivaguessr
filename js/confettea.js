const confettea = {
    defaultOptions: {
        particleCount: 100,
        origin: { x: 0.5, y: 0.3 },
        spread: 90,
        startVelocity: 30,
        images: ['./img/gdc.png', './img/snc.png', './img/sgc.png', './img/wmc.png'],
        ticks: 200,
        gravity: 0.06,
        decay: 0.95,
        scalar: 4
    },
    // Function to generate a random number between a range
    randomInRange: function (min, max) {
        return Math.random() * (max - min) + min;
    },
    // Function to create elements for the particles
    createElements: function (root, elementCount, options) {
        let elements = [];
        let shapeCount = options.images.length;

        for (let i = 0; i < elementCount; i++) {
            let element = document.createElement('div');
            element.style.position = 'fixed';
            element.style.top = '0';
            element.style.left = '0';
            element.style.width = element.style.height = `${10 * options.scalar}px`;
            element.style.pointerEvents = 'none';
            element.style.opacity = '0';

            const shapeIndex = Math.floor(Math.random() * shapeCount);
            const imgIndex = shapeIndex;
            const img = document.createElement('img');
            img.src = options['images'][imgIndex];
            img.style.width = img.style.height = '100%';
            img.style.objectFit = 'contain';
            element.appendChild(img);

            root.appendChild(element);
            elements.push(element);
        }
        return elements;
    },
    // Function to update the particle position and opacity
    updateParticle: function (particle, progress) {
        particle.physics.x += particle.physics.vx;
        particle.physics.y += particle.physics.vy;
        particle.physics.z += particle.physics.vz;
        particle.physics.vy += this.options.gravity;
        particle.physics.vx *= this.options.decay;
        particle.physics.vy *= this.options.decay;
        particle.physics.vz *= this.options.decay;
        particle.physics.wobble += 0.1;
        particle.physics.wobbleSpeed *= 0.99;
        particle.physics.wobbleHeight *= 0.99;

        particle.physics.rotation.x += particle.physics.rotationSpeed.x;
        particle.physics.rotation.y += particle.physics.rotationSpeed.y;
        particle.physics.rotation.z += particle.physics.rotationSpeed.z;

        const wobbleX = Math.sin(particle.physics.wobble) * particle.physics.wobbleHeight;
        const wobbleY = Math.cos(particle.physics.wobble) * particle.physics.wobbleHeight;

        const transform = `
            translate3d(${particle.physics.x + wobbleX}px, ${particle.physics.y + wobbleY}px, ${particle.physics.z}px)
            rotate3d(1, 0, 0, ${particle.physics.rotation.x}rad)
            rotate3d(0, 1, 0, ${particle.physics.rotation.y}rad)
            rotate3d(0, 0, 1, ${particle.physics.rotation.z}rad)
        `;

        particle.element.style.transform = transform;
        particle.element.style.opacity = 1 - progress * (particle.physics.y / window.innerHeight * 1.25);

        return particle.physics.y < window.innerHeight && particle.element.style.opacity > 0;
    },
    // Function to create a confetti burst
    burst: function (customOptions) {
        this.options = Object.assign({}, this.defaultOptions, customOptions);
        const particles = [];
        const root = document.body;

        const rect = root.getBoundingClientRect();
        const originX = this.options.origin.x * rect.width;
        const originY = this.options.origin.y * rect.height;

        const elements = this.createElements(root, this.options.particleCount, this.options);

        for (let i = 0; i < elements.length; i++) {
            const angle = this.randomInRange(0, Math.PI * 2);
            const velocity = this.randomInRange(this.options.startVelocity * 0.7, this.options.startVelocity * 1.3);
            const spreadAngle = (Math.PI / 180) * this.randomInRange(-this.options.spread, this.options.spread);

            particles.push({
                element: elements[i],
                physics: {
                    x: originX,
                    y: originY,
                    z: 0,
                    vx: Math.cos(angle) * Math.cos(spreadAngle) * velocity,
                    vy: Math.sin(spreadAngle) * velocity,
                    vz: Math.sin(angle) * Math.cos(spreadAngle) * velocity,
                    rotation: { x: 0, y: 0, z: 0 },
                    rotationSpeed: {
                        x: this.randomInRange(-0.04, 0.04),
                        y: this.randomInRange(-0.04, 0.04),
                        z: this.randomInRange(-0.04, 0.04)
                    },
                    wobble: Math.random() * 10,
                    wobbleSpeed: this.randomInRange(0.1, 0.3),
                    wobbleHeight: this.randomInRange(2, 5)
                }
            });
        }

        let ticks = 0;
        const animate = () => {
            ticks += 1;
            const progress = ticks / this.options.ticks;

            for (let i = particles.length - 1; i >= 0; i--) {
                if (!this.updateParticle(particles[i], progress)) {
                    root.removeChild(particles[i].element);
                    particles.splice(i, 1);
                }
            }

            if (particles.length > 0) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }
};