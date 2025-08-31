type modalProps = {
    modalIsActive : ()=>void
}


function AddButton({modalIsActive}:modalProps){
    

    return (
        <div className="self-end">
            <button className="p-1 m-5 w-10 h-10 bg-stone-300 cursor-pointer rounded-lg hover:shadow-md" onClick={modalIsActive}><img src="../../public/images/plus.svg" alt="" /></button>
        </div>
    )
}

export default AddButton;