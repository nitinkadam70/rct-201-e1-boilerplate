import { useEffect, useState } from "react";

const useClock = () => {
  // TODO
  // refer readme.md for what to return


  const [hours, setHours] = useState<number>(new Date().getHours())
  const [minutes, setMinutes] = useState<number>(new Date().getMinutes())
  const [seconds, setSeconds] = useState<number>(new Date().getSeconds())


  useEffect(() => {

    let clock = setInterval((): void => {
      setHours(new Date().getHours())
      setMinutes(new Date().getMinutes())
      setSeconds(new Date().getSeconds())
    }, 1000)

    return () => {
      clearInterval(clock);
    };
  }, [])

  return { hours, minutes, seconds }

};

export default useClock;
