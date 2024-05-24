import { useState } from "react";
import AddModal from "./AddModal";
import NoTasksFound from "./NoTasksFound";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskLists from "./TaskLists";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React & Vite",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam mollitia rerum odit totam laboriosam, adipisci nemo pariatur delectus. Neque alias tenetur earum necessitatibus numquam voluptatibus.",
    tags: ["web", "javascript", "react"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddEditClick(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((t) => {
          if (t.id === newTask.id) {
            return newTask;
          }
          return t;
        })
      );
    }

    setShowAddModal(false);
  }
  function handleEditTask(editedTask) {
    setTaskToUpdate(editedTask);
    setShowAddModal(true);
  }
  function handleCloseClick() {
    setShowAddModal(false);
    setTaskToUpdate(null);
  }
  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  function handleAllTaskDelete() {
    setTasks([]);
  }
  function handleFavorite(taskId) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const cloneTasks = [...tasks];
    cloneTasks[taskIndex].isFavorite = !cloneTasks[taskIndex].isFavorite;
    setTasks(cloneTasks);
  }
  function onSearchClick(searchTask) {
    console.log(searchTask);

    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTask.toLowerCase())
    );
    setTasks([...filtered]);
  }
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddModal
          onSave={handleAddEditClick}
          onEdit={taskToUpdate}
          onClose={handleCloseClick}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask searchTerm={onSearchClick} />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            handleAddClick={() => setShowAddModal(true)}
            deleteAllTask={handleAllTaskDelete}
          />
          {tasks.length > 0 ? (
            <TaskLists
              tasks={tasks}
              onEditTask={handleEditTask}
              deleteTask={handleDeleteTask}
              onFavorite={handleFavorite}
            />
          ) : (
            <NoTasksFound />
          )}
        </div>
      </div>
    </section>
  );
}
