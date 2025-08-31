import type { MouseEvent } from "react";

export type taskType = {
  id: number;
  name: string;
  status: boolean;
};

type taskProps = {
  tasks: taskType[];
  onToggle: (e: MouseEvent<HTMLButtonElement>, id: number) => void;
};

function Task({ tasks, onToggle }: taskProps) {
  const image = {
    checkmark: "../public/images/checkmark.svg",
    notdone: "../public/images/notdone.svg",
  };

  const itemList = tasks.map((item) => {
    const bgColor: string = item.status ? "bg-emerald-200" : "bg-stone-200";
    const imageChoice = item.status ? image.checkmark : image.notdone;
    return (
      <button
        className={`flex flex-row p-2 gap-3 items-center ${bgColor} rounded-lg break-all cursor-pointer hover:shadow-lg`}
        key={item.name.toLowerCase()}
        onClick={(e) => onToggle(e, item.id)}
      >
        <img src={imageChoice} alt="" className="rounded-md" />
        <span className="">{item.name}</span>
      </button>
    );
  });
  return <div className="flex flex-col gap-3">{itemList}</div>;
}

export default Task;
