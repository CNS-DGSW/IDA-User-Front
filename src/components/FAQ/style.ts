import styled from "styled-components"
import Image from "next/image"

const questionTextColor = "#1E2F44"
const answerTextColor = "#808488"

export const titleContainer = styled.div`
  background: #fff;
`
export const titleImage = styled(Image)`
  width: 13%;
  height: 13%;
  margin-top: 4%;
  margin-left: 15.4%;
`
export const titleText = styled.div`
  color: ${questionTextColor};
  font-family: Pretendard;
  font-size: 175%;
  font-weight: 700;
  margin-left: 20%;
  margin-top: -5%;
`

export const mainContentContainer = styled.div`
  margin-top: 4%;
  margin-bottom: 8%;
`

export const mainContent = styled.div`
  display: block;
  border-bottom: 1px solid #e7e9ed;
  align-items: center;
  width: 61%;
  padding-bottom: 1%;
  margin-left: 20%;
  margin-top: 2%;
`
export const questionContent = styled.div`
  display: flex;
`

export const questionContentSymbol = styled.h5`
  color: ${questionTextColor};
  font-family: Pretendard;
  font-size: 120%;
  font-weight: 600;
  margin-right: 2%;
`

export const questionContentText = styled.h5`
  color: #000;
  font-family: Pretendard;
  font-size: 100%;
  font-weight: 600;
`

export const selectImage = styled(Image)<{ rotation: number }>`
  width: 2.6%;
  height: 2.6%;
  margin-left: auto;
  transform: rotate(${(props) => props.rotation || 0}deg);
  transition: transform 0.3s ease;
`

export const answerContent = styled.div`
  display: flex;
  padding-top: 2%;
  padding-bottom: 1%;
`

export const answerContentSymbol = styled.h5`
  font-family: Pretendard;
  font-size: 90%;
  font-weight: 500;
  color: ${answerTextColor};
  margin-left: 5%;
  margin-right: 2%;
`
export const answerContentText = styled.h5`
  color: ${answerTextColor};
  font-family: Pretendard;
  font-size: 90%;
  font-weight: 500;
`
