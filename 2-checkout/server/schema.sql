CREATE DATABASE checkout;

USE checkout;

CREATE TABLE users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  username varchar(255),
  email varchar(255),
  passkey TEXT,
  mail_address TEXT,
  phone TEXT,
  card_number TEXT,
  expDate DATE,
  cvv TEXT,
  bill_zip TEXT,
  CONSTRAINT uc_user UNIQUE (username, email)
);

