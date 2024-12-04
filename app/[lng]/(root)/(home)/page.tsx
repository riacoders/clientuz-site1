'use client'

import { ChevronRight, Globe, Share2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import TopProducts from './_components/top-products'
import Card from '../_components/card'

function Page() {
	const [activeTab, setActiveTab] = useState('tab1')

	const handleTabClick = (tab: string) => {
		setActiveTab(tab)
	}

	return (
		<div className='flex flex-col gap-3 relative'>
			<div className='w-full h-48 overflow-hidden relative'>
				<Image
					src={'https://picsum.photos/300/200'}
					alt='banner'
					height={200}
					width={400}
				/>
				<div className='absolute z-10 w-full h-full p-3 flex flex-col justify-between top-0 left-0 bg-gradient-to-t from-[#0000009d] to-transparent'>
					<div className='flex items-center justify-end gap-3'>
						<button
							className='btn-i-primary rounded-full p-2'
							aria-label='Globe'
						>
							<Globe size={20} color='white' />
						</button>
						<button
							className='btn-i-primary rounded-full p-2'
							aria-label='Share'
						>
							<Share2 size={20} color='white' />
						</button>
					</div>

					<div className='flex items-center justify-between'>
						<h1 className='font-semibold text-white text-2xl'>Test do'kon</h1>
						<Link href={'/'} className='flex items-center gap-2 text-white'>
							Kanalni ko'rish <ChevronRight />
						</Link>
					</div>
				</div>
			</div>
			<div className='p-4 flex flex-col gap-5'>
				<div className='flex flex-col gap-2'>
					<p className='text-muted-foreground'>Izoh</p>
					<p className='text-base font-medium'>
						Test mahsulotlarini sotish uchun do’kon
					</p>
					<p className='text-muted-foreground'>Telefon raqami</p>
					<p className='text-base font-medium'>+998 94 351 1910</p>
					<p className='text-muted-foreground'>Sotuvchi</p>
					<p className='text-base font-medium'>@b_yarashev</p>
				</div>
			</div>
			<nav className='scrollbar-none w-full overflow-x-auto'>
				<ul className='flex items-center gap-2 whitespace-nowrap sm:w-auto'>
					<li className='ml-5'>
						<button
							onClick={() => handleTabClick('tab1')}
							className={activeTab === 'tab1' ? 'btn-i-primary' : 'btn-i-light'}
						>
							Barcha kataloglar
						</button>
					</li>
					<li>
						<button
							onClick={() => handleTabClick('tab2')}
							className={activeTab === 'tab2' ? 'btn-i-primary' : 'btn-i-light'}
						>
							Erkaklar kiyimi
						</button>
					</li>
					<li className='mr-3'>
						<button
							onClick={() => handleTabClick('tab3')}
							className={activeTab === 'tab3' ? 'btn-i-primary' : 'btn-i-light'}
						>
							Ayollar kiyimi
						</button>
					</li>
				</ul>
			</nav>
			<div className='flex flex-col px-4 pt-4'>
				<div className='flex flex-col gap-2'>
					<div className='flex items-center justify-between'>
						<h1 className='text-2xl font-semibold'>Top mahsulotlar</h1>
						<Link href={'/'} className='text-[#2a9d8f]'>
							Barchasi
						</Link>
					</div>
				</div>
			</div>
			<TopProducts />
			<div className='flex flex-col px-4 pt-4'>
				<div className='flex flex-col gap-2'>
					<div className='flex items-center justify-between'>
						<h1 className='text-2xl font-semibold'>Mahsulotlar</h1>
					</div>
				</div>
				<div className='grid grid-cols-2 gap-2 my-4'>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	)
}

export default Page
