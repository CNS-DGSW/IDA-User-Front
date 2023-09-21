import React from "react"
import Card from "@/components/common/Card"
import InputWrapper from "@/components/common/InputWrapper"
import Radio from "@/components/common/Radio"
import Input from "@/components/common/Input"
import CustomDatePicker from "@/components/common/DatePicker"
import * as S from "./style"

const WritePersonal = () => {
  return (
    <section>
      <Card>
        <InputWrapper>
          <InputWrapper title="성명">
            <Input disabled type="text" width={310}></Input>
          </InputWrapper>
          <InputWrapper title="성별" style={{ width: "310px" }}>
            <Radio name="eduStatus" value="gender" width={149}>
              남자
            </Radio>
            <Radio name="eduStatus" value="gender" width={149}>
              여자
            </Radio>
          </InputWrapper>
        </InputWrapper>
        <InputWrapper style={{ marginTop: 54 }}>
          <InputWrapper title="생년월일" style={{ position: "relative" }}>
            <Input disabled type="text"></Input>
            <S.CalanderImgBox>
              <CustomDatePicker />
            </S.CalanderImgBox>
          </InputWrapper>
          <InputWrapper title="휴대폰">
            <Input disabled type="text"></Input>
          </InputWrapper>
        </InputWrapper>
      </Card>
    </section>
  )
}

export default WritePersonal
