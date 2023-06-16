import React, { Children, useEffect, useState } from "react"
import type { PropsWithChildren, ReactNode } from "react"
import { usePageContext } from "../PageProvider"

export const WriteCurrentPage = ({ children }: PropsWithChildren) => {
  const [currentComponent, setCurrentComponent] =
    useState<Exclude<ReactNode, boolean | null | undefined>>()
  const { currentPage } = usePageContext()

  useEffect(() => {
    setCurrentComponent(Children.toArray(children)[currentPage - 1])
  }, [currentPage])

  return <>{currentComponent}</>
}
