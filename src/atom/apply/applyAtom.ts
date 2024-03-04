import { atom } from "recoil"
import type * as T from "./types"

export const pageAtom = atom<number>({
  key: "pageAtom",
  default: 0,
})

export const personalInfoAtom = atom<T.PersonalInfo>({
  key: "personalInfoAtom",
  default: {
    name: "",
    birth: "",
    phoneNumber: "",
    gender: "",
  },
})

export const guardianInfo = atom<T.ParentInfo>({
  key: "guardianInfo",
  default: {
    name: "",
    relation: "",
    birth: "",
    telephone: "",
    streetAddress: "",
    detailAddress: "",
    zipCode: 0,
  },
})

export const idPhotoAtom = atom<File | null>({
  key: "idPhotoAtom",
  default: null,
})