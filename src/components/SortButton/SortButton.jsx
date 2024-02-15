import "./SortButton.sass"
export default function ToDoListFooter(props) {
    const {type, filter, setFilter} = props;
    return <button className={filter===type? "toDoApp__sort-link toDoApp__sort-link_select": "toDoApp__sort-link"} onClick={() => setFilter(type)}>{type}</button>
}