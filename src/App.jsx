import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <ToDoList />
      <Footer />
    </div>
  );
}

export default App;
