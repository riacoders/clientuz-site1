'use client'

import {
	ArrowLeft,
	Eye,
	EyeOff,
	ImagePlus,
	Lock,
	MapPinCheckInside,
	Phone,
	Repeat2,
	UserRound,
	X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import CodeInput from './code-input'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface RegisterFormProps {
	show: boolean
	setShow: (value: boolean) => void
	setWelcomeDialog: (value: boolean) => void
}

function RegisterForm({ show, setShow, setWelcomeDialog }: RegisterFormProps) {
	const [codeFieldForm, setCodeFieldForm] = useState(true)
	const [inputType, setInputType] = useState('password')
	const [reInputType, setReInputType] = useState('password')
	const [timer, setTimer] = useState(0)
	const [avatarImage, setAvatarImage] = useState<File | null>(null)
	const [avatar, setAvatar] = useState<string | null>(null)

	const [code, setCode] = useState<string[]>(Array(6).fill(''))
	console.log(code)

	useEffect(() => {
		if (timer > 0) {
			const intervalId = setInterval(() => {
				setTimer(prevTimer => prevTimer - 1)
			}, 1000)

			return () => clearInterval(intervalId)
		}
	}, [timer])

	const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			setAvatarImage(file)
			const reader = new FileReader()
			reader.onloadend = () => {
				setAvatar(reader.result as string)
			}
			reader.readAsDataURL(file)
		}
	}

	if (!show) return null

	return (
		<>
			{!codeFieldForm && (
				<div className='fixed top-0 left-0 z-50 w-screen h-screen bg-[#000000CC]'>
					<div className='w-96 p-8 rounded-xl flex flex-col items-center gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white '>
						<span
							className='absolute top-4 right-4 cursor-pointer'
							onClick={() => setShow(false)}
						>
							<X size={18} />
						</span>

						<h1 className='text-2xl mt-5 font-semibold'>Ro'yhatdan o'tish</h1>
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

						<button className='btn-i-primary rounded-lg'>Davom etish</button>
						<p className='text-muted-foreground text-sm text-center'>
							Sizda saytdan foydalanish uchun profilingiz allaqachon mavjudmi?
						</p>
						<button
							className='border-none outline-none underline text-[#2A9D8F]'
							onClick={() => {
								setShow(false)
								setWelcomeDialog(true)
							}}
						>
							Kirish
						</button>
					</div>
				</div>
			)}
			{codeFieldForm && (
				<div className='fixed top-0 left-0 z-50 w-screen h-screen bg-[#000000CC]'>
					<div className='w-96 p-8 rounded-xl flex flex-col items-center gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white '>
						<span
							className='absolute top-4 right-4 cursor-pointer'
							onClick={() => setShow(false)}
						>
							<X size={18} />
						</span>

						<h1 className='text-2xl mt-5 font-semibold'>
							Tasdiqlash kodini kiriting
						</h1>
						<CodeInput
							isLoading={true}
							callback={true}
							reset={123456}
							onCodeChange={setCode}
						/>

						<button className='btn-i-primary rounded-lg'>Davom etish</button>
						<p className='text-muted-foreground text-sm text-center'>
							Tasdiqlash kodini ushbu vaqtdan keyin qabul qilasiz:{' '}
							<span>
								<p
									className='font-semibold'
									style={timer > 0 ? { display: 'block' } : { display: 'none' }}
								>
									{`0${Math.floor(timer / 60)}`} :{' '}
									{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
								</p>
								<p
									className='font-semibold text-[#2A9D8F]'
									style={
										timer === 0 ? { display: 'block' } : { display: 'none' }
									}
								>
									{timer === 0 ? `Kodni qaytadan jo'nating` : ''}
								</p>
							</span>
						</p>
						<button
							className='btn-i-none mt-3 flex items-center justify-center font-bold hover:border-transparent'
							style={
								timer > 0
									? { color: '#ccc', cursor: 'not-allowed' }
									: { color: '#2A9D8F' }
							}
							disabled={timer > 0}
							// onClick={handleRegister}
						>
							<Repeat2 /> Kodni qaytadan jo'natish
						</button>
						<button className='border-none outline-none flex items-center gap-2 text-[#2A9D8F]'>
							<ArrowLeft /> Orqaga
						</button>
					</div>
				</div>
			)}
			{
				<div className='fixed top-0 left-0 z-50 w-screen h-screen bg-[#000000CC]'>
					<div className='w-96 p-8 rounded-xl flex flex-col items-center gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white '>
						<span
							className='absolute top-4 right-4 cursor-pointer'
							onClick={() => setShow(false)}
						>
							<X size={18} />
						</span>

						<h1 className='text-2xl mt-5 font-semibold'>Shaxsiy malumotlar</h1>
						<div className='m-auto flex size-24 items-center justify-center rounded-full bg-gray-200 p-4 text-4xl'>
							{avatar ? (
								<Image
									src={avatar}
									alt='User Avatar'
									className='size-full rounded-full object-cover'
									width={96}
									height={96}
								/>
							) : (
								<UserRound className=' text-gray-400' size={48} />
							)}
						</div>
						<label className='btn-i-none flex w-full cursor-pointer justify-center border-none p-0 text-[#24a1de] hover:border-none'>
							<ImagePlus size={20} />
							Rasm qo'shish
							<input
								type='file'
								accept='image/*'
								className='hidden'
								onChange={handleAvatarChange}
							/>
						</label>
						<fieldset className='border-[2px] border-solid rounded-lg border-[#ccc] px-2 w-full focus-within:border-[#2A9D8F] '>
							<legend className='text-[#333] text-sm focus-within:text-[#2A9D8F]'>
								Ismi
							</legend>
							<span className='flex flex-row items-center gap-3 mb-2'>
								<input
									type='text'
									name='name'
									id='name'
									className='outline-none caret-[#2A9D8F] flex-auto'
									placeholder='Ismingizni yozing'
								/>
							</span>
						</fieldset>
						<fieldset className='border-[2px] border-solid rounded-lg border-[#ccc] px-2 w-full focus-within:border-[#2A9D8F] '>
							<legend className='text-[#333] text-sm focus-within:text-[#2A9D8F]'>
								Manzil
							</legend>
							<span className='flex flex-row items-center gap-3 mb-2'>
								<MapPinCheckInside size={16} />
								<input
									type='text'
									name='address'
									id='address'
									className='outline-none caret-[#2A9D8F] flex-auto'
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
						<fieldset className='border-[2px] border-solid rounded-lg border-[#ccc] px-2 w-full focus-within:border-[#2A9D8F] '>
							<legend className='text-[#333] text-sm focus-within:text-[#2A9D8F]'>
								Parolni takrorlang
							</legend>
							<span className='flex flex-row items-center justify-between mb-2'>
								<div className='flex items-center gap-2 flex-auto'>
									<Lock size={16} className='h-full' />
									<input
										type={reInputType}
										name='pass'
										id='pass'
										className='outline-none caret-[#2A9D8F] flex-auto'
									/>
								</div>
								<div>
									<Eye
										className={cn(
											'text-[#2A9D8F]',
											reInputType === 'text' ? 'hidden' : ''
										)}
										onClick={() => setReInputType('text')}
									/>
									<EyeOff
										className={cn(
											'text-[#2A9D8F]',
											reInputType === 'password' ? 'hidden' : ''
										)}
										onClick={() => setReInputType('password')}
									/>
								</div>
							</span>
						</fieldset>
						<button className='btn-i-primary rounded-lg mt-3'>Saqlash</button>
					</div>
				</div>
			}
		</>
	)
}

export default RegisterForm
