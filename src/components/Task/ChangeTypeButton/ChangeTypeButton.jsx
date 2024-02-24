import cx from "classnames";

import s from "./ChangeTypeButton.module.scss";

const ChangeTypeButton = ({ className, id, checked, setList }) => {
  const handlerClick = () => {
    setList((prev) =>
      prev.map((el) => {
        if (el.id === id) {
          el.completed = !el.completed;
        }
        return el;
      }),
    );
  };
  return <input className={cx(s.root, className)} checked={checked} onChange={handlerClick} type='checkbox' />;
};

export default ChangeTypeButton;
