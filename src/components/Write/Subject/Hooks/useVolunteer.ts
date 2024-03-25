import useChange from "@/hooks/useChange"

export interface ReturnVolunteer {
  grade1: string | undefined
  grade2: string | undefined
  grade3: string | undefined
  changeGrade1: React.ChangeEventHandler<HTMLInputElement>
  changeGrade2: React.ChangeEventHandler<HTMLInputElement>
  changeGrade3: React.ChangeEventHandler<HTMLInputElement>
}

const useVolunteer = (): ReturnVolunteer => {
  const [grade1, changeGrade1] = useChange()
  const [grade2, changeGrade2] = useChange()
  const [grade3, changeGrade3] = useChange()

  return { grade1, changeGrade1, grade2, changeGrade2, grade3, changeGrade3 }
}

export default useVolunteer
