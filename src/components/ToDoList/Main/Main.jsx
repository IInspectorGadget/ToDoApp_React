import { memo, useMemo } from "react";
import { useSelector } from "react-redux";

import Task from "@components/Task";

import s from "./Main.module.scss";

const Main = memo(() => {
  const list = useSelector((state) => state.list.value);
  const filter = useSelector((state) => state.filter.value);

  const filteredList = useMemo(() => {
    switch (filter) {
      case "all":
        return list;
      case "active":
        return list.filter((el) => !el.completed);
      case "completed":
        return list.filter((el) => el.completed);
      default:
        return list;
    }
  }, [filter, list]);

  return (
    <div className={s.root}>
      <ul className={s.list}>
        {filteredList.map((el) => (
          <li className={s.item} key={el.id}>
            <Task id={el.id} value={el.value} completed={el.completed} />
          </li>
        ))}
      </ul>
    </div>
  );
});

Main.displayName = "Main";

export default Main;
