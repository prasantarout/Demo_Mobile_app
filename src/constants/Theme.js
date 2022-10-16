import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    darkGreen: "#229879",
    darkLime: "#1A8871",
    lightLime: "#BBD6C5",
    lime: "#2AD699",
    lightGreen: "#E7F9EF",
    lightGreen1: "#8EbCA0",
    darkBlue:"#002851",
    violet1:" #ebedee ",
    white: "#fff",
    white2: '#F9F9F9',
    black: "#020202",
    gray: "#777777",
    gray2: '#F8F8F8',
    lightGray: "#F5F6FB",
    lightGray2: '#757575',
    colorGray:"#1f2937",
    colorGray1:"#374151",
    
 
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Roboto-BlackItalic", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Italic", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Light", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Medium", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Medium", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Medium", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Medium", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto-Bold", fontSize: SIZES.body5, lineHeight: 22 },
};



const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;