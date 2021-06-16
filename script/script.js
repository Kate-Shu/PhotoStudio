document.addEventListener("DOMContentLoaded", () => {

 //call amenu()-func for burger;
 amenu('.header-nav', '.header-menu', '.header-menu-item', '.menu-burger');

 //appearing title
 const rowImgContainer = document.querySelector('.row-img-container');
 setTimeout(() => rowImgContainer.classList.add('activeAppear'), 1000);
 //except setTimeout for photo-section.html;

 //appearing photo
 const faderPhoto = document.querySelectorAll('.photoColumn');
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

 // modal window
 const imgOverlayHidden = document.querySelector('.img-overlay-hidden');
 const modalWindowPhoto = document.querySelector('.modal-window-photo');
 const closeBtn = document.querySelector('.close-btn');
 const blurHeader = document.querySelector('.header-container-blur');
 const blurPhotosection = document.querySelector('.photo-section-blur');
 const blurFooter = document.querySelector('.blur-footer');
 const modalImgs = document.querySelectorAll('.modal-img');
 const arrowLeft = document.querySelector('.arrow-left');
 const arrowRight = document.querySelector('.arrow-right');

 //to show modal with display:block, not visibility:
 // imgOverlayHidden.addEventListener('click', () => {
 // modalWindowPhoto.style.display = 'block';
 // modalWindowPhoto.style.opacity = '1';
 // modalWindowPhoto.style.transition =  '1s';
 // modalWindowPhoto.style.top = '50%'; })
 // closeBtn.addEventListener('click', () => {
 // modalWindowPhoto.style.display = 'none';
 // }); 

 imgOverlayHidden.addEventListener('click', () => {
  modalWindowPhoto.classList.toggle('active');
  blurHeader.classList.toggle('active');

  // blurHeader.style.display = 'none';//remove header
  // blurPhotosection.style.margin = '0px';//put up photo section;

  blurPhotosection.classList.toggle('active');
  blurFooter.classList.toggle('active');
 });

 closeBtn.addEventListener('click', () => {
  modalWindowPhoto.classList.toggle('active');
  blurHeader.classList.toggle('active');
  blurHeader.style.display = 'flex';
  blurPhotosection.style.margin = '50px 0px 0px 0px';
  blurPhotosection.classList.toggle('active');
  blurFooter.classList.toggle('active');
 });

 // display:none vs visibility:hidden in photopage???

let proactiveModalImg = 0;

arrowRight.addEventListener('click', () => {
 proactiveModalImg++;


 setProactiveModalImg();
})

function setProactiveModalImg(){
 modalImgs.forEach((modalImg) => modalImg.classList.remove('proactive'));
 modalImgs[proactiveModalImg].classList.add('proactive');
}
});