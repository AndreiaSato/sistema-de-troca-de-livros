import mysql from 'mysql';

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

/**
 * executa um codigo sql, com ou sem valores
 * @param {String} sql  instrução sql a ser executada
 * @param {String=id } valores valores a serem passados para o sql
 * @param {String} mensagemReject mensagem a ser exibida
 * @returns objeto da Promisse 
 */

export const consulta = (sql, valores='', mensagemReject)=>{ //pega os dados que são pedidos no banco
    return new Promise((resolve, reject) => {  //promise: o banco faz uma promessa que vai devolver a msg mas não sabe quando
        connection.query(sql, valores, (erro, resultado) => { //onde executa a função no banco após a consulta
            if(erro) return reject (erro)
            const row = JSON.parse(JSON.stringify(resultado))
            return resolve(row)
        })
    })
}

export default connection;


