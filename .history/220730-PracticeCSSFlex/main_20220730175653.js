let container = document.querySelector('.container');
let boxes = document.querySelectorAll('.box');

let buttonFlex = document.querySelector('.flexButton');
let buttonsFlexDirection = document.querySelector('.flex-directions');
let buttonsFlexWrap = document.querySelector('flex-wraps');

buttonFlex.addEventListener('click', ()=>{
    if( container.style.display == 'flex'){
        container.style.display = '';
        buttonFlex.textContent = 'display: flex';
    } else if (container.style.display == ''){
        container.style.display = 'flex';
        buttonFlex.textContent = 'display: block';
    }
    console.dir(container.style.display);
})

buttonsFlexDirection.addEventListener('click', event => {
    if (event.target.tagName == 'BUTTON'){
        switch (event.target.attributes.class.value){
            case 'flex-direction-row':
                container.style.flexDirection = 'row';
                break
            case 'flex-direction-column':
                container.style.flexDirection = 'column';
                break
            case 'flex-direction-row-reverse':
                container.style.flexDirection = 'row-reverse';
                break
            case 'flex-direction-column-reverse':
                container.style.flexDirection = 'column-reverse';
                break
        }
    }
})

buttonsFlexWrap.addEventListener('click',(event)=>{
    if (event.target.tagName == 'BUTTON'){
        switch (event.target.attributes.class.value){
            case 'flex-wrap':
                container.style.flexWrap = 'wrap';
                break
            case 'flex-direction-column':
                container.style.flexDirection = 'column';
                break
            case 'flex-direction-row-reverse':
                container.style.flexDirection = 'row-reverse';
                break
            case 'flex-direction-column-reverse':
                container.style.flexDirection = 'column-reverse';
                break
        }
})
