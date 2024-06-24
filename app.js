import express from 'express';
import routes from './routes.js';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(cors());

//indicar para o express ler body ou json
app.use(express.json());

//usar o router 
app.use(routes);

app.set('view engine', 'ejs');
app.set('views', './views');

export default app;



/* 

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
}); */