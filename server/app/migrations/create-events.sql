CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    event_date DATE NOT NULL,
    artist_id INT,
    FOREIGN KEY (artist_id) REFERENCES artists (id) ON DELETE SET NULL
);