import Input from "@/components/common/Input"
import InputWrapper from "@/components/common/InputWrapper"
import Select from "@/components/common/Select"
import React from "react"
import * as S from "./style"

const ExpectedForm = () => {
  return (
    <>
      <S.Wrap justify="space-between">
        <InputWrapper title="출신 중학교명">
          <S.Wrap>
            <Input type="text" readonly width={224} color="gray" />
            <S.SchoolButton>학교 검색</S.SchoolButton>
          </S.Wrap>
        </InputWrapper>
        <InputWrapper title="NEIS 학교 번호">
          <Input type="text" readonly color="gray" />
        </InputWrapper>
      </S.Wrap>
      <S.Wrap justify="space-between">
        <InputWrapper title="지역명 ( 시도 )">
          <Select list={[1, 2, 3, 4]} />
        </InputWrapper>
        <InputWrapper title="시군구">
          <Select list={[1, 2, 3, 4]} />
        </InputWrapper>
        <InputWrapper title="학교 연락처">
          <Input type="text" width={208} />
        </InputWrapper>
      </S.Wrap>
      <S.Wrap justify="space-between">
        <InputWrapper title="담임 성명">
          <Input type="text" />
        </InputWrapper>
        <InputWrapper title="담임 연락처">
          <Input type="text" />
        </InputWrapper>
      </S.Wrap>
    </>
  )
}

export default ExpectedForm
