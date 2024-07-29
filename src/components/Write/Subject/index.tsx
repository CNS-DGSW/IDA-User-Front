import Card from "@/components/common/Card"
import { TableContextComponent } from "@/components/common/table"
import React from "react"
import AwardTable from "./AwardTable"
import useSubjectTable from "./Hooks/useSubjectTable"
import { SubjectDescription } from "./style"
import SubjectTable from "./SubjectTable"
import SynthesisTable from "./SynthesisTable"
import UnrecognizedTable from "./UnrecognizedTable"
import VolunteerTable from "./VolunteerTable"

const WriteSubject = () => {
  const context = useSubjectTable()

  return (
    <Card>
      <TableContextComponent name="subject-table" context={context}>
        <SynthesisTable />
        <SubjectDescription>
          <li>
            자유학기제 등으로 교과 성적이 없는 학기일 경우, 모집 요강에 의거하여
            해당학기의 성적을 인정하니, 테이블 상단의 &apos;자유학기제&apos;를
            꼭 선택해 주세요.
          </li>
          <li>
            체육․예술 교과 등 성적이 3등급 (A(우수), B(보통), C(미흡)) 평가로
            나오는 교과의 성적도 입력함.
          </li>
          <li>
            과목이 없다면 아래에 있는 과목 추가를 클릭 후 성적을 입력해주세요.
          </li>
        </SubjectDescription>
        <SubjectTable />
        <UnrecognizedTable />
        <VolunteerTable />
        <AwardTable />
      </TableContextComponent>
    </Card>
  )
}

export default WriteSubject
