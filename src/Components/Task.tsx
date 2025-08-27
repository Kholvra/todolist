function Task() {
  const taskItems = [
    {
      name: "abby",
      status: false,
    },
    {
      name: "nadia",
      status: true,
    },
  ];

  const image = {
    checkmark: "../public/images/checkmark.svg",
    notdone: "../public/images/notdone.svg",
  };

  function taskHandler (){
    
  }

  const itemList = taskItems.map((item) => {
    console.log(`${item.status} ${item.name}`);
    const bgColor: string = item.status ? "bg-emerald-200" : "bg-stone-200";
    const imageChoice = item.status ? image.checkmark : image.notdone;
    return (
      <button
        className={`flex flex-row p-2 gap-3 items-center ${bgColor} rounded-lg break-all cursor-pointer hover:shadow-lg`}
        key={item.name.toLowerCase()}
        onClick={taskHandler}
      >
        <img src={imageChoice} alt="" className="rounded-md" />
        <span className="">{item.name}</span>
      </button>
    );
  });
  return <>{itemList}</>;
}

export default Task;
