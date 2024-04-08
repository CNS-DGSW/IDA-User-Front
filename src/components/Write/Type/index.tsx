import Card from "@/components/common/Card"
import InputWrapper from "@/components/common/InputWrapper"
import Radio from "@/components/common/Radio"
import useRadio from "@/hooks/useRadio"
import React, { useEffect } from "react"
import SpecialScreening from "./specialScreening"
import SpecialAdmission from "./specialAdmission"
import type { CurrentTypeUnion } from "./type"
import { useKeyFunnel } from "@dgswcns/cns-funnel"
import * as S from "./style"

const WriteType = () => {
  const [currentType, changeCurrentType] = useRadio<CurrentTypeUnion>()
  const [TypeFunnel, TypeStep, setType] = useKeyFunnel<CurrentTypeUnion>()

  useEffect(() => {
    setType(currentType)
  }, [currentType])

  return (
    <section>
      <Card>
        <InputWrapper title="졸업구분">
          <Radio name="type" value="일반전형" onClick={changeCurrentType}>
            일반전형
          </Radio>
          <Radio name="type" value="특별전형" onClick={changeCurrentType}>
            특별전형
          </Radio>
          <Radio name="type" value="특례입학" onClick={changeCurrentType}>
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
        <TypeStep name="특별전형">
          <SpecialScreening />
        </TypeStep>
        <TypeStep name="특례입학">
          <SpecialAdmission />
        </TypeStep>
      </TypeFunnel>
    </section>
  )
}

export default WriteType
