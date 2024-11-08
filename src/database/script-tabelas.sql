-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/


CREATE DATABASE fitlife;
USE fitlife;
DROP TABLE esporte;
CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    dtNasc DATE NOT NULL,
    cpf CHAR(11) NOT NULL,
    telefone CHAR(11) NOT NULL,
    generoBiologico VARCHAR(45),
    email VARCHAR(45) NOT NULL,
    senha VARCHAR(45) NOT NULL,
    peso DECIMAL(4,1),
    altura DECIMAL(3,2),
    CONSTRAINT chkGeneroBiologico CHECK (generoBiologico IN ('masculino', 'feminino'))
);

CREATE TABLE refeicao (
    idRefeicao INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(120) NOT NULL,
    qtdCal INT NOT NULL,
    horario DATETIME NOT NULL,
    fkUsuario INT NOT NULL,
    CONSTRAINT fkUsuarioRefeicao FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE esporte(
    idEsporte INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL
);

CREATE TABLE gasto(
    idGasto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    gasto INT,
    fkEsporte INT,
    CONSTRAINT fkEsporteGasto FOREIGN KEY (fkEsporte) REFERENCES esporte(idEsporte)
);

CREATE TABLE pratica(
    idPratica INT AUTO_INCREMENT,
    fkUsuario INT NOT NULL,
    fkGasto INT NOT NULL,
    CONSTRAINT pkComposta PRIMARY KEY (idPratica, fkEsporte, fkUsuario),
    CONSTRAINT fkUsuarioDados FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    CONSTRAINT fkEsportePratica FOREIGN KEY (fkGasto) REFERENCES gasto(idGasto)
);

CREATE TABLE avaliacao (
    idAvaliacao INT PRIMARY KEY AUTO_INCREMENT,
    nota INT,
    fkUsuario INT,
    CONSTRAINT fkUsuarioAvaliacao FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

INSERT INTO usuario VALUES
(DEFAULT, 'Caio Visconti', '2005-03-30', '46817034502', '11987654321', 'masculino', 'caio@gmail.com', 'Urubu#100', 99.1, 1.85),
(DEFAULT, 'Julia Visconti', '2003-06-15', '53467823112', '11989345215', 'feminino', 'julia@outlook.com', 'Batatinha#123', 60, 1.65),
(DEFAULT, 'Zaqueu Chavier Durães Filho', '2002-09-12', '35512367898', '11996603554', null, 'zaqueu@yahoo.com', 'Senha#123', 68, 1.68),
(DEFAULT, 'Bruno Lima', '2005-08-22', '43275634519', '11900852425', 'masculino', 'bruno@uol.com', 'Lima#2005', 70, 1.86),
(DEFAULT, 'Gabriel Feitosa', '2006-02-15', '53678943212', '11978773638', 'masculino', 'gabriel@gmail', 'Gabf#2006', 72, 1.83),
(DEFAULT, 'Ranier Dalton', '2005-05-21', '55323478901', '11993015455', 'masculino', 'ranier@hotmail.com', 'Dalton2024#', 75, 1.70),
(DEFAULT, 'Guilherme Figueiredo', '2005-10-30', '52712376534', '11978564329', 'masculino', 'guilherme@outlook.com', 'Guigas#1012', 86, 1.70);

INSERT INTO refeicao VALUES
(DEFAULT, 'refeicao1', 350, '2024-10-30 08:00:00', 1),
(DEFAULT, 'refeicao2', 200, '2024-10-30 12:00:00', 1),
(DEFAULT, 'refeicao3', 650, '2024-10-30 16:00:00', 1),
(DEFAULT, 'refeicao4', 1200, '2024-10-30 12:00:00', 2),
(DEFAULT, 'refeicao5', 600, '2024-10-30 18:00:00', 2),
(DEFAULT, 'refeicao6', 1400, '2024-10-30 11:00:00', 3),
(DEFAULT, 'refeicao7', 200, '2024-10-30 07:00:00', 4),
(DEFAULT, 'refeicao8', 350, '2024-10-30 10:00:00', 4),
(DEFAULT, 'refeicao9', 200, '2024-10-30 13:00:00', 4),
(DEFAULT, 'refeicao10', 650, '2024-10-30 16:00:00', 4),
(DEFAULT, 'refeicao11', 450, '2024-10-30 20:00:00', 4),
(DEFAULT, 'refeicao12', 600, '2024-10-30 22:00:00', 4),
(DEFAULT, 'refeicao13', 2000, '2024-10-30 15:00:00', 5),
(DEFAULT, 'refeicao14', 1100, '2024-10-30 07:00:00', 5),
(DEFAULT, 'refeicao1', 700, '2024-10-30 16:00:00', 5),
(DEFAULT, 'refeicao2', 600, '2024-10-30 12:00:00', 6),
(DEFAULT, 'refeicao3', 650, '2024-10-30 16:00:00', 6),
(DEFAULT, 'refeicao4', 600, '2024-10-30 20:00:00', 6),
(DEFAULT, 'refeicao5', 640, '2024-10-30 00:00:00', 6),
(DEFAULT, 'refeicao6', 1400, '2024-10-30 11:00:00', 7),
(DEFAULT, 'refeicao7', 200, '2024-10-30 19:00:00', 7);

INSERT INTO pratica (fkUsuario, fkEsporte) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7);

INSERT INTO esporte VALUES 
(DEFAULT, 'Musculação'),
(DEFAULT, 'Vôlei'),
(DEFAULT, 'Basquete'),
(DEFAULT, 'Futebol'),
(DEFAULT, 'Crossfit'),
(DEFAULT, 'Calistenia'),
(DEFAULT, 'Corrida');


INSERT INTO gasto VALUES
(DEFAULT, 'Leve', 5, 1),
(DEFAULT, 'Moderado', 8, 1),
(DEFAULT, 'Intenso', 13, 1),
(DEFAULT, 'Leve', 6, 2),
(DEFAULT, 'Moderado', 9, 2),
(DEFAULT, 'Intenso', 12, 2),
(DEFAULT, 'Leve', 7, 3),
(DEFAULT, 'Moderado', 10, 3),
(DEFAULT, 'Intenso', 15, 3),
(DEFAULT, 'Leve', 8, 4),
(DEFAULT, 'Moderado', 12, 4),
(DEFAULT, 'Intenso', 16, 4),
(DEFAULT, 'Leve', 12, 5),
(DEFAULT, 'Moderado', 16, 5),
(DEFAULT, 'Intenso', 24, 5),
(DEFAULT, 'Leve', 8, 6),
(DEFAULT, 'Moderado', 12, 6),
(DEFAULT, 'Intenso', 16, 6),
(DEFAULT, 'Leve', 8, 7),
(DEFAULT, 'Moderado', 12, 7),
(DEFAULT, 'Intenso', 16, 7);

INSERT INTO avaliacao VALUES
(DEFAULT, 5, 1),
(DEFAULT, 5, 2),
(DEFAULT, 3, 3),
(DEFAULT, 1, 4),
(DEFAULT, 2, 5),
(DEFAULT, 3, 6),
(DEFAULT, 4, 7);

-- Select mostrando nome do usuário e a prática física que faz
SELECT u.nome AS 'Nome usuário', e.nome AS 'Esporte'
    FROM usuario AS u 
    JOIN pratica AS p ON p.fkUsuario = u.idUsuario
    JOIN esporte AS e ON e.idEsporte = p.fkEsporte;

-- Select mostrando a quantidade de usuários cadastrados na plataforma
SELECT COUNT(u.idUsuario) AS 'Quantidade de Usuários'
    FROM usuario AS u;

-- Select mostrando a quantidade de praticantes de uma determinada prática
SELECT e.nome AS 'Prática', COUNT(u.idUsuario) AS 'Quantidade de praticantes'
    FROM usuario AS u 
    JOIN pratica AS p ON u.idUsuario = p.fkUsuario
    JOIN esporte AS e ON e.idEsporte = p.fkEsporte
    GROUP BY e.idEsporte;

-- Select mostrando a quantidade de avaliações da plataforma
SELECT COUNT(av.idAvaliacao) AS 'Quantidade de avaliações'
    FROM avaliacao AS av;

-- Select mostrando a quantidade de usuários em cada avaliação do serviço
SELECT av.nota AS 'Nota', COUNT(u.idUsuario) AS 'Quantidade de usuários'
    FROM usuario AS u JOIN avaliacao AS av ON u.idUsuario = av.fkUsuario
    GROUP BY av.nota;

/*
CREATE DATABASE aquatech;

USE aquatech;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14),
	codigo_ativacao VARCHAR(50)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table aquario (
-- em nossa regra de negócio, um aquario tem apenas um sensor 
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

-- esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino 

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);

insert into empresa (razao_social, codigo_ativacao) values ('Empresa 1', 'ED145B');
insert into empresa (razao_social, codigo_ativacao) values ('Empresa 2', 'A1B2C3');
insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);
insert into aquario (descricao, fk_empresa) values ('Aquário de Peixe-dourado', 2);

*/