import { useLayoutEffect, useState } from "react";
import { TOTAL_TIMESTAMP } from "~/constants";
import dayjs from "~/utils/dayjs";

const useTime = () => {
  const [time, setTime] = useState<"morning" | "afternoon">("morning");

  useLayoutEffect(() => {
    const [time] = Object.entries(TOTAL_TIMESTAMP).map(([key, val]) => {
      const currentTime = dayjs();
      const { start, end } = val;

      if (currentTime.isBetween(start, end)) return key;

      return "morning";
    });

    setTime(time as "morning" | "afternoon");
  }, []);

  return time;
};

export default useTime;
