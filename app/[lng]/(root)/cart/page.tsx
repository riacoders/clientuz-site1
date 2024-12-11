'use client'

import { formatNumberWithSpaces } from '@/lib/utils'
import { Heart, Minus, Plus, Trash } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Cart() {
	const [products, setProducts] = useState([
		{
			id: 1,
			name: 'ESDY fudbolka',
			price: 230000,
			size: '2XL',
			color: 'Yashil/harbiy',
			image: 'https://picsum.photos/100/100',
			count: 1,
		},
		{
			id: 2,
			name: 'Nike T-shirt',
			price: 200000,
			size: 'L',
			color: 'Qora',
			image: 'https://picsum.photos/100/101',
			count: 1,
		},
	])

	// Function to handle increment
	const increment = (id: number) => {
		setProducts(prevProducts =>
			prevProducts.map(product =>
				product.id === id ? { ...product, count: product.count + 1 } : product
			)
		)
	}

	// Function to handle decrement
	const decrement = (id: number) => {
		setProducts(prevProducts =>
			prevProducts.map(product =>
				product.id === id && product.count > 1
					? { ...product, count: product.count - 1 }
					: product
			)
		)
	}

	// Function to calculate total price
	const calculateTotal = () => {
		return products.reduce(
			(total, product) => total + product.price * product.count,
			0
		)
	}

	return (
		<section>
			<div className='container mx-auto px-2.5'>
				<div className='pt-[16px] pb-[70px]'>
					<div className='flex items-center justify-between'>
						<h1 className='sm:text-2xl text-xl font-medium mb-[25px]'>
							Savatchadagi mahsulotlar
						</h1>
						<button className='btn-i-primary sm:flex hidden'>
							Davom etish
						</button>
					</div>
					<ul>
						{products.map(product => (
							<li
								key={product.id}
								className='flex gap-3 py-3 border-b border-solid border-[#00000012]'
							>
								<Image
									src={product.image}
									alt={product.name}
									className='size-24 rounded-lg'
									loading='lazy'
									width={96}
									height={96}
								/>
								<div className='flex flex-col flex-auto'>
									<div className='flex items-center justify-between w-full'>
										<p className='font-medium'>
											{formatNumberWithSpaces(product.price)} UZS
										</p>
										<span className='px-2 py-1 rounded-full bg-[#E07A5F] text-white font-medium text-[12px]'>
											TOP
										</span>
									</div>
									<p className='font-medium text-[#E07A5F]'>{product.name}</p>
									<span className='flex items-center gap-2'>
										<p className='text-sm text-muted-foreground'>O'lcham:</p>
										<p className='font-medium'>{product.size}</p>
									</span>
									<span className='flex items-center gap-2'>
										<p className='text-sm text-muted-foreground'>Rang:</p>
										<p className='font-medium'>{product.color}</p>
									</span>
									<div className='flex mt-2 items-center justify-between'>
										<span className='flex items-center gap-2'>
											<button
												className='btn-i-primary rounded-full p-1'
												onClick={() => decrement(product.id)}
											>
												<Minus size={16} />
											</button>
											<p>{product.count}</p>
											<button
												className='btn-i-primary rounded-full p-1'
												onClick={() => increment(product.id)}
											>
												<Plus size={16} />
											</button>
										</span>
										<span className='flex items-center gap-4'>
											<button className='btn-i-none p-1'>
												<Trash size={20} color='red' />
											</button>
											<button className='btn-i-none p-1'>
												<Heart size={20} color='#E07A5F' />
											</button>
										</span>
									</div>
								</div>
							</li>
						))}
					</ul>
					<span className='flex items-center justify-end mt-2 font-medium'>
						<h4>Jami: {formatNumberWithSpaces(calculateTotal())} UZS</h4>
					</span>
					<button className='btn-i-primary sm:hidden flex mt-5 w-full'>
						Davom etish
					</button>
				</div>
			</div>
		</section>
	)
}
