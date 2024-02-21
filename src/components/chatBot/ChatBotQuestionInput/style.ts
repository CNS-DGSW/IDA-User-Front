import styled from "styled-components"
import Image from "next/image"

export const ChatBotQuestionsInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 4rem;
  border-radius: 0.5rem;
  background: #f8fafd;
  box-shadow: 0px 2px 10px 0px rgba(30, 47, 68, 0.15);
  width: 20rem;
  height: 2.5rem;
  margin-left: 0.5rem;
  padding-right: 0.3rem;
  overflow-y: scroll;
`

export const ChatBotQuestionsInputBox = styled.input`
  flex: 1;
  height: 100%;
  border-radius: 0.5rem;
  background: #f8fafd;
  outline: none;
  border: none;
  ::placeholder {
    color: #cdced3;
  }
`

export const ChatBotQuestionsSubmitBtn = styled(Image)`
  margin-top: 0.5rem;
  cursor: pointer;
`
