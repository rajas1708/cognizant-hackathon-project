// // /* @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: ["./src/**/*.{js,jsx,ts,tsx}"],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // }

// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: ["./src/**/*.{js,jsx,ts,tsx}"],
// //   theme: {
// //     extend: {
// //       keyframes: {
// //         rotate_border: {
// //           "0%": {
// //             transform: "rotate(0deg)",
// //           },
// //           "100%": {
// //             transform: "rotate(360deg)",
// //           },
// //         },
// //       },
// //       animation: {
// //         rotate_border: "rotate_border 6s linear infinite",
// //       },
// //     },
// //   },
// //   plugins: [],
// // };
// module.exports = {
//   content: [
//     // Paths to your files where Tailwind classes are used
//     "./src/**/*.{html,js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         'rotate_border': 'rotate_border 6s linear infinite',
//         'border-spin': 'spin 8s linear infinite', // Define the animation
//         'border-spin-reverse': 'reverse-spin 8s linear infinite',
//       },
//       keyframes: {
//         rotate_border: {
//           '0%': {
//             transform: 'rotate(0deg)',
//           },
//           '100%': {
//             transform: 'rotate(360deg)',
//           },
//           spin: {
//             from: { transform: 'rotate(0deg)' },
//             to: { transform: 'rotate(360deg)' },
//           },
//           'reverse-spin': {
//             from: { transform: 'rotate(0deg)' },
//             to: { transform: 'rotate(-360deg)' },
//           },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2563eb',
        'primary-hover': '#1d4ed8',
        'secondary': '#9333ea',
        'secondary-hover': '#00a377',
        'background': '#f8f9fa',
        'text-primary': '#212529',
        'text-secondary': '#6c757d',
        'border-color': '#dee2e6',
      }
    },
  },
  plugins: [],
}