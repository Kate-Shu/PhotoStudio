(() => {


  //tut vse spriatano ot polzovatelya; everything is hidden from user in this func;
  let burgerWidth = 0;
  let lastWidthItems = 0; //create it to make it global in our library only;

  const init = (menu, menuList, itemsMenu, burgerMenu) => { //prinimaem parametri;
    itemsMenu.forEach(elem => {
      elem.classList.add('amenu__item'); //prosto dabavili stil' iz css faila k kajdomu elememtu, kotoriy perebiraem;
    });
    burgerMenu.classList.add('amenu__burger');

    const [burgerBtn, burgerList] = createBurgerMenu(burgerMenu);

    updateMenu(menu, menuList, burgerMenu, burgerBtn, burgerList);

    window.addEventListener('resize', () => {
      updateMenu(menu, menuList, burgerMenu, burgerBtn, burgerList)
    });
  };

  const createBurgerMenu = (parentBurger) => {
    const burgerBtn = document.createElement('button'); //button, not a link!!;
    parentBurger.append(burgerBtn); //add created element = burgerBtn;
    burgerBtn.classList.add('amenu__burger-btn');

    burgerBtn.addEventListener('click', () => {
      parentBurger.classList.toggle('amenu__burger-open');
    })

    const burgerList = document.createElement('ul');
    parentBurger.append(burgerList);
    burgerList.classList.add('amenu__burger-list');

    return [burgerBtn, burgerList];
  };

  const updateMenu = (menu, menuList, burgerMenu, burgerBtn, burgerList) => {
    const menuItems = menuList.querySelectorAll('.amenu__item'); //look for element with class .amenu__items over the element menuList,not over all document;
    const burgerItems = burgerList.querySelectorAll('.amenu__item');

    const widthMenu = menu.offsetWidth;
    burgerWidth = burgerMenu.offsetWidth || burgerWidth; //burgerWidth=0; if burgerWidth is open=>get its width, if burgerWidth is closed=>get 0;

    const widthAllItems = [...menuItems].reduce((acc, elem) => {
      return acc + elem.offsetWidth + parseFloat(getComputedStyle(elem).marginRight)
    }, 0) + burgerWidth;
    console.log(widthAllItems);

    if (widthMenu < widthAllItems) { //when current widthMenu becomes shorter during narowing than widthAllItems;
      const lastItem = menuItems[menuItems.length - 1]; //get last item;
      lastWidthItems = lastItem.offsetWidth + parseFloat(getComputedStyle(lastItem).marginRight);
      burgerList.prepend(lastItem); //take from menuItems(menuList) and add in burgerList;
      return updateMenu(menu, menuList, burgerMenu, burgerBtn, burgerList); //recursion
    };

    if (widthMenu > widthAllItems + lastWidthItems && burgerItems.length) {
      const firstElem = burgerItems[0]; //take 1st item from burger;
      menuList.append(firstElem); //return 1st elem from burger to menuList;
      return updateMenu(menu, menuList, burgerMenu, burgerBtn, burgerList);
    };

    checkBurgerItems(burgerItems.length, burgerBtn);

  };

  const checkBurgerItems = (burgerItemsCount, burgerBtn) => {
    if (burgerItemsCount) {
      burgerBtn.classList.add('amenu__burger-btn_active')
    } else {
      burgerBtn.classList.remove('amenu__burger-btn_active')
      // burgerList.classList.remove('amenu__burger-list')
      // burgerList.classList.add('amenu__burger-list_closed')
    }
  }

  window.amenu = ( // amenu-only one func that is visible outside;
    selectorMenu, selectorMenuList, selectorItemsMenu, selectorBurgerMenu
  ) => {
    const menu = document.querySelector(selectorMenu),
      menuList = document.querySelector(selectorMenuList),
      itemsMenu = document.querySelectorAll(selectorItemsMenu),
      burgerMenu = document.querySelector(selectorBurgerMenu);

    init(menu, menuList, itemsMenu, burgerMenu); //peredaem parametri;
  };


  // touch-events
  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows());
    }
  };

  if (isMobile.any()) {

    document.body.classList.add('_touch');
    console.log('is touch');
    // let menuArrows = document.querySelectorAll('.menu-arrow');
    // const subList = document.querySelector('.sub-list');
    const selectedLang = document.querySelector('.selected-lang');
    // if(menuArrows.length > 0) {
    // for(let index = 0; index < menuArrows.length; index++){
    // const menuArrow = menuArrows[index];
    // menuArrow.addEventListener('click', e => {
    // subList.classList.toggle('_active');
    // })
    // }
    // };

    if (selectedLang) {
      selectedLang.addEventListener('click', e => {
        selectedLang.classList.toggle('_active');
      })
    }

  } else {
    document.body.classList.add('_pc');
    console.log('is pc');
  }

  //scroll when press menu items

  const menuLinks = document.querySelectorAll('.header-menu-link[data-goto]');
  //data-goto- goto is created up to u, can use any name; data- is attribute, u can create yourself;
  if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', e => {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
          //dataset - is set of all attributes that belongs to some element(here: goto attribute)
          //menuLink.dataset.goto - check if data attribute is fullfiled (zapolnen)
          //document.querySelector(menuLink.dataset.goto) - check if the element which is linked to, exists(check if element na kotoryi ssilayutsia, est' v documente)
          const gotoBlock = document.querySelector(menuLink.dataset.goto);
          //gotoBlock- is elem that is being linked to;
          const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
          // getBoundingClientRect().top-space in px from top of the window to the top of the rect.
          window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
          });
          e.preventDefault();
        }
      })
    })
  }

  if (wrapperGallery) {

  }

})
()