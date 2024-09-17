const AbstractRepository = require("./AbstractRepository");

class ArtworkRepository extends AbstractRepository {
  constructor() {
    super({ table: "artwork" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select artwork.*, artist.pseudo artist_name from ${this.table} INNER JOIN artist on artwork.artist_id = artist.id`
    );
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select artwork.*, artist.pseudo artist_name from ${this.table}  INNER JOIN artist on artwork.artist_id = artist.id WHERE artwork.id = ? `,
      [id]
    );
    return rows[0];
  }

  async create(artwork) {
    const [result] = await this.database.query(
      `INSERT INTO artwork (title,image_url, description, technique, measurement, date, artist_id) VALUES(?, ?, ?, ?, ?, CURDATE(), ?)`,
      [
        artwork.title,
        artwork.image_url,
        artwork.description,
        artwork.technique,
        artwork.measurement,
        artwork.artist_id,
      ]
    );

    return result;
  }

  async update(artwork) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET title = ?, image_url = ?, description = ?, technique = ?, measurement = ?, date = ? WHERE id = ?`,
      [
        artwork.title,
        artwork.image_url,
        artwork.description,
        artwork.technique,
        artwork.measurement,
        artwork.date,
        artwork.id,
      ]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result.affectedRows;
  }

  async artworksByArtist(id) {
    const [rows] = await this.database.query(
      `SELECT artwork.* FROM artwork JOIN artist ON artwork.artist_id = artist.id WHERE artwork.artist_id = ?`,
      [id]
    );
    return rows;
  }
}

module.exports = ArtworkRepository;
