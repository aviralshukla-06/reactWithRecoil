import { atom, selector } from "recoil" ;

export const counterAtm = atom({
    default: 0,
    key: "count"
})

export const counterSelector = selector({
    key: "isEven",
    get: function ({ get }) {
        const currCt = get(counterAtm);
        const isEven = (currCt % 2 == 0);

        return isEven;
    }
})
