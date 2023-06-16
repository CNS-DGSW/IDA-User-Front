import Image from "next/image"
import React, { MouseEventHandler, useRef, useState } from "react"
import { ListContainer, ListItem, SelectContainer } from "./style"
import selectIcon from "../../../assets/selectIcon.png"
import { useOutsideClick } from "@/hooks/useOutsideClick"

export interface SelectProps {
  list: string[]
  width?: number
  value?: string
  changeEvent: MouseEventHandler<HTMLLIElement>
}

const Select = ({ list, width, changeEvent, value }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const revertIsOpen = () => setIsOpen((prev) => !prev)
  const selectRef = useRef<HTMLDivElement>(null)

  useOutsideClick({
    container: selectRef.current,
    callback: () => setIsOpen(false),
  })

  return (
    <SelectContainer onClick={revertIsOpen} ref={selectRef} width={width}>
      {value || "선택"}
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
        <ListContainer>
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
