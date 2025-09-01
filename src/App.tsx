import { useState, type MouseEvent } from "react";
import Task from "./Components/Task";
import AddButton from "./Components/AddButton";
import Modal from "./Components/Modal";

function App() {
  const [taskItems, setTaskItems] = useState([
    {
      id: 0,
      name: "abby",
      status: false,
    },
    {
      id: 1,
      name: "halo",
      status: true,
    },
  ]);

  const toggleTaskStatus = (
    event: MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    console.log(event.currentTarget, id);
    setTaskItems((prev) =>
      prev.map((item) => {
        if (item.id === id) return { ...item, status: !item.status };
        return item;
      })
    );
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    setTimeout(() => {
      const inputText = document.querySelector(
        "#inputAddTaskName"
      ) as HTMLInputElement;
      inputText.focus();
    }, 1);
  };

  const addTaskItem = (name: string) => {
    console.log(taskItems);
    if (name) {
      const newList = {
        id: taskItems.length + 1,
        name: name,
        status: false,
      };
      console.log(newList);
      setTaskItems((prev) => {
        return [...prev, newList];
      });
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative flex flex-col justify-between size-full lg:h-3/4 lg:w-1/4 mx-auto lg:border rounded-md shadow-md">
        <div className="flex flex-col gap-10 m-5 h-full overflow-hidden">
          <div className="flex flex-col gap-2">
            <h1>Todo List Title</h1>
            <h2>Todo List Desc</h2>
          </div>
          <div className="h-3/4 overflow-auto">
            <Task tasks={taskItems} onToggle={toggleTaskStatus} />
          </div>
        </div>
        <AddButton modalIsActive={toggleModal} />
        <Modal
          isActive={modal}
          modalIsActive={toggleModal}
          addTask={addTaskItem}
        />
      </div>
    </div>
  );
}

export default App;
