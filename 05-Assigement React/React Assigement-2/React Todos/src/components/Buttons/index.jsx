import React, { useDebugValue } from 'react'

const ButtonCustom = (props) => {
    const { type = "primary", text = "Button", onclick } = props
  return (
    <button className={`btn btn-${type}`} onClick={onclick}>{text}</button>
  )
}

export default ButtonCustom