import styled from "styled-components"

export const PersonalSection = styled.section`

  @media screen and (max-width: 500px){
    /* > article > div > div > div > div > input {
      width: 66.3vw;
    } */

    /* > article > div > div {
      display: flex;
      background-color: pink;
    } */

    > article > div > div > div > div {
      // width: 66.3vw;
      flex-direction: row;
    }

    /* > article > div > div > div > div > div {
      width: 31.1vw;
    } */
  
  }
`

export const CalanderImgBox = styled.div`
  position: absolute;
  right: 18px;

  @media screen and (max-width: 500px){
    right: 5%;
  }
`
