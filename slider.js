document.addEventListener('DOMContentLoaded', function() {
    const imageSlider = document.querySelector('.image-slider');
    const sliderWrapper = imageSlider.querySelector('.image-slider__wrapper');
    const prevControl = imageSlider.querySelector('.image-slider__control--prev');
    const nextControl = imageSlider.querySelector('.image-slider__control--next');
  
    const imageCount = 6;
    const imagesPerPage = [
      { width: 320, count: 1 },
      { width: 768, count: 4 },
      { width: 1024, count: 6 }
    ];
  
    let currentIndex = 0;
    let isAnimating = false;
  
    function updateSliderWidth() {
      const windowWidth = window.innerWidth;
      let perPage = 1;
  
      for (let i = imagesPerPage.length - 1; i >= 0; i--) {
        if (windowWidth >= imagesPerPage[i].width) {
          perPage = imagesPerPage[i].count;
          break;
        }
      }
  
      const imageWidth = 100 / perPage;
      sliderWrapper.style.width = `${imageCount * imageWidth}%`;
      const imageElements = sliderWrapper.querySelectorAll('img');
      imageElements.forEach(img => {
        img.style.width = `${imageWidth}%`;
        img.style.flex = `0 0 ${imageWidth}%`;
      });
    }
  
    function slideTo(index) {
      if (isAnimating) return;
  
      const windowWidth = window.innerWidth;
      let perPage = 1;
  
      for (let i = imagesPerPage.length - 1; i >= 0; i--) {
        if (windowWidth >= imagesPerPage[i].width) {
          perPage = imagesPerPage[i].count;
          break;
        }
      }
  
      const imageWidth = 100 / perPage;
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
  
    window.addEventListener('load', updateSliderWidth);
    window.addEventListener('resize', updateSliderWidth);
  });
  