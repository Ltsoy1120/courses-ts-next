import { TagProps } from "./Tag.props";
import cn from "classnames";
import styles from "./Tag.module.css";

export const Tag = ({
  size = "s",
  color = "ghost",
  href,
  className,
  children,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.ghost]: color === "ghost",
        [styles.red]: color === "red",
        [styles.green]: color === "green",
        [styles.grey]: color === "grey",
        [styles.primary]: color === "primary"
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};