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
      `select * from ${this.table} INNER JOIN artwork ON favorite.artwork_id = artwork.id INNER JOIN user ON favorite.user_id = user.id WHERE user.id = ? `,
      [id]
    );
    return rows;
  }

  async createFavorite(artworkId, userId) {
    const [result] = await this.database.query(
      `INSERT INTO favorite (artwork_id, user_id) VALUES(?, ?)`,
      [artworkId, userId]
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
