CREATE SCHEMA IF NOT EXISTS solicitacao_bd;

USE solicitacao_bd;

CREATE TABLE IF NOT EXISTS solicitacoes (
	id INT AUTO_INCREMENT,
    nome VARCHAR(100),
	idFuncional INT,
	telefone VARCHAR(20),
	email VARCHAR(100),
	orgao VARCHAR(300),
	evento VARCHAR(1000),
	dataEvento DATE,
	horarioEvento TIME,
	duracaoEvento TIME,
	publicoAlvo VARCHAR(20),
	pauta VARCHAR(1000),
	numeroParticipantes INT,
	vagas INT,
	responsavel VARCHAR(100),
	datashow BOOLEAN,
	laptop BOOLEAN,
	videoConferencia BOOLEAN,
	lousaInterativa BOOLEAN,
	responsavelFuncaoCargo VARCHAR(100),
	responsavelTelefone VARCHAR(20),
	responsavelEmail VARCHAR(100),
	observacao VARCHAR(1000),
    PRIMARY KEY (id)
);
