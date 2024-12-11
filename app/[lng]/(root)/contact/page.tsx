import { Phone, UserRound } from 'lucide-react'
import Image from 'next/image'

function Page() {
	return (
		<div className='max-w-7xl w-full m-auto sm:px-0 px-4'>
			<h1 className='sm:text-2xl text-xl font-semibold sm:mt-8 mt-4'>
				Kontaktlar
			</h1>
			<div className='grid sm:grid-cols-3 grid-cols-1 gap-4 mt-5'>
				<div className='rounded-xl border border-solid border-[#00000012] flex items-center gap-4 p-5'>
					<div className='size-16 rounded-full bg-[#F4F1DE] flex items-center justify-center p-3'>
						<Image
							src={'/assets/telegram.png'}
							alt='logo'
							width={28}
							height={28}
							className='size-7'
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<p className='font-medium'>Telegram kanal:</p>
						<p className='text-[#E07A5F]'>@inbazarshop</p>
					</div>
				</div>
				<div className='rounded-xl border border-solid border-[#00000012] flex items-center gap-4 p-5'>
					<div className='size-16 rounded-full bg-[#F4F1DE] flex items-center justify-center p-3'>
						<Phone size={28} />
					</div>
					<div className='flex flex-col gap-1'>
						<p className='font-medium'>Telefon raqami:</p>
						<p className='text-[#E07A5F]'>+998 90 123 4567</p>
					</div>
				</div>
				<div className='rounded-xl border border-solid border-[#00000012] flex items-center gap-4 p-5'>
					<div className='size-16 rounded-full bg-[#F4F1DE] flex items-center justify-center p-3'>
						<UserRound size={28} />
					</div>
					<div className='flex flex-col gap-1'>
						<p className='font-medium'>Sotuvchi username:</p>
						<p className='text-[#E07A5F]'>@sellerinbazarshop</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Page
