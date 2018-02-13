const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>App is working! Now with Nodemon!</h1>');
});

app.get('/test-route', (req, res) => {
    res.send('<h1>This is a test route, if you are seeing this all is well.</h1>');
});

app.get('/api/get-user', (req, res) => {
    res.send({username: 'BobTheGreat', email: 'bob@mail.com', name: 'Bob'});
});

app.get('/api/get-articles', (req, res) => {
    res.send(['article-1', 'article-2', 'article-3']);
});

app.listen(PORT, () => {
    console.log('App running on PORT:' + PORT);
});
