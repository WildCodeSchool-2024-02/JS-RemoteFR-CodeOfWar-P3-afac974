const express = require("express");

const router = express.Router();

// Define Your API Routes Here
/* ************************************************************************* */
const artists = require("./controllers/artistActions");
const artworks = require("./controllers/artworkActions");
const expo = require("./controllers/expoActions");

router.get("/artists", artists.browse);
router.get("/artists/:id", artists.read);
router.post("/artists", artists.add);

router.get("/artworks", artworks.browse);
router.get("/artworks/:id", artworks.read);
router.post("/artworks", artworks.add);

router.get("/expo", expo.browse);
router.get("/expo/:id", expo.read);
router.put("/expo/:id", expo.edit);
router.post("/expo", expo.add);
router.delete("/expo/:id", expo.destroy);

module.exports = router;
