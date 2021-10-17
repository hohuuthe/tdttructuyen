import { motion } from "framer-motion";
import React from "react";
import { DAYS } from "~/constants";
import dayjs from "~/utils/dayjs";
import CalendarItem from "../shared/CalendarItem";
import { Head } from "../shared/Head";
import { useStore } from "../shared/store";
import useTimeTable from "../shared/useTimeTable";

const startOfWeek = dayjs().startOf("week").add(1, "day"); // Start of week is sunday
const endOfWeek = dayjs().endOf("week");

const weekDays = new Array(6).fill(null).map((_, idx) => startOfWeek.add(idx, "day"));

const variants = {
  hidden: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0 },
};

const transition = {
  type: "spring",
  damping: 10,
  mass: 0.75,
  stiffness: 100,
};

const TimeTableScreen = () => {
  const nameOfClass = useStore(state => state.class);
  const timeTable = useTimeTable();

  return (
    <React.Fragment>
      <Head title={`Thời khóa biểu - ${nameOfClass}`} />

      <motion.div
        transition={transition}
        variants={variants}
        animate="enter"
        initial="hidden"
        exit="hidden"
        className="w-full h-full flex flex-col justify-center px-4 py-8 text-center md:text-left lg:px-32 lg:py-16"
      >
        <motion.h1 variants={itemVariants} transition={transition} className="text-6xl font-bold uppercase">
          TKB - {nameOfClass}
        </motion.h1>

        <motion.p variants={itemVariants} transition={transition} className="text-xl text-gray-300 mt-4">
          Thời khóa biểu học online tuần này ({startOfWeek.format("L")} - {endOfWeek.format("L")})
        </motion.p>

        <motion.div
          variants={itemVariants}
          transition={transition}
          className="w-full h-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-8 overflow-y-scroll xl:overflow-y-hidden"
        >
          {weekDays.map((day, index) => {
            const currentDay = DAYS[day.get("day")];
            const subjects = currentDay === "sunday" ? [] : timeTable[currentDay];

            return <CalendarItem day={day} className="text-left col-span-1" subjects={subjects} key={index} />;
          })}
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
};

export default TimeTableScreen;
