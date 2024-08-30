CREATE TABLE IF NOT EXISTS webinars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    webinar_date DATE NOT NULL,
    link VARCHAR(255) NOT NULL
);
