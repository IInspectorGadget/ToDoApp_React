import {useCallback} from "react"
import "./DeleteTaskButton.sass"

export default function DeleteTaskButton(props){
    const {id, list, setList} = props 

    const handlerClick = useCallback ((e) => {
        setList(list.filter(el =>  el.id !== id))
    })

    return <>
        <button onClick = {handlerClick} className="toDoApp__delete"></button>
    </>
}