import Image from "next/image"
import React, { useState } from "react"
import { ListContainer, ListItem, SelectContainer } from "./style"
import selectIcon from "../../../assets/selectIcon.png"

const Select = ({ list }: { list: any[] }) => {
  const [isOpen, setIsOpen] = useState(false)
  const revertIsOpen = () => setIsOpen((prev) => !prev)

  return (
    <SelectContainer onClick={revertIsOpen}>
      선택
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
            <ListItem>{v}</ListItem>
          ))}
        </ListContainer>
      )}
    </SelectContainer>
  )
}

export default Select
