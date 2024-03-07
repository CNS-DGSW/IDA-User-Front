import { useRecoilState } from "recoil"
import Api from "../API"
import { type ChangeEvent, useEffect, useState } from "react"
import { idPhotoAtom } from "@/atom/apply/applyAtom"
import { useMutation, useQuery } from "react-query"

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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedImage(file)
    }
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["photoData"],
    queryFn: async () => {
      const response = await Api.get("/applicant/photo")
      return response.data
    },
  })

  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await Api.put("/applicant/photo", { ...formData })
      return response.data
    },
  })

  const fixUserPhoto = async (formData: FormData) => {
    try {
      await mutation.mutateAsync(formData)
    } catch (error: any) {
      console.log("error!")
      console.log(error)
    }
  }

  return {
    selectedImage,
    previewPhoto,
    setPreviewPhoto,
    isLoading,
    error,
    data,
    fixUserPhoto,
    setPhoto,
    handleChange,
  }
}

export default useIdPhoto
