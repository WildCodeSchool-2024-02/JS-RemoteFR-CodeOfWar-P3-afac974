const AbstractRepository = require("./AbstractRepository");

class ExhibitionRepository extends AbstractRepository {
  constructor() {
    super({ table: "exhibition" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} WHERE artwork.id = ? `,
      [id]
    );
    return rows[0];
  }

  async create(exhibition) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, description, type, date_begin, date_end) values (?, ?, ?, ?, ?)`,
      [
        exhibition.name,
        exhibition.description,
        exhibition.type,
        exhibition.date_begin,
        exhibition.date_end,
      ]
    );
    return result.insertId;
  }

  async update(exhibition) {
    const [result] = await this.database.query(
      `update ${this.table} SET name = ?, description = ?, type = ?,date_begin = ?, date_end = ? WHERE id = ?`,
      [
        exhibition.name,
        exhibition.description,
        exhibition.type,
        exhibition.date_begin,
        exhibition.date_end,
        exhibition.id,
      ]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows;
  }

  async readExhibitionArtwork(id) {
    const [rows] = await this.database.query(
      `SELECT 
      artwork.id,
      artwork.title AS nom_de_l_oeuvre,
      artwork.image_url AS pictures,
      artwork.description AS description,
      artist.pseudo AS artiste
    FROM exhibition
    JOIN artwork_exhibition ON artwork_exhibition.exhibition_id = exhibition.id 
    JOIN artwork ON artwork.id = artwork_exhibition.artwork_id 
    JOIN artist ON artist.id = artwork.artist_id
    WHERE exhibition.id = ?`,
      [id]
    );
    return rows;
  }

  async createExhibitionArtwork(artworkExhibition) {
    const [result] = await this.database.query(
      `insert into artwork_exhibition (artwork_id, exhibition_id) values (?, ?)`,
      [artworkExhibition.artwork_id, artworkExhibition.exhibition_id]
    );
    return result.insertId;
  }

  async deleteExhibitionArtwork(exhibitionId, artworkId) {
    const [result] = await this.database.query(
      `DELETE FROM artwork_exhibition WHERE exhibition_id = ? AND artwork_id = ?`,
      [exhibitionId, artworkId]
    );
    return result.affectedRows;
  }
}

module.exports = ExhibitionRepository;
