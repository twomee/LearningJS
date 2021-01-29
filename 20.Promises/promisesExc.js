//1-----------------------------------
function getText(){
    let promise = new Promise(function (resolve,reject) {
        setTimeout(() => {
            resolve('Two seconds passed');
        },2000);
    });
    return promise;
}

getText().then(
    (answer) => {
       return answer;
})
    .then((answer) => {
        console.log(answer);
});

//2-----------------------------------
function checkIfNumberOK(number){
    let promise = new Promise(function (resolve,reject){
        if(number > 10){
            resolve('Number OK');
        }else{
            reject('Number Bad');
        }
    });
    return promise;
}

checkIfNumberOK(5).then(
    (answer) => {console.log(answer);},
    (error) => {console.log('error: ' + error);}
);

checkIfNumberOK(11).then(
    (answer) => {console.log(answer);},
    (error) => {console.log('error: ' + error);}
);