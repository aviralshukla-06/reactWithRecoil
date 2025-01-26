import { atom } from "recoil"

export const counterAtm = atom({
    default: 0,
    key: "count"
})