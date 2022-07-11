import React from "react";
import useClock from "../hooks/useClock";

type Props = {
  //  TODO
  label: string;
  hours: number;
  minutes: number;
  seconds: number;
};

const Clock = (props: Props) => {

  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
        {/* Label */}
        {props.label}
      </h4>
      <span data-testid="clock-hours">
        {/* Hours */}
        {props.hours < 10 ? "0" + props.hours : props.hours}
      </span>
      :
      <span data-testid="clock-minutes">
        {/* Minutes */}
        {props.minutes < 10 ? "0" + props.minutes : props.minutes}
      </span>
      :
      <span data-testid="clock-seconds">
        {/* Seconds */}
        {props.seconds < 10 ? "0" + props.seconds : props.seconds}
      </span>
    </div>
  );
};

export default Clock;
