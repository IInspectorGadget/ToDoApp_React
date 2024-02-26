import { memo } from "react";

import ChangeTypeButton from "@components/Task/ChangeTypeButton";
import Field from "@components/Task/Field";
import DeleteTaskButton from "@components/Task/DeleteButton";

import s from "./Task.module.scss";

const Task = memo(({ id, value, completed }) => {
  return (
    <div className={s.root}>
      <ChangeTypeButton className={s.select} id={id} checked={completed} />
      <Field classLabel={s.label} id={id} value={value} />
      <DeleteTaskButton id={id} />
    </div>
  );
});

Task.displayName = "Task";

export default Task;
