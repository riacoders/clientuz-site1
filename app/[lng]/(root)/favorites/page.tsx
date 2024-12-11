import { LngParams, ICard } from '@/types'
import Card from '../_components/card'

const Cards: ICard[] = [
	{
		id: 1,
		image: '/images/favorites/card.jpg',
		title: 'ESDY futbolka',
		price: 230000,
		slug: 'sdfklsdlkfjlksdfdj',
	},
	{
		id: 2,
		image: '/images/favorites/card.jpg',
		title: 'ESDY futbolka',
		price: 230000,
		slug: 'sdfklsdlkfjlksdfdj',
	},
	{
		id: 3,
		image: '/images/favorites/card.jpg',
		title: 'ESDY futbolka',
		price: 230000,
		slug: 'sdfklsdlkfjlksdfdj',
	},
	{
		id: 4,
		image: '/images/favorites/card.jpg',
		title: 'ESDY futbolka',
		price: 230000,
		slug: 'sdfklsdlkfjlksdfdj',
	},
	{
		id: 5,
		image: '/images/favorites/card.jpg',
		title: 'ESDY futbolka',
		price: 230000,
		slug: 'sdfklsdlkfjlksdfdj',
	},
	{
		id: 6,
		image: '/images/favorites/card.jpg',
		title: 'ESDY futbolka',
		price: 230000,
		slug: 'sdfklsdlkfjlksdfdj',
	},
	{
		id: 7,
		image: '/images/favorites/card.jpg',
		title: 'ESDY futbolka',
		price: 230000,
		slug: 'sdfklsdlkfjlksdfdj',
	},
	{
		id: 8,
		image: '/images/favorites/card.jpg',
		title: 'ESDY futbolka',
		price: 230000,
		slug: 'sdfklsdlkfjlksdfdj',
	},
	{
		id: 9,
		image: '/images/favorites/card.jpg',
		title: 'ESDY futbolka',
		price: 230000,
		slug: 'sdfklsdlkfjlksdfdj',
	},
	{
		id: 10,
		image: '/images/favorites/card.jpg',
		title: 'ESDY futbolka',
		price: 230000,
		slug: 'sdfklsdlkfjlksdfdj',
	},
	{
		id: 11,
		image: '/images/favorites/card.jpg',
		title: 'ESDY futbolka',
		price: 230000,
		slug: 'sdfklsdlkfjlksdfdj',
	},
	{
		id: 12,
		image: '/images/favorites/card.jpg',
		title: 'ESDY futbolka',
		price: 230000,
		slug: 'sdfklsdlkfjlksdfdj',
	},
]

export default async function Favorites(props: LngParams) {
	const {} = props

	return (
		<div className='flex flex-col gap-3 max-w-7xl w-full m-auto mt-10 sm:px-0 px-4'>
			<h1 className='sm:text-2xl text-xl font-semibold'>
				Saralangan mahsulotlar
			</h1>
			<ul className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mt-5'>
				{Cards.map((card: ICard) => (
					<Card key={card.id} />
				))}
			</ul>
		</div>
	)
}
