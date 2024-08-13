import Input from "@/components/common/Input"
import { Table } from "@/components/common/table"
import React from "react"
import useAwardTableStyle from "../../Hooks/useAwardTableStyle"
import { AwardMaxPoint } from "../../style"

const AwardTable = () => {
  const {
    setTableTitleWidth,
    setExplaneWidth,
    explaneFontSize,
    contextFontSize,
    setExampleInput,
  } = useAwardTableStyle()
  return (
    <Table>
      <Table.Header>
        <Table.Tr height="31">
          <Table.Th rowspan={2} width={setTableTitleWidth(23.5)}>
            학년
          </Table.Th>
          <Table.Th rowspan={2} width={setExplaneWidth(96)}>
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
                style={contextFontSize()}
                notBorder
              >
                1학기
              </Table.Th>
              <Table.Th
                width="59"
                background="F9F9F9"
                color="000"
                style={contextFontSize()}
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
                style={contextFontSize()}
                notBorder
              >
                1학기
              </Table.Th>
              <Table.Th
                width="59"
                background="F9F9F9"
                color="000"
                style={contextFontSize()}
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
                style={contextFontSize()}
                notBorder
              >
                1학기
              </Table.Th>
              <Table.Th
                width="59"
                background="F9F9F9"
                color="000"
                style={contextFontSize()}
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
          <Table.Td background="F9F9F9" width={setTableTitleWidth(24.5)}>
            소프트웨어
            <br />
            활동
          </Table.Td>
          <Table.Td
            width={setExplaneWidth(95)}
            color="8B939C"
            style={explaneFontSize()}
          >
            교내 직업진로체험 프로그램 참여
            <br />
            (졸업 예정자는 2024.09.30.,
            <br />
            졸업생은 졸업일 기준)
          </Table.Td>
          <Table.Td width="354" colspan={6}>
            <Input type="text" style={setExampleInput()} />
          </Table.Td>
        </Table.Tr>
        <AwardMaxPoint>※ 최대 가산점은 +2점입니다.</AwardMaxPoint>
      </Table.Body>
    </Table>
  )
}

export default AwardTable
