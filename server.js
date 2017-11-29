var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Cookie = require('./api/models/cookiesModel'),
    bodyParser = require('body-parser');

    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/Cookiedb');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
    var routes = require('./api/routes/cookiesRoutes');
    routes(app);
app.listen(port);

console.log('cookies list restful api server started on: ' +port);