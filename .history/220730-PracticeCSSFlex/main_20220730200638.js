let container = document.querySelector('.container');
let boxes = document.querySelectorAll('.box');

let buttonFlex = document.querySelector('.flexButton');
let buttonsFlexDirection = document.querySelector('.flex-directions');
let buttonsFlexWrap = document.querySelector('.flex-wraps');
let buttonsJustifyContent = document.querySelector('.justify-contents');
let buttonsAlignItem = document.querySelector('.align-items');

let clicked = ''
function setClicked(clickedItem){
    if (clicked){
        clicked.style.backgroundColor = '';}
    clickedItem.style.backgroundColor = 'lightBlue';
    clickedItem.style.border = '1px solid gray';
    clickedItem.style.borderRadius = '3px';
    clicked = clickedItem;
}
buttonFlex.addEventListener('click', ()=>{
    if( container.style.display == 'flex'){
        container.style.display = '';
        buttonFlex.textContent = 'display: flex';
        setClicked(buttonFlex);
    } else if (container.style.display == ''){
        container.style.display = 'flex';
        buttonFlex.textContent = 'display: block';
        setClicked(buttonFlex);
    }
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
        setClicked(event.target);
    }
})

buttonsFlexWrap.addEventListener('click',(event)=>{
    if (event.target.tagName == 'BUTTON'){
        switch (event.target.attributes.class.value){
            case 'flex-wrap-nowrap':
                container.style.flexWrap = 'nowrap';
                break
            case 'flex-wrap-wrap':
                container.style.flexWrap = 'wrap';
                break
            case 'flex-wrap-wrap-reverse':
                container.style.flexWrap = 'wrap-reverse';
                break
        }
        setClicked(event.target);
    }
})

buttonsJustifyContent.addEventListener('click', event => {
    if (event.target.tagName == 'BUTTON'){
        switch (event.target.attributes.class.value){
            case 'justify-content-flex-start':
                container.style.justifyContent = 'flex-start';
                break
            case 'justify-content-flex-end':
                container.style.justifyContent = 'flex-end';
                break
            case 'justify-content-center':
                container.style.justifyContent = 'center';
            case 'justify-content-space-between':
                container.style.justifyContent = 'space-between';
                break
            case 'justify-content-space-around':
                container.style.justifyContent = 'space-around';
                break
            case 'justify-content-space-evenly':
                container.style.justifyContent = 'space-evenly';
                break
    }
        setClicked(event.target);
    }
})

buttonsAlignItem.addEventListener('click', event => {
    if (event.target.tagName == 'BUTTON'){
        switch (event.target.attributes.class.value){
            case 'align-items-flex-start':
                container.style.alignItems = 'flex-start';
                break
            case 'align-items-flex-end':
                container.style.alignItems = 'flex-end';
                break
            case 'align-items-center':
                container.style.alignItems = 'center';
                break
            case 'align-items-baseline':
                container.style.alignItems = 'baseline';
                break
    }
        setClicked(event.target);
    }
})
