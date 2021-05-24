
import {useContext} from 'react'
import {ThemeContext} from '../context/Theme'

export default function ThemeToggler() {
	const {theme, toggleTheme} = useContext(ThemeContext)

	return (
		<div className={`themeToggler ${theme}`}>
			Toggle
		</div>
	)
}