import type { ChangeEventHandler } from "react"
import { useState, useEffect } from "react"

const usePhone = <
  T extends HTMLInputElement | HTMLTextAreaElement = HTMLInputElement,
>(): [string | undefined, ChangeEventHandler<T>] => {
  const [state, setState] = useState<string>("")
  useEffect(() => {
    setState((prev) =>
      prev
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`),
    )
  }, [state])

  const changeEvent: ChangeEventHandler<T> = (e) => {
    const regex = /^[0-9\b -]{0,13}$/
    if (regex.test(e.target.value)) {
      setState(e.target.value)
    }
  }
  return [state, changeEvent]
}

export default usePhone
