import dayjs from "dayjs";
import { useEffect, useState } from "react";

export const useTimer = () => {
  const [currentTime, setCurrentTime] = useState<dayjs.Dayjs>();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    setCurrentTime(dayjs());

    return () => clearInterval(interval);
  }, []);

  return currentTime;
};
