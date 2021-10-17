import dayjs from "dayjs";
import { ONLY_CLASSES } from "./constants";

export interface OnlineClass {
  teacher?: string;
  subject?: string[] | string;
  url?: string;
  teacherShortName?: string;
  isPlayTime?: boolean;
  isEnd?: boolean;
  isLearning?: boolean;
}

export interface Timestamp {
  start: dayjs.Dayjs;
  end: dayjs.Dayjs;
}

export interface Subject {
  teacher: string;
  subject: string;
}

export type SupportedClasses = typeof ONLY_CLASSES[number];
