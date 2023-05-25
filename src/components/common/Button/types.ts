import { PropsWithChildren } from "react"

type SizeType = "xs" | "sm" | "md" | "lg"
type ButtonColorType = "primary" | "second" | "third"

export type ButtonProps = PropsWithChildren<{
  size?: SizeType
  color?: ButtonColorType
  clickEvent?: React.MouseEventHandler<HTMLButtonElement>
  hover?: string | null
  border?: string | null
  radius?: number | "circle"
  disable?: boolean
  shadow?: boolean
}>
