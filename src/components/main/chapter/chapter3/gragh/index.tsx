import React from "react"
import * as S from "./style"

interface IGraghProps {
  startColor: string
  endColor: string
  percent: number[]
  boxWidth: number
  boxheight: number
}

const Gragh = ({
  startColor,
  endColor,
  percent,
  boxWidth,
  boxheight,
}: IGraghProps) => {
  return (
    <S.MainGraghLayout width={boxWidth} height={boxheight}>
      {percent.map((value, index) => {
        console.log((boxheight * value) / 100)

        return (
          <div key={index}>
            <S.GraghParagragh>{value}%</S.GraghParagragh>
            <S.Gragh
              startColor={startColor}
              endColor={endColor}
              height={((boxheight * value) / 100) * 3 - 820}
            />
          </div>
        )
      })}
    </S.MainGraghLayout>
  )
}

export default Gragh
