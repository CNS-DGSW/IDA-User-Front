import Input from "@/components/common/Input"
import { Table } from "@/components/common/table"
import React from "react"
import useGetBrWidth from "@/hooks/useGetBrWidth"
import type { CSSObject } from "styled-components"
import useTableStyle from "../../Hooks/useTableStyle"

const GEDSubjectTdStyle: CSSObject = {
  width: "80px",
  height: "34px",
  margin: "0 auto",
  textAlign: "center",
}

const GEDSubjectTdMoblieStyle: CSSObject = {
  width: "30px",
  height: "20px",
  fontSize: "10px",
  margin: "0 auto",
  textAlign: "center",
  padding: "0",
}

const SubjectTable = () => {
  const { browserWidth } = useGetBrWidth()
  const { setTableRadius } = useTableStyle()

  const setStyle = (): CSSObject => {
    if (browserWidth > 500) return GEDSubjectTdStyle
    else return GEDSubjectTdMoblieStyle
  }

  return (
    <Table customStyle={{ marginBottom: "34px" }}>
      <Table.Header>
        <Table.Tr height="54">
          <Table.Th radius={setTableRadius(0, 0)}>과목</Table.Th>
          <Table.Th>국어</Table.Th>
          <Table.Th>영어</Table.Th>
          <Table.Th>수학</Table.Th>
          <Table.Th>과학</Table.Th>
          <Table.Th radius={setTableRadius(1, 0)}>선택과목</Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        <Table.Tr height="54">
          <Table.Td radius={setTableRadius(0, 1)}>점수</Table.Td>
          <Table.Td>
            <Input type="text" customStyle={setStyle()} />
          </Table.Td>
          <Table.Td>
            <Input type="text" customStyle={setStyle()} />
          </Table.Td>
          <Table.Td>
            <Input type="text" customStyle={setStyle()} />
          </Table.Td>
          <Table.Td>
            <Input type="text" customStyle={setStyle()} />
          </Table.Td>
          <Table.Td radius={setTableRadius(1, 1)}>
            <Input type="text" customStyle={setStyle()} />
          </Table.Td>
        </Table.Tr>
      </Table.Body>
    </Table>
  )
}

export default SubjectTable
