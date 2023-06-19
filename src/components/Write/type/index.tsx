import Card from "@/components/common/Card"
import Input from "@/components/common/Input"
import InputWrapper from "@/components/common/InputWrapper"
import Radio from "@/components/common/Radio"
import useRadio from "@/hooks/useRadio"
import React from "react"
import SpecialScreening from "./specialScreening"
import SpecialAdmission from "./specialAdmission"
import type { CurrentTypeUnion } from "./type"

const typeComponents: Readonly<
  Record<Exclude<CurrentTypeUnion, "일반전형">, React.ReactNode>
> = Object.freeze({
  특별전형: <SpecialScreening />,
  특례입학: <SpecialAdmission />,
})

const WriteType = () => {
  const [currentType, changeCurrentType] = useRadio<CurrentTypeUnion>()

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
        {currentType === "일반전형" && (
          <Input
            type="text"
            readonly
            value="일반 전형에 응시한 지원자가 선택합니다."
            width={650}
            customStyle={{ marginTop: "34px" }}
          />
        )}
      </Card>
      {currentType && currentType !== "일반전형" && (
        <>{typeComponents[currentType]}</>
      )}
    </section>
  )
}

export default WriteType
