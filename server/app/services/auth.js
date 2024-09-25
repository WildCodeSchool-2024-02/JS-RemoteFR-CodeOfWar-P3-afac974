const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const hashedPassword = await argon2.hash(password, hashingOptions);

    req.body.hashedPassword = hashedPassword;

    delete req.body.password;

    next();
  } catch (err) {
    next(err);
  }
};

const verifyToken = (req, res, next) => {
  try {
    const { auth } = req.cookies;
    if (!auth) {
      throw new Error("");
    }
    req.auth = jwt.verify(auth, process.env.APP_SECRET);
    next();
  } catch (err) {
    console.error(err.message);
    res
      .status(401)
      .json({ message: "Non autorisé : Le token est invalide ou manquant" });
  }
};

const fetchUserId = (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Non autorisé : Aucun token n'a été fourni" });
  }

  try {
    const decoded = jwt.verify(token, process.env.APP_SECRET);
    return res.status(200).json({ userId: decoded.userId });
  } catch (error) {
    console.error("Erreur lors de la vérification du token", error);
    return res
      .status(401)
      .json({ message: "Non autorisé : Le token est invalide" });
  }
};

module.exports = {
  hashPassword,
  verifyToken,
  fetchUserId,
};
