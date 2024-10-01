-- SQLBook: Code
CREATE TABLE user (
    id INT unsigned PRIMARY KEY AUTO_INCREMENT NOT NULL,
    pseudo VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    hashed_password VARCHAR(255) NOT NULL,
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    nationality VARCHAR(100),
    biography TEXT,
    website VARCHAR(255),
    instagram VARCHAR(255),
    twitter VARCHAR(255),
    facebook VARCHAR(255),
    linkedin VARCHAR(255),
    avatar VARCHAR(255) DEFAULT "/assets/avatar_user/default.png",
    is_admin BOOLEAN DEFAULT FALSE
);

INSERT INTO
    user (
        pseudo,
        email,
        hashed_password,
        firstname,
        lastname,
        nationality,
        biography,
        website,
        instagram,
        twitter,
        facebook,
        linkedin,
        avatar,
        is_admin
    )
VALUES (
        'Toto',
        'toto@toto.com',
        '$argon2id$v=19$m=19456,t=2,p=1$3r0iBd7F1mxXKywG0CBIiA$FZrP4iI3yc9NTMHckUPrBBlIIsMKFLB0e5JLBk0mlBA',
        'Scarlett',
        'Johansson',
        'Américaine',
        'aussi belle que : Angelina Jolie',
        'https://master_toto.fr',
        'https://instagram.com',
        'https://twitter.com',
        'https://facebook.com',
        'https://linkedin.com',
        default,
        '0'
    ),
    (
        'AdminToto',
        'admintoto@toto.com',
        '$argon2id$v=19$m=19456,t=2,p=1$c28oEDU32RPXw0OvW+3dxA$zZM+sPdQQ13bIHwsGFjevWiqnOLizGYq0EHcb4skByw',
        'Scarlett',
        'Johansson',
        'Américaine',
        'aussi belle que : Angelina Jolie',
        'https://master_toto.fr',
        'https://instagram.com',
        'https://twitter.com',
        'https://facebook.com',
        'https://linkedin.com',
        default,
        '1'
    ),
    (
        'Alice Dupont',
        'alicetoto@toto.com',
        '$argon2id$v=19$m=19456,t=2,p=1$1xhV1Pcqj02Vp4lws9xzjg$MKZtoPYm8pWBKNr3lbBJsTAZ/qluP/RbNATmSVEQlVw',
        'Alice',
        'Dupont',
        'Française',
        'Alice Dupont est une artiste contemporaine française spécialisée dans les peintures abstraites.',
        'https://alice-dupont.com',
        'https://instagram.com/alice_arts',
        'https://twitter.com/alicedupont_art',
        'https://facebook.com/alicedupont',
        'https://linkedin.com/in/alicedupont',
        '/assets/avatar_user/Alice_Dupont.webp',
        '0'
    ),
    (
        'Marc Lefèvre',
        'marctoto@toto.com',
        '$argon2id$v=19$m=19456,t=2,p=1$1xhV1Pcqj02Vp4lws9xzjg$MKZtoPYm8pWBKNr3lbBJsTAZ/qluP/RbNATmSVEQlVw',
        'Marc',
        'Lefèvre',
        'Belge',
        'Marc Lefèvre est un sculpteur belge connu pour ses œuvres en métal recyclé.',
        'https://marclefevre.com',
        'https://instagram.com/marc_sculpteur',
        'https://twitter.com/marclefevre',
        'https://facebook.com/marclefevre',
        'https://linkedin.com/in/marclefevre',
        '/assets/avatar_user/Marc_Lefevre.webp',
        '0'
    ),
    (
        'Sophia Durand',
        'sophiatoto@toto.com',
        '$argon2id$v=19$m=19456,t=2,p=1$1xhV1Pcqj02Vp4lws9xzjg$MKZtoPYm8pWBKNr3lbBJsTAZ/qluP/RbNATmSVEQlVw',
        'Sophia',
        'Durand',
        'Italienne',
        'Sophia Durand est une photographe italienne spécialisée dans la photographie de rue.',
        'https://sophiadurand.com',
        'https://instagram.com/sophia.photo',
        'https://twitter.com/sophia_durand',
        'https://facebook.com/sophiadurand',
        'https://linkedin.com/in/sophiadurand',
        '/assets/avatar_user/Sophia_Durand.webp',
        '0'
    ),
    (
        'Olivier Martin',
        'oliviertoto@toto.com',
        '$argon2id$v=19$m=19456,t=2,p=1$1xhV1Pcqj02Vp4lws9xzjg$MKZtoPYm8pWBKNr3lbBJsTAZ/qluP/RbNATmSVEQlVw',
        'Olivier',
        'Martin',
        'Canadien',
        'Olivier Martin est un artiste numérique canadien qui crée des œuvres d\'art générées par des algorithmes.',
        'https://oliviermartin.com',
        'https://instagram.com/olivier_digital',
        'https://twitter.com/oliviermartin',
        'https://facebook.com/oliviermartin',
        'https://linkedin.com/in/oliviermartin',
        '/assets/avatar_user/Olivier_Martin_.webp',
        '0'
    ),
    (
        'Emma Léger',
        'emmatoto@toto.com',
        '$argon2id$v=19$m=19456,t=2,p=1$1xhV1Pcqj02Vp4lws9xzjg$MKZtoPYm8pWBKNr3lbBJsTAZ/qluP/RbNATmSVEQlVw',
        'Emma',
        'Léger',
        'Britannique',
        'Emma Léger est une artiste britannique travaillant principalement avec la céramique.',
        'https://emmaleger.com',
        'https://instagram.com/emma_ceramics',
        'https://twitter.com/emmaleger',
        'https://facebook.com/emmaleger',
        'https://linkedin.com/in/emmaleger',
        '/assets/avatar_user/Emma_Leger.webp',
        '0'
    ),
    (
        'Lucas Dubois',
        'lucastoto@toto.com',
        '$argon2id$v=19$m=19456,t=2,p=1$1xhV1Pcqj02Vp4lws9xzjg$MKZtoPYm8pWBKNr3lbBJsTAZ/qluP/RbNATmSVEQlVw',
        'Lucas',
        'Dubois',
        'Français',
        'Lucas Dubois est un artiste français connu pour ses installations artistiques interactives.',
        'https://lucasdubois.com',
        'https://instagram.com/lucas_installations',
        'https://twitter.com/lucasdubois',
        'https://facebook.com/lucasdubois',
        'https://linkedin.com/in/lucasdubois',
        '/assets/avatar_user/Lucas_Dubois.webp',
        '0'
    ),
    (
        'Maya Nguyen',
        'mayatoto@toto.com',
        '$argon2id$v=19$m=19456,t=2,p=1$1xhV1Pcqj02Vp4lws9xzjg$MKZtoPYm8pWBKNr3lbBJsTAZ/qluP/RbNATmSVEQlVw',
        'Maya',
        'Nguyen',
        'Vietnamienne',
        'Maya Nguyen est une artiste vietnamienne créant des œuvres numériques inspirées par la culture asiatique.',
        'https://mayanguyen.com',
        'https://instagram.com/maya.digital',
        'https://twitter.com/mayanguyen',
        'https://facebook.com/mayanguyen',
        'https://linkedin.com/in/mayanguyen',
        '/assets/avatar_user/Maya_Nguyen.webp',
        '0'
    ),
    (
        'David Rodriguez',
        'davidtoto@toto.com',
        '$argon2id$v=19$m=19456,t=2,p=1$1xhV1Pcqj02Vp4lws9xzjg$MKZtoPYm8pWBKNr3lbBJsTAZ/qluP/RbNATmSVEQlVw',
        'David',
        'Rodriguez',
        'Cubain',
        'David Rodriguez est un artiste cubain travaillant principalement avec des collages numériques.',
        'https://davidrodriguez.com',
        'https://instagram.com/david_collages',
        'https://twitter.com/davidrodriguez',
        'https://facebook.com/davidrodriguez',
        'https://linkedin.com/in/davidrodriguez',
        '/assets/avatar_user/David_Rodriguez.webp',
        '0'
    ),
    (
        'Isabelle Morel',
        'isabelletoto@toto.com',
        '$argon2id$v=19$m=19456,t=2,p=1$1xhV1Pcqj02Vp4lws9xzjg$MKZtoPYm8pWBKNr3lbBJsTAZ/qluP/RbNATmSVEQlVw',
        'Isabelle',
        'Morel',
           'Suisse',
        'Isabelle Morel est une artiste textile suisse qui crée des œuvres en tissu inspirées de la nature.',
        'https://isabellemorel.com',
        'https://instagram.com/isabelle_textile',
        'https://twitter.com/isabellemorel',
        'https://facebook.com/isabellemorel',
        'https://linkedin.com/in/isabellemorel',
        '/assets/avatar_user/Isabelle_Morel.webp',
        '0'
    ),
    (
        'Étienne Laurent',
        'etiennetoto@toto.com',
        '$argon2id$v=19$m=19456,t=2,p=1$1xhV1Pcqj02Vp4lws9xzjg$MKZtoPYm8pWBKNr3lbBJsTAZ/qluP/RbNATmSVEQlVw',
        'Étienne',
        'Laurent',
        'Français',
        'Étienne Laurent est un artiste français travaillant avec la peinture à l\'huile pour créer des portraits réalistes.',
        'https://etiennelaurent.com',
        'https://instagram.com/etienne_peintre',
        'https://twitter.com/etiennelaurent',
        'https://facebook.com/etiennelaurent',
        'https://linkedin.com/in/etiennelaurent',
        '/assets/avatar_user/Etienne_Laurent.webp',
        '0'
    );

