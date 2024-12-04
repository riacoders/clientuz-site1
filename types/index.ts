export interface ChildProps {
	children: React.ReactNode
}

export interface LngParams {
	params: { lng: string }
}

export enum Routes {
	HOME = '/',
	SEARCH = '/search',
	CART = '/cart',
	FAVORITES = '/favorites',
	ACCOUNT = '/account',
}

export interface ICard {
	id: number
	image: string
	title: string
	price: number
	slug: string
}

export interface ICartItem {
	id: number
	image: string
	title: string
	price: number
	slug: string
	quantity: number
	size: string
	color: string
}
