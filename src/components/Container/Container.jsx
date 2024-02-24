import cx from "classnames";

import s from "./Container.module.scss";

const Container = ({ className, children }) => {
  return <div className={cx(s.root, className)}>{children}</div>;
};

export default Container;
