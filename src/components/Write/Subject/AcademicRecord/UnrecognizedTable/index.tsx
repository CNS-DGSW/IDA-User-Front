import Input from "@/components/common/Input"
import { Table } from "@/components/common/table"
import useGetBrWidth from "@/hooks/useGetBrWidth"
import React from "react"
import type { CSSObject } from "styled-components"

const UnrecognizedTdStyle: CSSObject = {
  width: "107px",
  height: "34px",
  margin: "0 auto",
  textAlign: "center",
}

const UnrecognizedTdMoblieStyle: CSSObject = {
  width: "30px",
  height: "20px",
  fontSize: "10px",
  margin: "0 auto",
  textAlign: "center",
  padding: "0",
}

const UnrecognizedTable = () => {
  const { browserWidth } = useGetBrWidth()

  const setStyle = (): CSSObject => {
    if (browserWidth > 500) return UnrecognizedTdStyle
    else return UnrecognizedTdMoblieStyle
  }

  return (
    <Table customStyle={{ marginBottom: "34px" }}>
      <Table.Header>
        <Table.Tr>
          <Table.Th width={browserWidth > 500 ? undefined : "70"}>
            학년
          </Table.Th>
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
            <Input type="text" customStyle={setStyle()} />
          </Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={setStyle()} />
          </Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={setStyle()} />
          </Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={setStyle()} />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>2학년</Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={setStyle()} />
          </Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={setStyle()} />
          </Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={setStyle()} />
          </Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={setStyle()} />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>3학년</Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={setStyle()} />
          </Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={setStyle()} />
          </Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={setStyle()} />
          </Table.Td>
          <Table.Td width="135">
            <Input type="text" customStyle={setStyle()} />
          </Table.Td>
        </Table.Tr>
      </Table.Body>
    </Table>
  )
}

export default UnrecognizedTable
