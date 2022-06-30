import 'styled-components';

type depth = {
    PRIMARY: string,
    SECONDARY:string,
    TERTIARY:string,
    QUATERNARY:string,
    QUINARY:string,
};

type text = {
    HEADLINE: string,
    SUBHEAD: string,
    BODY: string,
    TEXT: string,
    TEXT_SECONDARY: string,
    LINK: string,
    DIVIDER: string,
    FOOTNOTE: string,
    CAPTION: string,
    CONTENT: string,
    BACKGROUND: string,
};

declare module 'styled-components' {
    export interface DefaultTheme {
        BREAKPOINT: {
            MOBILE_S:string,
            MOBILE_M:string,
            MOBILE_L:string,
            TABLET:string,
            LAPTOP:string,
            LAPTOP_L:string,
            DESKTOP:string,
        };
        TYPOGRAPHY:{
            FONT_SIZE:{
                MOBILE: {
                    H1:string,
                    H2:string,
                    H3:string,
                    H4:string,
                    H5:string,
                    H6:string,
                },
                TABLETS: {
                    H1:string,
                    H2:string,
                    H3:string,
                    H4:string,
                    H5:string,
                    H6:string,
                },
                DESKTOP: {
                    H1:string,
                    H2:string,
                    H3:string,
                    H4:string,
                    H5:string,
                    H6:string,
                },
            },
            FONT_FAMILY:{},
            FONT_WEIGHT:{},
            COLOR:{
                MAIN:text;
                GRAY:depth;
                INFORMATION:depth;
                SUCCESS:depth;
                WARNING:depth;
                ERROR:depth;
            }
        }
        BOX_MODEL: {
            BORDER_RADIUS: string,
        }
        svg: {
            height: number;
        }
    }
}