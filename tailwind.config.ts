import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	// safelist: [
	// 	{
	// 		pattern: /mt-\d+/,
	// 		variants: ['lg', 'xl', 'md'],
	// 	},
	// 	{
	// 		pattern: /mb-\d+/,
	// 		variants: ['lg', 'xl', 'md'],
	// 	},
	// 	{
	// 		pattern: /my-\d+/,
	// 		variants: ['lg', 'xl', 'md'],
	// 	},
	// 	{
	// 		pattern: /pt-\d+/,
	// 		variants: ['lg', 'xl', 'md'],
	// 	},
	// 	{
	// 		pattern: /pb-\d+/,
	// 		variants: ['lg', 'xl', 'md'],
	// 	},
	// 	{
	// 		pattern: /py-\d+/,
	// 		variants: ['lg', 'xl', 'md'],
	// 	},
	// ],
	theme: {
		fontFamily: {
			'sans': ['GothamPro', 'ui-sans-serif', 'system-ui'],
			'head': ['Iliad', 'ui-sans-serif', 'system-ui'],
		},
		screens: {
			'sm': '576px',
			'md': '768px',
			'xl': '1280px',
			'2xl': '1440px',
		},
		extend: {
			colors: {
				ired: {
					DEFAULT: '#CC0000',
					50: '#FEE2E2',
					100: '#FECDCD',
					200: '#FDB8B8',
					300: '#FDA4A4',
					400: '#FD8F8F',
					500: '#FD7B7B',
					600: '#FD6767',
					700: '#FD5252',
					800: '#FD3B3B',
					900: '#FD2525'
				},
				igray: {
					DEFAULT: '#b6b8ba',
					400: '#969696',
					300: 'dbdbdb',
					200: '#b6b8ba',
					100: '#f0f0f0',
					500: 'a8a9ab',
				}
			}
		}
	},

	plugins: [typography, containerQueries, aspectRatio, forms]
} satisfies Config;
