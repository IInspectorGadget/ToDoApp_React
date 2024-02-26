import { memo, useCallback } from "react";

import SortButton from "@components/SortButton";

import s from "./Footer.module.scss";

const Footer = memo(({ list, setList, filter, setFilter }) => {
  const deleteCompleted = useCallback(() => {
    setList((prev) => prev.filter((el) => el.completed !== true));
  }, [setList]);
  return (
    <div className={s.root}>
      <p className={s.itemCount}>item left {list.length - list.reduce((acc, cur) => acc + cur.completed, 0)}</p>
      <ul className={s.sortList}>
        {["all", "active", "completed"].map((el, idx) => (
          <li key={idx} className={s.sortItem}>
            <SortButton type={el} filter={filter} setFilter={setFilter} />
          </li>
        ))}
      </ul>
      <button className={s.clearButton} onClick={deleteCompleted}>
        Clear completed
      </button>
    </div>
  );
});

Footer.displayName = "Footer";

export default Footer;
