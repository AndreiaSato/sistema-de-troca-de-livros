const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connection = require('./config/db');

const app = express();

const PORTA = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta: ${PORTA}`);
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/meusLivros', (req, res) => {
    res.render('meusLivros');
});

app.get('/minhasPropostas', (req, res) => {
    res.render('minhasPropostas');
});

app.get('/registrar', (req, res) => {
    res.render('registrar');
});

app.get('/livros', (req, res) => {
    connection.query("SELECT * FROM livro;", (err, results, fields) => {
        if(err){
            console.log("Erro ao consultar o banco: " + err);
            return;
        }
        console.log(results);
        res.render('livros', { obj_livros: results });
    })
});

app.get('/css/css', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'style.css'));
});

app.get('/pato/pato', (req, res) => {
    res.sendFile(path.join(__dirname, 'img', 'pato.gif'));
});

app.get('/lagartixa/lagartixa', (req, res) => {
    res.sendFile(path.join(__dirname, 'img', 'lagartixa.gif'));
});

app.post('createLivro', (req, res) => {
    const { titulo, autor, condicao, descricao, situacao, idUsuario } = req.body;
    const sql = `INSERT INTO livro (tituloLivro, autorLivro, condicaoLivro, descricaoLivro) VALUES ('${titulo}', '${autor}', '${condicao}', '${descricao}', '1', 'null')`;
    connection.query(sql, (err, result) => {
        if(err){
            console.error('Erro ao inserir o livro:', err);
            res.status(500).send('Erro ao inserir o livro no banco de dados');
            return;
        }
        console.log('Livro inserido com sucesso:', result);
        res.redirect('/livros'); // Redirecionamento após a inserção (opcional)
    });
});