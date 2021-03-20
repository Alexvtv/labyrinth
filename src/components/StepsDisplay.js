import '../styles/Steps.scss'
import { connect } from 'react-redux'

function StepsDisplay(props) {

	const { steps, statusGame } = props

	const stepsDisp = () => {
		return steps.map((elem, index) => {
			// Выводим для каждого элемента типа [x, y, direction] блок с классом direction
			return (
				<div className="step" key={index}>
					<img src="/icons/arrow.svg" alt={elem[2]} className={elem[2]} />
				</div>
			)
		})
	}

	const className = statusGame === "active" ? "steps" : "steps steps-deleting"
  return (
    <div className={className}>
    	{stepsDisp()}
    </div>
  )
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, null)(StepsDisplay)
