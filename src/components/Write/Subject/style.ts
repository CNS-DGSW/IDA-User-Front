import type { ThProps } from "@/components/common/table/type"
import type { SizeImplElement } from "@/types/size"
import styled from "styled-components"
import type { CSSObject } from "styled-components"

export const TableStyle = styled.table`
  border-collapse: separate;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.64px;
  border-radius: 8px;
`

export const TableHeaderStyle = styled.thead``
export const TableBodyStyle = styled.tbody``

export const ThStyle = styled.th<ThProps & Omit<SizeImplElement, "height">>`
  vertical-align: middle;

  background: ${({ background }) => `#${background ?? "fff"}`};
  color: ${({ color }) => `#${color ?? "000"}`};
  width: ${({ width }) => `${width ?? "108"}px`};
  ${({ notBorder }) => !notBorder && `border: 1px solid #d8dae0`};
  ${({ radius }) => radius && `border-radius : ${radius}`};

  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
  }
`

export const TdStyle = styled.td<ThProps & Omit<SizeImplElement, "height">>`
  vertical-align: middle;
  background: ${({ background }) => `#${background ?? "fff"}`};
  color: ${({ color }) => `#${color ?? "000"}`};
  width: ${({ width }) => `${width ?? "108"}px`};
  ${({ notBorder }) => !notBorder && `border: 1px solid #d8dae0`};
  ${({ radius }) => radius && `border-radius : ${radius}`};
  text-align: center;

  word-wrap: break-word;

  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
    width: ${({ width }) => `${width ?? "108"}px`};
    ${({ width }) => width && `max-width: ${width}`};
  }
`

export const TrStyle = styled.tr<Omit<SizeImplElement, "width">>`
  display: table;
  height: ${({ height }) => `${height ?? "54"}`};

  @media screen and (max-width: 500px) {
    height: 1.5rem;
  }
`

export const TableCustomInputStyle: CSSObject = {
  height: "36px",
  margin: "0 auto",
  textAlign: "center",
  fontWeight: 700,
  color: "black",
  fontSize: "16px",
}

export const TableCustomMoblieInputStyle: CSSObject = {
  height: "20px",
  margin: "0 auto",
  textAlign: "center",
  fontWeight: 700,
  color: "black",
  fontSize: "12px",
  width: "50px",
  padding: 0,
}

export const SubjectDescription = styled.ul`
  width: 650px;
  height: 161px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 34px;
  padding: 14px 18px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: #8b939c;

  list-style-type: disc;

  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
    width: 100%;
    height: 7.5rem;
  }
`

export const AwardMaxPoint = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: 1rem;
  color: #8b939c;
  width: 100%;
  text-align: right;
`
