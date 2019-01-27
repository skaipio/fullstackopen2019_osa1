import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (<h1>{props.course}</h1>)

const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
)

const Content = (props) => {
  console.log(props)
  const [part1, part2, part3] = props.parts
  return (
    <>
      <Part name={part1.name} exercises={part1.exercises} />
      <Part name={part2.name} exercises={part2.exercises} />
      <Part name={part3.name} exercises={part3.exercises} />
    </>
  )
}

const Total = (props) => {
  const total = props.parts.reduce((acc, part) => (acc + part.exercises), 0)
  return (
    <p>yhteensä {total} tehtävää</p>
  )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const parts = [
    {
      name: 'Reactin perusteet',
      exercises: 10
    },
    {
      name: 'Tiedonvälitys propseilla',
      exercises: 7
    },
    {
      name: 'Komponenttien tila',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))