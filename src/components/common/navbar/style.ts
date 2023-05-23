import styled from "styled-components";

export const NavbarLayout = styled.nav`
    width:100vw;
    height:60px;
    font-size:14px;
    font-weight: 600;
    background-color: transparent;
    display:flex;
    justify-content:center; 
    `

export const NavbarList = styled.ul`
    width:989px;
    display:flex;
    align-items: center;
    justify-content:space-between;
`
export const LeftBox = styled.div`
`

export const RightBox = styled.div`
    width:350px;
    display:flex;
    justify-content:space-between;
`

export const AuthBox = styled.div`
    width: 116px;
    display:flex;   
    justify-content:space-between;
    align-items: center;
`

export const Dot = styled.div`
    width:4px;
    height:4px;
    background-color: black;
    border-radius: 50%;
`