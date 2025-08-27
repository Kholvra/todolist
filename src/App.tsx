import Task from "./Components/Task";

function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-3/4 w-1/4 mx-auto border rounded-md shadow-md">
        <div>
          <h1>Todo List Title</h1>
          <h2>Todo List Desc</h2>
          <Task />
        </div>
      </div>
    </div>
  );
}

export default App;
