import { NextResponse } from "next/server";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
});

const BlockedCharactersAndWords = [
	"'",
	'"',
	";",
	"--",
	"<",
	">",
	"(",
	")",
	"`",
	"{",
	"}",
	"[",
	"]",
	"|",
	"&",
	"=",
	"script",
	"select",
	"insert",
	"update",
	"delete",
	"drop",
	"alter",
	"javascript",
];

export async function GET(request: Request) {
	const requiredHeader = request.headers.get("x-super-secret-key");

	if (!requiredHeader || requiredHeader !== process.env.SUPER_SECRET_GET_KEY) {
		return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
	}

	try {
		const selectQuery = "SELECT * FROM orders";
		const result = await db.query(selectQuery);
		return NextResponse.json({ orders: result.rows }, { status: 200 });
	} catch (error) {
		console.error("Error fetching orders:", error);
		return NextResponse.json({ message: "Database error" }, { status: 500 });
	}
}

//post
export async function POST(request: Request) {
	const data = await request.json();

	const validationResult = ValidateOrder(data);
	if (!validationResult.valid) {
		return NextResponse.json(
			{ message: "Validation error", errors: validationResult.errors },
			{ status: 400 }
		);
	}

	const { customer, serviceType, serviceDetails, scheduledDate, address } =
		data;

	// const newOrder = new Order(
	// 	new Customer(customer.name, customer.email, customer.phoneNumber),
	// 	serverType,
	// 	serviceDetails,
	// 	new Date(scheduledDate),
	// 	address
	// );

	try {
		const query =
			"INSERT INTO orders (customer_name, customer_email, customer_phone, service_type, service_details, scheduled_date, address) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
		const values = [
			customer.name,
			customer.email,
			customer.phoneNumber,
			serviceType,
			serviceDetails,
			scheduledDate,
			address,
		];
		const result = await db.query(query, values);
		console.log("Order inserted:", result.rows[0]);

		return NextResponse.json(
			{ message: "Order created successfully", order: result.rows[0] },
			{ status: 201 }
		);
	} catch (error) {
		console.error("Error inserting order:", error);
		return NextResponse.json({ message: "Database error" }, { status: 500 });
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ValidateOrder(data: any): { valid: boolean; errors?: string[] } {
	if (typeof data !== "object" || data === null) {
		return { valid: false, errors: ["Invalid data format"] };
	}

	if (!data.customer) {
		return { valid: false, errors: ["Customer information is required"] };
	} else {
		if (
			typeof data.customer.name !== "string" ||
			data.customer.name.trim() === "" ||
			ContainsBlockedCharacters(data.customer.name)
		) {
			return { valid: false, errors: ["Customer name error"] };
		}

		if (
			typeof data.customer.email !== "string" ||
			!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.customer.email) ||
			ContainsBlockedCharacters(data.customer.email)
		) {
			return { valid: false, errors: ["Customer email error"] };
		}

		if (
			typeof data.customer.phoneNumber !== "string" ||
			!/^(\+36|06)(20|30|31|50|70)\d{3}\d{4}$/.test(
				data.customer.phoneNumber
			) ||
			ContainsBlockedCharacters(data.customer.phoneNumber)
		) {
			return { valid: false, errors: ["Customer phone number error"] };
		}
	}

	if (!data.serviceType || typeof data.serviceType !== "number") {
		return { valid: false, errors: ["Service type is required"] };
	}

	if (data.serviceDetails && typeof data.serviceDetails !== "string") {
		return { valid: false, errors: ["Service details must be a string"] };
	}

	if (!data.scheduledDate || isNaN(Date.parse(data.scheduledDate))) {
		return { valid: false, errors: ["Invalid date format"] };
	}

	if (
		!data.address ||
		typeof data.address !== "string" ||
		data.address.trim() === ""
	) {
		return { valid: false, errors: ["Address is required"] };
	}

	return { valid: true };
}

function ContainsBlockedCharacters(input: string): boolean {
	const lowerInput = input.toLowerCase().trim();
	return BlockedCharactersAndWords.some((blocked) =>
		lowerInput.includes(blocked)
	);
}

// class Order {
// 	// id: number;
// 	customer: Customer;
// 	serviceType: string;
// 	serviceDetails: string;
// 	scheduledDate: Date;
// 	address: string;

// 	constructor(
// 		// id: number,
// 		customer: Customer,
// 		serviceType: string,
// 		serviceDetails: string,
// 		scheduledDate: Date,
// 		address: string
// 	) {
// 		// this.id = id;
// 		this.customer = customer;
// 		this.serviceType = serviceType;
// 		this.serviceDetails = serviceDetails;
// 		this.scheduledDate = scheduledDate;
// 		this.address = address;
// 	}
// }

// class Customer {
// 	name: string;
// 	email: string;
// 	phoneNumber: string;

// 	constructor(name: string, email: string, phoneNumber: string) {
// 		this.name = name;
// 		this.email = email;
// 		this.phoneNumber = phoneNumber;
// 	}
// }
