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
`

export const WriteIdPhotoStyledFileInput = styled.input`
  width: 288px;
  height: 54px;
  border-radius: 8px;
  background-color: ${({ theme: { colors } }) => colors.blue100};
`

export const WriteIdPhotoNote = styled.p`
  color: ${({ theme: { colors } }) => colors.gray500};
  font-size: 20px;
  font-weight: 400;
  width: 270px;
  text-align: center;
`