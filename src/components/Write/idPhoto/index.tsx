import Card from "@/components/common/Card"
import * as S from "./style"
import FileUploader from "@/components/common/FileUploader"
import { useEffect } from "react"
import Image from "next/image"
import useGetBrWidth from "@/hooks/useGetBrWidth"
import useIdPhoto from "./useIdPhoto"

const WriteIdPhoto = () => {
  const {
    selectedImage,
    previewPhoto,
    setPreviewPhoto,
    isLoading,
    error,
    data,
    handleChange,
  } = useIdPhoto()
  const { browserWidth } = useGetBrWidth()

  useEffect(() => {
    setPreviewPhoto(data)
  }, [data])

  if (isLoading) return <div>Loading!!</div>
  if (error) return <div>Error!!</div>

  return (
    <Card>
      <S.WriteIdPhotoLayout>
        <S.WriteIdPhotoPreivewBox>
          {selectedImage ?? previewPhoto ? (
            <Image
              src={previewPhoto ? previewPhoto : ""}
              width={browserWidth <= 500 ? 191 : 288}
              height={browserWidth <= 500 ? 262 : 384}
              alt="증명사진"
            />
          ) : (
            "미리보기"
          )}
        </S.WriteIdPhotoPreivewBox>
        <FileUploader onChange={handleChange} />
        <S.WriteIdPhotoNote>
          * 2MB 이내의 png, jpg, jpeg, gif
          <br /> 사진을 등록해 주세요.
        </S.WriteIdPhotoNote>
      </S.WriteIdPhotoLayout>
      {/* <button onClick={() => console.log(previewPhoto)}>fdfdf</button> */}
    </Card>
  )
}

export default WriteIdPhoto
