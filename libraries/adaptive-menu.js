(() => {
let burgerWidth = 0;
let lastWidthItems = 0;

const init = (headerNav, headerMenu, headerMenuItem, menuBurger) => {
 headerMenuItem.forEach(elem => {
  elem.classList.add('amenu-item');
 }); 

 menuBurger.classList.add('amenu-burger');

 const [burgerBtn, burgerList] = createMenuBurger(menuBurger);

 updateMenu(headerNav, headerMenu, menuBurger, burgerList, burgerBtn);

 window.addEventListener('resize', () => {
 updateMenu(headerNav, headerMenu, menuBurger, burgerList, burgerBtn)
 });
};

const createMenuBurger = (menuBurger) => {
 const burgerBtn = document.createElement('button');
 menuBurger.append(burgerBtn);
 burgerBtn.classList.add('amenu-burger-btn');

 burgerBtn.addEventListener('click', () => {
  menuBurger.classList.toggle('.amenu-burger-open');
 });

 const burgerList = document.createElement('ul');
 menuBurger.append(burgerList);
 burgerList.classList.add('amenu-burger-list');

 return [burgerBtn, burgerList];
}

const updateMenu = (headerNav, headerMenu, menuBurger, burgerList, burgerBtn) => {
 const menuItems = headerMenu.querySelectorAll('amenu-item');
 const burgerItems = burgerList.querySelectorAll('amenu-item');
 
 const widthHeaderNav = headerNav.offsetWidth;

 burgerWidth = menuBurger.offsetWidth || burgerWidth;

 const widthAllItems = [...menuItems].reduce((acc, elem) => {
  return acc + elem.offsetWidth + parseFloat(getComputedStyle(elem).marginRight)
 }, 0) + burgerWidth;

 console.log(widthAllItems);

if(widthHeaderNav < widthAllItems){
 const lastItem = menuItems[menuItems.length - 1];
 lastWidthItems = lastItem.offsetWidth + parseFloat(getComputedStyle(lastItem).marginRight);
 burgerList.prepend(lastItem);
 return updateMenu(headerNav, headerMenu, menuBurger, burgerList, burgerBtn);
}
};

 window.amenu = (selHeaderNav, selHeaderMenu, selHeaderMenuItem, selMenuBurger) => {
  const headerNav = document.querySelector(selHeaderNav),
  headerMenu = document.querySelector(selHeaderMenu),
  headerMenuItem = document.querySelectorAll(selHeaderMenuItem),
  menuBurger = document.querySelector(selMenuBurger);

  init(headerNav, headerMenu, headerMenuItem, menuBurger);
 };
}) ();