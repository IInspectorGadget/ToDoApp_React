import ChangeTypeButton from "./ChangeTypeButton";
import Field from "./Field";
import DeleteTaskButton from "./DeleteButton";

import s from "./Task.module.scss";

const Task = ({ id, value, completed, setList }) => {
  return (
    <div className={s.root}>
      <ChangeTypeButton className={s.select} id={id} checked={completed} setList={setList} />
      <Field classLabel={s.label} id={id} value={value} setList={setList} />
      <DeleteTaskButton id={id} setList={setList} />
    </div>
  );
};

export default Task;
