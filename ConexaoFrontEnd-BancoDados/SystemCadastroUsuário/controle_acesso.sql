CREATE DATABASE controle_acesso;
USE controle_acesso;

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email varchar(50),
    login VARCHAR(50),
    senha VARCHAR(50)
);

INSERT INTO usuarios (id, nome, email, login, senha) VALUES 
(1, 'João Antonio', 'Joãoat@gmail.com', 'João123','09876joao'),
(2, 'Mario Freitas','MarioF@gmail.com','Mario123','09876mario'),
(3,'Elisa Regina','ElisaR@gmail.com','Elisa123','09876elisa'),
(4,'Maria Alencar','MariaA@gmail.com','Maria123','09876maria'),
(5,'Rebecca Cris','RebeccaC@gmail.com','Rebeca123','09876reb'),
(6,'Filipe Freitas','FilipeF@gmail.com','Filipe123','09876Fili'),
(7,'Matheus Mendes','MatheusM12@gmail.com','Matheus123','09876math'),
(8,'Ramon Valdevino','RamonVal08@gmail.com','Ramon123','09876ramon'),
(9,'Larissa Lorraine','Larissa29@gmail.com','Lariissa123','09876lari');