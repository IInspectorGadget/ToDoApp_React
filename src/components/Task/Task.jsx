import { memo } from "react";

import ChangeTypeButton from "@components/Task/ChangeTypeButton";
import Field from "@components/Task/Field";
import DeleteTaskButton from "@components/Task/DeleteButton";

import s from "./Task.module.scss";

const Task = memo(({ id, value, completed, setList }) => {
  return (
    <div className={s.root}>
      <ChangeTypeButton className={s.select} id={id} checked={completed} setList={setList} />
      <Field classLabel={s.label} id={id} value={value} setList={setList} />
      <DeleteTaskButton id={id} setList={setList} />
    </div>
  );
});

Task.displayName = "Task";

export default Task;
