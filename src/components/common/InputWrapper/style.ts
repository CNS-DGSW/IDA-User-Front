import styled from "styled-components"

export const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputLabel = styled.label`
  font-size: 22px;
  line-height: 26px;
  letter-spacing: -0.04em;

  color: #424344;
  margin-top: 14px;
  margin-bottom: 14px;

  @media screen and (max-width: 500px) {
    &.Address_individual_styles {
      margin-top: -3rem;
      margin-left: 1.6%;
    }

    &.DetailedAddress_individual_styles {
      margin-top: -1rem;
      margin-left: 1.6%;
    }
   
  }
`

export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin-bottom: 1rem;
}
`
