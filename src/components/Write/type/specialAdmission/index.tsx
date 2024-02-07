import Card from "@/components/common/Card"
import InputWrapper from "@/components/common/InputWrapper"
import Select from "@/components/common/Select"
import { SpecialAdmissionSelectList } from "@/constants/Write/specialConstant"
import React from "react"
import { Form } from "../style"

const SpecialAdmission = () => {
  return (
    <Card>
      <InputWrapper title="특별전형 선택">
        <Select
          width={650}
          list={SpecialAdmissionSelectList}
          changeEvent={() => {}}
        />
      </InputWrapper>
      <div style={{ marginTop: "1rem" }}>
        <Form>
          외국 또는 군사분계선 이북지역에서 9년 이상의 학교교육을 이수하거나,
          초등학교 및 중학교에 해당하는 학교 교육과정을 이수한 자
        </Form>
      </div>
    </Card>
  )
}

export default SpecialAdmission
