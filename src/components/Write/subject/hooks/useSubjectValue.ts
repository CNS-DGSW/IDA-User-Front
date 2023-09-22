import { schoolYear, subjectNames } from "@/constants/Write/subject"
import type { Dispatch, SetStateAction } from "react"

export interface IInitValue {
  year: string
  semester: string
  subject: string
  score: string
}
interface ISetInitProps {
  setState: Dispatch<SetStateAction<IInitValue[]>>
}
interface IOnChangeProps {
  changeValue: string
  index: number
  state: IInitValue[]
  setState: Dispatch<SetStateAction<IInitValue[]>>
}
interface IAddProps {
  subject: string
  state: IInitValue[]
  setState: Dispatch<SetStateAction<IInitValue[]>>
}
interface IFreeSemesterProps {
  semesterIndex: number
  state: IInitValue[]
  setState: Dispatch<SetStateAction<IInitValue[]>>
}

const useSetInitValue = ({ setState }: ISetInitProps) => {
  const copyArr: IInitValue[] = []
  subjectNames.forEach((subjectValue) =>
    schoolYear.forEach((yearValue) =>
      new Array(2).fill(0).forEach((_, semester) => {
        const initValue: IInitValue = {
          year: yearValue,
          semester: `${semester}`,
          subject: subjectValue,
          score: "-",
        }
        copyArr.push(initValue)
      }),
    ),
  )
  setState([...copyArr])
}

const useAddValue = ({ subject, state, setState }: IAddProps) => {
  const copyArr: IInitValue[] = [...state]
  schoolYear.forEach((yearValue) =>
    new Array(2).fill(0).forEach((_, semester) => {
      const initValue: IInitValue = {
        year: yearValue,
        semester: `${semester}`,
        subject,
        score: "-",
      }
      copyArr.push(initValue)
    }),
  )
  setState([...copyArr])
}

const useFreeSemester = ({
  semesterIndex,
  state,
  setState,
}: IFreeSemesterProps) => {
  const copyArr: IInitValue[] = [...state]
  copyArr.forEach((value, index) => {
    if ((index + 1) % 6 === semesterIndex + 1) value.score = "-"
  })
  setState([...copyArr])
}

const useOnChangeValue = ({
  changeValue,
  index,
  state,
  setState,
}: IOnChangeProps) => {
  const copyArr: IInitValue[] = [...state]
  copyArr[index].score = changeValue
  setState([...copyArr])
}

export { useSetInitValue, useOnChangeValue, useAddValue, useFreeSemester }
