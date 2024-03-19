CREATE DATABASE testDemoapp;

--user
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255) ,
    contactnumber VARCHAR(255) UNIQUE,
    role VARCHAR(255)
);

-- contact
CREATE TABLE "contact" (
    id SERIAL,
    username VARCHAR(255),
    email VARCHAR(255),
    message VARCHAR(255)
);

