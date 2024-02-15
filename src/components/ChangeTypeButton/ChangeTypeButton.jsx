import "./ChangeTypeButton.sass"
export default function ChangeTypeButton(props){
    const {id, checked, list, setList} = props
    const handlerClick = (e) =>{
        const updateList = list.map((el) => {
            if( el.id === id){
                el.completed = !el.completed
            }
            return el
        })
        setList(updateList);
    }
    return <input checked={checked} onChange={handlerClick} type="checkbox" className="toDoApp__select"/>
}