import { useState } from "react";

const useNumberList = (initialArray: number[]) => {
  // TODO
  // refer readme.md for what to return

  const [list ,setList ] = useState(initialArray)
  
  const appendStart = (item: number = 0) => {

    let x = list.unshift(item)
    
  }
  const appendEnd = (item: number = 0) => {
    let x = list.push(item)
  }
  const popStart = () => {
    let x = list.shift()
  }
  const popEnd = () => {
   let x = list.pop()
  }
  const clear = () => {
    list.splice(0, list.length)
  }
  const reset = (item: number = 0) => {
    let x = item = 0
  }


  return { list, appendStart, appendEnd, popStart, popEnd, clear, reset }

};

export default useNumberList;
