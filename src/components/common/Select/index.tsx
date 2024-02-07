import Image from "next/image"
import React, { useRef, useState } from "react"
import type { MouseEventHandler } from "react"
import type { CSSObject } from "styled-components"
import { ListContainer, ListItem, SelectContainer } from "./style"
import selectIcon from "../../../assets/img/Icon/selectIcon.svg"
import { useOutsideClick } from "@/hooks/useOutsideClick"

export interface SelectProps {
  list: string[]
  width?: number
  value?: string
  changeEvent: MouseEventHandler<HTMLLIElement>
  style?: CSSObject
  placeholder?: string
  colors?: string
  direction?: boolean
}

const Select = ({
  list,
  width,
  changeEvent,
  value,
  style,
  placeholder,
  colors,
  direction = true,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const revertIsOpen = () => setIsOpen((prev) => !prev)
  const selectRef = useRef<HTMLDivElement>(null)

  useOutsideClick({
    container: selectRef.current,
    callback: () => setIsOpen(false),
  })

  return (
    <SelectContainer
      onClick={revertIsOpen}
      ref={selectRef}
      width={width}
      style={style}
      colors={colors}
    >
      {value ?? placeholder ?? "선택"}
      <Image
        src={selectIcon}
        alt="icon"
        style={{
          transform: !isOpen ? "rotate(0deg)" : "rotate(180deg)",
          transition: "0.2s",
          userSelect: "none",
        }}
      />
      {isOpen && (
        <ListContainer direction={direction}>
          {list?.map((v) => (
            <ListItem width={width} key={v} onClick={changeEvent}>
              {v}
            </ListItem>
          ))}
        </ListContainer>
      )}
    </SelectContainer>
  )
}

export default Select
