import dayjs from "dayjs";
import { OnlineClass } from "./types";

export const COUNT_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScfdXP7ooX2xgf8j9ysEWLkN1NUbonNHc0PNMtzAKbITKTv9w/viewform";
export const GITHUB_URL = "http://thpttonducthang.gialai.edu.vn/";
export const FACEBOOK_URL = "https://www.facebook.com/huuthe87/";

export const ONLY_CLASSES = ["c1", "c2", "c3", "b1", "b2", "b3", "a1", "a2", "a3"] as const;

export const DAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"] as const;

export const TOTAL_TIMESTAMP = {
  morning: {
    start: dayjs().hour(7).minute(0),
    end: dayjs().hour(11).minute(15),
  },

  afternoon: {
    start: dayjs().hour(13).minute(0),
    end: dayjs().hour(16).minute(30),
  },
};

export const TIMESTAMP = {
  morning: [
    {
      start: dayjs().hour(7).minute(15),
      end: dayjs().hour(8).minute(0),
    },
    {
      start: dayjs().hour(8).minute(15),
      end: dayjs().hour(9).minute(0),
    },
    {
      start: dayjs().hour(9).minute(30),
      end: dayjs().hour(10).minute(15),
    },
    {
      start: dayjs().hour(10).minute(15),
      end: dayjs().hour(11).minute(0),
    },
  ],
  afternoon: [
    {
      start: dayjs().hour(13).minute(30),
      end: dayjs().hour(14).minute(15),
    },
    {
      start: dayjs().hour(14).minute(30),
      end: dayjs().hour(15).minute(15),
    },
    {
      start: dayjs().hour(15).minute(30),
      end: dayjs().hour(16).minute(15),
    },
  ],
};

