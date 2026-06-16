//I am trying to connect to a PostgreSQL database and make some queries. Though I have read a few threads here, the docs, and other blogs, I'm unable to make it works.

//My function looks like this:

const postgreSQL = require('pg');

const config = {
  host: 'host',
  database: 'db',
  user: 'user',
  password: 'pass',
  port: 0000,
  max: 5, // max number of clients in the pool
  idleTimeoutMillis: 30000
};
let pool = new postgreSQL.Pool(config);

//.........other code.........

function CheckGeometryType(pool, tableName, column) {

  const schema = 'schema';
  let geometryValue = undefined;
  pool.connect(function(err, client, done) {
    client.query(`SELECT ST_GeometryType(${column})
                  AS geometryType FROM ${schema}.${tableName} LIMIT 1`);
    done(err);
    if (err) {
      console.log('Something went wrong. ' + err);
    }
    console.log("Result: " + queryResult.rows[0]);
    switch (queryResult) {
      // do things with result
    }
    done();
  });

  return geometryValue;
}