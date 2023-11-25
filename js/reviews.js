$(".nav-item__btn").on("click", function () {
  $(".rightside-menu").toggleClass("rightside-menu--open");
});

$(".rightside-menu__close").on("click", function () {
  $(".rightside-menu").removeClass("rightside-menu--open");
});

//мобильное меню
$(".mobile-menu__btn").on("click", function () {
  $(".mobile-menu").toggleClass("mobile-menu--open");
});

//карусель

const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 60,
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//preloader

document.addEventListener("DOMContentLoaded", () => {
  const mediaFiles = document.querySelectorAll("body");
  let i = 0;

  Array.from(mediaFiles).forEach((file, index) => {
    file.onload = () => {
      i++;

      percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed(1);

      if (i === mediaFiles.length) {
        preloader.classList.add("preloader--hide");
        percents.innerHTML = 100;
      }
    };
  });
});
