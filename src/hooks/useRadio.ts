import { useState } from "react"
import type { MouseEventHandler } from "react"

const useRadio = <T extends string>(): [
  T | undefined,
  MouseEventHandler<HTMLInputElement>,
] => {
  const [state, setState] = useState<T>()

  const changeState: MouseEventHandler<HTMLInputElement> = ({ target }) => {
    setState((target as HTMLInputElement).value as T)
  }

  return [state, changeState]
}

export default useRadio
