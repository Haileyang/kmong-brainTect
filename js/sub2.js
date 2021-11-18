function tab() {
    const tabMenu = document.querySelectorAll('.tab_wrap li');
    const tabContWrap = document.querySelector('.tab_cont_wrap');
    const tabCont = tabContWrap.querySelectorAll('.tab_cont');
    let checkMenu = null;
    let checkCont = null;

    for(let i = 0; i < tabMenu.length; i++) {
        tabMenu[i].addEventListener('click', function(e) {
            e.preventDefault();

            if(!tabMenu[i].classList.contains('on')) {
                tabMenu[0].classList.remove('on');
                tabCont[0].classList.remove('on');
            }

            if(checkMenu) {
                checkMenu.classList.remove('on');
            }
            if(checkCont) {
                checkCont.classList.remove('on');
            }

            tabMenu[i].classList.add('on');
            tabCont[i].classList.add('on');
            checkMenu = tabMenu[i];
            checkCont = tabCont[i];
        })
    }
}

function swiper() {
    var swiper = new Swiper(".myCcl", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".myCcl2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });

      var swiper3 = new Swiper(".myMccl", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper4 = new Swiper(".myMccl2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper3: swiper3,
        },
      });

      var swiper5 = new Swiper(".myPsr", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper6 = new Swiper(".myPsr2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper5: swiper5,
        },
      });

      var swiper7 = new Swiper(".myPcb", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper8 = new Swiper(".myPcb2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper7: swiper7,
        },
      });
}

tab();
swiper();



