import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { CNSThemeProvider } from "@dgswcns/react-styled-theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CNSThemeProvider theme="LIGHT">
      <Component {...pageProps} />
    </CNSThemeProvider>
  )
}
