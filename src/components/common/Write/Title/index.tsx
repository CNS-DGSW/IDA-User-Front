import React from "react"
import { usePageContext } from "../PageProvider"
import { LayoutTitleStyle } from "../Layout/style"
import { titleArray } from "@/constans/Write/titleConstant"

export const LayoutTitle = () => {
  const { currentPage } = usePageContext()

  return <LayoutTitleStyle>{titleArray[currentPage - 1]}</LayoutTitleStyle>
}
