import express from 'express';
const app = express();
const consign = require('consign');

const bodyParser = require('body-parser');
var cors = require('cors');


app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));

app.options('*', cors());

consign().include('src/controllers').into(app);


app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
