import { useImperativeHandle, forwardRef, useRef } from "react";

function Father () {
  const sonRef = useRef(null);

  const onClick = () => {
    (sonRef as any).current.focus()
    console.log('sonRef---', sonRef)
  }

  return <>
    <button onClick={onClick}>Father</button>
    <SonWrapper ref={sonRef} />
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
    mouseIn,
    mouseOut
  }));

  return <button>Son</button>;
}

export default Father;