import styled from "styled-components"

export const WriteIdPhotoLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`

export const WriteIdPhotoPreivewBox = styled.div`
  width: 288px;
  height: 384px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.gray500};
  background-color: ${({ theme: { colors } }) => colors.white};
  border: 1px solid ${({ theme: { colors } }) => colors.gray500};

  @media screen and (max-width: 500px) {
    width: 11.9rem;
    height: 16.3rem;

    font-size: 3.8vw;
  }
`

export const WriteIdPhotoStyledFileInput = styled.input`
  width: 288px;
  height: 54px;
  border-radius: 8px;
  background-color: ${({ theme: { colors } }) => colors.blue100};
`

export const WriteIdPhotoNote = styled.p`
  color: ${({ theme: { colors } }) => colors.gray500};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5rem;
  width: 270px;
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 3.8vw;
    font-weight: 600;
    width: auto;
    line-height: 1.8rem;
  }
`
