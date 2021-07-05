export default {
  $window: window,
  $document: document,
  $html: document.documentElement,
  $body: document.body,
  $headerSearch: document.querySelector('.header-search'),
  $headerSearchInput: document.querySelector('.header-search__input'),
  $heroSlider: document.querySelector('.hero__slider'),
  $productsOfTheWeek: document.getElementById('products_of_the_week'),
  $new: document.getElementById('new'),
  $productsOfTheMonth: document.getElementById('products_of_the_month'),
  $hits: document.getElementById('hits'),
  $discount: document.getElementById('discount'),
  $recentlyView: document.getElementById('recently_view'),
  $brands: document.getElementById('brands'),
  $aboutShop: document.querySelector('.about-shop'),
  $filterHeader: document.querySelectorAll('.filter__header:not(.filter__header--selected)'),
  $filterPriceSlider: document.querySelector('.filter-price__slider'),
}