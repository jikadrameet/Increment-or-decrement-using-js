
let inc = document.querySelector('#increment');
let counter = document.querySelector('#counter');
let dec = document.querySelector('#decrement')

inc.addEventListener('click',function insr() {
    let values = parseInt(counter.innerText) ;
    values = values + 1;
    counter.innerText = values;

});
dec.addEventListener('click',function decr() {
    let values = parseInt(counter.innerText) ;
    values = values - 1;
    counter.innerText = values;

});
