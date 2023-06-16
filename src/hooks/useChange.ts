import { ChangeEventHandler, useState } from "react"

const useChange = (): [
  string | undefined,
  ChangeEventHandler<HTMLInputElement>,
] => {
  const [state, setState] = useState<string>()
  const changeState: ChangeEventHandler<HTMLInputElement> = (e) => {
    setState(e.target.value)
  }
  return [state, changeState]
}

export default useChange
