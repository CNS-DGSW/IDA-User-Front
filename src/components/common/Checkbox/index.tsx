import type { ChangeEvent, InputHTMLAttributes } from "react"
import { forwardRef } from "react"
import * as S from "./style"
import { BsCheckLg } from "react-icons/bs"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean
  onChange?: (evnet: ChangeEvent<HTMLInputElement>) => void
  name?: string
  width?: string
  height?: string
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, onChange, name, width, height, ...checkBoxProps }, ref) => {
    return (
      <label>
        <S.CheckboxLayout>
          <S.HiddenCheckBox
            checked={checked}
            ref={ref}
            type="checkbox"
            onChange={onChange}
            name={name}
            {...checkBoxProps}
          />
          <S.StyledCheckbox checked={checked} width={width} height={height}>
            <BsCheckLg style={{ color: "white" }} />
          </S.StyledCheckbox>
        </S.CheckboxLayout>
      </label>
    )
  },
)

export default Checkbox
