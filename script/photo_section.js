//https://www.youtube.com/watch?v=aOw6Y64op2U
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

if (wrapperGallery) {
  wrapperGallery.addEventListener('mouseleave', () => {
    // hoverBox.style.height = 0 + 'px';
    // hoverBox.style.width = 0 + 'px';
    hoverBox.style.background = 'transparent';
  });
}

// https://www.youtube.com/watch?v=dkLpo4shS6c&t=2450s
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

      // https://www.youtube.com/watch?v=YxMtL6lJbZw
      //https://www.youtube.com/watch?v=5bxFSOA5JYo&t=1580s

      if (newImgWindow) {
        //disable context menu while slider is open
        window.oncontextmenu = function () {
          return false;
        };

        let isDragging = false,
          startPos = 0,
          // currentTranslate = 0,
          currentIndex = 0;

        newImg.addEventListener('dragstart', (e) => {
          e.preventDefault();
        })

        newImgWindow.addEventListener('touchstart', touchStart(index));
        newImgWindow.addEventListener('touchend', touchEnd);
        newImgWindow.addEventListener('touchmove', touchMove);

        function touchStart(index) {
          return function (event) {
            currentIndex = index;
            startPos = getPositionX(event);
            isDragging = true;
            console.log(startPos);
          }
        };

        function touchMove(event) {
          if (isDragging) {
            console.log('move');
            const currentPos = getPositionX(event);
            console.log(currentPos);
            const currentTranslate = currentPos - startPos;
            console.log(currentTranslate);

            if (currentTranslate > 0) {
              changeImg(1);
            } else {
              changeImg(0);
            }
          }
        };

        function touchEnd() {
          isDragging = false;
        };

        function getPositionX(event) {
          return event.touches[0].clientX;
        }
      }

      // create next and prev buttons
      newImg.onload = function () {
        // let imgWidth = this.width;
        // let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

        if (isMobile.any()) {
          let newNextBtn = document.createElement('a');
          let btnNextText = document.createTextNode('>');
          newNextBtn.appendChild(btnNextText);
          container.appendChild(newNextBtn);
          newNextBtn.setAttribute('class', 'img-btn-next-mob');
          newNextBtn.setAttribute('onclick', 'changeImg(1)');
          newNextBtn.style.cssText = "right: " + 1 + "px;"; // "right: " + calcImgToEdge + "px;"
          let newPrevBtn = document.createElement('a');
          let btnPrevText = document.createTextNode('<');
          newPrevBtn.appendChild(btnPrevText);
          container.appendChild(newPrevBtn);
          newPrevBtn.setAttribute('class', 'img-btn-prev-mob');
          newPrevBtn.setAttribute('onclick', 'changeImg(0)');
          newPrevBtn.style.cssText = "left: " + 1 + "px;"; // "right: " + calcImgToEdge + "px;"
        } else {
          let newNextBtn = document.createElement('a');
          let btnNextText = document.createTextNode('Next');
          newNextBtn.appendChild(btnNextText);
          container.appendChild(newNextBtn);
          newNextBtn.setAttribute('class', 'img-btn-next');
          newNextBtn.setAttribute('onclick', 'changeImg(1)');
          newNextBtn.style.cssText = "right: " + 10 + "px;"; // "right: " + calcImgToEdge + "px;"
          let newPrevBtn = document.createElement('a');
          let btnPrevText = document.createTextNode('Prev');
          newPrevBtn.appendChild(btnPrevText);
          container.appendChild(newPrevBtn);
          newPrevBtn.setAttribute('class', 'img-btn-prev');
          newPrevBtn.setAttribute('onclick', 'changeImg(0)');
          newPrevBtn.style.cssText = "left: " + 10 + "px;"; // "right: " + calcImgToEdge + "px;"
        }
      }
    })
  })
}

function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-next").remove();
  document.querySelector(".img-btn-prev").remove();
  document.querySelector(".body").style.overflow = "auto";

  window.oncontextmenu = function () {
    return true;
  };
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
    if (isMobile.any()) {
      //get width to the edge
      let imgWidth = this.width;
      // let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;
      //set class and style: right: 999px;
      let nextBtn = document.querySelector('.img-btn-next-mob');
      nextBtn.style.cssText = "right: " + 1 + "px;";
      //set class and style: left: 999px;
      let prevBtn = document.querySelector('.img-btn-prev-mob');
      prevBtn.style.cssText = "left: " + 1 + "px;";
    } else {
      //get width to the edge
      let imgWidth = this.width;
      // let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;
      //set class and style: right: 999px;
      let nextBtn = document.querySelector('.img-btn-next');
      nextBtn.style.cssText = "right: " + 10 + "px;";
      //set class and style: left: 999px;
      let prevBtn = document.querySelector('.img-btn-prev');
      prevBtn.style.cssText = "left: " + 10 + "px;";
    }
  }
}

//add keyboard events
window.addEventListener('keydown', addKeyboardEvent);

function addKeyboardEvent(e) {
  if (e.keyCode == 27) {
    closeImg();
    return;
  }
  if (e.keyCode == 37) {
    changeImg(0);
    return;
  }
  if (e.keyCode == 39) {
    changeImg(1);
    return;
  }
  if (e.keyCode == 32) {
    changeImg(1);
    return;
  }
  if (e.keyCode == 13) {
    changeImg(1);
    return;
  }
}