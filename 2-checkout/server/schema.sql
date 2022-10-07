CREATE DATABASE checkoutusers;

USE checkoutusers

CREATE TABLE users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  username TEXT,
  email TEXT,
  passkey TEXT,
  mail_address TEXT,
  phone TEXT,
  card_number TEXT,
  expDate DATE,
  CVV TEXT,
  bill_zip TEXT
);
