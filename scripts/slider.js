// photos
var splidePhotos = new Splide( '#splide_place_photos', {
  classes: {
    pagination  : 'splide__pagination',
		page        : 'splide__pagination__page product__photos-pagination-buttons'
  },
  perPage: 3,
  focus: 0,
  autoWidth: true,
  omitEnd: true,
  drag: 'free',
  snap: false,
  arrows: false,
  breakpoints: {
    764: {
      destroy: true,
    },
  }
} );

splidePhotos.mount();
