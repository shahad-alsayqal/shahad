document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  let counter = 0;

  function nextSlide() {
    if (counter < 5) {
      counter++;
    } else {
      counter = 0;
    }

    updateSlider();
  }

  function updateSlider() {
    slider.style.transform = `translateX(${-counter * 100}%)`;
  }

  setInterval(nextSlide, 3000);
});
