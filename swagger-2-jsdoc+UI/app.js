import express from 'express';
import bodyparser from 'body-parser';
import routes from './routes/index';
import swaggerJSDoc from 'swagger-jsdoc';


const app = express();

// swagger
const swaggerDefinitions = {
    info: {
        title: 'swagger demo',
        version: '1.0.0',
        description: 'demo swagger',
    }, 
    host: 'localhost:3000',
    basePath: '/',
};

// option jsdoc

const options = {
    swaggerDefinition: swaggerDefinitions,
    apis: ['./controllers/*.controller.js']
};

const swaggerSpec = swaggerJSDoc(options);

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// swagger ui
app.use('/static', express.static('public'));

app.use('/api', (req, res, next) => {
    next();
}, routes);

// swagger route
app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});


app.use((req, res, next) => {
    res.status(404).json({
        "status": res.statusCode,
        "msg": "API not found"
    })
});

app.listen('3000', () => {
    console.log('Listening on 3000');
})