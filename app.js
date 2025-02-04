import express from 'express';
import { engine } from 'express-handlebars';
import data from './data.json' with { type: 'json'};

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));


app.get('/', (req, res) => {

    res.render('index')
})

app.get('/destinations', (req, res) => {

    res.render('destinations')
})

app.listen(3000, () => {
    console.log(`Web server is running on port 3000`)
})