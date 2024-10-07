const express = require("express");

const router = express.Router();

// Define Your API Routes Here
/* ************************************************************************* */
const artworks = require("./controllers/artworkActions");
const exhibition = require("./controllers/exhibitionActions");
const favorite = require("./controllers/favoriteActions");
const middleware = require("./services/middleware");
const { hashPassword, verifyToken } = require("./services/auth");

// AUTHENTIFICATION
const userActions = require("./controllers/userActions");
const authActions = require("./controllers/authActions");

router.post("/login", authActions.login);

// USER ID
router.get("/getUserId", verifyToken, (req, res) => {
  const userId = req.auth.sub;
  const isAdmin = req.auth.is_admin;
  res.json({ userId, isAdmin });
});

router.get(
  "/checkIfAdmin",
  verifyToken,
  middleware.checkAdminStatus,
  authActions.admin
);

// ARTWORK
router.get("/artworks", artworks.browse);
router.get("/artworks/:id", artworks.read);
router.post("/artworks", middleware.uploadImg, verifyToken, artworks.add);
router.delete("/artworks/:id", artworks.destroy);
router.put("/artworks/:id", artworks.edit);

router.get("/exhibition", exhibition.browse);
router.get("/exhibition/:id", exhibition.read);
router.put("/exhibition/:id", exhibition.edit);
router.post("/exhibition", exhibition.add);

router.get("/exhibition/:id/artworks", exhibition.readArtwork);
router.post("/exhibition/artworks", exhibition.addArtwork);
router.delete(
  "/exhibition/:exhibitionId/artworks/:artworkId",
  exhibition.destroyArtwork
);

// FAVORITES

router.get("/favorite/:id", verifyToken, favorite.read);
router.post("/favorite", verifyToken, favorite.addFavorite);
router.delete("/favorite/:artworkId/:userId", favorite.destroyFavorite);

// USER

router.get("/users/:id/artworks", artworks.readArtworksByUser);
router.get("/users", userActions.browse);
router.get("/users/:id", userActions.read);
router.post("/users", hashPassword, userActions.add);
router.put("/users/:id", userActions.edit);
router.delete("/users/:id/destroy", userActions.destroyAccount);

// Authentication wall

router.use(verifyToken);
router.delete(
  "/exhibition/:id",
  middleware.checkAdminStatus,
  exhibition.destroy
);

module.exports = router;
