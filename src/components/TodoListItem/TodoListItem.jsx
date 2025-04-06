import { RiDeleteBinLine } from 'react-icons/ri';
import style from './TodoListItem.module.css';

const TodoListItem = ({ todo, index, onDelete }) => (
  <div className={style.box}>
    <p className={style.title}>TODO #{index + 1}</p>
    <p>{todo.text}</p>
    <button
      className={style.deleteButton}
      type="button"
      onClick={() => onDelete(todo.id)}
    >
      <RiDeleteBinLine size={24} />
    </button>
  </div>
);

export default TodoListItem;
