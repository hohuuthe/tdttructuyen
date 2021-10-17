import dayjs from "~/utils/dayjs";
import React from "react";
import { useTimer } from "./useTimer";

interface EndTimerProps extends React.HTMLAttributes<HTMLParagraphElement> {
  end: dayjs.Dayjs;
  start: dayjs.Dayjs;
}

const EndTimer: React.FC<EndTimerProps> = ({ end, start, ...props }) => {
  const timer = useTimer();

  const startTime = start.format("HH:mm");
  const endTime = end.format("HH:mm");
  const willEndTime = timer?.to(end);

  let message;

  if (timer?.isBetween(start, end)) {
    message = `Thời gian: ${startTime} - ${endTime} | Kết thúc ${willEndTime}`;
  } else {
    message = `Thời gian: ${startTime} - ${endTime}`;
  }

  return <p {...props}>{message}</p>;
};

export default EndTimer;
