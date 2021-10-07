import './App.css'
import { useState } from 'react'
import Expandable from './components/Expandable'

const information = [
  {
    header: 'Why everyone should live forever',
    note: 'This is highly sensitive information ... !!!!'
  },
  {
    header: 'The internet disappears',
    note:
      'I just uncovered the biggest threat...'
  },
  {
    header: 'The truth about Elon musk and Mars!',
    note: 'Nobody tells you this...'
  }
]

function App () {
  const [activeIndex, setActiveIndex] = useState(null)
  const onToggle = evt => setActiveIndex(evt.target.dataset.index)

  return (
    <div className='App'>
      {information.map(({ header, note }, index) => (
        <Expandable
          key={index}
          onToggle={onToggle}
          shouldExpand={index === +activeIndex}
        >
          <Expandable.Header
            style={{ color: 'red', border: '1px solid teal' }}
            data-index={index}>
            {header}{' '}
            <Expandable.Icon />
          </Expandable.Header>
          <Expandable.Body>{note}</Expandable.Body>
        </Expandable>
      ))}
    </div>
  )
}

export default App
