const express = require("express");

const router = express.Router();

// Define Your API Routes Here
const artists = require("./controllers/artistActions");
const artworks = require("./controllers/artworkActions");

router.get("/artists", artists.browse);
router.get("/artists/:id", artists.read);

router.get("/artworks", artworks.browse);
router.get("/artworks/:id", artworks.read);

module.exports = router;
