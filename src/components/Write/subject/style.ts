import type { ThProps } from "@/components/common/table/type"
import type { SizeImplElement } from "@/types/size"
import styled from "styled-components"
import type { CSSObject } from "styled-components"

export const TableStyle = styled.table`
  border-collapse: collapse;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.64px;

  border-radius: 8px;
  overflow: hidden;
`

export const TableHeaderStyle = styled.thead``
export const TableBodyStyle = styled.tbody``

export const ThStyle = styled.th<ThProps & Omit<SizeImplElement, "height">>`
  vertical-align: middle;

  background: ${({ background }) => `#${background || "fff"}`};
  color: ${({ color }) => `#${color}`};
  width: ${({ width }) => `${width}px`};
  border: 1px solid #d8dae0;
`

export const TdStyle = styled.th<ThProps & Omit<SizeImplElement, "height">>`
  vertical-align: middle;

  background: ${({ background }) => `#${background}`};
  color: ${({ color }) => `#${color}`};
  width: ${({ width }) => `${width}px`};
  border: 1px solid #d8dae0;
`

export const TrStyle = styled.tr<Omit<SizeImplElement, "width">>`
  display: table;
  height: ${({ height }) => `${height}`};
`

export const TableCustomInputStyle: CSSObject = {
  height: "36px",
  margin: "0 auto",
  textAlign: "center",
  fontWeight: 700,
  color: "black",
  fontSize: "16px",
}
