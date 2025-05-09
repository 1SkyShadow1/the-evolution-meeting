
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Initial check on mount
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Function to handle resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Add event listener with debounce
    let timeoutId: NodeJS.Timeout | null = null
    const debouncedResize = () => {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        handleResize()
        timeoutId = null
      }, 100)
    }
    
    window.addEventListener("resize", debouncedResize)
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", debouncedResize)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  return isMobile
}
