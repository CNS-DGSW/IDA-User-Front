import Input from "@/components/common/Input"
import InputWrapper from "@/components/common/InputWrapper"
import React from "react"
import { SchoolButton, Wrap } from "./style"

const ExpectedForm = () => {
  return (
    <>
      <Wrap justify="space-between">
        <InputWrapper title="출신 중학교명">
          <Wrap>
            <Input type="text" readonly width={224} color="gray" />
            <SchoolButton>학교 검색</SchoolButton>
          </Wrap>
        </InputWrapper>
        <InputWrapper title="NEIS 학교 번호">
          <Input type="text" readonly color="gray" />
        </InputWrapper>
      </Wrap>
      <Wrap justify="space-between">
        <InputWrapper title="지역명 ( 시도 )">
          <input type="text" />
        </InputWrapper>
        <InputWrapper title="시군구">
          <input type="text" />
        </InputWrapper>
        <InputWrapper title="학교 연락처">
          <Input type="text" width={208} />
        </InputWrapper>
      </Wrap>
      <Wrap justify="space-between">
        <InputWrapper title="담임 성명">
          <Input type="text" />
        </InputWrapper>
        <InputWrapper title="담임 연락처">
          <Input type="text" />
        </InputWrapper>
      </Wrap>
    </>
  )
}

export default ExpectedForm
