import SortButton from "../SortButton/SortButton"
import "./ToDoAppFooter.sass"

export default function ToDoListFooter(props) {
    const {list, setList, filter, setFilter} = props;
    const deleteCompleted = (e) =>{
        const updateList = list.filter(el => el.completed !== true)
        setList(updateList)
    }
    return <div className="toDoApp__footer">
        <p id="items-count" className="toDoApp__item-count"> item left {list.reduce((acc,cur) =>  acc + cur.completed, 0)}</p>			
        <ul id="filter" className="toDoApp__sort-list">
            <li className="toDoApp__sort-item"><SortButton type="all" filter={filter} setFilter={setFilter}></SortButton></li>
            <li className="toDoApp__sort-item"><SortButton type="active" filter={filter} setFilter={setFilter}></SortButton></li>
            <li className="toDoApp__sort-item"><SortButton type="completed" filter={filter} setFilter={setFilter}></SortButton></li>
        </ul>		
        <button className="toDoApp__clear-button" onClick={deleteCompleted}>Clear completed</button>
    </div>
}