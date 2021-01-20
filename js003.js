const rowImgContainer = document.querySelector('.row-img-container');
const videoItemSection = document.querySelector('.video-item-section')



setTimeout(() => rowImgContainer.classList.add('active'), 1000);

const appearOnScroll = new IntersectionObserver (function(entries, appearOnScroll) {}, options);
