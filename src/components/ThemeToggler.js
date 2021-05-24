
import React, { useContext } from 'react'
import { ThemeContext } from '../context/Theme'

export default function ThemeToggler() {
	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<div className={`themeToggler themeToggler--${theme}`}>
			<button onClick={() => toggleTheme()}>Toggle Theme</button>
		</div>
	)
}