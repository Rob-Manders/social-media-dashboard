
export default function useLargeStat(stat, threshold) {
	let newStat = stat.toString()

	if (stat >= threshold) {
		newStat = `${newStat.slice(0, -3)}k`
	}

	return newStat
}