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
      `INSERT INTO favorite (artwork_id, user_id) VALUES(?, ?)`,
      [artworkFavorite.artwork_id, artworkFavorite.user_id]
    );
    return result.insertId;
  }

  async deleteFavorite(artworkId, userId) {
    const [result] = await this.database.query(
      `DELETE FROM favorite WHERE artwork_id = ? AND user_id = ?`,
      [artworkId, userId]
    );
    return result.affectedRows;
  }
}

module.exports = FavoriteRepository;
