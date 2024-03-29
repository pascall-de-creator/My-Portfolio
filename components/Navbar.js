import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';



const Navbar = () => {
	const router = useRouter();

	useEffect(() => {
		let route = router.asPath.split("/")[1]
		const margin = 24
		const linkIndex = { "": 0, "works": 1, "achivements": 2, "about": 3}
		const menuItems = document.getElementsByClassName("menu__item")
		const activeLinkIndicatior = document.getElementById("active_link_indicator")
		const menu = document.getElementsByClassName("menu")[0]

		activeLinkIndicatior.style.transform = `
			translate(${menuItems[linkIndex[route] || 0].offsetLeft + margin}px, 0px) 
			scale(${menuItems[linkIndex[route] || 0].offsetWidth / menu.offsetWidth - (margin / menu.offsetWidth) * 2}, 1)
		`;
		
		console.log(route)
	}, [router.asPath]);


	return (
		<motion.div key={router} animate={{ x: 0,	y: 0, scale: "1", rotate: 0}} initial={{ x: 0,	y: 0, scale: 0,	rotate: 0}}>
			<div className="menu">
				<div className="menu__inner">
					<div className="menu__content">
						<ul className="flex text-white">
							<li className="flex-1 menu__item">
								<Link href="/">Home</Link>
							</li>
							<li className="flex-1 menu__item">
								<Link href="/works">Work</Link>
							</li>
							<li className="flex-1 menu__item">
								<Link href="/achivements">Achivements</Link>
							</li>
							<li className="flex-1 menu__item">
								<Link href="/about">About</Link>
							</li>
						</ul>
						<div id="active_link_indicator" className="bg-primary-200 absolute left-0 bottom-1/4 w-full h-[3px] bg-white origin-left js-menu-line"></div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Navbar;