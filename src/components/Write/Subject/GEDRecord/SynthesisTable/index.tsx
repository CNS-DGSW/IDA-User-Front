import { Table } from "@/components/common/table"
import React from "react"

const SynthesisTable = () => {
  return (
    <Table customStyle={{ marginBottom: "34px" }}>
      <Table.Header>
        <Table.Tr>
          <Table.Th>전형구분</Table.Th>
          <Table.Th>교과성적</Table.Th>
          <Table.Th>출결상황</Table.Th>
          <Table.Th>봉사활동</Table.Th>
          <Table.Th>가산점</Table.Th>
          <Table.Th>총점</Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        <Table.Tr>
          <Table.Td background="F9F9F9" style={{ fontStyle: "normal" }}>
            점수확인
          </Table.Td>
          <Table.Td>0</Table.Td>
          <Table.Td>0</Table.Td>
          <Table.Td>0</Table.Td>
          <Table.Td>0</Table.Td>
          <Table.Td>0</Table.Td>
        </Table.Tr>
      </Table.Body>
    </Table>
  )
}

export default SynthesisTable
