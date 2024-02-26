import { memo, useCallback } from "react";
import cx from "classnames";

import s from "./DeleteButton.module.scss";

const DeleteButton = memo(({ className, id, setList }) => {
  const handlerClick = useCallback(() => {
    setList((prev) => prev.filter((el) => el.id !== id));
  }, [id, setList]);

  return <button className={cx(s.root, className)} onClick={handlerClick} />;
});

DeleteButton.displayName = "DeleteButton";

export default DeleteButton;
