import { atom } from "recoil"

export const currentScheduleState = atom({
  key: "currentScheduleState",
  default: "전체 보기",
})
