
import {useContext} from 'react'
import Theme, {ThemeContext} from '../context/Theme'

export default function Container({children}) {
	const {theme} = useContext(ThemeContext)

	return (
		<div className={`container ${theme}`}>
			{children}
		</div>
	)
}