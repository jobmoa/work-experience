
const video = document.getElementById('scroll-video');

window.addEventListener('scroll', () => {
    const videoSection = document.getElementById('video-section');
    const sectionTop = videoSection.offsetTop;
    const sectionHeight = videoSection.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        const playPosition = (scrollPosition - sectionTop) / sectionHeight;
        video.currentTime = playPosition * video.duration;
        if (video.paused) video.play();
    } else {
        video.pause();
    }
});
