import { useState } from "react"
import type { ChangeEventHandler } from "react"

const useChange = <
  T extends HTMLInputElement | HTMLTextAreaElement = HTMLInputElement,
>(): [string | undefined, ChangeEventHandler<T>] => {
  const [state, setState] = useState<string>("")
  const changeState: ChangeEventHandler<T> = (e) => {
    setState(e.target.value)
  }
  return [state, changeState]
}

export default useChange
