import { nanoid } from 'nanoid';

import useLocalStorage from '../hooks/useLocalStorage';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';

const Todos = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const addNewTodo = text => {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    const isDuplicate = todos.some(
      todo => todo.text.toLowerCase() === trimmedText.toLowerCase()
    );
    if (isDuplicate) {
      alert('Такая тудушка уже есть!');
      return;
    }

    const newTodo = {
      id: nanoid(),
      text: trimmedText,
    };

    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Form onSubmit={addNewTodo} />

      {todos.length === 0 ? (
        <p style={{ textAlign: 'center' }}>There are no any todos ...</p>
      ) : (
        <TodoList todos={todos} onDelete={deleteTodo} />
      )}
    </div>
  );
};

export default Todos;
