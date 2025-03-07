const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector('#to-top');


// LODASH 
window.addEventListener(
  "scroll",
  _.throttle(() => {
    // console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 배지 숨기기
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      // 버튼 보이기
      gsap.to(toTopEl, .2, {
        x: 0,
      })
    } else {
      // 배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 버튼 숨기기
      gsap.to(toTopEl, .2, {
        x: 100,
      });
    }
  }, 300)
);
// _.throttle(함수, [시간], [옵션])

toTopEl.addEventListener("click", () => {
  gsap.to(window, .7, {
    scrollTo: 0,
  })
})

const fadeEls = document.querySelectorAll(".banner .fade-in");

fadeEls.forEach((fadeEl, index) => {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //.7, 1.4, 2.1, 2.8
    opacity: 1,
  });
});

//  swiper
// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper", {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //     delay: 5000
  // },
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 클릭이 가능한지
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next"
  }
})

let promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", () => {
  isHidePromotion
    ? promotionEl.classList.add("hide")
    : promotionEl.classList.remove("hide");
  isHidePromotion = !isHidePromotion;
  console.log(isHidePromotion);
});

const random = (min, max) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

// 플로팅 아이콘
const floatingObject = (selector, delay, size) => {
  // gsap.to(요소, 지속시간, 옵션(객체));
  // esaing
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1, // -1 to repeat infinite
      yoyo: true, // 반복
      ease: "power1.inOut",
      delay: random(0, delay),
    });
};

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// scroll magic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach((spyEl) => {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8,
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
})