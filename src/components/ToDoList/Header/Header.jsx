import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, changeCompletes } from "@src/redux/listSlice";

import useLocalStorage from "@src/customHooks/useLocalStorage";

import s from "./Header.module.scss";

const Header = memo(() => {
  const list = useSelector((state) => state.list.value);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useLocalStorage("ToDoCheckedButton", false);

  useEffect(() => {
    const allCompleted = list.every((task) => task.completed);
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
        dispatch(addItem(item));
      }
      if (e.key === "Escape" || e.key === "Enter") {
        setInputValue("");
        e.currentTarget.blur();
      }
    },
    [dispatch, inputValue, setInputValue],
  );

  const handleChange = useCallback(
    (e) => {
      setInputValue(e.currentTarget.value);
    },
    [setInputValue],
  );

  const changeAllCompleteStates = useCallback(
    (e) => {
      dispatch(changeCompletes(e.target.checked));
      setIsChecked((prev) => !prev);
    },
    [dispatch, setIsChecked],
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
