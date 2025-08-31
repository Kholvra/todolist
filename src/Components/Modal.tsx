type toggleProps = {
    isActive: boolean
}


function Modal({isActive}:toggleProps) {

    const isHidden =  isActive ? "block" : "hidden"
    console.log(isHidden)

  return (
    <>
    <div className={isHidden}>
        <div className={`absolute  inset-0 opacity-30 bg-stone-500`}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/ bg-white rounded-lg">
            <div className="p-2">
              <form action="" className="flex flex-row gap-3 justify-center">
                <input type="text" name="" id="" className="border" />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
    </div>
    </>
  );
}

export default Modal;
