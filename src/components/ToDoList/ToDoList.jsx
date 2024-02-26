import useLocalStorage from "@src/customHooks/useLocalStorage";
import Header from "@components/ToDoList/Header";
import Main from "@components/ToDoList/Main";
import Footer from "@components/ToDoList/Footer";
import Container from "@components/Container";

import s from "./ToDoList.module.scss";

const ToDoList = () => {
  const [list, setList] = useLocalStorage("ToDoList", []);
  const [filter, setFilter] = useLocalStorage("ToDoFilter", "all");

  return (
    <section className={s.root}>
      <Container className={s.container}>
        <Header list={list} setList={setList} />
        <Main list={list} setList={setList} filter={filter} />
        <Footer list={list} setList={setList} filter={filter} setFilter={setFilter} />
      </Container>
    </section>
  );
};

export default ToDoList;
