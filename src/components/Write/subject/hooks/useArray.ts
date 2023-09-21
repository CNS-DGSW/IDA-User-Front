import React, { Dispatch, SetStateAction } from "react"

interface IuseArray {
  state: any[]
  setState: Dispatch<SetStateAction<any[]>>
}
interface IChangeState {
  changeValue: any
  changeIndex: number
}

const useArray = ({ state, setState }: IuseArray) => {
  const ChangeState = ({ changeValue, changeIndex }: IChangeState) => {
    let copyArr = [...state]
    copyArr[changeIndex] = changeValue
    setState([...copyArr])
  }
  return ChangeState
}

export { useArray }
