import {DefaultTheme} from "styled-components";
import {colors} from "../global/global-variable";

export const DarkTheme: DefaultTheme = {
    breakPoint: '769px',
    colors: {
        main: colors.dark,
        primary: colors.green,
        background: colors.teal,
        black: colors.black,
        yellow: colors.yellow,
        orange: colors.orange,
        gray: colors.gray,
        gray_background: colors.gray_background,
    },
};