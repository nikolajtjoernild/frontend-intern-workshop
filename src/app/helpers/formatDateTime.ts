export function formatDateTime(date: Date): string {
	try {
		if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
			return ""
		}

		return new Intl.DateTimeFormat("da-DK", {
			dateStyle: "long",
			timeStyle: "short",
		}).format(date)
	} catch (_error) {
		return ""
	}
}
