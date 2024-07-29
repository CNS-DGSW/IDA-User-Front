import Button from "@/components/common/Button"
import Input from "@/components/common/Input"
import Select from "@/components/common/Select"
import { Table } from "@/components/common/table"
import { grade, schoolYear, subjectNames } from "@/constants/Write/subject"
import React, { useState } from "react"
import { ButtonWrapper, DeleteBtn } from "./style"
import useSubjectTable from "../../Hooks/useSubjectTable"
import useGetBrWidth from "@/hooks/useGetBrWidth"

const SubjectTable = () => {
  const [otherSubject, setOtherSubject] = useState<string[]>([])
  const addOtherSubject = () => setOtherSubject((prev) => [...prev, ""])
  const {
    setFreeSemesterStyle,
    setSelectStyle,
    setNewSubjectBtnStyle,
    setScoreChangeStyle,
    setScoreListStyle,
    setNewSubject,
    setNewSubjectInputWrapSize,
  } = useSubjectTable()
  const { browserWidth } = useGetBrWidth()

  return (
    <>
      <Table customStyle={{ marginBottom: "18px" }}>
        <Table.Header>
          <Table.Tr height="162">
            <Table.Th width="74">과목</Table.Th>
            {schoolYear.map((year) => (
              <Table.Th width="168" notBorder key={year}>
                <Table.Tr>
                  <Table.Th width="168">{year}</Table.Th>
                </Table.Tr>
                <Table.Tr>
                  <Table.Th width="84" background="F9F9F9" color="000">
                    1학기
                  </Table.Th>
                  <Table.Th width="84" background="F9F9F9" color="000">
                    2학기
                  </Table.Th>
                </Table.Tr>
                <Table.Tr>
                  <Table.Th width="84" background="fff">
                    <Button
                      color="primary"
                      style={setFreeSemesterStyle()}
                      radius={6}
                    >
                      자유{browserWidth <= 500 && <br />}학기제
                    </Button>
                  </Table.Th>
                  <Table.Th width="84" background="fff">
                    <Button
                      color="primary"
                      style={setFreeSemesterStyle()}
                      radius={6}
                    >
                      자유{browserWidth <= 500 && <br />}학기제
                    </Button>
                  </Table.Th>
                </Table.Tr>
              </Table.Th>
            ))}
            <Table.Th width="70">삭제</Table.Th>
          </Table.Tr>
        </Table.Header>
        <Table.Body>
          {subjectNames.map((subjectName, subjectNameIndex, arr) => (
            <Table.Tr height="60" key={subjectNameIndex}>
              <Table.Td width="74">{subjectName}</Table.Td>
              {Array(6)
                .fill(0)
                .map((_, idx) => (
                  <Table.Td width="84" key={idx}>
                    <Select
                      width={73}
                      moblieIconSize="10"
                      list={grade}
                      changeEvent={() => {}}
                      value="-"
                      style={setSelectStyle()}
                      key={idx}
                      direction={
                        arr.length + otherSubject.length - subjectNameIndex > 2
                          ? true
                          : false
                      }
                    />
                  </Table.Td>
                ))}
              <Table.Td width="70">
                <div style={{ width: "6px" }}></div>
              </Table.Td>
            </Table.Tr>
          ))}
          {otherSubject.map((_, index) => (
            <Table.Tr height="60" key={index}>
              <Table.Td width={setNewSubjectInputWrapSize()}>
                <Input type="text" style={setNewSubject()} />
              </Table.Td>
              {Array(6)
                .fill(0)
                .map((_, idx) => (
                  <Table.Td width="84" key={idx}>
                    <Select
                      width={73}
                      list={grade}
                      moblieIconSize="10"
                      changeEvent={() => {}}
                      value="-"
                      style={setSelectStyle()}
                      key={idx}
                      direction={otherSubject.length - index > 2 ? true : false}
                    />
                  </Table.Td>
                ))}
              <Table.Td width="70">
                <DeleteBtn>삭제</DeleteBtn>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Body>
      </Table>
      <ButtonWrapper>
        <Select
          list={[
            "A로 전체 바꾸기",
            "B로 전체 바꾸기",
            "C로 전체 바꾸기",
            "D로 전체 바꾸기",
            "E로 전체 바꾸기",
          ]}
          changeEvent={() => {}}
          placeholder="A로 전체 바꾸기"
          colors="1485EE"
          moblieIconSize="20"
          listFontSize={setScoreListStyle()}
          width={143}
          style={setScoreChangeStyle()}
        />
        <Button
          radius={8}
          style={setNewSubjectBtnStyle()}
          onClick={addOtherSubject}
        >
          과목추가
        </Button>
      </ButtonWrapper>
    </>
  )
}

export default SubjectTable
