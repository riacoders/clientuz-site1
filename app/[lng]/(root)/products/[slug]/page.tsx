import { formatNumberWithSpaces } from '@/lib/utils'
import { Heart, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

function Page() {
	return (
		<div className='flex flex-col gap-3 max-w-7xl w-full m-auto mt-10 sm:px-0 px-4'>
			<h1 className='sm:text-2xl text-xl font-semibold'>
				Mahsulot ma'lumotlari
			</h1>
			<div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-20 gap-10'>
				<div className='flex flex-col gap-5'>
					<div className='bg-[#F4F1DE] w-full sm:h-80 h-56 flex items-center justify-center rounded-xl'>
						<Image
							src={'/assets/nike.png'}
							alt='product-image'
							width={200}
							height={100}
						/>
					</div>
					<div className='grid grid-cols-4 gap-2'>
						<div className='bg-[#F4F1DE] aspect-square rounded-sm flex items-center justify-center'>
							<Image
								src={'/assets/nike.png'}
								alt='product-image'
								height={96}
								width={96}
								className='object-contain size-fit'
							/>
						</div>
						<div className='bg-[#F4F1DE] aspect-square rounded-sm flex items-center justify-center'>
							<Image
								src={'/assets/nike.png'}
								alt='product-image'
								height={96}
								width={96}
								className='object-contain size-fit'
							/>
						</div>
						<div className='bg-[#F4F1DE] aspect-square rounded-sm flex items-center justify-center'>
							<Image
								src={'/assets/nike.png'}
								alt='product-image'
								height={96}
								width={96}
								className='object-contain size-fit'
							/>
						</div>
						<div className='bg-[#F4F1DE] aspect-square rounded-sm flex items-center justify-center'>
							<Image
								src={'/assets/nike.png'}
								alt='product-image'
								height={96}
								width={96}
								className='object-contain size-fit'
							/>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-5'>
					<h1 className='text-2xl font-semibold text-[#E07A5F]'>
						Krassofka Gola
					</h1>
					<h3 className='sm:text-xl text-lg font-semibold'>
						{formatNumberWithSpaces(320000)} UZS
					</h3>
					<span className='flex items-center gap-2'>
						<p className='font-semibold'>Ranglar: </p>
						<p className='text-[#2A9D8F] font-medium'>Ko'k</p>
					</span>
					<div className='grid grid-cols-6 gap-3'>
						<div className='bg-[#F4F1DE] aspect-square rounded-sm flex items-center justify-center'>
							<Image
								src={'/assets/nike.png'}
								alt='product-image'
								height={96}
								width={96}
								className='object-cover w-4/5 size-fit'
							/>
						</div>
						<div className='bg-[#F4F1DE] aspect-square rounded-sm flex items-center justify-center'>
							<Image
								src={'/assets/nike.png'}
								alt='product-image'
								height={96}
								width={96}
								className='object-cover w-4/5 size-fit'
							/>
						</div>
						<div className='bg-[#F4F1DE] aspect-square rounded-sm flex items-center justify-center'>
							<Image
								src={'/assets/nike.png'}
								alt='product-image'
								height={96}
								width={96}
								className='object-cover w-4/5 size-fit'
							/>
						</div>
					</div>
					<span className='flex items-center gap-2'>
						<p className='font-semibold'>O'lchamlar: </p>
						<p className='text-[#2A9D8F] font-medium'>42</p>
					</span>
					<div className='grid grid-cols-8 gap-3'>
						<div className='bg-[#F4F1DE] aspect-square rounded-sm flex items-center justify-center'>
							<button className='btn-i-primary rounded-sm'>36</button>
						</div>
						<div className='bg-[#F4F1DE] aspect-square rounded-sm flex items-center justify-center'>
							<button className='btn-i-primary rounded-sm'>36</button>
						</div>
						<div className='bg-[#F4F1DE] aspect-square rounded-sm flex items-center justify-center'>
							<button className='btn-i-primary rounded-sm'>36</button>
						</div>
						<div className='bg-[#F4F1DE] aspect-square rounded-sm flex items-center justify-center'>
							<button className='btn-i-primary rounded-sm'>36</button>
						</div>
						<div className='bg-[#F4F1DE] aspect-square rounded-sm flex items-center justify-center'>
							<button className='btn-i-primary rounded-sm'>36</button>
						</div>
						<div className='bg-[#F4F1DE] aspect-square rounded-sm flex items-center justify-center'>
							<button className='btn-i-primary rounded-sm'>36</button>
						</div>
						<div className='bg-[#F4F1DE] aspect-square rounded-sm flex items-center justify-center'>
							<button className='btn-i-primary rounded-sm'>36</button>
						</div>
					</div>
					<div className='flex items-center gap-4'>
						<button className='btn-i-primary rounded-lg flex-auto flex items-center gap-3 py-2'>
							<ShoppingCart /> Savatga qo'shish
						</button>
						<button className='btn-i-noactive rounded-lg py-2 px-5'>
							<Heart />
						</button>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-5'>
				<h1 className='sm:text-2xl text-xl font-semibold'>Xususiyatlar</h1>
				<span className='flex items-center gap-2'>
					<p>Xususiyat1: </p>
					<p className='font-medium'>default</p>
				</span>
				<span className='flex items-center gap-2'>
					<p>Xususiyat2: </p>
					<p className='font-medium'>default</p>
				</span>
				<span className='flex items-center gap-2'>
					<p>Xususiyat3: </p>
					<p className='font-medium'>default</p>
				</span>
				<span className='flex items-center gap-2'>
					<p>Xususiyat4: </p>
					<p className='font-medium'>default</p>
				</span>
			</div>
			<div className='flex flex-col gap-3 mt-5'>
				<h1 className='sm:text-2xl text-xl font-semibold'>Izoh</h1>
				<p className='text-justify'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Exercitationem dignissimos reiciendis illum suscipit odit cupiditate,
					iure quo inventore nobis veniam itaque, expedita, ut beatae commodi
					similique aliquam deserunt corrupti ratione alias nihil in vero sunt
					pariatur. Blanditiis sunt magni exercitationem, sapiente dolorum
					architecto possimus perferendis eligendi nobis nihil ut asperiores,
					placeat ad reiciendis minima qui iste alias aut incidunt enim vero.
					Dicta voluptatibus minima perferendis tempora vitae aspernatur, omnis
					culpa magnam ab laudantium itaque doloremque quam! Consequuntur
					voluptatem architecto consectetur recusandae. Iure nisi architecto
					minus itaque ab at ipsam mollitia qui, ipsa reiciendis ad, dolorum
					expedita eos nulla rerum recusandae. Doloremque, veritatis. Pariatur,
					rem nobis quis cum molestiae, exercitationem modi unde odit expedita
					debitis magni voluptatum adipisci quam maiores. Delectus fugit
					voluptates itaque placeat tenetur. Quidem, inventore non deserunt hic
					ipsa consectetur eius deleniti exercitationem a explicabo ipsum maxime
					earum corporis consequuntur itaque magnam voluptatibus delectus odio
					unde quia. Nulla rerum corrupti ex molestias impedit nesciunt
					obcaecati, aut molestiae, similique accusamus quis nisi? Numquam
					tempora asperiores, ea autem eius qui magnam non hic. Quod repellat
					nesciunt sit, atque omnis quas tempora placeat molestias voluptate
					eveniet quibusdam aspernatur incidunt voluptatibus eum. Debitis rerum
					ab, magnam architecto ipsam voluptate praesentium porro voluptatem!
				</p>
			</div>
		</div>
	)
}

export default Page
