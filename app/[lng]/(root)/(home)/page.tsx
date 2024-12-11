'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import TopProducts from './_components/top-products'
import Card from '../_components/card'
import BannerCarousel from './_components/banner-carousel'
// import { ProductTypes } from '@/interfaces'
// import axios from 'axios'
// import API_REQUEST from '@/utils/apiConfig'

function Page() {
	const [activeTab, setActiveTab] = useState('tab1')
	// const [products, setProducts] = useState <ProductTypes | null>(null)

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		await axios.get(`${API_REQUEST}`)
	// 	}
	// })

	const handleTabClick = (tab: string) => {
		setActiveTab(tab)
	}
	return (
		<div className='flex flex-col gap-3 relative max-w-7xl m-auto'>
			<div className='w-full '>
				<BannerCarousel />
			</div>
			<div>
				<h1 className='text-center sm:text-2xl text-xl font-semibold'>
					Kataloglar
				</h1>
			</div>
			<nav className='scrollbar-none w-full overflow-x-auto'>
				<ul className='flex items-center gap-2 whitespace-nowrap sm:justify-center'>
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
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 my-4'>
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
