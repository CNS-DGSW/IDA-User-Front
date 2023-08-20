import {
  TableHeaderStyle,
  TableStyle,
  ThStyle,
  TrStyle,
  TableBodyStyle,
  TdStyle,
} from "@/components/Write/subject/style"
import type { PropsWithChildren } from "react"
import React, { createContext } from "react"
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

const TableComponent = ({ children }: PropsWithChildren) => {
  return <TableStyle>{children}</TableStyle>
}

const Header = ({ children }: PropsWithChildren) => {
  return <TableHeaderStyle>{children}</TableHeaderStyle>
}

const Body = ({ children }: PropsWithChildren) => {
  return <TableBodyStyle>{children}</TableBodyStyle>
}

const Th = ({
  children,
  background = "1485EE",
  color = "fff",
  style,
  width = "108",
}: ThProps) => {
  return (
    <ThStyle background={background} color={color} style={style} width={width}>
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
}: ThProps) => {
  return (
    <TdStyle background={background} color={color} style={style} width={width}>
      {children}
    </TdStyle>
  )
}

const Tr = ({ children, height = "54" }: TrProps) => {
  return <TrStyle height={height}>{children}</TrStyle>
}

export const Table = Object.assign(TableComponent, { Header, Body, Th, Tr, Td })
