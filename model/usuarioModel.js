import {consulta} from '../config/db.js'

class usuarioModel{

    //select*
    findAll(){
        const sql = "SELECT * FROM usuario;"
        return consulta (sql,'não foi possível localizar.')
    }
    //inserir um novo elemento
    create(cadastro){
        const sql = "INSERT INTO usuario(nomeUsuario, dataNAscimentoUsuario, emailUsuario, senhaUsuario, celularUsuario) VALUES (?,?,?,?,?);"
        return consulta (sql, cadastro,'Não foi possível localizar!')
    }
    //buscar por id
    findById(id){
        const sql = "SELECT * FROM usuario WHERE idUsuario=?;"
        return consulta(sql, id, 'Não foi posível localizar!')
    }
    //atualizar
    update(id, senha){
        const sql = "UPDATE usuario SET `senha` = ? WHERE id_usuario=?;"
        return consulta(sql, [senha, id], 'Não foi possível Atualiza!')
    }
    //deletar
    delete(id){
        const sql = "DELETE FROM usuario WHERE id_usuario=?;"
        return consulta(sql, id, 'Não foi possível apagar!')
    }
    login(email,senha){
        const sql = "SELECT FROM usuario WHERE `email`=? AND `senha`=?;"
        return consulta(sql,[email,senha], 'Não foi possível conectar!')
    }

}

export default new usuarioModel;