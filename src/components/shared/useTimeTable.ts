import { TIMETABLE } from "~/constants";
import { useStore } from "./store";
import useTime from "./useTime";

const useTimeTable = () => {
  const currentClass = useStore(state => state.class);
  const time = useTime();

  return TIMETABLE[time][currentClass];
};

export default useTimeTable;
