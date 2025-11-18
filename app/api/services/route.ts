import { ServiceProps } from "@/app/component/props/serviceProps";
import Database from "../utils/Database";

const db = new Database();
let services: ServiceProps[] = [];

async function FetchServices() {
	const query = `SELECT services.*, service_types.name AS category 
        FROM services 
        JOIN service_types 
        ON services.category = service_types.id;`;
	const result = await db.Read(query);
	services = result as unknown as ServiceProps[];
	console.log("Fetched services:", services);
}

export async function GET() {
	if (services?.length === 0) {
		await FetchServices();
	}

	console.log(services);

	return new Response(JSON.stringify({ services }), { status: 200 });
}
