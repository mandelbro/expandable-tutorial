// ./src/components/Expandable/useExpandable.js
import { useMemo, useCallback, useState } from 'react'
import useEffectAfterMount from '../../hooks/useEffectAfterMount'

export default function useExpandable({
  onToggle,
  shouldExpand
}) {
  const isExpandControlled = shouldExpand !== undefined
  const [expanded, setExpanded] = useState(false)
  const getState = isExpandControlled ? shouldExpand : expanded
  const toggle = useCallback(() => setExpanded(prevExpanded => !prevExpanded), [])
  const getToggle = isExpandControlled ? onToggle : toggle

  useEffectAfterMount(() => {
    if (onToggle && !isExpandControlled) onToggle(expanded)
  }, [expanded])

  // check it 👀👇
  // Instead of togglerProps, we now create a memoized function, getTogglerProps,
  // that returns the same props collection.
  const getTogglerProps = useCallback(
    () => ({
      onClick: getToggle,
      'aria-expanded': getState
    }),
    [getToggle, getState]
  )

  return useMemo(() => ({
    expanded: getState,
    toggle: getToggle,
    getTogglerProps
  }), [
    getState,
    getToggle,
    getTogglerProps
  ])
}
