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
        '/assets/images/PicturesTest/ImageTest1.jpg',
        'Une peinture abstraite représentant une explosion de couleurs vives.',
        NULL,
        NULL,
        '2023-02-15',
        1
    ),
    (
        'Lumière dans l\'obscurité',
        '/assets/images/PicturesTest/ImageTest2.jpg',
        'Un jeu de lumières et de contrastes dans une scène mystérieuse.',
        NULL,
        NULL,
        '2023-05-10',
        1
    ),
    (
        'Odyssée',
        '/assets/images/PicturesTest/ImageTest3.jpg',
        'Une interprétation colorée de l\'Odyssée d\'Homère.',
        NULL,
        NULL,
        '2023-07-22',
        1
    ),
    (
        'Métamorphose',
        '/assets/images/PicturesTest/ImageTest1.jpg',
        'Une sculpture en métal représentant la transformation d\'une chenille en papillon.',
        NULL,
        NULL,
        '2022-11-03',
        2
    ),
    (
        'Fusion',
        '/assets/images/PicturesTest/ImageTest2.jpg',
        'Deux formes métalliques fusionnant pour n\'en former qu\'une.',
        NULL,
        NULL,
        '2023-03-17',
        2
    ),
    (
        'Équilibre',
        '/assets/images/PicturesTest/ImageTest3.jpg',
        'Une sculpture explorant le concept de l\'équilibre dans la nature.',
        NULL,
        NULL,
        '2023-06-25',
        2
    ),
    (
        'Vie Urbaine',
        '/assets/images/PicturesTest/ImageTest1.jpg',
        'Un instantané de la vie urbaine à Milan.',
        NULL,
        NULL,
        '2022-12-01',
        3
    ),
    (
        'Passages',
        '/assets/images/PicturesTest/ImageTest2.jpg',
        'Une série de photographies capturant des passants dans les rues de Rome.',
        NULL,
        NULL,
        '2023-04-15',
        3
    ),
    (
        'Reflets',
        '/assets/images/PicturesTest/ImageTest3.jpg',
        'Des reflets de la ville sur des surfaces vitrées.',
        NULL,
        NULL,
        '2023-08-10',
        3
    ),
    (
        'Algorithme de Vie',
        '/assets/images/PicturesTest/ImageTest1.jpg',
        'Une œuvre générée par un algorithme représentant des motifs en constante évolution.',
        NULL,
        NULL,
        '2023-01-20',
        4
    ),
    (
        'Fractale',
        '/assets/images/PicturesTest/ImageTest2.jpg',
        'Une série d\'images fractales aux couleurs vibrantes.',
        NULL,
        NULL,
        '2023-04-30',
        4
    ),
    (
        'Chaos Organisé',
        '/assets/images/PicturesTest/ImageTest1.jpg',
        'Une représentation visuelle du chaos ordonné.',
        NULL,
        NULL,
        '2023-07-14',
        4
    ),
    (
        'Vase Organique',
        '/assets/images/PicturesTest/ImageTest2.jpg',
        'Un vase céramique aux formes organiques et naturelles.',
        NULL,
        NULL,
        '2023-02-22',
        5
    ),
    (
        'Terre et Mer',
        '/assets/images/PicturesTest/ImageTest3.jpg',
        'Une sculpture céramique inspirée des éléments naturels.',
        NULL,
        NULL,
        '2023-05-11',
        5
    ),
    (
        'Fusion Minérale',
        '/assets/images/PicturesTest/ImageTest1.jpg',
        'Un assemblage céramique rappelant les formations minérales.',
        NULL,
        NULL,
        '2023-08-05',
        5
    ),
    (
        'Lumières Réactives',
        '/assets/images/PicturesTest/ImageTest2.jpg',
        'Installation où la lumière réagit aux mouvements des spectateurs.',
        NULL,
        NULL,
        '2023-03-01',
        6
    ),
    (
        'Écho de Lumière',
        '/assets/images/PicturesTest/ImageTest1.jpg',
        'Une installation jouant avec les reflets lumineux en réponse aux sons.',
        NULL,
        NULL,
        '2023-06-07',
        6
    ),
    (
        'Connexion',
        '/assets/images/PicturesTest/ImageTest2.jpg',
        'Installation interactive représentant la connexion entre humains et machines.',
        NULL,
        NULL,
        '2023-09-10',
        6
    ),
    (
        'Harmonie',
        '/assets/images/PicturesTest/ImageTest3.jpg',
        'Une œuvre numérique capturant l\'harmonie dans la nature et la culture.',
        NULL,
        NULL,
        '2023-01-05',
        7
    ),
    (
        'Esprit Ancien',
        '/assets/images/PicturesTest/ImageTest1.jpg',
        'Une représentation moderne des anciens esprits de la nature.',
        NULL,
        NULL,
        '2023-04-14',
        7
    ),
    (
        'Nouveau Souffle',
        '/assets/images/PicturesTest/ImageTest2.jpg',
        'Une œuvre représentant une nouvelle interprétation des motifs traditionnels.',
        NULL,
        NULL,
        '2023-07-29',
        7
    ),
    (
        'Révolution Numérique',
        '/assets/images/PicturesTest/ImageTest3.jpg',
        'Un collage numérique explorant le thème de la révolution technologique.',
        NULL,
        NULL,
        '2023-02-10',
        8
    ),
    (
        'Fragments Urbains',
        '/assets/images/PicturesTest/ImageTest1.jpg',
        'Un assemblage de fragments visuels de la vie urbaine moderne.',
        NULL,
        NULL,
        '2023-05-17',
        8
    ),
    (
        'Mémoire Digitale',
        '/assets/images/PicturesTest/ImageTest2.jpg',
        'Un collage explorant la notion de mémoire à l\'ère numérique.',
        NULL,
        NULL,
        '2023-08-12',
        8
    ),
    (
        'Fleurs de Soie',
        '/assets/images/PicturesTest/ImageTest3.jpg',
        'Un assemblage de fleurs en soie délicates et colorées.',
        NULL,
        NULL,
        '2023-03-05',
        9
    ),
    (
        'Forêt de Tissus',
        '/assets/images/PicturesTest/ImageTest1.jpg',
        'Une œuvre textile représentant une forêt enchantée.',
        NULL,
        NULL,
        '2023-06-15',
        9
    ),
    (
        'Ondulations',
        '/assets/images/PicturesTest/ImageTest2.jpg',
        'Des vagues de tissu créant une sensation de mouvement.',
        NULL,
        NULL,
        '2023-09-02',
        9
    ),
    (
        'Regards Perdus',
        '/assets/images/PicturesTest/ImageTest1.jpg',
        'Un portrait capturant un regard pensif et perdu.',
        NULL,
        NULL,
        '2023-01-14',
        10
    ),
    (
        'Douce Mélancolie',
        '/assets/images/PicturesTest/ImageTest2.jpg',
        'Un portrait exprimant une douce mélancolie.',
        NULL,
        NULL,
        '2023-04-20',
        10
    ),
    (
        'Joie Éphémère',
        '/assets/images/PicturesTest/ImageTest3.jpg',
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

-- AUTHENTICATION --

CREATE TABLE user (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    hashed_password VARCHAR(255) NOT NULL,
    is_admin BOOLEAN NOT NULL DEFAULT FALSE,
    is_artist BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO
    user (
        name,
        email,
        hashed_password,
        is_admin,
        is_artist
    )
VALUES (
        'Toto',
        'toto@toto.com',
        '$argon2id$v=19$m=19456,t=2,p=1$3r0iBd7F1mxXKywG0CBIiA$FZrP4iI3yc9NTMHckUPrBBlIIsMKFLB0e5JLBk0mlBA',
        '0',
        '0'
    ),
    (
        'artist-toto',
        'artist-toto@toto.com',
        '$argon2id$v=19$m=19456,t=2,p=1$QsrQxPa92oJU4DqsVYQ/BQ$aWTxcIrsvcLHQoCwYn33rwTvdOh0LOHnapORDAt4fI8',
        '0',
        '1'
    ),
    (
        'AdminToto',
        'admintoto@toto.com',
        '$argon2id$v=19$m=19456,t=2,p=1$c28oEDU32RPXw0OvW+3dxA$zZM+sPdQQ13bIHwsGFjevWiqnOLizGYq0EHcb4skByw',
        '1',
        '0'
    );