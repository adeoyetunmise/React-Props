import React from 'react'

const Button = ({name, color, sayHello}) => {
  return (
    <>
    <button onClick={()=>sayHello(8765)} className={color}>{name}</button>
    
    </>
  )
}

export default Button