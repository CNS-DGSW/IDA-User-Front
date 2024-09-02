import Card from "@/components/common/Card"
// import Input from "@/components/common/Input"
import InputWrapper from "@/components/common/InputWrapper"
import Textarea from "@/components/common/Textarea"
import useChange from "@/hooks/useChange"
import React from "react"
import { Form } from "../Type/style"

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
        title={`자기소개서 ( 공백제외 ${
          coverLetter?.replaceAll(" ", "")?.length ?? 0
        }/1200 )`}
        style={{ marginTop: "34px" }}
      >
        <div>
          <Form>
            1. 학교수업에서 모둠활동 과제를 수행하면서 자발적으로 자신의 역할을
            수행했던 경험을 기술하세요. <br />
            (3명 이상의 팀원이 함께 수행했던 경험 기술) <br />
            <br />
            2.수업과제를 수행하면서 어려움이 있었지만 끝까지 포기하지 않고
            목표를 달성하기 위해 최선의 노력을 기울였던경험을 기술하세요. <br />
            (경험이 없다면, 시간이 많이 소요되는 과제를 끈질기게 수행했던 경험
            기술)
          </Form>
          <br />
          <Textarea
            height={330}
            changeEvent={changeCoverLetter}
            value={coverLetter}
          />
        </div>
      </InputWrapper>

      <InputWrapper
        title={`학업계획서 ( 공백제외 ${studyPlan?.length ?? 0}/1200 )`}
        style={{ marginTop: "34px" }}
      >
        <div style={{ width: "100%" }}>
          <Form>
            입학 후 3년 동안의 학업계획을 학년별로 구분하여 기술하세요.
          </Form>
          <br />
          <Textarea
            height={330}
            changeEvent={changeStudyPlan}
            value={studyPlan}
          />
        </div>
      </InputWrapper>
    </Card>
  )
}

export default WriteDocument
