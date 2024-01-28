import React, { useRef, useState } from "react"
import type { MouseEventHandler } from "react"
import type { CSSObject } from "styled-components"
import {
  ListContainer,
  ListItem,
  SelectContainer,
  SelectIconWrap,
} from "./style"
// import selectIcon from "../../../assets/img/Icon/selectIcon.svg"
import { useOutsideClick } from "@/hooks/useOutsideClick"
import useWriteNav from "@/hooks/useGetBrWidth"

export interface SelectProps {
  list: string[]
  width?: number
  value?: string
  changeEvent: MouseEventHandler<HTMLLIElement>
  style?: CSSObject
  placeholder?: string
  colors?: string
  direction?: boolean
  listFontSize?: string
  moblieIconSize?: string
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
  listFontSize,
  moblieIconSize,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const revertIsOpen = () => setIsOpen((prev) => !prev)
  const selectRef = useRef<HTMLDivElement>(null)
  const { browserWidth } = useWriteNav()

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
      <SelectIconWrap isOpen={isOpen}>
        <svg
          width={moblieIconSize && browserWidth <= 500 ? moblieIconSize : "24"}
          height={moblieIconSize && browserWidth <= 500 ? moblieIconSize : "24"}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.70078 14.6749C6.51745 14.4916 6.42578 14.2582 6.42578 13.9749C6.42578 13.6916 6.51745 13.4582 6.70078 13.2749L11.3008 8.6749C11.4008 8.5749 11.5091 8.5039 11.6258 8.4619C11.7424 8.42057 11.8674 8.3999 12.0008 8.3999C12.1341 8.3999 12.2591 8.42057 12.3758 8.4619C12.4924 8.5039 12.6008 8.5749 12.7008 8.6749L17.3258 13.2999C17.5091 13.4832 17.6008 13.7082 17.6008 13.9749C17.6008 14.2416 17.5008 14.4749 17.3008 14.6749C17.1174 14.8582 16.8841 14.9499 16.6008 14.9499C16.3174 14.9499 16.0841 14.8582 15.9008 14.6749L12.0008 10.7749L8.07578 14.6999C7.89245 14.8832 7.66745 14.9749 7.40078 14.9749C7.13411 14.9749 6.90078 14.8749 6.70078 14.6749Z"
            fill={colors ? "#" + colors : "#808488"}
          />
        </svg>
      </SelectIconWrap>
      {isOpen && (
        <ListContainer direction={direction}>
          {list?.map((v) => (
            <ListItem
              width={width}
              key={v}
              onClick={changeEvent}
              style={{ fontSize: listFontSize }}
            >
              {v}
            </ListItem>
          ))}
        </ListContainer>
      )}
    </SelectContainer>
  )
}

export default Select
