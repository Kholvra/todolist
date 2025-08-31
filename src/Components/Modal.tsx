type toggleProps = {
    isActive: boolean
    modalIsActive : ()=> void
}


function Modal({isActive, modalIsActive}:toggleProps) {

    const isHidden =  isActive ? "inline" : "hidden"
    console.log(isHidden)

  return (
    <>
        <div className={`absolute ${isHidden} z-50 inset-0 opacity-30 bg-stone-500`} onClick={modalIsActive}></div>
          <div className={`absolute ${isHidden} z-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/ bg-white rounded-lg`}>
            <div className="p-2">
              <form action="" className="flex flex-row gap-3 justify-center">
                <input type="text" name="" id="" className="border" />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
    </>
  );
}

export default Modal;
