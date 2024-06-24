import {consulta} from '../config/db.js';

class usuarioModel{

    findAll(){
        const sql = "SELECT * FROM usuario;"
        return consulta (sql,'não foi possível localizar.')
    }
}

export default new usuarioModel;