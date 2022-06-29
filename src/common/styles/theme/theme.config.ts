import {DefaultTheme} from "styled-components";
import {device, colors} from "../global/global-variable";

export const theme: DefaultTheme = {
    breakPoint: {
        xs: device.xs,
        sm: device.sm,
        md: device.md,
        lg: device.lg,
        xl: device.xl,
        xxl: device.xxl
    },
    colors: {
        main: colors.light,
        primary: colors.pinky,
        color:colors.gray,
        background: colors.white,
        black: colors.black,
        yellow: colors.yellow,
        orange: colors.orange,
        gray: colors.gray,
        gray_background: colors.gray_background,
    },
};
