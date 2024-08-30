-- SQLBook: Code

create table artist (
  id int unsigned primary key auto_increment not null,
  biography TEXT,
  pseudo VARCHAR(100),
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  birthday DATE,
  nationality VARCHAR(100),
  deathday DATE
);

INSERT INTO artist (biography, pseudo, firstname, lastname, birthday, nationality, deathday) VALUES
('Alice Dupont est une artiste contemporaine française spécialisée dans les peintures abstraites.', 'Alice Dupont', 'Alice', 'Dupont', NULL, 'Française', NULL),
('Marc Lefèvre est un sculpteur belge connu pour ses œuvres en métal recyclé.', 'Marc Lefèvre', 'Marc', 'Lefèvre', NULL, 'Belge', NULL),
('Sophia Durand est une photographe italienne spécialisée dans la photographie de rue.', 'Sophia Durand', 'Sophia', 'Durand', NULL, 'Italienne', NULL),
('Olivier Martin est un artiste numérique canadien qui crée des œuvres d\'art générées par des algorithmes.', 'Olivier Martin', 'Olivier', 'Martin', NULL, 'Canadien', NULL),
('Emma Léger est une artiste britannique travaillant principalement avec la céramique.', 'Emma Léger', 'Emma', 'Léger', NULL, 'Britannique', NULL),
('Lucas Dubois est un artiste français connu pour ses installations artistiques interactives.', 'Lucas Dubois', 'Lucas', 'Dubois', NULL, 'Français', NULL),
('Maya Nguyen est une artiste vietnamienne créant des œuvres numériques inspirées par la culture asiatique.', 'Maya Nguyen', 'Maya', 'Nguyen', NULL, 'Vietnamienne', NULL),
('David Rodriguez est un artiste cubain travaillant principalement avec des collages numériques.', 'David Rodriguez', 'David', 'Rodriguez', NULL, 'Cubain', NULL),
('Isabelle Morel est une artiste textile suisse qui crée des œuvres en tissu inspirées de la nature.', 'Isabelle Morel', 'Isabelle', 'Morel', NULL, 'Suisse', NULL),
('Étienne Laurent est un artiste français travaillant avec la peinture à l\'huile pour créer des portraits réalistes.', 'Étienne Laurent', 'Étienne', 'Laurent', NULL, 'Français', NULL);

create table artwork (
  id INT unsigned primary key auto_increment not null,
  title VARCHAR(100) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  description TEXT,
  technique VARCHAR(100),
  measurement VARCHAR(100),
  date DATE NOT NULL,
  artist_id INT unsigned NOT NULL,
  FOREIGN KEY (artist_id) REFERENCES artist(id)
);

