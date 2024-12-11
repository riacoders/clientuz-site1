import Image from 'next/image'

function Page() {
	return (
		<div className='max-w-7xl w-full sm:px-0 px-4 m-auto sm:mt-10 mt-5'>
			<h1 className='sm:text-2xl text-xl font-semibold'>Biz haqimizda</h1>
			<div className='flex flex-col gap-5 mt-5'>
				<div className='grid grid-cols-8 gap-4'>
					<div className='sm:col-span-5 col-span-4 rounded-2xl bg-[#fafafa] border border-solid border-[#00000012] sm:h-60 h-32 relative overflow-hidden'>
						<div className='size-20 sm:size-40  bg-[#F39C12] rounded-full absolute sm:bottom-0 -bottom-5 left-0 -translate-x-1/3 '></div>
						<div className='size-20 sm:size-40  bg-[#2A9D8F] rounded-full absolute top-0 right-0 -translate-y-1/4 translate-x-1/3 '></div>
						<div className='star-clip-path size-10  bg-[#2A9D8F] rounded-full absolute sm:top-1/4 sm:left-1/4 sm:-translate-y-1/4 sm:translate-x-1/3 top-3 left-4'></div>
						<div className='star-clip-path sm:size-16 size-12  bg-[#F39C12] rounded-full absolute sm:bottom-1/4 sm:right-1/4 sm:-translate-y-1/4 sm:translate-x-1/3 bottom-1 right-2 '></div>

						<div className='size-full absolute top-0 left-0 z-10 flex items-center justify-center'>
							<h1 className='sm:text-8xl text-2xl font-semibold'>Inbazar</h1>
						</div>
					</div>
					<div className='sm:col-span-3 col-span-4 sm:h-60 h-32 overflow-hidden rounded-2xl'>
						<Image
							src={'/assets/storeimg.png'}
							alt='store'
							height={240}
							width={300}
							className='object-cover size-full'
						/>
					</div>
				</div>
				<div className='sm:grid grid-cols-8 flex flex-col-reverse gap-4'>
					<div className='sm:col-span-3  sm:h-64 h-auto overflow-hidden rounded-2xl'>
						<Image
							src={'/assets/storeimg2.png'}
							alt='store'
							width={500}
							height={400}
							className='size-full object-cover'
						/>
					</div>
					<div className='sm:col-span-5  rounded-2xl bg-[#fafafa] border border-solid border-[#00000012] sm:h-64 h-auto relative overflow-hidden p-5 overflow-y-auto custom-scroll'>
						<p className='text-justify indent-4'>
							Lorem ipsum dolor sit amet consectetur. Eget sollicitudin ac non
							arcu in. Faucibus nulla scelerisque hac pulvinar libero. Diam
							turpis a enim faucibus etiam. Nunc pellentesque fermentum metus
							quis feugiat consequat a massa. Lectus erat purus amet eu eu
							consectetur sed. Cursus faucibus lacus mauris quisque sed. Risus
							aenean fringilla sed vitae ut ipsum amet sollicitudin. Pulvinar mi
							elementum enim quis posuere nec. Eget egestas cras semper neque
							tortor sed nibh volutpat rutrum. Viverra lorem felis massa vitae
							iaculis volutpat magna at. Ut elementum risus justo quis potenti
							ut viverra semper enim.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Page
