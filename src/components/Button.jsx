import React from 'react'

const Button = ({ handler, label, id }) => {
  return (
    <button onClick={() => handler(id)} >{label}</button>
  )
}

export default Button