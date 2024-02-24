import useLocalStorage from "../../customHooks/useLocalStorage";
import ToDoListHeader from "./Header";
import ToDoListFooter from "./Footer";
import ToDoListMain from "./Main";
import Container from "../Container";

import s from "./ToDoList.module.scss";

const ToDoList = () => {
  const [list, setList] = useLocalStorage("list", []);
  const [filter, setFilter] = useLocalStorage("filter", "all");

  return (
    <section className={s.root}>
      <Container className={s.container}>
        <ToDoListHeader list={list} setList={setList} />
        <ToDoListMain list={list} setList={setList} filter={filter} />
        <ToDoListFooter list={list} setList={setList} filter={filter} setFilter={setFilter} />
      </Container>
    </section>
  );
};

export default ToDoList;
