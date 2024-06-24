import usuarioModel from '../model/usuarioModel.js';

class usuarioController{
    async index (req, res){
        const resultado = await usuarioModel.findAll();
        res.json(resultado);
    }
}

export default new usuarioController