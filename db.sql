CREATE DATABASE IF NOT EXIST clientes_db;
USE clientes_db;
CREATE TABLE clientes(
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
telefono BIGINT(20) );

create table productos(
id int auto_increment primary key,
nombre_prod varchar(100),
stock int,
precio decimal(10, 2)
);