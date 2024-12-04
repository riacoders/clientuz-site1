import Image from 'next/image'
import { formatNumberWithSpaces } from '@/lib/utils'
import { Heart, ShoppingCart } from 'lucide-react'

function Card() {
	return (
		<div className='border-solid border border-[rgba(0, 0, 0, 0.07)]  w-full rounded-xl '>
			<div className='relative px-[12px] pt-[12px] pb-[6px]'>
				<Image
					src={'https://picsum.photos/200/300'}
					alt={'title'}
					className='w-full h-40 object-cover rounded-lg mb-4'
					width={200}
					height={150}
				/>
				<div className='absolute top-0 left-0 p-5 flex items-center justify-between w-full'>
					<span className=' flex justify-center items-center text-[12px] px-2 py-1 text-[#E07A5F] bg-white rounded-full '>
						TOP
					</span>
					<span className=' flex justify-center p-1 items-center bg-white  rounded-full'>
						<Heart size={18} color='#E07A5F' />
					</span>
				</div>
			</div>
			<div className='p-4 pt-0'>
				<h2 className='text-base  text-[#E07A5F] '>ESDY futbolka</h2>
				<div className='text-[12px]  text-[#1E1E1E] mb-[15px]'>
					{formatNumberWithSpaces(230000)} UZS
				</div>
				<button className='btn-i-primary text-[12px] w-full '>Batafsil</button>
				<button className='btn-i-none text-[12px] flex items-center gap-2 w-full p-0 mt-2'>
					<ShoppingCart size={16} />
					Savatga qo'shish
				</button>
			</div>
		</div>
	)
}

export default Card
