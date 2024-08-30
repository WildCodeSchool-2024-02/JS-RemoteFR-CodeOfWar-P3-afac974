CREATE TABLE IF NOT EXISTS artwork_techniques (
    artwork_id INT NOT NULL,
    technique_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (artwork_id, technique_id),
    FOREIGN KEY (artwork_id) REFERENCES artworks (id) ON DELETE CASCADE,
    FOREIGN KEY (technique_id) REFERENCES techniques (id) ON DELETE CASCADE
);