import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>ToDoList</h1>
      </div>
    </header>
  );
};

export default Header;
