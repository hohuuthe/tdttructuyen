import classNames from "classnames";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  containerClassName?: string;
}

// eslint-disable-next-line react/display-name
const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { children, className, containerClassName, ...remainProps } = props;

  return (
    <div className={classNames("relative w-full", containerClassName)}>
      <select
        ref={ref}
        className={classNames(
          "w-full text-2xl rounded-md appearance-none bg-background text-text focus:border-none focus:outline-none",
          className,
        )}
        {...remainProps}
      >
        {children}
      </select>
      <BsChevronDown className="absolute top-1/2 transform -translate-y-1/2 right-3 w-4 h-4 text-white" />
    </div>
  );
});

export default Select;
