const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const favorite = await tables.favorite.browse(req.params.id);
    if (favorite == null) {
      res.sendStatus(201).send(`Vous n'avez aucune Oeuvre dans vos Favoris`);
    } else {
      res.json(favorite);
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const result = await tables.favorite.create(req.body);
    res
      .status(201)
      .send(`Oeuvre ajoutée à vos Favoris. ID : ${result.insertId}`);
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

module.exports = { browse, add, destroy };
