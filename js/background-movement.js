document.addEventListener('DOMContentLoaded', function () {
    const background = document.querySelector('.background');

    document.addEventListener('mousemove', function (e) {
        const mouseX = e.clientX / window.innerWidth - 1;
        const mouseY = e.clientY / window.innerHeight - 1;

        background.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
    });
});
