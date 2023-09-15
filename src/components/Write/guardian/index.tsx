import Card from "@/components/common/Card"
import InputWrapper from "@/components/common/InputWrapper"
import Input from "@/components/common/Input"
import Select from "@/components/common/Select"
import { GuardianRelation } from "@/constants/Write/guardianRelationConstant"
import CustomDatePicker from "@/components/common/DatePicker"
import * as S from "./style"

const WriteGuardian = () => {
  return (
    <section>
      <Card>
        <InputWrapper>
          <InputWrapper title="성명">
            <Input type="text" width={310} />
          </InputWrapper>
          <InputWrapper title="지원자와의 관계">
            <Select list={GuardianRelation} width={310} changeEvent={()=>{}}/>
          </InputWrapper>
        </InputWrapper>
        <InputWrapper style={{ marginTop: 54 }}>
          <InputWrapper title="생년월일" style={{ position: "relative" }}>
            <Input type="text" disabled />
            <S.CalanderImgBox>
              <CustomDatePicker />
            </S.CalanderImgBox>
          </InputWrapper>
          <InputWrapper title="휴대폰">
            <Input type="tel" width={310} />
          </InputWrapper>
        </InputWrapper>
        <InputWrapper title="주소" style={{ marginTop: 54 }}>
          <Input type="text" width={650} />
        </InputWrapper>
        <InputWrapper title="상세주소" style={{ marginTop: 34 }}>
          <Input type="text" width={650} />
        </InputWrapper>
      </Card>
    </section>
  )
}

export default WriteGuardian
