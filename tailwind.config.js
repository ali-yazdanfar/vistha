/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                EstedadBlack: "Estedad Black",
                EstedadExtraBold: "Estedad ExtraBold",
                EstedadExtraLight: "Estedad ExtraLight",
                EstedadLight: "Estedad Light",
                EstedadMedium: "Estedad Medium",
                EstedadRegular: "Estedad Regular",
                EstedadSemiBold: "Estedad SemiBold",
                EstedadThin: "Estedad Thin",
            },
            boxShadow: {
                header: "0 4px 6px 0 rgba(12, 0, 46, .05)",
                shadowPrice: "0 2px 10px rgba(0, 0, 0, .15)",
                blog: "0 0px 17px rgba(0, 0, 0, 0.2);",
                form: "0 7px 7px 0px rgba(12, 0, 46, .2);",
            },
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant("child", "& > *");
            addVariant("child-hover", "& > *:hover");
        },
    ],
};
