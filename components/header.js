class Header extends HTMLElement {
    constructor() {
        super();
        let link = document.createElement('link');
        link.href = 'components/header.css';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        document.body.appendChild(link);
    }
    connectedCallback() {
        this.innerHTML = `
  <header class="header-container fixed-top">
  <div class="header-wrapper">
      <div class="header-logo-home link">
          <a class="logo-home header-home-link" href="index.html">KateShu&nbsp;Studio</a>
      </div>
      <nav class="header-nav">
          <ul class="header-menu">
              <li class="header-menu-item li-size">
                  <a class="header-menu-link" href="photo_section.html">Photo</a>
              </li>
              <li class="header-menu-item li-size">
                  <a class="header-menu-link" href="#">Video</a>
              </li>
              <li class="header-menu-item li-size">
                  <a class="header-menu-link" href="form.html">Apply</a>
              </li>
              <li class="header-menu-item li-size">
                  <a class="header-menu-link" href="#footer-container">Contact&nbsp;us</a>
              </li>
              <li class="header-menu-item  li-size selected-lang">
                  <a class="header-menu-link languageswitcher" href="#">Languages</a>
                  <ul>
                      <li> <a class="en" href="#">English</a> </li>
                      <li> <a class="ru" href="#">Russian</a> </li>
                      <li> <a class="de" href="#">German</a> </li>
                      <li> <a class="ae" href="#">Arabic</a> </li>
                  </ul>
              </li>
          </ul>
          <div class="menu-burger"></div>
      </nav>
  </div>
</header>
  `;
    }
}

customElements.define('header-component', Header);