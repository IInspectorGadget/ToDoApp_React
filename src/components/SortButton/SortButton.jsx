import cx from "classnames";

import s from "./SortButton.module.scss";

const ToDoListFooter = ({ type, filter, setFilter }) => {
  return (
    <button className={cx(s.root, { [s.rootSelect]: filter === type })} onClick={() => setFilter(type)}>
      {type}
    </button>
  );
};

export default ToDoListFooter;
