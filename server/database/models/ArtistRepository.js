const AbstractRepository = require("./AbstractRepository");

class ArtistRepository extends AbstractRepository {
  constructor() {
    super({ table: "artist" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `
      select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }
}

module.exports = ArtistRepository;