import useGetBrWidth from "@/hooks/useGetBrWidth"
import { type CSSProperties, useState } from "react"

const useSubjectTable = () => {
  const { browserWidth } = useGetBrWidth()
  const [sum] = useState<number>(0)

  const setFreeSemesterStyle = () => {
    if (browserWidth > 500)
      return {
        width: "73px",
        height: "38px",
        margin: "0 auto",
      }
    else
      return {
        width: "1.625rem",
        height: "1.25rem",
        margin: "0 auto",
        fontSize: "0.25rem",
      }
  }

  const setSelectStyle = () => {
    if (browserWidth > 500)
      return {
        padding: "0 0.5rem",
        margin: "0 auto",
        fontSize: "0.75rem",
      }
    else
      return {
        margin: "0 auto",
        fontSize: "0.625rem",
        width: "1.625rem",
        maxWidth: "1.625rem",
        padding: "0 0.125rem",
        height: "1.25rem",
      }
  }

  const setNewSubjectBtnStyle = () => {
    if (browserWidth > 500) return { width: "109px", height: "40px" }
    else return { width: "4.6875rem", height: "1.875rem", fontSize: "0.625rem" }
  }

  const setScoreChangeStyle = () => {
    if (browserWidth > 500)
      return {
        fontSize: "0.875rem",
        padding: "0 0.75rem 0 1rem",
        height: "2.5rem",
      }
    else
      return {
        fontSize: "0.625rem",
        padding: "0 0.75rem 0 1rem",
        height: "1.875rem",
        width: "7.5rem",
      }
  }

  const setScoreListStyle = () => {
    if (browserWidth > 500) return "0.875rem"
    else return "0.375rem"
  }

  const setNewSubject = (): CSSProperties => {
    if (browserWidth > 500)
      return {
        padding: "0.125rem",
        height: "1.875rem",
        width: "3.5rem",
        margin: "0 auto",
        textAlign: "center",
      }
    else
      return {
        padding: "0.125rem",
        height: "0.625rem",
        margin: "0 auto",
        textAlign: "center",
        width: "15px",
        fontSize: "0.25rem",
      }
  }

  const setNewSubjectInputWrapSize = () => {
    if (browserWidth > 500) return "74"
    else return "28"
  }

  // const setScore = ({
  //   subjectIdx,
  //   semesterIdx,
  //   value,
  // }: {
  //   subjectIdx: number
  //   semesterIdx: number
  //   value: string
  // }) => {
  //   //setState((prev)=>{
  //   // const cpList = [...prev];
  //   // cpList[subjectIdx][semesterIdx] = value;
  //   // return cpList;
  //   //})
  // }

  // const DeletNewSubject = (idx: number) => {}

  return {
    sum,
    setFreeSemesterStyle,
    setSelectStyle,
    setNewSubjectBtnStyle,
    setScoreChangeStyle,
    setScoreListStyle,
    setNewSubject,
    setNewSubjectInputWrapSize,
  }
}

export default useSubjectTable
