/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#F74E05",
      },
      backgroundImage: {
        Banner_image: "url('/src/Assets/image/Banner_image.jpg')",
        Banner_image2: "url('/src/Assets/image/Banner_image2.jpg')",
      },
    },
  },
  plugins: [],
};
