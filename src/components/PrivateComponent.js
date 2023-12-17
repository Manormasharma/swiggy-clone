import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateComponent = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default PrivateComponent