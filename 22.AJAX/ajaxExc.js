//1-----------------------------------
fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        document.write(result.title);
    });

//2-----------------------------------
fetch('http://jsonplaceholder.typicode.com/posts/1',
    {
        method: 'DELETE',
    })
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        document.write('Deletion successful');
    })