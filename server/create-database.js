// Use and run this file to create your database and tables
// Just edit the necessary variables and queries

const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PW,
  host: "localhost",
  port: 5432
});


// How to create DB query
const createDBQry = `CREATE DATABASE ${process.env.POSTGRES_DB};`;

// How to create DB table query
const createTblQry = `CREATE TABLE accounts(
  sample_id serial PRIMARY KEY,
  username VARCHAR ( 50 ) UNIQUE NOT NULL,
  password VARCHAR ( 50 ) UNIQUE NOT NULL
);`;

// Query pool
pool
  .query(createDBQry) // Change the appropriate query command
  .then((response) => {
    console.log("Query successful!");
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = pool;