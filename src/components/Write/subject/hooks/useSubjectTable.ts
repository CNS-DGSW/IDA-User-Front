import { useState } from "react"

const useSubjectTable = () => {
  const [sum] = useState<number>(0)
  return { sum }
}

export default useSubjectTable
