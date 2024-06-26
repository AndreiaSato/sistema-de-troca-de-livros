import usuarioModel from '../model/usuarioModel.js';

class usuarioController{

    //select
 async index (req, res){ //requisição e resposta
        const resultado = await usuarioModel.findAll(); // chama a função do objeto Model
        res.json(resultado);   // envio da resposta
    }
    //listar tudo por id
    async show(req, res){
        const id = req.params.id;
        const row = await usuarioModel.findById(id);
        res.json(row);
    }
    //criar dados
    async cadastrar(req, res){
        const dados = req.body;
        console.log(dados);
        const row = await usuarioModel.create(dados);
        res.json(row);
    }
    //atualizar dados
    async update(req, res){
        const dados = req.body;
        const id = req.params.id;
        const row = await usuarioModel.update(id, dados);
        res.json(row);

    }
    //apagar dados
    async delete(req, res){
        const id = req.params.id;// extraindo o valor do id da URL ex: /usuario/1
        const row = await usuarioModel.delete(id);//recebe um id como argumento e exclui no banco
        res.json(row); //estamos enviando a resposta como um objeto JSON contendo o resultado da operação 
    }


}

export default new usuarioController