INSERT INTO artwork (title, image_url, description, technique, measurement, date, artist_id) 
VALUES
('Éclosion', './assets/images/PicturesTest/ImageTest1.png', 'Une peinture abstraite représentant une explosion de couleurs vives.', NULL, NULL, '2023-02-15', 1),
('Lumière dans l\'obscurité', './assets/images/PicturesTest/ImageTest2.png', 'Un jeu de lumières et de contrastes dans une scène mystérieuse.', NULL, NULL, '2023-05-10', 1),
('Odyssée', './assets/images/PicturesTest/ImageTest3.png', 'Une interprétation colorée de l\'Odyssée d\'Homère.', NULL, NULL, '2023-07-22', 1),
('Métamorphose', './assets/images/PicturesTest/ImageTest1.png', 'Une sculpture en métal représentant la transformation d\'une chenille en papillon.', NULL, NULL, '2022-11-03', 2),
('Fusion', './assets/images/PicturesTest/ImageTest2.png', 'Deux formes métalliques fusionnant pour n\'en former qu\'une.', NULL, NULL, '2023-03-17', 2),
('Équilibre', './assets/images/PicturesTest/ImageTest3.png', 'Une sculpture explorant le concept de l\'équilibre dans la nature.', NULL, NULL, '2023-06-25', 2),
('Vie Urbaine', './assets/images/PicturesTest/ImageTest1.png', 'Un instantané de la vie urbaine à Milan.', NULL, NULL, '2022-12-01', 3),
('Passages', './assets/images/PicturesTest/ImageTest2.png', 'Une série de photographies capturant des passants dans les rues de Rome.', NULL, NULL, '2023-04-15', 3),
('Reflets', './assets/images/PicturesTest/ImageTest3.png', 'Des reflets de la ville sur des surfaces vitrées.', NULL, NULL, '2023-08-10', 3),
('Algorithme de Vie', './assets/images/PicturesTest/ImageTest1.png', 'Une œuvre générée par un algorithme représentant des motifs en constante évolution.', NULL, NULL, '2023-01-20', 4),
('Fractale', './assets/images/PicturesTest/ImageTest2.png', 'Une série d\'images fractales aux couleurs vibrantes.', NULL, NULL, '2023-04-30', 4),
('Chaos Organisé', './assets/images/PicturesTest/ImageTest1.png', 'Une représentation visuelle du chaos ordonné.', NULL, NULL, '2023-07-14', 4),
('Vase Organique', './assets/images/PicturesTest/ImageTest2.png', 'Un vase céramique aux formes organiques et naturelles.', NULL, NULL, '2023-02-22', 5),
('Terre et Mer', './assets/images/PicturesTest/ImageTest3.png', 'Une sculpture céramique inspirée des éléments naturels.', NULL, NULL, '2023-05-11', 5),
('Fusion Minérale', './assets/images/PicturesTest/ImageTest1.png', 'Un assemblage céramique rappelant les formations minérales.', NULL, NULL, '2023-08-05', 5),
('Lumières Réactives', './assets/images/PicturesTest/ImageTest2.png', 'Installation où la lumière réagit aux mouvements des spectateurs.', NULL, NULL, '2023-03-01', 6),
('Écho de Lumière', './assets/images/PicturesTest/ImageTest1.png', 'Une installation jouant avec les reflets lumineux en réponse aux sons.', NULL, NULL, '2023-06-07', 6),
('Connexion', './assets/images/PicturesTest/ImageTest2.png', 'Installation interactive représentant la connexion entre humains et machines.', NULL, NULL, '2023-09-10', 6),
('Harmonie', './assets/images/PicturesTest/ImageTest3.png', 'Une œuvre numérique capturant l\'harmonie dans la nature et la culture.', NULL, NULL, '2023-01-05', 7),
('Esprit Ancien', './assets/images/PicturesTest/ImageTest1.png', 'Une représentation moderne des anciens esprits de la nature.', NULL, NULL, '2023-04-14', 7),
('Nouveau Souffle', './assets/images/PicturesTest/ImageTest2.png' , 'Une œuvre représentant une nouvelle interprétation des motifs traditionnels.', NULL, NULL, '2023-07-29', 7),
('Révolution Numérique', './assets/images/PicturesTest/ImageTest3.png' , 'Un collage numérique explorant le thème de la révolution technologique.', NULL, NULL, '2023-02-10', 8),
('Fragments Urbains', './assets/images/PicturesTest/ImageTest1.png' , 'Un assemblage de fragments visuels de la vie urbaine moderne.', NULL, NULL, '2023-05-17', 8),
('Mémoire Digitale', './assets/images/PicturesTest/ImageTest2.png' , 'Un collage explorant la notion de mémoire à l\'ère numérique.', NULL, NULL, '2023-08-12', 8),
('Fleurs de Soie', './assets/images/PicturesTest/ImageTest3.png' , 'Un assemblage de fleurs en soie délicates et colorées.', NULL, NULL, '2023-03-05', 9),
('Forêt de Tissus', './assets/images/PicturesTest/ImageTest1.png' , 'Une œuvre textile représentant une forêt enchantée.', NULL, NULL, '2023-06-15', 9),
('Ondulations', './assets/images/PicturesTest/ImageTest2.png' , 'Des vagues de tissu créant une sensation de mouvement.', NULL, NULL, '2023-09-02', 9),
('Regards Perdus', './assets/images/PicturesTest/ImageTest1.png' , 'Un portrait capturant un regard pensif et perdu.', NULL, NULL, '2023-01-14', 10),
('Douce Mélancolie','./assets/images/PicturesTest/ImageTest2.png'  , 'Un portrait exprimant une douce mélancolie.', NULL, NULL, '2023-04-20', 10),
('Joie Éphémère', './assets/images/PicturesTest/ImageTest3.png' , 'Un portrait où la joie est capturée dans un instant fugace.', NULL, NULL, '2023-07-19', 10);