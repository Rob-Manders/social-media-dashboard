
export default function ChangeIndicator({ type, value, prevValue }) {

	const icons = {
		up: 'images/icon-up.svg',
		down: 'images/icon-down.svg'
	}

	const difference = value - prevValue
	const changeDirection = difference >= 0 ? true : false

	return (
		<div className={`changeIndicator changeIndicator--${changeDirection ? 'up' : 'down'}`}>
			<img src={changeDirection ? icons.up : icons.down} alt={changeDirection ? 'followers increased' : 'followers decreased'}></img>
			<p>
				{difference}
				{type === 'today' && <> Today</>}
				{type === 'percentage' && <>%</>}
			</p>
		</div>
	)
}