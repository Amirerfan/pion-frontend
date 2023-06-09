/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,css,scss}'],
  theme: {
    extend: {
      colors: {
        primary: '#5158F6',
        gray10: '#E9EFF6',
        algo: '#D9D9D9',
        black: '#323245',
        glass: '#00000059',
        green: '#8EF5AB',
        disabled: '#C0C0C0',
        gray3: '#939393',
        'modal-small': '#ECEDFFCC',
        'primary-dark': '#918EF5',
        'dark-soft-primary': '#5158F640',
        'xyz-75': '#E9EFF6BF',
        'soft-sky': '#BCC8DE',
        'primary-10-solid': '#ECEDFF',
        'card-bg-70-purple': '#6C677BB3',
        'card-bg': '#6C677B',
        'card-bg-dark': '#F6F3FF99',
        'titan-white': '#ECEDFF',
        'modal-backdrop': '#00000066',
        'catskill-white': '#E9EFF666',
        'plan-1': '#F58E8E80',
        'plan-2': '#F3C95D80',
        'plan-3': '#918EF580',
      },
    },
  },
  plugins: [],
};
