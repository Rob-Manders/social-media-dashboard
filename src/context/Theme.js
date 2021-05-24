
import {createContext, useState} from 'react'

export const ThemeContext = createContext()

export default function Theme({children}) {
	const [ theme, setTheme ] = useState('dark-theme')

	function toggleTheme() {
		console.log('Toggle theme.')
		setTheme(prevTheme => {
			return prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'
		})
	}

	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}