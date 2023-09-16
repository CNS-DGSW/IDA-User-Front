import { atom } from "recoil"

export const currentScheduleState = atom<string>({
  key: "currentScheduleState",
  default: "전체 보기",
})
