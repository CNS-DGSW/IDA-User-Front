import styled from "styled-components"
import CalanderSVG from "@/assets/Img/Icon/calander.svg"

export const DatePickerIconBox = styled.div`
  cursor: pointer;
`

export const CalanderSVGIcon = styled(CalanderSVG)`
  width: 1.5rem;
  height: 1.5rem;

  @media screen and (max-width: 500px) {
    width: 1.1rem;
    height: 1.1rem;
  }
`
