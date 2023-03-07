import React from 'react'
import { useGlobalContext } from '../context'
import "../Style/Modal.css"
const Modal = () => {
    const {showRemoveModal,cancelHandler,deleteItem,confirmHandler,deleteId} = useGlobalContext()
  return (
    <div className={`${showRemoveModal?"modal":"hideModal"}`}>
        <h3>Confirm remove <span>{deleteItem}</span></h3>
        <div className='button-container'>
        <button className="confirm" onClick={()=> confirmHandler(deleteId)}>Confirm Remove</button>
        <button className="cancel" onClick={cancelHandler}>Cancel</button>
        </div>
        
    </div>
  )
}

export default Modal