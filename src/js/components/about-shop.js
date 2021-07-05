import vars from '../_vars';

if (vars.$aboutShop) {
  vars.$aboutShop.querySelector('.about-shop__read-more').addEventListener('click', (e) => {
    vars.$aboutShop.querySelector('.about-shop__text').classList.add('about-shop__text--show');
    e.target.remove();
  })
}