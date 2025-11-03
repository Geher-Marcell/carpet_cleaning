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

const dropQuery = `
	DO $$ DECLARE
		r RECORD;
	BEGIN
		FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
			EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
		END LOOP;
	END $$;
`;

const db = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
});

async function Doit(command) {
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

	console.log( command == "create" ? "Creating" : "Dropping" + " tables");
	try {
		await conn.query(command=="create" ? ordersTable : dropQuery);
		console.log("Tables " + (command == "create" ? "created" : "dropped") + " successfully.");
	} catch (error) {
		console.error("Error " + (command == "create" ? "creating" : "dropping") + " tables:", error);
		process.exit(1);
	} finally {
		await conn.release();
	}

	console.log("Done");
	process.exit(0);
}

const commands = ["create", "drop"];

const command = process.argv[2];

if(!commands.includes(command)) {
	console.log("Please provide a valid command: create or drop");
	process.exit(1);
}

Doit(command);