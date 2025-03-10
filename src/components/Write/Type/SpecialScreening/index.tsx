import Card from "@/components/common/Card"
import InputWrapper from "@/components/common/InputWrapper"
import Radio from "@/components/common/Radio"
import Select from "@/components/common/Select"
import { SpecialSelectObject } from "@/constants/Write/specialConstant"
import useRadio from "@/hooks/useRadio"
import * as S from "../style"
import React, { useEffect, useState } from "react"
import type { SpecialTypeUnion } from "../type"

type ReadonlyInputUnion = Exclude<
  SpecialTypeUnion,
  "사회통합전형 (기회균등전형)" | "사회통합전형 (사회다양성 전형)"
>

const readonlyInputObject: Record<ReadonlyInputUnion, string> = {
  마이스터인재전형:
    "소프트웨어 분야 마이스터로 성장할 수 있는 잠재력이 있다고 판단되는 학생 중 학교장의 추천을 받은 자",
  지역우선전형:
    "대구광역시 달성군 소재 중학교 졸업예정자, 중학교 졸업자 또는 중학교 졸업자와 동등한 학력 인정자로서 원서 접수일 현재 전 가족이 대구광역시 달성군에 주민등록이 되어있고 실제 거주하는 자",
}
// const readonlyInputSizeObject: Record<ReadonlyInputUnion, number> = {
//   마이스터인재전형: 48,
//   지역우선전형: 66,
// }

const SpecialScreening = () => {
  const [currentSpecial, changeCurrentSpecial] = useRadio<SpecialTypeUnion>()
  const [selectValue, setSelectValue] = useState<string>("선택")

  useEffect(() => {
    if (selectValue !== "선택") {
      setSelectValue("선택")
    }
  }, [currentSpecial])

  return (
    <Card>
      <InputWrapper title="특별전형 선택">
        <Radio
          name="kind"
          value="마이스터인재전형"
          width={153}
          onClick={changeCurrentSpecial}
        >
          마이스터인재전형
        </Radio>
        <Radio
          name="kind"
          value="사회통합전형 (기회균등전형)"
          width={153}
          onClick={changeCurrentSpecial}
        >
          사회통합전형 (기회균등전형)
        </Radio>
        <Radio
          name="kind"
          value="사회통합전형 (사회다양성 전형)"
          width={153}
          onClick={changeCurrentSpecial}
        >
          사회통합전형 (사회다양성 전형)
        </Radio>
        <Radio
          name="kind"
          value="지역우선전형"
          width={153}
          onClick={changeCurrentSpecial}
        >
          지역우선전형
        </Radio>
      </InputWrapper>
      {currentSpecial &&
        ["마이스터인재전형", "지역우선전형"].includes(currentSpecial) && (
          <S.Form>
            {readonlyInputObject[currentSpecial as ReadonlyInputUnion]}
          </S.Form>
          // <Textarea
          //   height={
          //     readonlyInputSizeObject[currentSpecial as ReadonlyInputUnion]
          //   }
          //   readonly
          //   value={readonlyInputObject[currentSpecial as ReadonlyInputUnion]}
          //   style={{ marginTop: "34px" }}
          // />
        )}
      {currentSpecial &&
        [
          "사회통합전형 (기회균등전형)",
          "사회통합전형 (사회다양성 전형)",
        ].includes(currentSpecial) && (
          <Select
            changeEvent={(event) => {
              console.log((event.target as HTMLLIElement).innerText)
              setSelectValue((event.target as HTMLLIElement).innerText)
            }}
            list={
              SpecialSelectObject[
                currentSpecial as Exclude<SpecialTypeUnion, ReadonlyInputUnion>
              ]
            }
            value={selectValue}
            width={650}
            style={{ marginTop: "34px" }}
          />
        )}
      <S.FormWrap>
        {selectValue !== "선택" && <S.Form>dummy</S.Form>}
      </S.FormWrap>
    </Card>
  )
}

export default SpecialScreening
