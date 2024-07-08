import React, { useEffect } from "react"
import { useKeyFunnel } from "@dgswcns/cns-funnel"

import Card from "@/components/common/Card"
import Radio from "@/components/common/Radio"
import Examination from "./Examination"
import GraduateForm from "./Graduate"
import ExpectedForm from "./Expect"
import InputWrapper from "@/components/common/InputWrapper"
import useRadio from "@/hooks/useRadio"
import SchoolSearchModal from "./SchoolSearchModal"
import { scSearchModalAtom } from "@/atom/modalAtom"
import { useAtomValue } from "jotai"

type EduUnion = "졸업예정" | "졸업생" | "고입검정"

const WriteSchool = () => {
  const [eduStatus, changeRadio] = useRadio<EduUnion>()
  const [EduFunnel, EduStep, setEdu] = useKeyFunnel<EduUnion>()
  const scSearchModal = useAtomValue(scSearchModalAtom)

  useEffect(() => {
    setEdu(eduStatus)
  }, [eduStatus])

  return (
    <>
      {scSearchModal && <SchoolSearchModal />}
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

        <EduFunnel>
          <EduStep name="졸업예정">
            <ExpectedForm />
          </EduStep>
          <EduStep name="졸업생">
            <GraduateForm />
          </EduStep>
          <EduStep name="고입검정">
            <Examination />
          </EduStep>
        </EduFunnel>
      </section>
    </>
  )
}

export default WriteSchool
