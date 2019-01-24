DROP DATABASE IF EXISTS Company;
CREATE DATABASE Company;

\c Company;

CREATE TABLE employe (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  breed VARCHAR,
  age INTEGER,
  sex VARCHAR
);

INSERT INTO employe (name, breed, age, sex)
  VALUES ('Tyler', 'Retrieved', 3, 'M');