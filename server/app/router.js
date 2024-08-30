const express = require("express");

const router = express.Router();

// Define Your API Routes Here
const artists = require("./controllers/artistActions");
const artworks = require("./controllers/artworkActions");

router.get("/artists", artists.browse);
router.get("/artists/:id", artists.read);
router.post("/artists", artists.add);

router.get("/artworks", artworks.browse);
router.get("/artworks/:id", artworks.read);
router.post("/artworks", artworks.add);

module.exports = router;
