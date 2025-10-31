import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const ordersTable = `
    CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        customer_name VARCHAR(50) NOT NULL,
        customer_email VARCHAR(50) NOT NULL,
        customer_phone VARCHAR(12) NOT NULL,

        service_type SMALLINT NOT NULL,
        service_details TEXT,
        scheduled_date TIMESTAMP NOT NULL,
        address TEXT NOT NULL,
        status BOOLEAN DEFAULT FALSE,

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;

const db = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
});

async function CreateTables() {
	if (!process.env.DATABASE_URL) {
		console.error("DATABASE_URL is not set in environment variables.");
		process.exit(1);
	}

	let conn;

	console.log("Connecting to the database");
	try {
		conn = await db.connect();
	} catch (error) {
		console.error("Error connecting to the database:", error);
		process.exit(1);
	}
	console.log("Success");

	console.log("Creating tables");
	try {
		await conn.query(ordersTable);
		console.log("Tables created successfully.");
	} catch (error) {
		console.error("Error creating tables:", error);
		process.exit(1);
	} finally {
		await conn.release();
	}

	console.log("Done");
	process.exit(0);
}

CreateTables();
