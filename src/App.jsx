import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;
  const progress = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  // Load todos dari localStorage
  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  // Simpan ke localStorage setiap kali todos berubah
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App min-h-screen flex flex-col justify-between">
      <header className="App-header bg-[#F5F5F5] text-[#212121] p-5">
        <h1 class="font-bold text-xl max-w-screen-xl mx-auto">To-Do List</h1>
      </header>

      <main class="w-screen xl:max-w-screen-xl mx-auto flex flex-col gap-5 grow p-5">
        <section className="flex flex-col xl:flex-row items-stretch gap-5">
          <TodoForm setTodos={setTodos} />
          <div className="bg-[#F5F5F5] p-5 rounded-md xl:basis-1/3 flex flex-col justify-between">
            <div className="mb-5 border-b-2 border-black w-fit pb-1">
              <h2 className="font-bold text-lg">Progress</h2>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <div className="relative w-full h-5 bg-transparent rounded-full border border-black overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-green-500 rounded-full transition-all duration-500 ease-in-out" style={{ width: `${progress}%` }}></div>
              </div>
              <span className="font-bold text-sm basis-[15%] text-center transition-all duration-500">{progress}%</span>
            </div>
          </div>
        </section>
        
        <TodoList todos={todos} setTodos={setTodos} />
      </main>

      <footer class="bg-[#F5F5F5] text-[#212121] p-5 text-center">
        <p class="text-sm">&copy; {new Date().getFullYear()} Yosia Evan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
