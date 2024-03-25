import DatePicker from "react-multi-date-picker"
import * as S from "./style"

interface CustomDatePickerProps {
  value?: string
  onChange?: (event: any) => void
}

const CustomDatePicker = ({ value, onChange }: CustomDatePickerProps) => {
  return (
    <DatePicker
      // onChange={(e) => console.log("dfdf", e)}
      onChange={onChange}
      value={value}
      render={(value, openCalendar) => {
        return (
          <S.DatePickerIconBox onClick={openCalendar}>
            <S.CalanderSVGIcon />
          </S.DatePickerIconBox>
        )
      }}
    />
  )
}

export default CustomDatePicker
