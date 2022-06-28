var express		= require("express");
var bodyParser	= require("body-parser");
var app			= express();
var path		= require("path");


var homeRoutes		= require("./routes/Home");
var database		= require("./routes/database");
// var orderRoutes		= require("./routes/Orders");
// var productRoutes	= require("./routes/Products");
// var settingRoutes	= require("./routes/Settings");
// var customerRoutes	= require("./routes/Customers");

// mongose.connect('mongodb://localhost:27017/testdb');

app.use(bodyParser.json());

app.use('/home', homeRoutes);
 app.use('/database', database);
// app.use('/products', productRoutes);
// app.use('/orders', orderRoutes);
// app.use('/customers', customerRoutes);
// app.use('/settings', settingRoutes);


app.use('/html', express.static(__dirname + '/html'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname+'/html/index.html'));
});

module.exports = app;