import { useRef } from "react"
import type { ChangeEventHandler } from "react"
import * as S from "./style"
import Button from "../Button"
import useGetBrWidth from "@/hooks/useGetBrWidth"

interface FileUploaderProps {
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const FileUploader = ({ onChange }: FileUploaderProps) => {
  const hiddenFileInput = useRef<HTMLInputElement | null>(null)

  const {browserWidth} = useGetBrWidth()

  const handleClick = () => {
    hiddenFileInput.current?.click()
  }
  return (
    <>
      <Button
        size="lg"
        radius={browserWidth <= 500 ? 4 : 8}
        style={browserWidth <= 500 ? {width: "191px", height: "46px",  fontSize: "3.8vw", fontWeight: "600"} : { fontSize: "0.9vw", fontWeight: "600" }}
        onClick={handleClick}
      >
        사진 선택
      </Button>
      <S.HiddenFileInput
        type="file"
        onChange={onChange}
        accept="image/*"
        ref={hiddenFileInput}
      />
    </>
  )
}

export default FileUploader
