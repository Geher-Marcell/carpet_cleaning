export type ServiceProps = {
	id: number;
	name: string;
	category: string;
	description?: string;
	price: number;
	unit: string;
	hot?: boolean;
	iconName?: string;
	highlights?: string;
};
