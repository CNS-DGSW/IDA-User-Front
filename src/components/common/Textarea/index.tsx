import React from "react"
import type { ChangeEventHandler } from "react"
import type { CSSObject } from "styled-components"
import { TextAreaStyle } from "./style"

interface TextareaProps {
  value?: string
  height: number
  changeEvent?: ChangeEventHandler<HTMLTextAreaElement>
  style?: CSSObject
  readonly?: boolean
}

const Textarea = ({
  changeEvent,
  height,
  readonly,
  style,
  value,
}: TextareaProps) => {
  return (
    <TextAreaStyle
      readOnly={readonly}
      value={value}
      style={style}
      height={height}
      onChange={changeEvent}
    />
  )
}

export default Textarea
