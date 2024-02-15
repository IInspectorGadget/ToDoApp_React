import { createElement, useCallback, useEffect, useState } from "react"
import useLocalStorage from "../../customHooks/useLocalStorage";
import "./ToDoListHeader.sass"
export default function ToDoListHeader(props) {
    const {list, setList} = props
    const [inputValue, setInputValue] = useState("");
    const [isChecked, setIsChecked] = useLocalStorage("checkedButton", false);

    useEffect( ()=>{
        const allCompleted = list.every(task => task.completed === true);
        setIsChecked(allCompleted);
    },[list])


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const item = {
                id: Math.random(),
                value: inputValue,
                completed: false,
            }
            setList([...list, item]);
        }
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const changeAllCompleteStates = useCallback((e) => {
        const updateList = list.map(el => {
            el.completed = e.target.checked
            return el
        })

        setList(updateList)
        setIsChecked(!isChecked)
    }, [list])

    return <div className="toDoApp__header">
        <input id="select-all" className="toDoApp__select-all-input" type="checkbox" checked={isChecked} onChange={changeAllCompleteStates}></input>
        <label htmlFor="select-all" className="toDoApp__select-all-label"></label>
        <input className="toDoApp__add-input" placeholder="What needs to be done?" value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown}></input>
    </div>	
}