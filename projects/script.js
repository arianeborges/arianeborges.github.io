const slider = document.querySelector(".slider");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let currentIndex = 0;

function showImages() {
  const numVisibleImages = 3;
  const totalImages = 7;
  const percentage = (currentIndex / (totalImages - numVisibleImages)) * 100;

  slider.style.transform = `translateX(-${percentage}%)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  showImages();
});

nextBtn.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + 1, 6);
  showImages();
});

showImages();

window.addEventListener("resize", () => {
  showImages();
});
