import styled from "styled-components"

interface StylePropsType {
  showQuestionExamples: boolean
}

export const ChatBotQuestionsContentContainer = styled.div<StylePropsType>`
  margin-bottom: ${(props) => (props.showQuestionExamples ? "3rem" : "")};
`

export const ChatBotBasicQuestionContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  width: 21rem;
  bottom: 7rem;
`
