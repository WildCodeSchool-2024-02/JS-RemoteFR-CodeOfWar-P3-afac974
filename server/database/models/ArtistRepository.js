// const AbstractRepository = require("./AbstractRepository");

// class ArtistRepository extends AbstractRepository {
//   constructor() {
//     super({ table: "artist" });
//   }

//   async readAll() {
//     const [rows] = await this.database.query(`select * from ${this.table}`);
//     return rows;
//   }

//   async read(id) {
//     const [rows] = await this.database.query(
//       `
//       select * from ${this.table} where id = ?`,
//       [id]
//     );
//     return rows[0];
//   }

//   async create(artist) {
//     const [result] = await this.database.query(
//       `INSERT INTO artist (biography, pseudo, firstname, lastname, birthday, nationality, deathday) VALUES(?, ?, ?, ?, ?, ?, ?)`,
//       [
//         artist.biography,
//         artist.pseudo,
//         artist.firstname,
//         artist.lastname,
//         artist.birthday,
//         artist.nationality,
//         artist.deathday,
//       ]
//     );

//     return result;
//   }

//   async update(artist) {
//     const [result] = await this.database.query(
//       `UPDATE ${this.table} SET biography = ?, pseudo = ?, firstname = ?, lastname = ?, birthday = ?, nationality = ?, deathday = ? WHERE id = ?`,
//       [
//         artist.biography,
//         artist.pseudo,
//         artist.firstname,
//         artist.lastname,
//         artist.birthday,
//         artist.nationality,
//         artist.deathday,
//         artist.id,
//       ]
//     );
//     return result.affectedRows;
//   }

//   async delete(id) {
//     const [result] = await this.database.query(
//       `DELETE FROM ${this.table} WHERE id = ?`,
//       [id]
//     );
//     return result.affectedRows;
//   }
// }

// module.exports = ArtistRepository;
