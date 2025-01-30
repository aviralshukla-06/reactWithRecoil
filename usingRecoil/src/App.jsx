import { useState } from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtm } from './store/atoms/counter'


function App() {

  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  )
}

function Counter() {
  return 
    <div>
      <CurrentCount />
      <IncreaseCount />
      <DecreaseCount />
    </div>
  
}

function CurrentCount() {
  const count = useRecoilValue(counterAtm);

  return (
    <>
      {count}
    </>
  );
}

function IncreaseCount() {

  const setCount = useSetRecoilState(counterAtm);

  function increase() {
    setCount(c => c + 1);
  }

  return (
    <>
      <button onClick={increase}> Increase </button>
    </>
  )
}

function DecreaseCount() {

  const setCount = useSetRecoilState(counterAtm);

  function decrease() {
    setCount(c => c - 1);
  }

  return (
    <>
      <button onClick={decrease}> Decrease </button>
    </>
  )
}

export default App
