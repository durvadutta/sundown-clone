// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true,
// });

var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

var mob = document.querySelectorAll(".mob-elem")
if (elems.length === mob.length) {
    elems.forEach((elem, index) => {
        const imageUrl = elem.getAttribute('data-image');

        if (imageUrl) {
            mob[index].style.backgroundImage = `url(${imageUrl})`;
        }
    });
}

var imageC = document.querySelector("#image-section")
var tabs = document.querySelectorAll(".tab")

tabs.forEach(function (e) {
    e.addEventListener("click", function () {
        tabs.forEach(function (t) {
            t.style.left = "0";
            t.style.color = "rgb(80, 74, 69)"
        });
        var image = e.getAttribute("data-image")
        imageC.style.backgroundImage = `url(${image})`

        e.style.left = `-2vw`
        e.style.color = "white"
    })
})

var menu = document.querySelector("#menu")
var full = document.querySelector("#full-scr")
var navImg = document.querySelector("nav img")
var flag = 0
menu.addEventListener("click", function () {
    if (flag == 0) {
        full.style.top = 0;
        navImg.style.opacity = 0;
        flag = 1
    } else {
        full.style.top = '-100%';
        navImg.style.opacity = 1;
        flag = 0
    }
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 70,
    breakpoints: {
        100: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
});
