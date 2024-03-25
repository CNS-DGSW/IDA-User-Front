import type { LocalUnion } from "@/constants/Write/localKindConstant"
import type { MouseEventHandler } from "react"
import { useState } from "react"

const useLocal = () => {
  const [local, setLocal] = useState<LocalUnion>()
  const [detailLocal, setDetailLocal] = useState<string>()

  const changeLocal: MouseEventHandler<HTMLLIElement> = (e) => {
    setLocal((e.target as HTMLLIElement).innerText as LocalUnion)
    setDetailLocal(undefined)
  }
  const changeDetailLocal: MouseEventHandler<HTMLLIElement> = (e) => {
    setDetailLocal((e.target as HTMLLIElement).innerText)
  }
  return { local, detailLocal, changeLocal, changeDetailLocal }
}

export default useLocal
