import type { Meta, StoryObj } from "@storybook/nextjs"
import type { HeaderModel } from "@/app/models/Header"
import Header from "./header"

type Story = StoryObj<typeof Header>

const headerWithImageData: HeaderModel = {
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

const headerWithoutImageData: HeaderModel = {
	menu: [
		{ label: "Home", link: "/home" },
		{ label: "About", link: "/about" },
		{ label: "Contact", link: "/contact" },
		{ label: "Blog", link: "/blog" },
	],
	logo: {
		src: "",
		alt: "logo",
	},
}
export default {
	component: Header,
} satisfies Meta<typeof Header>

export const Default: Story = {
	args: {
		data: headerWithImageData,
	},
}

export const NoImage: Story = {
	args: {
		data: headerWithoutImageData,
	},
}
