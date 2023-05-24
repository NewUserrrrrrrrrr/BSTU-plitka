document.addEventListener('DOMContentLoaded', function() {
  const imageSlider = document.querySelector('.image-slider');
  const sliderWrapper = imageSlider.querySelector('.image-slider__wrapper');
  const prevControl = imageSlider.querySelector('.image-slider__control--prev');
  const nextControl = imageSlider.querySelector('.image-slider__control--next');

  const imageCount = 6;
  let currentIndex = 0;
  let isAnimating = false;

  function slideTo(index) {
    if (isAnimating) return;

    const imageWidth = 100;
    const transformValue = `${-index * imageWidth}%`;

    sliderWrapper.style.transform = `translateX(${transformValue})`;
    currentIndex = index;
    isAnimating = true;

    setTimeout(() => {
      isAnimating = false;
    }, 500);
  }

  function prevSlide() {
    const newIndex = currentIndex === 0 ? imageCount - 1 : currentIndex - 1;
    slideTo(newIndex);
  }

  function nextSlide() {
    const newIndex = currentIndex === imageCount - 1 ? 0 : currentIndex + 1;
    slideTo(newIndex);
  }

  prevControl.addEventListener('click', prevSlide);
  nextControl.addEventListener('click', nextSlide);
});
