import { type FormEvent } from "react";

type toggleProps = {
  isActive: boolean;
  modalIsActive: () => void;
  addTask: (name: string) => void;
};

function Modal({ isActive, modalIsActive, addTask }: toggleProps) {
  function eventHandler(e: FormEvent) {
    e.preventDefault();
    const formSubmit = e.currentTarget;
    const input = formSubmit.querySelector(
      "#inputAddTaskName"
    ) as HTMLInputElement;
    const inputValue = input.value;
    addTask(inputValue);
    input.value = "";
    modalIsActive();
    console.log(e);
  }

  const isHidden = isActive ? "block" : "hidden";
  console.log(isHidden);

  return (
    <>
      <div
        className={`absolute ${isHidden} z-50 inset-0 opacity-30 bg-stone-500`}
        onClick={modalIsActive}
      ></div>
      <div
        className={`absolute ${isHidden} z-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/ bg-white rounded-lg`}
      >
        <div className="p-2">
          <form
            onSubmit={eventHandler}
            className="flex flex-row gap-3 justify-center"
          >
            <input
              type="text"
              name="taskName"
              id="inputAddTaskName"
              className="border"
            />
            <button type="submit" className="cursor-pointer">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;
