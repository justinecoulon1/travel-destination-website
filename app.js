import express from 'express';
import { engine } from 'express-handlebars';
import data from './data.json' with { type: 'json'};

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', engine({
    helpers: {
        json: function (context) {
            return JSON.stringify(context);
        }
    }
}));

app.get('/', (req, res) => {

    res.render('index')
})

app.get('/destinations', (req, res) => {
    const destinations = data;

    if (!destinations) {
        return res.status(404).send("Error");
    }

    res.render('destinations', { destinations })
})

app.get('/destinations/:destinationId', (req, res) => {
    const destinationId = req.params.destinationId;
    const destination = data.find(dest => dest.id === parseInt(destinationId));

    if (!destination) {
        return res.status(404).send("Destination not found");
    }

    res.render('destination', { destination });
});

app.get('/about', (req, res) => {
    res.status(200).render('about');
})

app.post('/about', (req, res) => {
    console.log(req.body);

    if (!req.body?.email.trim() || !req.body?.category.trim() || !req.body?.message.trim()) {
        res.status(200).render('about', { error: 'Veuillez completer les champs obligatoires du formulaire !' });
        return;
    }

    res.redirect('/about');
    openLightbox()
});

app.listen(3000, () => {
    console.log(`Web server is running on port 3000`)
})