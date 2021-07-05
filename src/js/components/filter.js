import vars from '../_vars'
import noUiSlider from 'nouislider'

if (vars.$filterHeader) {
  vars.$filterHeader.forEach(el => {
    el.addEventListener('click', (e) => {
      const filterItem = e.target.closest('.filter__item');
      filterItem.classList.toggle('filter__item--open');
    })
  })
}

if (vars.$filterPriceSlider) {
  const $priceSlider = vars.$filterPriceSlider;
  noUiSlider.create($priceSlider, {
    start: [100, 10000],
    step: 50,
    connect: true,
    range: {
      'min': [100],
      'max': [10000]
    }
  })

  const price0 = document.getElementById('price-0');
  const price1 = document.getElementById('price-1');
  const inputs = [price0, price1];

  $priceSlider.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    $priceSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}