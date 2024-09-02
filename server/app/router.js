const express = require("express");

const router = express.Router();

// Define Your API Routes Here
/* ************************************************************************* */
const artists = require("./controllers/artistActions");
const artworks = require("./controllers/artworkActions");

router.get("/artists", artists.browse);
router.get("/artists/:id", artists.read);
router.post("/artists", artists.add);
router.put("/artists/:id", artists.edit);
router.delete("/artists/:id", artists.destroy);

router.get("/artworks", artworks.browse);
router.get("/artworks/:id", artworks.read);
router.post("/artworks", artworks.add);

// Import item-related actions
// const { browse, read, add } = require("./controllers/itemActions");

// // Route to get a list of items
// router.get("/items", browse);

// // Route to get a specific item by ID
// router.get("/items/:id", read);

// // Route to add a new item
// router.post("/items", add);

/* ************************************************************************* */

module.exports = router;
