
import { useContext } from 'react'
import { ThemeContext } from '../context/Theme'

export default function Container({children}) {
	const { theme } = useContext(ThemeContext)

	return (
		<div className={`container container--${theme}`}>
			{children}
		</div>
	)
}