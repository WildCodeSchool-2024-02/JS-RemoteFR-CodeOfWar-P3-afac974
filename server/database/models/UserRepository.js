const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (pseudo, email, hashed_password, avatar) VALUES (?, ?, ?, default)`,
      [user.pseudo, user.email, user.hashedPassword]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT id, 
      pseudo, 
      email,
      firstname,
      lastname,        
      nationality,
      biography,
      website,
      instagram,
      twitter,        
      facebook,
      linkedin,
      avatar FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT id,
        pseudo,
        email,
        firstname,
        lastname,
        hashed_password,
        nationality,
        biography,
        website,
        instagram,
        twitter,
        facebook,
        linkedin,
        avatar
        FROM ${this.table}`
    );

    return rows;
  }

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );

    return rows[0];
  }

  async updateUserInfo(user) {
    console.info(user);
    const [result] = await this.database.query(
      `UPDATE ${this.table} 
       SET pseudo = ?, email = ?, firstname = ?, lastname = ?, 
           nationality = ?, biography = ?, 
           website = ?, instagram = ?, twitter = ?, facebook = ?, 
           linkedin = ?, avatar = ?
       WHERE id = ?`,
      [
        user.pseudo,
        user.email,
        user.firstname,
        user.lastname,
        user.nationality,
        user.biography,
        user.website,
        user.instagram,
        user.twitter,
        user.facebook,
        user.linkedin,
        user.avatar,
        user.id,
      ]
    );
    return result.affectedRows;
  }

  async deleteAccount(user) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [user.id]
    );
    return result.affectedRows;
  }
}

module.exports = UserRepository;
