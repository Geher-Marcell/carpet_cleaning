import Database from "../app/api/utils/Database.js";

const db = new Database();

const makeQuery = `
    CREATE TABLE IF NOT EXISTS service_types (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(10) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS services (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(100) NOT NULL,
        category INTEGER NOT NULL,
        description TEXT,
        price INTEGER NOT NULL,
        unit VARCHAR(10) DEFAULT 'm2',
        hot BOOLEAN DEFAULT FALSE,
        FOREIGN KEY (category) REFERENCES service_types(id)
    );

    CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customer_name VARCHAR(50) NOT NULL,
        customer_email VARCHAR(50) NOT NULL,
        customer_phone VARCHAR(12) NOT NULL,
        service_type INTEGER NOT NULL,
        service_details TEXT,
        scheduled_date TIMESTAMP NOT NULL,
        address TEXT NOT NULL,
        status BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (service_type) REFERENCES services(id)
    );

    INSERT INTO service_types (name) VALUES
        ('szőnyeg'),
        ('autó'),
        ('egyéb');

    INSERT INTO services (name, description, price, unit, category) VALUES
        ('Standard Szoba', 'Alap takarítási szolgáltatás szobák számára.', 15000, 'szoba', 1),
        ('Lépcsőház', 'Mélytisztítás és kézi részletezés lépcsősorok számára.', 9000, 'lépcsősor', 1),
        ('Kárpittisztítás', 'Kanapé és fotel tisztítás szövetvédelemmel.', 24000, 'darab', 1),
        ('Speciális Kezelések', 'Kisállatszag eltávolítás és allergén kezelés.', 12000, 'kezelés', 1),
        ('Külső Mosás', 'Kézi mosás, viaszolás és gumiabroncs ápolás.', 12000, 'autó', 2),
        ('Belső Részletezés', 'Porszívózás, portörlés és ablaktisztítás.', 18000, 'autó', 2),
        ('Teljes Körű Szolgáltatás', 'Külső mosás és belső részletezés.', 27000, 'autó', 2),
        ('Kiegészítők', 'Motortér tisztítás és fényszóró felújítás.', 6000, 'kiegészítő', 2);

	UPDATE services SET hot = TRUE WHERE id = 3 OR id = 6;
`;

const dropQuery = db.usingSqlite
	? `SELECT 'DROP TABLE IF EXISTS ' || name || ';' AS query
    FROM sqlite_master
    WHERE type = 'table' AND name NOT LIKE 'sqlite_%';`
	: ` $$ DECLARE
		r RECORD;
	BEGIN
		FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
			EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
		END LOOP;
	END $$;
`;

async function Doit(command) {
	try {
		if (command == "create") {
			for (const query of makeQuery
				.split(";")
				.map((q) => q.trim())
				.filter((q) => q.length > 0)) {
				await db.Write(query + ";");
			}
		} else {
			await db.Write(dropQuery);
		}
		// await db.Write(command == "create" ? makeQuery : dropQuery);
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

if (!commands.includes(command)) {
	console.log("Please provide a valid command: create or drop");
	process.exit(1);
}

Doit(command);
