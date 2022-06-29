import {DefaultTheme} from "styled-components";
import {colors, device} from "../global/global-variable";

export const DarkTheme: DefaultTheme = {
    breakPoint: {
        xs: device.xs,
        sm: device.sm,
        md: device.md,
        lg: device.lg,
        xl: device.xl,
        xxl: device.xxl
    },
    colors: {
        main: colors.dark,
        primary: colors.green,
        color:colors.gray,
        background: colors.teal,
        black: colors.black,
        yellow: colors.yellow,
        orange: colors.orange,
        gray: colors.gray,
        gray_background: colors.gray_background,
    },
};