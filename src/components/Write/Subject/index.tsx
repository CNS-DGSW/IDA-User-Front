import Card from "@/components/common/Card"
import { TableContextComponent } from "@/components/common/table"
import React from "react"
import useSubjectTable from "./Hooks/useSubjectTable"
import AcademicRecord from "./AcademicRecord"
import GEDRecord from "./GEDRecord"
import ScoreUpdateButton from "./ScoreUpdateButton"

const WriteSubject = () => {
  const context = useSubjectTable()

  const isAcademicRecord = false

  const ReloadAcademicRecord = () => {
    console.log("내신 성적 새로고침")
  }

  const ReloadGEDRecord = () => {
    console.log("고입검정 성적 새로고침")
  }

  return (
    <Card>
      <TableContextComponent name="subject-table" context={context}>
        <ScoreUpdateButton
          onClick={isAcademicRecord ? ReloadAcademicRecord : ReloadGEDRecord}
        />
        {isAcademicRecord ? <AcademicRecord /> : <GEDRecord />}
      </TableContextComponent>
    </Card>
  )
}

export default WriteSubject
