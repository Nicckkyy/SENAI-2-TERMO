INSERT INTO Livro (titulo_do_livro, isbn, descricao, categoria) VALUES
('O Iluminado', '9780307743657', 'Terror psicológico de Stephen King.', 'Terror'),
('It: A Coisa', '9781501142970', 'Obra de terror e suspense de Stephen King.', 'Terror'),
('O Corvo', '9788572326549', 'Poema sombrio de Edgar Allan Poe.', 'Poesia'),
('O Coração Delator', '9788594318532', 'Conto de terror psicológico de Edgar Allan Poe.', 'Suspense'),
('As Crônicas de Nárnia', '9780066238500', 'Série de fantasia clássica de C.S. Lewis.', 'Fantasia'),
('2001: Uma Odisseia no Espaço', '9780451457998', 'Ficção científica de Arthur C. Clarke.', 'Ficção Científica'),
('O Código Da Vinci', '9780307474278', 'Thriller de Dan Brown envolvendo simbologia e mistérios.', 'Suspense'),
('Anjos e Demônios', '9780307474278', 'Mistério e ação de Dan Brown.', 'Suspense'),
('Assassinato no Expresso do Oriente', '9780062693662', 'Mistério clássico de Agatha Christie.', 'Mistério'),
('O Caso dos Dez Negrinhos', '9788520932603', 'Um dos maiores clássicos do crime e mistério de Agatha Christie.', 'Mistério');

INSERT INTO Autor (nome, data_de_nascimento, biografia) VALUES
('Stephen King', '1947-09-21', 'Mestre do terror, autor de O Iluminado e It: A Coisa.'),
('Edgar Allan Poe', '1809-01-19', 'Pioneiro do conto de terror e suspense, autor de O Corvo.'),
('C.S. Lewis', '1898-11-29', 'Autor da série As Crônicas de Nárnia.'),
('Arthur C. Clarke', '1917-12-16', 'Um dos maiores nomes da ficção científica, autor de 2001: Uma Odisseia no Espaço.'),
('Dan Brown', '1964-06-22', 'Autor de thrillers como O Código Da Vinci e Anjos e Demônios.'),
('Agatha Christie', '1890-09-15', 'Rainha do mistério, autora de Assassinato no Expresso do Oriente e O Caso dos Dez Negrinhos.');

INSERT INTO Livro_has_Autor (id_livro, id_autor) VALUES
(1, 1), 
(2, 1), 
(3, 2), 
(4, 2), 
(5, 3), 
(6, 4), 
(7, 5), 
(8, 5), 
(9, 6), 
(10, 6); 

INSERT INTO Usuario (nome, endereco_email, data_de_registro) VALUES
('Lucas Martins', 'lucas.martins@email.com', '2023-05-15'),
('Ana Costa', 'ana.costa@email.com', '2023-06-20'),
('Gabriel Almeida', 'gabriel.almeida@email.com', '2023-07-10');

INSERT INTO Emprestimo (id_usuario, id_livro) VALUES
(1, 3), 
(2, 7), 
(3, 5);

INSERT INTO Biblioteca (nome, endereco_email, endereco, cnpj) VALUES
('Biblioteca Nacional', 'contato@bibliotecanacional.com', 'Avenida das Letras, 321', '12.987.654/0001-99'),
('Biblioteca Municipal de São Paulo', 'contato@bibliotecamsaopaulo.com', 'Rua dos Livros, 789', '98.456.321/0001-88');

INSERT INTO Menbro (id_usuario, id_biblioteca) VALUES
(1, 1), 
(2, 2), 
(3, 1); 
