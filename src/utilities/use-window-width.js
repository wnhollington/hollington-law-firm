import { useState, useEffect } from "react"
import { window } from "browser-monads"

export const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState({
      width: undefined
    })
  
    useEffect(() => {

      const handleResize = () => setWindowWidth({
        width: window.innerWidth
      })
      window.addEventListener('resize', handleResize)
  
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    })
  
    return windowWidth
  }