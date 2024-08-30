CREATE TABLE artworks (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    description TEXT,
    technique VARCHAR(100),
    measurement VARCHAR(100),
    date DATE NOT NULL,
    artist_id INT UNSIGNED NOT NULL,
    collection_id INT UNSIGNED,
    FOREIGN KEY (artist_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (collection_id) REFERENCES collections (id) ON DELETE SET NULL
);