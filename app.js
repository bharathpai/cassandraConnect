var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const cassandra  = require("cassandra-driver");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var connectRoute = require('./routes/');

// cassandra connection start
// const config={username:'cassandra',password:'cassandra',contactPoint:'13.112.103.84',localDataCenter:'',keyspace:'',port:9042}
// let authProvider = new cassandra.auth.PlainTextAuthProvider(
//     config.username,
//     config.password
// );


// let client = new cassandra.Client({
//       contactPoints: [`${config.contactPoint}:${config.port}`],
//       authProvider: authProvider
//       // localDataCenter: config.localDataCenter,
//       // keyspace:config.keyspace,
//       // sslOptions: {
//       //     secureProtocol: "TLSv1_2_method"
//       // },
//   });
//   client.connect();
 
const { Client } = require("cassandra-driver");
const cassandrapath ="C:\Users\devik\Downloads\secure-connect-test-cassandra";
async function run() {
   const client = new Client({
      cloud: {
      secureConnectBundle: cassandrapath,
      },
      credentials: {
      username: config.username,
      password: config.password,
      },
   });
   await client.connect();
   // Execute a query
   const rs = await client.execute("SELECT * FROM system.local");
   console.log(`Your cluster returned ${rs.rowLength} row(s)`);
   await client.shutdown();
}
// Run the async function
run();

//cassandra connection end



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/connect',connectRoute)






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
