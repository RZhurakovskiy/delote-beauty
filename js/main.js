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

//menu-mobile
$(".ourwork-nav__btn").on("click", function () {
  $(".ourwork-mobile__nav").toggleClass("ourwork-mobile__nav--open");
});
$(".ourwork-list").on("click", function () {
  $(".ourwork-mobile__nav").removeClass("ourwork-mobile__nav--open");
});
//табы

const tabsList = document.querySelectorAll(".ourwork-list");
const tabsItems = document.querySelectorAll(".ourwork-tabs");

tabsList.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentList = item;
    let tabId = currentList.getAttribute("data-tab");
    let currenTab = document.querySelector(tabId);

    if (!currentList.classList.contains("active")) {
      tabsList.forEach(function (item) {
        item.classList.remove("active");
      });

      tabsItems.forEach(function (item) {
        item.classList.remove("active");
      });

      currentList.classList.add("active");
      currenTab.classList.add("active");
    }
  });
}

document.querySelector(".ourwork-nav__list:nth-child(1)").click();

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
  scroll.classList.toggle("active", window.scrollY > 500);
});

// AOS

AOS.init();
