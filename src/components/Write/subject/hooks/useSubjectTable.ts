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
        width: "26px",
        height: "20px",
        margin: "0 auto",
        fontSize: "5px",
      }
  }

  const setSelectStyle = () => {
    if (browserWidth > 500)
      return {
        padding: "0 8px",
        margin: "0 auto",
        fontSize: "12px",
      }
    else
      return {
        margin: "0 auto",
        fontSize: "10px",
        width: "26px",
        maxWidth: "26px",
        padding: "0 0.125rem",
        height: "20px",
      }
  }

  const setNewSubjectBtnStyle = () => {
    if (browserWidth > 500) return { width: "109px", height: "40px" }
    else return { width: "75px", height: "30px", fontSize: "10px" }
  }

  const setScoreChangeStyle = () => {
    if (browserWidth > 500)
      return { fontSize: "14px", padding: "0 12px 0 16px", height: "40px" }
    else
      return {
        fontSize: "10px",
        padding: "0 12px 0 16px",
        height: "30px",
        width: "120px",
      }
  }

  const setScoreListStyle = () => {
    if (browserWidth > 500) return "14px"
    else return "6px"
  }

  const setNewSubject = (): CSSProperties => {
    if (browserWidth > 500)
      return {
        padding: "2px",
        height: "30px",
        width: "56px",
        margin: "0 auto",
        textAlign: "center",
      }
    else
      return {
        padding: "2px",
        height: "10px",
        margin: "0 auto",
        textAlign: "center",
        width: "15px",
        fontSize: "4px",
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
