// ./src/hooks/useEffectAfterMount
import { useRef, useEffect } from 'react'

export default function useEffectAfterMount (callback, dep = []) {
  const componentHasMounted = useRef(false)
  useEffect(() => {
    if (componentHasMounted.current) {
      return callback()
    }
    componentHasMounted.current = true
  }, [dep])
}
