document.addEventListener("DOMContentLoaded", () => {
  //call amenu()-func for burger;
  // amenu('.header-nav', '.header-menu', '.header-menu-item', '.menu-burger');

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

});



document.addEventListener('DOMContentLoaded', init);