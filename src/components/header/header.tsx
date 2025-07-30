import Image from "next/image"
import { formatDateTime } from "@/app/helpers/formatDateTime"
import type { HeaderModel } from "../../app/models/Header"

export default function Header(props: { data: HeaderModel }) {
	const currentDate = new Date()
	return (
		<header className="flex relative p-4 md:pt-12 bg-gray-800 text-xl justify-between text-right items-end border-b-4 border-teal-700">
			<a href="/">
				{props.data.logo.src ? (
					<Image
						src={props.data.logo.src}
						alt={props.data.logo.alt}
						width={100}
						height={100}
						className="size-30 md:size-40 rounded-full"
					/>
				) : (
					<h1 className="text-teal-400 text-5xl font-bold tracking-tight">
						{props.data.logo.alt}
					</h1>
				)}
			</a>
			<p className="hidden md:block absolute right-4 top-4 text-gray-400 uppercase text-sm">
				{formatDateTime(currentDate)}
			</p>
			<ul className="md:flex gap-x-4 uppercase text-gray-200 tracking-wider">
				{props.data.menu.map((item) => (
					<li key={item.label}>
						<a
							href={item.link}
							className="hover:text-teal-400 transition-colors duration-300"
						>
							{item.label}
						</a>
					</li>
				))}
			</ul>
		</header>
	)
}
