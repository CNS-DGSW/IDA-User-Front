import { TableContextComponent } from "@/components/common/table"
import React from "react"
import VolunteerTable from "./volunteerTable"

const WriteSubject = () => {
  return (
    <TableContextComponent name="subject-table" context="">
      <VolunteerTable />
    </TableContextComponent>
  )
}

export default WriteSubject
