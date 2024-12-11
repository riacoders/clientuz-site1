import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

const intlMiddleware = createMiddleware({
	locales: ['uz', 'en', 'ru'],
	defaultLocale: 'uz',
})

export function middleware(req: NextRequest) {
	const intlResponse = intlMiddleware(req)

	const { pathname } = req.nextUrl

	const publicRoutes = [
		'/',
		'/:lng',
		'/:lng/cart',
		'/:lng/contact',
		'/:lng/search',
		'/:lng/favorites',
		'/:lng/pay',
		'/:lng/pay/success',
		'/:lng/info',
		'/:lng/products',
		'/:lng/products/:slug',
	]

	const isPublic = publicRoutes.some(route => {
		const regex = new RegExp(`^${route.replace(/:\w+/g, '[^/]+')}$`)
		return regex.test(pathname)
	})

	// Locale va sahifa holatini tekshirish
	const locale = req.nextUrl.locale || 'uz'
	const isLoginPage = pathname === `/${locale}/login`
	const isRegisterPage = pathname === `/${locale}/register`
	const isNotFoundPage = pathname === `/${locale}/not-found`

	// Autentifikatsiya holatini tekshirish
	const token = req.cookies.get('accessToken')
	const isAuthenticated = !!token

	// Agar autentifikatsiya qilmagan bo'lsa va login yoki boshqa ruxsat etilgan sahifada bo'lmasa
	if (isAuthenticated && isLoginPage && isPublic) {
		// Login sahifasiga yo'naltirish
		return NextResponse.redirect(new URL(`/${locale}/login`, req.url))
	}

	// Ro'yxatdan o'tmagan foydalanuvchini faqat "Register" tugmasi bosilganda `/register`ga o'tkazadi
	if (!isAuthenticated && isRegisterPage) {
		return intlResponse
	}

	// Public bo'lmagan sahifaga kirishni taqiqlash
	if (!isPublic && !isNotFoundPage) {
		return NextResponse.redirect(new URL(`/${locale}/not-found`, req.url))
	}

	return intlResponse
}

export const config = {
	matcher: ['/((?!.*\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
