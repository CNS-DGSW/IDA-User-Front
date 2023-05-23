import "@/styles/GlobalStyle"
import type { AppProps } from "next/app"

import Layout from "@/components/common/layout"
import GlobalStyle from "@/styles/GlobalStyle"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
