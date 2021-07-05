import vars from '../_vars';
import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

if (vars.$brands) {
  const brandsSlider = new Swiper(vars.$brands, {
    loop: true,
    slidesPerView: 7,
    spaceBetween: 20,
    navigation: {
      nextEl: vars.$brands.querySelector('.brands__slider-next'),
      prevEl: vars.$brands.querySelector('.brands__slider-prev')
    },
  });
}