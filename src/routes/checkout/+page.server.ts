import { superValidate } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';
import { checkoutSchema } from '$lib/server/Checkoutschema';
import type { Actions } from './$types';
import { message } from 'sveltekit-superforms';
import { fail } from 'sveltekit-superforms';

export const load = async () => {
	const form = await superValidate(valibot(checkoutSchema));

	// Always return { form } in load functions
	return { form };
};

export const actions: Actions = {
	checkout: async ({ request }) => {
		const form = await superValidate(request, valibot(checkoutSchema));
		if (!form.valid) {
			return fail(400, { form });
		}
		
		return message(form, 'Success!');
	}
};
