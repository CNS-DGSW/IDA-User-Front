import Checkbox from "@/components/common/Checkbox"
import Input from "@/components/common/Input"
import { Table } from "@/components/common/table"
import React from "react"
import useAwardTableStyle from "../Hooks/useAwardTableStyle"

const AwardTable = () => {
  const {
    setTableTitleWidth,
    setTableCheckBoxSize,
    setTableCheckBoxTableWidth,
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
          <Table.Td background="F9F9F9" width={setTableTitleWidth(50)}>
            리더쉽
          </Table.Td>
          <Table.Td width="186" color="8B939C" style={explaneFontSize()}>
            최소 한 학기 이상 학생회 임원 ( 전교 학생회장, 전교
            학생부회장,학급반장 )
          </Table.Td>
          <Table.Td width={setTableCheckBoxTableWidth(40)}>
            <Checkbox
              checked={false}
              name="leader"
              width={setTableCheckBoxSize()}
              height={setTableCheckBoxSize()}
            />
          </Table.Td>
          <Table.Td width={setTableCheckBoxTableWidth(40)}>
            <Checkbox
              checked={false}
              name="leader"
              width={setTableCheckBoxSize()}
              height={setTableCheckBoxSize()}
            />
          </Table.Td>
          <Table.Td width={setTableCheckBoxTableWidth(40)}>
            <Checkbox
              checked={false}
              name="leader"
              width={setTableCheckBoxSize()}
              height={setTableCheckBoxSize()}
            />
          </Table.Td>
          <Table.Td width={setTableCheckBoxTableWidth(40)}>
            <Checkbox
              checked={false}
              name="leader"
              width={setTableCheckBoxSize()}
              height={setTableCheckBoxSize()}
            />
          </Table.Td>
          <Table.Td width={setTableCheckBoxTableWidth(40)}>
            <Checkbox
              checked={false}
              name="leader"
              width={setTableCheckBoxSize()}
              height={setTableCheckBoxSize()}
            />
          </Table.Td>
          <Table.Td width={setTableCheckBoxTableWidth(40)}>
            <Checkbox
              checked={false}
              name="leader"
              width={setTableCheckBoxSize()}
              height={setTableCheckBoxSize()}
            />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td background="F9F9F9" width={setTableTitleWidth(24.5)}>
            모범상
          </Table.Td>
          <Table.Td
            width={setExplaneWidth(95)}
            color="8B939C"
            style={explaneFontSize()}
          >
            재학 중 교내 모범상을 수상
            <br />( 모범, 선행, 효행, 공로, 노력 등 )
          </Table.Td>
          <Table.Td width="354" colspan={6}>
            <Input type="text" style={setExampleInput()} />
          </Table.Td>
        </Table.Tr>
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
      </Table.Body>
    </Table>
  )
}

export default AwardTable
