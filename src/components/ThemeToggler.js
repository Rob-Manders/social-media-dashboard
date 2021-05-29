
import React, { useContext } from 'react'
import { ThemeContext } from '../context/Theme'

export default function ThemeToggler() {
	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<div className={`themeToggler themeToggler--${theme}`} onClick={() => toggleTheme()}>
			<p> Dark Mode</p>
			<div className={`themeToggler__switch themeToggler__switch--${theme}`}></div>
			
			{/* <button onClick={() => toggleTheme()}>Toggle Theme</button> */}
		</div>
	)
}