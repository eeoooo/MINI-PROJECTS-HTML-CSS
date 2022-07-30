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
    console.dir(container.style);
    console.log(event.target.tagName);
    if (event.target.tagName == 'BUTTON'){
        switch (event.target.attributes.nodeValue){
            case 'flex-direction-row':
                console.dir(container.style.flexDirection = 'row');
        }
    }
})
