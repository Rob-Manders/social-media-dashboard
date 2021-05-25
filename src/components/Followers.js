
import { useContext } from 'react'
import { ThemeContext } from '../context/Theme'

export default function Followers({ platform, handle, followers, prevFollowers }) {
	const { theme } = useContext(ThemeContext)

	const icons = {
		facebook: 'images/icon-facebook.svg',
		twitter: 'images/icon-twitter.svg',
		instagram: 'images/icon-instagram.svg',
		youtube: 'images/icon-youtube.svg',
		up: 'images/icon-up.svg',
		down: 'images/icon-down.svg'
	}

	const difference = followers - prevFollowers
	const changeDirection = difference >= 0 ? true : false

	return (
		<div className={`followers followers--${platform} followers--${theme}`}>
			<div className='followers__platform'>
				<img src={icons[platform]} alt={platform}></img>
				<p>{handle}</p>
			</div>

			<h3>{followers}</h3>
			<p className='followers__subtext'>Followers</p>
			
			<div className={`followers__change followers__change--${changeDirection ? 'up' : 'down'}`}>
				<img src={changeDirection ? icons.up : icons.down} alt={changeDirection ? 'followers increased' : 'followers decreased'}></img>
				<p>{difference}</p>
			</div>
		</div>
	)
}