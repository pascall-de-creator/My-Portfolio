import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
	const role = "Software"

	// useEffect(() => {
	// 	const roles = ["Software", "Websites", "UI / UX", "Mobile Apps"]
	// 	let roleIndex = 0
	// 	setInterval(() => {
	// 		console.log(roles[roleIndex])
	// 	}, 30000);
	// }, [])

	return (
		<>
			<section className="h-full w-full flex container mx-auto items-center justify-center">
				<div className="flex flex-col justify-center w-max">
					<span className="mb-4 font-bold">Hi there, I am</span>
					<h1 className="mb-6">Pascal Nkornyui</h1>
					<h1 className="text-secondary-300 mb-4 max-w-max">And I Build <i className='gradient-text'>{ `{ ${role} }` }</i>.</h1>
					<p className="max-w-lg mb-4">
						I’m a software developer based in Ghana specializing in building and designing exceptional programs and software for web, mobile and desktop. 
					</p>
					<Link className='w-max py-3 px-8 sm:py-4 sm:px-10 border-[1px] rounded-md font-bold border-primary-500 hover:bg-primary-500/40' href='/about'>About Me</Link>
				</div>
			</section>
		</>
	)
}
