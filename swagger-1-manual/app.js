import express from 'express';
import bodyparser from 'body-parser';
import routes from './routes/index';


const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/static', express.static('public'));

app.use('/api', (req, res, next) => {
    next();
}, routes);


app.use((req, res, next) => {
    res.status(404).json({
        "status": res.statusCode,
        "msg": "API not found"
    })
});

app.listen('3000', () => {
    console.log('Listening on 3000');
})