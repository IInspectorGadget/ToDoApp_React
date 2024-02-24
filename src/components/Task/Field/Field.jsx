import { useState, useRef, useCallback } from "react";

import cx from "classnames";

import s from "./Field.module.scss";

const Field = ({ classInput, classLabel, id, value, setList }) => {
  const [editValue, setEditValue] = useState(value);

  const ref = useRef();

  const handlerChange = (e) => {
    setEditValue(e.target.value);
  };

  const handlerDoubleClick = useCallback(() => {
    ref.current.style.display = "block";
    ref.current.focus();
  }, []);

  const handlerBlur = useCallback(() => {
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
};

export default Field;
