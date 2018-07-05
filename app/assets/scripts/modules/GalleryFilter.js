import $ from 'jquery';
import mixitup from 'mixitup';

class GalleryFilter {
  constructor() {
    this.grid = $('.grid');
    this.initialised();
    this.galleryListItems = $('.gallery li');
    this.onClickListItems();
  }

  onClickListItems() {
    var that = this;
    this.galleryListItems.on('click', function() {
      that.galleryListItems.removeClass('active');
      $(this).addClass('active');
    });
  }

  initialised() {
    var mixer = mixitup(this.grid);
  }
}

export default GalleryFilter;
