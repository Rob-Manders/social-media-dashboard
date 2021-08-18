
import { useContext } from 'react'
import { ThemeContext } from '../context/Theme'
import ChangeIndicator from './ChangeIndicator'
import useLargeStat from '../hooks/useLargeStat'

export default function Followers({ platform, handle, followers, prevFollowers }) {
	const { theme } = useContext(ThemeContext)

	const icons = {
		facebook: 'images/icon-facebook.svg',
		twitter: 'images/icon-twitter.svg',
		instagram: 'images/icon-instagram.svg',
		youtube: 'images/icon-youtube.svg'
	}

	return (
		<div className={`followers followers--${platform} followers--${theme}`}>
			<div className='followers__platform'>
				<img src={icons[platform]} alt={platform}></img>
				<p>{handle}</p>
			</div>

			<h3>{useLargeStat(followers, 10000)}</h3>
			<p className='followers__subtext'>Followers</p>
			
			<ChangeIndicator type='today' value={followers} prevValue={prevFollowers}/>
		</div>
	)
}