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
  const userId = req.body.user_id;
  const artworkId = req.body.artwork_id;

  try {
    const result = await tables.favorite.createFavorite(artworkId, userId);
    res
      .status(201)
      .send(
        `Favoris ajouté avec succès à vos Favoris. ID : ${result.insertId}`
      );
  } catch (error) {
    next(error);
  }
};

const destroyFavorite = async (req, res, next) => {
  const { userId } = req.params;
  const { artworkId } = req.params;

  try {
    const affectedRows = await tables.favorite.deleteFavorite(
      artworkId,
      userId
    );
    if (affectedRows === 0) {
      return res.status(404).send("Aucune oeuvre trouvée.");
    }
    return res.sendStatus(204);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  browse,
  read,
  // add,
  // destroy,
  readFavorite,
  addFavorite,
  destroyFavorite,
};
