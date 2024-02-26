import { useState, useRef, useCallback, memo } from "react";
import cx from "classnames";

import s from "./Field.module.scss";

const Field = memo(({ classInput, classLabel, id, value, setList }) => {
  const [editValue, setEditValue] = useState(value);

  const ref = useRef();

  const handlerChange = useCallback(
    (e) => {
      setEditValue(e.target.value);
    },
    [setEditValue],
  );

  const handlerDoubleClick = useCallback(() => {
    ref.current.style.display = "block";
    ref.current.focus();
  }, []);

  const handlerBlur = useCallback(() => {
    setEditValue((prev) => prev.trim());
    setList((prev) =>
      prev.map((el) => {
        if (el.id === id) {
          el.value = editValue;
        }
        return el;
      }),
    );
    ref.current.style.display = "none";
  }, [id, setList, editValue]);

  return (
    <>
      <input
        ref={ref}
        value={editValue}
        onChange={handlerChange}
        onBlur={handlerBlur}
        type='text'
        className={cx(s.editInput, classInput)}
      />
      <label onDoubleClick={handlerDoubleClick} className={cx(s.label, classLabel)}>
        {value}
      </label>
    </>
  );
});

Field.displayName = "Field";

export default Field;
