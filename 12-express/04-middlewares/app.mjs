import express from 'express';
import morgan from 'morgan';
import qs from 'querystring';

const app = express();

// //в middleware next функция ОБЯЗАТЕЛЬНА!!!
// const logger = (req, res, next) => {
//     console.log(req.method, req.path);
//     next();
// }

app.use(morgan('tiny'));

// app.use((req, res, next) => {
//     let data = '';
//     req.on('data', (chunk) => data += chunk);
//     req.on('end', () => {
//         const parsedJson = JSON.parse(data);
//         req.body = parsedJson;
//         next();
//     });
// })

// данный middleware выполняет все то же самое, что и код выше, конвертирует json в объект и присваивает его req.body
app.use(express.json());

// app.use((req, res, next) => {
//     if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
//         let data = '';
//         req.on('data', (chunk) => data += chunk.toString());
//         req.on('end', () => {
//             req.body = qs.parse(data);
//             next();
//         });
//     } else {
//         next();
//     }
// })

// данный middleware так же выполняет все то же самое, что и код выше, конвертирует данные формы в объект и присваивает его req.body
app.use(express.urlencoded({extended: true}))

app.use((req, res) => {
    console.log(req.body);
    res.send('This is express server')
});

app.listen(5000, () => console.log('server is listening at port 5000'));