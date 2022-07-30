let container = document.querySelector('.container');
let boxes = document.querySelectorAll('.box');

let buttonFlex = document.querySelector('.flex');

buttonFlex.addEventListener('click',event=>{
    console.dir(container.style);
    if( container.style.display == 'flex'){
        container.style.display = '';
        buttonFlex.textContent = 'display: flex';
    } else if (container.style.display == ''){
    container.style.display = 'flex';
    buttonFlex.textContent = 'display: block';
    }
})