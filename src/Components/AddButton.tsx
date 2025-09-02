import type { MouseEvent } from "react";

type modalProps = {
  modalIsActive: () => void;
};

type buttonRemove = {
  removeTask: (e: MouseEvent<HTMLButtonElement>,itemId:number) => void
  itemId:number
};

function AddButton({ modalIsActive }: modalProps) {
  return (
    <div className="absolute bottom-0 right-0 m-5">
      <button
        className="p-1 w-10 h-10 bg-stone-300 cursor-pointer rounded-lg hover:shadow-md"
        onClick={modalIsActive}
      >
        <img src="../../public/images/plus.svg" alt="" />
      </button>
    </div>
  );
}

AddButton.remove = ({removeTask,itemId}: buttonRemove) => {
  return (
      <button
        className="absolute right-0 m-2 p-1 w-10 h-10 cursor-pointer rounded-lg remove"
        onClick={(e) => removeTask(e, itemId)}
      >
        <img src="../../public/images/notdone.svg" alt="" />
      </button>
  );
};

export default AddButton;
