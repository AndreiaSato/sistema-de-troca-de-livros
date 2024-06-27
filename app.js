import express from 'express';
import routes from './routes.js';
import cors from 'cors';
import path from 'path'; //importar bibliotecas

const app = express(); 

app.use(cors());

//indicar para o express ler body ou json
app.use(express.json());

//usar o router 
app.use(routes); // para usar as rotas que foram criadas no arquivo routes.js

app.set('view engine', 'ejs'); // utiliza em  engine para renderizar as paginas atraves do ejs
app.set('views', './views');  // para buscar as paginas do views

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