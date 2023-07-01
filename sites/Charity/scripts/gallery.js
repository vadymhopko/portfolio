cards = [];
const slide = document.querySelector(".section-gallery-content");
for (i = 1; i <= 66; i++) {
  div = `<div class="section-gallery-box swiper-slide">
    <img
      class="section-gallery-pic swiper-lazy"
      data-src="images/section-gallery/pic${i}.webp"
      src="images/section-gallery/1x1.png"
      alt="foto"
    />
    <div class="swiper-lazy-preloader"></div></div>`;
  cards.push(`${div}`);
}
slide.innerHTML = `${cards}`;
