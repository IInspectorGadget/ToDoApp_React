import { memo, useCallback, useEffect, useState } from "react";

import useLocalStorage from "@src/customHooks/useLocalStorage";

import s from "./Header.module.scss";

const Header = memo(({ list, setList }) => {
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useLocalStorage("ToDoCheckedButton", false);

  useEffect(() => {
    const allCompleted = list.every((task) => task.completed === true);
    setIsChecked(allCompleted);
  }, [list, setIsChecked]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" && e.target.value.trim().length) {
        const item = {
          id: Math.random(),
          value: inputValue.trim(),
          completed: false,
        };
        setList((prev) => [...prev, item]);
      }
      if (e.key === "Escape" || e.key === "Enter") {
        setInputValue("");
        e.currentTarget.blur();
      }
    },
    [inputValue, setList, setInputValue],
  );

  const handleChange = useCallback(
    (e) => {
      setInputValue(e.currentTarget.value);
    },
    [setInputValue],
  );

  const changeAllCompleteStates = useCallback(
    (e) => {
      setList((prev) =>
        prev.map((el) => {
          el.completed = e.target.checked;
          return el;
        }),
      );
      setIsChecked((prev) => !prev);
    },
    [setList, setIsChecked],
  );

  return (
    <div className={s.root}>
      <input className={s.input} id='select-all' type='checkbox' checked={isChecked} onChange={changeAllCompleteStates} />
      <label className={s.label} htmlFor='select-all'></label>
      <input
        className={s.addInput}
        placeholder='What needs to be done?'
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
});

Header.displayName = "Header";

export default Header;
