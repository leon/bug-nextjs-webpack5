module.exports = {
  mode: 'jit',
  purge: ['./layout/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx,mdx}'],
  // plugins: [],
  // important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#323232',
          DEFAULT: '#282828',
          dark: '#222222',
        },
        accent: {
          light: '#80d8e8',
          DEFAULT: '#00b0d0',
          dark: '#0087b3',
        },
        gray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        },
      },
      fontFamily: {
        // sans: ['-apple-system', 'BlinkMacSystemFont', '"Helvetica Neue"', 'sans-serif'],
        heading: ['Rubik', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
}
