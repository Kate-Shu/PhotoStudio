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
});



// slider gallery
let galleryImages = document.querySelectorAll('.gallery-img');
let windowWidth = window.innerWidth;
let getLatestOpenImg;
if (galleryImages) {
  galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
      //get let = img999.jpg - name anf format pf the iamge
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
      document.querySelector(".body").style.overflow = "hidden";
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
  document.querySelector(".body").style.overflow = "auto";

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


// hover effect for the gallery
var boxes = document.querySelectorAll('.gallery-img');
var hoverBox = document.querySelector('.box-target');
let wrapperGallery = document.querySelector('.wrapper-gallery');
let prevScrollY = window.pageYOffset;

function position(arg, box) {
  pos = arg.target;
  hoverBox.style.height = (pos.offsetHeight - 30) + 'px';
  hoverBox.style.width = (pos.offsetWidth - 30) + 'px';
  hoverBox.style.transform = "translate(" + (box.offsetLeft + 15) + 'px,' + (box.offsetTop - window.pageYOffset + 15) + "px)";

  let prevHoverBoxPos = box.offsetTop;
  if (window.scroll) {
    let currHoverBoxPos = box.offsetTop;
    currHoverBoxPos = prevHoverBoxPos;
  }

};

boxes.forEach(box => {
  box.addEventListener('mouseenter', (mousePosition) => {
    position(mousePosition, box);
    hoverBox.style.background = '#eef2f4';
    hoverBox.style.opacity = .5;
  });
});

wrapperGallery.addEventListener('mouseleave', () => {
  // hoverBox.style.height = 0 + 'px';
  // hoverBox.style.width = 0 + 'px';
  hoverBox.style.background = 'transparent';
});

// pop up validation
const inputName = document.querySelectorAll('.input')[0];
const inputPhone = document.querySelectorAll('.input')[1];
const inputMail = document.querySelectorAll('.input')[2];
const errMessageName = document.querySelectorAll('.error-message')[0];
const errMessagePhone = document.querySelectorAll('.error-message')[1];
const errMessageMail = document.querySelectorAll('.error-message')[2];
const form = document.querySelector('.form');
const applyBtn = document.querySelector('.btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const btnGoHomepage = document.querySelector('.go-homepage');
const pop = document.querySelector('.pop');

const regExpValidName = /^[a-zA-ZА-Яа-я\s]+$/;
const regExpValidPhone = /^\+?[0-9\s]+$/;
// const regExpValidEmail = /^\w+@\w+\.\w{2,}$/; 
// const regExpValidEmail = /^[a-zA-ZА-Яа-я]\@[a-zA-ZА-Яа-я]\.[a-zA-ZА-Яа-я]+$/;


const validData = {
  getFeedback(name, phone, form, btnhome) {

    if (name) {
      name.addEventListener('focusout', () => {
        if (name.value != '') {
          name.value = name.value[0].toUpperCase() + name.value.slice(1);
        }
        return;
      });

      name.addEventListener('keypress', event => {
        if (!regExpValidName.test(event.key)) {
          errMessageName.style.opacity = '0.8';
          event.preventDefault();
        } else {
          errMessageName.style.opacity = '0';
        }
      });
    }

    if (phone) {
      phone.addEventListener('keypress', event => {
        if (!regExpValidPhone.test(event.key)) {
          errMessagePhone.style.opacity = '0.8';
          event.preventDefault();
        } else {
          errMessagePhone.style.opacity = '0';
        }
      });
    }


    // mail.addEventListener('keypress', event => {
    //  if(!regExpValidEmail.test(event.key)){
    // errMessageMail.style.opacity = '0.8';
    // event.preventDefault();
    //  }else{
    // errMessageMail.style.opacity = '0';
    //  }
    // });

    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        modalOverlay.classList.add('open');

      });
    }

    if (btnhome) {
      btnhome.setAttribute('onclick', 'location.href = "index.html"');
    }

  }
};

const init = () => {
  validData.getFeedback(inputName, inputPhone, form, btnGoHomepage);
};
document.addEventListener('DOMContentLoaded', init);