export const ONLINE_CLASSES: OnlineClass[] = [
  {
    teacher: "Trần Văn Lượng",
    url: "https://meet.google.com/dixt-zvhg-cvf",
    subject: "Toán",
    teacherShortName: "Lượng",
  },
  {
    teacher: "Vũ Quốc Chánh",
    url: "https://meet.google.com/fztu-zxgu-yad",
    subject: "Văn",
    teacherShortName: "Chánh",
  },
  {
    teacher: "Phan Thế Cường",
    url: "https://meet.google.com/dntm-midy-gmx",
    subject: ["Văn", "Chào cờ", "SH Lớp"],
    teacherShortName: "Cường",
  },
  {
    teacher: "Trần Văn Tâm",
    url: "https://meet.google.com/gnfo-euiz-bji",
    subject: ["Lịch Sử", "GDCD", "Chào cờ", "SH Lớp"],
    teacherShortName: "Tâm",
  },
  {
    teacher: "Nguyễn Trọng Thuận",
    url: "https://meet.google.com/erhf-catd-vbd",
    subject: ["Toán", "Chào cờ", "SH Lớp"],
    teacherShortName: "Thuận",
  },
  {
    teacher: "Võ Minh Tri",
    url: "https://meet.google.com/siyk-eqfy-urb",
    subject: ["Lý", "Kĩ Thuật"],
    teacherShortName: "Tri",
  },
  {
    teacher: "Trần Thị Hòa",
    url: "https://meet.google.com/gkmz-cmef-xhq",
    subject: "Hóa",
    teacherShortName: "Hòa",
  },
  {
    teacher: "Lê Văn Hinh",
    url: "https://meet.google.com/snpt-xqyj-pgo",
    subject: ["Lý", "Kĩ Thuật"],
    teacherShortName: "Hinh",
  },
  {
    teacher: "Bùi Quang Vĩnh",
    url: "https://meet.google.com/gtxh-xibq-caf",
    subject: "Thể Dục",
    teacherShortName: "Vĩnh",
  },
  {
    teacher: "Hồ Hữu Thế",
    url: "https://meet.google.com/jhqe-eaey-iej",
    subject: ["Tin Nghề", "Chào cờ", "SH Lớp"],
    teacherShortName: "Thế",
  },
  {
    teacher: "Hồ Diên Minh",
    url: "https://meet.google.com/ưggb-dvud-cuj",
    subject: "Toán",
    teacherShortName: "Minh",
  },
  {
    teacher: "Huỳnh Thị Minh Thư",
    url: "https://meet.google.coms/nvz-gutn-ecu",
    subject: ["Ngoại Ngữ", "Chào cờ", "SH Lớp"],
    teacherShortName: "Thư",
  },
  {
    teacher: "Phan Thị Yến",
    url: "https://meet.google.com/fkeg-hdoe-cyj",
    subject: "Ngoại Ngữ",
    teacherShortName: "P.Yến",
  },
  {
    teacher: "Lê Xuân Tài",
    url: "https://meet.google.com/ưyaa-vgnw-qvs",
    subject: ["Tin Học", "Tin Nghề", "Chào cờ", "SH Lớp"],
    teacherShortName: "Tài",
  },
  {
    teacher: "Vũ Thị Hiền",
    url: "https://meet.google.com/rgjq-hjnu-onf",
    subject: ["Lịch Sử", "GDCD", "Chào cờ", "SH Lớp"],
    teacherShortName: "Hiền",
  },
  {
    teacher: "Vũ Thị Thanh Hà",
    url: "https://meet.google.com/xbut-fvmp-kti",
    subject: ["Sinh", "Công Nghệ"],
    teacherShortName: "V.Hà",
  },
  {
    teacher: "Trần Thị Yến",
    url: "https://meet.google.com/hscw-bapa-joi",
    subject: ["GDQP", "Chào cờ", "SH Lớp"],
    teacherShortName: "T.Yến",
  },
  {
    teacher: "Lê Thị Hà",
    url: "https://meet.google.com/fprz-iwkm-ngz",
    subject: ["Văn", "Chào cờ", "SH Lớp"],
    teacherShortName: "L.Hà",
  },
  {
    teacher: "Mai Bích Thảo",
    url: "http://meet.google.com/qjwz-qhbt-fsr",
    subject: ["Tin Học", "Tin Nghề", "Chào cờ", "SH Lớp"],
    teacherShortName: "Thảo",
  },
  {
    teacher: "Lâm Thị Bích Trân",
    url: "https://meet.google.com/ntws-wacj-chs",
    subject: "Lý",
    teacherShortName: "Trân",
  },
  {
    teacher: "Hoàng Cửu Thùy Uyên",
    url: "https://meet.google.com/mbkg-rodh-nkm",
    subject: "Địa",
    teacherShortName: "Uyên",
  },
  {
    teacher: "Hồ Thị Thu Hương",
    url: "https://meet.google.com/kjye-gcso-nbj",
    subject: "Văn",
    teacherShortName: "Hương",
  },
  {
    teacher: "Trần Mạnh Hùng",
    url: "https://meet.google.com/gfyw-pbjf-qeu",
    subject: "Toán",
    teacherShortName: "Hùng",
  },
];

