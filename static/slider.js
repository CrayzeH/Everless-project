const slider = document.querySelector('.slider-images');
    const prevButton = document.querySelector('.first-button-slider');
    const nextButton = document.querySelector('.second-button-slider');
    const slides = Array.from(slider.querySelectorAll('img'));
    const slideCount = slides.length;
    let slideIndex = 0;

    prevButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);

    function showPreviousSlide() {
        slideIndex = (slideIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }

    function showNextSlide() {
        slideIndex = (slideIndex + 1) % slideCount;
        updateSlider();
    }

    function updateSlider() {
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    updateSlider();