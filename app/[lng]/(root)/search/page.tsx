import { Search, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Page() {
	return (
		<div className='w-full p-4'>
			<span className='w-full flex items-center bg-[#fafafa] border border-solid border-[#00000012] p-3 rounded-full gap-3'>
				<Search className='text-gray-400' />
				<input
					type='text'
					name='name'
					id='name'
					placeholder='Biror nimadir izlang...'
					min={3}
					required
					className='bg-transparent border-none outline-none'
				/>
				<X />
			</span>
			<div className='border border-solid border-[#00000012] bg-[#fafafa] flex flex-col gap-2 mt-4 p-4 rounded-xl'>
				<ul className='flex flex-col gap-3'>
					<li className='flex items-center gap-3'>
						<Image
							src={'https://picsum.photos/50/50'}
							alt='avatar'
							height={50}
							width={50}
							className='size-12 object-cover rounded-full'
							loading='lazy'
						/>
						<span className='flex flex-col gap-1'>
							<p>Lorem ipsum</p>
							<p className='text-muted-foreground'>
								Lorem ipsum dolor sit amet
							</p>
						</span>
					</li>
					<li className='flex items-center gap-3'>
						<Image
							src={'https://picsum.photos/50/50'}
							alt='avatar'
							height={50}
							width={50}
							className='size-12 object-cover rounded-full'
							loading='lazy'
						/>
						<span className='flex flex-col gap-1'>
							<p>Lorem ipsum</p>
							<p className='text-muted-foreground'>
								Lorem ipsum dolor sit amet
							</p>
						</span>
					</li>
					<li className='flex items-center gap-3'>
						<Image
							src={'https://picsum.photos/50/50'}
							alt='avatar'
							height={50}
							width={50}
							className='size-12 object-cover rounded-full'
							loading='lazy'
						/>
						<span className='flex flex-col gap-1'>
							<p>Lorem ipsum</p>
							<p className='text-muted-foreground'>
								Lorem ipsum dolor sit amet
							</p>
						</span>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Page
