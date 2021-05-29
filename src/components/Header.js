
import { useContext } from 'react'
import { ThemeContext } from '../context/Theme'

export default function Header({ followers, children }) {
	const { theme } = useContext(ThemeContext)

	return (
		<header className={`header header--${theme}`}>
			<div className='header__title'>
				<h1>Social Media Dashboard</h1>
				<p>Total Followers: 23,004</p>
			</div>
			{children}
		</header>
	)
}