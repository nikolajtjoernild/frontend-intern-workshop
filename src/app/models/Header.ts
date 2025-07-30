export type HeaderModel = {
	menu: HeaderMenuItem[]
	logo: HeaderLogo
}

type HeaderMenuItem = {
	label: string
	link: string
}

type HeaderLogo = {
	src: string
	alt: string
}
