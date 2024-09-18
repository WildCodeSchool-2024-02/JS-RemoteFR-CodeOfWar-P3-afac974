create table artist (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    biography TEXT,
    pseudo VARCHAR(100),
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    birthday DATE,
    nationality VARCHAR(100),
    deathday DATE
);

INSERT INTO
    artist (
        biography,
        pseudo,
        firstname,
        lastname,
        birthday,
        nationality,
        deathday
    )
VALUES (
        'Alice Dupont est une artiste contemporaine française spécialisée dans les peintures abstraites.',
        'Alice Dupont',
        'Alice',
        'Dupont',
        NULL,
        'Française',
        NULL
    ),
    (
        'Marc Lefèvre est un sculpteur belge connu pour ses œuvres en métal recyclé.',
        'Marc Lefèvre',
        'Marc',
        'Lefèvre',
        NULL,
        'Belge',
        NULL
    ),
    (
        'Sophia Durand est une photographe italienne spécialisée dans la photographie de rue.',
        'Sophia Durand',
        'Sophia',
        'Durand',
        NULL,
        'Italienne',
        NULL
    ),
    (
        'Olivier Martin est un artiste numérique canadien qui crée des œuvres d\'art générées par des algorithmes.',
        'Olivier Martin',
        'Olivier',
        'Martin',
        NULL,
        'Canadien',
        NULL
    ),
    (
        'Emma Léger est une artiste britannique travaillant principalement avec la céramique.',
        'Emma Léger',
        'Emma',
        'Léger',
        NULL,
        'Britannique',
        NULL
    ),
    (
        'Lucas Dubois est un artiste français connu pour ses installations artistiques interactives.',
        'Lucas Dubois',
        'Lucas',
        'Dubois',
        NULL,
        'Français',
        NULL
    ),
    (
        'Maya Nguyen est une artiste vietnamienne créant des œuvres numériques inspirées par la culture asiatique.',
        'Maya Nguyen',
        'Maya',
        'Nguyen',
        NULL,
        'Vietnamienne',
        NULL
    ),
    (
        'David Rodriguez est un artiste cubain travaillant principalement avec des collages numériques.',
        'David Rodriguez',
        'David',
        'Rodriguez',
        NULL,
        'Cubain',
        NULL
    ),
    (
        'Isabelle Morel est une artiste textile suisse qui crée des œuvres en tissu inspirées de la nature.',
        'Isabelle Morel',
        'Isabelle',
        'Morel',
        NULL,
        'Suisse',
        NULL
    ),
    (
        'Étienne Laurent est un artiste français travaillant avec la peinture à l\'huile pour créer des portraits réalistes.',
        'Étienne Laurent',
        'Étienne',
        'Laurent',
        NULL,
        'Français',
        NULL
    );

create table artwork (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL,
    image_url VARCHAR(255) DEFAULT "/default.png",
    description TEXT,
    technique VARCHAR(100),
    measurement VARCHAR(100),
    date DATE,
    artist_id INT unsigned,
    FOREIGN KEY (artist_id) REFERENCES artist (id)
);

INSERT INTO
    artwork (
        title,
        image_url,
        description,
        technique,
        measurement,
        date,
        artist_id
    )
