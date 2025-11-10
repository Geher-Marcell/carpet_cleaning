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
        highlights TEXT,
        iconName VARCHAR(100) DEFAULT 'faSoap',
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

    INSERT INTO services (name, description, price, unit, category, iconName, highlights) VALUES
        ('Mélyszőnyegtisztítás', 'Professzionális mélytisztítás a szőnyegei számára.', 2500, 'm2', 1, 'faBroom', 'Gyors száradás/Környezetbarát tisztítószerek/Alga és gomba elleni védelem'),
        ('Folttisztítás', 'Makacs foltok eltávolítása szőnyegeiről.', 3000, 'folt', 1, 'faDroplet', 'Borfoltok és más szennyeződések/Eredeti szín visszaállítása'),
        ('Kisállat Szageltávolítás', 'Hatékony szageltávolítás kisállat tulajdonosok számára.', 4000, 'm2', 1, 'faPaw', 'Kisállatszőr eltávolítás/Friss illat'),
        ('Belső Részletezés', 'Autója belső terének alapos tisztítása.', 20000, 'autó', 2, 'faCar', 'Belső porszívózás/Ülések tisztítása'),
        ('Külső Mosás', 'Teljes körű külső autómosás és védő viaszolás.', 15000, 'autó', 2, 'faHandsWash', 'Kézi mosás/Védő viasz'),
        ('Teljes Körű Autóápolás', 'Belső és külső tisztítás egy csomagban.', 30000, 'autó', 2, 'faCarSide', 'Teljes körű szolgáltatás');

	  UPDATE services SET hot = TRUE WHERE id = 1 OR id = 6;
`;

const dropQuery = db.usingSqlite
  ? `SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%';`
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
    } else if (command == "drop") {
      if (db.usingSqlite) {
        const tables = await db.Read(dropQuery);
        for (const table of tables) {
          await db.Write(`DROP TABLE IF EXISTS "${table.name}";`);
        }
      } else {
        await db.Write(dropQuery);
      }
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
