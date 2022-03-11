document.addEventListener("DOMContentLoaded", () => {
  amenu('.menu', '.menu__list', '.menu__item', '.menu__burger');



  //appearing title
  const rowImgContainer = document.querySelector('.row-img-container');
  setTimeout(() => {
    if (rowImgContainer) {
      rowImgContainer.classList.add('activeAppear');
    }
  }, 1000);

  //appearing photo
  const faderPhoto = document.querySelectorAll('.img-appear');
  const appearPtotoOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px 10px 0px'
  };
  const appearPhotoOnScroll = new IntersectionObserver(function (entries, appearPhotoOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        appearPhotoOnScroll.unobserve(entry.target);
      }
    });
  }, appearPtotoOptions);
  faderPhoto.forEach(fader => {
    appearPhotoOnScroll.observe(fader);
  })

  //appearing video files
  const faderVideo = document.querySelectorAll('.video-item');
  const appearVideoOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
  };

  const appearVideoOnScroll = new IntersectionObserver(function (entries, appearVideoOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearVideoOnScroll.unobserve(entry.target);
        }
      });
    },
    appearVideoOptions);

  faderVideo.forEach(fader => {
    appearVideoOnScroll.observe(fader);
  });

  // hide header while scrolling
  let prevHeaderPos = window.pageYOffset;
  let prevScrollPos = window.pageYOffset;
  let headerContainer = document.querySelector('.header-container');
  let scrollIndicator = document.querySelector('.scroll-indicator');

  window.onscroll = function () {
    let currentHeaderPos = window.pageYOffset;
    let currentScrollPos = window.pageYOffset;
    if (prevHeaderPos > currentHeaderPos) {
      headerContainer.style.top = "0";
      headerContainer.style.transition = "all 1s";
      if (scrollIndicator) {
        scrollIndicator.style.opacity = "1";
        scrollIndicator.style.transition = "all 1s"
      }
    } else if (prevHeaderPos < currentHeaderPos) {
      headerContainer.style.top = "-50px"
      document.querySelector(".header-container").style.transition = "all 1.5s";
      if (scrollIndicator) {
        scrollIndicator.style.opacity = "0";
        scrollIndicator.style.transition = "all 2s"
      }
    } else if (window.onload) {
      return;
    }
    prevHeaderPos = currentHeaderPos;
    prevScrollPos = currentScrollPos;
  }

  //change body background color
  const wrapperGallery = document.querySelector('.wrapper-gallery');
  if (document.querySelector('.main-logo-container')) {
    let body = document.querySelector(".body");
    if (body) {
      body.style.backgroundColor = "#fbfbfb";
    }
  } else if (wrapperGallery) {
    let body = document.querySelector(".body");
    if (body) {
      body.style.backgroundColor = "#000000";
    }
  }

  //set link to photo_section
  const photoColumns = document.querySelectorAll('.photoColumn');
  photoColumns.forEach(photoColumn => {
    photoColumn.setAttribute('onclick', 'location.href = "photo_section.html"');
  });

  //go-to-top button
  const gotopBtn = document.querySelector('.go-top-link[data-goto]');

  if (gotopBtn) {
    gotopBtn.addEventListener('click', e => {
      const gotopBtn = e.target;
      if (gotopBtn.dataset.goto && document.querySelector(gotopBtn.dataset.goto)) {
        const gotoBlock = document.querySelector(gotopBtn.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.main-logo-container').offsetHeight;

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth"
        });
        e.preventDefault();
      }
    });
    const refreshBtnVisibility = () => {
      if (document.documentElement.scrollTop <= 550) {
        document.querySelector(".top-btn").style.opacity = '0';
        document.querySelector(".top-btn").style.visibility = 'hidden';
      } else {
        document.querySelector(".top-btn").style.opacity = '.8';
        document.querySelector(".top-btn").style.visibility = 'visible';
      }
    };
    refreshBtnVisibility();

    document.addEventListener("scroll", e => {
      refreshBtnVisibility();
    });
  }

});

//touch events
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
  console.log('is touch');


} else {
  document.body.classList.add('_pc');
  console.log('is pc');
}