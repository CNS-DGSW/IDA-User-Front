import { scSearchModalAtom } from "@/atom/modalAtom"
import { useSetAtom } from "jotai"
import { useState } from "react"

const useScSearchModal = () => {
  const [searchName, setSearchName] = useState<string>("")
  const setScSearchModal = useSetAtom(scSearchModalAtom)

  const searchModal = () => {
    console.log(searchName)
  }

  const openModal = () => setScSearchModal(true)
  const cloasModal = () => setScSearchModal(false)

  return { searchName, setSearchName, searchModal, openModal, cloasModal }
}

export default useScSearchModal
