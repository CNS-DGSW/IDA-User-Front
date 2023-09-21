import Button from "@/components/common/Button"
import Input from "@/components/common/Input"
import Select from "@/components/common/Select"
import { Table } from "@/components/common/table"
import { grade, schoolYear, subjectNames } from "@/constants/Write/subject"
import React, { useState } from "react"
import { ButtonWrapper } from "./style"
import { useArray } from "../hooks/useArray"

interface IActiveSubjectHandler {
  year: string
  semester: number
}

const SubjectTable = () => {
  const [otherSubject, setOtherSubject] = useState<string[]>([])
  const addOtherSubject = () => setOtherSubject((prev) => [...prev, ""])
  const [activeSubject, setActiveSubject] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
  ])
  const ChangeArray = useArray({
    state: activeSubject,
    setState: setActiveSubject,
  })

  // const ChangeActiveSubject = () => {}

  const ActiveSubjectHandler = ({ year, semester }: IActiveSubjectHandler) => {
    switch (year) {
      case "1학년":
        if (semester === 1)
          ChangeArray({ changeIndex: 0, changeValue: !activeSubject[0] })
        else if (semester === 2)
          ChangeArray({ changeIndex: 1, changeValue: !activeSubject[1] })
        break
      case "2학년":
        if (semester === 1)
          ChangeArray({ changeIndex: 2, changeValue: !activeSubject[2] })
        else if (semester === 2)
          ChangeArray({ changeIndex: 3, changeValue: !activeSubject[3] })
        break
      case "3학년":
        if (semester === 1)
          ChangeArray({ changeIndex: 4, changeValue: !activeSubject[4] })
        else if (semester === 2)
          ChangeArray({ changeIndex: 5, changeValue: !activeSubject[5] })
        break
    }
  }

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
                      style={{
                        width: "73px",
                        height: "38px",
                        margin: "0 auto",
                      }}
                      radius={6}
                      onClick={() =>
                        ActiveSubjectHandler({ year, semester: 1 })
                      }
                    >
                      자유학기제
                    </Button>
                  </Table.Th>
                  <Table.Th width="84" background="fff">
                    <Button
                      color="primary"
                      style={{
                        width: "73px",
                        height: "38px",
                        margin: "0 auto",
                      }}
                      onClick={() => {
                        ActiveSubjectHandler({ year, semester: 2 })
                      }}
                      radius={6}
                    >
                      자유학기제
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
                      list={grade}
                      changeEvent={() => {}}
                      value={activeSubject[idx] ? "-" : "A"}
                      style={{
                        padding: "0 8px",
                        margin: "0 auto",
                        fontSize: "12px",
                      }}
                      key={idx}
                      direction={
                        arr.length + otherSubject.length - subjectNameIndex > 2
                          ? true
                          : false
                      }
                    />
                  </Table.Td>
                ))}
              <Table.Td width="70"></Table.Td>
            </Table.Tr>
          ))}
          {otherSubject.map((_, index) => (
            <Table.Tr height="60" key={index}>
              <Table.Td width="74">
                <Input
                  type="text"
                  width={56}
                  style={{
                    padding: "2px",
                    height: "30px",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                />
              </Table.Td>
              {Array(6)
                .fill(0)
                .map((_, idx) => (
                  <Table.Td width="84" key={idx}>
                    <Select
                      width={73}
                      list={grade}
                      changeEvent={() => {}}
                      value={activeSubject[idx] ? "-" : "A"}
                      style={{
                        padding: "0 8px",
                        margin: "0 auto",
                        fontSize: "12px",
                      }}
                      key={idx}
                      direction={otherSubject.length - index > 2 ? true : false}
                    />
                  </Table.Td>
                ))}
              <Table.Td width="70"></Table.Td>
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
          width={143}
          style={{ fontSize: "14px", padding: "0 12px 0 16px", height: "40px" }}
        />
        <Button
          radius={8}
          style={{ width: "109px", height: "40px" }}
          onClick={addOtherSubject}
        >
          과목추가
        </Button>
      </ButtonWrapper>
    </>
  )
}

export default SubjectTable
