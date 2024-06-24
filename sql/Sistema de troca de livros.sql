CREATE TABLE usuario (
    idUsuario INTEGER PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(255),
    dataNascimentoUsuario DATE,
    emailUsuario VARCHAR(255) UNIQUE,
    senhaUsuario VARCHAR(255),
    celularUsuario VARCHAR(11)
);

CREATE TABLE livro (
    idLivro INTEGER PRIMARY KEY AUTO_INCREMENT,
    tituloLivro VARCHAR(255),
    autorLivro VARCHAR(255),
    condicaoLivro VARCHAR(50),
    descricaoLivro VARCHAR(500),
    situacaoLivro BOOLEAN,
    fk_usuario_idUsuario INTEGER,
    FOREIGN KEY (fk_usuario_idUsuario)
        REFERENCES usuario (idUsuario)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE usuarioPropostaLivro (
    idUsuarioPropostaLivro INTEGER PRIMARY KEY AUTO_INCREMENT,
    fk_usuario_idUsuario INTEGER,
    fk_livro_idLivro INTEGER,
    dataUsuarioPropostaLivro DATE,
    mensagemUsuarioPropostaLivro VARCHAR(500),
    FOREIGN KEY (fk_usuario_idUsuario)
        REFERENCES usuario (idUsuario)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (fk_livro_idLivro)
        REFERENCES livro (idLivro)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);