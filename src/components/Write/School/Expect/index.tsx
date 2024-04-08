import React from "react"
import Input from "@/components/common/Input"
import InputWrapper from "@/components/common/InputWrapper"
import Select from "@/components/common/Select"
import * as S from "../style"
import { localDetail, LocalKind } from "@/constants/Write/localKindConstant"
import useChange from "@/hooks/useChange"
import useLocal from "../hooks/useLocal"
import Card from "@/components/common/Card"
import useScSearchModal from "@/hooks/Write/useScSearchModal"
import useGetBrWidth from "@/hooks/useGetBrWidth"

const ExpectedForm = () => {
  const [, changesShoolContact] = useChange()
  const [, changeTeacherName] = useChange()
  const [, changeTeacherContact] = useChange()

  const { changeDetailLocal, changeLocal, detailLocal, local } = useLocal()
  const { openModal } = useScSearchModal()

  const { browserWidth } = useGetBrWidth()

  return (
    <Card>
      <S.Wrap justify="space-between" column>
        <InputWrapper title="출신 중학교명">
          <S.Wrap>
            <Input
              type="text"
              readonly
              width={browserWidth > 500 ? 224 : 180}
              style={browserWidth <= 500 ? { fontSize: "14px" } : {}}
              color="gray"
            />
            <S.SchoolButton onClick={openModal}>학교 검색</S.SchoolButton>
          </S.Wrap>
        </InputWrapper>
        <InputWrapper title="NEIS 학교 번호">
          <Input
            type="text"
            readonly
            color="gray"
            width={browserWidth <= 500 ? 260 : undefined}
          />
        </InputWrapper>
      </S.Wrap>

      <S.Wrap justify="space-between" column>
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
            width={browserWidth <= 500 ? 260 : 208}
            changeEvent={changesShoolContact}
          />
        </InputWrapper>
      </S.Wrap>
      <S.Wrap justify="space-between" column>
        <InputWrapper title="담임 성명">
          <Input
            type="text"
            changeEvent={changeTeacherName}
            width={browserWidth <= 500 ? 260 : undefined}
          />
        </InputWrapper>
        <InputWrapper title="담임 연락처">
          <Input
            type="text"
            changeEvent={changeTeacherContact}
            width={browserWidth <= 500 ? 260 : undefined}
          />
        </InputWrapper>
      </S.Wrap>
    </Card>
  )
}

export default ExpectedForm
