import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";
import useClock from "./hooks/useClock";
import useNumberList from "./hooks/useNumberList";


function App() {

  const { hours, minutes, seconds } = useClock();
  const { list: list1, appendStart: a1, appendEnd: e1, popStart: p1,
    popEnd: pe1, clear: c1, reset: r1 } = useNumberList([1, 2, 3])

  const { list: list2, appendStart: a2, appendEnd: e2, popStart: p2,
    popEnd: pe2, clear: c2, reset: r2 } = useNumberList([4, 5])

  return (
    <div className="App">
      {/* Clock */}
      <Clock label={"24 Hour Live Custom Component Clock"} hours={hours} minutes={minutes} seconds={seconds} />
      {/* List 1  initialValues [1, 2, 3] */}
      <List1
        list={list1}
        label={"list 1"}
        appendStart={(text: any) => a1(text)}
        appendEnd={(text: any) => e1(text)}
        popStart={() => p1()}
        popEnd={() => pe1()}
        reset={(text: any) => r1(text)}
        clear={() => c1()}
      />
      {/* List 2  initialValues [4, 5] */}
      <List2
        list={list2}
        label={"list 2"}
        appendStart={(text: any) => a2(text)}
        appendEnd={(text: any) => e2(text)}
        popStart={() => p2()}
        popEnd={() => pe2()}
        reset={(text: any) => r2(text)}
        clear={() => c2()}
      />
    </div>
  );
}

export default App;
