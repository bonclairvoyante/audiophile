import { object, string, pipe, minLength, endsWith, email, nonEmpty } from 'valibot';

export const CheckoutSchema = object({
	name: pipe(string(), minLength(4, 'Your two names must have 4 characters or more.')),
	email: pipe(
		string(),
		email('Please enter a valid email.'),
		nonEmpty('The email address cannot be empty.')
	),

	tel: pipe(string(), minLength(13, 'Your phone number should have 13 numbers or more.')),
	address: pipe(string(), minLength(6, 'Please enter a valid address.')),
	street: pipe(
		string(),
		minLength(5, 'You must provide a valid street or road name.'),
		endsWith('Road', 'The road name must end with "Road".')
	),
	city: pipe(string(), minLength(1, 'You must provide an existing city.')),
	country: pipe(string(), minLength(4, 'Please provide a valid country.'))
});
