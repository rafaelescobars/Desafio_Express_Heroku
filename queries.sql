--Cambiarse a base postgres
--\c postgres;

-- Create a new database called 'express_heroku'
 --CREATE DATABASE express_heroku;

--Conexión base library
--\c express_heroku;

--Encoding UTF8
SET client_encoding TO 'UTF8';

--Extensión
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--Crear Tablas
CREATE TABLE users(
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  username VARCHAR(50),
  email VARCHAR(70),
  password VARCHAR(50),
  fecha_creacion TIMESTAMP
);