const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const API_REQUEST = {
	register: `${baseUrl}/api/account/customer/register/`, // POST
	profile: `${baseUrl}/api/account/customer/profile/`, // GET, PUT and PATCH
	product: `${baseUrl}/api/product/customer/`, // GET
}

export default API_REQUEST
