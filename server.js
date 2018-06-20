const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fileUpload = require('express-fileupload');


const app = express();
const cors = require('cors');
const originsWhitelist = [
    'http://localhost:4200',      //this is my front-end url for development
    'https://survey-forms.herokuapp.com'
];

const corsOptions = {
    origin: function(origin, callback){
        const isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials:true
};


const port = process.env.PORT || 5000;

const dir = path.join(__dirname, '/dist/survey-forms');

app.use(cors(corsOptions));
app.use(express.static(dir));
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true })); ///нужное
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.listen(port, () => console.log(`Listening on port ${port}`));

require('./middleware/signUp')(app);
require('./middleware/signIn')(app);
require('./middleware/removeForm')(app);

app.get('/*', function (req, res) {
   res.send('lul');
});