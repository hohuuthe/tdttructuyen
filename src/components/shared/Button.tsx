import classNames from "classnames";
import React from "react";

type Icon = React.ComponentType<{ className?: string }>;

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  secondary?: boolean;
  className?: string;
  iconClassName?: string;
  LeftIcon?: Icon;
  RightIcon?: Icon;
  as?: string | React.ComponentType<any>;
}

const Button: React.FC<ButtonProps> = ({
  primary,
  secondary,
  children,
  className,
  RightIcon,
  LeftIcon,
  iconClassName = "w-6 h-6 block",
  as: Component = "button",
  ...props
}) => {
  return (
    <Component
      className={classNames(
        "flex items-center space-x-2 p-3 font-medium rounded-md shadow-lg hover:bg-opacity-90 transition duration-300",
        primary && "bg-primary text-white",
        secondary && "bg-secondary text-white",
        className,
      )}
      {...props}
    >
      {LeftIcon && <LeftIcon className={iconClassName} />}

      {children}

      {RightIcon && <RightIcon className={iconClassName} />}
    </Component>
  );
};

export default Button;
