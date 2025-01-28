import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { counterAtm, counterSelector } from "./store/atoms/counter";


export function RecoilSelector() {
    return <div>
        <RecoilRoot>
            <Buttons />
            <Counter />
            <IsEven />
        </RecoilRoot>
    </div>
}

function Buttons() {

    const setCount = useSetRecoilState(counterAtm);

    function increase() {
        setCount(c => c + 2);
    }

    function decrease() {
        setCount(c => c - 1);
    }

    return <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </div>
}

function Counter() {
    const count = useRecoilValue(counterAtm);

    return <div>
        {count}
    </div>
}

function IsEven() {
    const even = useRecoilValue(counterSelector);

    return <div>
        {even ? "Even" : "Odd"}
    </div>
}