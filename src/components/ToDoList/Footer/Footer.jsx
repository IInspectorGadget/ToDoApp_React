import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompleted } from "@src/redux/listSlice";

import SortButton from "@components/SortButton";

import s from "./Footer.module.scss";

const Footer = memo(() => {
  const list = useSelector((state) => state.list.value);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(deleteCompleted());
  }, [dispatch]);

  return (
    <div className={s.root}>
      <p className={s.itemCount}>item left {list.length - list.reduce((acc, cur) => acc + cur.completed, 0)}</p>
      <ul className={s.sortList}>
        {["all", "active", "completed"].map((el, idx) => (
          <li key={idx} className={s.sortItem}>
            <SortButton type={el} />
          </li>
        ))}
      </ul>
      <button className={s.clearButton} onClick={handleClick}>
        Clear completed
      </button>
    </div>
  );
});

Footer.displayName = "Footer";

export default Footer;
