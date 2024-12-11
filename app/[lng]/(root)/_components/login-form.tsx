'use client'

import { cn } from '@/lib/utils'
import { Eye, EyeOff, Lock, Phone, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface LoginFormProps {
	show: boolean
	setShow: (value: boolean) => void
	setRegisterDialog: (value: boolean) => void
}

function LoginForm({ show, setShow, setRegisterDialog }: LoginFormProps) {
	const [inputType, setInputType] = useState('password')
	if (!show) return null

	return (
		<div className='fixed top-0 left-0 z-50 w-screen h-screen bg-[#000000CC]'>
			<div className='w-96 p-8 rounded-xl flex flex-col items-center gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white '>
				<span
					className='absolute top-4 right-4 cursor-pointer'
					onClick={() => setShow(false)}
				>
					<X size={18} />
				</span>

				<h1 className='text-2xl mt-5 font-semibold'>Profilga kirish</h1>
				<fieldset className='border-[2px] border-solid rounded-lg border-[#ccc] px-2 w-full focus-within:border-[#2A9D8F] mt-5'>
					<legend className='text-[#333] text-sm focus-within:text-[#2A9D8F]'>
						Telefon raqam
					</legend>
					<span className='flex flex-row items-center gap-3 mb-2'>
						<Phone size={16} className='h-full ' />
						<input
							type='text'
							name='tel'
							id='tel'
							className='outline-none caret-[#2A9D8F] flex-auto'
							defaultValue={'+998'}
						/>
					</span>
				</fieldset>
				<fieldset className='border-[2px] border-solid rounded-lg border-[#ccc] px-2 w-full focus-within:border-[#2A9D8F] '>
					<legend className='text-[#333] text-sm focus-within:text-[#2A9D8F]'>
						Parol
					</legend>
					<span className='flex flex-row items-center justify-between mb-2'>
						<div className='flex items-center gap-2 flex-auto'>
							<Lock size={16} className='h-full' />
							<input
								type={inputType}
								name='pass'
								id='pass'
								className='outline-none caret-[#2A9D8F] flex-auto'
							/>
						</div>
						<div>
							<Eye
								className={cn(
									'text-[#2A9D8F]',
									inputType === 'text' ? 'hidden' : ''
								)}
								onClick={() => setInputType('text')}
							/>
							<EyeOff
								className={cn(
									'text-[#2A9D8F]',
									inputType === 'password' ? 'hidden' : ''
								)}
								onClick={() => setInputType('password')}
							/>
						</div>
					</span>
				</fieldset>
				<button className='btn-i-primary rounded-lg'>Davom etish</button>
				<p className='text-muted-foreground text-sm text-center'>
					Sizda saytdan foydalanish uchun profilingiz mavjud emasmi?
				</p>
				<button
					className='border-none outline-none underline text-[#2A9D8F]'
					onClick={() => {
						setShow(false)
						setRegisterDialog(true)
					}}
				>
					Ro'yhatdan o'tish
				</button>
				<span className='flex items-center w-full gap-3'>
					<hr className='w-full' />
					<p className='text-muted-foreground'>Yoki</p>
					<hr className='w-full' />
				</span>
				<button className='border-none outline-none text-[#2A9D8F] flex items-center gap-2'>
					<Image
						src={'/assets/telegram-blue.png'}
						alt='telegram'
						width={20}
						height={20}
					/>
					Telegram orqali
				</button>
			</div>
		</div>
	)
}

export default LoginForm
