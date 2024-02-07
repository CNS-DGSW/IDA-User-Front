import { scSearchModalAtom } from "@/atom/modalAtom"
import { useState } from "react"
import { useSetRecoilState } from "recoil"

const useScSearchModal = () => {
  const [searchName, setSearchName] = useState<string>("")
  const setScSearchModal = useSetRecoilState(scSearchModalAtom)

  const searchModal = () => {
    console.log(searchName)
  }

  const openModal = () => setScSearchModal(true)
  const cloasModal = () => setScSearchModal(false)

  return { searchName, setSearchName, searchModal, openModal, cloasModal }
}

export default useScSearchModal
