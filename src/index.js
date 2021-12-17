const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//API RECEBE PARAMS EM json
app.use(bodyParser.json());
//API RECEBE PARAMS via url
app.use(bodyParser.urlencoded({ extended: false }));

// req => params a receber
// res => objeto para enviar resposta ao requester
app.get('/', (req, res) => {
    res.send('OK');
});

require('./controllers/paymentController')(app);


app.listen(3200);