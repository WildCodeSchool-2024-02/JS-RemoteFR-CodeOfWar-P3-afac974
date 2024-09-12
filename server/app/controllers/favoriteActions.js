const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const favorite = await tables.favorite.readAll();
    res.json(favorite);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const favorite = await tables.favorite.read(req.params.id);
    if (favorite == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(favorite);
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const favorite = req.body;
  try {
    const result = await tables.favorite.create(favorite);
    res
      .status(201)
      .send(
        `Oeuvre ajoutée avec succès à vos Favoris. ID : ${result.insertId}`
      );
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.favorite.delete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const readFavorite = async (req, res, next) => {
  try {
    const favorite = await tables.favorite.readFavoriteArtwork(req.params.id);
    if (favorite == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(favorite);
    }
  } catch (error) {
    next(error);
  }
};

const addFavorite = async (req, res, next) => {
  const artworkFavorite = req.body;
  try {
    const result = await tables.favorite.createFavoriteArtwork(artworkFavorite);
    res
      .status(201)
      .send(
        `Oeuvre ajoutée avec succès à vos Favoris. ID : ${result.insertId}`
      );
  } catch (error) {
    next(error);
  }
};

const destroyFavorite = async (req, res, next) => {
  const { artworkId, userId } = req.params;
  try {
    const affectedRows = await tables.favorite.deleteFavoriteArtwork(
      artworkId,
      userId
    );
    if (affectedRows === 0) {
      return res.status(404).send("Aucune Oeuvre trouvée.");
    }
    return res.sendStatus(204);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  browse,
  read,
  add,
  destroy,
  readFavorite,
  addFavorite,
  destroyFavorite,
};
