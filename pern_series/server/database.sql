CREATE DATABASE testDemoapp;

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255) ,
    contactnumber VARCHAR(255) UNIQUE,
    role VARCHAR(255)
);

