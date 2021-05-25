
export default function Section({ type, children }) {
	return (
		<section className={`section section--${type}`}>
			{children}
		</section>
	)
}