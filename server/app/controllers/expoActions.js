const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const expo = await tables.expo.readAll();
    res.json(expo);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const expo = await tables.expo.read(req.params.id);
    if (expo == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(expo);
    }
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  const expo = { ...req.body, id: req.params.id };
  try {
    await tables.expo.update(expo);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const expo = req.body;
  try {
    const insertId = await tables.expo.create(expo);
    res.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.expo.delete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = { browse, read, edit, add, destroy };
