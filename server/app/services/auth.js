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

    if (auth == null) {
      throw new Error("Authorization header is missing");
    }

    req.auth = jwt.verify(auth, process.env.APP_SECRET);
    next();
  } catch (err) {
    console.error(err);

    res.sendStatus(401);
  }
};
module.exports = {
  hashPassword,
  verifyToken,
};
