import vars from '../_vars';
import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

if (vars.$productsOfTheWeek) {
  const productsOfTheWeekSlider = new Swiper(vars.$productsOfTheWeek.querySelector('.swiper-container'), {
    loop: true,
    slidesPerView: 4,
    navigation: {
      nextEl: vars.$productsOfTheWeek.querySelector('.products-carousel__next'),
      prevEl: vars.$productsOfTheWeek.querySelector('.products-carousel__prev')
    },
  });
}

if (vars.$new) {
  const newSlider = new Swiper(vars.$new.querySelector('.swiper-container'), {
    loop: true,
    slidesPerView: 5,
    navigation: {
      nextEl: vars.$new.querySelector('.products-carousel__next'),
      prevEl: vars.$new.querySelector('.products-carousel__prev')
    },
  });
}

if (vars.$productsOfTheMonth) {
  const productsOfTheMonth = new Swiper(vars.$productsOfTheMonth.querySelector('.swiper-container'), {
    slidesPerView: 1,
    slidesPerColumn: 3,
    navigation: {
      nextEl: vars.$productsOfTheMonth.querySelector('.products-carousel__next'),
      prevEl: vars.$productsOfTheMonth.querySelector('.products-carousel__prev')
    },
  })
}

if (vars.$hits) {
  const productsOfTheMonth = new Swiper(vars.$hits.querySelector('.swiper-container'), {
    slidesPerView: 1,
    slidesPerColumn: 3,
    navigation: {
      nextEl: vars.$hits.querySelector('.products-carousel__next'),
      prevEl: vars.$hits.querySelector('.products-carousel__prev')
    },
  })
}

if (vars.$discount) {
  const productsOfTheMonth = new Swiper(vars.$discount.querySelector('.swiper-container'), {
    slidesPerView: 1,
    slidesPerColumn: 3,
    navigation: {
      nextEl: vars.$discount.querySelector('.products-carousel__next'),
      prevEl: vars.$discount.querySelector('.products-carousel__prev')
    },
  })
}

if (vars.$recentlyView) {
  const productsOfTheWeekSlider = new Swiper(vars.$recentlyView.querySelector('.swiper-container'), {
    loop: true,
    slidesPerView: 5,
    navigation: {
      nextEl: vars.$recentlyView.querySelector('.products-carousel__next'),
      prevEl: vars.$recentlyView.querySelector('.products-carousel__prev')
    },
  });
}
