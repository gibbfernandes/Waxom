import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.menuIcon = $('.site-header__util__icon--mobile-menu');
    this.menuContent = $('.site-header__menu');
    this.siteHeader = $('.site-header');
    this.dropdownHover = $('.main-navigation li');
    this.parentDropdown = $('.dropdown-menu li');
    this.dropdownParent = $('.mobile-navigation .dropdown a.parent');
    this.dropdownSubParent = $('.mobile-navigation .subParent');
    this.events();
  }

  events() {

    this.menuIcon.click(this.toggleTheMenu.bind(this));

    this.dropdownHover.hover(this.hoverTheMenu, this.unHoverTheMenu);

    this.dropdownParent.click(this.dropdownClick);
    this.dropdownSubParent.click(this.dropdownSubClick);

    this.parentDropdown.hover(this.parentDropdownHighlight, this.parentDropdownUnhighlight);

  }

  toggleTheMenu() {
    this.menuContent.toggleClass('site-header__menu--is-visible');
    this.menuIcon.toggleClass('icon-menu icon-close');
  }

  hoverTheMenu(e) {
    /*console.log(this);*/
    $(this).find('ul:first').css('display', 'block');
  }

  unHoverTheMenu() {
    /*console.log('out');*/
    $(this).find('ul:first').css('display', 'none');
  }

  parentDropdownHighlight() {
    $(this).addClass("dropdown-menu__hover");
  }

  parentDropdownUnhighlight() {
    $(this).removeClass("dropdown-menu__hover");
  }

  dropdownClick() {
    /*console.log(this);*/
    console.log('click');
   $(this).siblings('.dropdown-menu').toggleClass('dropdown-menu--is-visible');
  }

  dropdownSubClick() {
    /*console.log(this);*/
    console.log('subclick');
    $(this). siblings('.dropdown-menu__sub-menu').toggleClass('dropdown-menu__sub-menu--is-visible');
  }

}

export default MobileMenu;
