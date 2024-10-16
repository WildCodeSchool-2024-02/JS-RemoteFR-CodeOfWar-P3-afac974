// Import the repository modules responsible for handling data operations on the tables
const ArtworkRepository = require("./models/ArtworkRepository");
const ExhibitionRepository = require("./models/ExhibitionRepository");
const FavoriteRepository = require("./models/FavoriteRepository");
const UserRepository = require("./models/UserRepository");

// Create an empty object to hold data repositories for different tables
const tables = {};

/* ************************************************************************* */
// Register data repositories for tables
/* ************************************************************************* */

// Register each repository as data access point for its table
tables.artwork = new ArtworkRepository();
tables.exhibition = new ExhibitionRepository();
tables.favorite = new FavoriteRepository();
tables.user = new UserRepository();

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// exports the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
