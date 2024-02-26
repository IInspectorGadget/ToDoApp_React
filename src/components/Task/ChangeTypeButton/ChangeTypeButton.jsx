import { memo, useCallback } from "react";
import cx from "classnames";

import s from "./ChangeTypeButton.module.scss";

const ChangeTypeButton = memo(({ className, id, checked, setList }) => {
  const handlerClick = useCallback(() => {
    setList((prev) =>
      prev.map((el) => {
        if (el.id === id) {
          el.completed = !el.completed;
        }
        return el;
      }),
    );
  }, [id, setList]);
  return <input className={cx(s.root, className)} checked={checked} onChange={handlerClick} type='checkbox' />;
});

ChangeTypeButton.displayName = "ChangeTypeButton";

export default ChangeTypeButton;
