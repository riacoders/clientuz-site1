'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/constants'

function Navbar() {
	const pathName = usePathname()

	const currentPath = pathName.split('/')[1] || ''
	const isRouteValid = navLinks.some(item => item.route === currentPath)

	if (!isRouteValid) return null

	return (
		<header className='fixed left-0 bottom-0 bg-white w-full z-10'>
			<nav className='w-full'>
				<ul className='flex items-center gap-4 justify-between p-5'>
					{navLinks.map(item => {
						const isActive = currentPath === item.route
						return (
							<li key={item.route}>
								<Link
									href={`/${item.route}`}
									className={`flex flex-col items-center ${
										isActive ? 'text-[#2A9D8F]' : 'text-gray-500'
									}`}
								>
									<item.icon className='w-6 h-6' />
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
