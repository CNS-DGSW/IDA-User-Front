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
  margin-bottom: 14px;

  @media screen and (max-width: 500px) {
    font-size: 1rem;

    margin-bottom: 1.6vw;
  }
`

export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`
