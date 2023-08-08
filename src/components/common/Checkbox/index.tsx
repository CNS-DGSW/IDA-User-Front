import type { ChangeEvent, InputHTMLAttributes } from "react"
import * as S from "./style"
import { BsCheckLg } from "react-icons/bs"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean
  onChange: (evnet: ChangeEvent<HTMLInputElement>) => void
  name?: string
}

const Checkbox = ({ checked, onChange, name }: CheckboxProps) => {
  return (
    <S.CheckboxLayout>
      <S.HiddenCheckBox onChange={onChange} name={name} />
      <S.StyledCheckbox checked={checked}>
        <BsCheckLg style={{ color: "white" }} />
      </S.StyledCheckbox>
    </S.CheckboxLayout>
  )
}

export default Checkbox
