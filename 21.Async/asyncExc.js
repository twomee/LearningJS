//1-----------------------------------
function checkIfNumberOk(number){
    let promise = new Promise(function(resolve,reject) {
        if(number > 10){
            resolve('Number is OK');
        } else{
            reject('Bad Number');
        }
    });
    return promise;
}

async function checkIfNumberOkMain(nunber){
    try{
        let result = await checkIfNumberOk(nunber);
        console.log(result);
    }catch(error){
        console.log('error: ' + error);
    }
}

checkIfNumberOkMain(11);

//2-----------------------------------
function myPromiseA(number) {
    let myPromise = new Promise((resolve, reject) => {
        resolve('Promise A success!');
    });
    return myPromise;
}
function myPromiseB(number) {
    let myPromise = new Promise((resolve, reject) => {
        resolve('Promise B success!'); 
    });
    return myPromise;
    }
function myPromiseC(number) {
    let myPromise = new Promise((resolve, reject) => {
        resolve('Promise C success!'); 
    });
    return myPromise;
}

async function allPromises(number){
    try{
        let promiseA = await myPromiseA(number);
        let promiseB = await myPromiseB(number);
        let promiseC = await myPromiseC(number);
        console.log(`promiseA: ${promiseA}, promiseB: ${promiseB}, promiseC: ${promiseC}`);
    }catch(error){
        console.error(`error: ${error}`);
    }
}

allPromises(1);