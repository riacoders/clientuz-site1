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
		<section>
			<div className='container mx-auto px-2.5'>
				<div className='pt-[16px] pb-[70px]'>
					<h1 className='text-2xl font-medium mb-[25px]'>
						Saralangan mahsulotlar
					</h1>
					<ul className='grid grid-cols-2 gap-2'>
						{Cards.map((card: ICard) => (
							<Card key={card.id} />
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
