import React from "react"
import { Button } from "../../Button"
import { usePageContext } from "@/components/common/Write/PageProvider"
import { AsideContainer, ButtonFont, Line } from "./style"

/**
 * @todo
 * 원서 저장 및 미리보기, 출력 로직 제작
 */
const Aside = () => {
  const { currentPage, moveNextPage, movePreviousPage } = usePageContext()

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
        <ButtonFont>{currentPage < 7 ? "다음" : "원서 최종 제출"}</ButtonFont>
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
