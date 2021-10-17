import classNames from "classnames";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { Subject } from "~/types";

interface CalendarSubjectProps {
  subject: Subject;
  className?: string;
}

const CalendarSubject: React.FC<CalendarSubjectProps> = ({ subject, className }) => {
  return (
    <div className={classNames("space-x-4 flex items-center justify-between", className)}>
      <FaCircle className="w-2 h-2" />
      <div className="w-full text-center p-2 md:py-1 rounded-md bg-primary">
        <h1 className="text-text text-lg font-semibold">{subject.subject}</h1>
      </div>
    </div>
  );
};

export default CalendarSubject;
