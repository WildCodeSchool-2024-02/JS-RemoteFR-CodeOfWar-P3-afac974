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
    const insertId = await tables.exhibition.create(exhibition);
    res.status(201).json({ insertId });
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

module.exports = { browse, read, edit, add, destroy };
