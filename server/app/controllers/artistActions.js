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

module.exports = { browse, read };