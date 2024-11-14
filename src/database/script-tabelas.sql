-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE fitlife;
USE fitlife;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    dtNasc DATE NOT NULL,
    cpf CHAR(11) NOT NULL UNIQUE,
    telefone CHAR(11) NOT NULL,
    generoBiologico VARCHAR(45),
    email VARCHAR(45) NOT NULL,
    senha VARCHAR(45) NOT NULL,
    peso FLOAT,
    altura DECIMAL(3,2),
    nivel TINYINT,
    CONSTRAINT chkGeneroBiologico CHECK (generoBiologico IN ('masculino', 'feminino')),
    CONSTRAINT chkNivel CHECK (nivel IN (1, 0))
);

CREATE TABLE refeicao (
    idRefeicao INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(120) NOT NULL,
    qtdCal INT NOT NULL,
    horario CHAR(5) NOT NULL,
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
    diaExecucao INT,
    diaDescanso INT,
    minutos INT,
    CONSTRAINT pkComposta PRIMARY KEY (idPratica, fkGasto, fkUsuario),
    CONSTRAINT fkUsuarioDados FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    CONSTRAINT fkGastoPratica FOREIGN KEY (fkGasto) REFERENCES gasto(idGasto)
);

CREATE TABLE avaliacao (
    idAvaliacao INT PRIMARY KEY AUTO_INCREMENT,
    nota INT,
    fkUsuario INT,
    CONSTRAINT fkUsuarioAvaliacao FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

INSERT INTO usuario VALUES
(DEFAULT, 'Caio Visconti', '2005-03-30', '46817034502', '11987654321', 'masculino', 'caio@gmail.com', 'Urubu#100', 99.1, 1.85, 1),
(DEFAULT, 'Julia Visconti', '2003-06-15', '53467823112', '11989345215', 'feminino', 'julia@outlook.com', 'Batatinha#123', 60, 1.65, 0),
(DEFAULT, 'Zaqueu Chavier Durães Filho', '2002-09-12', '35512367898', '11996603554', null, 'zaqueu@yahoo.com', 'Senha#123', 68, 1.68, 0),
(DEFAULT, 'Bruno Lima', '2005-08-22', '43275634519', '11900852425', 'masculino', 'bruno@uol.com', 'Lima#2005', 70, 1.86, 0),
(DEFAULT, 'Gabriel Feitosa', '2006-02-15', '53678943212', '11978773638', 'masculino', 'gabriel@gmail', 'Gabf#2006', 72, 1.83, 0),
(DEFAULT, 'Ranier Dalton', '2005-05-21', '55323478901', '11993015455', 'masculino', 'ranier@hotmail.com', 'Dalton2024#', 75, 1.70, 0),
(DEFAULT, 'Guilherme Figueiredo', '2005-10-30', '52712376534', '11978564329', 'masculino', 'guilherme@outlook.com', 'Guigas#1012', 86, 1.70, 0);

INSERT INTO refeicao VALUES
(DEFAULT, 'refeicao1', 350, '08:00', 1),
(DEFAULT, 'refeicao2', 200, '12:00', 1),
(DEFAULT, 'refeicao3', 650, '16:00', 1),
(DEFAULT, 'refeicao4', 1200, '12:00', 2),
(DEFAULT, 'refeicao5', 600, '18:00', 2),
(DEFAULT, 'refeicao6', 1400, '11:00', 3),
(DEFAULT, 'refeicao7', 200, '07:00', 4),
(DEFAULT, 'refeicao8', 350, '10:00', 4),
(DEFAULT, 'refeicao9', 200, '13:00', 4),
(DEFAULT, 'refeicao10', 650, '16:00', 4),
(DEFAULT, 'refeicao11', 450, '20:00', 4),
(DEFAULT, 'refeicao12', 600, '22:00', 4),
(DEFAULT, 'refeicao13', 2000, '15:00', 5),
(DEFAULT, 'refeicao14', 1100, '07:00', 5),
(DEFAULT, 'refeicao1', 700, '16:00', 5),
(DEFAULT, 'refeicao2', 600, '12:00', 6),
(DEFAULT, 'refeicao3', 650, '16:00', 6),
(DEFAULT, 'refeicao4', 600, '20:00', 6),
(DEFAULT, 'refeicao5', 640, '00:00', 6),
(DEFAULT, 'refeicao6', 1400, '11:00', 7),
(DEFAULT, 'refeicao7', 200, '19:00', 7);

INSERT INTO pratica (fkUsuario, fkGasto, diaExecucao, diaDescanso, minutos) VALUES
(1, 1, 3, 4, 90),
(2, 4, 6, 1, 70),
(3, 7, 2, 5, 120),
(4, 10, 5, 2, 50),
(5, 13, 3, 4, 40),
(6, 16, 4, 3, 180),
(7, 19, 1, 6, 35);

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

-- Dashboard Root
-- Select mostrando nome do usuário e a prática física que faz ##
SELECT u.nome AS 'Nome usuário', e.nome AS 'Esporte'
    FROM usuario AS u 
    JOIN pratica AS p ON p.fkUsuario = u.idUsuario
    JOIN gasto AS g ON g.idGasto = p.fkGasto
    JOIN esporte AS e ON e.idEsporte = g.fkEsporte;

-- Select mostrando a quantidade de usuários cadastrados na plataforma ##
SELECT COUNT(u.idUsuario) AS 'Quantidade de Usuários'
    FROM usuario AS u;

-- Select mostrando a quantidade de praticantes de uma determinada prática ## 
SELECT e.nome AS 'Prática', COUNT(u.idUsuario) AS 'Quantidade de praticantes'
    FROM usuario AS u 
    JOIN pratica AS p ON u.idUsuario = p.fkUsuario
    JOIN gasto AS g ON g.idGasto = p.fkGasto
    JOIN esporte AS e ON e.idEsporte = g.fkEsporte
    GROUP BY e.idEsporte;

-- Select mostrando a quantidade de avaliações da plataforma ##
SELECT COUNT(av.idAvaliacao) AS 'Quantidade de avaliações'
    FROM avaliacao AS av;

-- Select mostrando a quantidade de usuários em cada avaliação do serviço ##
SELECT av.nota AS 'Nota', COUNT(u.idUsuario) AS 'Quantidade de usuários'
    FROM usuario AS u JOIN avaliacao AS av ON u.idUsuario = av.fkUsuario
    GROUP BY av.nota;

-- Dashboard Cliente
-- Select a pratica, gasto calórico, dias de execução e dias de descansa ##
SELECT e.nome AS Prática, g.gasto AS 'Gasto calórico', p.diaExecucao AS 'Dias de execucao',
    p.diaDescanso FROM pratica AS p 
    JOIN gasto AS g ON g.idGasto = p.fkGasto
    JOIN esporte AS e ON g.fkEsporte = e.idEsporte
    WHERE p.fkUsuario = 1;

-- Select refeições, descrição, calorias e horario ##
SELECT idRefeicao AS 'Refeição', descricao AS Descrição, qtdCal AS 'Quantidade de Calorias',
    horario AS 'Horário' FROM refeicao;

-- Select dados pessoais ##
SELECT nome AS Nome, cpf AS CPF, dtNasc AS 'Data de Nascimento', telefone AS 'Telefone', email AS Email,
    peso AS Peso, altura AS Altura FROM usuario
    WHERE idUsuario = 1;

-- Select das calorias pro gráfico
SELECT SUM(r.qtdCal) AS CalConsumidas, g.gasto AS gasto
    FROM usuario AS u
    JOIN refeicao AS r ON r.fkUsuario = u.idUsuario
    JOIN 
    WHERE fkUsuario = 1;

-- Adicionar refeicao: ##
-- INSERT INTO refeicao (descricao, qtdCal, horario, fkUsuario) VALUES ();

-- Remover refeicao: ##
-- DELETE FROM refeicao WHERE idRefeicao = id AND fkUsuario = idUsuario

-- Editar exercício: ??
-- UPDATE pratica SET diaDesc = '${diaDesc}', diaExec = '${diaExec}', minutos = '${minutos}', fkGasto = '${intensidade}' WHERE fkUsuario = '${id}';

-- Editar dia de execucao e descanso:
-- UPDATE pratica SET diaExecucao = numero AND diaDescanso = numero WHERE fkUsuario = id;

-- Editar dados pessoais:
-- UPDATE usuario SET telefone = numero, email = emailNovo, peso = numero, altura = numero WHERE idUsuario = id;


SELECT u.cpf AS CPF, u.dtNasc AS 'Data', u.telefone AS Telefone, u.generoBiologico AS Genero,
    u.peso AS Peso, u.altura AS Altura, e.nome AS Esporte, g.gasto AS Gasto, p.diaExecucao AS DiaExe,
    p.diaDescanso AS DiaDes, p.minutos AS Minutos, a.nota AS Nota
    FROM usuario AS u
    JOIN avaliacao AS a ON u.idUsuario = a.fkUsuario
    JOIN pratica AS p ON p.fkUsuario = u.idUsuario
    JOIN gasto AS g ON p.fkGasto = g.idGasto
    JOIN esporte AS e ON g.fkEsporte = e.idEsporte
    WHERE u.idUsuario = 1;

SELECT e.nome AS 'Prática', COUNT(u.idUsuario) AS 'Quantidade de praticantes'
    FROM usuario AS u 
    JOIN pratica AS p ON u.idUsuario = p.fkUsuario
    JOIN gasto AS g ON g.idGasto = p.fkGasto
    JOIN esporte AS e ON e.idEsporte = g.fkEsporte
    GROUP BY e.idEsporte;

SELECT SUM(r.qtdCal) AS consumidas, g.gasto AS gasto, TIMESTAMPDIFF(YEAR, u.dtNasc, now()) AS idade
    FROM usuario AS u
    JOIN refeicao AS r ON r.fkUsuario = u.idUsuario
    JOIN pratica AS p ON p.fkUsuario = u.idUsuario
    JOIN gasto AS g ON p.fkGasto = g.idGasto
    HAVING u.idUsuario = 1;

SELECT g.gasto AS Gasto, TIMESTAMPDIFF(YEAR, u.dtNasc, now()) AS idade
    FROM usuario AS u
    JOIN pratica AS p ON p.fkUsuario = u.idUsuario
    JOIN gasto AS g ON p.fkGasto = g.idGasto
    WHERE u.idUsuario = 1;



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