VALUES (
        'Éclosion',
        '/assets/images/PicturesTest/Eclosion.webp',
        'Une peinture abstraite représentant une explosion de couleurs vives.',
        NULL,
        NULL,
        '2023-02-15',
        1
    ),
    (
        'Lumière dans l\'obscurité',
        '/assets/images/PicturesTest/Lumière_dans_Obscurité.webp',
        'Un jeu de lumières et de contrastes dans une scène mystérieuse.',
        NULL,
        NULL,
        '2023-05-10',
        1
    ),
    (
        'Odyssée',
        '/assets/images/PicturesTest/Odyssée.webp',
        'Une interprétation colorée de l\'Odyssée d\'Homère.',
        NULL,
        NULL,
        '2023-07-22',
        1
    ),
    (
        'Métamorphose',
        '/assets/images/PicturesTest/Métamorphose.webp',
        'Une sculpture en métal représentant la transformation d\'une chenille en papillon.',
        NULL,
        NULL,
        '2022-11-03',
        2
    ),
    (
        'Fusion',
        '/assets/images/PicturesTest/Fusion.webp',
        'Deux formes métalliques fusionnant pour n\'en former qu\'une.',
        NULL,
        NULL,
        '2023-03-17',
        2
    ),
    (
        'Équilibre',
        '/assets/images/PicturesTest/Equilibre.webp',
        'Une sculpture explorant le concept de l\'équilibre dans la nature.',
        NULL,
        NULL,
        '2023-06-25',
        2
    ),
    (
        'Vie Urbaine',
        '/assets/images/PicturesTest/Vie_Urbaine.webp',
        'Un instantané de la vie urbaine à Milan.',
        NULL,
        NULL,
        '2022-12-01',
        3
    ),
    (
        'Passages',
        '/assets/images/PicturesTest/Passages.webp',
        'Une série de photographies capturant des passants dans les rues de Rome.',
        NULL,
        NULL,
        '2023-04-15',
        3
    ),
    (
        'Reflets',
        '/assets/images/PicturesTest/Reflets.webp',
        'Des reflets de la ville sur des surfaces vitrées.',
        NULL,
        NULL,
        '2023-08-10',
        3
    ),
    (
        'Algorithme de Vie',
        '/assets/images/PicturesTest/Algorithme_de_Vie.webp',
        'Une œuvre générée par un algorithme représentant des motifs en constante évolution.',
        NULL,
        NULL,
        '2023-01-20',
        4
    ),
    (
        'Fractale',
        '/assets/images/PicturesTest/Fractale.webp',
        'Une série d\'images fractales aux couleurs vibrantes.',
        NULL,
        NULL,
        '2023-04-30',
        4
    ),
    (
        'Chaos Organisé',
        '/assets/images/PicturesTest/Chaos_Organisé.webp',
        'Une représentation visuelle du chaos ordonné.',
        NULL,
        NULL,
        '2023-07-14',
        4
    ),
    (
        'Vase Organique',
        '/assets/images/PicturesTest/Vase_Organique.webp',
        'Un vase céramique aux formes organiques et naturelles.',
        NULL,
        NULL,
        '2023-02-22',
        5
    ),
    (
        'Terre et Mer',
        '/assets/images/PicturesTest/Terre_et_Mer.webp',
        'Une sculpture céramique inspirée des éléments naturels.',
        NULL,
        NULL,
        '2023-05-11',
        5
    ),
    (
        'Fusion Minérale',
        '/assets/images/PicturesTest/Fusion_Minérale.webp',
        'Un assemblage céramique rappelant les formations minérales.',
        NULL,
        NULL,
        '2023-08-05',
        5
    ),
    (
        'Lumières Réactives',
        '/assets/images/PicturesTest/Lumières_Réactives.webp',
        'Installation où la lumière réagit aux mouvements des spectateurs.',
        NULL,
        NULL,
        '2023-03-01',
        6
    ),
    (
        'Écho de Lumière',
        '/assets/images/PicturesTest/Douce_Mélancolie.webp',
        'Une installation jouant avec les reflets lumineux en réponse aux sons.',
        NULL,
        NULL,
        '2023-06-07',
        6
    ),
    (
        'Connexion',
        '/assets/images/PicturesTest/Connexion.webp',
        'Installation interactive représentant la connexion entre humains et machines.',
        NULL,
        NULL,
        '2023-09-10',
        6
    ),
    (
        'Harmonie',
        '/assets/images/PicturesTest/Harmonie.webp',
        'Une œuvre numérique capturant l\'harmonie dans la nature et la culture.',
        NULL,
        NULL,
        '2023-01-05',
        7
    ),
    (
        'Esprit Ancien',
        '/assets/images/PicturesTest/Esprit_Ancien.webp',
        'Une représentation moderne des anciens esprits de la nature.',
        NULL,
        NULL,
        '2023-04-14',
        7
    ),
    (
        'Nouveau Souffle',
        '/assets/images/PicturesTest/Nouveau_Souffle.webp',
        'Une œuvre représentant une nouvelle interprétation des motifs traditionnels.',
        NULL,
        NULL,
        '2023-07-29',
        7
    ),
    (
        'Révolution Numérique',
        '/assets/images/PicturesTest/Révolution_Numérique.webp',
        'Un collage numérique explorant le thème de la révolution technologique.',
        NULL,
        NULL,
        '2023-02-10',
        8
    ),
    (
        'Fragments Urbains',
        '/assets/images/PicturesTest/Fragments_Urbains.webp',
        'Un assemblage de fragments visuels de la vie urbaine moderne.',
        NULL,
        NULL,
        '2023-05-17',
        8
    ),
    (
        'Mémoire Digitale',
        '/assets/images/PicturesTest/Mémoire_Digitale.webp',
        'Un collage explorant la notion de mémoire à l\'ère numérique.',
        NULL,
        NULL,
        '2023-08-12',
        8
    ),
    (
        'Fleurs de Soie',
        '/assets/images/PicturesTest/Fleurs_de_Soie.webp',
        'Un assemblage de fleurs en soie délicates et colorées.',
        NULL,
        NULL,
        '2023-03-05',
        9
    ),
    (
        'Forêt de Tissus',
        '/assets/images/PicturesTest/Forêt_de_Tissus.webp',
        'Une œuvre textile représentant une forêt enchantée.',
        NULL,
        NULL,
        '2023-06-15',
        9
    ),
    (
        'Ondulations',
        '/assets/images/PicturesTest/Ondulations.webp',
        'Des vagues de tissu créant une sensation de mouvement.',
        NULL,
        NULL,
        '2023-09-02',
        9
    ),
    (
        'Regards Perdus',
        '/assets/images/PicturesTest/Regards_Perdus.webp',
        'Un portrait capturant un regard pensif et perdu.',
        NULL,
        NULL,
        '2023-01-14',
        10
    ),
    (
        'Douce Mélancolie',
        '/assets/images/PicturesTest/Douce_Mélancolie.webp',
        'Un portrait exprimant une douce mélancolie.',
        NULL,
        NULL,
        '2023-04-20',
        10
    ),
    (
        'Joie Éphémère',
        '/assets/images/PicturesTest/Joie_Ephémère.webp',
        'Un portrait où la joie est capturée dans un instant fugace.',
        NULL,
        NULL,
        '2023-07-19',
        10
    );

