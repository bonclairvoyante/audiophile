import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		letterSpacing: {
			
			small: '0.25em',
			smaller: '0.125',
			wide: '0.5em',
			wider: '0.75em',
			widest: '1em'
		},

		extend: {
			colors: {
				orange: {
					DEFAULT: '#D87D4A',
					bright: '#FBAF85'
				},
				white: {
					DEFAULT: '#FFFFFF',
					bright: '#FAFAFA',
					grey: '#F1F1F1'
				},
				black: '#000000',
				charcoal: '#101010'
			},
			fontFamily: {
				sans: ['Manrope Variable', 'sans-serif']
			},
			backgroundImage: {
				spiral: "url('/src/lib/assets/home/desktop/pattern-circles.svg')",
				earphonesdesktop:
					"url('/src/lib/assets/product-yx1-earphones/desktop/image-gallery-2.jpg')",
				earphonesmobile: "url('/src/lib/assets/product-yx1-earphones/mobile/image-gallery-2.jpg')"
			}
		}
	},
	plugins: []
} as Config;
