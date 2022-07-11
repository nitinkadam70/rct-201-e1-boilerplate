import React, { useState } from "react";

type List2Props = {
  // TODO
  list: any;
  label: string;
  appendStart: Function;
  appendEnd: Function;
  popStart: Function;
  reset: Function;
  clear: Function;
  popEnd: Function;
};
const List2 = (props: List2Props) => {
  const [text, setText] = useState("")

  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">{props.label}</h3>

      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list2-element">{props.list.join(" ")}</div>

      <input data-testid="list2-input" onChange={(e) => setText(e.target.value)} />
      <button data-testid="list2-btn-append-end" onClick={() => props.appendStart(text)}>
        appendStart
      </button>
      <button data-testid="list2-btn-pop-start" onClick={() => props.popStart}>
        popStart
      </button>
      <button data-testid="list2-btn-clear" onClick={() => props.clear}>
        clear
      </button>
      <button data-testid="list2-btn-reset" onClick={() => props.reset}>
        {/* Button to  reset the list to initialValue */}
        reset
      </button>
    </div>
  );
};

export default List2;
