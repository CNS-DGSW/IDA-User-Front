import Checkbox from "@/components/common/Checkbox"
import Input from "@/components/common/Input"
import { Table } from "@/components/common/table"
import React from "react"

const AwardTable = () => {
  return (
    <Table>
      <Table.Header>
        <Table.Tr height="31">
          <Table.Th rowspan={2}>학년</Table.Th>
          <Table.Th rowspan={2} width="186">
            설명
          </Table.Th>
          <Table.Th width="118" colspan={2}>
            <Table.Tr height="31">
              <Table.Th width="118" colspan={2} notBorder>
                1학년
              </Table.Th>
            </Table.Tr>
            <Table.Tr height="31">
              <Table.Th
                width="59"
                background="F9F9F9"
                color="000"
                style={{ fontSize: "12px", fontStyle: "normal" }}
                notBorder
              >
                1학기
              </Table.Th>
              <Table.Th
                width="59"
                background="F9F9F9"
                color="000"
                style={{ fontSize: "12px", fontStyle: "normal" }}
                notBorder
              >
                2학기
              </Table.Th>
            </Table.Tr>
          </Table.Th>
          <Table.Th width="118" colspan={2}>
            <Table.Tr height="31">
              <Table.Th width="118" colspan={2} notBorder>
                2학년
              </Table.Th>
            </Table.Tr>
            <Table.Tr height="31">
              <Table.Th
                width="59"
                background="F9F9F9"
                color="000"
                style={{ fontSize: "12px", fontStyle: "normal" }}
                notBorder
              >
                1학기
              </Table.Th>
              <Table.Th
                width="59"
                background="F9F9F9"
                color="000"
                style={{ fontSize: "12px", fontStyle: "normal" }}
                notBorder
              >
                2학기
              </Table.Th>
            </Table.Tr>
          </Table.Th>
          <Table.Th width="118" colspan={2}>
            <Table.Tr height="31">
              <Table.Th width="118" colspan={2} notBorder>
                3학년
              </Table.Th>
            </Table.Tr>
            <Table.Tr height="31">
              <Table.Th
                width="59"
                background="F9F9F9"
                color="000"
                style={{ fontSize: "12px", fontStyle: "normal" }}
                notBorder
              >
                1학기
              </Table.Th>
              <Table.Th
                width="59"
                background="F9F9F9"
                color="000"
                style={{ fontSize: "12px", fontStyle: "normal" }}
                notBorder
              >
                2학기
              </Table.Th>
            </Table.Tr>
          </Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        <Table.Tr>
          <Table.Td background="F9F9F9">리더쉽</Table.Td>
          <Table.Td
            width="186"
            color="8B939C"
            style={{ fontSize: "12px", padding: "0 18px" }}
          >
            최소 한 학기 이상 학생회 임원 ( 전교 학생회장, 전교
            학생부회장,학급반장 )
          </Table.Td>
          <Table.Td width="59">
            <Checkbox checked={false} name="leader" />
          </Table.Td>
          <Table.Td width="59">
            <Checkbox checked={false} name="leader" />
          </Table.Td>
          <Table.Td width="59">
            <Checkbox checked={false} name="leader" />
          </Table.Td>
          <Table.Td width="59">
            <Checkbox checked={false} name="leader" />
          </Table.Td>
          <Table.Td width="59">
            <Checkbox checked={false} name="leader" />
          </Table.Td>
          <Table.Td width="59">
            <Checkbox checked={false} name="leader" />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td background="F9F9F9">리더쉽</Table.Td>
          <Table.Td
            width="186"
            color="8B939C"
            style={{ fontSize: "12px", padding: "0 18px" }}
          >
            재학 중 교내 모범상을 수상 ( 모범, 선행, 효행, 공로, 노력 등 )
          </Table.Td>
          <Table.Td width="354" colspan={6}>
            <Input
              type="text"
              style={{ margin: "0 auto", height: "36px", textAlign: "center" }}
            />
          </Table.Td>
        </Table.Tr>
      </Table.Body>
    </Table>
  )
}

export default AwardTable
