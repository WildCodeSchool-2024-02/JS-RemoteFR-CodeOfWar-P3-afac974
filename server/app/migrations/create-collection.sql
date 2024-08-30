CREATE TABLE IF NOT EXISTS collections (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    artist_id INT NOT NULL,
    FOREIGN KEY (artist_id) REFERENCES artists (id)
);