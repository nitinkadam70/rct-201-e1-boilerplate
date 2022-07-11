import React, { useState } from "react";

type List1Props = {
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
const List1 = (props: List1Props) => {
  const [text, setText] = useState("")
  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">{props.label}</h3>
      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list1-element">{props.list.join(" ")}</div>



      <input data-testid="list1-input" onChange={(e) => setText(e.target.value)} />
      <button data-testid="list1-btn-append-start" onClick={() => props.appendStart(text)}>
        appendStart
      </button>
      <button data-testid="list1-btn-pop-end" onClick={() => props.popEnd}>
        popEnd
      </button>
      <button data-testid="list1-btn-clear" onClick={() => props.clear}>
        Clear
      </button>
      <button data-testid="list1-btn-reset" onClick={() => props.reset(text)}>
        reset
      </button>
    </div>
  );
};

export default List1;
