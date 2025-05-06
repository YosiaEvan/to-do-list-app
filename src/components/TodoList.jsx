import TodoItem from './TodoItem';

function TodoList({ todos, setTodos }) {
    return (
        <section class="bg-[#F5F5F5] p-5 rounded-md">
            <header class="mb-5 border-b-2 border-black w-fit pb-1">
                <h2 class="font-bold text-lg">To-Do List</h2>
            </header>
            
            <ul class="flex flex-col gap-2">
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
                ))}
            </ul>
        </section>
    );
}

export default TodoList;