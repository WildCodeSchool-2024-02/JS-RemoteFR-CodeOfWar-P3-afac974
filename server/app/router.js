const express = require("express");

const router = express.Router();

// Define Your API Routes Here
/* ************************************************************************* */
const artists = require("./controllers/artistActions");
const artworks = require("./controllers/artworkActions");
const exhibition = require("./controllers/exhibitionActions");
const favorite = require("./controllers/favoriteActions");
const middleware = require("./services/middleware");
const { hashPassword, verifyToken } = require("./services/auth");

// AUTHENTIFICATION
const userActions = require("./controllers/userActions");
const authActions = require("./controllers/authActions");

router.post("/login", authActions.login);

// ARTIST
router.get("/artists", artists.browse);
router.get("/artists/:id", artists.read);
router.post("/artists", artists.add);
router.delete("/artists/:id", artists.destroy);
router.put("/artists/:id", artists.edit);

// USER ID
router.get("/getUserId", verifyToken, (req, res) => {
  const userId = req.auth.sub;
  res.json({ userId });
});

// ARTWORK
router.get("/artworks", artworks.browse);
router.get("/artworks/:id", artworks.read);
router.post("/artworks", middleware.uploadImg, artworks.add);
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

router.get("/artists/:id/artworks", artworks.readArtworksByArtist);

// FAVORITES
router.get("/favorite/:id", favorite.read);
router.post("/favorite", favorite.addFavorite);
router.delete("/favorite/:artworkId/:userId", favorite.destroyFavorite);

router.get("/users", userActions.browse);
router.get("/users/:id", userActions.read);
router.post("/users", hashPassword, userActions.add);

// Authentication wall
router.use(verifyToken);
router.delete(
  "/exhibition/:id",
  middleware.checkAdminStatus,
  exhibition.destroy
);

module.exports = router;
