import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inpuRef = useRef()

    const onClick = () => {
        //document.querySelector('input').select()
        //console.log(inpuRef)
        inpuRef.current.select()
    }

  return (
    <>
            <h1>Focus Screen </h1>
            <hr />

            <input
            ref={inpuRef} 
            type="text" 
            placeholder='Ingrese su nombre'
            className='form-control'

            />

            <button 
            className='btn btn-primary mt-2'
            onClick={onClick}>
                Set Focus
            </button>
    </>
  )
}

