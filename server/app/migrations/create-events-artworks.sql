CREATE TABLE IF NOT EXISTS event_artworks (
    event_id INT NOT NULL,
    artwork_id INT NOT NULL,
    PRIMARY KEY (event_id, artwork_id),
    FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
    FOREIGN KEY (artwork_id) REFERENCES artworks(id) ON DELETE CASCADE
);