const AbstractRepository = require("./AbstractRepository");

class ArtworkRepository extends AbstractRepository {
  constructor() {
    super({ table: "artwork" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select artwork.*, artist.pseudo artiste from ${this.table} INNER JOIN artist on artwork.artist_id = artist.id`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `
      select artwork.*, artist.pseudo artiste from ${this.table}  INNER JOIN artist on artwork.artist_id = artist.id WHERE artwork.id = ? `,
      [id]
    );
    return rows[0];
  }
}

module.exports = ArtworkRepository;
