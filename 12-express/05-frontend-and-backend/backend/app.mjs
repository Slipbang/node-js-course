import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use((req, res) => {
    const personData = {
        name: 'Dmitry',
        isStudent: true
    }
    res.json(personData);
});

app.listen(5000, () => console.log('server is listening at port 5000'));