import type { WriteSubjectTableType } from "@/components/Write/subject/type"
import type { SizeImplElement } from "@/types/size"
import type { PropsWithChildren, TableHTMLAttributes } from "react"
import type { CSSObject } from "styled-components"

/**
 * 사용되는 테이블 타입 모두 정의
 *
 * 사용하는 곳에서 정의 후 & 연산자로 병합
 */
export type TableType = WriteSubjectTableType

export type TableNameType = keyof TableType

export interface TableProps<T extends TableNameType> {
  name: T
  context: TableType[T]
}

export interface TrProps
  extends PropsWithChildren,
    Omit<SizeImplElement, "width"> {}

export interface ThProps
  extends PropsWithChildren,
    Partial<{
      background: string
      color: string
      style: CSSObject
      rowspan: number
      colspan: number
      notBorder: boolean
    }>,
    Omit<SizeImplElement, "height"> {}
