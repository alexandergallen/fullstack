import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const handleLeftClick = () => {
    setClicks({
      ...clicks,
      left: clicks.left + 1
    })
    setAll(allClicks.concat('L'))
  }

  const handleRightClick = () => {
    setClicks({
      ...clicks,
      right: clicks.right + 1
    })
    setAll(allClicks.concat('R'))
  }
  const [allClicks, setAll] = useState([])

  const [counter, setCounter] = useState(0)
  const increase = () => setCounter(counter + 1)
  const decrease = () => setCounter(counter - 1)
  const reset = () => setCounter(0)
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Display counter={counter} />
      <Button handleClick={increase} text="Add" />
      <Button handleClick={decrease} text="Remove" />
      <Button handleClick={reset} text="Reset" />
      <div>
        {clicks.left}
        <Button handleClick={handleLeftClick} text='left' />
        <Button handleClick={handleRightClick} text='right' />
        {clicks.right}
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
const Display = ({ counter }) => <div>Counter: {counter}</div>
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>
ReactDOM.render(<App />, document.getElementById('root'))
