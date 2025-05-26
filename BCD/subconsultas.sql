-- Banco:
-- DROP DATABASE bibliotecaonline;
-- CREATE DATABASE bibliotecaonline;
USE bibliotecaonline;

/*
-- Tabela: Autores (IDs de 100+)
CREATE TABLE Autores (
 id INT PRIMARY KEY,
 nome VARCHAR(100)
);
INSERT INTO Autores (id, nome) VALUES
(101, 'Machado de Assis'),
(102, 'Monteiro Lobato'),
(103, 'Clarice Lispector'),
(104, 'Paulo Coelho');
-- Tabela: Editoras (IDs de 200+)
CREATE TABLE Editoras (
 id INT PRIMARY KEY,
 nome VARCHAR(100)
);
INSERT INTO Editoras (id, nome) VALUES
(201, 'Companhia das Letras'),
(202, 'Editora Globo'),
(203, 'Rocco'),
(204, 'Saraiva');
-- Tabela: Livros (IDs de 300+)
CREATE TABLE Livros (
 id INT PRIMARY KEY,
 titulo VARCHAR(100),
 id_autor INT,
 id_editora INT,
 ano_publicacao INT,
 FOREIGN KEY (id_autor) REFERENCES Autores(id),
 FOREIGN KEY (id_editora) REFERENCES Editoras(id)
);
INSERT INTO Livros (id, titulo, id_autor, id_editora, ano_publicacao) VALUES
(301, 'Dom Casmurro', 101, 201, 1899),
(302, 'O Alienista', 101, 201, 1882),
(303, 'Reinações de Narizinho', 102, 204, 1931),
(304, 'A Hora da Estrela', 103, 203, 1977),
(305, 'O Alquimista', 104, 202, 1988);

-- Tabela: Leitores (IDs de 400+)
CREATE TABLE Leitores (
 id INT PRIMARY KEY,
 nome VARCHAR(100)
);
INSERT INTO Leitores (id, nome) VALUES
(401, 'Ana Clara'),
(402, 'Bruno Martins'),
(403, 'Carlos Souza');
-- Tabela: Emprestimos (IDs de 500+)
CREATE TABLE Emprestimos (
 id INT PRIMARY KEY,
 id_livro INT,
 id_leitor INT,
 data_emprestimo DATE,
 data_devolucao DATE,
 FOREIGN KEY (id_livro) REFERENCES Livros(id),
 FOREIGN KEY (id_leitor) REFERENCES Leitores(id)
);
INSERT INTO Emprestimos (id, id_livro, id_leitor, data_emprestimo, data_devolucao) VALUES
(501, 301, 401, '2025-05-01', '2025-05-10'),
(502, 304, 401, '2025-05-05', NULL),
(503, 303, 402, '2025-05-02', '2025-05-09');
*/

-- ----------- subconsultas -----------
SELECT titulo, ano_publicacao
FROM Livros
WHERE id_editora = (
  SELECT id FROM Editoras WHERE nome = 'Companhia das Letras'
);

SELECT nome
FROM Autores
WHERE id IN (
  SELECT id_autor FROM Livros
  WHERE id_editora = (
    SELECT id FROM Editoras WHERE nome = 'Rocco'
  )
);

SELECT titulo
FROM Livros
WHERE id IN (
  SELECT id_livro FROM Emprestimos
  WHERE data_devolucao IS NULL
);


SELECT nome
FROM Leitores
WHERE id IN (
  SELECT id_leitor FROM Emprestimos
  WHERE data_devolucao IS NULL
);


SELECT nome,
  (SELECT titulo FROM Livros
   WHERE Livros.id = (
     SELECT id_livro FROM Emprestimos
     WHERE Emprestimos.id_leitor = Leitores.id
     ORDER BY data_emprestimo DESC
     LIMIT 1)
  ) AS ultimo_livro
FROM Leitores;



SELECT titulo,
  (SELECT nome FROM Editoras
   WHERE Editoras.id = Livros.id_editora
  ) AS nome_editora
FROM Livros;


SELECT nome, titulo
FROM (
  SELECT Emprestimos.id_leitor, Emprestimos.id_livro
  FROM Emprestimos
  WHERE data_devolucao IS NULL
) AS em_aberto
JOIN Leitores ON Leitores.id = em_aberto.id_leitor
JOIN Livros ON Livros.id = em_aberto.id_livro;


SELECT nome
FROM (
  SELECT DISTINCT Livros.id_editora
  FROM Emprestimos
  JOIN Livros ON Emprestimos.id_livro = Livros.id
) AS usadas
JOIN Editoras ON Editoras.id = usadas.id_editora;
