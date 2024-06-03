import React, { type Dispatch, type SetStateAction } from "react"
import DaumPostcode from "react-daum-postcode"
import { DaumModalWrapper } from "./style"

interface IDaumPostCode {
  onCompletePost: (data: any) => void
  modalState: boolean
  setModalState: Dispatch<SetStateAction<boolean>>
}

const postCodeStyle = {
  width: "400px",
}

const DaumPostCode = ({
  onCompletePost,
  modalState,
  setModalState,
}: IDaumPostCode) => {
  if (!modalState) return <></>

  return (
    <DaumModalWrapper onClick={() => setModalState(false)}>
      <DaumPostcode
        style={postCodeStyle}
        onComplete={onCompletePost}
      ></DaumPostcode>
    </DaumModalWrapper>
  )
}

export default DaumPostCode
