const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PW,
  host: "localhost",
  port: 5432,
  database: process.env.POSTGRES_DB
});

module.exports = pool;