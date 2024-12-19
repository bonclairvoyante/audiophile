import { valibot } from 'sveltekit-superforms/adapters';
import { CheckoutSchema } from '$lib/schema/Checkoutschema';
import type { Actions } from './$types';
import { message, fail, superValidate, type Infer } from 'sveltekit-superforms';


type Message = { status: 'error' | 'success' | 'warning'; text: string };
export const load = async () => {
	const form = await superValidate<Infer<typeof CheckoutSchema>, Message> (valibot(CheckoutSchema));

	// Always return { form } in load functions
	return { form };
};

export const actions: Actions = {
	checkout: async ({ request }) => {
		const form = await superValidate(request, valibot(CheckoutSchema));
		if (!form.valid) {
			return fail(400, { form });
		}

		return message(form, {text:'Details successfully submitted, please confirm your order below'});
	}
};
