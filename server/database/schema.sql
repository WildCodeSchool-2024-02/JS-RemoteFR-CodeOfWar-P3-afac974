create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

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
('Éclosion', 'https://example.com/eclosion.jpg', 'Une peinture abstraite représentant une explosion de couleurs vives.', NULL, NULL, '2023-02-15', 1),
('Lumière dans l\'obscurité', 'https://example.com/lumiere_obscurite.jpg', 'Un jeu de lumières et de contrastes dans une scène mystérieuse.', NULL, NULL, '2023-05-10', 1),
('Odyssée', 'https://example.com/odyssee.jpg', 'Une interprétation colorée de l\'Odyssée d\'Homère.', NULL, NULL, '2023-07-22', 1),
('Métamorphose', 'https://example.com/metamorphose.jpg', 'Une sculpture en métal représentant la transformation d\'une chenille en papillon.', NULL, NULL, '2022-11-03', 2),
('Fusion', 'https://example.com/fusion.jpg', 'Deux formes métalliques fusionnant pour n\'en former qu\'une.', NULL, NULL, '2023-03-17', 2),
('Équilibre', 'https://example.com/equilibre.jpg', 'Une sculpture explorant le concept de l\'équilibre dans la nature.', NULL, NULL, '2023-06-25', 2),
('Vie Urbaine', 'https://example.com/vie_urbaine.jpg', 'Un instantané de la vie urbaine à Milan.', NULL, NULL, '2022-12-01', 3),
('Passages', 'https://example.com/passages.jpg', 'Une série de photographies capturant des passants dans les rues de Rome.', NULL, NULL, '2023-04-15', 3),
('Reflets', 'https://example.com/reflets.jpg', 'Des reflets de la ville sur des surfaces vitrées.', NULL, NULL, '2023-08-10', 3),
('Algorithme de Vie', 'https://example.com/algorithme_vie.jpg', 'Une œuvre générée par un algorithme représentant des motifs en constante évolution.', NULL, NULL, '2023-01-20', 4),
('Fractale', 'https://example.com/fractale.jpg', 'Une série d\'images fractales aux couleurs vibrantes.', NULL, NULL, '2023-04-30', 4),
('Chaos Organisé', 'https://example.com/chaos_organise.jpg', 'Une représentation visuelle du chaos ordonné.', NULL, NULL, '2023-07-14', 4),
('Vase Organique', 'https://example.com/vase_organique.jpg', 'Un vase céramique aux formes organiques et naturelles.', NULL, NULL, '2023-02-22', 5),
('Terre et Mer', 'https://example.com/terre_mer.jpg', 'Une sculpture céramique inspirée des éléments naturels.', NULL, NULL, '2023-05-11', 5),
('Fusion Minérale', 'https://example.com/fusion_minerale.jpg', 'Un assemblage céramique rappelant les formations minérales.', NULL, NULL, '2023-08-05', 5),
('Lumières Réactives', 'https://example.com/lumieres_reactives.jpg', 'Installation où la lumière réagit aux mouvements des spectateurs.', NULL, NULL, '2023-03-01', 6),
('Écho de Lumière', 'https://example.com/echo_lumiere.jpg', 'Une installation jouant avec les reflets lumineux en réponse aux sons.', NULL, NULL, '2023-06-07', 6),
('Connexion', 'https://example.com/connexion.jpg', 'Installation interactive représentant la connexion entre humains et machines.', NULL, NULL, '2023-09-10', 6),
('Harmonie', 'https://example.com/harmonie.jpg', 'Une œuvre numérique capturant l\'harmonie dans la nature et la culture.', NULL, NULL, '2023-01-05', 7),
('Esprit Ancien', 'https://example.com/esprit_ancien.jpg', 'Une représentation moderne des anciens esprits de la nature.', NULL, NULL, '2023-04-14', 7),
('Nouveau Souffle', 'https://example.com/nouveau_souffle.jpg', 'Une œuvre représentant une nouvelle interprétation des motifs traditionnels.', NULL, NULL, '2023-07-29', 7),
('Révolution Numérique', 'https://example.com/revolution_numerique.jpg', 'Un collage numérique explorant le thème de la révolution technologique.', NULL, NULL, '2023-02-10', 8),
('Fragments Urbains', 'https://example.com/fragments_urbains.jpg', 'Un assemblage de fragments visuels de la vie urbaine moderne.', NULL, NULL, '2023-05-17', 8),
('Mémoire Digitale', 'https://example.com/memoire_digitale.jpg', 'Un collage explorant la notion de mémoire à l\'ère numérique.', NULL, NULL, '2023-08-12', 8),
('Fleurs de Soie', 'https://example.com/fleurs_de_soie.jpg', 'Un assemblage de fleurs en soie délicates et colorées.', NULL, NULL, '2023-03-05', 9),
('Forêt de Tissus', 'https://example.com/foret_de_tissus.jpg', 'Une œuvre textile représentant une forêt enchantée.', NULL, NULL, '2023-06-15', 9),
('Ondulations', 'https://example.com/ondulations.jpg', 'Des vagues de tissu créant une sensation de mouvement.', NULL, NULL, '2023-09-02', 9),
('Regards Perdus', 'https://example.com/regards_perdus.jpg', 'Un portrait capturant un regard pensif et perdu.', NULL, NULL, '2023-01-14', 10),
('Douce Mélancolie', 'https://example.com/douce_melancolie.jpg', 'Un portrait exprimant une douce mélancolie.', NULL, NULL, '2023-04-20', 10),
('Joie Éphémère', 'https://example.com/joie_ephemere.jpg', 'Un portrait où la joie est capturée dans un instant fugace.', NULL, NULL, '2023-07-19', 10);