import React from "react"
import { Button } from "../../Button"
import { AsideContainer, ButtonFont, Line } from "./style"
import { WriteAsideProps } from "./types"

const Aside = ({
  currentPage,
  moveNextPage,
  movePreviousPage,
}: WriteAsideProps) => {
  return (
    <AsideContainer>
      <Button radius={8}>
        <ButtonFont>원서 저장</ButtonFont>
      </Button>
      <Button radius={8} color="second" border="1">
        <ButtonFont>원서 미리보기</ButtonFont>
      </Button>
      {currentPage === 7 && (
        <Button radius={8} color="second" border="1">
          <ButtonFont>원서 출력</ButtonFont>
        </Button>
      )}
      <Line />
      <Button
        radius={8}
        color={currentPage < 7 ? "second" : "third"}
        border="1"
        clickEvent={moveNextPage}
      >
        <ButtonFont>다음</ButtonFont>
      </Button>
      {currentPage > 1 && (
        <Button
          radius={8}
          color="second"
          border="1"
          clickEvent={movePreviousPage}
        >
          <ButtonFont>이전</ButtonFont>
        </Button>
      )}
    </AsideContainer>
  )
}

export default Aside
