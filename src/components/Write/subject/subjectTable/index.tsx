import Button from "@/components/common/Button"
import Select from "@/components/common/Select"
import { Table } from "@/components/common/table"
import { grade, schoolYear, subjectNames } from "@/constants/Write/subject"
import React, { useLayoutEffect, useState } from "react"
import { ButtonWrapper } from "./style"
import { useArray } from "../hooks/useArray"
import {
  type IInitValue,
  useSetInitValue,
  useOnChangeValue,
  useAddValue,
  useFreeSemester,
} from "../hooks/useSubjectValue"
import { UsePrompt } from "../prompt"

interface IActiveSubjectHandler {
  year: string
  semester: number
}

const SubjectTable = () => {
  const [addSubjectValue, setAddSubjectValue] = useState<string>("")
  const [activeAddSubject, setActiveAddSubject] = useState<boolean>(false)
  const [otherSubject, setOtherSubject] = useState<string[]>([])
  const [subjectScoreValue, setSubjectScoreValue] = useState<IInitValue[]>([])
  const [activeSubject, setActiveSubject] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  const activeArray = useArray({
    state: activeSubject,
    setState: setActiveSubject,
  })

  useLayoutEffect(() => {
    useSetInitValue({
      setState: setSubjectScoreValue,
    })
  }, [])

  const addOtherSubject = () => {
    if (subjectNames.find((e) => e === addSubjectValue)) {
      alert("과목이 이미 추가되있습니다.")
    } else {
      useAddValue({
        subject: addSubjectValue,
        state: subjectScoreValue,
        setState: setSubjectScoreValue,
      })
      setOtherSubject((prev) => [...prev, addSubjectValue])
      setAddSubjectValue("")
      setActiveAddSubject(false)
    }
  }

  const ChangeActiveSubject = (index: number) => {
    useFreeSemester({
      semesterIndex: index,
      state: subjectScoreValue,
      setState: setSubjectScoreValue,
    })
    activeArray.ChangeState({
      changeIndex: index,
      changeValue: !activeSubject[index],
    })
  }

  const ActiveSubjectHandler = ({ year, semester }: IActiveSubjectHandler) => {
    console.log(subjectScoreValue)

    switch (year) {
      case "1학년":
        if (semester === 1) ChangeActiveSubject(0)
        else if (semester === 2) ChangeActiveSubject(1)
        break
      case "2학년":
        if (semester === 1) ChangeActiveSubject(2)
        else if (semester === 2) ChangeActiveSubject(3)
        break
      case "3학년":
        if (semester === 1) ChangeActiveSubject(4)
        else if (semester === 2) ChangeActiveSubject(5)
        break
    }
  }

  const SetBackgroundColor = ({
    year,
    semester,
  }: IActiveSubjectHandler): number | undefined => {
    switch (year.substring(0, 1)) {
      case "1":
        if (semester === 1) return 0
        if (semester === 2) return 1
        break
      case "2":
        if (semester === 1) return 2
        if (semester === 2) return 3
        break
      case "3":
        if (semester === 1) return 4
        if (semester === 2) return 5
        break
    }
  }

  return (
    <>
      {activeAddSubject && (
        <UsePrompt
          addFunc={addOtherSubject}
          value={addSubjectValue}
          setValue={setAddSubjectValue}
          setActive={setActiveAddSubject}
        />
      )}
      <Table customStyle={{ marginBottom: "18px" }}>
        <Table.Header>
          <Table.Tr height="162">
            <Table.Th width="74">과목</Table.Th>
            {schoolYear.map((year) => {
              const activeIndex: number[] | null = [
                SetBackgroundColor({
                  year,
                  semester: 1,
                }) ?? 0,
                SetBackgroundColor({
                  year,
                  semester: 2,
                }) ?? 0,
              ]
              return (
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
                        color={
                          activeSubject[activeIndex[0]] ? "unable" : "primary"
                        }
                        style={{
                          width: "73px",
                          height: "38px",
                          margin: "0 auto",
                        }}
                        radius={6}
                        onClick={() => {
                          ActiveSubjectHandler({ year, semester: 1 })
                        }}
                      >
                        자유학기제
                      </Button>
                    </Table.Th>
                    <Table.Th width="84" background="fff">
                      <Button
                        color={
                          activeSubject[activeIndex[1]] ? "unable" : "primary"
                        }
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
              )
            })}
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
                      changeEvent={(e: any) => {
                        console.log(idx + 6 * subjectNameIndex)

                        useOnChangeValue({
                          changeValue: e.target.innerText,
                          index: idx + 6 * subjectNameIndex,
                          state: subjectScoreValue,
                          setState: setSubjectScoreValue,
                        })
                      }}
                      value={
                        activeSubject[idx]
                          ? "-"
                          : subjectScoreValue[idx + 6 * subjectNameIndex]?.score
                      }
                      style={{
                        padding: "0 8px",
                        margin: "0 auto",
                        fontSize: "12px",
                        backgroundColor: `${
                          activeSubject[idx] ? "#F2F3F5" : "white"
                        }`,
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
          {otherSubject.map((newSubjectName, index) => (
            <Table.Tr height="60" key={index}>
              <Table.Td width="74">{newSubjectName}</Table.Td>
              {Array(6)
                .fill(0)
                .map((_, idx) => (
                  <Table.Td width="84" key={idx}>
                    <Select
                      width={73}
                      list={grade}
                      changeEvent={(e: any) =>
                        useOnChangeValue({
                          changeValue: e.target.innerText,
                          index: idx + 6 * index + 72,
                          state: subjectScoreValue,
                          setState: setSubjectScoreValue,
                        })
                      }
                      value={
                        activeSubject[idx]
                          ? "-"
                          : subjectScoreValue[idx + 6 * index + 72]?.score
                      }
                      style={{
                        padding: "0 8px",
                        margin: "0 auto",
                        fontSize: "12px",
                        backgroundColor: `${
                          activeSubject[idx] ? "#F2F3F5" : "white"
                        }`,
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
          onClick={() => setActiveAddSubject(true)}
        >
          과목추가
        </Button>
      </ButtonWrapper>
    </>
  )
}

export default SubjectTable
