import React from "react"

import Card from "@/components/common/Card"
import Radio from "@/components/common/Radio"
import Examination from "./examination"
import GraduateForm from "./graduate"
import ExpectedForm from "./expect"
import InputWrapper from "@/components/common/InputWrapper"
import useRadio from "@/hooks/useRadio"

const eduObject: Readonly<Record<EduUnion, React.JSX.Element>> = {
  졸업예정: <ExpectedForm />,
  졸업생: <GraduateForm />,
  고입검정: <Examination />,
}

type EduUnion = "졸업예정" | "졸업생" | "고입검정"

const WriteSchool = () => {
  const [eduStatus, changeRadio] = useRadio<EduUnion>()

  return (
    <section>
      <Card>
        <InputWrapper title="졸업구분">
          <Radio name="eduStatus" value="졸업예정" onClick={changeRadio}>
            졸업예정
          </Radio>
          <Radio name="eduStatus" value="졸업생" onClick={changeRadio}>
            졸업생
          </Radio>
          <Radio name="eduStatus" value="고입검정" onClick={changeRadio}>
            고입검정
          </Radio>
        </InputWrapper>
      </Card>
      {eduStatus && <>{eduObject[eduStatus]}</>}
    </section>
  )
}

export default WriteSchool
