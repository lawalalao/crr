export const  authenticate =  async (phoneNumber, password) => {
	const resp = await fetch(process.env.REACT_APP_CHAP_CHAP_API_BASE_URL + "/authentication_token", {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"phoneNumber": phoneNumber,
			"password": password
		})
	})
	return resp.json()
}	

export const deliveryManInfo = async (deliveryManId) => {
	const resp = await fetch(process.env.REACT_APP_CHAP_CHAP_API_BASE_URL + "/delivery_men/" +deliveryManId, {
		method: "GET",
		headers: {
			'Content-Type': 'application/json',

			'Authorization': 'Bearer ' + localStorage.getItem('token')
		}
	})
	return resp.json()	
}

export const deliveryManHistory = async (deliveryManId) => {
	const resp = await fetch(process.env.REACT_APP_CHAP_CHAP_API_BASE_URL + "/delivery_men/" +deliveryManId + "/deliveries",  {
		method: "GET",
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem('token')
		}
	})
	return resp.json()	
}
export const deliveryManDeliveries = async (status) => {
	const resp = await fetch(process.env.REACT_APP_CHAP_CHAP_API_BASE_URL + "/deliveries?status="+ status, {
		method: "GET",
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem('token')
		}
	})
	return resp.json()	
}
export const updateDeliveryStatus = async (code, status) => {
	const resp = await fetch(process.env.REACT_APP_CHAP_CHAP_API_BASE_URL + "/deliveries/" +code,  {
		method: "PATCH",
		headers: {
			'Content-Type': 'application/merge-patch+json',
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem('token')
		},
		body: JSON.stringify({
			"status": status
		})
	})
	return resp.json()	
}