import Input from "@/components/common/Input"
import { Table } from "@/components/common/table"
import React from "react"
import useVolunteer from "../hooks/useVolunteer"
import { TableCustomInputStyle } from "../style"

const VolunteerTable = () => {
  const { changeGrade1, changeGrade2, changeGrade3, grade1, grade2, grade3 } =
    useVolunteer()

  return (
    <Table customStyle={{ marginBottom: "34px" }}>
      <Table.Header>
        <Table.Tr height="54">
          <Table.Th>학년</Table.Th>
          <Table.Th width="539">봉사활동 시간</Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        <Table.Tr height="54">
          <Table.Td>1학년</Table.Td>
          <Table.Td width="539">
            <Input
              type="text"
              customStyle={TableCustomInputStyle}
              value={grade1}
              changeEvent={changeGrade1}
            />
          </Table.Td>
        </Table.Tr>
        <Table.Tr height="54">
          <Table.Td>2학년</Table.Td>
          <Table.Td width="539">
            <Input
              type="text"
              customStyle={TableCustomInputStyle}
              value={grade2}
              changeEvent={changeGrade2}
            />
          </Table.Td>
        </Table.Tr>
        <Table.Tr height="54">
          <Table.Td>3학년</Table.Td>
          <Table.Td width="539">
            <Input
              type="text"
              customStyle={TableCustomInputStyle}
              value={grade3}
              changeEvent={changeGrade3}
            />
          </Table.Td>
        </Table.Tr>
      </Table.Body>
    </Table>
  )
}

export default VolunteerTable
