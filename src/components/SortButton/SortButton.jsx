import { memo } from "react";
import cx from "classnames";

import s from "./SortButton.module.scss";

const SortButton = memo(({ type, filter, setFilter }) => {
  return (
    <button className={cx(s.root, { [s.rootSelect]: filter === type })} onClick={() => setFilter(type)}>
      {type}
    </button>
  );
});

SortButton.displayName = "SortButton";

export default SortButton;
