const express = require("express");

const router = express.Router();

// Define Your API Routes Here
/* ************************************************************************* */
const artists = require("./controllers/artistActions");
const artworks = require("./controllers/artworkActions");
const exhibition = require("./controllers/exhibitionActions");

// ARTIST
router.get("/artists", artists.browse);
router.get("/artists/:id", artists.read);
router.post("/artists", artists.add);
router.delete("/artists/:id", artists.destroy);
router.put("/artists/:id", artists.edit);

// ARTWORK
router.get("/artworks", artworks.browse);
router.get("/artworks/:id", artworks.read);
router.post("/artworks", artworks.add);
router.delete("/artworks/:id", artworks.destroy);
router.put("/artworks/:id", artworks.edit);

router.get("/exhibition", exhibition.browse);
router.get("/exhibition/:id", exhibition.read);
router.put("/exhibition/:id", exhibition.edit);
router.post("/exhibition", exhibition.add);
router.delete("/exhibition/:id", exhibition.destroy);

router.get("/exhibition/:id/artworks", exhibition.readArtwork);
router.post("/exhibition/artworks", exhibition.addArtwork);
router.delete(
  "/exhibition/:exhibitionId/artworks/:artworkId",
  exhibition.destroyArtwork
);

router.get("/artists/:id/artworks", artworks.readArtworksByArtist);

// AUTHENTIFICATION
const userActions = require("./controllers/userActions");
const authActions = require("./controllers/authActions");

const { hashPassword, verifyToken } = require("./services/auth");

router.get("/users", userActions.browse);
router.get("/users/:id", userActions.read);
router.post("/users", hashPassword, userActions.add);

router.post("/login", authActions.login);

// Authentication wall
router.use(verifyToken);

module.exports = router;
