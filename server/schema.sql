CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  -- msgID int NOT NULL,
  username: varchar(255) NOT NULL,
  message varchar(255) NOT NULL,
  roomname varchar(30),
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  /* Describe your table here.*/
  username varchar(20),
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY
);



/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/
