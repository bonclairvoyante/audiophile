export type Products = {
	id: number;
	slug: string;
	name: string;
	new: boolean;
	price: number;
	description: string;
	features: string;
	includes: Includes[];
};

export type Includes = {
	quantity: number;
	item: string;
};
