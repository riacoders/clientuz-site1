'use client'

import { formatNumberWithSpaces } from '@/lib/utils'
import { Phone, ReceiptText, Wallet } from 'lucide-react'
import { useState } from 'react'

function Page() {
	const [activeStep, setActiveStep] = useState('step1')
	const handleNext = () => {
		const currentStepNumber = parseInt(activeStep.replace('step', ''), 10)
		const newStepNumber = currentStepNumber + 1
		if (newStepNumber <= 3) {
			setActiveStep(`step${newStepNumber}`)
		}
	}
	const [activeButton, setActiveButton] = useState('Payme')

	const handleButtonClick = (buttonName: string) => {
		setActiveButton(buttonName)
	}

	return (
		<div className='flex flex-col w-full relative'>
			<div className='flex items-center justify-between w-full px-5 gap-2'>
				<div className='flex items-center gap-2 w-full'>
					<div
						className='w-10 h-10 flex justify-center items-center rounded-full bg-teal-500 text-white'
						style={
							activeStep === 'step1' ||
							activeStep === 'step2' ||
							activeStep === 'step3'
								? { background: '#2A9D8F' }
								: { background: '#2A9D8F33' }
						}
					>
						<ReceiptText size={20} className='text-white' />
					</div>
					<div
						className='  border border-dashed  flex-auto'
						style={
							activeStep !== 'step1'
								? { background: '#2A9D8F' }
								: { background: '#2A9D8F33' }
						}
					></div>
				</div>

				<div className='flex items-center gap-2 w-full'>
					<div
						className='w-10 h-10 flex justify-center items-center rounded-full  text-white'
						style={
							activeStep !== 'step1'
								? { background: '#2A9D8F' }
								: { background: '#2A9D8F33' }
						}
					>
						<Phone
							size={20}
							style={
								activeStep !== 'step1'
									? { color: 'white' }
									: { color: '#2A9D8F' }
							}
						/>
					</div>
					<div
						className='  border border-dashed  flex-auto'
						style={
							activeStep === 'step3'
								? { background: '#2A9D8F' }
								: { background: '#2A9D8F33' }
						}
					></div>
				</div>

				<div className='flex items-center gap-2  w-auto'>
					<div
						className='w-10 h-10 flex justify-center items-center rounded-full  text-gray-500'
						style={
							activeStep === 'step3'
								? { background: '#2A9D8F' }
								: { background: '#2A9D8F33' }
						}
					>
						<Wallet
							size={20}
							style={
								activeStep !== 'step3'
									? { color: '#2A9D8F' }
									: { color: 'white' }
							}
						/>
					</div>
				</div>
			</div>

			{/* STEP1  */}
			{activeStep === 'step1' && (
				<div className='flex flex-col gap-3 p-4'>
					<h3 className='text-xl font-semibold'>Hisob</h3>
					<span className='flex items-center gap-3'>
						<input type='radio' name='delivery' id='delivery' /> Yetkazib berish
					</span>
					<span className='flex items-center gap-3'>
						<input type='radio' name='for' id='for' /> O'zi olib ketish
					</span>
					<div className='mt-3 flex flex-col gap-3'>
						<span className='flex items-center justify-between'>
							<p className='text-muted-foreground'>Mahsulotlar soni:</p>
							<p className='font-medium'>4</p>
						</span>
						<span className='flex items-center justify-between'>
							<p className='text-muted-foreground'>Mahsulotlar narxi:</p>
							<p className='font-medium'>
								{formatNumberWithSpaces(2340000)} UZS
							</p>
						</span>
						<span className='flex items-center justify-between'>
							<p className='text-muted-foreground'>Yetkazib berish:</p>
							<p className='font-medium'>{formatNumberWithSpaces(34000)} UZS</p>
						</span>
						<fieldset className='border border-solid border-[#00000012] rounded-lg p-2 mt-3 flex items-center '>
							<legend className='text-sm text-muted-foreground '>
								Kupon qo'shish
							</legend>
							<input
								type='text'
								name='discount'
								id='discount'
								placeholder='Kupon'
								className='border-none outline-none w-full mb-2'
							/>
						</fieldset>
						<span className='flex items-center justify-between mt-4 pb-4 border-b border-solid border-[#00000012]'>
							<p className='text-muted-foreground'>Jami summa:</p>
							<p className='font-medium'>
								{formatNumberWithSpaces(2374000)} UZS
							</p>
						</span>
					</div>
				</div>
			)}

			{/* STEP2  */}
			{activeStep === 'step2' && (
				<div className='flex flex-col gap-3 p-4 my-4'>
					<h3 className='text-xl font-semibold'>Kontakt ma'lumotlar</h3>
					<fieldset className='border border-solid border-[#00000012] rounded-lg p-2 mt-3 flex items-center '>
						<legend className='text-sm text-muted-foreground '>Ism</legend>
						<input
							type='text'
							name='name'
							id='name'
							placeholder='Ismingiz'
							className='border-none outline-none w-full mb-2'
						/>
					</fieldset>
					<fieldset className='border border-solid border-[#00000012] rounded-lg p-2 mt-3 flex items-center '>
						<legend className='text-sm text-muted-foreground '>
							Telefon raqam
						</legend>
						<input
							type='text'
							name='tel'
							id='tel'
							placeholder='Telefon raqamingiz'
							className='border-none outline-none w-full mb-2'
						/>
					</fieldset>
					<fieldset className='border border-solid border-[#00000012] rounded-lg p-2 mt-3 flex items-center '>
						<legend className='text-sm text-muted-foreground '>Email</legend>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='Email manzilingiz'
							className='border-none outline-none w-full mb-2'
						/>
					</fieldset>
					<fieldset className='border border-solid border-[#00000012] rounded-lg p-2 mt-3 flex items-center '>
						<legend className='text-sm text-muted-foreground '>Username</legend>
						<input
							type='text'
							name='username'
							id='username'
							placeholder='Telegram username kiriting'
							className='border-none outline-none w-full mb-2'
						/>
					</fieldset>
					<fieldset className='border border-solid border-[#00000012] rounded-lg p-2 mt-3 flex items-center '>
						<legend className='text-sm text-muted-foreground '>
							Mijoz manzili
						</legend>
						<input
							type='text'
							name='address'
							id='adress'
							placeholder='Manzilingiz'
							className='border-none outline-none w-full mb-2'
						/>
					</fieldset>
					<fieldset className='border border-solid border-[#00000012] rounded-lg p-2 mt-3 flex items-center '>
						<legend className='text-sm text-muted-foreground '>Sharh</legend>
						<textarea
							name='comment'
							id='comment'
							className='w-full h-16 resize-none border-none outline-none mb-2'
							placeholder='Sharh kiriting'
						></textarea>
					</fieldset>
				</div>
			)}

			{/* STEP3  */}
			{activeStep === 'step3' && (
				<div className='flex flex-col gap-3 p-4 my-4'>
					<h3 className='text-xl font-semibold'>To'lov turi</h3>
					<ul className='flex flex-col gap-3'>
						<li>
							<button
								className={`py-3 w-full ${
									activeButton === 'Payme'
										? 'btn-i-secondary'
										: 'btn-i-noactive'
								}`}
								onClick={() => handleButtonClick('Payme')}
							>
								Payme
							</button>
						</li>
						<li>
							<button
								className={`py-3 w-full ${
									activeButton === 'Click'
										? 'btn-i-secondary'
										: 'btn-i-noactive'
								}`}
								onClick={() => handleButtonClick('Click')}
							>
								Click
							</button>
						</li>
						<li>
							<button
								className={`py-3 w-full ${
									activeButton === 'Telegram Stars'
										? 'btn-i-secondary'
										: 'btn-i-noactive'
								}`}
								onClick={() => handleButtonClick('Telegram Stars')}
							>
								Telegram Stars
							</button>
						</li>
					</ul>
				</div>
			)}

			<div className='fixed bottom-0 pb-5 pt-2 w-full bg-white'>
				<button
					className='btn-i-primary w-4/5 m-auto py-3 '
					onClick={handleNext}
				>
					Davom etish
				</button>
			</div>
		</div>
	)
}

export default Page
