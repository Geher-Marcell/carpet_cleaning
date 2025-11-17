import { Pool } from "pg";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

class Database {   
    constructor() {
        this.db = null;
        this.usingSqlite = fs.existsSync("./node_modules/sqlite3");
    }

    async Connect(){
        if (this.db) return this.db;

        if (this.usingSqlite) { // SQLite used in development
            const sqlite3 = (await import("sqlite3")).default.verbose();

            this.db = new sqlite3.Database("./database.sqlite", (err) => {
                if (err) {
                    console.error("Error opening SQLite database:", err);
                    throw err;
                } else {
                    console.log("Connected to SQLite database.");
                }
            });
        }else if (process.env.DATABASE_URL) { // PostgreSQL used in production
            this.db = new Pool({
                connectionString: process.env.DATABASE_URL,
                ssl: {
                    rejectUnauthorized: false,
                },
            });

            console.log("Connected to PostgreSQL database.");
        }else{
            throw new Error("No database configuration found.\nPlease install sqlite3 or provide a DATABASE_URL.");
        }
        return this.db;
    }

    async Close(){
        if (!this.db) return;

        if (this.usingSqlite) {
            this.db.close((err) => {
                if (err) {
                    console.error("Error closing SQLite database:", err);
                } else {
                    console.log("Closed SQLite database connection.");
                }
            });
        } else {
            await this.db.end();
            console.log("Closed PostgreSQL database connection.");
        }
        this.db = null;
    }

    async Read(query, params = []) {
        const db = await this.Connect();

        if (this.usingSqlite) {
            return new Promise((resolve, reject) => {
                db.all(query, params, (err, rows) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(rows);
                });
            });
        } else {
            const res = await db.query(query, params);
            return res.rows;
        }
    }

    async Write(query, params = []) {
        const db = await this.Connect();

        if (this.usingSqlite) {
            return new Promise((resolve, reject) => {
                db.run(query, params, function(err) {
                    if (err) {
                        return reject(err);
                    }
                    resolve(this.changes);
                });
            });
        } else {
            const res = await db.query(query, params);
            return res.rowCount;
        }
    }
}

export default Database;