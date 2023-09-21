import type { Dispatch, SetStateAction } from "react"

interface IuseArray {
  state: any[]
  setState: Dispatch<SetStateAction<any[]>>
}
interface IChangeState {
  changeValue: any
  changeIndex: number
}
interface IAddState {
  addValue: any
}

const useArray = ({ state, setState }: IuseArray) => {
  const ChangeState = ({ changeValue, changeIndex }: IChangeState) => {
    const copyArr = [...state]
    copyArr[changeIndex] = changeValue
    setState([...copyArr])
  }
  const AddState = ({ addValue }: IAddState) => {
    const copyArr = [...state]
    copyArr.push(addValue)
    setState([...copyArr])
  }
  return { ChangeState, AddState }
}

export { useArray }
