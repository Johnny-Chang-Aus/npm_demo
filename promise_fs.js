const fs = require("fs");

function readFile(filename, encoding) {
    const fn = (resolve, reject) => {
        fs.readFile(filename, encoding, (err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }    
        });
    };
    return new Promise(fn)
}

readFile("./test.js", "utf-8").then(
    (data) => {
        console.log('data:');
        console.log(data);
    },
    (err) => {
        console.log('err:');
        console.error(err);
    }
);
// 以上為將callback函數轉變成promise函數作法1, 必須熟練掌握

//方法2:以下為新版所支援的寫法, 但並全部支援此寫法
fs.promis.ereadFile("./test.js", "utf-8").then(
    (data) => {
        console.log('data:');
        console.log(data);
    },
    (err) => {
        console.log('err:');
        console.error(err);
    }
);