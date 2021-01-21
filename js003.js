//appearing title
const rowImgContainer = document.querySelector('.row-img-container');
setTimeout(() => rowImgContainer.classList.add('active'), 1000);

//appearing photo
const faderPhoto = document.querySelectorAll('.column');
const appearPtotoOptions = {
 threshold: 0.5,
 rootMargin: '0px 0px -100px 0px'
};
const appearPhotoOnScroll = new IntersectionObserver (function(entries, appearPhotoOnScroll){
 entries.forEach(entry => {
  if(!entry.isIntersecting){
   return;
  }else{
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
 rootMargin: '0px 0px -100px 0px'
};

const appearVideoOnScroll = new IntersectionObserver (function(entries, appearVideoOnScroll) {
 entries.forEach(entry => {
  if(!entry.isIntersecting){
   return;
  }else{
   entry.target.classList.add('appear');
   appearVideoOnScroll.unobserve(entry.target);
  }
 });
}, appearVideoOptions);

faderVideo.forEach(fader => {
 appearVideoOnScroll.observe(fader);
});
