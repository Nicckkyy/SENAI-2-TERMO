-- CREATE DATABASE eventos;
USE eventos;
 -- DROP DATABASE eventos
 
 /*
 -- ------------ tabelas unicas -----------------
 CREATE TABLE funcionario(
	id_funcionario int not null primary key,
    nome varchar (255),
    setor varchar (255),
    cargo varchar (255)
);

CREATE TABLE cracha(
	id_cracha int not null primary key,
    qr_code varchar (255),
    data_emissao datetime,
    id_funcionario int not null,
    foreign key (id_funcionario) references funcionario (id_funcionario)
);

CREATE TABLE instrutor(
	id_instrutor int not null primary key,
    nome varchar (255),
    email varchar (255)
);

CREATE TABLE sala(
	id_sala int not null primary key,
    nome varchar (255),
    capacidade int,
    recursos text
);

CREATE TABLE evento(
	id_evento int not null primary key,
    titulo varchar (255),
    descricao text,
    data date, 
    horario time,
    id_sala int not null,
    foreign key (id_sala) references sala (id_sala)
);

-- ------------ tabelas de ligação -----------------
CREATE TABLE funcionario_evento(
	id_funcionario_evento int not null primary key,
    id_funcionario int not null, 
    id_evento int not null,
    foreign key (id_funcionario) references funcionario (id_funcionario),
    foreign key (id_evento) references evento (id_evento)
);

CREATE TABLE instrutor_evento(
	id_instrutor_evento int not null primary key,
    id_instrutor int not null,
    id_evento int not null,
    foreign key (id_instrutor) references instrutor (id_instrutor),
	foreign key (id_evento) references evento (id_evento)
);



-- ------------ inserção de dados nas tabelas -----------------
INSERT INTO funcionario(id_funcionario, nome, setor, cargo) VALUES
(1, 'Matheus Russo', 'Bebidas', 'Atendente'),
(2, 'Carla Menezes', 'Bingo', 'Organizadora'),
(3, 'Angelo Mota', 'Salgados', 'Churrasqueiro'),
(4, 'Maria Silva', 'Doces', 'Confeiteira'),
(5, 'Carmem Vila Nova', 'Gincanas', 'Organizadora'),
(6, 'Andrey Mendonza', 'Bebidas', 'Gerente'),
(7, 'Matias Beloni', 'Atendimento', 'garçom'),
(8, 'Maryna Ramos', 'Decorações', 'Organizadora'),
(9, 'Talia Torres', 'Alimentação', 'Cozinheiro'),
(10, 'Elena Marcondes', 'Doces', 'Confeiteira'),
(11, 'Nicolas Rubres', 'Gincanas', 'Organizadora'),
(12, 'Andrea Tacolini', 'Atendimento', 'Gerente');


INSERT INTO cracha(id_cracha, qr_code, data_emissao, id_funcionario) VALUES
(1, '12D5F5E4', '2010-05-26', 5),
(2, 'DF2D4F5', '2015-02-02', 1),
(3, '5SD4F6SF', '2001-09-18', 6),
(4, 'H24YH5S65', '2020-07-12', 3),
(5, 'V1S58G4S6', '2018-08-08', 2),
(6, 'C1S5D84C', '2006-06-06', 4),
(7, '12Df1s54f3s', '2010-05-26', 12),
(8, '1v65dh2', '2015-02-02', 8),
(9, 'b1vdf63s', '2001-09-18', 10),
(10, 'H16g46f4nx', '2020-07-12', 7),
(11, 'b3g8b4s3db', '2018-08-08', 9),
(12, 'n135d4gt6bd', '2006-06-06', 11);


INSERT INTO instrutor(id_instrutor, nome, email) VALUES
(1, 'Ortencia', 'ortencia@gmail.com'),
(2, 'George', 'georgeg@gmail.com'),
(3, 'Marcela', 'marci@gmail.com'),
(4, 'Brian', 'brian@gmail.com'),
(5, 'Geovanni', 'geovanniih@gmail.com'),
(6, 'Pablo', 'pablo@gmail.com'),
(7, 'Cleide', 'cleide@gmail.com'),
(8, 'Gabriel', 'gabrielel@gmail.com'),
(9, 'Maria', 'mari@gmail.com'),
(10, 'Ruan', 'ruan@gmail.com'),
(11, 'Cristiane', 'cristiane@gmail.com'),
(12, 'Paulo', 'paulo@gmail.com');


INSERT INTO sala(id_sala, nome, capacidade, recursos) VALUES
(1, 'Tenda dos Doces', 15, 'brigadeiro, beijinho, bombom de uva, morango do nordeste, espetinho de morango, arroz doce, paçoca, maça do amor'),
(2, 'Tenda do Churras', 90, 'Churrasco, minipizza, espetinhos, coração de galinha, cuscuz, chacorro-quente, empadinha, pão de queijo'),
(3, 'Tenda das Brincadeiras', 10, 'Pescaria, jogo de argolas, tomba latas, Bingo, correio elegante, cata amendoim, cabo de guerra'),
(4, 'Tenda dos bolos', 20, 'Bolo de tapioca, bolo de maça com cravo e canela, bolo souza leão, bolo de fubá com goiabada e mel, bolo de inhame, bolo de banana com farinha de rosca, bolo mármore'),
(5, 'Espaço de Fotos', 10, 'Parede com chápeus de palha, bandeirihas pelo teto, baloes de são joão, banco de madeira, fogueira falsa, carroça e vazos com flores e cactos '),
(6, 'Tenda das Bebidas', 25, 'sucos naturais, cachaça, vinho qunete, quentão, cerveja, refrigerante, água'),
(7, 'Buffet', 15, 'pãezinhos, frios, tortas doces e salgadas, canapés, bolos e frutas'),
(8, 'Bebidas', 24,  'bebidas não alcoólicas, refrigerantes, sucos naturais, café, chás e coquetéis leves'),
(9, 'Espaço de eventos', 26,  'Chacará com salão de festas, psicina e area verde'),
(10, 'Atrações', 56, 'Torre de champanhe, Faça uma cápsula do tempo, animadores para as crianças, brincadeira das fitas'),
(11, 'Quarto da noiva', 15, 'Espaço e conforto, Iluminação adequada, Espelho grande, Área de relaxamento, Comida e bebida'),
(12, 'Espaço Presentes', 200, 'Mesa de presentes, Armazenamento, Espaço designado, Decoração, Lista de presentes');

INSERT INTO evento(id_evento, titulo, descricao, data, horario, id_sala) VALUES
(1, 'Festa Junina', 'é um evento que celebra a cultura e a tradição, com elementos que remetem à religiosidade católica,  e à cultura popular, com comidas típicas, danças e músicas.', '2025-06-01', '17:00:00', 3),
(2, 'Festa Junina', 'é um evento que celebra a cultura e a tradição, com elementos que remetem à religiosidade católica,  e à cultura popular, com comidas típicas, danças e músicas.', '2025-06-15', '14:18:20', 5),
(3, 'Festa Junina', 'é um evento que celebra a cultura e a tradição, com elementos que remetem à religiosidade católica,  e à cultura popular, com comidas típicas, danças e músicas.', '2025-06-20', '17:10:04', 1),
(4, 'Festa Junina', 'é um evento que celebra a cultura e a tradição, com elementos que remetem à religiosidade católica,  e à cultura popular, com comidas típicas, danças e músicas.', '2025-06-09', '20:28:00', 4),
(5, 'Festa Junina', 'é um evento que celebra a cultura e a tradição, com elementos que remetem à religiosidade católica,  e à cultura popular, com comidas típicas, danças e músicas.', '2025-06-30', '21:08:58', 6),
(6, 'Festa Junina', 'é um evento que celebra a cultura e a tradição, com elementos que remetem à religiosidade católica,  e à cultura popular, com comidas típicas, danças e músicas.', '2025-06-12', '18:10:10', 2),
(7, 'Casamento' , 'união entre duas pessoas, reconhecida por leis, costumes ou rituais, com o objetivo de formar uma família e estabelecer uma relação de intimidade e compromisso.', '2025-03-18', '21:10:00', 11),
(8, 'Casamento' , 'união entre duas pessoas, reconhecida por leis, costumes ou rituais, com o objetivo de formar uma família e estabelecer uma relação de intimidade e compromisso.', '2025-11-06', '15:12:00', 12),
(9, 'Casamento' , 'união entre duas pessoas, reconhecida por leis, costumes ou rituais, com o objetivo de formar uma família e estabelecer uma relação de intimidade e compromisso.', '2025-07-15', '14:00:00', 7),
(10, 'Casamento' , 'união entre duas pessoas, reconhecida por leis, costumes ou rituais, com o objetivo de formar uma família e estabelecer uma relação de intimidade e compromisso.', '2025-05-25', '19:56:25', 9),
(11, 'Casamento' , 'união entre duas pessoas, reconhecida por leis, costumes ou rituais, com o objetivo de formar uma família e estabelecer uma relação de intimidade e compromisso.', '2025-07-16', '22:17:20', 8),
(12, 'Casamento' , 'união entre duas pessoas, reconhecida por leis, costumes ou rituais, com o objetivo de formar uma família e estabelecer uma relação de intimidade e compromisso.', '2025-03-14', '19:56:00', 10);


INSERT INTO funcionario_evento(id_funcionario_evento, id_funcionario, id_evento) VALUES
(1, 5,3),
(2, 2,4),
(3, 3,1),
(4, 6,4),
(5, 1,6),
(6, 3,2),
(7, 10,7),
(8, 12,9),
(9, 10,11),
(10, 7,8),
(11, 12,7),
(12, 9,10);


INSERT INTO instrutor_evento(id_instrutor_evento, id_instrutor, id_evento) VALUES
(1, 6,3),
(2, 2,1),
(3, 4,6),
(4, 3,2),
(5, 1,5),
(6, 5,4),
(7, 9,7),
(8, 7,11),
(9, 12,9),
(10, 8,7),
(11, 10,12),
(12, 11,8);
*/

/*
-- ------------- Consultas ------------- --
SELECT nome, setor, cargo FROM funcionario
INNER JOIN evento ON id_evento WHERE id_evento = 3;

SELECT nome, email FROM instrutor
INNER JOIN evento ON titulo = titulo
INNER JOIN funcionario_evento ON id_funcionario_evento WHERE id_funcionario_evento = 3;

SELECT * FROM evento;
*/
