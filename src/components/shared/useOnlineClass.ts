import { useLayoutEffect, useState } from "react";
import { DAYS, ONLINE_CLASSES, TIMESTAMP, TOTAL_TIMESTAMP } from "~/constants";
import { OnlineClass, Timestamp } from "~/types";
import dayjs from "~/utils/dayjs";
import useTime from "./useTime";
import { useTimer } from "./useTimer";
import useTimeTable from "./useTimeTable";

const useOnlineClass = () => {
  const [info, setInfo] = useState<OnlineClass>();
  const [timestamp, setTimestamp] = useState<Timestamp>();
  const timeTable = useTimeTable();
  const timer = useTimer();
  const time = useTime();

  useLayoutEffect(() => {
    const currentDay = DAYS[dayjs().day()];
    const currentTime = dayjs().hour(13).minute(30);
    const timestamp = TIMESTAMP[time];

    if (currentDay === "sunday") {
      setInfo({ isEnd: true });
      return;
    }

    if (!(currentDay in timeTable)) {
      setInfo({ isEnd: true });
      return;
    }

    const currentTimeTable = timeTable[currentDay];

    if (!currentTimeTable.length) {
      setInfo({ isEnd: true });

      return;
    }

    const inTimeSubject = currentTimeTable.find((_, index) => {
      const { start, end } = timestamp[index];

      // Show the subject 5 minutes before start time
      const earlyStart = start.subtract(5, "minute");

      if (currentTime.isBetween(earlyStart, end)) {
        setTimestamp({ start, end });

        return true;
      }

      return false;
    });

    // If there is no subject at the moment, there are two cases
    // 1. Playtime
    // 2. Ended
    if (!inTimeSubject) {
      const { end } = timestamp[currentTimeTable.length - 1];

      const dayTimestamp = TOTAL_TIMESTAMP[time];

      // If time is between start timestamp of a day and last subject end timestamp
      // Then it is playtime
      // else it is ended
      if (currentTime.isBetween(dayTimestamp.start, end)) {
        setInfo({ isPlayTime: true });

        return;
      }

      setInfo({ isEnd: true });

      return;
    }

    const onlineClass = ONLINE_CLASSES.find(classroom => {
      const isSameTeacher = inTimeSubject.teacher === classroom.teacherShortName;

      if (!isSameTeacher) return false;

      if (Array.isArray(classroom.subject)) {
        return classroom.subject.includes(inTimeSubject.subject);
      }

      return inTimeSubject.subject === classroom.subject;
    });

    let subject = onlineClass?.subject;

    if (Array.isArray(onlineClass?.subject)) {
      subject = onlineClass?.subject.find(subject => subject === inTimeSubject.subject);
    }

    setInfo({
      ...onlineClass,
      subject,
      isLearning: true,
    });
  }, [timeTable, timer]);

  return { info, timestamp };
};

export default useOnlineClass;
