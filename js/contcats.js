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

//карты

function init() {
  let map = new ymaps.Map("map", {
    center: [59.91120357169883, 30.309237451195912],
    zoom: 10,
  });

  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
}

ymaps.ready(init);

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

//arrow-up

window.addEventListener("scroll", function () {
  let scroll = this.document.querySelector(".arrow-up");
  scroll.classList.toggle("active", window.scrollY > 50);
});
