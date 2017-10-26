var express = require('express');
var app = express();
var api = require('./Api/api.js');
var router = require('./rotuer.js');

app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);

app.use('/api',api);
app.use('/',router);

app.listen(app.get('port'), function() {
    console.log('Express stated on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate');
});