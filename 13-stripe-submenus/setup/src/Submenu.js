import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
 const {isSubmenuOpened } = useGlobalContext();

  return (
  <aside className={`${isSubmenuOpened?'submenu show':'submenu'}`}> 
    submenu
  </aside>
  )
}

export default Submenu