export const TIMETABLE = {
  morning: {
    c1: {
      monday: [
        { subject: "Chào cờ", teacher: "T.Yến" },
        { subject: "Toán", teacher: "Minh" },
        { subject: "Toán", teacher: "Minh" },
        { subject: "Lý", teacher: "Trân" },
      ],
      tuesday: [
        { subject: "Toán", teacher: "Minh" },
        { subject: "Ngoại Ngữ", teacher: "P.Yến" },
        { subject: "Công Nghệ", teacher: "V.Hà" },
      ],
      wednesday: [
        { subject: "Ngoại Ngữ", teacher: "P.Yến" },
        { subject: "Văn", teacher: "Hương" },
        { subject: "Văn", teacher: "Hương" },
      ],
      thursday: [
        { subject: "Công Nghệ", teacher: "V.Hà" },
        { subject: "Địa", teacher: "Uyên" },
        { subject: "Văn", teacher: "Hương" },
      ],
      friday: [
        { subject: "Hóa", teacher: "Hòa" },
        { subject: "Lịch Sử", teacher: "Hiền" },
        { subject: "GDCD", teacher: "Hiền" },
      ],
      saturday: [
        { subject: "Lý", teacher: "Trân" },
        { subject: "Hóa", teacher: "Hòa" },
        { subject: "Sinh", teacher: "V.Hà" },
        { subject: "SH Lớp", teacher: "T.Yến" },
      ],
    },
    c2: {
      monday: [
        { subject: "Chào cờ", teacher: "Hiền" },
        { subject: "Toán", teacher: "Minh" },
        { subject: "Toán", teacher: "Minh" },
        { subject: "Lý", teacher: "Trân" },
      ],
      tuesday: [
        { subject: "Toán", teacher: "Minh" },
        { subject: "Ngoại Ngữ", teacher: "P.Yến" },
        { subject: "Công Nghệ", teacher: "V.Hà" },
      ],
      wednesday: [
        { subject: "Ngoại Ngữ", teacher: "P.Yến" },
        { subject: "Văn", teacher: "Hương" },
        { subject: "Văn", teacher: "Hương" },
      ],
      thursday: [
        { subject: "Công Nghệ", teacher: "V.Hà" },
        { subject: "Địa", teacher: "Uyên" },
        { subject: "Văn", teacher: "Hương" },
      ],
      friday: [
        { subject: "Hóa", teacher: "Hòa" },
        { subject: "Lịch Sử", teacher: "Hiền" },
        { subject: "GDCD", teacher: "Hiền" },
      ],
      saturday: [
        { subject: "Lý", teacher: "Trân" },
        { subject: "Hóa", teacher: "Hòa" },
        { subject: "Sinh", teacher: "V.Hà" },
        { subject: "SH Lớp", teacher: "Hiền" },
      ],
    },
    c3: {
      monday: [
        { subject: "Chào cờ", teacher: "L.Hà" },
        { subject: "Địa", teacher: "Uyên" },
        { subject: "Ngoại Ngữ", teacher: "P.Yến" },
        { subject: "Ngoại Ngữ", teacher: "P.Yến" },
      ],
      tuesday: [
        { subject: "Công Nghệ", teacher: "V.Hà" },
        { subject: "Toán", teacher: "Hùng" },
        { subject: "Toán", teacher: "Hùng" },
      ],
      wednesday: [
        { subject: "Văn", teacher: "L.Hà" },
        { subject: "Ngoại Ngữ", teacher: "P.Yến" },
        { subject: "Lý", teacher: "Trân" },
      ],
      thursday: [
        { subject: "Hóa", teacher: "Hòa" },
        { subject: "Toán", teacher: "Hùng" },
        { subject: "Lý", teacher: "Trân" },
      ],
      friday: [
        { subject: "Lịch Sử", teacher: "Hiền" },
        { subject: "Hóa", teacher: "Hòa" },
        { subject: "Công Nghệ", teacher: "V.Hà" },
      ],
      saturday: [
        { subject: "Văn", teacher: "L.Hà" },
        { subject: "Văn", teacher: "L.Hà" },
        { subject: "Địa", teacher: "Uyên" },
        { subject: "SH Lớp", teacher: "L.Hà" },
      ],
    },
    c4: {
      monday: [
        { subject: "Chào cờ", teacher: "Thảo" },
        { subject: "Địa", teacher: "Uyên" },
        { subject: "Ngoại Ngữ", teacher: "P.Yến" },
        { subject: "Ngoại Ngữ", teacher: "P.Yến" },
      ],
      tuesday: [
        { subject: "Công Nghệ", teacher: "V.Hà" },
        { subject: "Toán", teacher: "Hùng" },
        { subject: "Toán", teacher: "Hùng" },
      ],
      wednesday: [
        { subject: "Văn", teacher: "L.Hà" },
        { subject: "Ngoại Ngữ", teacher: "P.Yến" },
        { subject: "Lý", teacher: "Trân" },
      ],
      thursday: [
        { subject: "Hóa", teacher: "Hòa" },
        { subject: "Toán", teacher: "Hùng" },
        { subject: "Lý", teacher: "Trân" },
      ],
      friday: [
        { subject: "Lịch Sử", teacher: "Hiền" },
        { subject: "Hóa", teacher: "Hòa" },
        { subject: "Công Nghệ", teacher: "V.Hà" },
      ],
      saturday: [
        { subject: "Văn", teacher: "L.Hà" },
        { subject: "Văn", teacher: "L.Hà" },
        { subject: "Địa", teacher: "Uyên" },
        { subject: "SH Lớp", teacher: "Thảo" },
      ],
    },
    b1: {
      monday: [
        { subject: "Chào cờ", teacher: "Thế" },
        { subject: "Hóa", teacher: "Hòa" },
        { subject: "Địa", teacher: "Uyên" },
        { subject: "Văn", teacher: "Hương" },
      ],
      tuesday: [
        { subject: "Văn", teacher: "Hương" },
        { subject: "Lý", teacher: "Hinh" },
        { subject: "Lịch Sử", teacher: "Tâm" },
      ],
      wednesday: [
        { subject: "GDCD", teacher: "Tâm" },
        { subject: "Sinh", teacher: "V.Hà" },
      ],
      thursday: [
        { subject: "Văn", teacher: "Hương" },
        { subject: "Văn", teacher: "Hương" },
        { subject: "Hóa", teacher: "Hòa" },
      ],
      friday: [
        { subject: "Ngoại Ngữ", teacher: "Thư" },
        { subject: "Toán", teacher: "Thuận" },
        { subject: "Toán", teacher: "Thuận" },
      ],
      saturday: [
        { subject: "Toán", teacher: "Thuận" },
        { subject: "Tin Học", teacher: "Tài" },
        { subject: "Tin Học", teacher: "Tài" },
        { subject: "SH Lớp", teacher: "Thế" },
      ],
    },
    b2: {
      monday: [
        { subject: "Chào cờ", teacher: "Tài" },
        { subject: "Tin Học", teacher: "Tài" },
        { subject: "Tin Học", teacher: "Tài" },
        { subject: "Địa", teacher: "Uyên" },
      ],
      tuesday: [
        { subject: "Kĩ Thuật", teacher: "Hinh" },
        { subject: "Văn", teacher: "L.Hà" },
        { subject: "Văn", teacher: "L.Hà" },
      ],
      wednesday: [
        { subject: "Lý", teacher: "Trân" },
        { subject: "Lý", teacher: "Trân" },
        { subject: "Sinh", teacher: "V.Hà" },
      ],
      thursday: [
        { subject: "GDCD", teacher: "Tâm" },
        { subject: "Lịch Sử", teacher: "Tâm" },
        { subject: "Toán", teacher: "Hùng" },
      ],
      friday: [
        { subject: "Ngoại Ngữ", teacher: "Thư" },
        { subject: "Toán", teacher: "Hùng" },
        { subject: "Toán", teacher: "Hùng" },
      ],
      saturday: [
        { subject: "Hóa", teacher: "Hòa" },
        { subject: "GDQP", teacher: "T.Yến" },
        { subject: "Văn", teacher: "L.Hà" },
        { subject: "SH Lớp", teacher: "Tài" },
      ],
    },
    b3: {
      monday: [
        { subject: "Chào cờ", teacher: "Tâm" },
        { subject: "Tin Học", teacher: "Tài" },
        { subject: "Tin Học", teacher: "Tài" },
        { subject: "Địa", teacher: "Uyên" },
      ],
      tuesday: [
        { subject: "Kĩ Thuật", teacher: "Hinh" },
        { subject: "Văn", teacher: "L.Hà" },
        { subject: "Văn", teacher: "L.Hà" },
      ],
      wednesday: [
        { subject: "Lý", teacher: "Trân" },
        { subject: "Lý", teacher: "Trân" },
        { subject: "Công Nghệ", teacher: "V.Hà" },
      ],
      thursday: [
        { subject: "GDCD", teacher: "Tâm" },
        { subject: "Lịch Sử", teacher: "Tâm" },
        { subject: "Toán", teacher: "Hùng" },
      ],
      friday: [
        { subject: "Ngoại Ngữ", teacher: "P.Yến" },
        { subject: "Toán", teacher: "Hùng" },
        { subject: "Toán", teacher: "Hùng" },
      ],
      saturday: [
        { subject: "Hóa", teacher: "Hòa" },
        { subject: "GDQP", teacher: "T.Yến" },
        { subject: "Văn", teacher: "L.Hà" },
        { subject: "SH Lớp", teacher: "Tâm" },
      ],
    },
    a1: {
      monday: [
        { subject: "Chào cờ", teacher: "Thuận" },
        { subject: "Kĩ Thuật", teacher: "Tri" },
        { subject: "Ngoại Ngữ", teacher: "Thư" },
        { subject: "Ngoại Ngữ", teacher: "Thư" },
      ],
      tuesday: [
        { subject: "Văn", teacher: "Cường" },
        { subject: "Văn", teacher: "Cường" },
        { subject: "Địa", teacher: "Uyên" },
      ],
      wednesday: [
        { subject: "Lý", teacher: "Hinh" },
        { subject: "Lý", teacher: "Hinh" },
        { subject: "Ngoại Ngữ", teacher: "Thư" },
      ],
      thursday: [
        { subject: "Toán", teacher: "Thuận" },
        { subject: "Toán", teacher: "Thuận" },
        { subject: "GDCD", teacher: "Tâm" },
      ],
      friday: [
        { subject: "Toán", teacher: "Thuận" },
        { subject: "Sinh", teacher: "V.Hà" },
        { subject: "Tin Học", teacher: "Tài" },
      ],
      saturday: [
        { subject: "Văn", teacher: "Cường" },
        { subject: "Sinh", teacher: "V.Hà" },
        { subject: "Hóa", teacher: "Hòa" },
        { subject: "SH Lớp", teacher: "Thuận" },
      ],
    },
    a3: {
      monday: [
        { subject: "Chào cờ", teacher: "Cường" },
        { subject: "Kĩ Thuật", teacher: "Tri" },
        { subject: "Ngoại Ngữ", teacher: "Thư" },
        { subject: "Ngoại Ngữ", teacher: "Thư" },
      ],
      tuesday: [
        { subject: "Văn", teacher: "Cường" },
        { subject: "Văn", teacher: "Cường" },
        { subject: "Địa", teacher: "Uyên" },
      ],
      wednesday: [
        { subject: "Lý", teacher: "Hinh" },
        { subject: "Lý", teacher: "Hinh" },
        { subject: "Ngoại Ngữ", teacher: "Thư" },
      ],
      thursday: [
        { subject: "Toán", teacher: "Minh" },
        { subject: "Toán", teacher: "Minh" },
        { subject: "GDCD", teacher: "Tâm" },
      ],
      friday: [
        { subject: "Toán", teacher: "Thuận" },
        { subject: "Sinh", teacher: "V.Hà" },
        { subject: "Tin Học", teacher: "Tài" },
      ],
      saturday: [
        { subject: "Văn", teacher: "Cường" },
        { subject: "Sinh", teacher: "V.Hà" },
        { subject: "Hóa", teacher: "Hòa" },
        { subject: "SH Lớp", teacher: "Cường" },
      ],
    },
    a2: {
      monday: [
        { subject: "Chào cờ", teacher: "Thư" },
        { subject: "Ngoại Ngữ", teacher: "Thư" },
        { subject: "Văn", teacher: "Chánh" },
        { subject: "Văn", teacher: "Chánh" },
      ],
      tuesday: [
        { subject: "Lịch Sử", teacher: "Hiền" },
        { subject: "GDCD", teacher: "Tâm" },
        { subject: "Lý", teacher: "Hinh" },
      ],
      wednesday: [
        { subject: "Ngoại Ngữ", teacher: "Thư" },
        { subject: "Ngoại Ngữ", teacher: "Thư" },
        { subject: "Lý", teacher: "Hinh" },
      ],
      thursday: [
        { subject: "Toán", teacher: "Minh" },
        { subject: "Toán", teacher: "Minh" },
        { subject: "Tin Học", teacher: "Tài" },
      ],
      friday: [
        { subject: "Toán", teacher: "Minh" },
        { subject: "Kĩ Thuật", teacher: "Tri" },
        { subject: "Hóa", teacher: "Hòa" },
      ],
      saturday: [
        { subject: "Địa", teacher: "Uyên" },
        { subject: "Lý", teacher: "Hinh" },
        { subject: "Văn", teacher: "Chánh" },
        { subject: "SH Lớp", teacher: "Thư" },
      ],
    },
  },
  afternoon: {
    c1: {
      monday: [
        { subject: "Tin Học", teacher: "Thảo" },
        { subject: "Tin Học", teacher: "Thảo" },
        { subject: "GDQP", teacher: "T.Yến" },
      ],
      tuesday: [
        { subject: "Thể Dục", teacher: "Vĩnh" },
        { subject: "Thể Dục", teacher: "Vĩnh" },
        { subject: "Địa", teacher: "Uyên" },
      ],
      wednesday: [{ subject: "Ngoại Ngữ", teacher: "P.Yến" }],
      thursday: [],
      friday: [],
      saturday: [],
    },
    c2: {
      monday: [
        { subject: "Tin Học", teacher: "Thảo" },
        { subject: "Tin Học", teacher: "Thảo" },
        { subject: "GDQP", teacher: "T.Yến" },
      ],
      tuesday: [
        { subject: "Thể Dục", teacher: "Vĩnh" },
        { subject: "Thể Dục", teacher: "Vĩnh" },
        { subject: "Địa", teacher: "Uyên" },
      ],
      wednesday: [{ subject: "Ngoại Ngữ", teacher: "P.Yến" }],
      thursday: [],
      friday: [],
      saturday: [],
    },
    c3: {
      monday: [
        { subject: "GDCD", teacher: "Hiền" },
        { subject: "Thể Dục", teacher: "Vĩnh" },
        { subject: "Thể Dục", teacher: "Vĩnh" },
      ],
      tuesday: [
        { subject: "Tin Học", teacher: "Thảo" },
        { subject: "Tin Học", teacher: "Thảo" },
      ],
      wednesday: [
        { subject: "GDQP", teacher: "T.Yến" },
        { subject: "Sinh", teacher: "V.Hà" },
      ],
      thursday: [],
      friday: [],
      saturday: [],
    },
    c4: {
      monday: [
        { subject: "GDCD", teacher: "Hiền" },
        { subject: "Thể Dục", teacher: "Vĩnh" },
        { subject: "Thể Dục", teacher: "Vĩnh" },
      ],
      tuesday: [
        { subject: "Tin Học", teacher: "Thảo" },
        { subject: "Tin Học", teacher: "Thảo" },
      ],
      wednesday: [
        { subject: "GDQP", teacher: "T.Yến" },
        { subject: "Sinh", teacher: "V.Hà" },
      ],
      thursday: [],
      friday: [],
      saturday: [],
    },
    b1: {
      monday: [
        { subject: "Kĩ Thuật", teacher: "Hinh" },
        { subject: "Ngoại Ngữ", teacher: "Thư" },
        { subject: "Ngoại Ngữ", teacher: "Thư" },
      ],
      tuesday: [],
      wednesday: [
        { subject: "Lý", teacher: "Hinh" },
        { subject: "GDQP", teacher: "T.Yến" },
      ],
      thursday: [
        { subject: "Tin Nghề", teacher: "Thế" },
        { subject: "Tin Nghề", teacher: "Thế" },
        { subject: "Tin Nghề", teacher: "Thế" },
      ],
      friday: [],
      saturday: [
        { subject: "Thể Dục", teacher: "Vĩnh" },
        { subject: "Thể Dục", teacher: "Vĩnh" },
      ],
    },
    b2: {
      monday: [
        { subject: "Ngoại Ngữ", teacher: "Thư" },
        { subject: "Ngoại Ngữ", teacher: "Thư" },
      ],
      tuesday: [
        { subject: "Hóa", teacher: "Hòa" },
        { subject: "Văn", teacher: "L.Hà" },
      ],
      wednesday: [
        { subject: "Thể Dục", teacher: "Vĩnh" },
        { subject: "Thể Dục", teacher: "Vĩnh" },
      ],
      thursday: [],
      friday: [
        { subject: "Tin Nghề", teacher: "Tài" },
        { subject: "Tin Nghề", teacher: "Tài" },
        { subject: "Tin Nghề", teacher: "Tài" },
      ],
      saturday: [],
    },
    b3: {
      monday: [
        { subject: "Ngoại Ngữ", teacher: "P.Yến" },
        { subject: "Ngoại Ngữ", teacher: "P.Yến" },
      ],
      tuesday: [
        { subject: "Hóa", teacher: "Hòa" },
        { subject: "Văn", teacher: "L.Hà" },
      ],
      wednesday: [
        { subject: "Thể Dục", teacher: "Vĩnh" },
        { subject: "Thể Dục", teacher: "Vĩnh" },
      ],
      thursday: [],
      friday: [],
      saturday: [
        { subject: "Tin Nghề", teacher: "Thảo" },
        { subject: "Tin Nghề", teacher: "Thảo" },
        { subject: "Tin Nghề", teacher: "Thảo" },
      ],
    },
    a1: {
      monday: [
        { subject: "Tin Nghề", teacher: "Thế" },
        { subject: "Tin Nghề", teacher: "Thế" },
        { subject: "Tin Nghề", teacher: "Thế" },
      ],
      tuesday: [],
      wednesday: [
        { subject: "Toán", teacher: "Thuận" },
        { subject: "Lịch Sử", teacher: "Hiền" },
        { subject: "Hóa", teacher: "Hòa" },
      ],
      thursday: [
        { subject: "GDQP", teacher: "T.Yến" },
        { subject: "GDQP", teacher: "T.Yến" },
        { subject: "Lịch Sử", teacher: "Hiền" },
      ],
      friday: [
        { subject: "Thể Dục", teacher: "Vĩnh" },
        { subject: "Thể Dục", teacher: "Vĩnh" },
      ],
      saturday: [],
    },
	   a2: {
      monday: [
        { subject: "Sinh", teacher: "V.Hà" },
        { subject: "Sinh", teacher: "V.Hà" },
        { subject: "Lịch Sử", teacher: "Hiền" },
      ],
      tuesday: [
        { subject: "Tin Nghề", teacher: "Thế" },
        { subject: "Tin Nghề", teacher: "Thế" },
        { subject: "Tin Nghề", teacher: "Thế" },
      ],
      wednesday: [
        { subject: "Toán", teacher: "Minh" },
        { subject: "Hóa", teacher: "Hòa" },
      ],
      thursday: [
        { subject: "Thể Dục", teacher: "Vĩnh" },
        { subject: "Thể Dục", teacher: "Vĩnh" },
      ],
      friday: [
        { subject: "GDQP", teacher: "T.Yến" },
        { subject: "GDQP", teacher: "T.Yến" },
      ],
      saturday: [],
    },
    a3: {
      monday: [
        { subject: "Tin Nghề", teacher: "Thế" },
        { subject: "Tin Nghề", teacher: "Thế" },
        { subject: "Tin Nghề", teacher: "Thế" },
      ],
      tuesday: [],
      wednesday: [
        { subject: "Toán", teacher: "Minh" },
        { subject: "Lịch Sử", teacher: "Hiền" },
        { subject: "Hóa", teacher: "Hòa" },
      ],
      thursday: [
        { subject: "GDQP", teacher: "T.Yến" },
        { subject: "GDQP", teacher: "T.Yến" },
        { subject: "Lịch Sử", teacher: "Hiền" },
      ],
      friday: [
        { subject: "Thể Dục", teacher: "Vĩnh" },
        { subject: "Thể Dục", teacher: "Vĩnh" },
      ],
      saturday: [],
    },
 
  },
};
