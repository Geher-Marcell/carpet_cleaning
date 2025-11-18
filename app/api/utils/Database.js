import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

class Database {
	constructor() {
		this.db = null;
	}

	async Connect() {
		if (this.db) return this.db;

		if (process.env.DATABASE_URL) {
			this.db = new Pool({
				connectionString: process.env.DATABASE_URL,
				ssl: {
					rejectUnauthorized: false,
				},
			});

			console.log("Connected to PostgreSQL database.");
		} else {
			throw new Error(
				"No database configuration found. Please provide a DATABASE_URL."
			);
		}
		return this.db;
	}

	async Close() {
		if (!this.db) return;
		await this.db.end();
		console.log("Closed PostgreSQL database connection.");
		this.db = null;
	}

	async Read(query, params = []) {
		const db = await this.Connect();
		const res = await db.query(query, params);
		return res.rows;
	}

	async Write(query, params = []) {
		const db = await this.Connect();
		const res = await db.query(query, params);
		return res.rowCount;
	}
}

export default Database;
