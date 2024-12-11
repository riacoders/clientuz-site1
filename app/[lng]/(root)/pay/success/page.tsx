import Image from 'next/image'

function Page() {
	return (
		<div className='max-w-7xl w-full  flex flex-col items-center justify-center m-auto'>
			<div className='flex flex-col items-center sm:px-0 px-4 gap-5 sm:size-96 m-auto mt-20'>
				<Image
					src={'/assets/success.png'}
					alt='success-banner'
					width={400}
					height={300}
					className='sm:w-[400px] w-72 m-auto'
				/>
				<h1 className='text-2xl font-semibold text-center'>Qutlaymiz</h1>
				<p className='text-center'>
					Buyurtmangiz muvoffaqiyatli qabul qilindi. Qo’shimcha ma’lumotlar
					bo’yicha tez orada sizga hodimlarimiz aloqaga chiqishadi.
				</p>
			</div>
		</div>
	)
}

export default Page
