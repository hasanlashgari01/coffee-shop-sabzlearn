/** @type {import("tailwindcss").Config} */
module.exports = {
	tailwindConfig: "./styles/tailwind.config.js",
	content: ["./public/index.html", "./src/**/*.{html,js}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"brown": {
					100: "#ECE0D1", 300: "#DBC1AC", 600: "#967259", 900: "#634832"
				}
			},
			boxShadow: {
				"smooth": " 0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
				"normal": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
			},
			borderRadius: {
				"4xl": "2rem"
			},
			fontFamily: {
				"Dana": "Dana",
				"DanaMedium": "Dana Medium",
				"DanaDemiBold": "Dana DemiBold",
				"MorabbaLight": "Morabba Light",
				"MorabbaMedium": "Morabba Medium",
				"MorabbaBold": "Morabba Bold"
			},
			letterSpacing: {
				"tightest": "-0.065em"
			},
			spacing: {
				"4.5": "1.125rem",
				"25": "6.25rem",
				"30": "7.5rem",
				"50": "12.5rem"
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					lg: "0.625rem",
					xl: "2rem",
					'2xl': "3rem"
				}
			},
			backgroundImage: {
				"home-mobile": "url(../images/headerBgMobile.webp)",
				"home-desktop": "url(../images/headerBgDesktop.webp)"
			}
		},
		screens: {
			"xs": '480px',
			"sm": "640px",
			"md": "768px",
			"lg": "1024px",
			"xl": "1280px",
			"2xl": "1537px"
		}
	},
	plugins: [
		"prettier-plugin-svelte",
		"prettier-plugin-organize-imports",
		"prettier-plugin-tailwindcss",
		function({ addVariant }) {
			addVariant("child", "& > *");
			addVariant("child-hover", "& > *:hover");
		}
	]
};
