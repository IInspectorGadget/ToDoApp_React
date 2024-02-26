import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { changeItemComplete } from "@src/redux/listSlice";
import cx from "classnames";

import s from "./ChangeTypeButton.module.scss";

const ChangeTypeButton = memo(({ className, id, checked }) => {
  const dispatch = useDispatch();
  const handlerClick = useCallback(() => {
    dispatch(changeItemComplete(id));
  }, [dispatch, id]);
  return <input className={cx(s.root, className)} checked={checked} onChange={handlerClick} type='checkbox' />;
});

ChangeTypeButton.displayName = "ChangeTypeButton";

export default ChangeTypeButton;
