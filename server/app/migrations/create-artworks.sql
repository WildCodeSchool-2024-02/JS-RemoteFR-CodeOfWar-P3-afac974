CREATE TABLE artworks (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    description TEXT,
    measurement VARCHAR(100),
    date DATE NOT NULL,
    artist_id INT NOT NULL,
    collection_id INT,
    FOREIGN KEY (artist_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (collection_id) REFERENCES collections (id) ON DELETE SET NULL
);
