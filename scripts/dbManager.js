import Database from "../app/api/utils/Database.js";

const db = new Database();

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

const dropQuery = db.usingSqlite ? 
	`SELECT 'DROP TABLE IF EXISTS ' || name || ';' AS query
    FROM sqlite_master
    WHERE type = 'table' AND name NOT LIKE 'sqlite_%';`
	:
	` $$ DECLARE
		r RECORD;
	BEGIN
		FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
			EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
		END LOOP;
	END $$;
`;

async function Doit(command) {
	try{
		await db.Write(command=="create" ? ordersTable : dropQuery);
		console.log("Table " + command + " ran successfully.");
	} catch (error) {
		console.error("Error with table " + command + ":", error);
		process.exit(1);
	} finally {
		await db.Close();
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