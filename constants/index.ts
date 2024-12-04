import { Heart, Home, Search, ShoppingCart, UserRound } from 'lucide-react'

export const navLinks = [
	{ route: '', name: 'Home', icon: Home },
	{ route: 'search', name: 'Search', icon: Search },
	{ route: 'cart', name: 'Cart', icon: ShoppingCart },
	{ route: 'favorites', name: 'Favorites', icon: Heart },
	{ route: 'account', name: 'Account', icon: UserRound },
]

export const products = [
	{
		id: 1,
		image: '/images/cart/cart.jpg',
		title: 'ESDY futbolka 1',
		price: 230000,
		slug: 'sdfklsdlkfjlksdfdj',
		quantity: 1,
		size: '2xl',
		color: 'Yashil/harbiy',
	},
	{
		id: 2,
		image: '/images/cart/cart.jpg',
		title: 'ESDY futbolka 2',
		price: 230000,
		slug: 'sdfklsdlkfjlksdfdj',
		quantity: 1,
		size: '2xl',
		color: 'Yashil/harbiy',
	},
	{
		id: 3,
		image: '/images/cart/cart.jpg',
		title: 'ESDY futbolka 3',
		price: 230000,
		slug: 'sdfklsdlkfjlksdfdj',
		quantity: 1,
		size: '2xl',
		color: 'Yashil/harbiy',
	},
]
