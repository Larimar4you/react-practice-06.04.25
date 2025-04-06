import TodoListItem from '../TodoListItem/TodoListItem';
import style from './TodoList.module.css';

const TodoList = ({ todos, onDelete }) => (
  <ul className={style.list}>
    {todos.map((todo, index) => (
      <li key={todo.id} className={style.item}>
        <TodoListItem todo={todo} index={index} onDelete={onDelete} />
      </li>
    ))}
  </ul>
);

export default TodoList;
