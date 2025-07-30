import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Frontend Intern Workshop",
	description: "A Next.js project for frontend development learning",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="max-w-screen-xl m-auto p-4">{children}</main>
			</body>
		</html>
	)
}
