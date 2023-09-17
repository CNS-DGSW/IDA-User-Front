import { useRef } from "react"
import type { ChangeEventHandler } from "react"
import * as S from "./style"
import Button from "../Button"

interface FileUploaderProps {
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const FileUploader = ({ onChange }: FileUploaderProps) => {
  const hiddenFileInput = useRef<HTMLInputElement | null>(null)

  const handleClick = () => {
    hiddenFileInput.current?.click()
  }
  return (
    <>
      <Button
        size="lg"
        radius={8}
        style={{ fontSize: "18", fontWeight: "600" }}
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
