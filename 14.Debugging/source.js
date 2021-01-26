const myArr = ['a', 'b', 'c', 'd', 'e', 'f']; 
for (member of myArr) {
    const el = document.createElement('p'); 
    el.innerHTML = member; 
    document.body.appendChild(el);
}
