const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();

    if (users.length) {
      res.json({ result: users });
    } else {
      res.json({ message: "Aucun utilisateur", result: users });
    }
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.params.id);

    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const result = await tables.user.create(req.body);
    res.status(201).json({
      message: `Utilisateur ${result.insertId} ajouté avec succès`,
      userId: result.insertId,
    });
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  const user = { ...req.body, id: req.params.id };
  try {
    await tables.user.updateUserInfo(user);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const destroyAccount = async (req, res, next) => {
  const user = { id: req.params.id };
  try {
    await tables.user.deleteAccount(user);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  browse,
  read,
  add,
  edit,
  destroyAccount,
};
