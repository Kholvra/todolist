type modalProps = {
    modalIsActive : ()=>void
}


function AddButton({modalIsActive}:modalProps){
    

    return (
        <div>
            <button className="p-1 m-5 justify-self-end bg-stone-300 rounded-lg hover:shadow-md" onClick={modalIsActive}><img src="../../public/images/plus.svg" alt="" /></button>
        </div>
    )
}

export default AddButton;