CREATE TABLE exhibition (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    type ENUM('PERMANENT', 'TEMPORARY'),
    date_begin DATE NOT NULL,
    date_end DATE NOT NULL
);

INSERT INTO
    exhibition (
        name,
        description,
        type,
        date_begin,
        date_end
    )
VALUES (
        'VirtuArt PERMANENT',
        ' LOREM ',
        'PERMANENT',
        '2024-09-04',
        '2025-09-04'
    ),
    (
        'VirtuArt TEMPORARY',
        ' LOREM ',
        'TEMPORARY',
        '2023-12-08',
        '2024-10-02'
    );

CREATE Table artwork_exhibition (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    artwork_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (artwork_id) REFERENCES artwork (id),
    exhibition_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (exhibition_id) REFERENCES exhibition (id)
);

INSERT INTO
    artwork_exhibition (artwork_id, exhibition_id)
VALUES ("1", "1"),
    ("2", "1"),
    ("3", "1");

CREATE TABLE user (
    id INT unsigned primary key auto_increment not null,
    pseudo VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    hashed_password VARCHAR(255) NOT NULL,
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    birthday DATE,
    deathday DATE,
    nationality VARCHAR(100),
    biography TEXT,
    website VARCHAR(255),
    instagram VARCHAR(255),
    twitter VARCHAR(255),
    facebook VARCHAR(255),
    linkedin VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_artist BOOLEAN DEFAULT FALSE,
    is_admin BOOLEAN DEFAULT FALSE
);

INSERT INTO
    user (
        pseudo,
        email,
        hashed_password,
        firstname,
        lastname,
        birthday,
        deathday,
        nationality,
        biography,
        website,
        instagram,
        twitter,
        facebook,
        linkedin,
        created_at,
        is_artist,
        is_admin
    )
VALUES (
        'Master_toto',
        'toto@gmail.com',
        'toto',
        'Scarlett',
        'Johansson',
        '1980-01-01',
        '2000-01-01',
        'Américaine',
        'aussi belle que : Angelina Jolie',
        'https://master_toto.fr',
        'https://instagram.com',
        'https://twitter.com',
        'https://facebook.com',
        'https://linkedin.com',
        CURRENT_TIMESTAMP,
        '1',
        '0'
    ),
    (
        'Toto',
        'toto@toto.com',
        '$argon2id$v=19$m=19456,t=2,p=1$3r0iBd7F1mxXKywG0CBIiA$FZrP4iI3yc9NTMHckUPrBBlIIsMKFLB0e5JLBk0mlBA',
        'Scarlett',
        'Johansson',
        '1980-01-01',
        '2000-01-01',
        'Américaine',
        'aussi belle que : Angelina Jolie',
        'https://master_toto.fr',
        'https://instagram.com',
        'https://twitter.com',
        'https://facebook.com',
        'https://linkedin.com',
        CURRENT_TIMESTAMP,
        '0',
        '0'
    ),
    (
        'artist-toto',
        'artist-toto@toto.com',
        '$argon2id$v=19$m=19456,t=2,p=1$QsrQxPa92oJU4DqsVYQ/BQ$aWTxcIrsvcLHQoCwYn33rwTvdOh0LOHnapORDAt4fI8',
        'Scarlett',
        'Johansson',
        '1980-01-01',
        '2000-01-01',
        'Américaine',
        'aussi belle que : Angelina Jolie',
        'https://master_toto.fr',
        'https://instagram.com',
        'https://twitter.com',
        'https://facebook.com',
        'https://linkedin.com',
        CURRENT_TIMESTAMP,
        '0',
        '1'
    ),
    (
        'AdminToto',
        'admintoto@toto.com',
        '$argon2id$v=19$m=19456,t=2,p=1$c28oEDU32RPXw0OvW+3dxA$zZM+sPdQQ13bIHwsGFjevWiqnOLizGYq0EHcb4skByw',
        'Scarlett',
        'Johansson',
        '1980-01-01',
        '2000-01-01',
        'Américaine',
        'aussi belle que : Angelina Jolie',
        'https://master_toto.fr',
        'https://instagram.com',
        'https://twitter.com',
        'https://facebook.com',
        'https://linkedin.com',
        CURRENT_TIMESTAMP,
        '1',
        '0'
    );

CREATE TABLE favorite (
    artwork_id INT unsigned NOT NULL,
    FOREIGN KEY (artwork_id) REFERENCES artwork (id),
    user_id INT unsigned NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user (id)
);

SELECT favorite.user_id, favorite.artwork_id, artwork.image_url
FROM favorite
    INNER JOIN artwork ON favorite.artwork_id = artwork.id
    INNER JOIN user ON favorite.user_id = user.id
WHERE
    user.id = 1;

INSERT INTO
    favorite (artwork_id, user_id)
VALUES ("1", "1"),
    ("2", "1"),
    ("3", "1");