import { useMemo } from "react";
import Task from "../../Task/Task";
import s from "./Main.module.scss";

const Main = ({ list, setList, filter }) => {
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
            <Task id={el.id} value={el.value} completed={el.completed} setList={setList} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
