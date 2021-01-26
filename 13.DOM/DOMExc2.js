let inputValue = document.getElementById('myInput');
let button = document.getElementById('myButton');
let list = document.getElementById('myList');
button.addEventListener('click', (event) => {
    let li;
    for(let i=0; i<inputValue.value; i++){
        console.log(i)
        li = document.createElement('li');
        li.innerHTML = i + 1;
        list.appendChild(li);
    }
});
