import styled from "styled-components"

export const CheckboxLayout = styled.label`
  vertical-align: middle;
`
export const HiddenCheckBox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledCheckbox = styled.div<{
  checked: boolean
  width?: string
  height?: string
}>`
  display: inline-block;
  transition: all 150ms;
  border-radius: 2px;
  width: ${({ width }) => (width ? width : "20px")};
  height: ${({ height }) => (height ? height : "20px")};
  flex-shrink: 0;
  border: 2px solid #dadce2;
  background: ${({ checked, theme: { colors } }) =>
    checked ? colors.blue400 : colors.gray100};

  @media screen and (max-width: 500px) {
    width: 4.1vw;
    height: 4.1vw;
  }
`
