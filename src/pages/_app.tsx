import type { AppProps } from "next/app"
import { CNSThemeProvider } from "@dgswcns/react-styled-theme"
import { useCNSThemeing } from "@dgswcns/react-theming"
import Layout from "@/components/common/layout"
import GlobalStyle from "@/styles/GlobalStyle"
import { RecoilRoot } from "recoil"

export default function App({ Component, pageProps }: AppProps) {
  const theme = useCNSThemeing("LIGHT")
  return (
    <RecoilRoot>
      <CNSThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CNSThemeProvider>
    </RecoilRoot>
  )
}
