import Image from "next/image"
import styled from "styled-components"

export const ModalLayout = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SubLayout = styled.div`
  width: 42rem;
  height: 43.75rem;
  max-width: 42rem;
  hieght: 43.75rem;
  background-color: #fff;
  border: 1px solid #d8dae0;
  border-radius: 0.625rem;
  position: relative;
  padding: 2rem;
`

export const ExitIcon = styled(Image)`
  position: absolute;
  right: 0;
  margin-right: 2rem;
`

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #1e2f44;
  margin: 1.75rem 0;
`

export const Card = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 2.5rem;
  background-color: #f8fafd;
  border-radius: 0.5rem;
  &:first-of-type {
    margin-bottom: 1.125rem;
  }
`

export const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Button = styled.button`
  box-shadow: none;
  border: none;
  padding: 1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: #1485ee;
  border-radius: 0.5rem;
`

export const ContentTitle = styled.p`
  font-size: 1.375rem;
  color: #424344;
  margin-bottom: 1.125rem;
`

export const List = styled.div`
  overflow: auto;
  padding: 0.375rem;
  width: 100%;
  max-width: 100%;
  height: 9.375rem;
  max-height: 9.375rem;
  background-color: #fff;
  border: 1px solid #d8dae0;
  border-radius: 0.5rem;
  margin-bottom: 1.125rem;
`

export const ListValue = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 100%;
  background-color: #fff;
  border: 1px solid #d8dae0;
  border-radius: 0.5rem;
  &:not(:first-child) {
    margin-top: 0.625rem;
  }
`

export const ScName = styled.p`
  font-size: 1.125rem;
  color: #424344;
`
export const ScAddress = styled.p`
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #8b939c;
`
export const ScNEIS = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #424344;
`

export const NoSchool = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.125rem;
  color: #424344;
`

export const RealNoSchool = styled.p`
  font-size: 0.875rem;
  color: #424344;
  text-decoration-line: underline;
  height: 3rem;
  display: flex;
  align-items: center;
  &:hover {
    color: #8b939c;
  }
`
