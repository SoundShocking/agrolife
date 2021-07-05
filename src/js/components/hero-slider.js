import vars from '../_vars';
import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);

const heroSlider = new Swiper(vars.$heroSlider, {
  loop: true,
  containerModifierClass: 'hero-',
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }
})