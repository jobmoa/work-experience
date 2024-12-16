document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".custom-icon-list li");

    function handleScroll() {
        const triggerBottom = window.innerHeight * 0.9;
        const triggerTop = 0;

        images.forEach((image) => {
            const imageTop = image.getBoundingClientRect().top;
            const imageBottom = image.getBoundingClientRect().bottom;

            if (imageTop < triggerBottom && imageBottom > triggerTop) {
                // 화면에 들어오면 'visible' 클래스 추가
                image.classList.add("visible");
                image.classList.remove("exiting");
            } else {
                // 화면에서 벗어나면 'exiting' 클래스 추가
                if (image.classList.contains("visible")) {
                    image.classList.remove("visible");
                    image.classList.add("exiting");

                    // 애니메이션 종료 후 'exiting' 클래스 제거
                    setTimeout(() => {
                        image.classList.remove("exiting");
                    }, 600); // transition 시간과 동일하게 설정
                }
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 상태 확인을 위해 호출
});

// main.js에 추가
document.addEventListener("DOMContentLoaded", function () {
    const customHeader = document.querySelector(".custom-header");

    const adjustHeaderSize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 1024) {
            customHeader.style.height = "300px";
        } else if (screenWidth > 768) {
            customHeader.style.height = "250px";
        } else if (screenWidth > 480) {
            customHeader.style.height = "200px";
        } else {
            customHeader.style.height = "150px";
        }
    };

    adjustHeaderSize(); // 초기 호출
    window.addEventListener("resize", adjustHeaderSize); // 화면 크기 변경 시 호출
});

document.querySelectorAll(".custom-icon-list li img").forEach(img => {
    img.style.width = "80px"; // 새로운 크기
    img.style.height = "80px"; // 새로운 크기
});
