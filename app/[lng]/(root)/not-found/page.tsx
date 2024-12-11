import Image from 'next/image'

function Page() {
	return (
		<div className='max-w-7xl w-full  flex flex-col items-center justify-center m-auto'>
			<div className='flex flex-col items-center sm:px-0 px-4 gap-5 sm:size-96 m-auto mt-20'>
				<Image
					src={'/assets/not-found.png'}
					alt='success-banner'
					width={200}
					height={280}
					className='sm:w-[300px] w-72 m-auto'
				/>
				<h1 className='text-2xl font-semibold text-center'>Afsus</h1>
				<p className='text-center'>
					Siz izlayotgan saxifa topilmadi yoki boshqa muammo mavjud
				</p>
				<button className='btn-i-primary'>Bosh sahifaga qaytish</button>
			</div>
		</div>
	)
}

export default Page
