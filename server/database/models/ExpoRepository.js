const AbstractRepository = require("./AbstractRepository");

class ExpoRepository extends AbstractRepository {
  constructor() {
    super({ table: "expo" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async create(expo) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, description, type, date_begin, date_end) values (?, ?, ?, ?, ?)`,
      [expo.name, expo.description, expo.type, expo.date_begin, expo.date_end]
    );
    return result.insertId;
  }

  async update(expo) {
    const [result] = await this.database.query(
      `update ${this.table} SET name = ?, description = ?, type = ?,date_begin = ?, date_end = ? WHERE id = ?`,
      [
        expo.name,
        expo.description,
        expo.type,
        expo.date_begin,
        expo.date_end,
        expo.id,
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
}

module.exports = ExpoRepository;
