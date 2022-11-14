const express = require("express");
const connectRoute = express.Router();

//get

connectRoute.route("/").get((req, res) => {
  res.send("Hello World ! ...");
});
// const config={username:'BMNeiKxTvuIzonQYAyPacSGz',password:'gSt40WLxW510ZKKMgu7BLwICqSb7hiHiA4iFtD_F7GbGqK3pZPcB.3l0D+E6u0bhqfGIudw-tkqejhAyqJUmAodZq6_NP9MBdFYaLR-jzL-20,ysdqGgXP7xPGInHFEd',contactPoint:'13.112.103.84',localDataCenter:'',keyspace:'',port:9042}
// let authProvider = new cassandra.auth.PlainTextAuthProvider(
//     config.username,
//     config.password
// );

// let client = new cassandra.Client({
//     contactPoints: [`${config.contactPoint}:${config.port}`],
//     authProvider: authProvider,
//     localDataCenter: config.localDataCenter,
//     keyspace:config.keyspace,
//     sslOptions: {
//         secureProtocol: "TLSv1_2_method"
//     },
// });
// client.connect();

module.exports=connectRoute;
