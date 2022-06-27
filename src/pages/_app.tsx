import type { AppProps } from 'next/app'
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "../common/styles/global/global-reset";
import {theme} from "../common/styles/theme/theme.config";
import RootLayout from "../common/RootLayout";
import {useTheme} from "../core/store/useTheme";
import {DarkTheme} from "../common/styles/theme/darktheme.config";

function MyApp({ Component, pageProps }: AppProps) {



  const { isLight } = useTheme();

  return (
      <ThemeProvider theme={isLight ? theme : DarkTheme}>
        <GlobalStyle />
          <RootLayout>
              <Component {...pageProps} />
          </RootLayout>
      </ThemeProvider>
  );
}
export default MyApp
