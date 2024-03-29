var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname);

app.set('views', 'server/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  return res.render('index');
});

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('safe-place api server listening at: %s', app.get('url'));
  });
};

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}
