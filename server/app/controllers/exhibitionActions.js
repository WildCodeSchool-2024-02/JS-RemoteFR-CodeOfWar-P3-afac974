const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const exhibition = await tables.exhibition.readAll();
    res.json(exhibition);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const exhibition = await tables.exhibition.read(req.params.id);
    if (exhibition == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(exhibition);
    }
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  const exhibition = { ...req.body, id: req.params.id };
  try {
    await tables.exhibition.update(exhibition);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const exhibition = req.body;
  try {
    const result = await tables.exhibition.create(exhibition);
    res.status(201).send(`Exposition ajoutée avec succès. ID : ${result.insertId}`);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.exhibition.delete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const readArtwork = async (req, res, next) => {
  try {
    const exhibition = await tables.exhibition.readExhibitionArtwork(req.params.id);
    if (exhibition == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(exhibition);
    }
  } catch (error) {
    next(error); 
  }
};

  const addArtwork = async (req, res, next) => {
    const artworkExhibition = req.body;
    try {
      const result = await tables.exhibition.createExhibitionArtwork(artworkExhibition);
      res.status(201).send(`Exposition ajoutée avec succès. ID : ${result.insertId}`);
    } catch (error) {
      next(error);
    }
  };

  const destroyArtwork = async (req, res, next) => {
    const { exhibitionId, artworkId } = req.params;
    try {
      const affectedRows = await tables.exhibition.deleteExhibitionArtwork(exhibitionId, artworkId);
      if (affectedRows === 0) {
        return res.status(404).send("Aucune correspondance trouvée pour les IDs fournis.");
      }
      return res.sendStatus(204);
    } catch (error) {
      return next(error);
    }
  };





module.exports = { browse, read, edit, add, destroy, readArtwork, addArtwork, destroyArtwork };
