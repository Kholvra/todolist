import { useState, type MouseEvent } from "react";
import Task from "./Components/Task";
import AddButton from "./Components/AddButton";
import Modal from "./Components/Modal";

function App() {
  const [taskItems, setTaskItems] = useState([
    {
      name: "abby",
      status: false,
      id: 0,
    },
    {
      name: "Nadia",
      status: true,
      id: 1,
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
  };

  // const addTaskItem = (data: taskType) => {
  //   setTaskItems((prev) => [...prev, data]);
  // };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative size-full lg:h-3/4 lg:w-1/4 mx-auto lg:border rounded-md shadow-md">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-10 m-5">
            <div className="flex flex-col gap-2">
              <h1>Todo List Title</h1>
              <h2>Todo List Desc</h2>
            </div>
            <div>
              <Task tasks={taskItems} onToggle={toggleTaskStatus} />
            </div>
          </div>
          <AddButton modalIsActive={toggleModal} />
        </div>
        <Modal isActive={modal} />
      </div>
    </div>
  );
}

export default App;
