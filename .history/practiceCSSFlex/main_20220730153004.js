let blockFlex = document.querySelector('.flex');
let container = document.querySelector('.container');

blockFlex.addEventListener('click',event=>{
    if( container.style.display == 'box'){
        container.style.display = 'flex';
    } else{
    container.style.dispay = 'box';
    }
})