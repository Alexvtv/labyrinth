import '../styles/Table.scss'
import { connect } from 'react-redux'
import { pauseGame, startGame, saveStartPosition, deleteSteps } from '../redux/actions'
import { useState } from 'react'

function Table(props) {

	const { steps, cells, startPosition, statusGame, restartGame, pauseGame } = props
	const [selectedCell, setSelectedCell] = useState(null)

	const chooseCell = (item) => {

		// Сохраняем выбранное поле формата [x, y] в selectedCell
		// Создаем паузу в 2 sec до очищения данных из стора

		if(statusGame === 'active') {
			if(steps[9] !== undefined) {
				setSelectedCell(item)
				pauseGame()
				setTimeout(() => {
					setSelectedCell(null)
					restartGame()
				}, 2000)
			}
		}
	}

	const cellsDisplay = () => {

		return cells.map((item, index) => {
			const imageSelection = () => {
				if((item === selectedCell) && (item[0] === steps[9][0]) && (item[1] === steps[9][1])) {
					return ( <img src="/icons/check-mark.svg" alt="Верно" className="result-image" /> ) // Верно
				} else if(item === selectedCell) {
					return ( <img src="/icons/mistake.svg" alt="Ошибка" className="result-image" /> ) // Ошибка
				} else if((item[0] === steps[9][0]) && (item[1] === steps[9][1]) && (selectedCell !== null)) {
					return ( <img src="/icons/warning.svg" alt="Ответ" className="result-image" /> ) // Правильный ответ
				}
			}

			return (
			  <div 
			  	className="col-4"
			  	key={`${item[0]} + ${item[1]}`}
			  	onClick={() => chooseCell(item)}
			  >
			  	<div>
			  		{startPosition === index ? (<img src="/icons/start.svg" alt="start" className="start-image" />) : ('')}
			  		{steps[9] ? imageSelection() : ('')}
			  	</div>
			  </div>
			)
		})
	}

  return (
    <div className="Table row">
    	{cellsDisplay()}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
 	restartGame: () => {
 		dispatch(startGame())
		dispatch(saveStartPosition(Math.floor(Math.random() * 9)))
		dispatch(deleteSteps())
 	},
 	pauseGame: () => {
 		dispatch(pauseGame())
 	}
})

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
