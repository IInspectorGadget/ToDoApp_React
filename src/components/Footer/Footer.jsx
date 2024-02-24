import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.root}>
      <p>Double-click to edit a todo</p>
      <p>
        Created by <a href='#'>Daniil Sivtsov</a>
      </p>
    </footer>
  );
};

export default Footer;
