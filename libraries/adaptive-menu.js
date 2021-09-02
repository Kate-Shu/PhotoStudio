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

    if (widthMenu < widthAllItems){ //when current widthMenu becomes shorter during narowing than widthAllItems;
      const lastItem = menuItems[menuItems.length - 1]; //get last item;
      lastWidthItems = lastItem.offsetWidth + parseFloat(getComputedStyle(lastItem).marginRight);
      burgerList.prepend(lastItem);//take from menuItems(menuList) and add in burgerList;
      return updateMenu (menu, menuList, burgerMenu, burgerBtn, burgerList); //recursion
    };

    if (widthMenu > widthAllItems + lastWidthItems && burgerItems.length){
      const firstElem = burgerItems[0];//take 1st item from burger;
      menuList.append(firstElem);//return 1st elem from burger to menuList;
      return updateMenu (menu, menuList, burgerMenu, burgerBtn, burgerList);
    };

    checkBurgerItems(burgerItems.length, burgerBtn);

  };

  const checkBurgerItems = (burgerItemsCount, burgerBtn) => {
    if (burgerItemsCount) {
      burgerBtn.classList.add('amenu__burger-btn_active')
    } else {
      burgerBtn.classList.remove('amenu__burger-btn_active')
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
    Android: function(){
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function(){
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function(){
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function(){
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function(){
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function(){
      return(
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows() );
    }
  };
  
  if (isMobile.any()){
    document.body.classList.add('_touch');
    console.log('is touch');
  }else{
    document.body.classList.add('_pc');
    console.log('is pc');
  }

})
()