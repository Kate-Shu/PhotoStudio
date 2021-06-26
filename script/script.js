document.addEventListener("DOMContentLoaded", () => {
  //call amenu()-func for burger;
  // amenu('.header-nav', '.header-menu', '.header-menu-item', '.menu-burger');

  //appearing title
  const rowImgContainer = document.querySelector('.row-img-container');
  setTimeout(() => rowImgContainer.classList.add('activeAppear'), 1000);
  //except setTimeout for photo-section.html;

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
  const faderVideo = document.querySelectorAll('.video-item-section');
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
})


// slider gallery
let galleryImages = document.querySelectorAll('.gallery-img');
let windowWidth = window.innerWidth;
let getLatestOpenImg;
if (galleryImages) {
  galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
      //get let = img9.jpg
      let getElementCss = window.getComputedStyle(image);
      let getFullImgUrl = getElementCss.getPropertyValue('background-image');
      let getImgUrlPosition = getFullImgUrl.split('/img-gallery/thumbs/');
      let setNewImgUrl = getImgUrlPosition[1].replace('")', '');

      getLatestOpenImg = index + 1;

      //create variable for body
      let container = document.body;
      //create div, attached in body, for modal window - new fullscreen image
      let newImgWindow = document.createElement('div');
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute('class', 'img-window');
      newImgWindow.style.backdropFilter = "blur(20px)";
      newImgWindow.setAttribute('onclick', 'closeImg()');
      //create an image element in the created div ImgWindow, and its src+ new individual Url
      let newImg = document.createElement('img');
      newImgWindow.appendChild(newImg);
      newImg.setAttribute('src', 'img-gallery/' + setNewImgUrl);
      newImg.setAttribute('id', 'current-img');


      // create next and prev buttons
      newImg.onload = function () {
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

        let newNextBtn = document.createElement('a');
        let btnNextText = document.createTextNode('Next');
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute('class', 'img-btn-next');
        newNextBtn.setAttribute('onclick', 'changeImg(1)');
        newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

        let newPrevBtn = document.createElement('a');
        let btnPrevText = document.createTextNode('Prev');
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute('class', 'img-btn-prev');
        newPrevBtn.setAttribute('onclick', 'changeImg(0)');
        newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
      }
    })
  })
}

function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-next").remove();
  document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir) {
  //remove prev image
  document.querySelector("#current-img").remove();
  //create next img window and image
  let getImgWindow = document.querySelector('.img-window');
  let newImg = document.createElement('img');
  getImgWindow.appendChild(newImg);

  //define direction
  let calcNewImg;
  if (changeDir === 1) {
    calcNewImg = getLatestOpenImg + 1;
    if (calcNewImg > galleryImages.length) {
      calcNewImg = 1;
    }
  } else if (changeDir === 0) {
    calcNewImg = getLatestOpenImg - 1;
    if (calcNewImg < 1) {
      calcNewImg = galleryImages.length;
    }
  }

  //set current image with 
  newImg.setAttribute("src", "img-gallery/img" + calcNewImg + ".jpg");
  newImg.setAttribute("id", "current-img");

  //updatethr latest open image
  getLatestOpenImg = calcNewImg;

  //set next-prev buttons after loading the image
  newImg.onload = function () {

    //get width to the edge
    let imgWidth = this.width;
    let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

    //set class and style: right: 999px;
    let nextBtn = document.querySelector('.img-btn-next');
    nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

    //set class and style: left: 999px;
    let prevBtn = document.querySelector('.img-btn-prev');
    prevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
  }
}