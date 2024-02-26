import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "@src/redux/listSlice";
import cx from "classnames";

import s from "./DeleteButton.module.scss";

const DeleteButton = memo(({ className, id }) => {
  const dispatch = useDispatch();
  const handlerClick = useCallback(() => {
    dispatch(deleteItem(id));
  }, [id, dispatch]);

  return <button className={cx(s.root, className)} onClick={handlerClick} />;
});

DeleteButton.displayName = "DeleteButton";

export default DeleteButton;
