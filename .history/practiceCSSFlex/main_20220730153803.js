let buttonFlex = document.querySelector('.flex');
let container = document.querySelector('.container');

buttonFlex.addEventListener('click',event=>{
    console.dir(container.style);
    if( container.style.display == 'flex'){
        container.style.display = '';
        buttonFlex.textContent = 'flex';
    } else if (container.style.display == ''){
    container.style.display = 'flex';
    buttonFlex.textContent = 'release flex';
    }
})