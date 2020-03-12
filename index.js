// Flybuys Lambda Function to pass infinity event data into Snowflake

const snowflake = require('snowflake-sdk');

// Create the connection
// snowflake.configure( {ocspFailOpen: false} );
var connection = snowflake.createConnection( {
    account: "",
    username: "",
    password: "",
});

connection.connect(
    function(err, conn) {
        if (err) {
            console.error('Unable to connect: ' + err.message);
            }
        else {
            console.log('Successfully connected to Oracle Demo Snowflake Instance.');
            // Optional: store the connection ID.
            connection_ID = conn.getId();
            }
        }
    );

// connection.execute({
//     sqlText: 'create database testdb',
//     complete: function(err, stmt, rows) {
//       if (err) {
//         console.error('Failed to execute statement due to the following error: ' + err.message);
//       } else {
//         console.log('Successfully executed statement: ' + stmt.getSqlText());
//       }
//     }
// });

// connection.destroy(function(err, conn) {
//     if (err) {
//       console.error('Unable to disconnect: ' + err.message);
//     } else {
//       console.log('Disconnected connection with id: ' + connection.getId());
//     }
// });