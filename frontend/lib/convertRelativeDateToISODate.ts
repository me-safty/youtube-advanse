export default function convertRelativeDateToMIleSeconds(
	relativeDateString: string
): number {
	const now = new Date()
	const relativeDateParts = relativeDateString.split(" ")
	const value = parseInt(relativeDateParts[0])
	const unit = relativeDateParts[1]

	let date = new Date(now)

	if (unit === "days" || unit === "day") {
		date.setDate(now.getDate() - value)
	} else if (unit === "weeks" || unit === "week") {
		date.setDate(now.getDate() - value * 7)
	} else if (unit === "months" || unit === "month") {
		date.setMonth(now.getMonth() - value)
	} else if (unit === "years" || unit === "year") {
		date.setFullYear(now.getFullYear() - value)
	}

	return date.getTime()
}
