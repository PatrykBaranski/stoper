import { useEffect, useState } from "react";
import { convertMsToTimeString } from "./helpers";
import Button from "./Button";
import styles from "./App.module.scss";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimerHandler = () => {
    setIsRunning(true);
  };

  const resetTimerHandler = () => {
    setTime(0);
  };

  const stopTimerHandler = () => {
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setTime((prevState) => prevState + 1);
      }, 1);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [time, isRunning]);

  return (
    <div className={styles["main-container"]}>
      <p className={styles["counter"]}>{convertMsToTimeString(time)}</p>
      <div className={styles["button-container"]}>
        <Button onClick={startTimerHandler}>Start</Button>
        <Button onClick={stopTimerHandler}>Stop</Button>
        <Button onClick={resetTimerHandler}>Reset</Button>
      </div>
    </div>
  );
}

export default App;
