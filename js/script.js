function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu-button', '.burger-menu-lines');
  let links = menu.find('.burger-menu-link');
  let overlay = menu.find('.burger-menu-overlay');
  
  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  
  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
  
  function toggleMenu(){
    menu.toggleClass('burger-menu-active');
    
    if (menu.hasClass('burger-menu-active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');