import { useRecoilState } from "recoil"
import Api from "../API"
import { useEffect, useState } from "react"
import { idPhotoAtom } from "@/atom/apply/applyAtom"

const useIdPhoto = () => {
  const [selectedImage, setSelectedImage] = useRecoilState(idPhotoAtom)
  const [previewPhoto, setPreviewPhoto] = useState<string | null>(null)

  useEffect(() => {
    if (selectedImage) setPreviewPhoto(URL.createObjectURL(selectedImage))
  }, [selectedImage])

  const setPhoto = () => {
    const formData = new FormData()
    if (selectedImage) {
      formData.append("photo", selectedImage)
      if (formData) {
        // console.log(formData.keys(), formData.values())
        // for (let key of formData.values()) console.log(key)
        fixUserPhoto(formData)
          .then((e) => console.log(e))
          .catch((e) => console.log(e))
      }
    }
  }

  const getUserPhoto = async () => {
    const response = await Api.get("/applicant/photo")
    return response
  }

  const fixUserPhoto = async (formData: FormData) => {
    const response = await Api.put("/applicant/photo", formData)
    return response
  }

  return {
    selectedImage,
    setSelectedImage,
    previewPhoto,
    setPreviewPhoto,
    getUserPhoto,
    fixUserPhoto,
    setPhoto,
  }
}

export default useIdPhoto
