import Card from "@/components/common/Card"
import * as S from "./style"
import FileUploader from "@/components/common/FileUploader"
import { useState } from "react"
import type { ChangeEvent } from "react"
import Image from "next/image"

const WriteIdPhoto = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setSelectedImage(imageUrl)
    }
  }

  return (
    <Card>
      <S.WriteIdPhotoLayout>
        <S.WriteIdPhotoPreivewBox>
          {selectedImage ? (
            <Image
              src={selectedImage}
              width={288}
              height={384}
              alt="증명사진"
            />
          ) : (
            "미리보기"
          )}
        </S.WriteIdPhotoPreivewBox>
        <FileUploader onChange={handleChange} />
        <S.WriteIdPhotoNote>
          * 2MB 이내의 png, jpg, jpeg, gif 사진을 등록해 주세요.
        </S.WriteIdPhotoNote>
      </S.WriteIdPhotoLayout>
    </Card>
  )
}

export default WriteIdPhoto
