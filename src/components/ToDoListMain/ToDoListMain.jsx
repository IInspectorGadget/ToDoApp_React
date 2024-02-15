import { useCallback, useMemo } from "react"
import Task from "../Task/Task"
import "./ToDoListMain.sass"

export default function ToDoListMain(props) {
    const {list, setList, filter} = props

    const filteredList = useMemo(() => {
        switch(filter) {
            case "all": 
                return list
            case "active":
                return list.filter(el => !el.completed)
            case "completed":
                return list.filter(el => el.completed)
            default:
                return list
        }
    },[filter])



    return<div className="toDoApp__main">
        <ul className="toDoApp__list">
            {filteredList.map(el => 
                <li className="toDoApp__item" key={el.id}>
                    <Task id={el.id} value={el.value} completed={el.completed} list={list} setList={setList}></Task>
                </li>
            )}
        </ul>
    </div>
}