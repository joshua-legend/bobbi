import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        breakPoint: {
            xs:string,
            sm:string,
            md:string,
            lg:string,
            xl:string,
            xxl:string,
        };
        colors: {
            main:string;
            primary:string;
            color:string;
            background:string;
            black: string;
            yellow: string;
            orange: string;
            gray: string;
            gray_background: string;
        };
    }
}