'use client'

import { Separator } from '@/components/ui/separator'
import { formatNumberWithSpaces } from '@/lib/utils'
import { ArrowLeft, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function Page() {
	const [activeMode, setActiveMode] = useState(true)
	const handleModeSwitch = () => {
		setActiveMode(!activeMode)
	}

	return (
		<div className='sm:bg-[#fafafa] w-full h-screen'>
			<div className='w-full max-w-7xl m-auto flex flex-col gap-5 '>
				<h1 className='sm:text-2xl text-xl font-semibold mt-5 sm:px-0 px-4 flex items-center gap-3'>
					<Link href={'/cart'}>
						<ArrowLeft className='sm:none flex' size={20} />
					</Link>
					To'lovni amalga oshirish
				</h1>
				<div className=' flex flex-col-reverse sm:flex-row gap-5 mb-3'>
					<div className='p-5 flex-auto h-min rounded-xl flex flex-col gap-3 col-span-2 bg-white sm:border border-solid border-[#00000012]'>
						<h1 className='text-xl font-semibold'>To'lov turi</h1>
						<ul className='list-none flex flex-col gap-3'>
							<li>
								<button className='btn-i-noactive w-full py-3'>
									<Image
										src={'/assets/payme.png'}
										alt='pay-method'
										width={60}
										height={30}
									/>
								</button>
							</li>
							<li>
								<button className='btn-i-noactive w-full py-3'>
									<Image
										src={'/assets/click.png'}
										alt='pay-method'
										width={50}
										height={30}
									/>
								</button>
							</li>
							<li>
								<button className='btn-i-noactive w-full py-3'>
									<Image
										src={'/assets/star.png'}
										alt='pay-method'
										width={100}
										height={30}
									/>
								</button>
							</li>
						</ul>
						<button className='w-auto btn-i-primary py-3'>Davom etish</button>
					</div>
					<div className='flex basis-96 flex-col gap-1 p-5  rounded-xl bg-white sm:border border-solid border-[#00000012]'>
						<h1 className='text-xl font-semibold'>Hisob</h1>
						<span
							className='flex items-center gap-3'
							onClick={handleModeSwitch}
						>
							<input
								type='radio'
								name='del'
								id='del'
								checked={activeMode}
								className='size-5 accent-[#2A9D8F] cursor-pointer'
							/>
							<label htmlFor='del m-0 p-0'>Yetkazib berish</label>
						</span>
						<span
							className='flex items-center gap-3'
							onClick={handleModeSwitch}
						>
							<input
								type='radio'
								name='foryou'
								id='foryou'
								checked={!activeMode}
								className='size-5 accent-[#2A9D8F] cursor-pointer'
							/>
							<label htmlFor='foryou m-0 p-0'>O'zi olib ketish</label>
						</span>
						<div className='mt-3 flex flex-col gap-2'>
							<span className='flex items-center justify-between'>
								<p className='text-muted-foreground'>Mahsulot soni: </p>
								<p className='font-semibold'>4</p>
							</span>
							<span className='flex items-center justify-between'>
								<p className='text-muted-foreground'>Mahsulot narxi: </p>
								<p className='font-semibold'>
									{formatNumberWithSpaces(2340000)} UZS
								</p>
							</span>
							{activeMode && (
								<span className='flex items-center justify-between'>
									<p className='text-muted-foreground'>Yetkazib berish: </p>
									<p className='font-semibold'>
										{formatNumberWithSpaces(340000)} UZS
									</p>
								</span>
							)}
							<fieldset className='border border-solid border-[#ccc] px-2 rounded-lg'>
								<legend className='text-muted-foreground'>
									Kupon qo'shish
								</legend>
								<input
									className='border-none outline-none mb-2'
									type='text'
									name='discount'
									id='discount'
									placeholder='Kupon'
								/>
							</fieldset>
							<span className='flex items-center justify-between'>
								<p className='text-muted-foreground'>Jami summa: </p>
								<p className='font-semibold'>
									{formatNumberWithSpaces(23740000)} UZS
								</p>
							</span>
							<Separator />
							<h1 className='text-xl font-semibold'>Kontakt ma'lumotlari</h1>
							{activeMode && (
								<div className='flex flex-col gap-2'>
									<fieldset className='border border-solid border-[#ccc] px-2 rounded-lg'>
										<legend className='text-muted-foreground'>Ism</legend>
										<input
											className='border-none outline-none mb-2'
											type='text'
											name='name'
											id='name'
											placeholder='Ismingiz'
										/>
									</fieldset>
									<fieldset className='border border-solid border-[#ccc] px-2 rounded-lg'>
										<legend className='text-muted-foreground'>
											Telefon raqam
										</legend>
										<input
											className='border-none outline-none mb-2'
											type='text'
											name='tel'
											id='tel'
											placeholder='Telefon raqam'
										/>
									</fieldset>
									<fieldset className='border border-solid border-[#ccc] px-2 rounded-lg'>
										<legend className='text-muted-foreground'>Email</legend>
										<input
											className='border-none outline-none mb-2'
											type='email'
											name='email'
											id='email'
											placeholder='Emailingiz'
										/>
									</fieldset>
									<fieldset className='border border-solid border-[#ccc] px-2 rounded-lg'>
										<legend className='text-muted-foreground'>Username</legend>
										<input
											className='border-none outline-none mb-2'
											type='text'
											name='username'
											id='username'
											placeholder='Telegram username kiriting'
										/>
									</fieldset>
									<fieldset className='border border-solid border-[#ccc] px-2 rounded-lg'>
										<legend className='text-muted-foreground'>
											Mijoz manzili
										</legend>
										<input
											className='border-none outline-none mb-2'
											type='text'
											name='address'
											id='address'
											placeholder='Manzil kiriting'
										/>
									</fieldset>
									<fieldset className='border border-solid border-[#ccc] px-2 rounded-lg'>
										<legend className='text-muted-foreground'>Sharh</legend>
										<textarea
											className='border-none outline-none mb-2 w-full h-24 resize-none'
											placeholder='Sharh kiriting'
										/>
									</fieldset>
								</div>
							)}
							{!activeMode && (
								<div className='flex flex-col gap-2'>
									<span className='font-semibold flex items-center gap-2'>
										<MapPin /> <p>Chilonzor tumani, 24-kvartal, 6-uy</p>
									</span>
									<span className='font-semibold flex items-center gap-2'>
										<Phone /> <p>+998 90 123 4567</p>
									</span>
									<p className='text-muted-foreground text-justify'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Est, facilis aliquid voluptate quas error fugit repudiandae
										porro repellendus sed deserunt.
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Page
