import Link from "next/link"
import styled, { keyframes } from "styled-components"
import ArrowIcon from "../../../../assets/img/icon/arrowIcon.svg"

export const Chapter1Layout = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)),
    url("CHAPTER1_IMG.png");
  background-repeat: no-repeat;
  background-size: cover;
`
export const Chapter1CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 380px;
`

export const Chapter1Phrases = styled.p`
  width: 490px;
  line-height: 84px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 800;
  font-size: 60px;
`

export const Chapter1LinkButton = styled(Link)`
  width: 240px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.blue400};
  border-radius: 12px;
`

const motion = keyframes` 
    0% {margin-bottom: 0px;}
    100% {margin-bottom: 10px;}
`

export const Chapter1ArrowIcon = styled(ArrowIcon)`
  position: absolute;
  animation: ${motion} 0.5s linear 0s infinite alternate;
  margin-bottom: 0px;
  bottom: 72px;
`
