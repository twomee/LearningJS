let button = document.getElementById('myButton');
let div = document.getElementById('myDiv');
let activated = true
button.addEventListener('click', (event) => {
    if(activated){
        div.style.backgroundColor = 'red';
        activated = false;
    }else{
        div.style.backgroundColor = 'yellow';
        activated = true;
    }
    div.style.width = '100px';
    div.style.height = '100px';
});