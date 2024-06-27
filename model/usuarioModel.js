import {consulta} from '../config/db.js'

class usuarioModel{

    //select*
    findAll(){
        const sql = "SELECT * FROM usuario;" // busca todos os registros da tabela usuario
        return consulta (sql,'não foi possível localizar.') // retorna os dados e se não rodar aparece a msg
    }
    //inserir um novo elemento
    create(cadastro){
        const sql = "INSERT INTO usuario (nomeUsuario, dataNascimentoUsuario, emailUsuario, senhaUsuario, celularUsuario) VALUES (?,?,?,?,?);" //Os campos entre parênteses (nomeUsuario, dataNascimentoUsuario, emailUsuario, senhaUsuario, celularUsuario) correspondem às colunas da tabela.
        //Os placeholders ? serão substituídos pelos valores reais durante a execução da consulta.
        return consulta (sql, [cadastro.nome, cadastro.dataN, cadastro.email, cadastro.senha, cadastro.celular],'Não foi possível localizar!')//retorna um array
    }
    //buscar por id
    findById(id){
        const sql = "SELECT * FROM usuario WHERE idUsuario=?;"
        return consulta(sql, id, 'Não foi posível localizar!')
    }
    //atualizar - modificar os registros
    update(id, senha){
        const sql = "UPDATE usuario SET senhaUsuario = ? WHERE idUsuario=?;"
        return consulta(sql, [senha.senhaUsuario, id], 'Não foi possível Atualizar!')
    }
    //deletar
    delete(id){
        const sql = "DELETE FROM usuario WHERE idUsuario=?;"
        return consulta(sql, id, 'Não foi possível apagar!')
    }
    //login
    login(email,senha){
        const sql = "SELECT * FROM usuario WHERE `email`=? AND `senha`=?;"
        return consulta(sql,[email,senha], 'Não foi possível conectar!')
    }

}

export default new usuarioModel;