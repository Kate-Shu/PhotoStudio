class Footer extends HTMLElement{
 constructor(){
  super();
 }
 connectedCallback(){
  this.innerHTML = `
<style>
  .footer-container {
   background-color: #e7e8ed;
   width: 100%;
}
.footer-contacts-wrapper {
   width: 100%;
   height: 100%;
}
.grid-section {
   grid-area: footer-contacts-wrapper;
   display: grid;
   grid-template-columns: 1fr 1fr;
}
.footer-media {
   display: flex;
   justify-content: center;
   align-content: center;
}
.footer-row {
   display: flex;
   justify-content: center;
   align-items: center;
}
.footer-title {
   float: left;
   width: 50%;
   margin: 0px 20px;
   font-weight: 300;
   line-height: 1.5;
   font-family: 'Noto Sans', sans-serif;
   font-size: 19px;
   color: #435464;
   opacity: .85;
   padding-right: 30px;
}
.footer-title h3 {
   letter-spacing: 1.5px;
   padding-bottom: 10px;
}
.footer-title h3:after {
   display: block;
   content: " ";
   width: 30%;
   height: 1px;
   background: #39454B !important;
   opacity: .5;
   left: 20px;
   margin-top: 8px;
}
.footer-title p {
   font-size: 21px;
   letter-spacing: 1, 5;
}
.media-contacts {
   float: left;
   margin: 0px 20px;
   font-weight: 300;
}
.img-media-icon-content {
   width: 30px;
   height: 30px;
   cursor: pointer;
}
.media-links-wrapper {
   display: flex;
   justify-content: space-around;
   margin-bottom: 20px;
}
.media-contacts-block {
   display: flex;
   align-items: center;
   margin-bottom: 25px;
   width: 100%;
   cursor: pointer;
}
.mail-icon {
   margin-bottom: 0;
}
.media-contacts-block img {
   margin-right: 20px;
   width: 30px;
}
.media-contacts-block a {
   font-size: 19px;
   color: #435464;
   opacity: .85;
   text-decoration: none;
}
.footer-maps {
   padding: 10px 15px;
}
.allmaps-wrapper {
   width: 90%;
   margin: auto;
}
.branch-title-wrapper {
   display: flex;
   justify-content: center;
   padding-bottom: 10px;
}
.branch-title {
   width: fit-content;
   font-weight: 450;
   opacity: .85;
   font-size: 22px;
   color: #435464;
   font-weight: 300;
   letter-spacing: 2;
}
.ukr-branch-container {
   padding-bottom: 20px;
}
.map-wrapper {
   box-shadow: 1px 1px 15px grey;
   height: 220px;
}
.footer-block-copyright {
   padding-bottom: 10px;
}
.footer-copyright-wrapper {
   display: flex;
   justify-content: center;
}
.footer-copyright-content {
   color: #333;
   font-size: 12px;
}
.blur-footer {
   transition: .5s;
   -webkit-transition: .5s;
   -moz-transition: .5s;
   -ms-transition: .5s;
   -o-transition: .5s;
}
</style>
  <footer class="footer-container" id="footer-container">
  <div class="footer-contacts-wrapper grid-section">
      <div class="footer-media">
          <div class="footer-row">
              <div class="footer-title">
                  <h3>Keep in touch . . .</h3>
                  <p>Follow us to receive exclusive deals and all our latest news and offers.</p>
              </div>
              <div class="media-contacts">
                  <div class="facebook-icon media-contacts-block">
                      <img src="svg/facebook-square-brands.svg" alt="facebook">
                      <a href="https://www.facebook.com/profile.php?id=100001158868409" class="facebook-name">KateShu</a>
                  </div>
                  <div class="instagram-icon media-contacts-block">
                      <img src="svg/instagram-brands.svg" alt="instagram">
                      <a href="tel:+971563384329" class="instagram-name">KateShu</a>
                  </div>
                  <div class="youtube-icon media-contacts-block">
                      <img src="svg/youtube-brands.svg" alt="youtube">
                      <a href="tel:+971563384329" class="youtube-name">IgorVideo</a>
                  </div>
                  <div class="telegram-icon media-contacts-block">
                      <img src="svg/telegram-brands.svg" alt="telegram">
                      <a href="tel:+971563384329" class="whatsapp-number">+380977777777</a>
                  </div>
                  <div class="whatsApp-icon media-contacts-block">
                      <img src="svg/whatsapp-square-brands.svg" alt="whatsApp">
                      <a href="tel:+971563384329" class="whatsapp-number">+380977777777</a>
                  </div>
                  <div class="viber-icon media-contacts-block">
                      <img src="svg/viber-brands.svg" alt="viber">
                      <a href="tel:+971563384329" class="viber-number">+380977777777</a>
                  </div>
                  <div class="mail-icon media-contacts-block">
                      <img src="svg/at-solid.svg" alt="mail">
                      <a href="tel:+971563384329" class="mail-address">k.onufrichuk.@gmail.com</a>
                  </div>
              </div>
          </div>
      </div>
      <div class="footer-maps">
          <div class="allmaps-wrapper ">
              <div class="ukr-branch-container map-section">
                  <div class="branch-title-wrapper">
                      <div class="ukr-branch branch-title">Our Branch in Ukraine</div>
                  </div>
                  <div class="map-ukr map-wrapper">
                      <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.842864070608!2d30.434077515433096!3d50.44402749570917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
1!3m3!1m2!1s0x40d4cc187a123331%3A0x6203773e60b8092a!2s14V%2C%20Henerala%20Tupykova%20St%2C%2014%D0%92%2C%20Kyiv%2C%20Ukraine%2C%2002000!5e0!3m2!1sen!2sae!4v1610826527487!5m2!1sen!2sae"
                          width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""
                          aria-hidden="false" tabindex="0"></iframe>
                  </div>
              </div>
              <div class="uae-branch-container map-section">
                  <div class="branch-title-wrapper">
                      <div class="uae-branch branch-title">Our Branch in UAE</div>
                  </div>
                  <div class="map-uea map-wrapper">
                      <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14417.18248726215!2d55.43609659999999!3d25.3949133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
1!3m3!1m2!1s0x3e5f59cef22989e5%3A0x4184423b6fce8086!2sGrand%20Mall!5e0!3m2!1sen!2sae!4v1610825686476!5m2!1sen!2sae"
                          width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""
                          aria-hidden="false" tabindex="0"></iframe>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </div>
  <div class="footer-block-copyright">
      <div class="footer-copyright-wrapper">
          <div class="footer-copyright-content footer-text">
              Copyright © 2021 IgorVideo Studio. All rights reserved.
          </div>
      </div>
  </div>
</footer>


  `;
 }
}

customElements.define('footer-component', Footer);