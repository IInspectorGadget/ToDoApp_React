import useLocalStorage from "../../customHooks/useLocalStorage";
import ToDoListHeader from "../ToDoListHeader/ToDoListHeader";
import ToDoListFooter from "../ToDoAppFooter/ToDoAppFooter";
import ToDoListMain from "../ToDoListMain/ToDoListMain";
import './ToDoList.sass'

export default function ToDoList() {
    const [list, setList] = useLocalStorage("list", []);
    const [filter, setFilter] = useLocalStorage("filter" ,"all")

    return <section className="toDoApp">
        <div className="toDoApp__container container">
            <ToDoListHeader list={list} setList={setList}></ToDoListHeader>           
            <ToDoListMain list={list} setList={setList} filter={filter}></ToDoListMain>            
            <ToDoListFooter list={list} setList={setList} filter={filter} setFilter={setFilter}></ToDoListFooter>
        </div>
    </section>
}