import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MainApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);
  const [dueDate, setDueDate] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  // Save to localStorage
  const saveToLS = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleAdd = () => {
    const newTodos = [
      ...todos,
      {
        id: uuidv4(),
        todo,
        isCompleted: false,
        createdAt: new Date(),
        dueDate,
      },
    ];
    setTodos(newTodos);
    setTodo("");
    setDueDate(null);
    saveToLS(newTodos);
  };

  const handleDelete = (id) => {
    const filtered = todos.filter((t) => t.id !== id);
    setTodos(filtered);
    saveToLS(filtered);
  };

  const handleEdit = (id) => {
    const t = todos.find((item) => item.id === id);
    setTodo(t.todo);
    setDueDate(t.dueDate ? new Date(t.dueDate) : null);
    const updated = todos.filter((item) => item.id !== id);
    setTodos(updated);
    saveToLS(updated);
  };

  const handleCheckbox = (id) => {
    const updated = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(updated);
    saveToLS(updated);
  };

  const getStreak = () => {
    const today = new Date().toDateString();
    const doneToday = todos.some(
      (t) => t.isCompleted && new Date(t.createdAt).toDateString() === today
    );
    return doneToday ? "🔥 Streak Continued!" : "☁️ No streak today yet";
  };

  const completed = todos.filter((t) => t.isCompleted).length;
  const total = todos.length;
  const progress = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 dark:bg-slate-800 min-h-[80vh] md:w-[40%] text-black dark:text-white">
      <h1 className="text-center text-4xl font-bold mb-2 text-indigo-800 dark:text-indigo-300">
        FocusCue
      </h1>
      <p className="text-center text-slate-600 dark:text-slate-300 mb-4">
        Stay consistent. Build your focus. Track your streak.
      </p>

      {/* Streak */}
      <div className="text-center text-lg mb-3">{getStreak()}</div>

      {/* Progress Bar */}
      {total > 0 && (
        <div className="w-full bg-slate-300 rounded-full h-3 mb-4">
          <div
            className="bg-indigo-700 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {/* Add Todo */}
      <div className="addTodo my-6">
        <h2 className="text-2xl font-bold mb-4">Add a Todo</h2>
        <div className="flex flex-col gap-4">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            placeholder="Your task..."
            className="w-full bg-white dark:bg-slate-700 text-black dark:text-white rounded-full px-5 py-2 border border-slate-300 dark:border-slate-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <DatePicker
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            placeholderText="Select due date"
            className="w-full bg-white dark:bg-slate-700 text-black dark:text-white rounded-full px-5 py-2 border border-slate-300 dark:border-slate-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Centered Add Button */}
          <div className="flex justify-center">
            <button
              onClick={handleAdd}
              disabled={todo.length < 3}
              className="bg-indigo-700 hover:bg-indigo-900 text-white px-6 py-2 rounded-full font-semibold disabled:bg-indigo-400"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Toggle */}
      <label className="flex items-center gap-2 mt-3 mb-2">
        <input
          type="checkbox"
          checked={showFinished}
          onChange={() => setShowFinished(!showFinished)}
        />
        Show Completed
      </label>

      {/* Todo List */}
      <h2 className="text-xl font-semibold mt-4 mb-2">Your Tasks</h2>
      {todos.length === 0 && <p>No tasks yet. Add one above!</p>}
      <div className="space-y-3">
        {todos.map((t) => {
          if (!showFinished && t.isCompleted) return null;
          return (
            <div
              key={t.id}
              className="flex justify-between items-center p-2 rounded-md bg-white dark:bg-slate-700"
            >
              <div className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  checked={t.isCompleted}
                  onChange={() => handleCheckbox(t.id)}
                />
                <div
                  className={`flex flex-col ${
                    t.isCompleted ? "line-through" : ""
                  }`}
                >
                  <span>{t.todo}</span>
                  {t.dueDate && (
                    <span className="text-sm text-slate-500 dark:text-slate-300">
                      Due: {new Date(t.dueDate).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(t.id)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-2 py-1 rounded-md"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-2 py-1 rounded-md"
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainApp;
