const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const artists = await tables.artist.readAll();
    res.json(artists);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const artist = await tables.artist.read(req.params.id);
    if (artist == null) {
      res.sendStatus(404);
    } else {
      res.json(artist);
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const result = await tables.artist.create(req.body);
    res.status(201).send(`Artiste ajouté avec succès. ID : ${result.insertId}`);
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  const artist = { ...req.body, id: req.params.id };
  try {
    await tables.artist.update(artist);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.artist.delete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = { browse, read, add, edit, destroy };
