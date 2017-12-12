const app = require('./app');
const config = require('./config');

app.set('port', process.env.PORT || config.serverPort);

app.listen(app.get('port'), () => {
  console.log(`🌍  Server is running at port: ${app.get('port')}`);
});
