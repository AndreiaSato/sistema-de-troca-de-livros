import usuarioModel from '../model/usuarioModel.js';

class usuarioController{

    //select
    async index (req, res){
        const resultado = await usuarioModel.findAll();
        res.json(resultado);
    }
    //listar tudo por id
    async show(req, res){
        const id = req.params.id;
        const row = await usuarioModel.findById(id);
        res.json(resultado);
    }
    //criar dados
    async cadastrar(req, res){
        const dados = req.body;
        console.log(dados)
        const row = await usuarioModel.create(dados);
    }
    //atualizar dados
    async update(req, res){
        const dados = req.body;
        const id = req.params.id;
        const row = await usuarioModel.update(id, dados);

    }
    //apagar dados
    async delete(req, res){
        const id = req.params.id;
        const row = await usuarioModel.delete(id);
        res.json(row);
    }

}

export default new usuarioController