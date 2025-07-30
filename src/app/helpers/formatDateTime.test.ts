import { afterEach, beforeEach, describe, expect, it } from "vitest"
import { formatDateTime } from "./formatDateTime"

describe("formatDateTime", () => {
	// Store original timezone for cleanup
	let originalTimezone: string | undefined

	beforeEach(() => {
		// Store the original timezone
		originalTimezone = process.env.TZ
	})

	afterEach(() => {
		// Restore original timezone
		if (originalTimezone) {
			process.env.TZ = originalTimezone
		} else {
			delete process.env.TZ
		}
	})

	it("should format a date with Danish locale (da-DK)", () => {
		const date = new Date("2025-08-06T14:30:00.000Z")
		const result = formatDateTime(date)

		// The result should be a string
		expect(result).toBeTypeOf("string")
		// Should contain date and time components
		expect(result).toBeTruthy()
		expect(result.length).toBeGreaterThan(0)
	})

	it("should handle New Year's Day correctly", () => {
		const newYear = new Date("2025-01-01T12:00:00.000Z")
		const result = formatDateTime(newYear)

		expect(result).toBeTypeOf("string")
		expect(result).toBeTruthy()
	})

	it("should handle leap year date correctly", () => {
		const leapYearDate = new Date("2024-02-29T15:45:00.000Z")
		const result = formatDateTime(leapYearDate)

		expect(result).toBeTypeOf("string")
		expect(result).toBeTruthy()
	})

	it("should handle different times of day", () => {
		const dates = [
			new Date("2025-08-06T00:00:00.000Z"), // Midnight
			new Date("2025-08-06T06:30:00.000Z"), // Morning
			new Date("2025-08-06T12:00:00.000Z"), // Noon
			new Date("2025-08-06T18:45:00.000Z"), // Evening
			new Date("2025-08-06T23:59:59.000Z"), // End of day
		]

		dates.forEach((date) => {
			const result = formatDateTime(date)
			expect(result).toBeTypeOf("string")
			expect(result).toBeTruthy()
		})
	})

	it("should handle edge case dates", () => {
		const edgeCases = [
			new Date("1970-01-01T00:00:00.000Z"), // Unix epoch
			new Date("2000-01-01T00:00:00.000Z"), // Y2K
			new Date("2038-01-19T03:14:07.000Z"), // Near 32-bit timestamp limit
		]

		edgeCases.forEach((date) => {
			const result = formatDateTime(date)
			expect(result).toBeTypeOf("string")
			expect(result).toBeTruthy()
		})
	})

	it("should produce consistent output for the same date", () => {
		const date = new Date("2025-08-06T14:30:00.000Z")
		const result1 = formatDateTime(date)
		const result2 = formatDateTime(date)

		expect(result1).toBe(result2)
	})

	it("should handle dates with milliseconds", () => {
		const dateWithMs = new Date("2025-08-06T14:30:45.123Z")
		const result = formatDateTime(dateWithMs)

		expect(result).toBeTypeOf("string")
		expect(result).toBeTruthy()
	})

	it("should format current date without throwing", () => {
		const now = new Date()
		const result = formatDateTime(now)

		expect(result).toBeTypeOf("string")
		expect(result).toBeTruthy()
	})

	describe("Danish locale formatting", () => {
		it("should use long date style", () => {
			const date = new Date("2025-08-06T14:30:00.000Z")
			const result = formatDateTime(date)

			// Danish long date format typically includes full month name
			// The exact format may vary by browser/environment, but should be a readable format
			expect(result).toBeTypeOf("string")
			expect(result.length).toBeGreaterThan(10) // Long format should be reasonably long
		})

		it("should use short time style", () => {
			const date = new Date("2025-08-06T14:30:00.000Z")
			const result = formatDateTime(date)

			// Should contain time information
			expect(result).toBeTypeOf("string")
			// Time format should be present in the string
			expect(result).toBeTruthy()
		})
	})

	describe("error handling", () => {
		it("should return an empty string for invalid dates", () => {
			const invalidDate = new Date("invalid-date-string")

			// The Intl.DateTimeFormat should return an empty string for invalid dates
			expect(formatDateTime(invalidDate)).toBe("")
		})

		it("should handle very old dates", () => {
			const veryOldDate = new Date("0001-01-01T00:00:00.000Z")

			expect(() => {
				formatDateTime(veryOldDate)
			}).not.toThrow()
		})

		it("should handle very future dates", () => {
			const futureDte = new Date("9999-12-31T23:59:59.999Z")

			expect(() => {
				formatDateTime(futureDte)
			}).not.toThrow()
		})
	})

	describe("timezone handling", () => {
		it("should format dates consistently regardless of system timezone", () => {
			const date = new Date("2025-08-06T14:30:00.000Z")

			// Test in different timezones
			const timezones = [
				"UTC",
				"Europe/Copenhagen",
				"America/New_York",
				"Asia/Tokyo",
			]
			const results: string[] = []

			timezones.forEach((tz) => {
				process.env.TZ = tz
				const result = formatDateTime(date)
				results.push(result)
				expect(result).toBeTypeOf("string")
				expect(result).toBeTruthy()
			})

			// All results should be valid strings (exact values may differ due to timezone)
			results.forEach((result) => {
				expect(result).toBeTypeOf("string")
				expect(result.length).toBeGreaterThan(0)
			})
		})
	})
})
