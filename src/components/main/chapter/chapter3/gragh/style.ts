import styled from "styled-components"

export const MainGraghLayout = styled.div`
  ${({ width, height }: { width: number; height: number }) =>
    `width: ${width}px;
    height: ${height}px;`};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const GraghContentWrapCol = styled.div`
  width: 46px;
  height: ${({ height }: { height: number }) => height}px;
`

interface IGragh {
  height: number
  startColor: string
  endColor: string
}

export const Gragh = styled.div`
  background: linear-gradient(
    ${({ startColor, endColor }: IGragh) => `${startColor} ,${endColor}`}
  );
  height: ${({ height }: IGragh) => height}px;
  border-radius: 24px 24px 0px 0px;
`

export const GraghParagragh = styled.p`
  color: #424344;
  font-size: 1rem;
  margin-bottom: 1rem;
`
