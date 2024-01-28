import React, { type CSSProperties } from "react"
import Button from "../../Button"
import { usePageContext } from "@/components/common/Write/PageProvider"
import * as S from "./style"
import useGetBrWidth from "@/hooks/useGetBrWidth"

const MobileButtonStyle: CSSProperties = {
  paddingTop: "0.875rem",
  paddingBottom: "0.875rem",
  fontSize: "1rem",
}

/**
 * @todo
 * 원서 저장 및 미리보기, 출력 로직 제작
 */
export const Aside = () => {
  const { currentPage, moveNextPage, movePreviousPage } = usePageContext()
  const { browserWidth } = useGetBrWidth()

  return (
    <S.AsideBox>
      <Button
        radius={8}
        style={browserWidth <= 500 ? MobileButtonStyle : undefined}
      >
        <S.ButtonFontBox>원서 저장</S.ButtonFontBox>
      </Button>
      <Button
        radius={8}
        color="second"
        style={
          browserWidth <= 500
            ? {
                ...MobileButtonStyle,
                backgroundColor: "#F8FAFD",
                color: "#8B939C",
              }
            : { backgroundColor: "#F8FAFD", color: "#8B939C" }
        }
      >
        <S.ButtonFontBox>원서 미리보기</S.ButtonFontBox>
      </Button>
      {currentPage === 7 && (
        <Button
          radius={8}
          color="second"
          style={
            browserWidth <= 500
              ? {
                  ...MobileButtonStyle,
                  backgroundColor: "#F8FAFD",
                  color: "#8B939C",
                }
              : { backgroundColor: "#F8FAFD", color: "#8B939C" }
          }
        >
          <S.ButtonFontBox>원서 출력</S.ButtonFontBox>
        </Button>
      )}
      <S.LineBox />
      <Button
        radius={8}
        color={currentPage < 7 ? "second" : "third"}
        clickEvent={moveNextPage}
        style={browserWidth <= 500 ? MobileButtonStyle : undefined}
      >
        <S.ButtonFontBox>
          {currentPage < 7 ? "다음" : "원서 최종 제출"}
        </S.ButtonFontBox>
      </Button>
      {currentPage > 1 && (
        <Button
          radius={8}
          color="second"
          clickEvent={movePreviousPage}
          style={
            browserWidth <= 500
              ? {
                  ...MobileButtonStyle,
                  backgroundColor: "#F8FAFD",
                  color: "#8B939C",
                }
              : { backgroundColor: "#F8FAFD", color: "#8B939C" }
          }
        >
          <S.ButtonFontBox>이전</S.ButtonFontBox>
        </Button>
      )}
    </S.AsideBox>
  )
}
