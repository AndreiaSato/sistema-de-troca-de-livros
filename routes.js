import { Router } from "express"; 
import usuarioController from './controller/usuarioController.js';
import bodyParser from "body-parser";

const router = Router();

router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json())
//paginas
router.get('/registrar', (req, res) => {
    res.render('registrar');
});

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/meusLivros', (req, res) => {
    res.render('meusLivros');
});

router.get('/minhasPropostas', (req, res) => {
    res.render('minhasPropostas');
});


/* router.get('/livros', (req, res) => {
    connection.query("SELECT * FROM livro;", (err, results, fields) => {
        if(err){
            console.log("Erro ao consultar o banco: " + err);
            return;
        }
        console.log(results);
        res.render('livros', { obj_livros: results });
    })
}); */

//rotas do usuario
router.get('/usuarios', usuarioController.index);
router.get('/usuarios/:id', usuarioController.show);
router.post('/usuarios', usuarioController.cadastrar);
router.put('/usuarios/:id', usuarioController.update);
router.delete('/usuarios/:id', usuarioController.delete);


export default router;