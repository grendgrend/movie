var express = require('express'),
    fs = require('fs'),
    app = express();

app.listen( 3000 );
console.log('Starting on port 3000');

app.use( '/public', express.static( __dirname + '/public' ) );
/* Routers */

/* GET */
app.get('/movie', function (req, res) {
    res.send('Movie');
    //res.json();
});
app.get('/search', function (req, res) {
    res.type('.html');
    fs.readFile( __dirname +'/index.html', (err, data) => {
        if (err) throw err;
        res.send( data.toString() );
    });
});

