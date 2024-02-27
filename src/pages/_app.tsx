import type { AppProps } from "next/app"
import { CNSThemeProvider } from "@dgswcns/react-styled-theme"
import { useCNSThemeing } from "@dgswcns/react-theming"
import "@dgswcns/design-token"
import Layout from "@/components/common/layout"
import GlobalStyle from "@/styles/GlobalStyle"
import { RecoilRoot } from "recoil"
import { QueryClient, QueryClientProvider,  } from "@tanstack/react-query"

export default function App({ Component, pageProps }: AppProps) {
  const theme = useCNSThemeing("LIGHT")
  const queryClient = new QueryClient()
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <CNSThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CNSThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  )
}
