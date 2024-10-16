const path = require("path");
const { deleteImageFile } = require("../services/middleware");

const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const artworks = await tables.artwork.readAll();
    res.json(artworks);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const artwork = await tables.artwork.read(req.params.id);
    if (artwork == null) {
      res.sendStatus(404);
    } else {
      res.json(artwork);
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    await tables.artwork.create(req.body);
    res.status(201).send(`Oeuvre ajoutée avec succès.`);
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  const artwork = { ...req.body, id: req.params.id };
  try {
    await tables.artwork.update(artwork);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const artwork = await tables.artwork.read(req.params.id);
    if (artwork) {
      const imagePath = path.join(
        __dirname,
        "..",
        "..",
        "public",
        "assets",
        "images",
        "uploads",
        path.basename(artwork.image_url)
      );

      deleteImageFile(imagePath);
      await tables.artwork.delete(req.params.id);
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const readArtworksByUser = async (req, res, next) => {
  try {
    const artwork = await tables.artwork.artworksByUser(req.params.id);
    if (artwork === null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(artwork);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { browse, read, add, edit, destroy, readArtworksByUser };
