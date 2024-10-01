const AbstractRepository = require("./AbstractRepository");

class ArtworkRepository extends AbstractRepository {
  constructor() {
    super({ table: "artwork" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select artwork.*,DATE_FORMAT(date, '%d/%m/%Y') as formatedDate, user.pseudo user_name from ${this.table} INNER JOIN user on artwork.user_id = user.id`
    );
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select artwork.*,DATE_FORMAT(date, '%d/%m/%Y') as formatedDate, user.pseudo user_name from ${this.table}  INNER JOIN user on artwork.user_id = user.id WHERE artwork.id = ? `,
      [id]
    );
    return rows[0];
  }

  async create(artwork) {
    const [result] = await this.database.query(
      `INSERT INTO artwork (title,image_url, description, technique, date, user_id) VALUES(?, ?, ?, ?, CURDATE(), ?)`,
      [
        artwork.title,
        artwork.image_url,
        artwork.description,
        artwork.technique,
        artwork.user_id,
      ]
    );

    return result;
  }

  async update(artwork) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET title = ?, image_url = ?, description = ?, technique = ?, date = ? WHERE id = ?`,
      [
        artwork.title,
        artwork.image_url,
        artwork.description,
        artwork.technique,
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

  async artworksByUser(id) {
    const [rows] = await this.database.query(
      `SELECT artwork.* FROM artwork JOIN user ON artwork.user_id = user.id WHERE artwork.user_id = ?`,
      [id]
    );
    return rows;
  }
}

module.exports = ArtworkRepository;
