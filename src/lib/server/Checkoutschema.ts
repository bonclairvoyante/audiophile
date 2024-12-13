import { object, number, string, email, optional, pipe, minLength, minValue } from 'valibot';


export const checkoutSchema = object({
	name: pipe(optional(string(), 'Hello world!'), minLength(2)),
	email: pipe(string(), email()),
	tel:pipe(number(), minValue(7)),
	address: pipe(string(), minLength(6)),
	zip: pipe(string(), minLength(5)),
	city: pipe(string(), minLength(2)),
	country: pipe(string(), minLength(2)),
});
