import styled from "styled-components"
import Link from "next/link"
export const MainLayout = styled.div`
  width: 100%;
  height: 560px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: rgba(9, 20, 49, 0.5);
  scroll-snap-align: start;
`

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  z-index: -1;
`

export const ContextContentsBox = styled.div`
  font-weight: 800;
  line-height: 84px;
  font-size: 60px;
  color: #fff;
  text-align: center;
`

export const Chapter3LinkButton = styled(Link)`
  width: 240px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.blue400};
  border-radius: 12px;
  margin: 50px auto;
`
