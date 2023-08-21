import Card from "@/components/common/Card"
import InputWrapper from "@/components/common/InputWrapper"
import Input from "@/components/common/Input"
import DateInput from "@/components/common/DateInput"

const WriteGuardian = () => {
  return (
    <Card>
      <InputWrapper>
        <InputWrapper title="성명">
          <Input type="text" />
        </InputWrapper>
        <InputWrapper>
          <InputWrapper title="지원자와의 관계">
            <Input type="text" />
          </InputWrapper>
        </InputWrapper>
      </InputWrapper>
      <InputWrapper style={{ marginTop: "54px" }}>
        <InputWrapper>
          <InputWrapper title="생년월일">
            <DateInput />
          </InputWrapper>
        </InputWrapper>
        <InputWrapper>
          <InputWrapper title="휴대폰">
            <Input type="text" />
          </InputWrapper>
        </InputWrapper>
      </InputWrapper>
      <InputWrapper title="주소" style={{ marginTop: "54px" }}>
        <Input type="text" width={640} />
      </InputWrapper>
      <InputWrapper title="상세주소" style={{ marginTop: "34px" }}>
        <Input type="text" width={640} />
      </InputWrapper>
    </Card>
  )
}

export default WriteGuardian
