const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'martindaniel.ddns.net',
    user: 
})

connection.connect((err)=>{
    if(err){
        console.error('Fehler beim Verbinden zur Datenbank' + err.stack);
        return;
    }
    console.log('Verbunden als ID' + connection.threadId);
})