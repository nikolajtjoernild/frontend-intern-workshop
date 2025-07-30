import Header from "@/components/header/header"
import type { HeaderModel } from "./models/Header"

export default function Home() {
	// Define header data directly to avoid JSON import cache issues
	const headerData: HeaderModel = {
		menu: [
			{ label: "Home", link: "/home" },
			{ label: "About", link: "/about" },
			{ label: "Contact", link: "/contact" },
			{ label: "Blog", link: "/blog" },
		],
		logo: {
			src: "/logo.png",
			alt: "logo",
		},
	}

	return (
		<div>
			<Header data={headerData} />
		</div>
	)
}
