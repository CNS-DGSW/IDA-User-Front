import Input from "@/components/common/Input"
import { Table } from "@/components/common/table"
import React from "react"
import useVolunteer from "../../Hooks/useVolunteer"
import { TableCustomInputStyle, TableCustomMoblieInputStyle } from "../../style"
import useGetBrWidth from "@/hooks/useGetBrWidth"
import type { CSSObject } from "styled-components"
import useTableStyle from "../../Hooks/useTableStyle"

const VolunteerTable = () => {
  const { changeGrade1, changeGrade2, changeGrade3, grade1, grade2, grade3 } =
    useVolunteer()

  const { browserWidth } = useGetBrWidth()
  const { setTableRadius } = useTableStyle()

  const setStyle = (): CSSObject => {
    if (browserWidth > 500) return TableCustomInputStyle
    else return TableCustomMoblieInputStyle
  }

  return (
    <Table customStyle={{ marginBottom: "34px" }}>
      <Table.Header>
        <Table.Tr height="54">
          <Table.Th radius={setTableRadius(0, 0)}>학년</Table.Th>
          <Table.Th width="539" radius={setTableRadius(1, 0)}>
            봉사활동 시간
          </Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        <Table.Tr height="54">
          <Table.Td>1학년</Table.Td>
          <Table.Td width="539">
            <Input
              type="text"
              customStyle={setStyle()}
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
              customStyle={setStyle()}
              value={grade2}
              changeEvent={changeGrade2}
            />
          </Table.Td>
        </Table.Tr>
        <Table.Tr height="54">
          <Table.Td radius={setTableRadius(0, 1)}>3학년</Table.Td>
          <Table.Td width="539" radius={setTableRadius(1, 1)}>
            <Input
              type="text"
              customStyle={setStyle()}
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
