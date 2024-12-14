import { valibot } from 'sveltekit-superforms/adapters';
import { CheckoutSchema } from '$lib/schema/Checkoutschema';
import type { Actions } from './$types';
import { message, fail, superValidate } from 'sveltekit-superforms';

export const load = async () => {
	const form = await superValidate(valibot(CheckoutSchema));

	// Always return { form } in load functions
	return { form };
};

export const actions: Actions = {
	checkout: async ({ request }) => {
		const form = await superValidate(request, valibot(CheckoutSchema));
		if (!form.valid) {
			return fail(400, { form });
		}

		return message(form, 'You have successfully placed your order, thank you!');
	}
};
