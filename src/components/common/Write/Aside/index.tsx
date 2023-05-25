import React from "react"
import { Button } from "../../Button"
import { usePageContext } from "@/components/common/Write/PageProvider"
import { AsideBox, ButtonFontBox, LineBox } from "./style"

/**
 * @todo
 * 원서 저장 및 미리보기, 출력 로직 제작
 */
const Aside = () => {
  const { currentPage, moveNextPage, movePreviousPage } = usePageContext()

  return (
    <AsideBox>
      <Button radius={8}>
        <ButtonFontBox>원서 저장</ButtonFontBox>
      </Button>
      <Button radius={8} color="second" border="1">
        <ButtonFontBox>원서 미리보기</ButtonFontBox>
      </Button>
      {currentPage === 7 && (
        <Button radius={8} color="second" border="1">
          <ButtonFontBox>원서 출력</ButtonFontBox>
        </Button>
      )}
      <LineBox />
      <Button
        radius={8}
        color={currentPage < 7 ? "second" : "third"}
        border="1"
        clickEvent={moveNextPage}
      >
        <ButtonFontBox>
          {currentPage < 7 ? "다음" : "원서 최종 제출"}
        </ButtonFontBox>
      </Button>
      {currentPage > 1 && (
        <Button
          radius={8}
          color="second"
          border="1"
          clickEvent={movePreviousPage}
        >
          <ButtonFontBox>이전</ButtonFontBox>
        </Button>
      )}
    </AsideBox>
  )
}

export default Aside
