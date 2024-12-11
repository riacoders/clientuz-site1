'use client'

import { Heart, Search, ShoppingCart } from 'lucide-react'

import Link from 'next/link'
import { useState } from 'react'
import LoginForm from './login-form'
import RegisterForm from './register-form'

function Navbar() {
	const [welcomeDialog, setWelcomeDialog] = useState(false)
	const [registerDialog, setRegisterDialog] = useState(false)

	return (
		<>
			<div className='hidden sm:flex items-center justify-between max-w-7xl m-auto py-4 '>
				<Link href={'/'} className='btn-i-primary'>
					Logo
				</Link>
				<span className='rounded-full bg-[#fafafa] flex items-center gap-3 px-3 py-2'>
					<Search />
					<input
						className='bg-transparent border-none outline-none'
						type='text'
						name='search'
						id='search'
						placeholder='Qidirish'
					/>
				</span>
				<nav>
					<ul className='list-none flex items-center gap-4'>
						<li className='font-semibold'>Biz haqimizda</li>
						<li className='font-semibold'>Kontaktlar</li>
						<li className='font-semibold'>
							<select name='lang' id='lang'>
								<option value='UZ'>UZ</option>
								<option value='RU'>RU</option>
								<option value='EN'>EN</option>
							</select>
						</li>
					</ul>
				</nav>
				<div className='flex items-center gap-5'>
					<button className='btn-i-noactive bg-[#F4F1DE] py-2 rounded-full'>
						<ShoppingCart size={16} />
					</button>
					<button className='btn-i-noactive bg-[#F4F1DE] py-2 rounded-full'>
						<Heart size={16} />
					</button>
					<button
						className='btn-i-primary'
						onClick={() => setWelcomeDialog(true)}
					>
						Kirish
					</button>
				</div>
			</div>

			{welcomeDialog && (
				<LoginForm
					show={welcomeDialog}
					setShow={setWelcomeDialog}
					setRegisterDialog={setRegisterDialog}
				/>
			)}
			{registerDialog && (
				<RegisterForm
					show={registerDialog}
					setShow={setRegisterDialog}
					setWelcomeDialog={setWelcomeDialog}
				/>
			)}
		</>
	)
}

export default Navbar
