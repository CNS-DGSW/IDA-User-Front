import styled from "styled-components"
import CalanderSVG from "@/assets/img/Icon/calander.svg"

export const DatePickerIconBox = styled.div`
  cursor: pointer;
`

export const CalanderSVGIcon = styled(CalanderSVG)`
  width: 24px;
  height: 24px;

  @media screen and (max-width: 500px){
    width: 18px;
    height: 18px;
  }
`
