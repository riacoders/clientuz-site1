import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css' // Import Swiper styles
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Card from '../../_components/card'

const TopProducts = () => {
	const products = [
		{
			id: 1,
			title: 'ESDY futbolka',
			price: '230 000 UZS',
			img: 'https://picsum.photos/200/300',
		},
		{
			id: 2,
			title: 'ESDY futbolka',
			price: '230 000 UZS',
			img: 'https://picsum.photos/200/300',
		},
		{
			id: 3,
			title: 'ESDY futbolka',
			price: '230 000 UZS',
			img: 'https://picsum.photos/200/300',
		},
		{
			id: 4,
			title: 'ESDY futbolka',
			price: '230 000 UZS',
			img: 'https://picsum.photos/200/300',
		},
		{
			id: 5,
			title: 'ESDY futbolka',
			price: '230 000 UZS',
			img: 'https://picsum.photos/200/300',
		},
		{
			id: 6,
			title: 'ESDY futbolka',
			price: '230 000 UZS',
			img: 'https://picsum.photos/200/300',
		},
		{
			id: 7,
			title: 'ESDY futbolka',
			price: '230 000 UZS',
			img: 'https://picsum.photos/200/300',
		},
		{
			id: 8,
			title: 'ESDY futbolka',
			price: '230 000 UZS',
			img: 'https://picsum.photos/200/300',
		},
	]

	return (
		<div className='w-full max-w-7xl mx-auto h-auto'>
			<Swiper
				spaceBetween={0}
				breakpoints={{
					200: { slidesPerView: 1 },
					320: { slidesPerView: 2 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
					1280: { slidesPerView: 4 },
					1440: { slidesPerView: 5 },
				}}
				pagination={{ clickable: true }}
				modules={[Pagination]}
				className='my-1 '
			>
				{products.map(product => (
					<SwiperSlide key={product.id} className='p-2'>
						<Card />
					</SwiperSlide>
				))}
				<div className='swiper-pagination-bullets'>
					<div className='swiper-pagination-bullet'>
						<span></span>
					</div>
				</div>
			</Swiper>
		</div>
	)
}

export default TopProducts
