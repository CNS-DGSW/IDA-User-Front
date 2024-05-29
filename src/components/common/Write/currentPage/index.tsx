import React from "react"
import type { PropsWithChildren } from "react"
import { usePageContext } from "../PageProvider"
import { OrderFunnel } from "@dgswcns/cns-funnel"

export const WriteCurrentPage = ({ children }: PropsWithChildren) => {
  const { currentPage } = usePageContext()
  return <OrderFunnel page={currentPage}>{children}</OrderFunnel>
}
