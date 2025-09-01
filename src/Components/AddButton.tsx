type modalProps = {
    modalIsActive : ()=>void
}


function AddButton({modalIsActive}:modalProps){
    

    return (
        <div className="absolute bottom-0 right-0 m-5">
            <button className="p-1 w-10 h-10 bg-stone-300 cursor-pointer rounded-lg hover:shadow-md" onClick={modalIsActive}><img src="../../public/images/plus.svg" alt="" /></button>
        </div>
    )
}

export default AddButton;