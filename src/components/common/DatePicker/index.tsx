import CalanderSVG from "@/assets/calander.svg"
import DatePicker from "react-multi-date-picker"
import * as S from "./style"

interface CustomDatePickerProps {
  value?: string
  onChange?: () => void
}

const CustomDatePicker = ({ value, onChange }: CustomDatePickerProps) => {
  return (
    <DatePicker
      onChange={onChange}
      render={(value, openCalendar) => {
        return (
          <S.DatePickerIconBox onClick={openCalendar}>
            <CalanderSVG />
          </S.DatePickerIconBox>
        )
      }}
    />
  )
}

export default CustomDatePicker
