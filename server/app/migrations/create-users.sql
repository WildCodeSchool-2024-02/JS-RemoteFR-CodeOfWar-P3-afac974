CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pseudo VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    birthday DATE,
    deathday DATE,
    nationality VARCHAR(100),
    role ENUM(
        'visitor',
        'user',
        'artist',
        'admin'
    ) NOT NULL DEFAULT 'visitor',
    biography TEXT,
    website VARCHAR(255),
    instagram VARCHAR(255),
    twitter VARCHAR(255),
    facebook VARCHAR(255),
    linkedin VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);