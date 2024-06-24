const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '',
    database: 'trocadelivros',
    port: '3307',
});

connection.connect((err) => {
    if (err) {
        console.log("Erro ao conectar ao banco: " + err);
        return;
    } else {
        console.log("Conexão realizada ao banco MYSQL");
    }
});

module.exports = connection;


