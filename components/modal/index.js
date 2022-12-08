import React, { useEffect, useRef } from 'react'
import { ModalComponent } from './modal';

export default function Modal( props ) {

  const modalRef = useRef(null);

  useEffect(()=>{
    document.addEventListener('click', closeModal)
  },[]);

  const closeModal = (event) =>{
    event.stopPropagation();

    if( event.target === modalRef.current) props.closeModal();
    
  }

  if(props.closed) return(<></>)

  return (
    <ModalComponent ref={modalRef}>
      {
        props.children
      }
    </ModalComponent>
  )
}
