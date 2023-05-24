import "@/styles/globals.css"
import type { AppProps } from "next/app"

import { CNSThemeProvider } from "@dgswcns/react-styled-theme"
import { useCNSThemeing } from "@dgswcns/react-theming"

export default function App({ Component, pageProps }: AppProps) {
  const theme = useCNSThemeing("LIGHT")
  return (
    <CNSThemeProvider theme={theme}>
      <Component {...pageProps} />
    </CNSThemeProvider>
  )
}
