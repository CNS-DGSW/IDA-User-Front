import styled from "styled-components"

export const CheckboxLayout = styled.div`
  display: inline-block;
  vertical-align: middle;
`
export const HiddenCheckBox = styled.input.attrs({ type: "checkbox" })`
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

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  transition: all 150ms;
  border-radius: 2px;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border: 2px solid #dadce2;
  background: ${({ checked, theme: { colors } }) =>
    checked ? colors.blue400 : colors.gray100};
`
