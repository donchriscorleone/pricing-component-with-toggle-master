const toggle = document.querySelector('.switch');
const input = document.querySelector('input');
const basicPrice = document.querySelector('.card-basic-price');
const profPrice = document.querySelector('.card-professional-price');
const masterPrice = document.querySelector('.card-master-price');

input.addEventListener('click', (e) => {
    let isMonthly = input.checked;

    if (isMonthly) {
        basicPrice.innerHTML = "&dollar;19.99"
        profPrice.innerHTML = "&dollar;24.99"
        masterPrice.innerHTML = "&dollar;39.99"
    } else {
        basicPrice.innerHTML = "&dollar;199.99"
        profPrice.innerHTML = "&dollar;249.99"
        masterPrice.innerHTML = "&dollar;399.99"
    }
})