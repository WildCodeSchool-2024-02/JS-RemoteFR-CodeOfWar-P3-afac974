const AbstractRepository = require("./AbstractRepository");

class FavoriteRepository extends AbstractRepository {
  constructor() {
    super({ table: "favorite" });
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
    return rows;
  }

  async createFavorite(artworkFavorite) {
    const [result] = await this.database.query(
      `INSERT INTO favorite (artwork_id) VALUES(?)`,
      [artworkFavorite.artwork_id]
    );
    return result.insertId;
  }

  async deleteFavorite(artworkId) {
    const [result] = await this.database.query(
      `DELETE FROM favorite WHERE artwork_id = ?`,
      [artworkId]
    );
    return result.affectedRows;
  }
}

module.exports = FavoriteRepository;
