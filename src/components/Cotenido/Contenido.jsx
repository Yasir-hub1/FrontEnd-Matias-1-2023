import React from 'react'
import Sidebar from '../Sidebar'
import MainDash from '../MainDash/MainDash'

function Contenido() {
  return (
    <>
      <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        {/* <RightSide/> */}
      </div>
    </div>
    </>
  )
}

export default Contenido