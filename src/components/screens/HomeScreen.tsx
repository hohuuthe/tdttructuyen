import { motion } from "framer-motion";
import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useHistory } from "react-router";
import { COUNT_URL } from "~/constants";
import { SupportedClasses } from "~/types";
import Button from "../shared/Button";
import EndTimer from "../shared/EndTimer";
import { Head } from "../shared/Head";
import Select from "../shared/Select";
import { useStore } from "../shared/store";
import useOnlineClass from "../shared/useOnlineClass";

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

const HomeScreen = () => {
  const { info, timestamp } = useOnlineClass();
  const history = useHistory();
  const className = useStore(state => state.class);
  const setClass = useStore(state => state.setClass);

  const handleLearnClick = () => {
    const destination = !info?.isLearning ? "https://facebook.com" : info?.url;

    window.open(destination, "_blank")?.focus();
  };

  const handleTimeTableClick = () => {
    history.push(`/timetable`);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setClass(e.target.value as SupportedClasses);
  };

  let mainTitle: string, secondaryTitle: string;

  if (info?.isEnd) {
    mainTitle = "Ơ hết tiết rồi mà vẫn học à?";
    secondaryTitle =
      "Nếu bạn không thể giải thích điều gì đó một cách đơn giản, thì có nghĩa là bạn chưa thực sự hiểu nó";
  } else if (info?.isPlayTime) {
    mainTitle = "Chuẩn bị tiết tiếp theo thôii";
    secondaryTitle = "Cô có chuyển em ngồi đâu đi chăng nữa... thì em vẫn là em của ngày hôm qua.";
  } else {
    mainTitle = `${info?.subject} - ${info?.teacher}`;
  }

  return (
    <React.Fragment>
      <Head title={info?.isLearning ? `${info?.subject} - ${info?.teacher}` : "Lịch học online Tôn Đức Thắng"} />
      <div className="h-full w-full flex flex-col justify-center text-center md:text-left px-4 md:px-32">
        <motion.div
          variants={variants}
          animate="enter"
          initial="hidden"
          exit="hidden"
          className="space-y-8"
          transition={transition}
        >
          <motion.div variants={itemVariants} transition={transition}>
            <Select
              onChange={handleSelectChange}
              className="ring-2 ring-primary px-4 py-2"
              containerClassName="w-full md:w-1/3"
              defaultValue={className!}
            >
              <optgroup label="Khối 10">
                <option value="c1">C1</option>
                <option value="c2">C2</option>
                <option value="c3">C3</option>
                <option value="c4">C4</option>
              </optgroup>
              <optgroup label="Khối 11">
                <option value="b1">B1</option>
                <option value="b2">B2</option>
                <option value="b3">B3</option>
              </optgroup>
              <optgroup label="Khối 12">
                <option value="a1">A1</option>
                <option value="a2">A2</option>
                <option value="a3">A3</option>
              </optgroup>
            </Select>
          </motion.div>

          <div>
            <motion.h1 variants={itemVariants} className="text-lg font-medium" transition={transition}>
              Tiết học hiện tại
            </motion.h1>
            <motion.h1
              transition={transition}
              variants={itemVariants}
              className="text-4xl md:text-6xl font-semibold mt-1"
            >
              {mainTitle}
            </motion.h1>

            <motion.div transition={transition} variants={itemVariants} className="mt-4">
              {info?.isLearning ? (
                <EndTimer className="text-xl text-gray-300" end={timestamp?.end!} start={timestamp?.start!} />
              ) : (
                <p className="text-xl text-gray-300">{secondaryTitle!}</p>
              )}
            </motion.div>
          </div>

          <motion.div
            transition={transition}
            variants={itemVariants}
            className="flex items-center justify-center md:justify-start space-x-2"
          >
            <Button onClick={handleLearnClick} primary LeftIcon={BsArrowUpRightCircle}>
              <p>Tham gia học</p>
            </Button>

            <Button onClick={handleTimeTableClick} secondary LeftIcon={AiOutlineUnorderedList}>
              <p>Thời khóa biểu</p>
            </Button>
          </motion.div>

          <motion.h1 className="text-2xl font-medium" transition={transition} variants={itemVariants}>
            Điểm danh{" "}
            <a
              href={COUNT_URL}
              target="_blank"
              rel="noreferrer"
              className="text-blue-300 hover:text-blue-500 transition duration-300"
            >
              tại đây
            </a>
          </motion.h1>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default HomeScreen;
