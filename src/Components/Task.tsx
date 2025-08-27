import { useState, type MouseEvent } from "react";

function Task() {
  const [taskItems, setTaskItems] = useState([
    {
      name: "abby",
      status: false,
      id: 1,
    },
    {
      name: "Nadia",
      status: true,
      id: 2,
    },
  ]);

  const image = {
    checkmark: "../public/images/checkmark.svg",
    notdone: "../public/images/notdone.svg",
  };

  function taskHandler(event: MouseEvent<HTMLButtonElement>, id: number) {
    console.log(event.currentTarget, id);
    setTaskItems((prev) =>
      prev.map((item) => {
        if (item.id === id) return { ...item, status: !item.status };
        return item;
      })
    );
  }

  const itemList = taskItems.map((item) => {
    const bgColor: string = item.status ? "bg-emerald-200" : "bg-stone-200";
    const imageChoice = item.status ? image.checkmark : image.notdone;
    return (
      <button
        className={`flex flex-row p-2 gap-3 items-center ${bgColor} rounded-lg break-all cursor-pointer hover:shadow-lg`}
        key={item.name.toLowerCase()}
        onClick={(e) => taskHandler(e, item.id)}
      >
        <img src={imageChoice} alt="" className="rounded-md" />
        <span className="">{item.name}</span>
      </button>
    );
  });
  return <div className="flex flex-col gap-3">{itemList}</div>;
}

export default Task;