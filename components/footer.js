class Footer extends HTMLElement {
    constructor() {
        super();
        let link = document.createElement('link');
        link.href = 'components/footer.css';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        document.body.appendChild(link);
    }
    connectedCallback() {
        this.innerHTML = `
  <footer class="footer-container" id="footer-container">
  <div class="footer-contacts-wrapper grid-section">
      <div class="footer-media">
              <div class="footer-title">
                  <h3>Keep in touch . . .</h3>
                  <p>Follow us to receive exclusive deals and all our latest news and offers.</p>
              </div>
              <div class="media-contacts">
                  <div class="facebook-icon media-contacts-block">
                      <img src="svg/facebook-square-brands.svg" alt="facebook">
                      <a href="https://www.facebook.com/profile.php?id=100001158868409" target="_blank" class="facebook-name">KateShu</a>
                  </div>
                  <div class="instagram-icon media-contacts-block">
                      <img src="svg/instagram-brands.svg" alt="instagram">
                      <a href="https://www.instagram.com/okate777/" target="_blank" class="instagram-name">KateShu</a>
                  </div>
                  <div class="youtube-icon media-contacts-block">
                      <img src="svg/youtube-brands.svg" alt="youtube">
                      <a href="https://www.youtube.com/channel/UCSDskPHmloY_PIBU7oybzhg" target="_blank" class="youtube-name">IgorVideo</a>
                  </div>
                  <div class="telegram-icon media-contacts-block">
                      <img src="svg/telegram-brands.svg" alt="telegram">
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
              Copyright © 2022 KateShu Studio. All rights reserved.
          </div>
      </div>
  </div>
  <div class="top-btn"> <a data-goto=".main-logo-container" class="go-top-link" href="#">Go to Top</a> </div>
</footer>


  `;
    }
}

customElements.define('footer-component', Footer);