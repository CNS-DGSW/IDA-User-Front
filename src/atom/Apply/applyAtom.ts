import type * as T from "@/types/Write/write"
import { atom } from "jotai"

export const pageAtom = atom<number>(0)

export const personalInfoAtom = atom<T.PersonalInfo>({
  name: "",
  birth: "",
  phoneNumber: "",
  gender: "MALE",
})

export const guardianInfo = atom<T.ParentInfo>({
  name: "",
  relation: "추가 필요",
  birth: "",
  telephone: "",
  streetAddress: "",
  detailAddress: "",
  zipCode: 0,
})

export const idPhotoAtom = atom<File | null>(null)
