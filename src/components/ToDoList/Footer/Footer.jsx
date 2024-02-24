import SortButton from "../../SortButton/SortButton";

import s from "./Footer.module.scss";

const Footer = ({ list, setList, filter, setFilter }) => {
  const deleteCompleted = () => {
    setList((prev) => prev.filter((el) => el.completed !== true));
  };
  return (
    <div className={s.root}>
      <p className={s.itemCount}>item left {list.reduce((acc, cur) => acc + cur.completed, 0)}</p>
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
};

export default Footer;
