import express from 'express';
import mysql from 'mysql';
import config from 'config';
import morgan from 'morgan';



// Initialize http server
const app = express();

//create mysql connection pool
const pool = mysql.createPool(config.get('mysql'));

//set up logs
app.use(morgan('combined'));

//use router
require('./routes/index.js')(app,pool);

// Launch the server on port 3001
const server = app.listen(3001, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});