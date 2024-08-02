import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import type { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../Layout";
import GlobalStyle, { theme } from "../styles/GlobalStyle";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <>
      <GlobalStyle />
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default MyApp;
