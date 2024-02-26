document.addEventListener('DOMContentLoaded', function () {
    const particlesContainer = document.getElementById('particles-container');

    function createParticle() {
        if (document.visibilityState !== 'visible') {
            return;
        }

        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = Math.random() * 7 + 'px';
        particle.style.height = particle.style.width;
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.left = '0';
        particlesContainer.appendChild(particle);

        const animationDuration = Math.random() * 5 + 4;
        particle.style.animation = `fall ${animationDuration}s linear`;

        particle.addEventListener('animationend', function () {
            particlesContainer.removeChild(particle);
        });
    }

    setInterval(createParticle, 40);
});
