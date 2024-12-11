import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRef } from 'react'

function BannerCarousel() {
	const swiperRef = useRef<SwiperClass | null>(null)
	return (
		<div className='sm:min-h-screen w-full max-w-7xl flex items-center justify-center m-auto p-4'>
			<div className=' w-full'>
				<Swiper
					onSwiper={swiper => (swiperRef.current = swiper)}
					spaceBetween={50}
					slidesPerView={1}
					pagination={{ clickable: true }}
					modules={[Pagination, Navigation, Autoplay]}
					loop={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
				>
					<SwiperSlide>
						<div className='flex sm:flex-row flex-col-reverse item-center gap-10 justify-center'>
							<div className='flex flex-col justify-center items-center text-center'>
								<h2 className='sm:text-2xl text-lg font-bold'>
									Mavsum uchun yangi oyoq kiyimlar
								</h2>
								<p className='text-gray-600 mt-2'>Hamyonbop narxlarda</p>
								<button className='mt-4 px-6 py-2 bg-teal-500 text-white rounded hover:bg-teal-600'>
									Batafsil
								</button>
							</div>
							<div className='h-full flex items-center justify-center '>
								<Image
									src={'/assets/nike.png'}
									alt='product-image'
									width={200}
									height={300}
									className='sm:w-80 lg:w-[500px]'
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='flex sm:flex-row flex-col-reverse item-center gap-10 justify-center'>
							<div className='flex flex-col justify-center items-center text-center'>
								<h2 className='sm:text-2xl text-lg font-bold'>
									Mavsum uchun yangi oyoq kiyimlar
								</h2>
								<p className='text-gray-600 mt-2'>Hamyonbop narxlarda</p>
								<button className='mt-4 px-6 py-2 bg-teal-500 text-white rounded hover:bg-teal-600'>
									Batafsil
								</button>
							</div>
							<div className='h-full flex items-center justify-center '>
								<Image
									src={'/assets/nike.png'}
									alt='product-image'
									width={200}
									height={300}
									className='sm:w-80 lg:w-[500px]'
								/>
							</div>
						</div>
					</SwiperSlide>

					<button
						onClick={() => swiperRef.current?.slidePrev()} // Go to the previous slide
						className='custom-prev z-50 absolute left-0 top-1/2 -translate-y-1/2 transform  text-black p-3 rounded-full'
					>
						<ArrowLeft />
					</button>
					<button
						onClick={() => swiperRef.current?.slideNext()} // Go to the next slide
						className='custom-next z-50 absolute right-0 top-1/2 -translate-y-1/2 transform  text-black p-3 rounded-full'
					>
						<ArrowRight />
					</button>
					<div className='swiper-pagination-bullets'>
						<div className='swiper-pagination-bullet'>
							<span></span>
						</div>
					</div>
				</Swiper>
			</div>
		</div>
	)
}

export default BannerCarousel
