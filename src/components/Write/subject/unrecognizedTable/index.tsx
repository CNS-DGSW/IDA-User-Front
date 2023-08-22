import Input from "@/components/common/Input"
import { Table } from "@/components/common/table"
import React from "react"
import type { CSSObject } from "styled-components"

const UnrecognizedTdStyle: CSSObject = {
  width: "107px",
  height: "34px",
  margin: "0 auto",
  textAlign: "center",
}

const UnrecognizedTable = () => {
  return (
    <Table customStyle={{ marginBottom: "34px" }}>
      <Table.Header>
        <Table.Tr>
          <Table.Th>학년</Table.Th>
          <Table.Th width="135">미인정결석</Table.Th>
          <Table.Th width="135">미인정지각</Table.Th>
          <Table.Th width="135">미인정조퇴</Table.Th>
          <Table.Th width="135">미인정결과</Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        <Table.Tr>
          <Table.Td>1학년</Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={UnrecognizedTdStyle} />
          </Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={UnrecognizedTdStyle} />
          </Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={UnrecognizedTdStyle} />
          </Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={UnrecognizedTdStyle} />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>2학년</Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={UnrecognizedTdStyle} />
          </Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={UnrecognizedTdStyle} />
          </Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={UnrecognizedTdStyle} />
          </Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={UnrecognizedTdStyle} />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>3학년</Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={UnrecognizedTdStyle} />
          </Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={UnrecognizedTdStyle} />
          </Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={UnrecognizedTdStyle} />
          </Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={UnrecognizedTdStyle} />
          </Table.Td>
        </Table.Tr>
      </Table.Body>
    </Table>
  )
}

export default UnrecognizedTable
