import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import { setFilter } from "@src/redux/filterSlice";

import s from "./SortButton.module.scss";

const SortButton = memo(({ type }) => {
  const filter = useSelector((state) => state.filter.value);
  const dispatch = useDispatch();
  return (
    <button className={cx(s.root, { [s.rootSelect]: filter === type })} onClick={() => dispatch(setFilter(type))}>
      {type}
    </button>
  );
});

SortButton.displayName = "SortButton";

export default SortButton;
