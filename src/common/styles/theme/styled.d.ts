import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        breakPoint: string;
        colors: {
            main:string;
            primary:string;
            background:string;
            black: string;
            yellow: string;
            orange: string;
            gray: string;
            gray_background: string;
        };
    }
}