create table artwork (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL,
    image_url VARCHAR(255) DEFAULT "/assets/avatar_user/default.png",
    description TEXT,
    technique VARCHAR(100),
    date DATE,
    user_id INT unsigned,
    FOREIGN KEY (user_id) REFERENCES user (id)
);

INSERT INTO
    artwork (
        title,
        image_url,
        description,
        technique,
        date,
        user_id
    )
VALUES (
        'Éclosion',
        '/assets/images/PicturesTest/Eclosion.webp',
        'Une peinture abstraite représentant une explosion de couleurs vives.',
        'Peinture à l\'huile',
        '2023-02-15',
        3
    ),
    (
        'Lumière dans l\'obscurité',
        '/assets/images/PicturesTest/Lumière_dans_Obscurité.webp',
        'Un jeu de lumières et de contrastes dans une scène mystérieuse.',
        'Photographie numérique',
        '2023-05-10',
        3
    ),
    (
        'Odyssée',
        '/assets/images/PicturesTest/Odyssée.webp',
        'Une interprétation colorée de l\'Odyssée d\'Homère.',
        'Peinture acrylique',
        '2023-07-22',
        3
    ),
    (
        'Métamorphose',
        '/assets/images/PicturesTest/Métamorphose.webp',
        'Une sculpture en métal représentant la transformation d\'une chenille en papillon.',
        'Sculpture métallique',
        '2022-11-03',
        4
    ),
    (
        'Fusion',
        '/assets/images/PicturesTest/Fusion.webp',
        'Deux formes métalliques fusionnant pour n\'en former qu\'une.',
        'Art métal',
        '2023-03-17',
        4
    ),
    (
        'Équilibre',
        '/assets/images/PicturesTest/Equilibre.webp',
        'Une sculpture explorant le concept de l\'équilibre dans la nature.',
        'Sculpture en bois',
        '2023-06-25',
        4
    ),
    (
        'Vie Urbaine',
        '/assets/images/PicturesTest/Vie_Urbaine.webp',
        'Un instantané de la vie urbaine à Milan.',
        'Photographie argentique',
        '2022-12-01',
        5
    ),
    (
        'Passages',
        '/assets/images/PicturesTest/Passages.webp',
        'Une série de photographies capturant des passants dans les rues de Rome.',
        'Photographie numérique',
        '2023-04-15',
        5
    ),
    (
        'Reflets',
        '/assets/images/PicturesTest/Reflets.webp',
        'Des reflets de la ville sur des surfaces vitrées.',
        'Photographie urbaine',
        '2023-08-10',
        5
    ),
    (
        'Algorithme de Vie',
        '/assets/images/PicturesTest/Algorithme_de_Vie.webp',
        'Une œuvre générée par un algorithme représentant des motifs en constante évolution.',
        'Art numérique',
        '2023-01-20',
        6
    ),
    (
        'Fractale',
        '/assets/images/PicturesTest/Fractale.webp',
        'Une série d\'images fractales aux couleurs vibrantes.',
        'Art fractal',
        '2023-04-30',
        6
    ),
    (
        'Chaos Organisé',
        '/assets/images/PicturesTest/Chaos_Organisé.webp',
        'Une représentation visuelle du chaos ordonné.',
        'Peinture abstraite',
        '2023-07-14',
        6
    ),
    (
        'Vase Organique',
        '/assets/images/PicturesTest/Vase_Organique.webp',
        'Un vase céramique aux formes organiques et naturelles.',
        'Céramique',
        '2023-02-22',
        7
    ),
    (
        'Terre et Mer',
        '/assets/images/PicturesTest/Terre_et_Mer.webp',
        'Une sculpture céramique inspirée des éléments naturels.',
        'Sculpture céramique',
        '2023-05-11',
        7
    ),
    (
        'Fusion Minérale',
        '/assets/images/PicturesTest/Fusion_Minérale.webp',
        'Un assemblage céramique rappelant les formations minérales.',
        'Céramique',
        '2023-08-05',
        7
    ),
    (
        'Lumières Réactives',
        '/assets/images/PicturesTest/Lumières_Réactives.webp',
        'Installation où la lumière réagit aux mouvements des spectateurs.',
        'Installation lumineuse',
        '2023-03-01',
        8
    ),
    (
        'Écho de Lumière',
        '/assets/images/PicturesTest/Douce_Mélancolie.webp',
        'Une installation jouant avec les reflets lumineux en réponse aux sons.',
        'Installation interactive',
        '2023-06-07',
        8
    ),
    (
        'Connexion',
        '/assets/images/PicturesTest/Connexion.webp',
        'Installation interactive représentant la connexion entre humains et machines.',
        'Art interactif',
        '2023-09-10',
        8
    ),
    (
        'Harmonie',
        '/assets/images/PicturesTest/Harmonie.webp',
        'Une œuvre numérique capturant l\'harmonie dans la nature et la culture.',
        'Art numérique',
        '2023-01-05',
        9
    ),
    (
        'Esprit Ancien',
        '/assets/images/PicturesTest/Esprit_Ancien.webp',
        'Une représentation moderne des anciens esprits de la nature.',
        'Peinture moderne',
        '2023-04-14',
        9
    ),
    (
        'Nouveau Souffle',
        '/assets/images/PicturesTest/Nouveau_Souffle.webp',
        'Une œuvre représentant une nouvelle interprétation des motifs traditionnels.',
        'Art contemporain',
        '2023-07-29',
        9
    ),
    (
        'Révolution Numérique',
        '/assets/images/PicturesTest/Révolution_Numérique.webp',
        'Un collage numérique explorant le thème de la révolution technologique.',
        'Collage numérique',
        '2023-02-10',
        10
    ),
    (
        'Fragments Urbains',
        '/assets/images/PicturesTest/Fragments_Urbains.webp',
        'Un assemblage de fragments visuels de la vie urbaine moderne.',
        'Assemblage visuel',
        '2023-05-17',
        10
    ),
    (
        'Mémoire Digitale',
        '/assets/images/PicturesTest/Mémoire_Digitale.webp',
        'Un collage explorant la notion de mémoire à l\'ère numérique.',
        'Collage artistique',
        '2023-08-12',
        10
    ),
    (
        'Fleurs de Soie',
        '/assets/images/PicturesTest/Fleurs_de_Soie.webp',
        'Un assemblage de fleurs en soie délicates et colorées.',
        'Art floral',
        '2023-03-05',
        11
    ),
    (
        'Forêt de Tissus',
        '/assets/images/PicturesTest/Forêt_de_Tissus.webp',
        'Une œuvre textile représentant une forêt enchantée.',
        'Art textile',
        '2023-06-15',
        11
    ),
    (
        'Ondulations',
        '/assets/images/PicturesTest/Ondulations.webp',
        'Des vagues de tissu créant une sensation de mouvement.',
        'Sculpture textile',
        '2023-09-02',
        11
    ),
    (
        'Regards Perdus',
        '/assets/images/PicturesTest/Regards_Perdus.webp',
        'Un portrait capturant un regard pensif et perdu.',
        'Portrait photographique',
        '2023-01-14',
        12
    ),
    (
        'Douce Mélancolie',
        '/assets/images/PicturesTest/Douce_Mélancolie.webp',
        'Un portrait exprimant une douce mélancolie.',
        'Portrait peint',
        '2023-04-20',
        12
    ),
    (
        'Joie Éphémère',
        '/assets/images/PicturesTest/Joie_Ephémère.webp',
        'Un portrait où la joie est capturée dans un instant fugace.',
        'Portrait photographique',
        '2023-07-19',
        12
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

CREATE TABLE favorite (
    artwork_id INT unsigned NOT NULL,
    FOREIGN KEY (artwork_id) REFERENCES artwork (id),
    user_id INT unsigned NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user (id)
);

INSERT INTO
    favorite (artwork_id, user_id)
VALUES ("1", "1"),
    ("2", "1"),
    ("3", "1");