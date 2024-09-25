/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        borderColor: "#262626",
      },

      fontFamily: {
        Brandfont: "Lexend",
      },

      fontSize: {
        header0: "12px",
        header1: "14px",
        header2: "28px",
        header5: "24px",
        header3: "30px",
        header4: "48px",
      },

      fontWeight: {
        FontNormal: "400",
        FontMediun: "500",
        FontSemiBold: "600",
        FontBold: "700",
      },

      textColor: {
        Brandlemon60: "#CAFF33",
        Brandlemon65: "#D1FF4C",
        Brandlemon70: "#D8FF66",
        Brandlemon80: "#E5FF99",
        Brandlemon81: "#B3B3B3",

        // White shades
        Brandwhite90: "#E4E4E7",
        Brandwhite95: "#F1F1F3",
        Brandwhite97: "#F7F7F8",
        Brandwhite99: "#FCFCFD",
      },

      borderWidth: {
        customBorderWidth: "1.5px",
        customBorderWidth1: "1px",
      },

      backgroundColor: {
        // White shades
        Brandwhite90: "#E4E4E7",
        Brandwhite95: "#F1F1F3",
        Brandwhite97: "#F7F7F8",
        Brandwhite99: "#FCFCFD",

        // Black shades
        Brandblack10: "#191919",
        Brandblack11: "#1C1C1C",
        Brandblack15: "#262626",
        Brandblack20: "#333333",
        Brandblack30: "#4C4C4D",
        Brandblack35: "#59595A",
        Brandblack40: "#656567",
        Brandblack60: "#98989A",
        Brandblack70: "#B3B3B3",
        Brandblack75: "#BFBFBF",

        // Lemon shades
        Brandlemon60: "#CAFF33",
        Brandlemon65: "#D1FF4C",
        Brandlemon70: "#D8FF66",
        Brandlemon80: "#E5FF99",
      },

      backgroundImage: {
        "Hero-bg": "url('../images/Hero-bg.svg')",
      },

      borderColor: {
        Brandborder: "#CAFF33",
      },

      lineHeight: {
        "custom-150": "150%",
        "custom-200": "200%",
      },

      maxWidth: {
        viewport: "1024px",
      },
    },
  },
  plugins: [],
};
