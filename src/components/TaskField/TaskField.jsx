import {useCallback, useState, useRef, useEffect } from "react"
import "./TaskField.sass"

export default function TaskField(props){
    const {id, value, list, setList} = props
    const [editValue, setEditValue] = useState(value);
    const [isReadOnly, setIsReadOnly] = useState(true);

    const ref = useRef();

    const handlerChange = useCallback ((e) => {
        setEditValue(e.target.value);
    })

    const handlerDoubleClick  = useCallback ((e) => {
        ref.current.style.display = "block"
        ref.current.focus()
    })

    const handlerBlur = useCallback ((e) => {
        const updateList = list.map((el) => {
            if( el.id === id){
                el.value = editValue
            }
            return el
        })
        setList(updateList);
        ref.current.style.display = "none"
    })
 
    return <>
        <input ref={ref} value={editValue} onChange={handlerChange} onBlur={handlerBlur} type="text" className="toDoApp__edit-input"/>
        <label onDoubleClick={handlerDoubleClick} className="toDoApp__label">{value}</label>
    </> 
}