import DeleteTaskButton from "../DeleteTaskButton/DeleteTaskButton";
import ChangeTypeButton from "../ChangeTypeButton/ChangeTypeButton";
import TaskField from "../TaskField/TaskField";
import "./Task.sass"

export default function Task(props){
    const {id, value, completed, list, setList} = props 
    
    return <div className="toDoApp__view">
        <ChangeTypeButton id={id} checked = {completed} list = {list} setList = {setList}></ChangeTypeButton>
        <TaskField id={id} value = {value} list = {list} setList = {setList}></TaskField>
        <DeleteTaskButton id = {id} list = {list} setList = {setList} ></DeleteTaskButton>
    </div>
  
}