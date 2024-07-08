import { useEffect } from "react"
import Modal from "react-modal"
import type { AppProps } from "next/app"
import { CNSThemeProvider } from "@dgswcns/react-styled-theme"
import { useCNSThemeing } from "@dgswcns/react-theming"
import "@dgswcns/design-token"
import Layout from "@/components/common/layout"
import GlobalStyle from "@/styles/GlobalStyle"
import { QueryClient, QueryClientProvider } from "react-query"
import { Provider } from "jotai"

Modal.setAppElement("#__next")

export default function App({ Component, pageProps }: AppProps) {
  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        useErrorBoundary: true,
        notifyOnChangeProps: "tracked",
      },
    },
  })

  const theme = useCNSThemeing("LIGHT")

  useEffect(() => {
    const rootModal = document.createElement("div")
    rootModal.id = "modal-root"
    document.body.appendChild(rootModal)

    return () => {
      document.body.removeChild(rootModal)
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <CNSThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CNSThemeProvider>
      </Provider>
    </QueryClientProvider>
  )
}
