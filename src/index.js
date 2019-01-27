import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => (<h1>{title}</h1>)

const Button = ({handleClick, text}) =>
  <button onClick={handleClick}>{text}</button>

const Palaute = ({handleGoodClick, handleNeutralClick, handleBadClick}) =>
  <div>
    <Button text="hyvä" handleClick={handleGoodClick}/>
    <Button text="neutraali" handleClick={handleNeutralClick} />
    <Button text="huono" handleClick={handleBadClick} />
  </div>

const Statistic = ({text, statistic}) =>
  <tr>
    <td>{text}</td><td>{statistic}</td>
  </tr>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if (total > 0) {
    return (
      <table>
        <tbody>
          <Statistic text="hyvä" statistic={good}/>
          <Statistic text="neutraali" statistic={neutral}/>
          <Statistic text="huono" statistic={bad}/>
          <Statistic text="yhteensä" statistic={total}/>
          <Statistic text="keskiarvo" statistic={(good - bad)/total}/>
          <Statistic text="positiivisia" statistic={good / total * 100 + ' %'}/>
        </tbody>
      </table>
    )
  }
  
  return (
    <p>Ei yhtään palautetta annettu</p>
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