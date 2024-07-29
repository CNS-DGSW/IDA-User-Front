import { type ChangeEvent, useEffect, useState } from "react"
import { useAtom } from "jotai"
import { idPhotoAtom } from "@/atom/Apply/applyAtom"
import { useFixPhoto, useGetPhoto } from "./queries/useIdPhotoQuery"

const useIdPhoto = () => {
  const [selectedImage, setSelectedImage] = useAtom(idPhotoAtom)
  const [previewPhoto, setPreviewPhoto] = useState<string | null>(null)
  useEffect(() => {
    if (selectedImage) setPreviewPhoto(URL.createObjectURL(selectedImage))
  }, [selectedImage])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedImage(file)
    }
  }

  const { isLoading, error, data } = useGetPhoto()

  const setPhoto = () => {
    const formData = new FormData()
    if (selectedImage) {
      formData.append("photo", selectedImage)
      if (formData) {
        useFixPhoto(formData)
          .fixUserPhoto()
          .then((e) => console.log(e))
          .catch((e) => console.log(e))
      }
    }
  }

  return {
    selectedImage,
    previewPhoto,
    setPreviewPhoto,
    isLoading,
    error,
    data,
    setPhoto,
    handleChange,
  }
}

export default useIdPhoto
