import CustomDatePicker from "../DatePicker"
import Input from "../Input"
import InputWrapper from "../InputWrapper"
import * as S from "./style"

const DateInput = () => {
  return (
    <InputWrapper style={{ position: "relative" }}>
      <Input type="text" disabled value="" />
      <S.DatePickerBox>
        <CustomDatePicker />
      </S.DatePickerBox>
    </InputWrapper>
  )
}

export default DateInput
