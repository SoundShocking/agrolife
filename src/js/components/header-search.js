import vars from '../_vars';

vars.$headerSearchInput?.addEventListener('focus', e => {
  e.target.classList.add('header-search__input--active');
  vars.$headerSearch.querySelector('.header-search__results').classList.add('search-results--active')
});

vars.$headerSearchInput?.addEventListener('blur', e => {
  e.target.classList.remove('header-search__input--active');
  vars.$headerSearch.querySelector('.header-search__results').classList.remove('search-results--active')
});
