import Header from "@components/ToDoList/Header";
import Main from "@components/ToDoList/Main";
import Footer from "@components/ToDoList/Footer";
import Container from "@components/Container";

import s from "./ToDoList.module.scss";

const ToDoList = () => {
  return (
    <section className={s.root}>
      <Container className={s.container}>
        <Header />
        <Main />
        <Footer />
      </Container>
    </section>
  );
};

export default ToDoList;
