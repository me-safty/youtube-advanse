export default function getRelativeTime(dateValue: string): string {
	const date = new Date(dateValue)
	const now = Date.now()

	const diffInMs = now - date.getTime()
	const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
	const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" })

	if (diffInDays === 0 || diffInDays === 1) {
		return formatter.format(-1, "day")
	} else if (diffInDays > 1 && diffInDays <= 30) {
		return formatter.format(-diffInDays, "day")
	} else if (diffInDays > 30 && diffInDays <= 365) {
		const diffInMonths = Math.floor(diffInDays / 30)
		return formatter.format(-diffInMonths, "month")
	} else {
		const diffInYears = Math.floor(diffInDays / 365)
		return formatter.format(-diffInYears, "year")
	}
}
