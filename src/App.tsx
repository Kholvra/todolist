import Task from "./Components/Task";

function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="size-full lg:h-3/4 lg:w-1/4 mx-auto lg:border rounded-md shadow-md">
        <div className="flex flex-col gap-10 m-5">
          <div className="flex flex-col gap-2">
            <h1>Todo List Title</h1>
            <h2>Todo List Desc</h2>
          </div>
          <Task />
        </div>
      </div>
    </div>
  );
}

export default App;
