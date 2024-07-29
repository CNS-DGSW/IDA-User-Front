import Card from "@/components/common/Card"
import { TableContextComponent } from "@/components/common/table"
import React from "react"
import useSubjectTable from "./Hooks/useSubjectTable"
import AcademicRecord from "./AcademicRecord"
import GEDRecord from "./GEDRecord"

const WriteSubject = () => {
  const context = useSubjectTable()

  //확인을 위해 임시로 만들어 둔 변수 입니다. 나중에 수정할 때 삭제 해주세요.
  const isAcademicRecord = false

  return (
    <Card>
      <TableContextComponent name="subject-table" context={context}>
        {isAcademicRecord ? <AcademicRecord /> : <GEDRecord />}
      </TableContextComponent>
    </Card>
  )
}

export default WriteSubject
