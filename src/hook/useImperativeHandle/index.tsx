import { useImperativeHandle, forwardRef, useRef } from "react";

function Father () {
  const inputRef = useRef(null);

  const onClick = () => {
    (inputRef as any).current.focus()
    console.log('inputRef---', inputRef)
  }

  return <>
    <button onClick={onClick}>Father</button>
    <SonWrapper ref={inputRef} />
  </> 
}

const SonWrapper = forwardRef(Son);

function Son (props: any, ref: any) {

  const mouseIn = () => {
    console.log('useImperativeHandle---mouseIn')
  }

  const mouseOut = () => {
    console.log('useImperativeHandle---mouseOut')
  }

  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log('useImperativeHandle---focus')
    }, 
    mouseOut
  }));

  return <button>Son</button>;
}

export default Father;