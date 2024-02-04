import React from "react"
import Card from "@/components/common/Card"
import InputWrapper from "@/components/common/InputWrapper"
import Radio from "@/components/common/Radio"
import Input from "@/components/common/Input"
import CustomDatePicker from "@/components/common/DatePicker"
import * as S from "./style"
import useGetBrWidth from "@/hooks/useGetBrWidth"

const WritePersonal = () => {
  const {browserWidth} = useGetBrWidth()

  return (
    <S.PersonalSection>
      <Card>
        <InputWrapper>
          <InputWrapper title="성명">
            <Input disabled type="text" style={browserWidth <= 500 ? { width: 239 } : { width: 310 }}></Input>
          </InputWrapper>
          <InputWrapper title="성별" style={browserWidth <= 500 ? { marginTop: "24px", width: "239px" } : { width: "310px" }}>
            <Radio name="eduStatus" value="gender" width={browserWidth <= 500 ? 112 : 149}>
              남자
            </Radio>
            <Radio name="eduStatus" value="gender" width={browserWidth <= 500 ? 112 : 149}>
              여자
            </Radio>
          </InputWrapper>
        </InputWrapper>
        <InputWrapper style={browserWidth <= 500 ? {} : { marginTop: 54 }}>
          <InputWrapper title="생년월일" style={{ position: "relative" }}>
            <Input disabled type="text" style={browserWidth <= 500 ? { width: "239px" } : {}}></Input>
            <S.CalanderImgBox>
              <CustomDatePicker />
            </S.CalanderImgBox>
          </InputWrapper>
          <InputWrapper title="휴대폰"  style={browserWidth <= 500 ? { marginTop: "24px"} : {}}>
            <Input disabled type="text" style={browserWidth <= 500 ? { width: "239px" } : {}}></Input>
          </InputWrapper>
        </InputWrapper>
      </Card>
    </S.PersonalSection>
  )
}

export default WritePersonal
