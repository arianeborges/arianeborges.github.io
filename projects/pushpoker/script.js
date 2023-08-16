const slider = document.querySelector(".slider");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let currentIndex = 0;

function showImages() {
  slider.style.transform = `translateX(-${currentIndex * 30}%)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  showImages();
});

nextBtn.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + 1, 1);
  showImages();
});

showImages();

window.addEventListener("resize", () => {
  showImages();
});
