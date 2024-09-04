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
      `select * from ${this.table} where id = ?`,
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
}

module.exports = ExhibitionRepository;
