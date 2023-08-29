import React from "react"
import Input from "@/components/common/Input"
import InputWrapper from "@/components/common/InputWrapper"
import Select from "@/components/common/Select"
import * as S from "../style"
import { localDetail, LocalKind } from "@/constants/Write/localKindConstant"
import useChange from "@/hooks/useChange"
import useLocal from "../hooks/useLocal"
import Card from "@/components/common/Card"
import usePhone from "@/hooks/usePhone"

const ExpectedForm = () => {
  const [schoolNumber, chagneSchoolNumber] = usePhone()
  const [, changeTeacherName] = useChange()
  const [teacherNumber, changeTeacherContact] = usePhone()

  const { changeDetailLocal, changeLocal, detailLocal, local } = useLocal()

  return (
    <Card>
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
          <Select list={LocalKind} value={local} changeEvent={changeLocal} />
        </InputWrapper>
        <InputWrapper title="시군구">
          <Select
            list={local ? localDetail[local] : ["지역명을 선택해주세요"]}
            value={detailLocal}
            changeEvent={changeDetailLocal}
          />
        </InputWrapper>
        <InputWrapper title="학교 연락처">
          <Input
            type="text"
            width={208}
            onChange={chagneSchoolNumber}
            placeholder="- 없이 입력해주세요"
            value={schoolNumber}
          />
        </InputWrapper>
      </S.Wrap>
      <S.Wrap justify="space-between">
        <InputWrapper title="담임 성명">
          <Input type="text" changeEvent={changeTeacherName} />
        </InputWrapper>
        <InputWrapper title="담임 연락처">
          <Input
            type="text"
            onChange={changeTeacherContact}
            placeholder="- 없이 입력해주세요"
            value={teacherNumber}
          />
        </InputWrapper>
      </S.Wrap>
    </Card>
  )
}

export default ExpectedForm
