import Checkbox from "@/components/Common/Checkbox"
import Input from "@/components/Common/Input"
import { Table } from "@/components/Common/table"
import React, { useState } from "react"
import type { ChangeEvent } from "react"

interface SemesterThProps {
  text: string
}

interface GradeHeaderProps {
  grade: string
}

const SemesterTh: React.FC<SemesterThProps> = ({ text }) => (
  <Table.Th
    width="59"
    background="F9F9F9"
    color="000"
    style={{ fontSize: "12px", fontStyle: "normal" }}
    notBorder
  >
    {text}
  </Table.Th>
)

const GradeHeader: React.FC<GradeHeaderProps> = ({ grade }) => (
  <Table.Th width="118" colspan={2}>
    <Table.Tr height="31">
      <Table.Th width="118" colspan={2} notBorder>
        {grade}
      </Table.Th>
    </Table.Tr>
    <Table.Tr height="31">
      <SemesterTh text="1학기" />
      <SemesterTh text="2학기" />
    </Table.Tr>
  </Table.Th>
)

const AwardTable: React.FC = () => {
  const [checkedStates, setCheckedStates] = useState<boolean[]>(
    Array(6).fill(false),
  )
  const [awardInput, setAwardInput] = useState<string>("")

  const handleCheckboxChange = (index: number) => {
    const updatedStates = [...checkedStates]
    updatedStates[index] = !updatedStates[index]
    setCheckedStates(updatedStates)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAwardInput(event.target.value)
  }

  return (
    <Table>
      <Table.Header>
        <Table.Tr height="31">
          <Table.Th rowspan={2}>학년</Table.Th>
          <Table.Th rowspan={2} width="186">
            설명
          </Table.Th>
          <GradeHeader grade="1학년" />
          <GradeHeader grade="2학년" />
          <GradeHeader grade="3학년" />
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
            최소 한 학기 이상 학생회 임원 ( 전교 학생회장, 전교 학생부회장,
            학급반장 )
          </Table.Td>
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <Table.Td key={index} width="59">
                <Checkbox
                  checked={checkedStates[index]}
                  onChange={() => handleCheckboxChange(index)}
                  name={`leader-${index}`}
                />
              </Table.Td>
            ))}
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
              value={awardInput}
              onChange={handleInputChange}
              style={{ margin: "0 auto", height: "36px", textAlign: "center" }}
            />
          </Table.Td>
        </Table.Tr>
      </Table.Body>
    </Table>
  )
}

export default AwardTable
