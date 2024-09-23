import Card from "@/components/common/Card"
import InputWrapper from "@/components/common/InputWrapper"
import Radio from "@/components/common/Radio"
import useRadio from "@/hooks/useRadio"
import React, { useEffect } from "react"
import SpecialScreening from "./SpecialScreening"
import SpecialAdmission from "./SpecialAdmission"
// import type { CurrentTypeUnion } from "./type"
import { useKeyFunnel } from "@dgswcns/cns-funnel"
import * as S from "./style"
import useType from "@/hooks/Write/useType"
import { ApplyMainCategory } from "@/types/Write/write"

const WriteType = () => {
  const [currentType, changeCurrentType] = useRadio<ApplyMainCategory>()
  const [TypeFunnel, TypeStep, setType] = useKeyFunnel<ApplyMainCategory>()
  const { setUserTypeInfo, data } = useType()

  useEffect(() => {
    setType(currentType)
    setUserTypeInfo((prev) => {
      return {
        ...prev,
        category: currentType === undefined ? null : currentType,
      }
    })
  }, [currentType])

  useEffect(() => {
    setUserTypeInfo({ ...data })
  }, [data])

  return (
    <section>
      <Card>
        <InputWrapper title="졸업구분">
          <Radio
            name="type"
            value={ApplyMainCategory.COMMON}
            onClick={changeCurrentType}
          >
            일반전형
          </Radio>
          <Radio
            name="type"
            value={ApplyMainCategory.SPECIAL}
            onClick={changeCurrentType}
          >
            특별전형
          </Radio>
          <Radio
            name="type"
            value={ApplyMainCategory.EXCEPTIONAL}
            onClick={changeCurrentType}
          >
            특례입학
          </Radio>
        </InputWrapper>

        <TypeFunnel>
          <TypeStep name="일반전형">
            {/* <Input
              type="text"
              readonly
              value="일반 전형에 응시한 지원자가 선택합니다."
              width={650}
              customStyle={{ marginTop: "34px" }}
            /> */}
            <S.Form>일반 전형에 응시한 지원자가 선택합니다.</S.Form>
          </TypeStep>
        </TypeFunnel>
      </Card>
      <TypeFunnel>
        <TypeStep name="SPECIAL">
          <SpecialScreening />
        </TypeStep>
        <TypeStep name="EXCEPTIONAL">
          <SpecialAdmission />
        </TypeStep>
      </TypeFunnel>
    </section>
  )
}

export default WriteType
