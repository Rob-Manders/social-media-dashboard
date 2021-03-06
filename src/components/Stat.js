
import { useContext } from 'react'
import { ThemeContext } from '../context/Theme'
import ChangeIndicator from './ChangeIndicator'
import useLargeStat from '../hooks/useLargeStat'

export default function Stat({ stat, platform, value, prevValue }) {
	const { theme } = useContext(ThemeContext)
	const icons = {
		facebook: 'images/icon-facebook.svg',
		twitter: 'images/icon-twitter.svg',
		instagram: 'images/icon-instagram.svg',
		youtube: 'images/icon-youtube.svg'
	}

	return (
		<div className={`stat stat--${theme}`}>
			<p>{stat}</p>
			<img src={icons[platform]} alt={platform}></img>
			<h3>{useLargeStat(value, 10000)}</h3>

			<ChangeIndicator type='percentage' value={value} prevValue={prevValue}/>
		</div>
	)
}