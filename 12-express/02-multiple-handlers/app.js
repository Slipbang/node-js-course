const express = require('express');

const app = express();

// в случае если app.get/post/use/ext... имеют несколько хендлеров, во всех кроме последнего
// требуется использовать колбэк next для вызова следующего хендлера!!!
const firstHandler = (req, res, next) => {
    console.log('first handler');
    next();
};
const secondHandler = (req, res) => {
    console.log('Second handler');
    res.send('Response from Express');
};

app.get('/', firstHandler, secondHandler);

app.listen(5000, () => console.log('Server was started on port 5000'));