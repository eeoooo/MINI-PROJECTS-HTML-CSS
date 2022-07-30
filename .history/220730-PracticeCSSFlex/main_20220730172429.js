let container = document.querySelector('.container');
let boxes = document.querySelectorAll('.box');

let buttonFlex = document.querySelector('.flex');

let buttonsFlexDirection = document.querySelector('.flex-directions');
let buttonFlexDirectionRow = document.querySelector('.flex-direction-row');
let buttonFlexDirectionColumn = document.querySelector('.flex-direction-column');
let buttonFlexDirectionRowReverse = document.querySelector('.flex-direction-row-reverse');
let buttonFlexDirectionColumnReverse = document.querySelector('.flex-direction-column-reverse');

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

buttonsFlexDirection.addEventListener('click', event => {
    if (event.target.tagName == 'BUTTON'){
        console.dir(event.target.attributes.class.value);
        switch (event.target.attributes.class.value){
            case flex-direction-row:
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
