import {DefaultTheme} from "styled-components";
import {DEVICE, COLORS, SVG, BOX} from "../global/global-variable";

export const theme: DefaultTheme = {
    BREAKPOINT: {
        MOBILE_S: DEVICE.MOBILE_S,
        MOBILE_M: DEVICE.MOBILE_M,
        MOBILE_L: DEVICE.MOBILE_L,
        TABLET: DEVICE.TABLET,
        LAPTOP: DEVICE.LAPTOP,
        LAPTOP_L: DEVICE.LAPTOP_L,
        DESKTOP: DEVICE.DESKTOP
    },
    TYPOGRAPHY:{
        FONT_SIZE:{
            MOBILE: {
                H1:`28px`,
                H2:`24px`,
                H3:`20px`,
                H4:`16px`,
                H5:`14px`,
                H6:`14px`,
            },
            TABLETS: {
                H1:`32px`,
                H2:`24px`,
                H3:`20px`,
                H4:`16px`,
                H5:`14px`,
                H6:`12px`,
            },
            DESKTOP: {
                H1:`54px`,
                H2:`46px`,
                H3:`38px`,
                H4:`28px`,
                H5:`22px`,
                H6:`18px`,
            },
        },
        FONT_FAMILY:{},
        FONT_WEIGHT:{},
        COLOR:{
            MAIN: COLORS.MAIN,
            GRAY: COLORS.GRAY,
            INFORMATION: COLORS.INFORMATION,
            SUCCESS: COLORS.SUCCESS,
            WARNING: COLORS.WARNING,
            ERROR: COLORS.ERROR,
        }
    },
    svg:{
        height:SVG.normal
    },
    BOX_MODEL: {
        BORDER_RADIUS: BOX.BORDER_RADIUS,
    }
};
