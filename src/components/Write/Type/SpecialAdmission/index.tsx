import Card from "@/components/common/Card"
import InputWrapper from "@/components/common/InputWrapper"
import Select from "@/components/common/Select"
import { SpecialAdmissionSelectList } from "@/constants/Write/specialConstant"
import React from "react"
import { Form } from "../style"
import useType from "@/hooks/Write/useType"
import type { ApplyType } from "@/types/Write/write"

const SpecialAdmission = () => {
  const { userTypeInfo, setUserTypeInfo } = useType()

  return (
    <Card>
      <InputWrapper title="특별전형 선택">
        <Select
          width={650}
          value={
            SpecialAdmissionSelectList.find((val: [ApplyType, string]) => {
              return userTypeInfo.type === val[0]
            })?.[1]
          }
          list={SpecialAdmissionSelectList.map((val) => val[1])}
          changeEvent={(event) => {
            SpecialAdmissionSelectList.forEach((val) => {
              if ((event.target as HTMLLIElement).innerText === val[1]) {
                setUserTypeInfo((prev) => {
                  return { ...prev, type: val[0] }
                })
              }
            })
          }}
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
