import Button from "./Button";
import styles from "./App.module.scss";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimerHanlder = () => {
    setIsRunning(true);
  };

  const resetTimerHandler = () => {
    setTime(0);
  };

  const stopTimerHandler = () => {
    setIsRunning(false);
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevState) => prevState + 1);
      }, 1);
    }
    return () => {
      clearInterval(interval);
    };
  }, [time, isRunning]);

  const convertMsToTimeString = (ms) => {
    return new Date(ms).toISOString().slice(11, 22);
  };

  return (
    <div className={styles["main-container"]}>
      <p className={styles["counter"]}>{convertMsToTimeString(time)}</p>
      <div className={styles["button-container"]}>
        <Button onClick={startTimerHanlder}>Start</Button>
        <Button onClick={stopTimerHandler}>Stop</Button>
        <Button onClick={resetTimerHandler}>Reset</Button>
      </div>
    </div>
  );
}

export default App;
