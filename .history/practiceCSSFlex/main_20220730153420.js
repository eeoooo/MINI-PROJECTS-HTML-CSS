let blockFlex = document.querySelector('.flex');
let container = document.querySelector('.container');

blockFlex.addEventListener('click',event=>{
    console.dir(container.style);
    if( container.style.display == 'box'){
        container.style.display = 'flex';
    } else if (container.style.display == '' || container.style.display =='flex'){
    container.style.display = 'box';
    }
})