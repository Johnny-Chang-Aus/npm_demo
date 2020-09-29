const fs = require('fs');

fs.readFile('./test1.js', 'utf-8', (err, data) => {
    if(err) {
        // console.log('err:');
        console.error(err);
    } else {
        // console.log('data:');
        console.log(data);
    }    
});