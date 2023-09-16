import styled from "styled-components"
import Link from "next/link"
export const MainLayout = styled.div`
  width: 100%;
  height: 560px;
  background-color: #091431;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
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
