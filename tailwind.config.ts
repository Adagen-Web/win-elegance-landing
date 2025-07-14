import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				/* Premium palette extensions */
				surface: {
					DEFAULT: 'hsl(var(--surface))',
					muted: 'hsl(var(--surface-muted))'
				},
				gold: {
					DEFAULT: 'hsl(var(--gold))',
					muted: 'hsl(var(--gold-muted))',
					dark: 'hsl(var(--gold-dark))'
				},
				gray: {
					warm: 'hsl(var(--gray-warm))',
					medium: 'hsl(var(--gray-medium))',
					light: 'hsl(var(--gray-light))'
				},
				nude: {
					DEFAULT: 'hsl(var(--nude))',
					dark: 'hsl(var(--nude-dark))'
				},
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			fontFamily: {
				'display': ['Playfair Display', 'serif'],
				'primary': ['Montserrat', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'112': '28rem',
				'128': '32rem',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
				'slide-up': 'slide-up 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
				'scale-in': 'scale-in 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards',
				'float': 'float 6s ease-in-out infinite'
			},
			boxShadow: {
				'soft': '0 4px 20px hsl(var(--primary) / 0.08)',
				'medium': '0 8px 40px hsl(var(--primary) / 0.12)',
				'strong': '0 16px 60px hsl(var(--primary) / 0.16)',
				'glow': '0 0 40px hsl(var(--gold) / 0.3)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
