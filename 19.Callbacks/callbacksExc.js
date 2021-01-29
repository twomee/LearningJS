//1-----------------------------------
function getCurrencyRate(cb) { 
    setTimeout(() => {
        cb(4); 
    }, 1000);
}

getCurrencyRate(
    (number) => {
        console.log(number);
    }
);

//2-----------------------------------
function getFileFromHardDisk(filename, cb){
    setTimeout(() => {
        let result = cb(filename);
        console.log(result);
    }, 1000);
}

let result = getFileFromHardDisk(
    'text.txt',
    (filename) => {
        return `this is from filename ${filename}`;
    }
);