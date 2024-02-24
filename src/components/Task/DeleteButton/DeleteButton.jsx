import cx from "classnames";

import s from "./DeleteButton.module.scss";

const DeleteButton = ({ className, id, setList }) => {
  const handlerClick = () => {
    setList((prev) => prev.filter((el) => el.id !== id));
  };

  return <button className={cx(s.root, className)} onClick={handlerClick} />;
};

export default DeleteButton;
