import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
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
