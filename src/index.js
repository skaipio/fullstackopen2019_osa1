import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => (<h1>{title}</h1>)

const PalauteNappi = ({handleClick, text}) =>
  <button onClick={handleClick}>{text}</button>

const Palaute = ({handleGoodClick, handleNeutralClick, handleBadClick}) =>
  <div>
    <PalauteNappi text="hyvä" handleClick={handleGoodClick}/>
    <PalauteNappi text="neutraali" handleClick={handleNeutralClick} />
    <PalauteNappi text="huono" handleClick={handleBadClick} />
  </div>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  return (
    <div>
      <div>hyvä {good}</div>
      <div>neutraali {neutral}</div>
      <div>huono {bad}</div>
      <div>yhteensä {good + neutral + bad}</div>
      <div>keskiarvo {(good - bad)/total}</div>
      <div>positiivisia {good / total * 100} %</div>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title="anna palautetta" />
      <Palaute
        handleGoodClick={() => setGood(good + 1)}
        handleNeutralClick={() => setNeutral(neutral + 1)}
        handleBadClick={() => setBad(bad + 1)}

      />
      <Header title="statistiikka" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)