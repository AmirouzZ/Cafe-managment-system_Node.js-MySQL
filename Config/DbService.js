import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();
let instance = null;

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  timeout: 10000,
});

class DbService {
  static getDbServiceInsatnce() {
    return instance ? instance : new DbService();
  }

  async getAllUsers() {
    return await new Promise((resolve, reject) => {
      try {
        let sql = `SELECT * FROM users`;
        connection.query(sql, (error, data) => {
          if (error) reject(new Error(error.message));
          resolve(data);
        });
      } catch (error) {
        console.log(error);
      }
    });
  }

  async checkUserExist(email) {
    return await new Promise((resolve, reject) => {
      let sql = `SELECT * FROM users WHERE email = ?`;
      connection.query(sql, email, (error, data) => {
        if (error) reject(new Error(error.message));
        if (data.length) resolve(data[0]);
        resolve(null);
      });
    });
  }

  async createUser(email, name, password, mobile, status, role) {
    return await new Promise((resolve, reject) => {
      let sql = `INSERT INTO users(email, name, password, mobile, status, role) VALUES(?)`;
      let values = [email, name, password, mobile, status, role];
      connection.query(sql, [values], (error, data) => {
        if (error) reject(new Error(error.message));
        resolve(data);
      });
    });
  }

  async getUser(userId) {
    return await new Promise((resolve, reject) => {
      let sql = `SELECT * FROM users WHERE id = ?`;
      connection.query(sql, userId, (error, data) => {
        if (error) reject(new Error(error.message));
        resolve(data[0]);
      });
    });
  }

  async updateUser(userId, data) {
    let { name } = data;
    return await new Promise((resolve, reject) => {
      let sql = `UPDATE users SET name = ? WHERE id = ?`;
      connection.query(sql, [name, userId], (error, data) => {
        if (error) reject(new Error(error.message));
        resolve(data);
      });
    });
  }

  async updateUserStatus(userId, data) {
    let { status } = data;
    return await new Promise((resolve, reject) => {
      let sql = `UPDATE users SET status = ? WHERE id = ?`;
      connection.query(sql, [status, userId], (error, data) => {
        if (error) reject(new Error(error.message));
        resolve(data);
      });
    });
  }

  async changeUserPassword(userId, newPassword) {
    return await new Promise((resolve, reject) => {
      let sql = `UPDATE users SET password = ? WHERE id = ?`;
      connection.query(sql, [newPassword, userId], (error, data) => {
        if (error) reject(new Error(error.message));
        resolve(data);
      });
    });
  }

  async createCategory(name) {
    return await new Promise((resolve, reject) => {
      let sql = `INSERT INTO categories(name) VALUES(?)`;
      connection.query(sql, name, (error, data) => {
        if (error) reject(new Error(error.message));
        resolve(data);
      });
    });
  }

  async getCategory(userId) {
    return await new Promise((resolve, reject) => {
      let sql = `SELECT * FROM users WHERE id = ?`;
      connection.query(sql, userId, (error, data) => {
        if (error) reject(new Error(error.message));
        resolve(data[0]);
      });
    });
  }

  async updateCategory(userId, data) {
    let { name } = data;
    return await new Promise((resolve, reject) => {
      let sql = `UPDATE users SET name = ? WHERE id = ?`;
      connection.query(sql, [name, userId], (error, data) => {
        if (error) reject(new Error(error.message));
        resolve(data);
      });
    });
  }

  async deleteCategory(userId, data) {
    let { name } = data;
    return await new Promise((resolve, reject) => {
      let sql = `UPDATE users SET name = ? WHERE id = ?`;
      connection.query(sql, [name, userId], (error, data) => {
        if (error) reject(new Error(error.message));
        resolve(data);
      });
    });
  }
}

export default DbService;
