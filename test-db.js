const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'database-01.cucauy2uclwr.ap-south-2.rds.amazonaws.com',
  user: 'admin',
  password: 'realmlabs123',
  database: 'KazanDB'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database.');
  }
  connection.end();
});
