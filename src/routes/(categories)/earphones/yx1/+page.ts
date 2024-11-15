import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch}) => {
	try {
		const response = await fetch('/src/lib/data.json');
		if (!response.ok) {
			error(response.status);
		}
		const products = await response.json();
		return { products };
	} catch (error) {
		console.error(error);
		return { error: 'Unable to fetch products' };
	}
};
