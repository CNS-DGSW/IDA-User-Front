import Card from "@/components/common/Card"
// import Input from "@/components/common/Input"
import InputWrapper from "@/components/common/InputWrapper"
import Textarea from "@/components/common/Textarea"
import useChange from "@/hooks/useChange"
import React from "react"
import { Form } from "../type/style"

const WriteDocument = () => {
  const [coverLetter, changeCoverLetter] = useChange<HTMLTextAreaElement>()
  const [studyPlan, changeStudyPlan] = useChange<HTMLTextAreaElement>()

  return (
    <Card>
      {/* <Input
        type="text"
        value="자기소개서 및 학업계획서는 전형 성적에 반영되지 않으며 구술 면접 참고 자료로 활용됩니다."
        readonly
        width={650}
      /> */}
      <Form>
        자기소개서 및 학업계획서는 전형 성적에 반영되지 않으며 구술 면접 참고
        자료로 활용됩니다.
      </Form>
      <InputWrapper
        title={`자기소개서 ( ${coverLetter?.length ?? 0}/1500 )`}
        style={{ marginTop: "34px" }}
      >
        <Textarea
          height={330}
          changeEvent={changeCoverLetter}
          value={coverLetter}
          max={1500}
        />
      </InputWrapper>
      <InputWrapper
        title={`학업계획서 ( ${studyPlan?.length ?? 0}/1500 )`}
        style={{ marginTop: "34px" }}
      >
        <Textarea
          height={330}
          changeEvent={changeStudyPlan}
          value={studyPlan}
          max={1500}
        />
      </InputWrapper>
    </Card>
  )
}

export default WriteDocument
