const mysql = require('mysql2');
require('dotenv').config();


//CREATE CONNECTION POOL
const pool = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database: process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:process.env.PORT || 3306,

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,

    ssl: {
        rejectUnauthorized: false
   }
});

//CONNECT TO DATABASE 
// pool.query(pool,(err, result) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("database connected")
//     }
// });

//TEST CONNECTION
pool.getConnection((err,connection)=>{
    if(err){
        console.log("Database Connection Error",err.message)
    }
    else{
        console.log("database connected")
        connection.release();
    }
})

module.exports = pool.promise();