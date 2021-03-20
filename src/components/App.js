import '../styles/App.scss'
import Table from './Table.js'
import StepsDisplay from './StepsDisplay'
import { connect } from 'react-redux'
import { addStep } from '../redux/actions'
import { useEffect } from 'react'

function App(props) {

	const { steps, cells, startPosition } = props

	useEffect(() => {
		if(steps.length < 10) {
			setTimeout(() => stepGeneration(), 1000)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [steps])

	const stepGeneration = () => {

		// Сохраняем результат ф-ции createStep или вызываем ее повторно

		const createStep = () => {

			// Идея функции: получить массив тип [x, y, direction]
			// получив направление путем Math.random()

			let possibleSteps = [
				{values: [0, 1], name:'bottom'},
				{values: [0, -1], name:'top'},
				{values: [1, 0], name:'right'},
				{values: [-1, 0], name:'left'},
			]
			let newStep = possibleSteps[Math.floor(Math.random() * 4)]
			let previousPosition = (steps[steps.length - 1] || cells[startPosition])
			return [(previousPosition[0] + newStep.values[0]), (previousPosition[1] + newStep.values[1]),	newStep.name]
		}

		let newPosition = createStep()
		if((newPosition[0] >= 1) && (newPosition[0] <= 3) && (newPosition[1] >= 1) && (newPosition[1] <= 3)) {
			props.dispatch(addStep(newPosition))
		} else {
			stepGeneration()
		}
	}

	

  return (
    <div className="App">
      <Table />
      <StepsDisplay />
    </div>
  )
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, null)(App)
