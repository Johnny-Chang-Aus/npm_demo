const { assert } = require('console');

const fs = require('fs').promises;
// ()() 前面的括號會將一個值包裝起來, 後面的括號會去調用這個值, 也就是將async函數包裝在前面的括號然後背後面的括號所調用
(async() => {
    try {
        const data = await fs.readFile('./test1.js', 'utf-8');
        console.log(data);
    } catch (err) {
        console.error('catch:');
        console.error(err);
    } finally {
        console.log('finally')
    }

    try {
        const data = await fs.writeFile('./test1.js', "123abc");
        console.log(data);
    } catch (err) {
        console.error('catch:');
        console.error(err);
    } finally {
        console.log('finally')
    }
})().catch(err => {
    console.error(err);
});

//async await的好處就是可以加入javascript的try catch

//若使用try catch寫法, 須排除 promise zen調用及callback調用
//await同步調用法或是不帶異部的代碼才能用try catch
//try catch寫法後可加上[finally語法], 無論出錯與否, 都會執行finally內的代碼
//[finally語法] 可以用於清理暫存文件

function fn1() {
    return 1;
}
assert.equal(fn1(), 1);


//await 只能用在async函數內, 作用為取async內部真正的值
//下面三種fn2寫法均為相同效果. async前綴只能算是syntax sugar
async function fn2() {
    return 1;
}
function fn2() {
    return new Promise(function(resolve, reject){
        resove(1);
    });
}
function fn2() {
    return Promise.resolve(1);
}

assert.ok(fn2() instanceof Promise); //結果則為true
fn2().then((data) => {console.log(date)}); //取async函數回傳值的方法

const fn3 = async () => { return 1}; //此寫法與上述fn2功能上完全相同, 只是換個寫法