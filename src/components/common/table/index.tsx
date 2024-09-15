import {
  TableHeaderStyle,
  TableStyle,
  ThStyle,
  TrStyle,
  TableBodyStyle,
  TdStyle,
} from "@/components/Write/Subject/style"
import type { PropsWithChildren } from "react"
import React, { createContext } from "react"
import type { CSSObject } from "styled-components"
import type {
  TableNameType,
  TableProps,
  TableType,
  ThProps,
  TrProps,
} from "./type"

const Context = <T extends TableNameType>() =>
  createContext<TableType[T] | null>(null)

export const TableContextComponent = <T extends TableNameType>({
  context,
  children,
}: PropsWithChildren<TableProps<T>>) => {
  const Provider = Context<T>()
  return <Provider.Provider value={context}>{children}</Provider.Provider>
}

const TableComponent = ({
  children,
  customStyle,
}: PropsWithChildren<{ customStyle?: CSSObject }>) => {
  return <TableStyle style={customStyle}>{children}</TableStyle>
}

const Header = ({ children }: PropsWithChildren) => {
  return <TableHeaderStyle>{children}</TableHeaderStyle>
}

const Body = ({
  children,
  style,
}: PropsWithChildren<{ style?: CSSObject }>) => {
  return <TableBodyStyle style={style}>{children}</TableBodyStyle>
}

const Th = ({
  children,
  background = "1485EE",
  color = "fff",
  style,
  width = "108",
  rowspan,
  colspan,
  notBorder,
  radius,
}: ThProps) => {
  return (
    <ThStyle
      background={background}
      color={color}
      style={style}
      width={width}
      rowSpan={rowspan}
      colSpan={colspan}
      notBorder={notBorder}
      radius={radius}
    >
      {children}
    </ThStyle>
  )
}

const Td = ({
  children,
  background = "fff",
  color = "000",
  style,
  width = "108",
  rowspan,
  colspan,
  notBorder,
  radius,
}: ThProps) => {
  return (
    <TdStyle
      background={background}
      color={color}
      style={style}
      width={width}
      rowSpan={rowspan}
      colSpan={colspan}
      notBorder={notBorder}
      radius={radius}
    >
      {children}
    </TdStyle>
  )
}

const Tr = ({ children, height = "54" }: TrProps) => {
  return <TrStyle height={height}>{children}</TrStyle>
}

export const Table = Object.assign(TableComponent, { Header, Body, Th, Tr, Td })
