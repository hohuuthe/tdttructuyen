import classNames from "classnames";
import React from "react";
import { Subject } from "~/types";
import dayjs from "~/utils/dayjs";
import CalendarSubject from "./CalendarSubject";

interface CalendarItemProps {
  className?: string;
  day: dayjs.Dayjs;
  subjects: Subject[];
}

const CalendarItem: React.FC<CalendarItemProps> = props => {
  const { className, day, subjects } = props;

  return (
    <div className={classNames("grid grid-rows-6", className)}>
      <div className={classNames("row-span-1")}>
        <h1 className={classNames("text-gray-300 text-lg uppercase font-medium")}>{day.format("dddd")}</h1>
      </div>
      <div className={classNames("border-text row-span-5 border-t-2 py-4 space-y-4")}>
        <h1 className={classNames("text-3xl font-bold")}>{day.get("date")}</h1>

        <div className="space-y-2">
          {subjects.map((subject, index) => (
            <CalendarSubject subject={subject} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarItem;
